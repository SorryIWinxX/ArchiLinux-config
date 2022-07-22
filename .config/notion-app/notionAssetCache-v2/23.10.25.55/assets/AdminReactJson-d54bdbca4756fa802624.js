"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[0],{90799:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(97464),s=n.n(a),i=n(77422),o=n.n(i),r=n(77094),d=n.n(r),l=(n(33948),n(15306),n(96486)),p=n.n(l),u=n(67294),h=n(80126),b=n(83355),c=(n(75246),n(74487));const m=c.Ry({required:{id:c.Z_(),isBot:c.O7()},optional:{email:c.Z_(),parent_table:c.Z_()}}),f=c.Ry({required:{parentId:c.Z_(),parentTable:c.Z_()},optional:{}}),v=c.Ry({required:{id:c.Z_(),table:c.Z_(),title:c.Z_()},optional:{}}),g=c.Ry({required:{id:c.Z_(),table:c.i0("space")},optional:{name:c.Z_(),plan_type:c.Z_()}});var y=n(3779),_=n(74335),C=n(36054),Z=n(66055),k=n(12318),F=n(80527),w=n(15102);const S={scheme:"unused",author:"@blackmad",base00:"#FFFFFA",base01:"#FFFFF8",base02:"#A09F95",base03:"#7A7664",base04:"#827C62",base05:"#22221C",base06:"#262522",base07:"#22211E",base08:"#FF307C",base09:"#C66000",base0A:"#804B01",base0B:"#478300",base0C:"#0D5B50",base0D:"#0C7F95",base0E:"#8D60DD",base0F:"#B44E1B"},B={scheme:"unused:inverted",author:"@blackmad",base00:"#272822",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#a6e22e",base0C:"#a1efe4",base0D:"#66d9ef",base0E:"#ae81ff",base0F:"#cc6633"};function T(e){let{table:t,id:n}=e,a=t;return"user"===a&&(a="notion_user"),_._O.includes(a)?d()("a",{style:{cursor:"pointer",textDecoration:"none",paddingLeft:6},href:"/__admin/".concat(a,"/").concat(n)},void 0,"🔗"):null}const R=[e=>{let{data:t}=e;return(0,C.P9)(f,t)?{element:d()("span",{},void 0,t.parentTable," ",t.parentId,d()(T,{table:t.parentTable,id:t.parentId}))}:null},e=>{let{data:t}=e;return(0,C.P9)(g,t)?{element:d()("span",{},void 0,t.name||t.id,d()(T,{table:"space",id:t.id}))}:null},e=>{let{data:t}=e;return(0,C.P9)(m,t)?{element:d()("span",{},void 0,t.isBot?"".concat(t.id," (bot)"):t.email,d()(T,{table:t.parent_table||"notion_user",id:t.id}))}:null},e=>{let{data:t}=e;return(0,C.P9)(v,t)?{element:d()("span",{},void 0,t.title,d()(T,{table:t.table||"block",id:t.id}))}:null},e=>{let{data:t}=e;return Array.isArray(t)?t.some((e=>p().isObject(e)))||t.length>10?null:0===t.length?{element:d()("span",{},void 0,"[]")}:{element:d()("span",{},void 0,t.join(", "))}:null},e=>{let{data:t,keyPath:n}=e;if("billing"===n[0]){const e=t;return e.isSubscribed?{element:d()("span",{},void 0,"isSubscribed=true ",e.planType),expanded:!0}:{element:d()("span",{},void 0,"isSubscribed=false"),expanded:!1}}return null}];class x extends b.Z{constructor(){super(...arguments),o()(this,"storeTypes",{modalOpen:k.Z.of(!1)}),o()(this,"customCollapsedRenderers",[...this.props.customCollapsedRenderers||[],...R])}onClickHandler(e){Z.Pm(this.environment,e)}getTheme(){return"dark"===this.environment.ThemeStore.state.mode?B:S}renderComponent(){var e=this;const{data:t,defaultCollapsed:n,showCopyButton:a,showModalButton:i,jsonTreeRef:o}=this.props,r=a||i;return d()("div",{style:{position:"relative",width:"100%",backgroundColor:this.getTheme().base00}},void 0,d()("div",{style:{marginRight:r?30:void 0}},void 0,u.createElement(h.ZP,{ref:o,data:t,hideRoot:!0,invertTheme:!1,theme:{extend:this.getTheme(),tree:{marginTop:0,marginBottom:0,marginLeft:0,paddingTop:0}},getItemString:(e,t,n,a,s)=>{for(const i of this.customCollapsedRenderers){const e=i({data:t,keyPath:s});if(e)return e.element}return d()("span",{},void 0,n," ",a)},shouldExpandNode:(e,t,a)=>{for(const n of this.customCollapsedRenderers){const a=n({data:t,keyPath:e});if(a)return Boolean(a.expanded)}return!n},valueRenderer:function(t,n){for(var a=arguments.length,s=new Array(a>2?a-2:0),i=2;i<a;i++)s[i-2]=arguments[i];function o(){const e=s[0].toString();var t;if("id"===e)return d()(T,{id:n,table:null===(t=s[1])||void 0===t?void 0:t.toString()});if(e.endsWith("_id")||e.endsWith("Id")){const t=e.replace("_id","").replace("Id","");return d()(T,{id:n,table:t})}return null}const r=o();return n.toString().startsWith("http")?d()("a",{style:{cursor:"pointer"},href:n},void 0,n):d()("span",{},void 0,d()("span",{onClick:()=>e.onClickHandler(n)},void 0,n.toString())," ",r)}})),a&&d()(F.Z,{style:{position:"absolute",top:2,right:2,padding:2,height:14,width:14},iconStyle:{width:10,height:10},icon:y.Z.copy,onClick:()=>{Z.Pm(this.environment,t)}}),d()(w.Z,{open:this.stores.modalOpen.state,innerStyle:{maxHeight:"90vh",maxWidth:"90vw",height:"90vh",width:"90vw",overflow:"scroll"},onDismiss:()=>{this.stores.modalOpen.setState(!1)},render:()=>u.createElement(x,s()({},this.props,{showModalButton:!1}))}),i&&d()(F.Z,{style:{position:"absolute",top:2,right:16,padding:2,height:14,width:14},iconStyle:{width:10,height:10},icon:y.Z.openAsPage,onClick:()=>{this.stores.modalOpen.setState(!0)}}))}}}}]);