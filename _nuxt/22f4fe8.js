(window.webpackJsonp=window.webpackJsonp||[]).push([[16,15],{308:function(t,e,n){"use strict";(function(t){e.a={name:"GridItem",props:{project:{type:Object,required:!0}},mounted:function(){this.masonryDistribution()},updated:function(){this.masonryDistribution(!0)},methods:{masonryDistribution:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t(document).ready((function(){var n=t(".masonry-wrapper");e?n.masonry("reloadItems"):(n.masonry({itemSelector:".grid-item",columnWidth:".grid-item",percentPosition:!0,transitionDuration:300}),n.imagesLoaded().progress((function(e,image){var r=t(image.img).parent();r.removeClass("is-loading"),image.isLoaded||r.addClass("is-broken"),n.masonry()})))}))}}}}).call(this,n(66))},310:function(t,e,n){"use strict";n.r(e);var r=n(308).a,o=n(19),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-4 col-md-6 grid-item mb-4"},[n("div",{staticClass:"listing-item"},[n("div",{staticClass:"position-relative"},[n("ul",{staticClass:"list-inline listing-tags m-0"},[n("li",{staticClass:"list-inline-item"},[n("NuxtLink",{staticClass:"reset-anchor font-weight-normal text-gray text-small",attrs:{to:"/works/"+t.project.id}},[t._v("Creative")])],1)]),t._v(" "),n("NuxtLink",{staticClass:"reset-anchor d-block listing-img-holder is-loading",attrs:{to:"/works/"+t.project.id}},[n("div",{staticClass:"lds-spinner"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")]),t._v(" "),n("img",{staticClass:"img-fluid",attrs:{src:t.project.thumbnail,alt:""}}),t._v(" "),n("p",{staticClass:"\n            mb-0\n            text-primary\n            small\n            d-flex\n            align-items-center\n            listing-btn\n          "},[n("span",[t._v("Look inside")]),t._v(" "),n("svg",{staticClass:"svg-icon text-primary svg-icon-sm ml-2"},[n("use",{attrs:{"xlink:href":"#arrow-right-1"}})])])])],1),t._v(" "),n("div",{staticClass:"py-3"},[n("NuxtLink",{staticClass:"reset-anchor",attrs:{to:"/works/"+t.project.id}},[n("h2",{staticClass:"h5 listing-item-heading"},[t._v(t._s(t.project.title))])]),t._v(" "),n("p",{staticClass:"text-small mb-0 listing-item-description"},[t._v("\n        "+t._s(t.project.short_description)+"\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(26),n(68),n(36),n(11),n(52),n(67),n(109),n(43),n(146),n(44),n(51),{name:"MasonryWrapper",data:function(){return{projects:[],projectsToShow:[],path:""}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$content("projects").fetch();case 3:t.projects=e.sent,t.filterProjectsAccordingToPath(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},watch:{$route:function(t,e){this.path=t.path.replace("/",""),this.filterProjectsAccordingToPath()}},methods:{filterProjectsAccordingToPath:function(){this.path=this.$route.path.replace("/","");var t=this.capitalizePathName(this.path);this.projectsToShow=null===t?this.projects:this.projects.filter((function(e){return e.tags.includes(t)}))},capitalizePathName:function(path){return""===path?null:path.split("-").map((function(t){return"".concat(t[0].toUpperCase()+t.slice(1))})).join(" ")}}}),c=n(19),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"masonry-wrapper"},[n("client-only",t._l(t.projectsToShow,(function(t){return n("grid-item",{key:t.id,attrs:{project:t}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GridItem:n(310).default})}}]);