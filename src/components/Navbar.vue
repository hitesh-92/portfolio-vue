<template>
  <div id="navbar">

    <ul class="nav-list">

      <li id="nav-list-name">
        <p id="name">Hitesh Gohil</p>
      </li>

      <hr>

      <li @click="selectHome()">
        <span :class="[{active: homeStatus}]">Home</span>
      </li>

      <hr>

      <li @click="selectAbout()">
        <span :class="[{active: aboutStatus}]">About</span>
      </li>

      <hr>

      <li @click="selectContact()">
        <span :class="[{active: contactStatus}]">Contact</span>
      </li>

      <hr>
      
    </ul>

    <div class="nav-small">

      <p id="nav-small-name">Hitesh Gohil</p>

      <div id="nav-small-sign" @click="navMenu()">

        <div class="menu-icon">
          <span></span>
        </div>

      </div>

    </div>

    <div class="nav-small-menu">
      <ul class="nav-small-list">

        <li @click="selectHome()">
          <span :class="[{active: homeStatus}]">Home</span>
        </li>

        <li @click="selectAbout()">
          <span :class="[{active: aboutStatus}]">About</span>
        </li>

        <li @click="selectContact()">
          <span :class="[{active: contactStatus}]">Contact</span>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    selectHome: Function,
    selectAbout: Function,
    selectContact: Function,
    homeStatus: Boolean,
    aboutStatus: Boolean,
    contactStatus: Boolean
  },
  methods: {
    navMenu(){
      var button = document.querySelector('.menu-icon');
      button.addEventListener('click', function (){
        button.classList.toggle('open');
      });
    }
  
  }
  /*
  
  */
}
</script>

<style scoped>

  @media only screen and (min-width: 700px){
    ul{
      padding: 0 !important;
      margin-top: 35%;
    }

    li{
      list-style-type: none;
      font-family: sans-serif;
      font-size: 1.15em;
      margin: 1em 0em;
    }

    li> span:hover{
      cursor: pointer;
    }

    li:hover > span{
      transition: 0.2s ease-in;
      color: rgb(0, 195, 255);
    }

    span{
      color: rgb(104, 152, 224);
    }

    #name{
      font-size: 1.2em;
      text-shadow: 0.5px 0.5px 1px rgb(93, 115, 121);
      color: rgb(100, 100, 100);
      font-family: 'Ubuntu', sans-serif;
      font-weight: 500;
      padding-bottom: 3em;
    }

    .active{
      box-sizing: border-box;
      transition: 1s ease-in-out;
      transition-timing-function: ease-in;
      color:rgb(0, 162, 255);
      border-right: 1.5px solid rgb(124, 188, 207);
      padding: 0.05em 0.4em;
      border-radius: 5px;
    }

    hr { 
      border: 0; 
      height: 1px; 
      background: rgba(0,89,255, 0.13)
    }

    .nav-small, .nav-small-menu{
      display: none;
    }


  }

    @media only screen and (max-width: 700px){

      /* .nav-small{

      } */

      .nav-list{
        display: none;
      }

      #nav-small-name{
        padding-left: 10px;
        float: left;
      }

      #nav-small-sign{
        float: right;
        margin-right: 15px;
      }

      /* Menu icon copied */
      .menu-icon {
        position: relative;
        top: 0.5em;
        display: block;
        width: 3.5em;
        height: 2.75em;
        cursor: pointer;
        /* to center */
        margin: 0em auto;
        float: none;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }

      .menu-icon > span {
        position: absolute;
        top: 50%;
        display: block;
        width: 90%;
        height: 0.2em;
        margin-top: -0.5em;
        background-color: rgb(107, 155, 170);
        border-radius: 3px;
      }

      .menu-icon > span:before,
      .menu-icon > span:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(108, 141, 151);
        border-radius: 3px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }

      .menu-icon > span:before {
        -webkit-transform: translateY(-1em);
        transform: translateY(-1em);
      }

      .menu-icon > span:after {
        -webkit-transform: translateY(1em);
      transform: translateY(1em);
      }

      /* OPENED */

      .menu-icon.open {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      .menu-icon.open > span:before {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
      }

      .menu-icon.open > span:after {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
      }

      /* nav menu items */

      .nav-small-menu{
        /* display: none; */
        z-index: 99;
        margin-top: 3.5em;
        text-align: center;
        transition: all 0.3s;
        box-shadow: 10px 15px 50px 20px rgb(55, 61, 66);

        position:fixed;
        height:100%;
        width:100%;
        background:rgba(80, 80, 80, 0.985);
        overflow:auto;
        z-index:99;
      }

      .nav-small-list{
        color: white;
        list-style-type: none;
        text-align: center;
        padding-top: 3em;
      }

      .nav-small-list > li{
        padding: 1.5em 0;
      }

      .active{
        color: red !important;
      }

    }
</style>