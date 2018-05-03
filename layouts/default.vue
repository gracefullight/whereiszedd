<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}

body {
  padding-top: 54px;
  margin-bottom: 60px;
}

body > .container {
  padding: 60px 15px 0;
}

@media (min-width: 992px) {
  body {
    padding-top: 56px;
  }
}

.pagination {
  margin-bottom: 15px;
}
</style>
