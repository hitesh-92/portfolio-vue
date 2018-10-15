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
                    <label for="name" id="form-name-label"><i class="far fa-address-card"></i> Name</label>
                    <input  
                        type="text" 
                        name="userName" 
                        id = "form-name-input"
                        v-model.lazy="userData.name"
                        required
                    >
                </div>

                <div class="form-top" id="form-email">
                    <label  for="email" id="form-email-label"><i class="fas fa-at"></i>  Email</label>
                    <input 
                        type="email" 
                        name="userID" 
                        id="form-email-input"
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
                    @click.prevent="formSubmit"
                    >

            </form>

            <div id="contact-message-success" v-if="formSuccess">
                <p>Your message has been recieved!</p>
                <i>
                <p>Thanks for getting in contact</p>
                <p>I'll get get back to you as soon as possible!</p>
                </i>
            </div>

            <div id="contact-message-fail" v-if="formFail">
                <p>There seems to have been a problem sending the message</p>
                <p>Kindly send any message to <i>hiteshgohil@hotmail.co.uk</i></p>
                <p>or send me an email <a href="mailto:hiteshgohil@hotmail.co.uk">here</a></p>
                <p>Sorry for the inconvenience, i'll get back back to you as soon as possible</p>
                <i>A notice of this serivce not working would be much appreciated</i>
                <p>I look forward to hearing from you</p>
            </div>

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
                isSubmitted: false,
                formProcessing: false,
                formSuccess: false,
                formFail: false,
                formError: false
            }
        },
        methods: {

            formSubmit(){

                let validName = this.checkName();
                let validEmail = this.checkEmail(validName);
                let validMessage = this.checkMessage();

                // console.log(name, validEmail, validMessage);
                console.log(`name:${validName}`);
                console.log(`email:${validEmail}`);
                console.log(`message:${validMessage}`);

                if (validName==true && validEmail==true && validMessage==true){
                    console.log('all 3 true');
                    this.isSubmitted = true;
                    this.formProcessing = true;

                    let form = {};
                    form.name = this.userData.name;
                    form.email = this.userData.email;
                    form.message = this.userData.message;

                    console.log('form sending...');

                    let postForm = this.sendForm(form);

                    this.formProcessing = !this.formProcessing;

                    // if(postForm){
                    //     formSuccess = true;
                    // } else if (!postForm){
                    //     this.formFail = true;
                    // } else {
                    //     // postForm == undefined
                    // }

                    console.log('form sending complete');

                    console.log(`postForm = ${postForm}`);
                    return;
                }

                console.log('formSubimt complete')

        }, //formSubmit


        checkName(){
            let validNameCheck = false;

            if(this.userData.name.length < 1){
                    document.getElementById('form-name-label').style.color = 'red';
                    const id = document.getElementById('form-name-input');
                    id.placeholder = 'Please enter your name';
                    id.style.borderBottomColor = 'red';
                    id.focus();
            } else {
                validNameCheck = true;
            }

            return validNameCheck;
        }, //checkname


        checkEmail(validName){
            let validEmail = false;
            let validLengthStyled = false;
            const id = document.getElementById('form-email-input');

            if(this.userData.email.length < 5){
                document.getElementById('form-email-label').style.color = 'red';
                id.placeholder = 'Please enter your email';
                id.style.borderBottomColor = 'red';

                if (validName){
                    id.focus();
                    validLengthStyled = true;
                }
            } else if (this.userData.email.length >= 5) {

                //REGEX for email
                function validateEmail(email) {
                    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return res.test(String(email).toLowerCase());
                }

                const check = validateEmail(this.userData.email);

                if(check){
                    validEmail = true;
                }
            }

            return validEmail;
        }, //checkEmail


        checkMessage(){
            let validMessage = false;

            if(this.userData.message.length == 0){
                const id = document.getElementById('form-message');
                id.placeholder = 'Looks like you forgot to add your message!';
                id.focus();
            } else {
                validMessage = true;
            }

            return validMessage;
        }, //checkMessage

        sendForm(form){
            const url = 'https://portfolio-contact-api.herokuapp.com/contact/';

            function postReq(link, data){

                return fetch(link, {
                    method:'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({formData: form})
                }).then((res) => {
                    const data = res.json();
                    return data;
                });
            }

            postReq(url, form).then((data) => {
                const res = JSON.stringify(data);
                // const id = document.getElementById('result');
                // id.innerText =  res;
                console.log(res);
                return res;
            }).catch((e) => {
                conosole.log('error: ', e)
                return e;
            });
        } //sendForm


    }//methods
}
</script>

<style scoped>
/*
    @media only screen and (min-width: 700px){

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
            font-size: 1.2em;
            color: rgb(113, 114, 114);
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
            font-size: 1.2em;
            margin: 0;
            padding: 0;
            text-align: center;
            color: rgb(134, 143, 141);
        }

        #contact-heading > h3 {
            color: rgb(109, 109, 109);
        }

        #contact-message-success{
            grid-column: 2/8;
            grid-row: 4/9;
            text-align: center;
            color: rgb(97, 97, 97);
            font-size: 1.3em;
        }

        #contact-message-fail{
            grid-column: 2/8;
            grid-row: 4/9;
            text-align: center;
            color: rgb(97, 97, 97);
            font-size: 1.3em;
        }

    }

    @media only screen and (max-width: 700px){

        #contact-container{
            display: grid;
            grid-template-rows: 10em 1fr;
        }

        #contact-heading{
            grid-row: 1/2;
            text-align: center;
            padding-top: 20px;
        }

        #contact-heading > p{
            padding-top: 10px;
            color: rgb(134, 143, 141);
            padding: 0 10px;
        }

        #contact-form{
            padding-top: 30px;
            grid-row: 2/3;
            display: grid;
            grid-template-rows: 70px 70px 1fr 1fr;
            text-align: center;
        }

        #form-name{
            grid-row: 1/2;
        }

        #form-email{
            grid-row: 2/3;
        }

        .form-top > label{
            float: left;
            padding-left: 10px;
            padding-top: 5px;
        }

        .form-top > input{
            width: 70%;
            border: 1px solid white;
            border-bottom: 1px dashed black;
            outline-color: white;
            font-family: sans-serif;
            color: rgb(75, 75, 75);
            font-weight: 500;
            letter-spacing: 0.02em;
            font-size: 1.2em;
            font-family: 'Ubuntu', sans-serif;
            border-radius: 3px;
            box-shadow: 2px 2px 4px 1px rgba(0, 0, 255, .2);
        }

        #form-message{
            grid-row: 3/4;
            padding: 0 10px;
            margin: 0 10px;
        }

        textarea{
            padding: 1em;
            margin: 1px;
            border: 1px solid white;
            outline-color: rgba(255, 255, 255, 0);
            border-radius: 5px;
            box-shadow: 2px 2px 4px 1px rgba(0, 0, 255, .2);
            font-size: 0.9em;
            color: rgb(113, 114, 114);
            font-family: 'Ubuntu', sans-serif;
        }

        #form-submit-btn{
            margin: 4.5em 6em;
            outline: none;
            color: rgb(224, 224, 224);
            border-radius: 5px;
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .2);
            background: #2abd63;
            text-shadow: 1px 1px 6px #129729a6;
            font-family: 'Ubuntu', sans-serif;
        }

        #contact-message-fail{
            grid-row: 2/3;
            padding: 10px 15px;
        }

        #contact-message-fail > p{
            padding: 10px 0;
        }

        #contact-message-success{
            grid-row: 2/3;
            padding: 10px 15px;
        }

        #contact-message-success > p{
            padding: 10px 0;
        }

    }
*/
</style>

