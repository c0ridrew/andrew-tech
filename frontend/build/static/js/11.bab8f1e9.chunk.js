(this["webpackJsonpandrew-tech"]=this["webpackJsonpandrew-tech"]||[]).push([[11],{465:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return h})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return p}));var n=a(0),c=a.n(n),l=a(568),r=a(692),i=a(693),m=a(479),o=a(99);const s={media:{height:"40vh",width:"auto",backgroundSize:"contain"},deck:{image:{height:"20vh",objectFit:"cover"}}},d=({ogImage:e})=>c.a.createElement(l.a,null,c.a.createElement(r.a,null,c.a.createElement(i.a,{image:e||"image",title:"blog image",style:s.media}))),h=({data:e,history:t})=>c.a.createElement("div",null,c.a.createElement(o.a,{gutterBottom:!0,variant:"h5",component:"h2"},"\u4eba\u6c17\u306e\u8a18\u4e8b"),c.a.createElement(m.f,{deck:!0},e.slice(0,3).map(e=>c.a.createElement(m.c,{key:e.id},c.a.createElement(m.g,{src:e.og_image,alt:"MDBCard image cap",top:!0,hover:!0,waves:!0,overlay:"white-slight",style:s.deck.image}),c.a.createElement(m.d,null,c.a.createElement(m.i,{tag:"h5"},e.title),c.a.createElement(m.h,{small:!0,muted:!0},e.created_at),c.a.createElement(m.h,null,e.description)),c.a.createElement(m.e,{small:!0,transparent:!0},c.a.createElement(m.b,{color:"primary",size:"sm",onClick:()=>t.push("blogs/".concat(e.id))},"\u8a18\u4e8b\u3092\u8aad\u3080")))))),u=({data:e,history:t})=>{const a=e.sort((e,t)=>new Date(t.created_at).getTime()-new Date(e.created_at).getTime());return c.a.createElement("div",null,c.a.createElement(o.a,{gutterBottom:!0,variant:"h5",component:"h2"},"\u6700\u8fd1\u306e\u8a18\u4e8b"),c.a.createElement(m.f,{deck:!0},a.slice(0,3).map(e=>c.a.createElement(m.c,{key:e.id},c.a.createElement(m.g,{src:e.og_image,alt:"MDBCard image cap",top:!0,hover:!0,waves:!0,overlay:"white-slight",style:s.deck.image}),c.a.createElement(m.d,null,c.a.createElement(m.i,{tag:"h5"},e.title),c.a.createElement(m.h,{small:!0,muted:!0},e.created_at),c.a.createElement(m.h,null,e.description)),c.a.createElement(m.e,{small:!0,transparent:!0},c.a.createElement(m.b,{color:"primary",size:"sm",onClick:()=>t.push("/blogs/".concat(e.id))},"\u8a18\u4e8b\u3092\u8aad\u3080"))))))},p=({id:e,data:t,history:a})=>{const n=t.filter(t=>t.id===e+1)[0],l=t.filter(t=>t.id===e-1)[0];return c.a.createElement("div",null,c.a.createElement(o.a,{gutterBottom:!0,variant:"h5",component:"h2"},"\u95a2\u9023\u306e\u8a18\u4e8b"),c.a.createElement(m.f,{deck:!0},l&&c.a.createElement(m.c,null,c.a.createElement(m.g,{src:l.og_image,alt:"MDBCard image cap",top:!0,hover:!0,waves:!0,overlay:"white-slight",style:s.deck.image}),c.a.createElement(m.d,null,c.a.createElement(m.i,{tag:"h5"},l.title),c.a.createElement(m.h,{small:!0,muted:!0},l.created_at),c.a.createElement(m.h,null,l.description)),c.a.createElement(m.e,{small:!0,transparent:!0},c.a.createElement(m.b,{color:"primary",size:"sm",onClick:()=>a.push("/blogs/".concat(l.id))},"\u524d\u306e\u8a18\u4e8b\u3092\u8aad\u3080"))),n&&c.a.createElement(m.c,null,c.a.createElement(m.g,{src:n.og_image,alt:"MDBCard image cap",top:!0,hover:!0,waves:!0,overlay:"white-slight",style:s.deck.image}),c.a.createElement(m.d,null,c.a.createElement(m.i,{tag:"h5"},n.title),c.a.createElement(m.h,{small:!0,muted:!0},n.created_at),c.a.createElement(m.h,null,n.description)),c.a.createElement(m.e,{small:!0,transparent:!0},c.a.createElement(m.b,{color:"primary",size:"sm",onClick:()=>a.push("/blogs/".concat(n.id))},"\u6b21\u306e\u8a18\u4e8b\u3092\u8aad\u3080")))))}},665:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(74),r=a(47),i=a(544),m=a(661),o=a(479);function s(){const e=Object(i.a)(["\n    min-height: 68vh;\n    object-fit: cover;\n    @media (max-width: 960px) {\n      min-height: 40vh;\n    }\n  "]);return s=function(){return e},e}function d(){const e=Object(i.a)(["\n    height: 68vh;\n    @media (max-width: 960px) {\n      height: 40vh;\n    }\n  "]);return d=function(){return e},e}const h=({data:e,history:t})=>{const a=Object(m.a)(d()),n=Object(m.a)(s());return Object(m.b)(o.j,{activeItem:1,css:a,length:5,showControls:!0,showIndicators:!0,className:"z-depth-1",slide:!0},Object(m.b)(o.l,null,e.map((e,a)=>Object(m.b)(o.m,{type:"button",itemId:a+1,key:a+1,onClick:()=>t.push("blogs/".concat(e.id))},Object(m.b)(o.s,null,Object(m.b)("img",{alt:"carousel",className:"d-block m-auto",src:e.og_image,css:n}),Object(m.b)(o.o,{overlay:"black-strong"})),Object(m.b)(o.k,null,Object(m.b)("h1",{className:"h3-responsive"},e.title),Object(m.b)("p",null,e.description))))))};var u=a(443),p=a(444),E=a(442),g=a(446),b=a(691),v=a(666),y=a(99);const k=({data:e,history:t})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{variant:"h5",component:"h2"},"\u8a18\u4e8b\u4e00\u89a7"),c.a.createElement(u.a,null,e.map(e=>c.a.createElement("div",{key:e.id},c.a.createElement(p.a,{alignItems:"flex-start",button:!0,onClick:()=>t.push("blogs/".concat(e.id))},c.a.createElement(b.a,null,c.a.createElement(v.a,{src:e.og_image})),c.a.createElement(g.a,{primary:e.title,secondary:c.a.createElement(y.a,{component:"span",variant:"caption",color:"textSecondary"},e.updated_at)})),c.a.createElement(E.a,{variant:"inset",component:"li"})))));var w=a(465),f=a(512),j=a(494),O=a(652);const _={setEditorState:r.g,setStatus:r.j,fetchAllRequest:r.a};class C extends n.Component{componentDidMount(){this.props.setStatus("publish"),this.props.fetchAllRequest()}render(){return n.createElement(n.Fragment,null,n.createElement(h,this.props),n.createElement(j.a,{maxWidth:"lg",className:"my-5"},n.createElement(O.a,{container:!0,direction:"row",justify:"space-between"},n.createElement(O.a,{item:!0,xs:12,sm:8,className:"mb-2"},n.createElement("div",{className:"mb-5"},n.createElement(w.d,this.props)),n.createElement("div",{className:"mb-5"},n.createElement(w.b,this.props)),n.createElement("div",{className:"mb-5"},n.createElement(k,this.props))),n.createElement(O.a,{item:!0,xs:12,sm:3,className:"mb-2"},n.createElement(f.Timeline,{dataSource:{sourceType:"profile",screenName:"andrewdayoooo"},options:{username:"andrewdayoooo",height:"400",theme:"dark"}})))))}}t.default=Object(l.c)(({blogs:e})=>({id:e.id,editorState:e.editorState,data:e.data}),_)(C)}}]);
//# sourceMappingURL=11.bab8f1e9.chunk.js.map