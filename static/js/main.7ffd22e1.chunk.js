(this.webpackJsonpbueno=this.webpackJsonpbueno||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/Developer1.f26f7100.jpg"},27:function(e,t,n){e.exports=n.p+"static/media/Developer2.8a8c7495.JPG"},28:function(e,t,n){e.exports=n.p+"static/media/Developer3.417155d9.JPG"},29:function(e,t,n){e.exports=n.p+"static/media/Developer4.f4fd41dc.JPG"},30:function(e,t,n){e.exports=n.p+"static/media/Developer5.301b219a.JPG"},31:function(e,t,n){e.exports=n.p+"static/media/Dress1.e481451a.JPG"},32:function(e,t,n){e.exports=n.p+"static/media/Dress2.6ce4854e.JPG"},33:function(e,t,n){e.exports=n.p+"static/media/Dress3.feb04b34.JPG"},34:function(e,t,n){e.exports=n.p+"static/media/Dress4.b6de3dd7.JPG"},35:function(e,t,n){e.exports=n.p+"static/media/Dress5.13cf5489.JPG"},36:function(e,t,n){e.exports=n.p+"static/media/Dancer1.feddf2ed.jpg"},37:function(e,t,n){e.exports=n.p+"static/media/Dancer2.53db0bd8.jpg"},38:function(e,t,n){e.exports=n.p+"static/media/Dancer3.a2da69b3.jpg"},39:function(e,t,n){e.exports=n.p+"static/media/Dancer4.ba345914.jpg"},40:function(e,t,n){e.exports=n.p+"static/media/Dancer5.55eaa01d.jpg"},41:function(e,t,n){e.exports=n.p+"static/media/Yo.79735e06.jpg"},44:function(e,t,n){e.exports=n(70)},49:function(e,t,n){},50:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(7),c=n.n(s),r=(n(49),n(2)),o=n(3),l=n(4),d=n(5),m=(n(50),n(17)),u=n(20),p=n(21);function f(){var e=Object(u.a)(["\n  display: block;\n\n  // Add a smooth animation on loading\n  @keyframes loaded {\n    0% {\n      opacity: 0.1;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  // I use utilitary classes instead of props to avoid style regenerating\n  &.loaded:not(.has-error) {\n    animation: loaded 300ms ease-in-out;\n  }\n\n  &.has-error {\n    // fallback to placeholder image on error\n    content: url(",");\n  }\n"]);return f=function(){return e},e}var k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=",v=p.a.img(f(),k),h=function(e){var t=e.src,n=e.alt,s=Object(a.useState)(k),c=Object(m.a)(s,2),r=c[0],o=c[1],l=Object(a.useState)(),d=Object(m.a)(l,2),u=d[0],p=d[1];return Object(a.useEffect)((function(){var e,n=!1;return u&&r!==t&&(IntersectionObserver?(e=new IntersectionObserver((function(a){a.forEach((function(a){!n&&(a.intersectionRatio>0||a.isIntersecting)&&(o(t),e.unobserve(u))}))}),{threshold:.01,rootMargin:"75%"})).observe(u):o(t)),function(){n=!0,e&&e.unobserve&&e.unobserve(u)}}),[t,r,u]),i.a.createElement(v,{ref:p,src:r,alt:n,onLoad:function(e){e.target.classList.add("loaded")},onError:function(e){e.target.classList.add("has-error")}})};var g=function(e){var t=e.image,n=e.name,a=e.description,s=e.index;return i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"item__content"},i.a.createElement(h,{src:t,alt:s}),i.a.createElement("div",{className:"item__details"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",null,n)),i.a.createElement("li",null,i.a.createElement("span",null,a))))))};var y=function(){return i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"item__content item__content--related"},i.a.createElement("p",null,"Developed by:"),i.a.createElement("a",{className:"media-item",href:"https://www.linkedin.com/in/oksemonenko/",title:"Oksana",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("h3",{className:"media-item__title"},"Oksana Semonenko ",i.a.createElement("span",null,"\u2665 ")))))};var b=function(e){var t=e.title,n=e.items,a=e.onClick;return i.a.createElement("div",{className:"stack"},i.a.createElement("h2",{className:"stack-title",onClick:a},i.a.createElement("a",{href:"#","data-text":t},i.a.createElement("span",null,t))),n&&n.map((function(e){var t=e.image,n=e.name,a=e.description,s=e.index;return i.a.createElement(g,{key:s,image:t,name:n,description:a})})),i.a.createElement(y,null))},x=n(42),E=n(9),S=n(24),O=n.n(S),w=n(25),N=n.n(w),j=(n(67),n(11)),A=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onResize=Object(j.throttle)((function(e){var t=document.body,n=a.getStackNodes().stacks;t.classList.contains("view-full")&&(t.style.height=n[a.flickity.selectedIndex].offsetHeight+"px")}),50),a.getStackNodes=function(){var e=a.flickityNode.querySelector(".flickity-slider");return{stacks:Object(x.a)(e.children),selectedStack:e.querySelector(".is-selected"),prevStack:e.querySelector(".stack-prev"),nextStack:e.querySelector(".stack-next")}},a.onCellSelect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.flickity.selectedIndex;a.setState({canOpen:!1});var t=document.body;t.classList.remove("item-clickable");var n=a.getStackNodes(),i=n.stacks,s=n.prevStack,c=n.nextStack,r=a.flickity.cells.length,o=e>0?e-1:r-1,l=e<r-1?e+1:0;s&&s.classList.remove("stack-prev"),c&&c.classList.remove("stack-next"),i[o].classList.add("stack-prev"),i[l].classList.add("stack-next"),a.onSettle()},a.onDragStart=function(){a.setState({canOpen:!1}),document.body.classList.remove("item-clickable")},a.onSettle=function(){a.setState({canOpen:!0}),document.body.classList.add("item-clickable")},a.onEndTransition=function(e,t){var n=Modernizr.csstransitions,a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"}[Modernizr.prefixed("transition")],i=function e(i){n&&this.removeEventListener(a,e),t&&"function"===typeof t&&t.call(this)};n?e.addEventListener(a,i):i()},a.onOpenStack=function(){if(a.state.canOpen){var e=document.body;e.classList.add("view-full"),setTimeout((function(){e.classList.add("move-items")}),25);var t=a.getStackNodes().selectedStack;e.style.height=t.offsetHeight+"px",a.flickity.unbindDrag(),a.flickity.options.accessibility=!1}},a.scrollY=function(){var e=window.document.documentElement;return window.pageYOffset||e.scrollTop},a.closeStack=function(){var e=document.body;e.classList.remove("move-items"),a.onEndTransition(a.flickityNode,(function(){e.classList.remove("view-full"),e.style.height=""})),a.flickity.bindDrag(),a.flickity.options.accessibility=!0},a.onCloseStack=function(){var e=a.scrollY(),t=document.body,n=window.document.documentElement,i="undefined"!==typeof InstallTrigger;e>0?(N()(i?n:t||n,0,500),a.closeStack()):a.closeStack()},a.onSelectStack=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.flickity.selectedIndex,t=a.getStackNodes(),n=t.stacks;n[e].classList.contains("stack-prev")&&a.flickity.previous(!0),n[e].classList.contains("stack-next")&&a.flickity.next(!0)},a.state={canOpen:!1,flickityReady:!1},a.refreshFlickity=a.refreshFlickity.bind(Object(E.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.flickity=new O.a(this.flickityNode,this.props.options||{}),this.setState({canOpen:!0,flickityReady:!0}),window.addEventListener("resize",this.onResize),this.flickity.on("cellSelect",this.onCellSelect),this.flickity.on("dragStart",this.onDragStart),this.flickity.on("settle",this.onSettle)}},{key:"refreshFlickity",value:function(){this.flickity.reloadCells(),this.flickity.resize(),this.flickity.updateDraggable()}},{key:"componentWillUnmount",value:function(){this.flickity.destroy()}},{key:"componentDidUpdate",value:function(e,t){var n=!t.flickityReady&&this.state.flickityReady,a=e.children.length!==this.props.children.length,i=!e.stackIsOpened&&this.props.stackIsOpened,s=e.stackIsOpened&&!this.props.stackIsOpened;e.selectedIndex===this.props.selectedIndex&&e.count===this.props.count||this.onSelectStack(this.props.selectedIndex),(n||a)&&this.refreshFlickity(),i&&this.onOpenStack(),s&&this.onCloseStack()}},{key:"renderPortal",value:function(){if(!this.flickityNode)return null;var e=this.flickityNode.querySelector(".flickity-slider");return e?(document.body.classList.add("view-init"),c.a.createPortal(this.props.children,e)):void 0}},{key:"render",value:function(){var e=this;return[i.a.createElement("div",{className:"stacks-wrapper",key:"flickityBase",ref:function(t){return e.flickityNode=t}}),this.renderPortal()].filter(Boolean)}}]),n}(i.a.Component),I=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).openStack=function(){a.setState({stackIsOpened:!0})},a.closeStack=function(){a.setState({stackIsOpened:!1})},a.onClick=function(e,t){e.preventDefault();var n=a.state.stackIsOpened;return e.currentTarget.parentNode.classList.contains("is-selected")?n?a.closeStack():void a.openStack():a.props.onChange(t,!0)},a.state={stackIsOpened:!1},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.stacks,a=t.onChange,s=t.selectedIndex,c=t.count,r=this.state.stackIsOpened;return i.a.createElement("div",{className:"stack-slider"},i.a.createElement(A,{stackIsOpened:r,selectedIndex:s,count:c,onChange:a,options:{wrapAround:!0,imagesLoaded:!0,initialIndex:0,setGallerySize:!1,pageDots:!1,prevNextButtons:!1}},n.map((function(t){var n=t.title,a=t.items,s=t.index;return i.a.createElement(b,{key:s,title:n,items:a,onClick:function(t){return e.onClick(t,s)}})}))))}}]),n}(a.Component),D=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onMouseMove=Object(j.throttle)((function(e){var t=window.innerWidth,n=window.innerHeight,i=-1/(n/2)*e.clientY+1,s=1/(t/2)*e.clientX-1,c="perspective(1000px) translate3d("+(20/t*e.clientX-10)+"px,"+(20/n*e.clientY-10)+"px,"+(100/n*e.clientY-50)+"px) rotate3d("+i+","+s+",0,2deg)";a.setState({style:{WebkitTransform:c,transform:c}})}),100),a.state={style:{WebkitTransform:null,transform:null}},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("mousemove",this.onMouseMove)}},{key:"render",value:function(){var e=this.state.style;return i.a.createElement("div",{className:"hero"},i.a.createElement("div",{className:"hero__back hero__back--static"}),i.a.createElement("div",{className:"hero__back hero__back--mover",style:e}),i.a.createElement("div",{className:"hero__front"}))}}]),n}(a.Component);var L=function(){return i.a.createElement("nav",{className:"menu"},i.a.createElement("a",{className:"menu__item fa fa-facebook-official",href:"https://www.facebook.com/oksanasemonenko/",target:"_blank",rel:"noopener noreferrer"}),i.a.createElement("a",{className:"menu__item fa fa-instagram",href:"https://www.instagram.com/enotogram/",target:"_blank",rel:"noopener noreferrer"}))},_=n(26),C=n.n(_),T=n(27),M=n.n(T),P=n(28),G=n.n(P),J=n(29),R=n.n(J),z=n(30),Y=n.n(z),U=n(31),q=n.n(U),B=n(32),W=n.n(B),F=n(33),H=n.n(F),V=n(34),K=n.n(V),Q=n(35),X=n.n(Q),Z=n(36),$=n.n(Z),ee=n(37),te=n.n(ee),ne=n(38),ae=n.n(ne),ie=n(39),se=n.n(ie),ce=n(40),re=n.n(ce),oe=[{title:"Developer",index:0,items:[{index:0,image:C.a,name:"",description:""},{index:1,image:M.a,name:"",description:""},{index:2,image:G.a,name:"",description:""},{index:3,image:R.a,name:"",description:""},{index:4,image:Y.a,name:"",description:""}]},{title:"Dress maker",index:1,items:[{index:0,image:q.a,name:"",description:""},{index:1,image:W.a,name:"",description:""},{index:2,image:H.a,name:"",description:""},{index:3,image:K.a,name:"",description:""},{index:4,image:X.a,name:"",description:""}]},{title:"Dancer",index:2,items:[{index:0,image:$.a,name:"",description:""},{index:1,image:te.a,name:"",description:""},{index:2,image:ae.a,name:"",description:""},{index:3,image:se.a,name:"",description:""},{index:4,image:re.a,name:"",description:""}]}],le=n(41),de=n.n(le),me=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a.state.count,i=t?n+1:n;a.setState({selectedIndex:e,count:i})},a.state={selectedIndex:0,count:0,isLoading:!0},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new Image;t.src=de.a,t.onload=function(){e.setState({isLoading:!1})}}},{key:"render",value:function(){var e=this.state,t=e.selectedIndex,n=e.count,a=e.isLoading;return i.a.createElement("div",{className:"App"},a?i.a.createElement("img",{className:"loader",src:"../src/img/three-dots.svg",width:"60",alt:"Loader"}):i.a.createElement("div",{className:"container"},i.a.createElement(D,null),i.a.createElement("header",{className:"codrops-header"},i.a.createElement("h1",{className:"codrops-title"},"Oksana",i.a.createElement("div",null,"Semonenko")),i.a.createElement(L,null)),i.a.createElement(I,{stacks:oe,selectedIndex:t,count:n,onChange:this.onChange})))}}]),n}(a.Component);c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(me,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.7ffd22e1.chunk.js.map