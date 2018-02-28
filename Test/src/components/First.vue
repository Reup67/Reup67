<template >
  <div>
    <section id="trips">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 card">
            <div class="container">
              <div class="row">
                <div class="col-lg-9 leftSide" >
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6">
                        <img src="../assets/IMG.png" alt="" class="img1">
                      </div>
                      <div class="col-lg-6 textPart">
                        <p class="eventName">Event name</p>
                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum sapien at consectetur mollis. Nullam ornare, felis vehicula porta semper, mi lorem accumsan nulla,
                          id ultricies felis nunc id eros. Sed suscipit odio non velit...
                          Nullam ornare, felis vehicula porta
                          </p>
                        <div class="social">
                          <div class="container">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="socialMedia">
                                  <img src="../assets/Linkedin.png" alt="">

                                  <img src="../assets/Facebook.png" alt="">

                                  <img src="../assets/Twitter.png" alt="">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 rightSide">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-10 conditions1">
                        <div class="container">
                          <div class="row">
                            <div class="col-lg-4 images">
                              <img src="../assets/Date.png" alt="">
                            </div>
                            <div class="col-lg-8">
                              <p class="data">June 15, 2018</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-10 conditions2">
                        <div class="container">
                          <div class="row">
                            <div class="col-lg-4 images">
                              <img src="../assets/Ticket-cost.png" alt="">
                            </div>
                            <div class="col-lg-8">
                              <p class="data">Free</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-10 conditions3">
                        <div class="container">
                          <div class="row">
                            <div class="col-lg-4 images">
                              <img src="../assets/Time.png" alt="">
                            </div>
                            <div class="col-lg-8">
                              <p class="data">13:00 - 14:00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <button class="added">Add to calendar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style>
.img1{
  margin-left: -45px;
  width: 115%;
  height: 350px;
}
.card{
  width: 100%;
  height: 350px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-top: 15px;

}
.leftSide{
  width: 100%;
  height: 350px;

}
.textPart{
  border-right: 1px solid #e6e8e9;
  padding-left: 40px;
  padding-top: 20px;
}
.eventName{
  font-size: 30px;
  font-weight: 420;
}
.description{
  width: 320px;
  opacity: 0.9;
}
.socialMedia img{
  float: left;
  margin-left: 18px;
}
.socialMedia{
  margin-left: -36px;
  margin-top: 10px;
}
.data{
  width: 200px;
  margin-left: -10px;

}
.images{
  text-align: center;
    margin-left: -10px;
}
.conditions1{
  margin-top: 85px;
}
.conditions2{
  margin-top: 10px;
}
.conditions3{
  margin-top: 10px;
}
.added{
  width: 100%;
  height: 45px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 15px;
}

</style>
