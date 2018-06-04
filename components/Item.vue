<template>
  <div class="row">
    <div class="col-md-5">
      <no-ssr>
        <l-map :zoom=14 :center="[evt.venue.latitude, evt.venue.longitude]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="[evt.venue.latitude, evt.venue.longitude]"></l-marker>
        </l-map>
      </no-ssr>
    </div>
    <div class="col-md-7" v-if="evt">
      <h3>{{ evt.venue.name }}</h3>
      <p>{{ parsedDate }} {{ evt.venue.city }}, {{ evt.venue.country }}</p>
      <a class="btn btn-primary" href="#">View Project</a>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
    props: ['evt'],

    computed: {
      parsedDate: function() {
        return moment(this.evt.datetime).format("YYYY-MM-DD HH:mm")
      }
    }
}
</script>

