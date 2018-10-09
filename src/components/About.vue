<template>
    <div id="about">
        
        <div id="about-container">

            <div id="about-main">

                <h4 id="about-title">About</h4>

                <div id="main-left">
                    
                    <p>Some languages and techonologies I've tinkered and worked with</p>

                    <ul class="about-left-list">
                        <li>JavaScript</li>
                        <li>HTML5 / CSS3</li>
                        <li>jQuery</li>
                        <li>Vue.js</li>
                        <li>Node.js</li>
                        <li>PHP</li>
                        <li>SQL: <small>MySQL</small></li>
                        <li>NoSQL: <small>MongoDB</small></li>
                        <li>Git</li>
                        <li><small>some Python</small></li>
                    </ul>

                </div>

                <div id="main-right">

                    <p>I’m a self-taught developer who started to learn programming around 2 years ago as a hobby and a little while later found out about the world of web development. </p>
                    <p>Eventually coming to understanding that each programming language serves a different purpose I decided to focus on what was needed to become a web developer.</p>
                    <p>Now I am focused on making web applications using JavaScript for front-end and back-end, though somewhat starting to lean towards PHP on the back-end.</p>

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

    @media only screen and (min-width: 600px){

        #about{
            height: 500px;
        }

        #about-container{
        height: 70vh;
        margin: 2em 1em;
        padding: 1em 3em;
        text-align: center;
        border-radius: 1px;
        box-shadow: 0px 1px 15px 0px rgb(165, 165, 165);
        background-color: white;
        color: rgb(134, 143, 141);
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

        #about-title{
            display: none;
        }

        #main-left > p{
            display: none;
        }
    }

    @media only screen and (max-width: 600px){

        #about-container{
            margin:0;
            padding:0;
            width: 100%;
            height: 100vh;
        }

        #about-main{
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            margin:0;
            padding:0;
            height: 100%;
        }

        #main-left{
            grid-row: 3/4;
            padding: 0;
            padding-top: 2em;;
            margin: 0;
            height: 90%
        }

        #main-right{
            grid-row: 2/3;
            margin: 0px;
            padding: 0px;
            width: 100%;
            height: 100%;
            color: rgb(134, 143, 141);
        }

        #main-right > p{
            padding: 0px 20px;
        }

        #main-left > ul{
            margin: 0px 0xp;
            padding: 0px 0px;;
            text-align: center;
            list-style-type: none;
            color: rgb(134, 143, 141);
        }
        
        #main-left > p{
            text-align: center;
            padding: 0 10px;
            color: rgb(134, 143, 141);
        }

        #about-title{
            grid-row: 1/2;
            text-align: center;
            height: 2em;
            font-size: 1.2em;
        }

        .about-left-list > li{
            margin: 3px 0px;
        }
    }

</style>
