(this.webpackJsonpcryptocurrency=this.webpackJsonpcryptocurrency||[]).push([[0],{20:function(e,n,t){e.exports=t.p+"static/media/cryptocoins.96e45d69.png"},21:function(e,n,t){e.exports=t(46)},26:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(17),o=t.n(c),i=(t(26),t(5)),u=t.n(i),l=t(6),s=t(3),f=t(1),m=t(2),p=t(7),d=t.n(p),b=t(20),v=t.n(b);function g(){var e=Object(f.a)(["\n  width: 100%;\n  display: block;\n  padding: 1rem;\n  appearance: none;\n  border-radius: 10px;\n  border: none;\n  font-size: 1.2rem;\n"]);return g=function(){return e},e}function E(){var e=Object(f.a)(["\n  font-family: 'Bebas Neue', cursive;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 2.4rem;\n  margin-top: 2rem;\n  display: block;\n"]);return E=function(){return e},e}var y=m.a.label(E()),h=m.a.select(g()),O=function(e,n,t){var c=Object(a.useState)(n),o=Object(s.a)(c,2),i=o[0],u=o[1];return[i,function(){return r.a.createElement(a.Fragment,null,r.a.createElement(y,null,e),r.a.createElement(h,{onChange:function(e){return u(e.target.value)},value:i},r.a.createElement("option",{value:""},"- Select a currency -"),t.map((function(e){return r.a.createElement("option",{key:e.cod,value:e.cod},e.name)}))))},u]};function j(){var e=Object(f.a)(["\n  width: 100%;\n  display: block;\n  padding: 1rem;\n  appearance: none;\n  border-radius: 10px;\n  border: none;\n  font-size: 1.2rem;\n"]);return j=function(){return e},e}function x(){var e=Object(f.a)(["\n  font-family: 'Bebas Neue', cursive;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 2.4rem;\n  margin-top: 2rem;\n  display: block;\n"]);return x=function(){return e},e}var w=m.a.label(x()),k=m.a.select(j()),S=function(e,n,t){var c=Object(a.useState)(n),o=Object(s.a)(c,2),i=o[0],u=o[1];return[i,function(){return r.a.createElement(a.Fragment,null,r.a.createElement(w,null,e),r.a.createElement(k,{onChange:function(e){return u(e.target.value)},value:i},r.a.createElement("option",{value:""},"- Select a crytcoin -"),t.map((function(e){return r.a.createElement("option",{key:e.CoinInfo.Id,value:e.CoinInfo.Name},e.CoinInfo.FullName)}))))},u]};function C(){var e=Object(f.a)(['\n  background-color: #fb7676;\n  padding: 1rem;\n  color: #fff;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n  font-family: "Bebas Neue", cursive;\n  border-radius: 10px;\n']);return C=function(){return e},e}var N=m.a.p(C()),B=function(e){var n=e.message;return r.a.createElement(N,null,n)};function D(){var e=Object(f.a)(["\n  margin-top: 20px;\n  font-weight: 700;\n  font-size: 20px;\n  padding: 10px;\n  background-color: #66a2f3;\n  border: none;\n  width: 100%;\n  border-radius: 10px;\n  color: #fff;\n  transition: background-color ease 0.3s;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #326ac0;\n  }\n"]);return D=function(){return e},e}var z=m.a.button(D()),A=function(e){var n=e.updateCoin,t=e.updateCrypt,c=Object(a.useState)([]),o=Object(s.a)(c,2),i=o[0],f=o[1],m=Object(a.useState)(!1),p=Object(s.a)(m,2),b=p[0],v=p[1],g=O("Select your currency: ","",[{cod:"USD",name:"US Dollar"},{cod:"EUR",name:"Euro"},{cod:"GBP",name:"GB Pound"}]),E=Object(s.a)(g,2),y=E[0],h=E[1],j=S("Select your cryptcoin: ","",i),x=Object(s.a)(j,2),w=x[0],k=x[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",e.next=3,d.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");case 3:n=e.sent,f(n.data.Data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==y&&""!==w?(v(!1),n(y),t(w)):v(!0)}},b?r.a.createElement(B,{message:"Error! All the fields are required"}):null,r.a.createElement(h,null),r.a.createElement(k,null),r.a.createElement(z,{type:"submit"},"Calculate"))};function I(){var e=Object(f.a)(["\n  color: #fff;\n  font-size: 1.2rem;\n  font-family: Helvetica, Arial, sans-serif;\n\n  &.main{\n    font-family: 'Bebas Neue', cursive;\n    font-size: 2.5rem;\n    /* text-align: left; */\n  }\n"]);return I=function(){return e},e}function U(){var e=Object(f.a)(["\n  display: block;\n  margin-top: 3rem;\n  \n"]);return U=function(){return e},e}var H=m.a.div(U()),L=m.a.p(I()),P=function(e){var n=e.result;return 0===Object.keys(n).length?null:r.a.createElement(H,null,r.a.createElement(L,{className:"main"},"The price of the ",n.FROMSYMBOL," is: ",n.PRICE," "),r.a.createElement(L,null,"Highest price of the day: ",n.HIGHDAY," "),r.a.createElement(L,null,"Lowest price of the day: ",n.LOWDAY," "),r.a.createElement(L,null,"Variation in the last 24hrs: ",n.CHANGEPCT24HOUR," "),r.a.createElement(L,null,"Last Update: ",n.LASTUPDATE," "))},T=(t(45),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"bounce1"}),r.a.createElement("div",{className:"bounce2"}),r.a.createElement("div",{className:"bounce3"}))});function F(){var e=Object(f.a)(['\n  font-family: "Bebas Neue", cursive;\n  color: #fff;\n  text-align: left;\n  font-weight: 700;\n  font-size: 50px;\n  margin-bottom: 50px;\n  margin-top: 80px;\n\n  &::after {\n    content: "";\n    width: 100px;\n    height: 6px;\n    background-color: #66a2fe;\n    display: block;\n  }\n']);return F=function(){return e},e}function G(){var e=Object(f.a)(["\n  max-width: 100%;\n  margin-top: 5rem;\n"]);return G=function(){return e},e}function R(){var e=Object(f.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n\n  @media (min-width: 992px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 2rem;\n  }\n"]);return R=function(){return e},e}var Y=m.a.div(R()),M=m.a.img(G()),W=m.a.h1(F());var J=function(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),f=i[0],m=i[1],p=Object(a.useState)({}),b=Object(s.a)(p,2),g=b[0],E=b[1],y=Object(a.useState)(!1),h=Object(s.a)(y,2),O=h[0],j=h[1];return Object(a.useEffect)((function(){""!==t&&function(){var e=Object(l.a)(u.a.mark((function e(){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(f,",ETH&tsyms=").concat(t),e.next=3,d.a.get(n);case 3:a=e.sent,j(!0),setTimeout((function(){E(a.data.DISPLAY[f][t]),j(!1)}),1500);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t,f]),r.a.createElement(Y,null,r.a.createElement("div",null,r.a.createElement(M,{src:v.a,alt:"Criptocoins image"})),r.a.createElement("div",null,r.a.createElement(W,null,"Quote crypt-coins instantly"),r.a.createElement(A,{updateCoin:c,updateCrypt:m}),O?r.a.createElement(T,null):r.a.createElement(P,{result:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.3118ce4b.chunk.js.map