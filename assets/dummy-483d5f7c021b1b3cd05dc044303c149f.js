"use strict"
define("dummy/app",["exports","ember-resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a){Object.defineProperty(e,"__esModule",{value:!0})
var o
Ember.MODEL_FACTORY_INJECTIONS=!0,o=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default}),(0,n.default)(o,a.default.modulePrefix),e.default=o}),define("dummy/controllers/index",["exports","ember-world-flags/utils/constants/country-codes"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({codes:t.default,filteredCodes:Ember.computed("codes","keyword",function(){var e=this.get("keyword").toLowerCase(),t=this.get("codes")
return Ember.isBlank(e)?t:t.filter(function(t){return t.name.toLowerCase().includes(e)||t.id.toLowerCase().includes(e)})}),countryCodes:Ember.computed.sort("filteredCodes","sortBy"),keyword:"",sortBy:[],sortByName:["name:asc"],sortByCode:["id:asc"],initSortBy:Ember.on("init",function(){this.set("sortBy",this.get("sortByName"))}),actions:{sortByName:function(){this.set("sortBy",this.get("sortByName"))},sortByCode:function(){this.set("sortBy",this.get("sortByCode"))}}})}),define("dummy/helpers/world-flag",["exports","ember-world-flags/helpers/world-flag"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var a,o=t.default.exportApplicationGlobal
a="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType})
n.map(function(){}),e.default=n}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"76nmAp6e",block:'{"symbols":[],"statements":[[6,"h1"],[9,"class","title"],[7],[6,"a"],[9,"href","https://github.com/rounders/ember-world-flags"],[9,"target","_blank"],[7],[0,"Ember-World-Flags Demo"],[8],[8],[0,"\\n\\n"],[1,[18,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"L8eHxyzF",block:'{"symbols":["code"],"statements":[[6,"div"],[9,"class","flagDemo"],[7],[0,"\\n  "],[1,[25,"world-flag",["us",32],null],false],[0,"\\n  "],[1,[25,"world-flag",["gb",32],null],false],[0,"\\n  "],[1,[25,"world-flag",["ca",32],null],false],[0,"\\n  "],[1,[25,"world-flag",["fr",32],null],false],[0,"\\n  "],[1,[25,"world-flag",["ge",32],null],false],[0,"\\n    "],[6,"p"],[7],[0,"{{world-flag \'us\' 32}}"],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"p"],[7],[0,"This addon provides a world-flag component that can display any country/territory\'s flag in 16x16 or 32x32."],[8],[0,"\\n"],[6,"p"],[7],[0,"\\n    Currently, "],[1,[20,["countryCodes","length"]],false],[0," flags are supported out of 263 officially assigned codes in the\\n    "],[6,"a"],[9,"href","https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Current_codes"],[9,"target","_blank"],[7],[0,"ISO 3166-1 alpha-2"],[8],[0," spec.\\n"],[8],[0,"\\n\\n"],[6,"p"],[7],[0,"Missing a flag? "],[6,"a"],[9,"href","https://github.com/rounders/ember-world-flags/issues/2"],[9,"target","_blank"],[7],[0,"Report it here"],[8],[0,"."],[8],[0,"\\n\\n"],[6,"div"],[9,"class","flagSearch"],[7],[0,"\\n  "],[1,[25,"input",null,[["autofocus","placeholder","value"],[true,"Find A Flag...",[19,0,["keyword"]]]]],false],[0,"\\n"],[8],[0,"\\n\\n"],[6,"div"],[9,"class","flagList"],[7],[0,"\\n  "],[6,"div"],[9,"class","country header"],[7],[0,"\\n    "],[6,"span"],[9,"class","name"],[3,"action",[[19,0,[]],"sortByName"]],[7],[0,"Country"],[8],[0,"\\n    "],[6,"span"],[9,"class","code"],[3,"action",[[19,0,[]],"sortByCode"]],[7],[0,"ISO 3166-1 alpha-2 Code"],[8],[0,"\\n    "],[6,"span"],[9,"class","lg"],[7],[0,"32x32"],[8],[0,"\\n    "],[6,"span"],[9,"class","sm"],[7],[0,"16x16"],[8],[0,"\\n  "],[8],[0,"\\n"],[4,"if",[[19,0,["countryCodes","length"]]],null,{"statements":[[4,"each",[[19,0,["countryCodes"]]],null,{"statements":[[0,"      "],[6,"div"],[9,"class","country"],[7],[0,"\\n        "],[6,"span"],[9,"class","name"],[7],[1,[19,1,["name"]],false],[8],[0,"\\n        "],[6,"span"],[9,"class","code"],[7],[1,[19,1,["id"]],false],[8],[0,"\\n        "],[6,"span"],[9,"class","lg"],[7],[1,[25,"world-flag",[[19,1,["id"]],32],null],false],[8],[0,"\\n        "],[6,"span"],[9,"class","sm"],[7],[1,[25,"world-flag",[[19,1,["id"]],16],null],false],[8],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[1]},null]],"parameters":[]},{"statements":[[0,"    "],[6,"p"],[7],[0,"Sorry, no flags were found for that query."],[8],[0,"\\n"]],"parameters":[]}],[8]],"hasEval":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/config/environment",["ember"],function(e){try{var t="dummy/config/environment",n=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),a=JSON.parse(unescape(n)),o={default:a}
return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app").default.create({})
