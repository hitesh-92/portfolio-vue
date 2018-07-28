<template>
  <div id="app">
    <Navbar 
      id="app-nav"
      :selectHome="switchToHome"
      :selectAbout="switchToAbout"
      :selectContact="switchToContact"

    />

    <div id="app-body">
      <Home id="app-home" v-if="appHome"/>
      <About id="app-about" v-if="appAbout" />
      <Contact id="app-contact" v-if="appContact" />

      <!-- <p>appHome: {{ appHome }}</p>
      <p>appAbout: {{ appAbout }}</p>
      <p>appContact: {{ appContact }}</p> -->

    </div>
    
  </div>
</template>


<script>
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

export default {
  name: 'App',
  data () {
    return {
      appHome: true,
      appAbout: false,
      appContact: false
    }
  },
  methods: {
    switchToHome(){
      this.appHome = true;
      this.appAbout = false;
      this.appContact = false;       
    },
    switchToAbout(){
      this.appHome = false;
      this.appAbout = true;
      this.appContact = false;      
    },
    switchToContact(){
      this.appHome = false;
      this.appAbout = false;
      this.appContact = true;
    }
  },
  components: {
    Navbar,
    Home,
    About,
    Contact
  }
  
  
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }

  #app{
    display: grid;
    grid-template-columns: 1fr 4fr;
    max-width: 100vw;
    margin: 0 auto;
    grid-template-areas: "app-nav app-body"

  }

  #app-nav{
    grid-area: 'app-nav';
    border-right: 2px solid rgb(124, 188, 207);
    width: 100%;
    height: 100vh;
    text-align: center;
    box-sizing: border-box;
  }
  
  #app-body{
    grid-area: "app-body";
    /* padding: 1em; */
    background: linear-gradient(to bottom right, rgb(254, 255, 255) , rgb(137, 212, 255));
  }

  #app-home{
    border: 2px solid purple;
  }

  #app-about{
    border: 2px solid green;
  }

</style>
