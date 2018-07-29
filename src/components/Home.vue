<template>
    <div id="home">

      <div id="home-container">

        <h1 id="home-title">Web developer</h1>

        <p id="home-text">
          Hello, my name is <strong>Hitesh</strong>.
        </p>
        <p>
          
        </p>

      </div>

    </div>
</template>






<script>

export default {
  name: 'Home',
  data(){
    return{
      
    }
  },

}
</script>

<style >

  /* #home-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    margin: 1em;
    height: 80vh;
    background-color: white;
    grid-template-areas: 
      ". home-title home-title ."
      ". . . ."
      ". home-text home-text ."
      ". home-text home-text .";
  } */

  #home-title{
    /* grid-area: "home-title"; */

    text-align: center;
    margin: 1.5em 0em;
    padding: 1.5em 1em;
  }

  #home-text{
    /* grid-area: "home-text"; */

    text-align: center;
    margin: 1em 0em;
    padding: 1em 1em;
  }

</style>
