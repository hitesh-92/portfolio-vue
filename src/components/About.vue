<template>
    <div id="about">
        
        <div id="about-container">

            <div id="about-main">

                <h4 id="about-title">About</h4>

                <div id="main-left">
                    
                    <p>Some languages and techonologies I've tinkered and worked with</p>

                    <ul class="about-left-list">
                        <!-- <li></li> -->
                        <li>HTML / CSS </li>
                        <li>JavaScript / jQuery</li>
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

                    <!-- <p>I’m a self-taught developer who started to learn programming around 2 years ago as a hobby and a little while later found out about the world of web development. </p>
                    <p>Eventually coming to understanding that each programming language serves a different purpose I decided to focus on what was needed to become a web developer.</p>
                    <p>Now I am focused on making web applications using JavaScript for front-end and back-end, though somewhat starting to lean towards PHP on the back-end.</p> -->

                    <p>Being self-taught I started learning as a hobby in 2016, despite being familiar with computers since a young age I struggled to grasp the 'easiest' language; Python.</p>
                    <p>Soon after I was told about web development from a friend; after initially giving up on python I convinced myself to try to learn to code again.</p>
                    <p>Finding I picked up the foundations of web development much easier and moved onto JavaScript.  It was around this time I came to the understanding that there were many programming languages with each language was made to serve a different purpose.</p>
                    <p>Before I could start exploring new languages I took time to understand the foundations of programming, learning about data types and how they could be manipulated.</p>
                    <p>Since I’ve learned some PHP and practised my making a small blog. As well as gaining exposure to a framework for the first time, Laravel, learned about CRUD functionality and the use of databases.</p>
                    <p>I even took a look at Python again and eventually went to make a couple of small games which taught me the importance of keeping clean and simple code.</p>

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

    @media only screen and (min-width: 700px){

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
            border: 1px solid red;
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
            border: 1px solid red;
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

    @media only screen and (max-width: 700px){

        #about-container{
            margin:0;
            padding:0;
        }

        #about-main{
            display: grid;
            grid-template-rows: 75px 1fr;
            margin:0;
            padding:0 20px;
        }

        #main-left{
            grid-row: 3/4;
            padding: 1em 0;
            margin: 0;
        }

        #main-right{
            grid-row: 2/3;
            margin: 0px;
            padding: 0px;
            color: rgb(134, 143, 141);
            background-color: white;
            box-shadow: 0px 1px 15px 0px rgb(165, 165, 165);
        }

        #main-right > p{
            padding: 0px 20px;
        }

        #main-left > ul{
            margin: 0px 0px;
            padding: 0px 0px;
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
            font-size: 1.2em;
            padding-top: 10px;
        }

        .about-left-list > li{
            margin: 3px 0px;
        }
    }

</style>
