<template>
  <div id="navbar" class="flex-sm-column">

    <ul class="nav-list">

      <!-- <li id="nav-pic">
        <img src="#" alt="">
      </li> -->

      <li>
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
      /* background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 89, 255, 0.3), rgba(0, 0, 0, 0));  */
      background: rgba(0,89,255, 0.13)
    }
</style>