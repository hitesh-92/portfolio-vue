<template>
  <div id="navbar" class="flex-sm-column">

    <ul class="nav-list">

      <li id="nav-pic">
        <img src="https://images.pexels.com/photos/1081235/pexels-photo-1081235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
      </li>

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
  },

  data: function() {
    return{

    }
  },

  methods: {
    homeActive(){
      if(homeStatus){
        return{
          color: 'red'
        }
      }
    }
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

    .link{
      color: red
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
      text-shadow: 0.5px 0.5px 3px rgb(93, 115, 121);
      color: rgb(100, 100, 100);
      font-family: 'Ubuntu', sans-serif;
      font-weight: 500;
    }

    .active{
      box-sizing: border-box;
      transition: 1s ease-in-out;
      transition-timing-function: ease-in;
      color:rgb(0, 162, 255);
      border-right: 1.5px solid rgb(124, 188, 207);
      padding: 0px 5px;
      cursor: pointer;
    }
   
</style>