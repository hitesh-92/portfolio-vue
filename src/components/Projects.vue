<template>
    <div class="projects" @load="project2 = true">

        <h3>Projects</h3>

        <div class="project" v-bind:class="{ project_active: project1 }" @mouseover="project1 = !project1" @mouseout="project1 = !project1">
            <div>
                <a href="http://www.gohilreport.com" target="_blank">GohilReport</a>
                <hr>
                <p class="project-subTitle">Personal Project</p>
                <p>Website with links to new articles <br> Have started to build an api for this project to save data </p>
            </div>
            <div class="project-img">
                <img  alt="gohilReport" srcset="../../build/gohilReport.jpg" >
            </div>
        </div>

        <div class="project" v-bind:class="{ project_active: project2 }" @mouseover="project2 = !project2" @mouseout="project2 = !project2">
            <div>
                <a href="#" target="_blank">Project Title</a>
                <hr>
                <p class="project-subTitle">Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempore.</p>
            </div>
            <div class="project-img">
                <img src="https://images.pexels.com/photos/533189/pexels-photo-533189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" srcset="">
            </div>
        </div>

        <div class="project" v-bind:class="{ project_active: project3 }" @mouseover="project3 = !project3" @mouseout="project3 = !project3">
            <div>
                <a href="https://hg-js-tictactoe-game.herokuapp.com/" target="_blank">Tic Tac Toe</a>
                <hr>
                <p class="project-subTitle">Mini game app</p>
                <p>Made a game which works in browser using JavaScript and jQuery</p>
            </div>
            <div class="project-img">
                <img src="https://images.pexels.com/photos/533189/pexels-photo-533189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" srcset="">
            </div>
        </div>

        <div class="project" v-bind:class="{ project_active: project4 }" @mouseover="project4 = !project4" @mouseout="project4 = !project4">
            <div>
                <a href="https://hg-js-calc.herokuapp.com/" target="_blank">Calculator App</a>
                <hr>
                <p class="project-subTitle">Simple Calculator</p>
                <p>Created using JavaScript, a functioning calculator capable of chained commands</p>
            </div>
            <div class="project-img">
                <img src="https://images.pexels.com/photos/533189/pexels-photo-533189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" srcset="">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'projects',
        data(){
            return{
                project1: false,
                project2: false,
                project3: false,
                project4: false,
            }
        }
        
    }
</script>

<style>

    @media only screen and (min-width: 700px){

        .project_active{
            color: rgb(82, 82, 82) !important;
            box-shadow: 1px 1px 10px 1px rgba(196, 196, 196) !important;
            border: 5px solid rgba(247, 247, 247, 0.75) !important;
        }

        .projects{
            display: grid;
            grid-template-rows: minmax(100px, 1fr);
            padding: 2em 1.5em;
        }

        .projects > h3{
            color: rgb(109, 109, 109);
            font-size: 1.4em;
            padding-top: 1.5em;
            text-align: center;
        }

        .project{
            transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            background-color: white;
            margin: 1em 3em;
            padding: 1.5em 3em;
            box-shadow: 1px 1px 5px 1px rgba(196, 196, 196, 0.603);
            border: 1px solid white;
            color: rgb(134, 143, 141);

            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1em;
        }

        .project > div > a:visited{
            text-decoration: none;
            color: rgb(57, 115, 161);
            padding-top: 1em
        }

        .project > small{
            margin-left: 2em;
        }

        .project > hr{
            border: 0; 
            height: 1px; 
            background: rgba(0,89,255, 0.13);
        }

        .project > .project-subTitle{
            color: red !important;
        }

        .project-img{
            display: block;
            padding: 1em;
        }

        .project-img > img{
            width: 100%;
            height: 100%;

        }
    }


    @media only screen and (max-width: 700px){
        
        .projects{
            padding: 1.5em 1em;
        }

        .projects > h3 {
            text-align: center;
            padding-bottom: 1.5em;
        }

        .project-img{
            display: none;
        }

        .project{
            padding: 0.5em 0.5em 0.1em 0.5em;
            margin: 1.5em 0;
            box-shadow: 0 0 3px 0px rgb(161, 161, 161);
            border-radius: 2px;
            background-color: rgba(255, 255, 255, 0.95);
            color: rgb(134, 143, 141);
            border-radius: 2px;
        }

        .project > div > a{
            text-decoration: none;
            color: rgb(57, 115, 161);
            margin: 1em 0;
        }

        .project-desc{
            display: none;
        }

    }

    
    
</style>
