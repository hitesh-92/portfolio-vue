webpackJsonp([0],{"+Gpm":function(t,e){},"+T/E":function(t,e){},CEY1:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),o={name:"Navbar",data:function(){return{navOverlay:!1}},props:{selectHome:Function,selectAbout:Function,selectProjects:Function,selectContact:Function,homeStatus:Boolean,aboutStatus:Boolean,projectsStatus:Boolean,contactStatus:Boolean},methods:{closeOverlay:function(){this.navOverlay=!1}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navbar"}},[a("ul",{staticClass:"nav-list"},[t._m(0),t._v(" "),a("hr"),t._v(" "),a("li",{on:{click:function(e){t.selectHome()}}},[a("span",{class:[{active:t.homeStatus}]},[a("i",{staticClass:"fas fa-home"}),t._v("  Home")])]),t._v(" "),a("hr"),t._v(" "),a("li",{on:{click:function(e){t.selectAbout()}}},[a("span",{class:[{active:t.aboutStatus}]},[a("i",{staticClass:"far fa-user-circle"}),t._v("  About")])]),t._v(" "),a("hr"),t._v(" "),a("li",{on:{click:function(e){t.selectProjects()}}},[a("span",{class:[{active:t.projectsStatus}]},[a("i",{staticClass:"far fa-file-alt"}),t._v("  Projects")])]),t._v(" "),a("hr"),t._v(" "),a("li",{on:{click:function(e){t.selectContact()}}},[a("span",{class:[{active:t.contactStatus}]},[a("i",{staticClass:"far fa-envelope-open"}),t._v("  Contact")])]),t._v(" "),a("hr")]),t._v(" "),a("div",{staticClass:"nav-small"},[a("p",{attrs:{id:"nav-small-name"}},[t._v("Hitesh Gohil")]),t._v(" "),a("div",{attrs:{id:"nav-small-sign"},on:{click:function(e){t.navOverlay=!t.navOverlay}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:!t.navOverlay,expression:"!navOverlay"}],staticClass:"fas fa-bars"})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.navOverlay,expression:"navOverlay"}],staticClass:"nav-small-menu"},[a("i",{staticClass:"fas fa-times",on:{click:function(e){t.navOverlay=!t.navOverlay}}}),t._v(" "),a("ul",{staticClass:"nav-small-list",class:[{navOverlay:t.nav-t.op}]},[a("li",{on:{click:function(e){t.selectHome(),t.closeOverlay()}}},[a("span",{class:[{active:t.homeStatus}]},[a("i",{staticClass:"fas fa-home"}),t._v("  Home")])]),t._v(" "),a("li",{on:{click:function(e){t.selectAbout(),t.closeOverlay()}}},[a("span",{class:[{active:t.aboutStatus}]},[a("i",{staticClass:"far fa-user-circle"}),t._v("  About")])]),t._v(" "),a("li",{on:{click:function(e){t.selectProjects(),t.closeOverlay()}}},[a("span",{class:[{active:t.projectsStatus}]},[a("i",{staticClass:"far fa-file-alt"}),t._v("  Projects")])]),t._v(" "),a("li",{on:{click:function(e){t.selectContact(),t.closeOverlay()}}},[a("span",{class:[{active:t.contactStatus}]},[a("i",{staticClass:"far fa-envelope-open"}),t._v("  Contact")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{attrs:{id:"nav-list-name"}},[e("p",{attrs:{id:"name"}},[this._v("Hitesh Gohil")])])}]};var n=a("VU/8")(o,i,!1,function(t){a("vyDG")},"data-v-57fbf64c",null).exports,r={name:"Home",props:{selectContact:Function}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("div",{attrs:{id:"home-container"}},[a("div",{attrs:{id:"home-text"}},[a("p",[t._v("Hi there,")]),t._v(" "),a("p",[t._v("I'm a web developer from Leicester")]),t._v(" "),a("p",[t._v("I enjoy making web sites and web apps using JavaScript")]),t._v(" "),a("p",[t._v("I’m always looking for a challenge")]),t._v(" "),a("p",[t._v("If there’s anything I could do for you or help you with ")]),t._v(" "),a("p",{attrs:{id:"home-text-contact"}},[t._v("Contact Me "),a("span",{on:{click:function(e){t.selectContact()}}},[t._v("Here")])])]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"my-links"}},[e("p",[this._v("You can find me at:")]),this._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-github"}),this._v("  GitHub")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-stack-overflow"}),this._v("  StackOverFlow")])])])])}]};var l=a("VU/8")(r,c,!1,function(t){a("+T/E")},null,null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about"}},[a("div",{staticClass:"about-container"},[a("div",{staticClass:"about-context"},[a("p",[t._v("Being self-taught I started learning as a hobby in 2016, despite being familiar with computers since a young age I struggled to grasp the 'easiest' programming language; Python")]),t._v(" "),a("p",[t._v("Soon after I was told about web development from a friend; after initially giving up on python I convinced myself to try again as I have passion for technology")]),t._v(" "),a("p",[t._v("Finding I picked up the foundations of web development much easier, moved onto JavaScript.  It was around this time I came to the understanding that there were many programming languages with each language made to serve a different purpose")]),t._v(" "),a("p",[t._v("Before I could start exploring new languages, I took time to understand the foundations of programming, learning about data types and how data could be manipulated")]),t._v(" "),a("p",[t._v("Going on to create my own project with these new tools. I soon came across the need to learn how to make asynchronous request, what APIs are and CRUD functionality. This also presented the opportunity to learn about databases")]),t._v(" "),a("p",[t._v("Also with my newly developed skills I revisitied Python and eventually went on to make a couple of small games which taught me the importance of keeping code clean and simple")]),t._v(" "),a("hr")]),t._v(" "),a("div",{staticClass:"about-skills"},[a("div",{staticClass:"skills-list"},[a("ul",[a("p",{staticClass:"skill-list-title"},[t._v("Front-End")]),t._v(" "),a("hr"),t._v(" "),a("li",[t._v("HTML / CSS")]),t._v(" "),a("li",[t._v("JavaScript")]),t._v(" "),a("li",[t._v("AJAX")]),t._v(" "),a("li",[t._v("Vue js")]),t._v(" "),a("li",[t._v("Responsive Design")])])]),t._v(" "),a("div",{staticClass:"skills-list"},[a("ul",[a("p",{staticClass:"skill-list-title"},[t._v("Back-End")]),t._v(" "),a("hr"),t._v(" "),a("li",[t._v("Node")]),t._v(" "),a("li",[t._v("Python")]),t._v(" "),a("li",[t._v("PHP")]),t._v(" "),a("li",[t._v("SQL: "),a("small",[t._v("MySQL")])]),t._v(" "),a("li",[t._v("NoSQL: "),a("small",[t._v("MongoDB")])]),t._v(" "),a("li",[t._v("Version Control: "),a("small",[t._v("Git")])])])])])])])}]};var u=a("VU/8")({name:"About"},v,!1,function(t){a("+Gpm")},"data-v-ab4cd290",null).exports,m=a("mvHQ"),p=a.n(m),h={data:function(){return{userData:{name:"",email:"",message:""},isSubmitted:!1,formProcessing:!1,formSuccess:!1,formFail:!1}},methods:{formSubmit:function(){var t,e=this,a=!1,s=!1,o=!1;if(this.userData.name.length<1){document.getElementById("form-name-label").style.color="red";var i=document.getElementById("form-name-input");i.placeholder="Please enter your name",i.style.borderBottomColor="red",i.focus()}else a=!0;if(this.userData.email.length<5){document.getElementById("form-email-label").style.color="red";var n=document.getElementById("form-email-input");n.placeholder="Please enter your email",n.style.borderBottomColor="red",a&&n.focus()}else if(this.userData.email.length>=5){(t=this.userData.email,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()))&&(s=!0)}if(this.userData.message.length<5){var r=document.getElementById("form-message");r.placeholder="Looks like you forgot to add your message!",s&&r.focus()}else o=!0;if(console.log(a,s,o),1==a&&1==s&&1==o){var c={};c.name=this.userData.name,c.email=this.userData.email,c.message=this.userData.message;var l=p()(c),v=fetch("http://127.0.0.1:5000/"+l).then(function(t){v.json()}).then(function(t){e.formSuccess=!e.formSuccess,console.log(t)}).catch(function(t){e.formProcessing=!e.formProcessing,e.formFail=!0});this.isSubmitted=!0}}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contact"}},[a("div",{attrs:{id:"contact-container"}},[t._m(0),t._v(" "),t.isSubmitted?t._e():a("form",{attrs:{id:"contact-form",action:"dothis.php",method:"post"}},[a("div",{staticClass:"form-top",attrs:{id:"form-name"}},[a("label",{attrs:{for:"name",id:"form-name-label"}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.userData.name,expression:"userData.name",modifiers:{lazy:!0}}],attrs:{type:"text",name:"userName",id:"form-name-input",required:""},domProps:{value:t.userData.name},on:{change:function(e){t.$set(t.userData,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-top",attrs:{id:"form-email"}},[a("label",{attrs:{for:"email",id:"form-email-label"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.userData.email,expression:"userData.email",modifiers:{lazy:!0}}],attrs:{type:"email",name:"userID",id:"form-email-input",required:""},domProps:{value:t.userData.email},on:{change:function(e){t.$set(t.userData,"email",e.target.value)}}})]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userData.message,expression:"userData.message"}],attrs:{name:"userMessage",id:"form-message",cols:"30",rows:"10",placeholder:"Let me know how I can help!",required:""},domProps:{value:t.userData.message},on:{input:function(e){e.target.composing||t.$set(t.userData,"message",e.target.value)}}}),t._v(" "),a("input",{attrs:{id:"form-submit-btn",type:"submit",value:"Submit"},on:{click:function(e){return e.preventDefault(),t.formSubmit(e)}}})]),t._v(" "),t.formSuccess?a("div",{attrs:{id:"contact-message-success"}},[t._m(1)]):t._e(),t._v(" "),t.formFail?a("div",{attrs:{id:"contact-message-fail"}},[a("p",[t._v("There seems to have been a problem sending the message")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Sorry for the inconvenience, i'll get back back to you as soon as possible")]),t._v(" "),a("i",[t._v("A notice of this serivce not working would be much appreciated")]),t._v(" "),a("p",[t._v("I look forward to hearing from you")])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"contact-heading"}},[e("h3",[this._v("Get in touch")]),this._v(" "),e("p",[this._v("If there is anything I can help you with or you just want to say hi "),e("br"),this._v(" send me a message!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("i",[e("p",[this._v("Thanks for getting in contact")]),this._v(" "),e("p",[this._v("I'll get get back to you as soon as possible!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Kindly send any message to "),e("i",[this._v("hiteshgohil@hotmail.co.uk")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("or send me an email "),e("a",{attrs:{href:"mailto:hiteshgohil@hotmail.co.uk"}},[this._v("here")])])}]};var f=a("VU/8")(h,d,!1,function(t){a("lH2f")},"data-v-914621aa",null).exports,_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects",on:{load:function(e){t.project2=!0}}},[a("div",{staticClass:"project",class:{project_active:t.project1},on:{mouseover:function(e){t.project1=!t.project1},mouseout:function(e){t.project1=!t.project1}}},[a("a",{attrs:{href:"http://www.gohilreport.com",target:"_blank"}},[t._v("GohilReport")]),t._v(" "),a("small",[t._v("Personal Project")]),t._v(" "),a("hr"),t._v(" "),t.project1?a("p",[t._v("Website with links to new articles, inspired by "),a("a",{attrs:{href:"http://drudgereport.com"}},[t._v("drudgereport")])]):a("p",[t._v("Personal Project")])]),t._v(" "),a("div",{staticClass:"project",class:{project_active:t.project2},on:{mouseover:function(e){t.project2=!t.project2},mouseout:function(e){t.project2=!t.project2}}},[a("a",{attrs:{href:"#"}},[t._v("Project Title")]),t._v(" "),a("hr"),t._v(" "),t.project2?a("p",{staticClass:"p-text"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel!")]):a("p",[t._v("Project desc summary")])]),t._v(" "),a("div",{staticClass:"project",class:{project_active:t.project3},on:{mouseover:function(e){t.project3=!t.project3},mouseout:function(e){t.project3=!t.project3}}},[a("a",{attrs:{href:"#"}},[t._v("Project Title")]),t._v(" "),a("hr"),t._v(" "),t.project3?a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel!")]):a("p",[t._v("Personal Project")])]),t._v(" "),a("div",{staticClass:"project",class:{project_active:t.project4},on:{mouseover:function(e){t.project4=!t.project1},mouseout:function(e){t.project4=!t.project4}}},[a("a",{attrs:{href:"#"}},[t._v("Project Title")]),t._v(" "),a("hr"),t._v(" "),t.project4?a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel!")]):a("p",[t._v("Personal Project")])])])},staticRenderFns:[]};var g={name:"App",data:function(){return{appHome:!0,appAbout:!1,appProjects:!1,appContact:!1}},methods:{switchToHome:function(){this.hideAll(),this.appHome=!0},switchToAbout:function(){this.hideAll(),this.appAbout=!0},switchToProjects:function(){this.hideAll(),this.appProjects=!0},switchToContact:function(){this.hideAll(),this.appContact=!0},hideAll:function(){this.appHome=!1,this.appAbout=!1,this.appProjects=!1,this.appContact=!1}},components:{Navbar:n,Home:l,About:u,Projects:a("VU/8")({name:"projects",data:function(){return{project1:!1,project2:!1,project3:!1,project4:!1}},methods:{test:function(){this.project2=!this.project2}}},_,!1,function(t){a("CEY1")},null,null).exports,Contact:f}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar",{attrs:{id:"app-nav",selectHome:t.switchToHome,selectAbout:t.switchToAbout,selectProjects:t.switchToProjects,selectContact:t.switchToContact,homeStatus:t.appHome,aboutStatus:t.appAbout,projectsStatus:t.appProjects,contactStatus:t.appContact}}),t._v(" "),a("div",{attrs:{id:"app-body"}},[t.appHome?a("Home",{attrs:{id:"app-home",selectContact:t.switchToContact}}):t._e(),t._v(" "),a("About",{directives:[{name:"show",rawName:"v-show",value:t.appAbout,expression:"appAbout"}],attrs:{id:"app-about"}}),t._v(" "),a("Projects",{directives:[{name:"show",rawName:"v-show",value:t.appProjects,expression:"appProjects"}],attrs:{id:"app-projects"}}),t._v(" "),a("Contact",{directives:[{name:"show",rawName:"v-show",value:t.appContact,expression:"appContact"}],attrs:{id:"app-contact"}})],1)],1)},staticRenderFns:[]};var y=a("VU/8")(g,b,!1,function(t){a("i0DG")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:y},template:"<App/>"})},i0DG:function(t,e){},lH2f:function(t,e){},vyDG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.721489bc6e61fce5cc9a.js.map