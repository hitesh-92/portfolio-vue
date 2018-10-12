<template>
    <div class="projects">

        <!-- <div class="project" id="gohil">
            <a href="http://www.gohilreport.com">GohilRepot</a>
            <p class="p-text">A website displaying links to new articles</p>
        </div> -->

        <div class="project"  @mouseover="show(1)" @mouseout="/*project1 = !project1*/">
            <a href="#">Project Title</a>
            <p v-if="project1" v-bind:class="{ active: project1 }">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel!</p>
            <p v-else v-bind:class="{ second: project1 }">Personal Project</p>
        </div>

        <div class="project">
            <a href="#">Project Title</a>
            <p v-if="project2" class="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel!</p>
            <p v-else>Project desc summary</p>
        </div>

        
       

    </div>
</template>

<script>

export default {
    name: 'projects',
    data(){
        return{
            project1: false,
            project2: false
        }
    },
    // methods: {
    //     hover: function(){
    //         this.show(1);
    //     },//hover
    //     show: function(projectNumber){
    //         this.projectNumber = !this.projectNumber;
    //     }
    // }
}
</script>

<style>

    .active{
        /* transition: 5s cubic-bezier(0.175, 0.885, 0.32, 1.275); */
        color: green;
    }

    .red{
        color: red;
        
    }

    .second{
        /* transition: 5s cubic-bezier(0.175, 0.885, 0.32, 1.275); */
        /* background-color: red; */
        transform: rotateY(180deg);
    }

    .projects{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 2em 1.5em;
        /* grid-gap: 3m 4em; */
    }

    .project{
        /* border: 1px solid red; */
        transition: 5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        /* transform: rotateY(180deg); */
        background-color: white;
        margin: 1.5em 3em;
        padding: 1em 3em;
        box-shadow: 1px 1px 5px 1px rgba(196, 196, 196, 0.603);
    }

    .project > p{
        transition: 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    
</style>
