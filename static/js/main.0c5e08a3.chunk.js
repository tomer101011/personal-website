(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(6),r=t.n(l),c=(t(12),t(1)),i=t(2),s=t(4),m=t(3),v=(t(13),t(14),t(15),t(16),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleScroll=function(){window.scrollY<=200?n.setState({position:"relative"}):n.setState({position:"fixed"})},n.handleNavColor=function(){window.scrollY<=200?n.setState({backgroundColor:"transparent"}):n.setState({backgroundColor:"#fff"})},n.state={position:"relative",backgroundColor:"transparent"},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("scroll",this.handleNavColor)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleNavColor)}},{key:"render",value:function(){return o.a.createElement("nav",{style:{position:this.state.position,backgroundColor:this.state.backgroundColor},className:"nav-style navbar navbar-expand-lg site-navbar navbar-light"},o.a.createElement("div",{className:"container"},o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample09","aria-controls":"navbarsExample09","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbarsExample09"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#section2"},"Section 2")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#section1"},"Section 1")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#section-resume"},"Resume")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#section-about"},"About")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#section-contact"},"Contact"))))))}}]),t}(n.Component)),u=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement("h1",null,"Smooth Scroll"),o.a.createElement("div",{className:"main row",style:{height:"600px",backgroundColor:"pink"},id:"section1"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("h2",null,"Section 1"),o.a.createElement("p",null,'Click on the link to see the "smooth" scrolling effect.'),o.a.createElement("a",{href:"#section2"},"Click Me to Smooth Scroll to Section 2 Below"),o.a.createElement("p",null,"Note: Remove the scroll-behavior property to remove smooth scrolling."))),o.a.createElement("div",{className:"main row",style:{height:"600px",backgroundColor:"yellow"},id:"section2"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("h2",null,"Section 2"),o.a.createElement("a",{href:"#section1"},"Click Me to Smooth Scroll to Section 1 Above"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.0c5e08a3.chunk.js.map