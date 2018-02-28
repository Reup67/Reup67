<template>
  <div>
    <section id="items">
      <Second></Second>
      <First></First>
      <First></First>
      <First></First>
      <Second></Second>
      <First></First>
      <First></First>
      <First></First>

      <div class="circles">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <img src="../assets/ellipse1.png" alt="">
            </div>
            <div class="col-lg-3">
              <img src="../assets/ellipse2.png" alt="">
            </div>
            <div class="col-lg-3">
              <img src="../assets/ellipse3.png" alt="">
            </div>
            <div class="col-lg-3">
              <img src="../assets/ellipse4.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import First from '../components/First';
import Second from '../components/Second';
export default {
  components:{
    Second,
    First
  }
}
</script>
<style>
    #items{
      width: 100%;
      background: #f8f8f8;
      height: 2700px;
    }
    .circles{
      width: 120px;
      margin: 0 auto;
      margin-top: 60px;
    }
</style>
