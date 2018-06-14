<template>
  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading font-weight-bold text-light">
        제드 어디있니?
      </h1>
      <p class="lead text-light">지금 바로 검색하세요</p>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6 text-left">
            <label for="startDate" class="text-light">시작일</label>
            <input
              type="date"
              class="form-control"
              placeholder="StartDate"
              v-validate="'required|min:year'"
              v-model="startDate"
            />
          </div>
          <div class="form-group col-md-6 text-left">
            <label for="endDate" class="text-light">종료일</label>
            <input
              type="date"
              class="form-control"
              placeholder="EndDate"
              v-validate="'required|min:year'"
              v-model="endDate"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <button type="submit" class="btn btn-outline-dark btn-block" @click="wait">검색</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  props: ['startDate', 'endDate'],

  methods: {
    wait () {
      this.$toast.show('준비 중입니다')
    }
  }
}
</script>
<style>
:root {
  --jumbotron-padding-y: 3rem;
}

.jumbotron {
  padding-top: var(--jumbotron-padding-y);
  padding-bottom: var(--jumbotron-padding-y);
  margin-bottom: 0;
  background-image: url("~/assets/zedd_bg.jpg");
  background-position: center calc(50% - 250px);
  background-repeat: no-repeat;
}

@media (min-width: 768px) {
  .jumbotron {
    padding-top: calc(var(--jumbotron-padding-y) * 2);
    padding-bottom: calc(var(--jumbotron-padding-y) * 2);
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron-heading {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}
</style>
