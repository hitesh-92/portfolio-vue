<template>
    <div class="projects" @load="project2 = true">

        <div class="project" v-bind:class="{ project_active: project1 }" @mouseover="project1 = !project1" @mouseout="project1 = !project1">
            <a href="http://www.gohilreport.com" target="_blank">GohilReport</a> <small>Personal Project</small>
            <hr>
            <p v-if="project1">Website with links to new articles, inspired by <a href="http://drudgereport.com">drudgereport</a></p>
            <p v-else>Personal Project</p>
        </div>

        <div class="project" v-bind:class="{ project_active: project2 }" @mouseover="project2 = !project2" @mouseout="project2 = !project2">
            <a href="#">Project Title</a>
            <hr>
            <p v-if="project2" class="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel!</p>
            <p v-else>Project desc summary</p>
        </div>

        <div class="project" v-bind:class="{ project_active: project3 }" @mouseover="project3 = !project3" @mouseout="project3 = !project3">
            <a href="#">Project Title</a>
            <hr>
            <p v-if="project3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel!</p>
            <p v-else>Personal Project</p>
        </div>

        <div class="project" v-bind:class="{ project_active: project4 }" @mouseover="project4 = !project1" @mouseout="project4 = !project4">
            <a href="#">Project Title</a>
            <hr>
            <p v-if="project4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel!</p>
            <p v-else>Personal Project</p>
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
        },
        methods: {
            test(){
                
                this.project2 = !this.project2;
                
            }
        }
    }
</script>

<style>

    .project_active{
        background-color: rgba(255, 255, 255, 0.596) !important;
        font-size: 1.001em;
        color: rgb(129, 129, 129) !important;
    }

    .projects{
        display: grid;
        grid-template-rows: minmax(100px, 1fr);
        padding: 2em 1.5em;
    }

    .project{
        transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        background-color: white;
        margin: 1em 3em;
        padding: 1.5em 3em;
        box-shadow: 1px 1px 5px 1px rgba(196, 196, 196, 0.603);
        border: 1px solid white;
        color: rgb(134, 143, 141);
    }

    .project > a{
        font-style: none;
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
    
</style>
