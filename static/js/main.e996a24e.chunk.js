(this.webpackJsonpbueno=this.webpackJsonpbueno||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/Developer1.20afcd64.jpg"},function(e,t,n){e.exports=n.p+"static/media/Developer2.9228ea34.JPG"},function(e,t,n){e.exports=n.p+"static/media/Developer3.7b8ab0c8.JPG"},function(e,t,n){e.exports=n.p+"static/media/Developer4.f7a07cfe.JPG"},function(e,t,n){e.exports=n.p+"static/media/Developer5.6e54c9d2.JPG"},function(e,t,n){e.exports=n.p+"static/media/Developer6.52cb743e.JPG"},function(e,t,n){e.exports=n.p+"static/media/Developer7.237e8580.jpg"},function(e,t,n){e.exports=n.p+"static/media/Dress1.96daecb2.JPG"},function(e,t,n){e.exports=n.p+"static/media/Dress2.b25b234f.JPG"},function(e,t,n){e.exports=n.p+"static/media/Dress3.e5fde696.JPG"},function(e,t,n){e.exports=n.p+"static/media/Dress4.3c022be1.JPG"},function(e,t,n){e.exports=n.p+"static/media/Dress5.1c90492d.JPG"},function(e,t,n){e.exports=n.p+"static/media/Dress6.4481fc57.JPG"},function(e,t,n){e.exports=n.p+"static/media/Dress7.bb4307c9.JPG"},function(e,t,n){e.exports=n.p+"static/media/Dress8.24b8e238.JPG"},function(e,t,n){e.exports=n.p+"static/media/Dress9.20b45e0c.JPG"},function(e,t,n){e.exports=n.p+"static/media/Dancer1.32d4a163.jpg"},function(e,t,n){e.exports=n.p+"static/media/Dancer2.ba533a6a.jpg"},function(e,t,n){e.exports=n.p+"static/media/Dancer3.7b8450f6.jpg"},function(e,t,n){e.exports=n.p+"static/media/Dancer4.782a7861.jpg"},function(e,t,n){e.exports=n.p+"static/media/Dancer5.a0492510.jpg"},function(e,t,n){e.exports=n.p+"static/media/Dancer6.a0423f29.jpg"},function(e,t,n){e.exports=n.p+"static/media/Dancer7.4e7f7688.jpg"},function(e,t,n){e.exports=n.p+"static/media/Dancer8.da8d1ebd.jpg"},function(e,t,n){e.exports=n.p+"static/media/Dancer9.506b7512.jpg"},function(e,t,n){e.exports=n.p+"static/media/Dancer10.c5cd4c9f.jpg"},function(e,t,n){e.exports=n.p+"static/media/three-dots.7627bc82.svg"},function(e,t,n){e.exports=n.p+"static/media/Yo.2c076a90.jpg"},,function(e,t,n){e.exports=n(66)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(7),s=n.n(c),o=(n(50),n(2)),r=n(3),l=n(4),d=n(5);n(51);var m=function(e){var t=e.image,n=e.name,a=e.description,c=e.index;return i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"item__content"},i.a.createElement("img",{src:t,alt:c}),i.a.createElement("div",{className:"item__details"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",null,n)),i.a.createElement("li",null,i.a.createElement("span",null,a))))))};var p=function(){return i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"item__content item__content--related"},i.a.createElement("p",null,"Developed by:"),i.a.createElement("a",{className:"media-item",href:"https://www.linkedin.com/in/oksemonenko/",title:"Oksana",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("h3",{className:"media-item__title"},"Oksana Semonenko ",i.a.createElement("span",null,"\u2665 ")))))};var u=function(e){var t=e.title,n=e.items,a=e.onClick;return i.a.createElement("div",{className:"stack"},i.a.createElement("h2",{className:"stack-title",onClick:a},i.a.createElement("a",{href:"#","data-text":t},i.a.createElement("span",null,t))),n&&n.map((function(e){var t=e.image,n=e.name,a=e.description,c=e.index;return i.a.createElement(m,{key:c,image:t,name:n,description:a})})),i.a.createElement(p,null))},f=n(44),k=n(8),v=n(14),h=n.n(v),g=n(15),x=n.n(g),y=(n(63),n(9)),b=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onResize=Object(y.throttle)((function(e){var t=document.body,n=a.getStackNodes().stacks;t.classList.contains("view-full")&&(t.style.height=n[a.flickity.selectedIndex].offsetHeight+"px")}),50),a.getStackNodes=function(){var e=a.flickityNode.querySelector(".flickity-slider");return{stacks:Object(f.a)(e.children),selectedStack:e.querySelector(".is-selected"),prevStack:e.querySelector(".stack-prev"),nextStack:e.querySelector(".stack-next")}},a.onCellSelect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.flickity.selectedIndex;a.setState({canOpen:!1});var t=document.body;t.classList.remove("item-clickable");var n=a.getStackNodes(),i=n.stacks,c=n.prevStack,s=n.nextStack,o=a.flickity.cells.length,r=e>0?e-1:o-1,l=e<o-1?e+1:0;c&&c.classList.remove("stack-prev"),s&&s.classList.remove("stack-next"),i[r].classList.add("stack-prev"),i[l].classList.add("stack-next"),a.onSettle()},a.onDragStart=function(){a.setState({canOpen:!1}),document.body.classList.remove("item-clickable")},a.onSettle=function(){a.setState({canOpen:!0}),document.body.classList.add("item-clickable")},a.onEndTransition=function(e,t){var n=Modernizr.csstransitions,a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"}[Modernizr.prefixed("transition")],i=function e(i){n&&this.removeEventListener(a,e),t&&"function"===typeof t&&t.call(this)};n?e.addEventListener(a,i):i()},a.onOpenStack=function(){if(a.state.canOpen){var e=document.body;e.classList.add("view-full"),setTimeout((function(){e.classList.add("move-items")}),25);var t=a.getStackNodes().selectedStack;e.style.height=t.offsetHeight+"px",a.flickity.unbindDrag(),a.flickity.options.accessibility=!1}},a.scrollY=function(){var e=window.document.documentElement;return window.pageYOffset||e.scrollTop},a.closeStack=function(){var e=document.body;e.classList.remove("move-items"),a.onEndTransition(a.flickityNode,(function(){e.classList.remove("view-full"),e.style.height=""})),a.flickity.bindDrag(),a.flickity.options.accessibility=!0},a.onCloseStack=function(){var e=a.scrollY(),t=document.body,n=window.document.documentElement,i="undefined"!==typeof InstallTrigger;e>0?(x()(i?n:t||n,0,500),a.closeStack()):a.closeStack()},a.onSelectStack=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.flickity.selectedIndex,t=a.getStackNodes(),n=t.stacks;n[e].classList.contains("stack-prev")&&a.flickity.previous(!0),n[e].classList.contains("stack-next")&&a.flickity.next(!0)},a.state={canOpen:!1,flickityReady:!1},a.refreshFlickity=a.refreshFlickity.bind(Object(k.a)(a)),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.flickity=new h.a(this.flickityNode,this.props.options||{}),this.setState({canOpen:!0,flickityReady:!0}),window.addEventListener("resize",this.onResize),this.flickity.on("cellSelect",this.onCellSelect),this.flickity.on("dragStart",this.onDragStart),this.flickity.on("settle",this.onSettle)}},{key:"refreshFlickity",value:function(){this.flickity.reloadCells(),this.flickity.resize(),this.flickity.updateDraggable()}},{key:"componentWillUnmount",value:function(){this.flickity.destroy()}},{key:"componentDidUpdate",value:function(e,t){var n=!t.flickityReady&&this.state.flickityReady,a=e.children.length!==this.props.children.length,i=!e.stackIsOpened&&this.props.stackIsOpened,c=e.stackIsOpened&&!this.props.stackIsOpened;e.selectedIndex===this.props.selectedIndex&&e.count===this.props.count||this.onSelectStack(this.props.selectedIndex),(n||a)&&this.refreshFlickity(),i&&this.onOpenStack(),c&&this.onCloseStack()}},{key:"renderPortal",value:function(){if(!this.flickityNode)return null;var e=this.flickityNode.querySelector(".flickity-slider");return e?(document.body.classList.add("view-init"),s.a.createPortal(this.props.children,e)):void 0}},{key:"render",value:function(){var e=this;return[i.a.createElement("div",{className:"stacks-wrapper",key:"flickityBase",ref:function(t){return e.flickityNode=t}}),this.renderPortal()].filter(Boolean)}}]),n}(i.a.Component),E=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).openStack=function(){a.setState({stackIsOpened:!0})},a.closeStack=function(){a.setState({stackIsOpened:!1})},a.onClick=function(e,t){e.preventDefault();var n=a.state.stackIsOpened;return e.currentTarget.parentNode.classList.contains("is-selected")?n?a.closeStack():void a.openStack():a.props.onChange(t,!0)},a.state={stackIsOpened:!1},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.stacks,a=t.onChange,c=t.selectedIndex,s=t.count,o=this.state.stackIsOpened;return i.a.createElement("div",{className:"stack-slider"},i.a.createElement(b,{stackIsOpened:o,selectedIndex:c,count:s,onChange:a,options:{wrapAround:!0,imagesLoaded:!0,initialIndex:0,setGallerySize:!1,pageDots:!1,prevNextButtons:!1}},n.map((function(t){var n=t.title,a=t.items,c=t.index;return i.a.createElement(u,{key:c,title:n,items:a,onClick:function(t){return e.onClick(t,c)}})}))))}}]),n}(a.Component),S=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onMouseMove=Object(y.throttle)((function(e){var t=window.innerWidth,n=window.innerHeight,i=-1/(n/2)*e.clientY+1,c=1/(t/2)*e.clientX-1,s="perspective(1000px) translate3d("+(20/t*e.clientX-10)+"px,"+(20/n*e.clientY-10)+"px,"+(100/n*e.clientY-50)+"px) rotate3d("+i+","+c+",0,2deg)";a.setState({style:{WebkitTransform:s,transform:s}})}),100),a.state={style:{WebkitTransform:null,transform:null}},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("mousemove",this.onMouseMove)}},{key:"render",value:function(){var e=this.state.style;return i.a.createElement("div",{className:"hero"},i.a.createElement("div",{className:"hero__back hero__back--static"}),i.a.createElement("div",{className:"hero__back hero__back--mover",style:e}),i.a.createElement("div",{className:"hero__front"}))}}]),n}(a.Component);var O=function(){return i.a.createElement("nav",{className:"menu"},i.a.createElement("a",{className:"menu__item fa fa-facebook-official",href:"https://www.facebook.com/oksanasemonenko/",target:"_blank",rel:"noopener noreferrer"}),i.a.createElement("a",{className:"menu__item fa fa-instagram",href:"https://www.instagram.com/enotogram/",target:"_blank",rel:"noopener noreferrer"}))},D=n(16),w=n.n(D),N=n(17),j=n.n(N),I=n(18),_=n.n(I),L=n(19),C=n.n(L),P=n(20),J=n.n(P),G=n(21),T=n.n(G),M=n(22),z=n.n(M),Y=n(23),R=n.n(Y),q=n(24),W=n.n(q),B=n(25),F=n.n(B),H=n(26),A=n.n(H),U=n(27),X=n.n(U),K=n(28),Q=n.n(K),V=n(29),Z=n.n(V),$=n(30),ee=n.n($),te=n(31),ne=n.n(te),ae=n(32),ie=n.n(ae),ce=n(33),se=n.n(ce),oe=n(34),re=n.n(oe),le=n(35),de=n.n(le),me=n(36),pe=n.n(me),ue=n(37),fe=n.n(ue),ke=n(38),ve=n.n(ke),he=n(39),ge=n.n(he),xe=n(40),ye=n.n(xe),be=n(41),Ee=n.n(be),Se=[{title:"Developer",index:0,items:[{index:0,image:w.a,name:"",description:""},{index:1,image:j.a,name:"",description:""},{index:2,image:_.a,name:"",description:""},{index:3,image:C.a,name:"",description:""},{index:4,image:J.a,name:"",description:""},{index:5,image:T.a,name:"",description:""},{index:6,image:z.a,name:"",description:""}]},{title:"Dress maker",index:1,items:[{index:0,image:R.a,name:"",description:""},{index:1,image:W.a,name:"",description:""},{index:2,image:F.a,name:"",description:""},{index:3,image:A.a,name:"",description:""},{index:4,image:X.a,name:"",description:""},{index:5,image:Q.a,name:"",description:""},{index:6,image:Z.a,name:"",description:""},{index:7,image:ee.a,name:"",description:""},{index:8,image:ne.a,name:"",description:""}]},{title:"Dancer",index:2,items:[{index:0,image:ie.a,name:"",description:""},{index:1,image:se.a,name:"",description:""},{index:2,image:re.a,name:"",description:""},{index:3,image:de.a,name:"",description:""},{index:4,image:pe.a,name:"",description:""},{index:5,image:fe.a,name:"",description:""},{index:6,image:ve.a,name:"",description:""},{index:7,image:ge.a,name:"",description:""},{index:8,image:ye.a,name:"",description:""},{index:9,image:Ee.a,name:"",description:""}]}],Oe=n(42),De=n.n(Oe),we=n(43),Ne=n.n(we),je=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).cacheImages=function(e){e.forEach((function(e){new Promise((function(t,n){var a=new Image;a.src=e,a.onload=t(),a.onerror=n()}))})),a.setState({isLoading:!1})},a.onChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a.state.count,i=t?n+1:n;a.setState({selectedIndex:e,count:i})},a.state={selectedIndex:0,count:0,isLoading:!0},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=[Ne.a];Se.map((function(t){return t.items.map((function(t){var n=t.image;e.push(n)}))})),this.cacheImages(e)}},{key:"render",value:function(){var e=this.state,t=e.selectedIndex,n=e.count,a=e.isLoading;return i.a.createElement("div",{className:"App"},a?i.a.createElement("img",{className:"loader",src:De.a,width:"60",alt:"Loader"}):i.a.createElement("div",{className:"container"},i.a.createElement(S,null),i.a.createElement("header",{className:"codrops-header"},i.a.createElement("h1",{className:"codrops-title"},"Oksana",i.a.createElement("div",null,"Semonenko")),i.a.createElement(O,null)),i.a.createElement(E,{stacks:Se,selectedIndex:t,count:n,onChange:this.onChange})))}}]),n}(a.Component);s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(je,null)),document.getElementById("root"))}],[[45,1,2]]]);
//# sourceMappingURL=main.e996a24e.chunk.js.map