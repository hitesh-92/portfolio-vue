<template>
  <div id="navbar">


    <!-- Desktop -->
    <ul class="nav-list">

      <li id="nav-list-name">
        <p id="name">Hitesh Gohil</p>
      </li>

      <hr>

      <li @click="selectHome()">
        <span :class="[{active: homeStatus}]"><i class="fas fa-home"></i>  Home</span>
      </li>

      <hr>

      <li @click="selectAbout()">
        <span :class="[{active: aboutStatus}]"><i class="far fa-user-circle"></i>  About</span>
      </li>

      <hr>

      <li @click="selectProjects()">
        <span :class="[{active: projectsStatus}]"><i class="far fa-file-alt"></i>  Projects</span>
      </li>

      <hr>

      <li @click="selectContact()">
        <span :class="[{active: contactStatus}]"><i class="far fa-envelope-open"></i>  Contact</span>
      </li>

      <hr>
      
    </ul>
    <!-- /Desktop -->

    <!-- Mobile -->
    <div class="nav-small">

      <p id="nav-small-name" :class="[{navSmallNameColor: navOverlay}]" >Hitesh Gohil</p>

      <div id="nav-small-sign" @click="navOverlay = !navOverlay">
        <i v-show="!navOverlay" class="fas fa-bars"></i>
      </div>

    </div>

    <div class="nav-small-menu" v-show="navOverlay" >

      <i class="fas fa-times" @click="navOverlay = !navOverlay"></i>      

      <ul class="nav-small-list">
        <li @click="[selectHome(), closeOverlay()]">
          <span :class="[{active: homeStatus}]"><i class="fas fa-home"></i>  Home</span>
        </li>

        <li @click="[selectAbout(), closeOverlay()]">
          <span :class="[{active: aboutStatus}]"><i class="far fa-user-circle"></i>  About</span>
        </li>

        <li @click="[selectProjects(), closeOverlay()]">
          <span :class="[{active: projectsStatus}]"><i class="far fa-file-alt"></i>  Projects</span>
        </li>

        <li @click="[selectContact(), closeOverlay()]">
          <span :class="[{active: contactStatus}]"><i class="far fa-envelope-open"></i>  Contact</span>
        </li>
      </ul>
      <!-- /Mobile -->

    </div>

  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return{
      navOverlay: false
    }
  },

  props: {
    selectHome: Function,
    selectAbout: Function,
    selectProjects: Function,
    selectContact: Function,
    homeStatus: Boolean,
    aboutStatus: Boolean,
    projectsStatus: Boolean,
    contactStatus: Boolean
  },

  methods: {

    closeOverlay(){
      this.navOverlay = false;
    }

  }

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
        transition: 0.5s ease-in-out;
        transition-timing-function: ease-in;
        color:rgb(00, 162, 205);
        padding: 0.05em 0.4em;
        border-radius: 5px;
        font-size: 1.05em;
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
      
      .navbar{
        padding:0;
        margin:0;
        transition: all 1s ease-in-out;
      }

      .nav-list{
        display: none;
      }

      #nav-small-name{
        padding-left: 10px;
        float: left;
      }

      .navSmallNameColor{
        color: rgb(0, 108, 209) !important;
      }

      #nav-small-sign{
        float: right;
      }

      .nav-small-menu{
        z-index: 99;
        text-align: center;
        box-shadow: 10px 15px 50px 20px rgb(55, 61, 66);

        position:fixed;
        position: absolute;
        height: 100%;
        width:100%;
        background:rgba(80, 80, 80, 0.95);
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
        padding: 1.25em 0em;
        margin: 1.5em 0;
        margin-right: 6em;
        margin-left: 4em;
        background-color: rgb(75, 75, 75);
        border-radius: 10px;
        font-weight: lighter;
        font-size: 0.85em;
      }

      .active{
        color: rgb(84, 166, 172);
      }

      .fa-bars{
        margin: 1em;
        color: rgb(0, 195, 255);
      }

      .fa-times{
        color: red;
        float: right;
        margin: 1em;
      }

    }

  

</style>