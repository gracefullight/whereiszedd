<template>
  <div class="row mb-2 pt-2 pb-2 border">
    <div class="col-md-4 map">
      <no-ssr>
        <l-map
          ref="map"
          :zoom=14
          :center="[evt.venue.latitude, evt.venue.longitude]"
          :options="mapOptions"
          >
          <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="[evt.venue.latitude, evt.venue.longitude]"></l-marker>
        </l-map>
      </no-ssr>
    </div>
    <div class="col-md-8" v-if="evt">
      <h3>{{ evt.venue.name }}</h3>
      <p>{{ parsedDate }} {{ evt.venue.city }}, {{ evt.venue.country }}</p>
      <a class="btn btn-outline-secondary" :href="evt.url" target="_blank">상세보기</a>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  props: ['evt'],

  data () {
    return {
      mapOptions: {
        attributionControl: false,
        scrollWheelZoom: false
      }
    }
  },

  computed: {
    parsedDate: function() {
      return moment(this.evt.datetime).format("YYYY-MM-DD HH:mm")
    }
  }
}
</script>
<style scoped>
.map {
  min-height: 15vh;
}
</style>
