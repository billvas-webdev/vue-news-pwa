webpackJsonp([1],[,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";a.d(e,"a",function(){return o});var s=a(87),n=a.n(s),r=a(51),i=a.n(r),o=i.a.create({baseURL:"//api.openweathermap.org/data/2.5/"});o.interceptors.request.use(function(t){return t.params.APPID="a1229545e71f4cf85672eee69b3b302e",t.params.units="imperial",t},function(t){return n.a.reject(t)})},,,,,,,,,function(t,e,a){"use strict";function s(t){a(140)}var n=a(57),r=a(141),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-3a7fb018",null);e.a=c.exports},function(t,e,a){"use strict";function s(t){a(142)}var n=a(58),r=a(143),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-5341d1b8",null);e.a=c.exports},function(t,e,a){"use strict";function s(t){a(144)}var n=a(59),r=a(145),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-7323d745",null);e.a=c.exports},function(t,e,a){"use strict";function s(t){a(146)}var n=a(60),r=a(150),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-7ce6d2ef",null);e.a=c.exports},,,function(t,e,a){"use strict";var s=a(78);e.a={name:"app",components:{HeadNav:s.a}}},function(t,e,a){"use strict";e.a={name:"HeadNav"}},function(t,e,a){"use strict";var s=a(35),n=a(155),r=a(158),i=a(66);e.a={name:"app",components:{CitySearch:s.a,SourceSelection:n.a,Newslist:r.a,FootComp:i.a},data:function(){return{source:""}},methods:{sourceChanged:function(t){this.source=t}}}},function(t,e,a){"use strict";function s(t){a(86)}var n=a(36),r=a(154),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-c92e3262",null);e.a=c.exports},function(t,e,a){"use strict";var s=a(17),n=a(26),r=a(27),i=a(28),o=a(29),c=a(151);e.a={name:"CitySearch",components:{"weather-summary":n.a,"weather-data":r.a,"load-spinner":i.a,"message-container":o.a,"favorite-cities":c.a},data:function(){return{results:null,query:"",showLoading:!1,messages:[],favorites:[]}},created:function(){this.$ls.get("favoriteCities")&&(this.favorites=this.$ls.get("favoriteCities"))},methods:{saveCity:function(t){this.favorites.push(t),this.$ls.set("favoriteCities",this.favorites)},getCities:function(){var t=this;this.results=null,this.showLoading=!0;var e="CitySearch_"+this.query;this.$ls.get(e)?(console.log("Cached query detected."),this.results=this.$ls.get(e),this.showLoading=!1):(console.log("No cache available. Making API request."),s.a.get("find",{params:{q:this.query}}).then(function(a){t.$ls.set(e,a.data,9e5),console.log("New query has been cached as: "+e),t.results=a.data,t.showLoading=!1}).catch(function(e){t.messages.push({type:"error",text:e.message}),t.showLoading=!1}))}}}},,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";e.a={name:"WeatherSummary",data:function(){return{}},props:{weatherData:Array}}},function(t,e,a){"use strict";e.a={name:"WeatherData",data:function(){return{}},props:{weatherData:Object}}},function(t,e,a){"use strict";e.a={name:"CubeSpinner"}},function(t,e,a){"use strict";var s=a(147);a(62),e.a={name:"MessageContainer",props:{messages:Array},components:{"message-item":s.a}}},function(t,e,a){"use strict";a(62),e.a={name:"MessageContainer",props:{message:Object},data:function(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}},created:function(){setTimeout(this.close,5e3)}}},function(t,e){},function(t,e,a){"use strict";e.a={name:"FavoriteCities",data:function(){return{}},props:{favoriteCities:Array},methods:{removeCity:function(t){var e=this.favoriteCities.indexOf(t);this.favoriteCities.splice(e,1),this.$ls.set("favoriteCities",this.favoriteCities)}}}},function(t,e,a){"use strict";e.a={name:"SourceSelection",data:function(){return{sources:[],source:""}},methods:{sourceChanged:function(t){for(var e=0;e<this.sources.length;e++)this.sources[e].id==t.target.value&&(this.source=this.sources[e]);this.$emit("sourceChanged",t.target.value)}},created:function(){var t=this;this.axios.get("https://newsapi.org/v2/sources?language=en&apiKey=30fdd9c8493742eebe75a786fc36f1bd").then(function(e){t.sources=e.data.sources}).catch(function(e){t.errors.push(e)})}}},function(t,e,a){"use strict";e.a={name:"Newslist",props:["source"],data:function(){return{articles:[],errors:[]}},methods:{updateSource:function(t){var e=this;this.axios.get("https://newsapi.org/v2/top-headlines?sources="+t+"&apiKey=30fdd9c8493742eebe75a786fc36f1bd").then(function(t){console.log(t.data),e.articles=t.data.articles}).catch(function(t){})}},created:function(){this.updateSource(this.source)},watch:{source:function(t){this.updateSource(t)}}}},function(t,e,a){"use strict";function s(t){a(161)}var n=a(67),r=a(162),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-a0607a50",null);e.a=c.exports},function(t,e,a){"use strict";e.a={name:"FootComp"}},function(t,e,a){"use strict";e.a={name:"About",data:function(){return{msg:"This project is a responsive web application that leverages Vue JS, Axios, Node JS and News API. Hosted on a secure network to allow for service workers to cache content and allow resources to be available offline. It also provides up to the minute news content from over 50 news sources and access to the news organization's websites."}}}},function(t,e,a){"use strict";a(66);e.a={name:"Contact",components:{},data:function(){return{msg:"If you are interested in connecting with me about other web projects, I'd love to hear from you!"}}}},function(t,e,a){"use strict";var s=a(17),n=a(26),r=a(27),i=a(28),o=a(29);e.a={name:"CurrentWeather",components:{"weather-summary":n.a,"weather-data":r.a,"load-spinner":i.a,"message-container":o.a},data:function(){return{weatherData:null,messages:[],query:"",showLoading:!1}},created:function(){var t=this;this.showLoading=!0;var e="currentWeather_"+this.$route.params.cityId;this.$ls.get(e)?(console.log("Cached value detected."),this.weatherData=this.$ls.get(e),this.showLoading=!1):(console.log("No cache detected. Making API request."),s.a.get("weather",{params:{id:this.$route.params.cityId}}).then(function(a){t.$ls.set(e,a.data,9e5),t.showLoading=!1,t.weatherData=a.data}).catch(function(e){t.showLoading=!1,t.messages.push({type:"error",text:e.message})}))}}},function(t,e,a){"use strict";var s=a(177),n=a.n(s),r=a(17),i=a(26),o=a(27),c=a(28),u=a(29);e.a={name:"Forecast",components:{"weather-summary":i.a,"weather-data":o.a,"message-container":u.a,"load-spinner":c.a},data:function(){return n()({weatherData:null,messages:[],query:"",showLoading:!1},"messages",[])},created:function(){var t=this;this.showLoading=!0;var e="currentWeather_"+this.$route.params.cityId;this.$ls.get(e)?(console.log("Cached value detected."),this.weatherData=this.$ls.get(e),this.showLoading=!1):(console.log("No cache detected. Making API request."),r.a.get("forecast",{params:{id:this.$route.params.cityId}}).then(function(a){t.$ls.set(e,a.data,9e5),t.showLoading=!1,t.weatherData=a.data}).catch(function(e){t.showLoading=!1,t.messages.push({type:"error",text:e.message})}))},filters:{formatDate:function(t){var e=new Date(1e3*t),a=["January","February","March","April","May","June","July","August","September","October","November","December"],s=e.getDate(),n=e.getMonth(),r=e.getHours();return 12===r?r="Noon":0===r?r="Midnight":r>12?r=r-12+"PM":r<12&&(r+="AM"),a[n]+" "+s+" @ "+r}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(30),n=a(75),r=a(82),i=a(182),o=a.n(i),c=a(51),u=a.n(c),l=a(183),v=a.n(l);s.a.config.productionTip=!1,s.a.use(v.a,u.a);var d={namespace:"weather_"};s.a.use(o.a,d),new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:n.a}})},,,function(t,e,a){"use strict";function s(t){a(76)}var n=a(32),r=a(81),i=a(0),o=s,c=i(n.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e){},,function(t,e,a){"use strict";function s(t){a(79)}var n=a(33),r=a(80),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-6581f1f8",null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-inverse"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),t._v(" Daily News and Weather")])],1),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[a("ul",{staticClass:"nav navbar-nav"},[a("li",[a("router-link",{attrs:{to:"/about"}},[t._v("About"),a("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/contact"}},[t._v("Contact"),a("span",{staticClass:"sr-only"},[t._v("(current)")])])],1)])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"})])}],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fadeInDownBig"}},[a("div",{staticClass:"animated fadeInDownBig"},[a("div",{staticClass:"container",attrs:{id:"app"}},[a("HeadNav"),t._v(" "),a("router-view")],1)])])},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";var s=a(30),n=a(83),r=a(84),i=a(164),o=a(169),c=a(35),u=a(172),l=a(175);s.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/About",name:"About",component:i.a},{path:"/Contact",name:"Contact",component:o.a},{path:"/",name:"CitySearch",component:c.a},{path:"/:cityId/current",name:"CurrentWeather",component:u.a},{path:"/:cityId/forecast",name:"Forecast",component:l.a}]})},,function(t,e,a){"use strict";function s(t){a(85)}var n=a(34),r=a(163),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-f404fc98",null);e.a=c.exports},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.weatherData,function(e){return a("div",{staticClass:"weatherSummary"},[a("img",{attrs:{src:"http://openweathermap.org/img/w/"+e.icon+".png",alt:e.main}}),t._v(" "),a("br"),t._v(" "),a("b",[t._v(t._s(e.main))])])}))},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dl",[t.weatherData.temp!=t.weatherData.temp_min?a("dt",[t._v("Current Temp")]):t._e(),t._v(" "),t.weatherData.temp!=t.weatherData.temp_min?a("dd",[t._v(t._s(t.weatherData.temp)+"°F")]):t._e(),t._v(" "),a("dt",[t._v("Humidity")]),t._v(" "),a("dd",[t._v(t._s(t.weatherData.humidity)+"%")]),t._v(" "),a("dt",[t._v("High")]),t._v(" "),a("dd",[t._v(t._s(t.weatherData.temp_max)+"°F")]),t._v(" "),a("dt",[t._v("Low")]),t._v(" "),a("dd",[t._v(t._s(t.weatherData.temp_min)+"°F")])])},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Loading...")]),t._v(" "),a("div",{staticClass:"sk-folding-cube"},[a("div",{staticClass:"sk-cube1 sk-cube"}),t._v(" "),a("div",{staticClass:"sk-cube2 sk-cube"}),t._v(" "),a("div",{staticClass:"sk-cube4 sk-cube"}),t._v(" "),a("div",{staticClass:"sk-cube3 sk-cube"})])])}],r={render:s,staticRenderFns:n};e.a=r},function(t,e){},function(t,e,a){"use strict";function s(t){a(148)}var n=a(61),r=a(149),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-51c4bc44",null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",appear:"",tag:"div"}},[a("li",{directives:[{name:"show",rawName:"v-show",value:t.showMessage,expression:"showMessage"}],class:[t.message.type,"message"]},[t._v("\n    "+t._s(t.message.text)+"\n    "),a("button",{on:{click:t.close}},[t._v("close")])])])},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-container"},[t.messages.length>0?a("ul",t._l(t.messages,function(t,e){return a("message-item",{key:e,attrs:{message:t}})})):t._e()])},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";function s(t){a(152)}var n=a(63),r=a(153),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-599fdacf",null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"favorite-cities"},[t._m(0),t._v(" "),t.favoriteCities.length<1?a("li",[t._v("No favorites cities to display.")]):t._e(),t._v(" "),t._l(t.favoriteCities,function(e){return a("li",[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:e.id}}}},[t._v(t._s(e.name))]),t._v(" "),a("button",{staticClass:"remove",on:{click:function(a){t.removeCity(e)}}},[t._v("x")])],1)})],2)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("h2",[t._v("Favorite Cities")])])}],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron"},[a("favorite-cities",{attrs:{favoriteCities:t.favorites}}),t._v(" "),a("h2",[t._v("City Search")]),t._v(" "),a("message-container",{attrs:{messages:t.messages}}),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.getCities(e)}}},[a("p",[t._v("Enter city name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Paris, TX"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),a("button",{attrs:{type:"submit"}},[t._v("Go")])])]),t._v(" "),t.showLoading?a("load-spinner"):t._e(),t._v(" "),t.results&&t.results.list.length>0?a("ul",{staticClass:"cities"},t._l(t.results.list,function(e){return a("li",[a("h2",[t._v(t._s(e.name)+", "+t._s(e.sys.country))]),t._v(" "),a("p",[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:e.id}}}},[t._v("View Current Weather")])],1),t._v(" "),a("weather-summary",{attrs:{weatherData:e.weather}}),t._v(" "),a("weather-data",{attrs:{weatherData:e.main}}),t._v(" "),a("p",[a("button",{staticClass:"save",on:{click:function(a){t.saveCity(e)}}},[t._v("Save City to Favorites")])])],1)})):t._e()],1)},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";function s(t){a(156)}var n=a(64),r=a(157),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-11babe86",null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sourceselection"},[a("div",{staticClass:"jumbotron"},[t._m(0),t._v(" "),a("h4",[t._v(" Select News Source")]),t._v(" "),a("meta",{attrs:{name:"description",content:""}}),t._v(" "),a("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),t._v(" "),a("select",{staticClass:"form-control",on:{change:t.sourceChanged}},t._l(t.sources,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])})),t._v(" "),t.source?a("div",[a("h6",[t._v(t._s(t.source.description))]),t._v(" "),a("a",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{href:t.source.url,target:"blank"}},[t._v("Go To "+t._s(t.source.name)+" Website")]),t._v(" "),t.errors&&t.errors.length?a("ul",t._l(t.errors,function(e){return a("li",[t._v("\n      "+t._s(e.message)+"\n    ")])})):t._e()]):t._e()])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("span",{staticClass:"fa fa-newspaper-o"}),t._v("Daily News")])}],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";function s(t){a(159)}var n=a(65),r=a(160),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-65485824",null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newslist"},[a("div",{staticClass:"flex-container"},[a("ul",{staticClass:"media-list"},t._l(t.articles,function(e){return a("li",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("a",{attrs:{href:e.url,target:"_blank"}},[a("img",{staticClass:"media-object",attrs:{src:e.urlToImage}})])]),t._v(" "),a("div",{staticClass:"media-body"},[a("h4",{staticClass:"media-heading"},[a("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),a("h5",[a("i",[t._v("by "+t._s(e.author))])]),t._v(" "),a("p",[t._v(t._s(e.description))])])])})),t._v(" "),t.errors&&t.errors.length?a("ul",t._l(t.errors,function(e){return a("li",[t._v("\n        "+t._s(e.message)+"\n      ")])})):t._e()])])},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container text-center"},[a("small",{staticClass:"copyright"},[a("i",{staticClass:"fa fa-newspaper-o",attrs:{"aria-hidden":"true"}}),t._v(" "),a("a",{attrs:{href:"https://www.billvas.com","data-toggle":"tooltip",title:"Visit my portfolio site at billvas.com"}},[t._v("   Made by Bill Vasilopoulos 2018")])])])])}],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("CitySearch"),t._v(" "),a("SourceSelection",{on:{sourceChanged:t.sourceChanged}}),t._v(" "),a("Newslist",{attrs:{source:t.source}}),t._v(" "),a("FootComp")],1)},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";function s(t){a(165)}var n=a(68),r=a(166),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-7010fe35",null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"content"},[a("p",[t._v(t._s(t.msg))])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"primary col-md-12 col-sm-12 col-xs-12"},[s("img",{staticClass:"img-responsive",attrs:{src:a(167),id:"news-icon",height:"130",width:"127",alt:"Newspaper image"}}),t._v(" "),s("img",{staticClass:"img-responsive",attrs:{src:a(168),id:"weather-icon",height:"165",width:"155",alt:"Cloud image"}}),t._v(" "),s("h1",[t._v("Daily News and Weather")]),s("br")])}],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){t.exports=a.p+"static/img/news.7a568ec.png"},function(t,e,a){t.exports=a.p+"static/img/weather.9c7833f.png"},function(t,e,a){"use strict";function s(t){a(170)}var n=a(69),r=a(171),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-5548986a",null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"primary col-md-12 col-sm-12 col-xs-12"},[a("h1",[t._v("Contact Me")]),t._v(" "),a("div",{staticClass:"content"},[a("p",[t._v(t._s(t.msg))]),t._v(" "),t._m(0)])]),t._v(" "),t._m(1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("ul",{staticClass:"social list-inline"},[a("li",[a("a",{attrs:{href:"https://www.facebook.com/facebook","data-toggle":"tooltip",title:"Visit me on Facebook",target:"_blank"}},[a("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.instagram.com/","data-toggle":"tooltip",title:"Visit me on Instagram",target:"_blank"}},[a("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/","data-toggle":"tooltip",title:"Look me up on LinkedIn",target:"_blank"}},[a("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/bvasilop","data-toggle":"tooltip",title:"Check out my projects on Github",target:"_blank"}},[a("i",{staticClass:"fa fa-github-alt",attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://slack.com/","data-toggle":"tooltip",title:"Let's chat on Slack"}},[a("i",{staticClass:"fa fa-slack",attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("li",{staticClass:"last-item"},[a("a",{attrs:{href:"mailto:bvasilop@gmail.com",target:"_blank","data-toggle":"tooltip",title:"Send me an Email"}},[a("i",{staticClass:"fa fa-envelope-o",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("a",{staticClass:"btn btn-cta-primary",attrs:{a:"",href:"https://www.billvas.com","data-toggle":"tooltip",title:"Visit my portfolio site at billvas.com"}},[a("i",{staticClass:"fa fa-address-card",attrs:{"aria-hidden":"true"}}),t._v(" Bill Vasilopoulos")])])}],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";function s(t){a(173)}var n=a(70),r=a(174),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-5416e8d8",null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron"},[a("h2",[t._v("Current Weather "),t.weatherData?a("span",[t._v(" for "+t._s(t.weatherData.name)+", "+t._s(t.weatherData.sys.country))]):t._e()]),t._v(" "),a("message-container",{attrs:{messages:t.messages}}),t._v(" "),a("p",[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),a("router-link",{attrs:{to:{name:"Forecast",params:{cityId:t.$route.params.cityId}}}},[t._v("View 5-Day Forecast")])],1),t._v(" "),t.showLoading?a("load-spinner"):t._e(),t._v(" "),t.weatherData?a("div",[a("weather-summary",{attrs:{weatherData:t.weatherData.weather}}),t._v(" "),a("weather-data",{attrs:{weatherData:t.weatherData.main}})],1):t._e()],1)},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";function s(t){a(176)}var n=a(71),r=a(181),i=a(0),o=s,c=i(n.a,r.a,!1,o,"data-v-69594567",null);e.a=c.exports},function(t,e){},,,,,function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Five Day Hourly Forecast "),t.weatherData?a("span",[t._v(" for "+t._s(t.weatherData.city.name)+", "+t._s(t.weatherData.city.country))]):t._e()]),t._v(" "),a("message-container",{attrs:{messages:t.messages}}),t._v(" "),a("p",[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:t.$route.params.cityId}}}},[t._v("Current Weather "),t.weatherData?a("span",[t._v(" for "+t._s(t.weatherData.city.name)+", "+t._s(t.weatherData.city.country))]):t._e()])],1),t._v(" "),t.weatherData?a("ul",{staticClass:"forecast"},[a("transition-group",{attrs:{name:"fade",tag:"div",appear:""}},t._l(t.weatherData.list,function(e){return a("li",{key:e.dt},[a("h3",[t._v(t._s(t._f("formatDate")(e.dt)))]),t._v(" "),a("weather-summary",{attrs:{weatherData:e.weather}}),t._v(" "),a("weather-data",{attrs:{weatherData:e.main}})],1)}))],1):t._e(),t._v(" "),t.showLoading?a("load-spinner"):t._e()],1)},n=[],r={render:s,staticRenderFns:n};e.a=r}],[72]);
//# sourceMappingURL=app.977d428d8ac6e3799906.js.map