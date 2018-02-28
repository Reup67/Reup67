<template >
  <div>
    <section id="footTwo">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 socialPartTwo">
            <div class="container icons">
              <div class="row">
                <div class="col-lg-4">
                      <img src="../assets/Lnkd.png" alt="">
                </div>
                <div class="col-lg-3">
                      <img src="../assets/Me.png" alt="">
                </div>
                <div class="col-lg-5">
                  <p class="lang">English</p>
                </div>
              </div>
            </div>

          </div>
          <div class="col-lg-5 logo2">
            <img src="../assets/footLogo.png" alt="">
          </div>
          <div class="col-lg-5 officialPage">
            <p>© YGROUP companies 2017</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style>
  #footTwo{
    width: 100%;
    height: 110px;
    background:#000;
  }
  .socialPartTwo{
    width: 100%;
    height: 110px;
  }
  .officialPage{
    padding-left: 21%;
    width:450px;
    color: #fff;
    font-size: 17px;
    padding-top: 35px;
  }
  .logo2{
    width: 100%;

  }
  .logo2 img{
    margin-left: 58%;
    margin-top: 36px;
  }
  .icons{
    margin-top: 38px;
  }
  .lang{
    margin-left: 50px;
    margin-top:3px;
    color: #fff;
  }
  .lang::before{
    content: '';
    position: absolute;
    width: 10px;
    height: 28px;
    background: none;
    left: 48px;
    border-left: 1.5px solid #fff;
  }
  .lang::after{
    content: '';
    position: absolute;
    width: 10px;
    height: 5px;
    background-image: url('../assets/open.png');
    background-color: #000;
    margin-left:66px;
    top: 14px;
  }
</style>
