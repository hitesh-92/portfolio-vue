<template>
    <div id="contact">

        <div id="contact-container">

            <div id="contact-heading">
                <p id="test123"></p>
            </div>

            <form id="contact-form">

                <div class="form-top" id="form-name">
                    <label for="name">Name</label>
                    <input type="text" name="" id="">
                </div>

                <div class="form-top" id="form-email">
                    <label  for="email">Email</label>
                    <input type="email" name="" id="">
                </div>

                <textarea name="mesage" id="" cols="30" rows="10">
                </textarea>

            </form>

        </div>

    </div>
</template>

<script>

</script>

<style scoped>

    #contact-container{
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
        height: 80vh;
    }

    #contact-form{
        grid-column: 2/8;
        grid-row: 4/9;

        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(8, 1fr);
    }

    .form-top{
        display: grid;
        grid-template-rows: 1fr 1fr;
        padding: 0em;
        margin: 0em;
        background-color: white;
        box-sizing: border-box;
        border-radius: 5px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .2);
    }

    .form-top > label{
        font-size: 1em;
        color: rgb(134, 143, 141);
        padding: 5px;
        font-size: 0.9em;
    
    }

    .form-top > input{
        margin: 0 5px 5px 5px;
        border: 1px solid white;
        border-bottom: 1px dashed black;
        outline-color: white;
        font-family: sans-serif;
        color: rgb(75, 75, 75);
        font-weight: 500;
        letter-spacing: 0.05em;
        /* font-size: 1.2em; */
        
    }

    #form-name{
        grid-column: 2/5;
        grid-row: 1/2;
    }

    #form-email{
        grid-column: 6/9;
        grid-row: 1/2;
    }

    textarea{
        grid-column: 2/9;
        grid-row: 3/6;
        padding: 1em;
        margin: 1px;
        border: 1px solid white;
        outline-color: rgba(255, 255, 255, 0);
        border-radius: 5px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .2);

        color: rgb(134, 143, 141);
    }

</style>
