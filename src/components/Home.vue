<template>
    <div id="home">
      <h1 id="home-title">Web developer</h1>

     
      <p>{{ intro }}</p>

    </div>
</template>






<script>

export default {
  name: 'Home',
  data(){
    return{
      intro: 'text'
    }
  },

}
</script>

<style scoped>

  #home-title{
    text-align: center;
  }

</style>
