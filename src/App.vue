<template>
  <div id="app">
    <Navbar 
      id="app-nav"
      :selectHome="switchToHome"
      :selectAbout="switchToAbout"
      :selectContact="switchToContact"
      :homeStatus="appHome"
      :aboutStatus="appAbout"
      :contactStatus="appContact"
    />

    <div id="app-body">
      <Home
        id="app-home"
        v-if="appHome"
        :selectContact="switchToContact"
        />
      <About id="app-about" v-if="appAbout" />
      <Contact id="app-contact" v-if="appContact" />
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
      this.hideAll();
      this.appHome = true;     
    },
    switchToAbout(){
      this.hideAll();
      this.appAbout = true;
    },
    switchToContact(){
      this.hideAll();
      this.appContact = true;
    },
    hideAll(){
      this.appHome = false;
      this.appAbout = false;
      this.appContact = false;
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
    font-family: 'Ubuntu', sans-serif;
  }
  
  #app-body{
    background: linear-gradient(to bottom right, rgb(254, 255, 255) , rgb(137, 212, 255));
  }


  @media only screen and (min-width: 700px){
    
    #app{
      display: grid;
      grid-template-columns: 1fr 4fr;
      max-width: 100vw;
      margin: 0 auto;
      grid-template-areas: "app-nav app-body"
    }

    #app-nav{
      grid-area: 'app-nav';
      width: 100%;
      height: 100vh;
      text-align: center;
      box-sizing: border-box;
      border-right: 2px solid rgba(0, 89, 255, 0.13);
    }
    
    #app-body{
      grid-area: "app-body";
    }
  }


  @media only screen and (max-width: 700px){

    @viewport{
      height: 100%;
    }

    body{
      margin: 0;
      padding: 0;
      
    }

    #app{
      display: grid;
      grid-template-rows: 100% 1fr;
    }

    #app-body{
      grid-row: 2/3;
    }

    #app-nav{
      grid-row: 1/2;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100vw;
    }

    #app-about{
      min-height: 100vh;
    }

  }
</style>
