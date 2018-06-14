<template>
  <main>
    <Jumbo :startDate="startDate" :endDate="endDate" />
    <div class="bg-light py-5">
      <div class="container">
        <Item v-for="evt in events" :key="evt.id" :evt="evt"/>
        <hr />
        <!-- <Pagination /> -->
      </div>
    </div>
  </main>
</template>

<script>
import Item from "~/components/Item.vue"
import Jumbo from "~/components/Jumbo.vue"
import Pagination from "~/components/Pagination.vue"
import moment from "moment"

export default {
  components: {
    Jumbo,
    Item,
    Pagination
  },

  data () {
    return {
      startDate: '',
      endDate: ''
    }
  },

  async asyncData ({ app, route, data }) {
    const today = moment().format('YYYY-MM-DD')
    let startDate = route.query.startDate || today
    let endDate = route.query.endDate || moment(today).add(3, 'month').format('YYYY-MM-DD')

    const oneYearLater = moment(today).add(1, 'year').format('YYYY-MM-DD')

    if (moment(startDate).isBefore(today)) {
      startDate = today
    }

    if (moment(endDate).isAfter(oneYearLater)) {
      endDate = oneYearLater
    }

    try {
      const response = await app.$axios.$get(`https://rest.bandsintown.com/artists/zedd/events?app_id=whereiszedd&date=${startDate},${endDate}`)
      console.log(response)
      return {
        events: response,
        startDate,
        endDate
      }
    } catch (e) {
      app.$toast.error("데이터를 가져오는 도중 오류가 발생했습니다")
      app.$toast.error("나중에 다시 시도해주세요")
    }
  }
}
</script>
