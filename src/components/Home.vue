<template>
    <div id="home">

      <div id="home-container">

        <!-- <h1 id="home-title">Web developer</h1> -->

        <div id="home-text">
          <p>Hello, my name is <strong>Hitesh</strong></p>
          <p>Feel free to browse around and get it touch if you want to me ask me anything</p>
        </div>

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

  #home-container{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(8,1fr);
    margin: 1em;
    height: 80vh;
    /* background-color: white; */
    /* grid-template-areas: 
      ". . text . ."; */
    text-shadow: 0.75px 0.75px 0.75px white;
    color: rgb(134, 143, 141);
  }
  
  p > strong {
    color: rgb(109, 109, 109)
  }

  #home-text{
    /* grid-area: "text"; */
    grid-column: 2/5;
    grid-row: 3/5;

    text-align: center;

    /* border: 1px solid black; */
  }

</style>
