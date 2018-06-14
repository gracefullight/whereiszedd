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

const isBefore = (a, b) => {
  if (a && moment(a).isValid()) {
    return moment(a).isBefore(b) ? b : a
  }
  return b
}
const isAfter = (a, b) => {
  if (a && moment(a).isValid()) {
    return moment(a).isAfter(b) ? b : a
  }
  return b
}

export default {
  components: {
    Jumbo,
    Item,
    Pagination
  },

  data () {
    return {
      events: [],
      startDate: '',
      endDate: ''
    }
  },

  async created () {
    const today = moment().format('YYYY-MM-DD')
    let startDate = isBefore(this.$route.query.startDate, today)
    let endDate = isAfter(this.$route.query.endDate, moment(today).add(3, 'month').format('YYYY-MM-DD'))

    try {
      const response = await this.$axios.$get(`https://rest.bandsintown.com/artists/zedd/events?app_id=whereiszedd`, {
        params: {
          date: `${startDate},${endDate}`
        }
      })

      this.startDate = startDate
      this.endDate = endDate
      this.events = response
    } catch (e) {
      this.$toast.error("Error occured while fetching data")
      this.$toast.error("Please try again")
    }
  }
}
</script>
