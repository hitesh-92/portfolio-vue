<template>
    <div id="about">
        
        <div id="about-container">

            <div id="about-main">

                <h4 id="about-title">About</h4>

                <div id="main-left">
                    
                    <p>Some languages and techonologies I've tinkered and worked with:</p>

                    <ul class="about-left-list">
                        <li>HTML / CSS </li>
                        <li>JavaScript / jQuery</li>
                        <li>Vue.js</li>
                        <li>Node.js</li>
                        <li>PHP</li>
                        <li>SQL: <small>MySQL</small></li>
                        <li>NoSQL: <small>MongoDB</small></li>
                        <li>Git</li>
                        <li>Python</li>
                    </ul>

                </div>

                <div id="main-right">

                    <p>Being self-taught I started learning as a hobby in 2016, despite being familiar with computers since a young age I struggled to grasp the 'easiest' language; Python</p>
                    <p>Soon after I was told about web development from a friend; after initially giving up on python I convinced myself to give coding another shot</p>
                    <p>Finding I picked up the foundations of web development much easier, moved onto JavaScript.  It was around this time I came to the understanding that there were many programming languages with each language made to serve a different purpose</p>
                    <p>Before I could start exploring new languages I took time to understand the foundations of programming, learning about data types and how data could be manipulated</p>
                    <p>Since I’ve learned some PHP and practised by making a small blog. As well as gaining exposure to a framework for the first time, Laravel, learned about CRUD functionality and the use of databases</p>
                    <p>I even took a look at Python again and eventually went on to make a couple of small games which taught me the importance of keeping clean and simple code</p>

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

        #about-container{
        color: rgb(134, 143, 141);
        }

        #about-main{
            display: grid;
            grid-template-rows: 1fr;
        }

        #main-left{
            margin: 1em 2em;
            color: rgb(134, 143, 141);
            text-align: center;
        }

        #main-left > ul{
            list-style-type: none;
        }

        #main-left > p{
            text-align: center;
        }

        #main-right{
            margin: 3em 2em;
            padding: 2em 3em;
            grid-row: 1/2;
            background-color: white; 
            box-shadow: 0px 1px 15px 0px rgb(165, 165, 165);
        }

        #about-title{
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
