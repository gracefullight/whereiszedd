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

const ENDPOINT = "https://rest.bandsintown.com/artists/zedd/events?app_id=whereiszedd"
const TODAY = moment().format('YYYY-MM-DD')
const THREE_MONTH_LATER = moment(TODAY).add(3, 'month').format('YYYY-MM-DD')
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
    if (this.events.length === 0) {
      await this.getEvents()
    }
  },

  methods: {
    async getEvents () {
      let startDate = isBefore(this.$route.query.startDate, TODAY)
      let endDate = isAfter(this.$route.query.endDate, THREE_MONTH_LATER)

      try {
        const response = await this.$axios.$get(ENDPOINT, {
          params: {
            date: `${startDate},${endDate}`
          }
        })

        this.startDate = startDate
        this.endDate = endDate
        this.events = response
      } catch (e) {
        this.$toast.error("데이터를 가져오는 도중 오류가 발생했습니다")
        this.$toast.error("나중에 다시 시도해주세요")
      }
    }
  }

}
</script>
