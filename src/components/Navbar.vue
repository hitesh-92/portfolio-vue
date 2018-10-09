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
      <div id="nav-small-sign">
        <span>X</span>
      </div>
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
  }
}
</script>

<style scoped>

  @media only screen and (min-width: 600px){
    ul{
      padding: 0 !important;
      margin-top: 35%;
    }

    li{
      list-style-type: none !important;
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

    img{
      width: 90px;
      height: 90px;
      border-radius: 50px;
      margin-bottom: 1em;
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

    .nav-small{
      display: none;
    }
  }

    @media only screen and (max-width: 600px){

      #navbar{
        display: inline-block;
        margin: 0;
        padding: 10px;
        height: 100%;
        width: 100vw;
        
      }

      .nav-list{
        display: none;
      }

      .nav-small{
        /* border-color: red; */
        /* background-color: aqua; */
      }

      #nav-small-name{
        padding-left: 10px;
        float: left;

        border: 1px solid red;
      }

      #nav-small-sign{
        float: right;
      }

    }
</style>