(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8503:function(e,a,t){Promise.resolve().then(t.bind(t,1191))},1191:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return _}});var o=t(7437);t(5204),t(2978);var n=t(2265),s=t(7323),r=t.n(s);t(3023);var l=t(7440),i=t(2649),c=t(7138),d=t(6648),m=t(9320),u=()=>{let[e,a]=(0,n.useState)(!1),[t,s]=(0,n.useState)(!1),r=(0,n.useRef)(null),l=()=>{s(!1)},i=()=>{a(!0),window.gtag&&window.gtag("event","click",{event_category:"Bot\xf3n",event_label:"H Solicitar Cotizaci\xf3n",value:1})};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("header",{className:"bg-primary text-white w-full box-border p-4",children:[(0,o.jsxs)("div",{className:"flex items-center justify-between",children:[(0,o.jsx)(c.default,{href:"/",children:(0,o.jsx)(d.default,{src:"".concat("/Identidad360","/images/logoIdentidad360_25px.png"),alt:"Logo de IdentidadDigital360",className:"w-20 h-auto",width:30,height:30})}),(0,o.jsxs)("nav",{className:"hidden md:flex space-x-4",children:[(0,o.jsx)(c.default,{href:"/blog/",children:(0,o.jsx)("span",{className:"text-white hover:text-gray-300 transition-colors duration-300",children:"Blog"})}),(0,o.jsx)("a",{href:"/#servicios",className:"text-white hover:text-gray-300 transition-colors duration-300",children:"Servicios"}),(0,o.jsx)("a",{href:"/#precios",className:"text-white hover:text-gray-300 transition-colors duration-300",children:"Precios"}),(0,o.jsx)("a",{href:"#",className:"text-white hover:text-gray-300 transition-colors duration-300",onClick:i,children:"Contacto"})]}),(0,o.jsx)("button",{id:"mobile-menu-btn",className:"text-3xl md:hidden bg-none border-none text-white cursor-pointer",onClick:()=>{s(!t)},children:"☰"})]}),(0,o.jsxs)("nav",{ref:r,id:"nav-menu",className:"md:hidden ".concat(t?"block":"hidden"," absolute top-16 right-0 bg-primary w-full p-4 z-50"),children:[(0,o.jsx)(c.default,{href:"/blog/",children:(0,o.jsx)("span",{className:"block py-2 text-white hover:text-gray-300",children:"Blog"})}),(0,o.jsx)(c.default,{href:"/#servicios",children:(0,o.jsx)("span",{className:"block py-2 text-white hover:text-gray-300",onClick:l,children:"Servicios"})}),(0,o.jsx)(c.default,{href:"/#precios",children:(0,o.jsx)("span",{className:"block py-2 text-white hover:text-gray-300",onClick:l,children:"Precios"})}),(0,o.jsx)(c.default,{href:"#",children:(0,o.jsx)("span",{className:"block py-2 text-white hover:text-gray-300",onClick:i,children:"Contacto"})})]})]}),(0,o.jsx)(m.Z,{isOpen:e,onClose:()=>a(!1)})]})},h=t(4644),x=t.n(h),g=()=>(0,o.jsx)("footer",{className:x().footer,children:(0,o.jsxs)("div",{className:"container mx-auto",children:[(0,o.jsxs)("nav",{className:"footer__nav flex justify-center",children:[(0,o.jsx)("a",{href:"#",className:"footer__nav-item",children:"Inicio"}),(0,o.jsx)("a",{href:"#servicios",className:"footer__nav-item",children:"Servicios"}),(0,o.jsx)("a",{href:"#precios",className:"footer__nav-item",children:"Precios"}),(0,o.jsx)("a",{href:"#contacto",className:"footer__nav-item",children:"Contacto"})]}),(0,o.jsx)("p",{className:"text-sm text-gray-300 mt-4",children:"\xa9 2024 Identidad360. Todos los derechos reservados."})]})}),f=t(1877);function _(e){let{children:a}=e,[t,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{"true"===i.Z.get("user-consent")&&s(!0),t&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];console.log("gtag called with args:",a),window.dataLayer.push(a)},console.log("Google Analytics initialized"),window.gtag("js",new Date),window.gtag("config","G-7SGN0GSQB7",{cookie_flags:"SameSite=None;Secure"}),r().init())},[t]),(0,o.jsxs)("html",{lang:"es",children:[(0,o.jsxs)("head",{children:[(0,o.jsx)(f.default,{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-7SGN0GSQB7"}),(0,o.jsx)(f.default,{id:"google-analytics",strategy:"afterInteractive",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n          "})]}),(0,o.jsxs)("body",{children:[(0,o.jsx)(u,{}),(0,o.jsx)("main",{children:a}),(0,o.jsx)(g,{}),(0,o.jsx)(l.ZP,{buttonText:"Acepto",cookieName:"user-consent",style:{background:"#000",color:"#fff",padding:"10px"},buttonStyle:{color:"#000",background:"#fff",fontSize:"13px"},expires:365,onAccept:()=>{console.log("Cookies accepted, initializing Google Analytics"),s(!0),i.Z.set("user-consent","true",{expires:365})},children:"Este sitio usa cookies para mejorar la experiencia. Al continuar navegando, aceptas su uso."})]})]})}},9320:function(e,a,t){"use strict";var o=t(7437),n=t(2265),s=t(1886),r=t(4620),l=t.n(r);a.Z=e=>{let{isOpen:a,onClose:t}=e,[r,i]=(0,n.useState)({name:"",email:"",message:""}),[c,d]=(0,n.useState)(""),[m,u]=(0,n.useState)(""),[h,x]=(0,n.useState)(!1),g=e=>{let{name:a,value:t}=e.target;i(e=>({...e,[a]:t}))};return a?(0,o.jsx)("div",{className:l().modalOverlay,onClick:t,children:(0,o.jsxs)("div",{className:l().modalContent,onClick:e=>e.stopPropagation(),children:[(0,o.jsx)("button",{className:l().modalClose,onClick:t,children:"X"}),(0,o.jsxs)("div",{className:l().modalHeader,children:[(0,o.jsx)("h2",{children:"Datos para un Primer Contacto"}),(0,o.jsx)("p",{children:"Queremos conocer mejor tu idea para ofrecerte la mejor soluci\xf3n posible"})]}),(0,o.jsxs)("form",{className:"contact__form bg-white p-8 rounded-lg shadow-md",onSubmit:e=>{e.preventDefault(),x(!0);let a={name:r.name,email:r.email,message:r.message};window.gtag&&window.gtag("event","submit",{event_category:"Formulario",event_label:"Solicitud de Cotizaci\xf3n",value:1}),s.ZP.send("service_6pxd8j7","template_whz4otd",a,"QmNoMSufAjUqdXE-e").then(()=>{s.ZP.send("service_6pxd8j7","template_6v2nsne",a,"QmNoMSufAjUqdXE-e").then(()=>{d("Env\xedo exitoso. Revisa tu correo electr\xf3nico para m\xe1s informaci\xf3n."),u(""),i({name:"",email:"",message:""})}).catch(()=>{u("Error al enviar la confirmaci\xf3n al cliente."),d("")}).finally(()=>{x(!1)})},()=>{u("Error al enviar el correo."),d(""),x(!1)})},children:[(0,o.jsxs)("div",{className:"form-grid",children:[(0,o.jsxs)("div",{className:"form-column",children:[(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{htmlFor:"name",className:"block text-gray-700 font-bold mb-2",children:"Nombre"}),(0,o.jsx)("input",{type:"text",id:"name",name:"name",value:r.name,onChange:g,className:"contact__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{htmlFor:"email",className:"block text-gray-700 font-bold mb-2",children:"Correo Electr\xf3nico"}),(0,o.jsx)("input",{type:"email",id:"email",name:"email",value:r.email,onChange:g,className:"contact__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]})]}),(0,o.jsx)("div",{className:"form-column",children:(0,o.jsxs)("div",{className:"mb-6",children:[(0,o.jsx)("label",{htmlFor:"message",className:"block text-gray-700 font-bold mb-2",children:"Mensaje"}),(0,o.jsx)("textarea",{id:"message",name:"message",value:r.message,onChange:g,className:"contact__textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]})})]}),m&&(0,o.jsx)("p",{className:l().errorMessage,children:m}),c&&(0,o.jsx)("p",{className:l().successMessage,children:c}),(0,o.jsx)("button",{type:"submit",className:"contact__button w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ".concat(h?"opacity-50 cursor-not-allowed":""),disabled:h,children:h?"Enviando...":"Enviar"})]})]})}):null}},2978:function(){},5204:function(){},4644:function(e){e.exports={footer:"Footer_footer__JrJN9",footer__nav:"Footer_footer__nav__wlgtc","footer__nav-item":"Footer_footer__nav-item__XTfLQ"}},4620:function(e){e.exports={modalOverlay:"Modal_modalOverlay__dxw3s",modalContent:"Modal_modalContent__ENWME",modalHeader:"Modal_modalHeader__532GT",formGrid:"Modal_formGrid__9crhO",formColumn:"Modal_formColumn__2E6YQ",modalClose:"Modal_modalClose__Twn08",contact__button:"Modal_contact__button__wLdYl","text-red-600":"Modal_text-red-600__mL9qQ","text-green-600":"Modal_text-green-600__p6eXn"}}},function(e){e.O(0,[704,594,222,648,231,110,971,23,744],function(){return e(e.s=8503)}),_N_E=e.O()}]);