<template>
    <div id="contact">

        <div id="contact-container">

            <div id="contact-heading">
            <h3>Get in touch</h3>
            <p>If there is anything I can help you with or you just want to say hi <br> send me a message!</p>
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
                    id="form-submit-btn" 
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
        font-family: 'Ubuntu', sans-serif;
    }

    #form.top:focus{
        border: 1px solid white;
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
        /* font-size: 1.3em;font-family: Arial, Helvetica, sans-serif; */
        font-size: 1.2em;
        color: rgb(134, 143, 141);
    }

    #form-submit-btn{
        grid-column: 5/6;
        grid-row: 7/8;
        outline: none;
        margin: 0;
        padding: 0;
        color: rgb(224, 224, 224);
        border-radius: 5px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .2);
        background: #2abd63;
        font-size: 1em;
        text-shadow: 1px 1px 6px #129729a6;
        font-family: 'Ubuntu', sans-serif;
    }

    #form-submit-btn:hover{
        transition: 0.2s ease-in-out;
        box-shadow: 1px 1px 1px 1px rgba(124, 179, 201, 0.575);
        color: rgb(248, 248, 248);
        margin-left: 1px;
        margin-top: 1px;
        
    }

    #contact-heading{
        grid-column: 3/7;
        grid-row: 2/3;
        /* border: 1px solid red; */
        font-size: 1.2em;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    /* #contact-heading > h3 {
        text-align: center;
        font-weight: 500;
    } */



</style>
