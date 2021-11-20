"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[994],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),u=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:e},c),{},{components:r})):a.createElement(f,i({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5097:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},s="What is re_data?",u={unversionedId:"introduction/whatis",id:"introduction/whatis",isDocsHomePage:!1,title:"What is re_data?",description:"re_data is a set of tools (dbt macros & models) that helps you make sure your data pipelines are clean & reliable. \ud83d\ude0a",source:"@site/docs/introduction/whatis.md",sourceDirName:"introduction",slug:"/introduction/whatis",permalink:"/re-data/feature-react-app/docs/introduction/whatis",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/introduction/whatis.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Supported data warehouses",permalink:"/re-data/feature-react-app/docs/introduction/supported_warehouses"}},c=[{value:"Data Preparation",id:"data-preparation",children:[]},{value:"Data Monitoring",id:"data-monitoring",children:[]},{value:"Installation",id:"installation",children:[]}],d={toc:c};function p(t){var e=t.components,r=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-re_data"},"What is re_data?"),(0,o.kt)("p",null,"re_data is a set of tools (dbt macros & models) that helps you make sure your data pipelines are clean & reliable. \ud83d\ude0a"),(0,o.kt)("h2",{id:"data-preparation"},"Data Preparation"),(0,o.kt)("p",null,"re_data data preparation macros help you clean your data faster, with less code & a smaller chance of errors.\nCurrently, we support four types of data preparation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"data cleaning"),(0,o.kt)("li",{parentName:"ul"},"data filtering"),(0,o.kt)("li",{parentName:"ul"},"data normalization"),(0,o.kt)("li",{parentName:"ul"},"data validation")),(0,o.kt)("h2",{id:"data-monitoring"},"Data Monitoring"),(0,o.kt)("p",null,"re_data metrics & alerts models contain information about data quality which lets you discover bad data much faster. You can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use built-in metrics & extend them with your code"),(0,o.kt)("li",{parentName:"ul"},"test them as regular dbt models"),(0,o.kt)("li",{parentName:"ul"},"visualize them in your favourite BI tool"),(0,o.kt)("li",{parentName:"ul"},"trigger external (Slack/Pagerduty/etc.) alerts based on them")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"re_data is primarily a dbt package, so it's very easy to add to the existing dbt projects. Check out ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/getting_started/installation/for_dbt_users"},"installation"))," tutorial."),(0,o.kt)("p",null,"If you are not using dbt, re_data can still be a great option to start monitoring your existing tables. Check out installation for users: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/getting_started/installation/new_to_dbt"},"new to dbt"))," in this case."),(0,o.kt)("p",null,"Have more questions? Check out the rest of re_data docs, or ask as on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://join.slack.com/t/re-data/shared_invite/zt-vkauq1y8-tL4R4_H5nZoVvyXyy0hdug"},"Slack! \ud83d\ude0a"))," (we are very responsive there)"))}p.isMDXComponent=!0}}]);