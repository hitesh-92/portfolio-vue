<template>
  <div id="app">

    <Navbar 
      id="app-nav"
      :selectHome="switchToHome"
      :selectAbout="switchToAbout"
      :selectProjects="switchToProjects"
      :selectContact="switchToContact"
      :homeStatus="appHome"
      :aboutStatus="appAbout"
      :projectsStatus="appProjects"
      :contactStatus="appContact"
    />

    <div id="app-body">
      <Home id="app-home" v-if="appHome" :selectContact="switchToContact"/>
      <About id="app-about" v-if="appAbout"/>
      <Projects id="app-projects"  v-if="appProjects"/>
      <Contact id="app-contact" v-if="appContact" />
    </div>
    
  </div>
</template>

<script>
  import Navbar from './components/Navbar';
  import Home from './components/Home';
  import About from './components/About';
  import Contact from './components/Contact';
  import Projects from './components/Projects';

  export default {
    name: 'App',
    data () {
      return {
        appHome: true,
        appAbout: false,
        appProjects: false,
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
      switchToProjects(){
        this.hideAll();
        this.appProjects = true;
      },
      switchToContact(){
        this.hideAll();
        this.appContact = true;
      },
      hideAll(){
        this.appHome = false;
        this.appAbout = false;
        this.appProjects = false;
        this.appContact = false;
      }
    },
    components: {
      Navbar,
      Home,
      About,
      Projects,
      Contact
    }
  }
</script>

<style>

  body{
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    overflow-y: scroll;
  }
  
  #app-body{
    background: linear-gradient(to bottom right, rgb(254, 255, 255) , rgb(137, 212, 255));
    height: 100%;
  }


  @media only screen and (min-width: 700px){
    
    #app{
      display: grid;
      grid-template-columns: 20% 4fr;
      max-width: 100vw;
      margin: 0 auto;
      grid-template-areas: "app-nav app-body"
    }

    #app-nav{
      grid-area: 'app-nav';
      width: 100%;
      height: 100vh;
      text-align: center;
    }
    
    #app-body{
      grid-area: "app-body";
      border-left: 2px solid rgb(206, 223, 255);
    }

    .app-about{
      margin-bottom: 10em;
    }

  }


  @media only screen and (max-width: 700px){

    body{
      margin: 0;
      padding: 0;
    }

    #app{
      display: grid;
      /* grid-template-rows: 100% 1fr; */ /* somehow works!? */
    }

    #app-body{
      grid-row: 2/3;
    }

    #app-nav{
      grid-row: 1/2;
      margin: 0;
      padding: 0;
      /* height: 100vh; */ /* somehow works!? */
      width: 100vw;
    }

  }
</style>
