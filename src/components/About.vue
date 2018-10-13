<template>
    <div id="about">
        <div class="about-container">

            <div class="about-context">
                <p>Being self-taught I started learning as a hobby in 2016, despite being familiar with computers since a young age I struggled to grasp the 'easiest' programming language; Python</p>
                <p>Soon after I was told about web development from a friend; after initially giving up on python I convinced myself to try again as I have passion for technology</p>
                <p>Finding I picked up the foundations of web development much easier, moved onto JavaScript.  It was around this time I came to the understanding that there were many programming languages with each language made to serve a different purpose</p>
                <p>Before I could start exploring new languages, I took time to understand the foundations of programming, learning about data types and how data could be manipulated</p>
                <p>Going on to create my own project with these new tools. I soon came across the need to learn how to make asynchronous request, what APIs are and CRUD functionality. This also presented the opportunity to learn about databases</p>
                <p>Also with my newly developed skills I revisitied Python and eventually went on to make a couple of small games which taught me the importance of keeping code clean and simple</p>
                <hr>
            </div>

            <div class="about-skills">
                
                <div class="skills-list">
                    <ul>
                        <p class="skill-list-title">Front-End</p>
                        <hr>
                        <li>HTML / CSS</li>
                        <li>JavaScript</li>
                        <li>AJAX</li>
                        <li>Vue js</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>

                <div class="skills-list">
                    <ul>
                        <p class="skill-list-title">Back-End</p>
                        <hr>
                        <li>Node</li>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>SQL: <small>MySQL</small></li>
                        <li>NoSQL: <small>MongoDB</small></li>
                        <li>Version Control: <small>Git</small></li>
                    </ul>
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

    .about-container{
        /* border: 1px solid red; */

        display: grid;
        grid-template-rows: 100% 100%;
        grid-gap: 1em;

        padding: 4em;
        color: rgb(129, 129, 129);
    }

    .about-context{
        /* border: 1px solid black; */
        padding: 0em 4em;
    }

    .about-skills{
        /* border: 1px solid blue; */

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




    @media only screen and (min-width: 700px){

        
    }

    @media only screen and (max-width: 700px){

    }

</style>