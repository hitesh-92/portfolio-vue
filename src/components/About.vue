<template>
    <div id="about">
        
        <div id="about-container">

            <div id="about-main">

                <div id="main-left">

                    <ul>
                        <li>JavaScript</li>
                        <li>HTML5 / CSS3</li>
                        <li>jQuery</li>
                        <li>Vue.js</li>
                        <li>Node.js</li>
                        <li>PHP</li>
                        <li>SQL: <small>MySQL</small></li>
                        <li>NoSQL: <small>MongoDB</small></li>
                        <li>Git</li>
                        <li>some Python</li>
                    </ul>

                </div>

                <div id="main-right">

                    <p>I’m a self-taught developer who started to learn programming around 2 years ago as a hobby and a little while later found out about the world of web development. </p>
                    <p>Eventually coming to understanding that each programming language serves a different purpose I decided to focus on what was needed to become a web developer.</p>

                </div>

            </div>


        </div>

    </div>
</template>

<script>
    export default {
        name: 'About'
    }
</script>

<style scoped>
    
    #about-container{
        height: 70vh;
        margin: 2em 1em;
        padding: 1em 3em;
        text-align: center;
        border-radius: 1px;
        box-shadow: 0px 1px 15px 0px rgb(165, 165, 165);
        background-color: white;
        color: rgb(134, 143, 141);

        /* border: 1px solid red; */
    }

    #about-container > h1{
        margin: 1em 0em;
    }

    #about-main{
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin-top: 5em;
    }

    #main-left{
        font-size: 1.05em;
    }

    #main-left > ul{
        list-style-type: none;
        padding-right: 5em;
        /* text-align: center; */
    }

    #main-left > ul > li{
        margin: 0.5em 0em;
    }

    #main-right{
        text-align: left;
        box-sizing: border-box;
        height: 100%;
    }

    #main-right > p{
        font-size: 1.1em;
    }
    
</style>
