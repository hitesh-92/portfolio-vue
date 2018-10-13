<template>
    <div id="about">
        <div class="about-container">
            <div class="about-content">

                <div class="about-context">
                    <p>Being self-taught I started learning as a hobby in 2016, despite being familiar with computers since a young age I struggled to grasp the 'easiest' programming language; Python</p>
                    <p>Soon after I was told about web development from a friend; after initially giving up on python I convinced myself to try again as I've always had a passion for technology</p>
                    <p>Finding I picked up the foundations of web development much easier, moved onto JavaScript.  It was around this time I came to the understanding that there were many programming languages with each language made to serve a different purpose</p>
                    <p>Before I could start exploring new languages, I took time to understand the foundations of programming, learning about data types and how data could be manipulated</p>
                    <p>Going on to create my own project with these new tools. I soon came across the need to learn how to make asynchronous requests, what APIs are and CRUD functionality. This also presented the opportunity to learn about databases</p>
                    <p>Also with my newly developed skills I revisitied Python and eventually went on to make a couple of small games which taught me the importance of keeping code clean and simple</p>
                    <hr>
                </div>

                <div class="skills-title">
                    <p><i class="fas fa-code"></i> Technical Skills:</p>
                </div>

                <div class="about-skills">

                    <div class="skills-list">
                        <ul>
                            <p class="skill-list-title">Front-End</p>
                            <hr>
                            <li>HTML <i class="fab fa-html5"></i> / CSS <i class="fab fa-css3"></i></li>
                            <li><i class="fab fa-js"></i>   JavaScript</li>
                            <li>AJAX</li>
                            <li>jQuery</li>
                            <li><i class="fab fa-vuejs"></i>   Vue js</li>
                            <li><i class="fas fa-mobile-alt"></i>  Responsive Design</li>
                        </ul>
                    </div>

                    <div class="skills-list">
                        <ul>
                            <p class="skill-list-title">Back-End</p>
                            <hr>
                            <li>Node <i class="fab fa-node-js"></i></li>
                            <li><i class="fab fa-python"></i>  Python</li>
                            <li>PHP</li>
                            <li>SQL: <small>MySQL</small></li>
                            <li>NoSQL: <small>MongoDB</small></li>
                            <li><i class="fas fa-code-branch"></i>  Version Control: <small>Git</small></li>
                        </ul>
                    </div>

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

    #about{
        padding: 0 !important;
        margin: 0 !important;
    }

    .about-container{
        height: 100%;
        margin: 0 4em;
        padding: 0;
        color: rgb(129, 129, 129);
        background-color: white;
    }

    .about-content{
        background: white;
        box-shadow: 1px 1px 5px 1px rgba(196, 196, 196, 0.603);
    }

    .about-context{
        padding: 0em 4em;
    }

    .about-skills{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .skills-list{
        text-align: center;
    }

    .skills-list > ul{
        list-style-type: none;
    }

    .skills-list > ul > hr{
        border: 0; 
        height: 1px;
        width: 15vw;
        background: rgba(0,89,255, 0.13);
    }

    .skills-list > ul > li{
        padding: 0.2em 0;
    }

    .skill-list-title{
        font-size: 1.1em;
        padding: 0;
        margin: 0;
    }

    .skills-title{
        text-align: center;
        font-size: 1.1em;
        padding: 1em 0;
    }

    @media only screen and (min-width: 700px){
        
    }

    @media only screen and (max-width: 700px){

    }

</style>