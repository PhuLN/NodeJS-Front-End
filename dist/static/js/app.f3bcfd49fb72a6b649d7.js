webpackJsonp([0],{"+9UT":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box",class:{"is-hidden":t.checkConditionsToHide}},[s("div",{staticClass:"columns"},[t._m(0),t._v(" "),s("div",{staticClass:"column is-6",on:{click:function(e){t.editMode=!0}}},[t.editMode?s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskText,expression:"taskText"}],staticClass:"input",class:{"has-text-danger":t.checkIfLate},attrs:{type:"text"},domProps:{value:t.taskText},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.sendTaskChange(e)},blur:t.sendTaskChange,input:function(e){e.target.composing||(t.taskText=e.target.value)}}}):s("p",{class:{"has-text-danger":t.checkIfLate}},[t._v(t._s(t.taskText))])]),t._v(" "),s("div",{staticClass:"column is-2"},[s("div",{staticClass:"field has-addons"},[t._m(1),t._v(" "),s("div",{staticClass:"control"},[s("DatePicker",{on:{selected:t.sendDateLimitChange},model:{value:t.datePickerAcceptedData,callback:function(e){t.datePickerAcceptedData=e},expression:"datePickerAcceptedData"}})],1)])]),t._v(" "),s("div",{staticClass:"column is-2"},[s("label",{staticClass:"checkbox is-pulled-right"},[t._v("Completed\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.todoObj.completed,expression:"todoObj.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.todoObj.completed)?t._i(t.todoObj.completed,null)>-1:t.todoObj.completed},on:{change:[function(e){var s=t.todoObj.completed,a=e.target,o=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&(t.todoObj.completed=s.concat([null])):i>-1&&(t.todoObj.completed=s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.todoObj,"completed",o)},t.changeCompletionStatus]}})])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-2"},[s("span",{staticClass:"icon is-pulled-left"},[s("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"control"},[s("span",{staticClass:"icon is-pulled-left"},[s("i",{staticClass:"fa fa-lg fa-calendar icon-fix",attrs:{"aria-hidden":"true"}})])])}],i={render:a,staticRenderFns:o};e.a=i},"+orn":function(t,e,s){"use strict";var a=s("mtWM"),o=s.n(a),i=s("XILU"),n=s.n(i);e.a={components:{DatePicker:n.a},props:["todoObj","wantCompletedFiltered"],watch:{completeBeforeDate:function(t){this.sendDateLimitChange(new Date(t).getTime())}},data:function(){return{baseURL:"https://nodejs-vue-js-todo.herokuapp.com/todos/"+this.todoObj._id,localDevURL:"http://localhost:3000/todos",completed:this.todoObj.completed,editMode:!1,taskText:this.todoObj.task,completeBeforeDate:this.todoObj.completedDateLimit}},computed:{checkIfLate:function(){return this.completeBeforeDate<(new Date).getTime()&&!1===this.completed},checkConditionsToHide:function(){return this.wantCompletedFiltered&&this.completed},ISOToReadable:function(){var t=new Date(this.completeBeforeDate);return t.getFullYear()+" - "+(t.getMonth()+1)+" - "+t.getDate()},EpochToUTC:function(){var t=new Date(this.completeBeforeDate);return new Date(t).getTime()},datePickerAcceptedData:function(){return new Date(this.completeBeforeDate)}},methods:{changeCompletionStatus:function(){var t=this;o()({method:"PATCH",url:this.baseURL,dataType:"json",contentType:"application/json; charset=utf-8",headers:{"x-auth":localStorage.getItem("token")},data:{completed:!this.completed}}).then(function(e){200===e.status?(t.completed=!t.completed,t.$parent.$parent.updateDBPopup("Task status has been changed","is-success","Success")):t.$parent.$parent.updateDBPopup("Something went wrong","is-danger","Success")})},sendTaskChange:function(){var t=this;o()({method:"PATCH",url:this.baseURL,dataType:"json",contentType:"application/json; charset=utf-8",headers:{"x-auth":localStorage.getItem("token")},data:{task:this.taskText,completed:this.completed}}).then(function(e){t.editMode=!1,200===e.status?t.$parent.$parent.updateDBPopup("Task have been changed","is-success","Success"):t.$parent.$parent.updateDBPopup("Something went wrong","is-danger","Success")})},sendDateLimitChange:function(t){var e=this;o()({method:"PATCH",url:this.baseURL,dataType:"json",contentType:"application/json; charset=utf-8",headers:{"x-auth":localStorage.getItem("token")},data:{task:this.taskText,completed:this.completed,completedDateLimit:new Date(t).getTime()}}).then(function(s){200===s.status?(e.completeBeforeDate=t,e.$parent.$parent.updateDBPopup("Limit has been changed","is-success","Success")):e.$parent.$parent.updateDBPopup("Something went wrong","is-danger","Success")})}}}},"2LiO":function(t,e){},"5W1q":function(t,e){},"8qur":function(t,e,s){"use strict";var a=s("mtWM"),o=s.n(a);e.a={data:function(){return{email:"",password:"",userBaseURL:"https://nodejs-vue-js-todo.herokuapp.com/users",loggingIn:!1,loginErrorHidden:!0}},methods:{switchMode:function(){this.$parent.switchModes()},login:function(){var t=this;this.loggingIn=!0,o()({method:"POST",url:this.userBaseURL+"/login",contentType:"application/json; charset=utf-8",dataType:"json",data:{email:this.email,password:this.password}}).then(function(e){t.loggingIn=!1,t.loginErrorHidden=!0,localStorage.setItem("token",e.headers["x-auth"]),console.log(e.headers["x-auth"]),t.$router.push("/todo")}).catch(function(e){t.loggingIn=!1,t.loginErrorHidden=!1,console.log(e)})}}}},CBJJ:function(t,e,s){"use strict";e.a={props:{propsHide:Boolean,propsMessage:String,propsClass:String,propsHeader:String},data:function(){return{popupHide:!0,popupMessage:"",popupClass:"",popupHeader:""}},watch:{propsHide:function(t){this.popupHide=t},propsMessage:function(t){this.popupMessage=t},propsClass:function(t){this.popupClass=t},propsHeader:function(t){this.popupHeader=t}}}},Csx9:function(t,e,s){"use strict";var a=s("mtWM"),o=s.n(a),i=s("DBZl");e.a={components:{Login:i.a},data:function(){return{email:"",password:"",passwordConfirm:"",userBaseURL:"https://nodejs-vue-js-todo.herokuapp.com/users",signingUp:!1,signupErrorHidden:!0}},methods:{switchMode:function(){this.$parent.switchModes()},signup:function(){var t=this;this.password===this.passwordConfirm?(this.signingUp=!0,o()({method:"POST",url:""+this.userBaseURL,contentType:"application/json; charset=utf-8",dataType:"json",data:{email:this.email,password:this.password}}).then(function(e){t.signingUp=!1,t.signupErrorHidden=!0,localStorage.setItem("token",e.headers["x-auth"]),t.$router.push("/todo")}).catch(function(e){t.signingUp=!1,t.signupErrorHidden=!1,console.log(e)})):this.signupErrorHidden=!1}}}},DBZl:function(t,e,s){"use strict";function a(t){s("yJRs")}var o=s("8qur"),i=s("Wb43"),n=s("VU/8"),r=a,c=n(o.a,i.a,!1,r,null,null);e.a=c.exports},Drc2:function(t,e,s){"use strict";var a=s("mtWM"),o=s.n(a);e.a={data:function(){return{userBaseURL:"https://nodejs-vue-js-todo.herokuapp.com/users"}},methods:{logout:function(){var t=this;o.a.delete(this.userBaseURL+"/me/logout",{headers:{"x-auth":localStorage.getItem("token")}}).then(function(){localStorage.removeItem("token"),t.$router.push("/")})}}}},ESw6:function(t,e){},GZsM:function(t,e,s){"use strict";function a(t){s("Iyyw")}var o=s("Csx9"),i=s("rksb"),n=s("VU/8"),r=a,c=n(o.a,i.a,!1,r,null,null);e.a=c.exports},"H/xb":function(t,e,s){"use strict";var a=s("lfLh"),o=s("hOzd"),i=s("PSDz");e.a={name:"TodoPage",components:{Navbar:a.a,TodoApp:o.a,SavedPopup:i.a},data:function(){return{popupHide:!0,popupType:"",popupMessage:"",popupHeader:""}},methods:{updateDBPopup:function(t,e,s){this.popupHide=!1,this.popupType=e,this.popupMessage=t,this.popupHeader=s,setTimeout(this.closePopup,2e3)},closePopup:function(){this.popupHide=!0}}}},Iyyw:function(t,e){},LFgg:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"hero is-success is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"column is-3 login-block"},[s("Login",{class:{"is-hidden":t.signupMode}}),t._v(" "),s("Signup",{class:{"is-hidden":!t.signupMode}}),t._v(" "),t._m(0)],1)])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"has-text-light"},[t._v("Source code : "),s("a",{staticClass:"has-text-info"},[t._v("[Github]")])])}],i={render:a,staticRenderFns:o};e.a=i},M93x:function(t,e,s){"use strict";function a(t){s("VAD2")}var o=s("xJD8"),i=s("cil4"),n=s("VU/8"),r=a,c=n(o.a,i.a,!1,r,null,null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),o=s("M93x"),i=s("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:o.a}})},NNMf:function(t,e){},OeyT:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar has-shadow",attrs:{role:"navigation","aria-label":"dropdown navigation"}},[s("div",{staticClass:"container is-fluid"},[t._m(0),t._v(" "),s("div",{staticClass:"navbar-menu",attrs:{id:"menu"}},[s("div",{staticClass:"navbar-start"}),t._v(" "),s("div",{staticClass:"navbar-end"},[t._m(1),t._v(" "),s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("a",{staticClass:"navbar-link"},[t._v("\n            Account\n          ")]),t._v(" "),s("div",{staticClass:"navbar-dropdown"},[s("a",{staticClass:"navbar-item"},[t._v("\n              Overview\n            ")]),t._v(" "),s("a",{staticClass:"navbar-item"},[t._v("\n              Settings\n            ")]),t._v(" "),s("hr",{staticClass:"navbar-divider"}),t._v(" "),s("a",{staticClass:"navbar-item",on:{click:t.logout}},[t._v("\n              Logout\n            ")])])])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("div",{staticClass:"navbar-item"},[a("img",{attrs:{src:s("Rk5U"),alt:"Bulma: a modern CSS framework based on Flexbox"}}),t._v("\n          Todo\n      ")]),t._v(" "),a("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"menu"}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-item",attrs:{href:""}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-lg fa-github"})])])}],i={render:a,staticRenderFns:o};e.a=i},PSDz:function(t,e,s){"use strict";function a(t){s("wQzj")}var o=s("CBJJ"),i=s("b5my"),n=s("VU/8"),r=a,c=n(o.a,i.a,!1,r,null,null);e.a=c.exports},Ph7K:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"page"}},[s("SavedPopup",{attrs:{propsHide:t.popupHide,propsMessage:t.popupMessage,propsClass:t.popupType,propsHeader:t.popupHeader}}),t._v(" "),s("Navbar"),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[t._m(0),t._v(" "),s("div",{staticClass:"container box is-shadowless todoApp"},[s("TodoApp")],1)])])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero landingSection"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title heroText"},[t._v("\n              Online Todo App\n            ")]),t._v(" "),s("h2",{staticClass:"subtitle heroText"},[t._v("\n              Built with VueJS and NodeJS\n            ")])])])])}],i={render:a,staticRenderFns:o};e.a=i},Rk5U:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAIpwAACKcBMsYCAwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVnSURBVFiF7ZddbFRFGIaf7+zu2bKwEipEJCANMUECRaBKoA1QSDBorISLEr0w1KJNjPGCn6h4tdELJTG1IRG1ASkkGrCSSJRQ0NAlgjSWNU2gCTRiCL8XpiEsSOnuOfN5sS27Z7s927Tc2ffqnJk3mXdmMt8zA+Ma17h8JfkNM7doqUmz1rKYPNimLvEbX0hPMd9YZAx3gi4nrn4pt3Pbg7k/Mxo0EkjRGYApuGSNQi/QU9Q3BgWgFIvemVu0/Prn0lcw4IQgiyyXObZFtHu33Mvte/pdnfbX4/QSE+PnG63m1mvU2CT1PouAs4UDGmw10P2Vd9B5m3W21U/7gps0XYBdub75DXoQWOY3eHezlH0S10YV6goahH0frpRt8xsUsQjndnkCBh0QzXwveVMX/jmTC4uvMQtox6FnsqE53xd2aTFKm19AgOlpFgNThuleAmC7oMbb4QlY4oAKLK/VCcahbekVTgpUqsWliGFDn3BsWb2ewiGu8jAgag0d0TV0dbZI1+D/k+liUwDbZCdeMGAQEBd+a5W+6jpd4xraETruB9kYb5b0itcVETBWxgcQNNRhhm5xSGkCcgMmgKcKJlPOwcAK5k3WE9B2SAFU1+qkeItcrH5NVxPmSqJZ0gAhiKrSH8z1HZBXi60MwLPrZTuwfbj+qnqNhlIg0J/b7qmDNTUaSU/iPMJ01GsEAoBtWSwNJLns4xudhDDKrahDeWtrtswMKdS1tVqaglVqeVcXwHVIHD0sfxfzjSqfwXFCxI9+51OoB2WDjckSwrKIHzrkJUkh3xh1Z2KBRk/AhhqN3HPoJFMOHs5E1UuS4XxjVCkOvbW16tliT8C0xSLbMCdiE93d6i3Wb9TqtNnz6Y3FxPj5Rqv6VzRqhGTQ8SFJ2MU2QP6gm1/S2YE+2m8maAJ25foaXi5OkuafpezTuDbiQ5IPVsq2hpcVy/UjCcBAJX97nS58YhkX/vmDWQLtuPTc6xsgSY4vaGgJUJwkU50RkMQAfnWwxAGjsKVWJ0iStmQHJ8NKJXDpsX42hMIc27pOT1kOcZNFHTKkFoBx6Wr6JUuSqSMhiQuWH+qCA6jb2Sp9O17QNUZpx9Bx+zYbGxOSfn9thiSYjA8g5FJnydAtNnkkmeYMTxKVDElCxVAXMKQsIFatk2In5GKsWlcDV3YmMiSx3QxJVHJ8v46MJFU1/iR5r0qjtguID0liNRoJJjmvMD3fiBJAsNWw1Ezm8rC+0UoJI9ya2E/51rM+JGlcrqVugFVaoIi7kNhxOkMSP99oJOA4EN9xegQkCSm2SpYQBuLbTg8lSb5vTAGVOxMLHDZPwK8rNOJAJy5TkCwhjPGSZDjfmGQoRehtXK6eLfYEFItFtsucVIRoSRrZfEbuAuyt0uhwvnfij4Yke6s0atIkw/iQJKTYloEbce6XVdB5oEKPG6FDHrDnm+e1or5TruX63orLvf3P6UHUnySbElIWO62NaGGSKOzbvEK27a9QjPiQpMQBBWKI+dbVjwS+H/B8timRCZfrAwgZWtQUJ8mMFIvRYUgiGZKE3KGnduiVf6CS2y4pEVwgiPAvwA/l2q7CKSA+6CtxQPOKK4AboGtjV5YkM0ZQjGxT5Mo/OFgMtcKGj0VoMkqHwJ4fF+g+a4AglsmGCrrUUeCyEDJeksxMkdARvEkkD3WeFT3+jFaqcCZsEU06yPpLmUNyZK5G11+Su23z9Jwqhy04Nehb3f1oDsmRuRoNWyRVqXzxojw8JJ6AP83QyMQib5KAxdJkkss+vtFp4E1Scp/yyus+JPl9vpa6D1iFFCjiFokVPRmS+PpGI8UhTXzFVXlUN/Rxjev/of8AXvqI/eLvtogAAAAASUVORK5CYII="},TBvb:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"modal",class:{"is-active":t.modalIsActive}},[s("div",{staticClass:"modal-background"}),t._v(" "),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Add a new todo")]),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.turnModalOff}})]),t._v(" "),s("div",{staticClass:"modal-card-body",staticStyle:{height:"480px"}},[s("label",{staticClass:"label"},[t._v("Task to complete")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskToAdd,expression:"taskToAdd"}],staticClass:"input",attrs:{type:"text",placeholder:"Task"},domProps:{value:t.taskToAdd},on:{input:function(e){e.target.composing||(t.taskToAdd=e.target.value)}}}),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-3"}),t._v(" "),s("div",{staticClass:"column is-6"},[s("label",{staticClass:"label"},[t._v("Needs to be completed before")]),t._v(" "),s("DatePicker",{model:{value:t.limitToAdd,callback:function(e){t.limitToAdd=e},expression:"limitToAdd"}})],1)])]),t._v(" "),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-success",on:{click:t.addNewTodo}},[t._v("Add")]),t._v(" "),s("button",{staticClass:"button",on:{click:t.turnModalOff}},[t._v("Cancel")])])])]),t._v(" "),s("div",{staticClass:"box top-rounded-border"},[s("div",{staticClass:"field is-grouped"},[s("p",{staticClass:"control is-expanded"},[s("a",{staticClass:"button is-primary",on:{click:function(e){t.modalIsActive=!0}}},[t._v("Add new todo")])]),t._v(" "),s("p",{staticClass:"control"},[s("a",{staticClass:"button noborder"},[s("a",{staticClass:"has-text-centered",on:{click:function(e){t.completedHidden=!t.completedHidden}}},[t._v("\n            "+t._s(t.toggleMessage)+"\n          ")])])])])]),t._v(" "),s("div",{staticClass:"bottom-margin"},t._l(t.todos,function(e){return s("TodoItem",{key:e._id,staticClass:"is-marginless is-radiusless",attrs:{wantCompletedFiltered:t.completedHidden,todoObj:e}})})),t._v(" "),s("div",{staticClass:"box bottom-rounded-border"},[t._v("\n    Nothing to see here\n  ")])])},o=[],i={render:a,staticRenderFns:o};e.a=i},VAD2:function(t,e){},Wb43:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box biggerpaddingbox"},[s("h3",{staticClass:"title has-text-grey"},[t._v("Login")]),t._v(" "),s("p",{staticClass:"subtitle has-text-grey"},[t._v("Please login to proceed.")]),t._v(" "),s("hr"),t._v(" "),s("form",[s("p",{staticClass:"has-text-danger",class:{"is-hidden":t.loginErrorHidden}},[t._v("Authentification failed")]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input is-medium",attrs:{type:"email",placeholder:"Your Email",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input is-medium",attrs:{type:"password",placeholder:"Your Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),s("a",{staticClass:"button is-block is-primary is-medium bottom-margin loginbtn",class:{"is-loading":t.loggingIn},on:{click:t.login}},[t._v("Login")])]),t._v(" "),s("hr"),t._v(" "),s("div",[s("p",{staticClass:"has-text-grey"},[t._v("Don't have an account?")]),t._v(" "),s("a",{staticClass:"has-text-info",on:{click:t.switchMode}},[t._v("Sign Up")])])])},o=[],i={render:a,staticRenderFns:o};e.a=i},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),o=s("/ocq"),i=s("blJz"),n=s("ybDs");a.a.use(o.a),e.a=new o.a({mode:"history",routes:[{path:"/todo",name:"Todo",component:i.a},{path:"/",name:"Auth",component:n.a}]})},"Yw/y":function(t,e,s){"use strict";function a(t){s("zzcD")}var o=s("+orn"),i=s("+9UT"),n=s("VU/8"),r=a,c=n(o.a,i.a,!1,r,null,null);e.a=c.exports},b5my:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slider",class:{close:t.popupHide}},[s("article",{staticClass:"message",class:t.popupClass},[s("div",{staticClass:"message-header"},[t._v("\n      "+t._s(t.popupHeader)+"\n    ")]),t._v(" "),s("div",{staticClass:"message-body"},[t._v("\n      "+t._s(t.popupMessage)+"\n    ")])])])},o=[],i={render:a,staticRenderFns:o};e.a=i},blJz:function(t,e,s){"use strict";function a(t){s("yrVR")}var o=s("H/xb"),i=s("Ph7K"),n=s("VU/8"),r=a,c=n(o.a,i.a,!1,r,"data-v-32b79808",null);e.a=c.exports},cil4:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],i={render:a,staticRenderFns:o};e.a=i},djXH:function(t,e,s){"use strict";var a=s("mtWM"),o=s.n(a),i=s("Yw/y"),n=s("XILU"),r=s.n(n);e.a={data:function(){return{todos:[],baseTodoURL:"https://nodejs-vue-js-todo.herokuapp.com/todos",localDevURL:"http://localhost:3000/todos",modalIsActive:!1,taskToAdd:"",limitToAdd:"",completedHidden:!1}},components:{TodoItem:i.a,DatePicker:r.a},created:function(){this.getAllTodos()},computed:{toggleMessage:function(){return this.completedHidden?"Show completed tasks":"Hide completed tasks"}},methods:{turnModalOff:function(){this.modalIsActive=!1,this.taskToAdd="",this.limitToAdd=""},getAllTodos:function(){var t=this;this.todos=[],o.a.get(this.baseTodoURL,{headers:{"x-auth":localStorage.getItem("token")}}).then(function(e){console.log(e);for(var s=0;s<e.data.todos.length;s+=1)t.todos.push(e.data.todos[s])}).catch(function(e){401===e.response.status?t.$router.push("/"):t.$parent.updateDBPopup("You shouldn't be seeing this, please contact the developper","is-danger","Warning")})},addNewTodo:function(){var t=this;""!==this.taskToAdd&&""!==this.limitToAdd?(this.modalIsActive=!1,o()({method:"POST",url:this.baseTodoURL,contentType:"application/json; charset=utf-8",dataType:"json",headers:{"x-auth":localStorage.getItem("token")},data:{task:this.taskToAdd,completedDateLimit:new Date(this.limitToAdd).getTime()}}).then(function(){t.$parent.updateDBPopup("Task has been added","is-success","Success"),t.taskToAdd="",t.limitToAdd="",t.getAllTodos()}).catch(function(t){console.log(t)})):this.$parent.updateDBPopup("All fields are required","is-danger","Warning")}}}},hOzd:function(t,e,s){"use strict";function a(t){s("ESw6")}var o=s("djXH"),i=s("TBvb"),n=s("VU/8"),r=a,c=n(o.a,i.a,!1,r,null,null);e.a=c.exports},lfLh:function(t,e,s){"use strict";var a=s("Drc2"),o=s("OeyT"),i=s("VU/8"),n=i(a.a,o.a,!1,null,null,null);e.a=n.exports},rksb:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box biggerpaddingbox"},[s("h3",{staticClass:"title has-text-grey"},[t._v("Sign up")]),t._v(" "),s("p",{staticClass:"subtitle has-text-grey"},[t._v("Start organising now")]),t._v(" "),s("hr"),t._v(" "),s("form",[s("p",{staticClass:"has-text-danger",class:{"is-hidden":t.signupErrorHidden}},[t._v("\n      Error signing up\n    ")]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input is-medium",attrs:{type:"email",placeholder:"Your Email",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input is-medium",attrs:{type:"password",placeholder:"Your Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],staticClass:"input is-medium",attrs:{type:"password",placeholder:"Confirm your Password"},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}})])]),t._v(" "),s("a",{staticClass:"button is-block is-primary is-medium bottom-margin loginbtn",class:{"is-loading":t.signingUp},on:{click:t.signup}},[t._v("Sign up")])]),t._v(" "),s("hr"),t._v(" "),s("div",[s("p",{staticClass:"has-text-grey"},[t._v("Already have an account?")]),t._v(" "),s("a",{staticClass:"has-text-info",on:{click:t.switchMode}},[t._v("Sign in")])])])},o=[],i={render:a,staticRenderFns:o};e.a=i},sqa4:function(t,e,s){"use strict";var a=s("DBZl"),o=s("GZsM");e.a={components:{Login:a.a,Signup:o.a},data:function(){return{email:"",password:"",loggingIn:!1,loginErrorHidden:!0,signupMode:!1}},methods:{switchModes:function(){this.signupMode=!this.signupMode}}}},wQzj:function(t,e){},xJD8:function(t,e,s){"use strict";var a=s("5W1q"),o=(s.n(a),s("2LiO"));s.n(o);e.a={name:"app"}},yJRs:function(t,e){},ybDs:function(t,e,s){"use strict";function a(t){s("NNMf")}var o=s("sqa4"),i=s("LFgg"),n=s("VU/8"),r=a,c=n(o.a,i.a,!1,r,null,null);e.a=c.exports},yrVR:function(t,e){},zzcD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f3bcfd49fb72a6b649d7.js.map