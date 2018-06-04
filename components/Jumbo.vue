<template>
  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading font-weight-bold">제드 어디있니?</h1>
      <p class="lead">지금 바로 검색하세요</p>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6 text-left">
            <label for="inputEmail4">시작일</label>
            <input
              type="date"
              class="form-control"
              placeholder="StartDate"
              v-validate="'required|min:year'"
              v-model="startDate"
            />
          </div>
          <div class="form-group col-md-6 text-left">
            <label for="inputPassword4">종료일</label>
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
            <button type="submit" class="btn btn-outline-light btn-block">검색</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  props: ['startDate', 'endDate']
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
  background-position: bottom center;
  background-size: cover;
  color: white;
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
