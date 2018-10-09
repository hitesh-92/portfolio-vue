<template>
    <div id="home">

      <div id="home-container">
        
        <div id="home-text">
          <p>Hello, my name is <strong>Hitesh</strong></p>
          <p>I'm a web developer from Leicester, UK</p>
          <p> I make web applications usually with JavaScript</p>
          <p>Feel free to browse around and get in touch if you want to me ask me anything</p>
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
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(8,1fr);
    margin: 1em;
    height: 80vh;
    text-shadow: 0.75px 0.75px 0.75px rgb(255, 255, 255);
    color: rgb(134, 143, 141);
    }
    
    p > strong {
      font-size: 1.1em;
    }

    #home-text{
      grid-column: 2/5;
      grid-row: 3/5;
      font-size: 1.3em;
    }

    #my-links{
      grid-column: 1/5;
      grid-row: 8/9;
    }

    #my-links > p > span > a{
      padding-left: 5px;
      text-decoration-line: none;
      color: rgb(89, 135, 204)
    }
  }

  p > strong {
    color: rgb(109, 109, 109);
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
      grid-template-rows: 1fr 100px 1fr;
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
