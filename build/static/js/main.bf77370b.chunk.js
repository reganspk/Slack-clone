(this["webpackJsonpslack-clone"]=this["webpackJsonpslack-clone"]||[]).push([[0],{66:function(e,a,t){e.exports=t(95)},71:function(e,a,t){},72:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(24),r=t.n(c),o=(t(71),t(13)),s=t(4),i=(t(72),t(43)),m=t.n(i),u=t(47),d=t.n(u),E=t(26),h=t.n(E),p=h.a.initializeApp({apiKey:"AIzaSyChpBFbQCtoVpPI-J5fZGIGKDY0ho1UpD4",authDomain:"slack-cloning.firebaseapp.com",databaseURL:"https://slack-cloning.firebaseio.com",projectId:"slack-cloning",storageBucket:"slack-cloning.appspot.com",messagingSenderId:"186640194106",appId:"1:186640194106:web:0202e2e9d1efab6fa5b303",measurementId:"G-MGXMBFDRFZ"}).firestore(),v=h.a.auth(),f=new h.a.auth.GoogleAuthProvider,g=p;t(83);var b=function(e){var a=e.message,t=e.timestamp,n=e.user,c=e.userImage;return l.a.createElement("div",{className:"message"},l.a.createElement("img",{src:c,alt:""}),l.a.createElement("div",{className:"message_info"},l.a.createElement("h4",null,n," ",l.a.createElement("span",{className:"message_timestamp"},new Date(null===t||void 0===t?void 0:t.toDate()).toUTCString())),l.a.createElement("p",null,a)))},N=(t(84),Object(n.createContext)()),I=function(e){var a=e.reducer,t=e.initialState,c=e.children;return l.a.createElement(N.Provider,{value:Object(n.useReducer)(a,t)},c)},O=function(){return Object(n.useContext)(N)};var j=function(e){var a=e.channelName,t=e.channelId,c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],i=r[1],m=O(),u=Object(o.a)(m,1)[0].user;return l.a.createElement("div",{className:"chatInput"},l.a.createElement("form",null,l.a.createElement("input",{value:s,onChange:function(e){i(e.target.value)},placeholder:"Message #".concat(null===a||void 0===a?void 0:a.toLowerCase())}),l.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log(t),t&&g.collection("rooms").doc(t).collection("messages").add({message:s,timestamp:h.a.firestore.FieldValue.serverTimestamp(),user:u.displayName,userImage:u.photoURL}),i("")}},"SEND")))};var S=function(){var e=Object(s.g)().roomId,a=Object(n.useState)(null),t=Object(o.a)(a,2),c=t[0],r=t[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),E=u[0],h=u[1];return Object(n.useEffect)((function(){e&&g.collection("rooms").doc(e).onSnapshot((function(e){return r(e.data())})),g.collection("rooms").doc(e).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return h(e.docs.map((function(e){return e.data()})))}))}),[e]),l.a.createElement("div",{className:"chat"},l.a.createElement("div",{className:"chat_header"},l.a.createElement("div",{className:"chat_headerLeft"},l.a.createElement("h4",{className:"chat_channelName"},l.a.createElement("strong",null,"# ",null===c||void 0===c?void 0:c.name),l.a.createElement(m.a,null))),l.a.createElement("div",{className:"chat_headerRight"},l.a.createElement("p",null,l.a.createElement(d.a,null)," Details"))),l.a.createElement("div",{className:"chat_message"},E.map((function(e,a){return l.a.createElement(b,{message:e.message,timestamp:e.timestamp,user:e.user,userImage:e.userImage,key:a})}))),console.log(null===c||void 0===c?void 0:c.name),l.a.createElement(j,{channelName:null===c||void 0===c?void 0:c.name,channelId:e}))},_=(t(90),t(108)),k=t(37),w="SET_USER",C=function(e,a){switch(console.log(a),a.type){case w:return Object(k.a)(Object(k.a)({},e),{},{user:a.user});default:return e}};var y=function(){var e=O(),a=Object(o.a)(e,2),t=(a[0],a[1]);return l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"login_container"},l.a.createElement("img",{src:"/images/slack.jpg",alt:""}),l.a.createElement("h1",null,"Sign in to Developer Gang HQ"),l.a.createElement("p",null,"developergang.slack.com"),l.a.createElement(_.a,{onClick:function(){v.signInWithPopup(f).then((function(e){console.log(e),t({type:w,user:e.user})})).catch((function(e){alert(e.message)}))}},"Sign In with Google")))},D=(t(91),t(92),t(109)),G=t(48),R=t.n(G),B=t(49),F=t.n(B),P=t(50),U=t.n(P);var A=function(){var e=O(),a=Object(o.a)(e,1)[0].user;return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header_left"},l.a.createElement(D.a,{className:"header_avatar",alt:null===a||void 0===a?void 0:a.displayName,src:null===a||void 0===a?void 0:a.photoURL}),l.a.createElement(R.a,null)),l.a.createElement("div",{className:"header_search"},l.a.createElement(F.a,null),l.a.createElement("input",{placeholder:"Search "})),l.a.createElement("div",{className:"header_right"}),l.a.createElement(U.a,null))},L=(t(93),t(51)),M=t.n(L),T=t(53),W=t.n(T),x=t(52),J=t.n(x);t(94);var z=function(e){var a=e.Icon,t=e.title,n=e.id,c=e.addChannelOption,r=Object(s.f)();return l.a.createElement("div",{className:"sidebarOption",onClick:c?function(){var e=prompt("Please enter the channel name");e&&g.collection("rooms").add({name:e})}:function(){n?r.push("/room/".concat(n)):r.push(t)}},a&&l.a.createElement(a,{className:"sidebarOption_icon"}),a?l.a.createElement("h3",null,t):l.a.createElement("h3",{className:"sidebarOption_channel"},l.a.createElement("span",{className:"sidebarOption_hash"},"#"),t))},K=t(54),Q=t.n(K),V=t(55),Z=t.n(V),H=t(56),X=t.n(H),Y=t(57),$=t.n(Y),q=t(58),ee=t.n(q),ae=t(59),te=t.n(ae),ne=t(60),le=t.n(ne),ce=t(61),re=t.n(ce),oe=t(62),se=t.n(oe);var ie=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],r=O(),s=Object(o.a)(r,1)[0].user;return Object(n.useEffect)((function(){g.collection("rooms").onSnapshot((function(e){return c(e.docs.map((function(e){return{id:e.id,name:e.data().name}})))}))}),[]),l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"sidebar_header"},l.a.createElement("div",{className:"sidebar_info"},l.a.createElement("h2",null,"Developer Gang"),l.a.createElement("h3",null,l.a.createElement(M.a,null),null===s||void 0===s?void 0:s.displayName)),l.a.createElement(J.a,null)),l.a.createElement(z,{Icon:W.a,title:"Threads"}),l.a.createElement(z,{Icon:Q.a,title:"Mention & Reactions"}),l.a.createElement(z,{Icon:Z.a,title:"Saved items"}),l.a.createElement(z,{Icon:X.a,title:"Channel Browser"}),l.a.createElement(z,{Icon:$.a,title:"People & user groups"}),l.a.createElement(z,{Icon:ee.a,title:"Apps"}),l.a.createElement(z,{Icon:te.a,title:"File browser"}),l.a.createElement(z,{Icon:le.a,title:"Show less"}),l.a.createElement("hr",null),l.a.createElement(z,{Icon:re.a,title:"Channels"}),l.a.createElement("hr",null),l.a.createElement(z,{Icon:se.a,title:"Add Channel",addChannelOption:!0}),t.map((function(e,a){return l.a.createElement(z,{key:a,title:e.name,id:e.id})})))},me=t(32);var ue=function(){var e=O(),a=Object(o.a)(e,2),t=a[0].user;return a[1],l.a.createElement("div",{className:"app"},l.a.createElement(me.a,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),l.a.createElement("div",{className:"app_body"},l.a.createElement(ie,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/room/:roomId"},l.a.createElement(S,null)),l.a.createElement(s.a,null,l.a.createElement("h1",null,"Welcome"))))):l.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,{initialState:{user:null},reducer:C},l.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.bf77370b.chunk.js.map