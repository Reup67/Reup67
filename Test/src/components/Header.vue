<template>
  <div>
    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-1 ">
            <img src="../assets/App.png" alt="" class="logo">
          </div>
          <div class="col-lg-10 " >
            <div class="menu-box">
              <ul class="header-items">
                <li >Team</li>
                <li class="secondItem">Events</li>
                <li >Careers</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-1 " >
            <img src="../assets/menu.png" alt="" class="menu">
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style media="screen">

header{
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  background: #f8f8f8;
}
body{
  margin: 0;
  padding: 0;
}
.logo{
  margin-left: 1.7%;
  cursor: pointer;
  margin-top: 25px;
}
.menu{
  margin-top: 28px;
  cursor: pointer;
  margin-left: 50%;
}
.header-items{
  width:34.4%;
  color: #000;
  list-style-type: none;
  margin-left: 37%;
  padding-top: 25px;
}
.header-items li{
  width: 20%;
  float: left;
  cursor: pointer;
  height: 55px;
  background: none;
  text-align: center;
}
.secondItem{
  border-bottom: 2px solid #82a7d2;
  color: #82a7d2;
}
</style>
