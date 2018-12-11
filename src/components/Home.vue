<template>
    <div id="home">

      <div id="home-container">
        
        <div id="home-text">
          <p>Hi there,</p>
          <p>I'm a web developer from Leicester</p>
          <p>I enjoy making web sites and web apps using JavaScript</p>
          <p>I’m always looking for a challenge</p>
          <p>If there’s anything I could do for you or help you with </p>
          <p id="home-text-contact">Contact Me <span @click="selectContact">Here</span> </p>
        </div>

        <div id="my-links">
          <p>You can find me at:</p>
          <ul>
            <li><a href="https://github.com/hitesh-92"><i class="fab fa-github"></i>  GitHub</a></li>
            <li><a href="https://stackoverflow.com/users/8349248/hitesh"><i class="fab fa-stack-overflow"></i>  StackOverFlow</a></li>
          </ul>
        </div>

      </div>

    </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      selectContact: Function
    }
  }
</script>

<style>

  #my-links > ul {
    /* text-align: center; */
    list-style-type: none;
    color: rgb(89, 135, 204);
  }

  #my-links > ul > li{
    padding: 0.2em 0;
  }

  #my-links > ul > li > a {
    text-decoration: none;
    color: rgb(89, 135, 204);
    padding-right: 2em
  }

  @media only screen and (min-width: 700px){
    
    #home-container{
      padding: 5em 0;
      /* display: grid; */
      /* grid-template-rows: 10em 1fr; */
      text-shadow: 0.75px 0.75px 0.75px rgb(255, 255, 255);
      font-size: 1.2em
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
      /* grid-row: 3/4; */
      text-align: center;
      padding: 10px 20px;
    }

    #my-links > ul{
      text-shadow: 0.75px 0.75px 0.75px rgb(255, 255, 255);
    }

  }

  #home-text{
    text-align: center;
  }

  #my-links > ul > a{
    padding-left: 5px;
    text-decoration-line: none;
    color: rgb(89, 135, 204)
  }

  #home-text-contact{
    text-shadow: none;
  }

  #home-text-contact > span{
    color: rgb(57, 115, 161);
    cursor: pointer;
  }

  @media only screen and (max-width: 700px){

    #home-container{
      display: grid;
      grid-template-rows: 1fr;
      text-shadow: 0.75px 0.75px 0.75px rgb(255, 255, 255);
    }

    #home-text{
      grid-row:1/2;
      padding-top: 1em;
      margin: 2em 1em;
    }

    #home-text > p{
      padding: 10px 10px;
    }

    #my-links{
      text-align: center;
      padding: 1em 0;
    }
  }
</style>
