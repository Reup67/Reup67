<template>
  <div>
    <section id="secondMenu">
      <div class="container event-text">
        <div class="row">
            <div class="col" >
              <p>Events</p>
            </div>
        </div>
      </div>
      <div class="container menu2">
        <div class="row">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 leftPart">
                  <div class="thirdMenu">
                    <ul>
                      <li>Amsterdam</li>
                      <li>Barcelona</li>
                      <li>Madrid</li>
                      <li>New york</li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-4  rightPart">
                  <div class="thirdMenu-partTwo">
                    <ul>
                      <li>Data</li>
                      <li>
                          <img src="../assets/search.png" alt="">
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
#secondMenu{
  height: 343px;
  border-bottom: 1px solid #000;
}
.event-text{
  height: 275px;
  text-align: center;
  padding-top: 120px;
  font-size: 45px;
  text-transform: uppercase;
  font-weight: 420;
}
.menu2{
  height: 70px;
  background: #fff;
  width: 100%;
}
.leftPart{
  height: 70px;
  width: 100%;
  background: #fff;
}
.rightPart{
  height: 70px;
  background: #fff;
}
.thirdMenu ul li{
   float: left;
   margin-left:55px;
   cursor: pointer;
}
.thirdMenu ul{
  list-style-type: none;
  margin-left: 20.6%;
}
.thirdMenu-partTwo ul{
  list-style-type: none;
  margin-left: -70px;
}
.thirdMenu-partTwo ul li{
  float: left;
  margin-left: 50px;
  cursor: pointer;
}
</style>
