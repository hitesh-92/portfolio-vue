<template>
    <div id="contact">

        <div id="contact-container">

            <div id="contact-heading">
            contact msg
            </div>

            <form 
                id="contact-form" 
                action="dothis.php" 
                method="post"
                v-if="!isSubmitted"
                >

                <div class="form-top" id="form-name">
                    <label for="name">Name</label>
                    <input  
                        type="text" 
                        name="userName" 
                        id="form-name"
                        v-model.lazy="userData.name"
                        required
                    >
                </div>

                <div class="form-top" id="form-email">
                    <label  for="email">Email</label>
                    <input 
                        type="email" 
                        name="userID" 
                        id="form-email"
                        v-model.lazy="userData.email"
                        required
                    >
                </div>

                <textarea 
                    name="userMessage" 
                    id="form-message" 
                    cols="30" 
                    rows="10"
                    placeholder="Let me know how I can help!"
                    v-model="userData.message"
                    required
                    >
                </textarea>

                <input 
                    id="form-submit" 
                    type="submit" 
                    value="Submit" 
                    @click.prevent="formSubmit">


            </form>

            <div v-else>THANKS FOR THE MSG</div>

        </div>

    </div>
</template>

<script>
    export default{
        data () {
            return{
                userData: {
                    name: '',
                    email: '',
                    message: ''
                },
                isSubmitted: false
            }
        },
        methods: {
            formSubmit(){
                if(this.userData.name.length < 1){
                    return
                }
                if(this.userData.email.length < 1){
                    return
                }
                if(this.userData.message.length < 1){
                    return
                }
                this.isSubmitted = true;
                document.getElementById('contact-form')
               
            }
        }
    }
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
        display: block;
        padding: 0em;
        margin: 0em;
        background-color: white;
        box-sizing: content-box;
        border-radius: 5px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .2);
    }

    .form-top > label{
        display: block;
        font-size: 1em;
        color: rgb(134, 143, 141);
        padding: 5px;
        font-size: 0.9em;
    
    }

    .form-top > input{
        display: block;
        margin: 0 5px 5px 5px;
        border: 1px solid white;
        border-bottom: 1px dashed black;
        outline-color: white;
        font-family: sans-serif;
        color: rgb(75, 75, 75);
        font-weight: 500;
        letter-spacing: 0.003em;
        font-size: 1.3em;
        width: 95%;
        
    }

    #form-name{
        grid-column: 1/5;
        grid-row: 1/2;
    }

    #form-email{
        grid-column: 6/10;
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

    #form-submit{
        grid-column: 5/6;
        grid-row: 7/8;
    }

</style>
