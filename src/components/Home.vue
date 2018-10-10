<template>
    <div id="home">

      <div id="home-container">
        
        <div id="home-text">
          <p>Hi there,</p>
          <p>I'm a self taught developer from Leicester</p>
          <p>I enjoy focusing on making web sites and apps using JavaScript</p>
          <p>I’m always looking for a challenge</p>
          <p>If there’s anything I could do for you or help you with </p>
          <p>contact me here</p>
        </div>

        <div id="my-links">
          <p>You can find me at:
            <span><a href="https://github.com/hitesh-92" target="_blank">Github</a></span>
            <span><a href="https://stackoverflow.com/users/8349248/hitesh" target="_blank">StackOverFlow</a></span>
          </p>
        </div>

      </div>

    </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style>

  @media only screen and (min-width: 700px){
    
    #home-container{
      display: grid;
      grid-template-rows: 10em 1fr;
      text-shadow: 0.75px 0.75px 0.75px rgb(255, 255, 255);
      color: rgb(134, 143, 141);
    }

    #home-text{
      grid-row:2/3;
      padding: 10px 15px;
      text-align: center;
    }

    #home-text > p{
      padding: 0px 10px;
    }

    #my-links{
      grid-row: 3/4;
      text-align: center;
      padding: 10px 20px;
    }

    #my-links > span{
      text-shadow: 0.75px 0.75px 0.75px rgb(255, 255, 255);
    }

  }

  #home-text{
    text-align: center;
  }

  #home-contact-btn{
    border: 1px solid black;
    text-align: center;
  }

  #home-contact-btn > a {
    font-family: 'Ubuntu', sans-serif;
    background-color: rgb(57, 115, 161);
    border-radius: 5px;
    color: white;
    padding: 0.75em;
    text-decoration-line: none;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .2);
  }

  #home-contact-btn > a:hover {
    transition: 0.2s ease-in-out;
    box-shadow: 2px 2px 2px 1px rgba(151, 151, 255, 0.2);
    color: rgb(231, 246, 253);
  }


  #my-links > p > span > a{
    padding-left: 5px;
    text-decoration-line: none;
    color: rgb(89, 135, 204)
  } 

  @media only screen and (max-width: 700px){

    #home-container{
      display: grid;
      grid-template-rows: 1fr;
      text-shadow: 0.75px 0.75px 0.75px rgb(255, 255, 255);
      color: rgb(134, 143, 141);

    }

    #home-text{
      grid-row:1/2;
      padding: 10px 15px;
    }

    #home-text > p{
      padding: 10px 10px;
    }

    #my-links{
      text-align: center;
      padding: 10px 20px;
    }
  }
</style>
