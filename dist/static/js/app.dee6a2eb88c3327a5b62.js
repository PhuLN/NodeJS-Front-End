webpackJsonp([1],{"+9UT":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{staticClass:"columns"},[t._m(0),t._v(" "),s("div",{staticClass:"column is-8"},[t._v("\n      "+t._s(t.todoObj.task)+"\n    ")]),t._v(" "),s("div",{staticClass:"column is-2"},[s("label",{staticClass:"checkbox is-pulled-right"},[t._v("Completed\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.todoObj.completed,expression:"todoObj.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.todoObj.completed)?t._i(t.todoObj.completed,null)>-1:t.todoObj.completed},on:{change:[function(e){var s=t.todoObj.completed,a=e.target,n=!!a.checked;if(Array.isArray(s)){var o=t._i(s,null);a.checked?o<0&&(t.todoObj.completed=s.concat([null])):o>-1&&(t.todoObj.completed=s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.todoObj,"completed",n)},t.changeCompletionStatus]}})])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-2"},[s("span",{staticClass:"icon is-pulled-left"},[s("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])])}],o={render:a,staticRenderFns:n};e.a=o},"+orn":function(t,e,s){"use strict";var a=s("mtWM"),n=s.n(a);e.a={props:["todoObj"],data:function(){return{completed:this.todoObj.completed}},methods:{changeCompletionStatus:function(){var t=this;n()({method:"PATCH",url:"https://nodejs-vue-js-todo.herokuapp.com/todos/"+this.todoObj._id,dataType:"json",contentType:"application/json; charset=utf-8",data:{completed:!this.completed}}).then(function(e){200===e.status?t.$parent.$parent.updateDBPopup("Changes have been saved","is-success"):t.$parent.$parent.updateDBPopup("Something went wrong","is-danger")})}}}},"2LiO":function(t,e){},"5W1q":function(t,e){},CBJJ:function(t,e,s){"use strict";e.a={props:{propsHide:Boolean,propsMessage:String,propsClass:String},data:function(){return{popupHide:!0,popupMessage:"",popupClass:""}},watch:{propsHide:function(t){this.popupHide=t},propsMessage:function(t){this.popupMessage=t},propsClass:function(t){this.popupClass=t}}}},"H/xb":function(t,e,s){"use strict";var a=s("lfLh"),n=s("a1CX"),o=s("hOzd"),i=s("PSDz");e.a={name:"TodoPage",components:{Navbar:a.a,SideMenu:n.a,TodoApp:o.a,SavedPopup:i.a},data:function(){return{popupHide:!0,popupType:"",popupMessage:""}},methods:{updateDBPopup:function(t,e){this.popupHide=!1,this.popupType=e,this.popupMessage=t,setTimeout(this.closePopup,2e3)},closePopup:function(){this.popupHide=!0}}}},M93x:function(t,e,s){"use strict";function a(t){s("VAD2")}var n=s("xJD8"),o=s("cil4"),i=s("VU/8"),r=a,c=i(n.a,o.a,!1,r,null,null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("M93x"),o=s("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:n.a}})},OeyT:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar has-shadow",attrs:{role:"navigation","aria-label":"dropdown navigation"}},[a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"navbar-brand"},[a("div",{staticClass:"navbar-item"},[a("img",{attrs:{src:s("Rk5U"),alt:"Bulma: a modern CSS framework based on Flexbox"}}),t._v("\n          Todo\n      ")]),t._v(" "),a("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"menu"}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])]),t._v(" "),a("div",{staticClass:"navbar-menu",attrs:{id:"menu"}},[a("div",{staticClass:"navbar-start"})])])])}],o={render:a,staticRenderFns:n};e.a=o},PSDz:function(t,e,s){"use strict";function a(t){s("wQzj")}var n=s("CBJJ"),o=s("b5my"),i=s("VU/8"),r=a,c=i(n.a,o.a,!1,r,null,null);e.a=c.exports},Ph7K:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"background-color":"#F5F6F7"},attrs:{id:"page"}},[s("SavedPopup",{attrs:{propsHide:t.popupHide,propsMessage:t.popupMessage,propsClass:t.popupType}}),t._v(" "),s("Navbar"),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[t._m(0),t._v(" "),s("div",{staticClass:"container box is-shadowless transparentBG"},[s("TodoApp")],1)])])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero landingSection"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title heroText"},[t._v("\n              Online Todo App\n            ")]),t._v(" "),s("h2",{staticClass:"subtitle heroText"},[t._v("\n              Built with VueJS and NodeJS\n            ")])])])])}],o={render:a,staticRenderFns:n};e.a=o},Rk5U:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAIpwAACKcBMsYCAwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVnSURBVFiF7ZddbFRFGIaf7+zu2bKwEipEJCANMUECRaBKoA1QSDBorISLEr0w1KJNjPGCn6h4tdELJTG1IRG1ASkkGrCSSJRQ0NAlgjSWNU2gCTRiCL8XpiEsSOnuOfN5sS27Z7s927Tc2ffqnJk3mXdmMt8zA+Ma17h8JfkNM7doqUmz1rKYPNimLvEbX0hPMd9YZAx3gi4nrn4pt3Pbg7k/Mxo0EkjRGYApuGSNQi/QU9Q3BgWgFIvemVu0/Prn0lcw4IQgiyyXObZFtHu33Mvte/pdnfbX4/QSE+PnG63m1mvU2CT1PouAs4UDGmw10P2Vd9B5m3W21U/7gps0XYBdub75DXoQWOY3eHezlH0S10YV6goahH0frpRt8xsUsQjndnkCBh0QzXwveVMX/jmTC4uvMQtox6FnsqE53xd2aTFKm19AgOlpFgNThuleAmC7oMbb4QlY4oAKLK/VCcahbekVTgpUqsWliGFDn3BsWb2ewiGu8jAgag0d0TV0dbZI1+D/k+liUwDbZCdeMGAQEBd+a5W+6jpd4xraETruB9kYb5b0itcVETBWxgcQNNRhhm5xSGkCcgMmgKcKJlPOwcAK5k3WE9B2SAFU1+qkeItcrH5NVxPmSqJZ0gAhiKrSH8z1HZBXi60MwLPrZTuwfbj+qnqNhlIg0J/b7qmDNTUaSU/iPMJ01GsEAoBtWSwNJLns4xudhDDKrahDeWtrtswMKdS1tVqaglVqeVcXwHVIHD0sfxfzjSqfwXFCxI9+51OoB2WDjckSwrKIHzrkJUkh3xh1Z2KBRk/AhhqN3HPoJFMOHs5E1UuS4XxjVCkOvbW16tliT8C0xSLbMCdiE93d6i3Wb9TqtNnz6Y3FxPj5Rqv6VzRqhGTQ8SFJ2MU2QP6gm1/S2YE+2m8maAJ25foaXi5OkuafpezTuDbiQ5IPVsq2hpcVy/UjCcBAJX97nS58YhkX/vmDWQLtuPTc6xsgSY4vaGgJUJwkU50RkMQAfnWwxAGjsKVWJ0iStmQHJ8NKJXDpsX42hMIc27pOT1kOcZNFHTKkFoBx6Wr6JUuSqSMhiQuWH+qCA6jb2Sp9O17QNUZpx9Bx+zYbGxOSfn9thiSYjA8g5FJnydAtNnkkmeYMTxKVDElCxVAXMKQsIFatk2In5GKsWlcDV3YmMiSx3QxJVHJ8v46MJFU1/iR5r0qjtguID0liNRoJJjmvMD3fiBJAsNWw1Ezm8rC+0UoJI9ya2E/51rM+JGlcrqVugFVaoIi7kNhxOkMSP99oJOA4EN9xegQkCSm2SpYQBuLbTg8lSb5vTAGVOxMLHDZPwK8rNOJAJy5TkCwhjPGSZDjfmGQoRehtXK6eLfYEFItFtsucVIRoSRrZfEbuAuyt0uhwvnfij4Yke6s0atIkw/iQJKTYloEbce6XVdB5oEKPG6FDHrDnm+e1or5TruX63orLvf3P6UHUnySbElIWO62NaGGSKOzbvEK27a9QjPiQpMQBBWKI+dbVjwS+H/B8timRCZfrAwgZWtQUJ8mMFIvRYUgiGZKE3KGnduiVf6CS2y4pEVwgiPAvwA/l2q7CKSA+6CtxQPOKK4AboGtjV5YkM0ZQjGxT5Mo/OFgMtcKGj0VoMkqHwJ4fF+g+a4AglsmGCrrUUeCyEDJeksxMkdARvEkkD3WeFT3+jFaqcCZsEU06yPpLmUNyZK5G11+Su23z9Jwqhy04Nehb3f1oDsmRuRoNWyRVqXzxojw8JJ6AP83QyMQib5KAxdJkkss+vtFp4E1Scp/yyus+JPl9vpa6D1iFFCjiFokVPRmS+PpGI8UhTXzFVXlUN/Rxjev/of8AXvqI/eLvtogAAAAASUVORK5CYII="},TBvb:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.todos,function(t){return s("TodoItem",{key:t._id,staticClass:"is-marginless is-radiusless",attrs:{todoObj:t}})}))},n=[],o={render:a,staticRenderFns:n};e.a=o},VAD2:function(t,e){},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),n=s("/ocq"),o=s("blJz");a.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/",name:"Todo",component:o.a}]})},"Yw/y":function(t,e,s){"use strict";function a(t){s("zzcD")}var n=s("+orn"),o=s("+9UT"),i=s("VU/8"),r=a,c=i(n.a,o.a,!1,r,null,null);e.a=c.exports},a1CX:function(t,e,s){"use strict";var a=s("lQlJ"),n=s("VU/8"),o=n(null,a.a,!1,null,null,null);e.a=o.exports},b5my:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slider",class:{close:t.popupHide}},[s("article",{staticClass:"message",class:t.popupClass},[s("div",{staticClass:"message-header"},[t._v("\n      Success\n    ")]),t._v(" "),s("div",{staticClass:"message-body"},[t._v("\n      "+t._s(t.popupMessage)+"\n    ")])])])},n=[],o={render:a,staticRenderFns:n};e.a=o},blJz:function(t,e,s){"use strict";function a(t){s("yrVR")}var n=s("H/xb"),o=s("Ph7K"),i=s("VU/8"),r=a,c=i(n.a,o.a,!1,r,"data-v-32b79808",null);e.a=c.exports},cil4:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],o={render:a,staticRenderFns:n};e.a=o},djXH:function(t,e,s){"use strict";var a=s("mtWM"),n=s.n(a),o=s("Yw/y");e.a={data:function(){return{todos:[],baseTodoURL:"https://nodejs-vue-js-todo.herokuapp.com/todos"}},components:{TodoItem:o.a},created:function(){this.getAllTodos()},methods:{getAllTodos:function(){var t=this;this.todos=[],n.a.get(this.baseTodoURL).then(function(e){for(var s=0;s<e.data.todos.length;s+=1)t.todos.push(e.data.todos[s])})}}}},hOzd:function(t,e,s){"use strict";var a=s("djXH"),n=s("TBvb"),o=s("VU/8"),i=o(a.a,n.a,!1,null,null,null);e.a=i.exports},lQlJ:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("div",[t._v("Picture")]),t._v(" "),s("div",[t._v("Name")])]),t._v(" "),s("div",[s("div",[t._v("Menu item")]),t._v(" "),s("div",[t._v("Menu item")]),t._v(" "),s("div",[t._v("Menu item")])])])}],o={render:a,staticRenderFns:n};e.a=o},lfLh:function(t,e,s){"use strict";var a=s("OeyT"),n=s("VU/8"),o=n(null,a.a,!1,null,null,null);e.a=o.exports},wQzj:function(t,e){},xJD8:function(t,e,s){"use strict";var a=s("5W1q"),n=(s.n(a),s("2LiO"));s.n(n);e.a={name:"app"}},yrVR:function(t,e){},zzcD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.dee6a2eb88c3327a5b62.js.map