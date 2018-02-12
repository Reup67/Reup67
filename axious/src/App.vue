<template>
    <div id="app">
      <div class="head grid">
        <div class="boxes1">
          <p class="p1" @click="home"> Vue axious</p>
        </div>
        <div class="boxes2">
          <p class="p2" @click="show">Sign up</p>
        </div>
        <div class="boxes3">
          <p class="p3" @click="show2">Sign in</p>
        </div>
        <div class="boxes4">
          <p class="p4">Dashboards</p>
        </div>
      </div>
      <Test2 v-if="showSign"></Test2>
      <Test v-if="showUp"></Test>
     </div>
</template>

<script>
import Test from './components/Test.vue';
import Test2 from './components/Test2.vue';
// import Test3 from './components/Test3.vue';
// import Test4 from './components/Test4.vue';
    export default {
        data(){
            return{
              showSign:false,
              showUp:false
            };
        },
        components:{
            Test,
            Test2,
            // Test3,
            // Test4

        },
        methods:{
            show(){
              this.showSign = true;
              this.showUp = false;
            },
            home(){
              this.showSign = false;
              this.showUp = false;
            },
            show2(){
              this.showUp = true;
              this.showSign = false;
            }
            // change(){
            //     if ( this.showMe == false) {
            //         this.showMe = true;
            //     }else{
            //         this.showMe = false;
            //     }
            // }
        }
    }
</script>

<style>

   /* p{
        position: absolute;
    }
    .div3{
        width: 100%;
        height: 90px;
        background-color:   lightpink;
        position: absolute;
    }
    .a1{
        margin-left: 20%;
        margin-top: 35px;
        position: absolute;
    }
    .a2{
        margin-left: 30%;
        margin-top: 35px;
        position: absolute;
    }
    .a3{
        margin-left: 40%;
        margin-top: 35px;
        position: absolute;
    }*/
    .head{
      width: 100%;
      height: 80px;
      background: #5d0555;
    }
    .grid{
      display: grid;
    }
    .p1{
      color: #fff;
      font-size: 18px;
      margin-left: 10%;
      margin-top: 25px;
      cursor: pointer;
    }
    .p2{
      color: #de0d0d;
      font-size: 18px;
      margin-left: 65%;
      margin-top: -38px;
      position: absolute;
      cursor: pointer;
    }
    .p3{
      color: #fff;
      font-size: 18px;
      margin-left: 73%;
      margin-top: -42px;
      position: absolute;
      cursor: pointer;
    }
    .p4{
      color: #fff;
      font-size: 18px;
      margin-left: 88%;
      margin-top: -46px;
      position: absolute;
      cursor: pointer;
    }
</style>
