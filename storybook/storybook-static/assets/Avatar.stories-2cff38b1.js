import{q as pe,_ as me,t as ue,j as s,a as be}from"./usePropId-97cc893b.js";import{r as a}from"./index-76fb7be0.js";import{t as Ge}from"./tw-merge-1166cefb.js";import{E as fe,a as i,V as c}from"./View-0bd09aa3.js";import"./_commonjsHelpers-de833af9.js";const D=a.forwardRef((o,r)=>{const e=pe("Avatar"),t=Object.assign({},o),{children:p,className:R=""}=t,u=me(t,["children","className"]),d=ue(o.id);return s("div",Object.assign({id:d,ref:r,className:e.group({className:R})},u,{children:p}))});D.displayName="AvatarGroup";D.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup"};const ke={color:"gray",outlined:!0,radius:"full",shadow:"none",shadowColor:"none",size:"lg",status:"none",statusPosition:"bottom-right",tone:"solid"},F=a.forwardRef((o,r)=>{const e=pe("Avatar"),t=Object.assign(Object.assign({},ke),o),{alt:p,children:R,className:u="",color:d,initials:z="",outlined:C,radius:h,shadow:E,shadowColor:T,size:S,src:g,status:x,statusPosition:we,tone:j}=t,ve=me(t,["alt","children","className","color","initials","outlined","radius","shadow","shadowColor","size","src","status","statusPosition","tone"]),[_,ye]=a.useState(!1),Ve=a.useMemo(()=>Ge(e.base({className:u,color:d,radius:h,shadow:E,shadowColor:T,size:S,tone:j,outlined:C})),[e,u,d,h,E,T,S,j,C]),Ne=ue(o.id);return be("div",Object.assign({id:Ne,ref:r,className:Ve},ve,{children:[g&&!_&&s("img",{onError:()=>ye(!0),className:e.image({radius:h}),src:g,alt:p||z}),(!g||g&&_)&&z,x!=="none"&&s("span",{className:e.status({radius:h,status:x,size:S,position:we})})]}))});F.displayName="Avatar";const n=Object.assign(F,{Group:D});F.__docgenInfo={description:"",methods:[],displayName:"Avatar"};const m=["white","blue","red","green","yellow","purple","gray","dark","black"],l=["solid","light","glossy","outline"],de=["xs","sm","md","lg","xl"],he=["none","sm","md","lg","full"],A=["none","sm","base","md","lg","xl"],ge=["none","online","offline","busy","away"],Se=["top-left","top-right","bottom-left","bottom-right"],De="https://avatars.githubusercontent.com/u/463230?v=4",Fe=["https://avatars.githubusercontent.com/u/4800338?s=96&v=4","https://avatars.githubusercontent.com/u/810438?s=96&v=4","https://avatars.githubusercontent.com/u/3624098?s=96&v=4","https://avatars.githubusercontent.com/u/1365881?s=96&v=4","https://avatars.githubusercontent.com/u/4060187?s=60&v=4","https://avatars.githubusercontent.com/u/6324199?s=60&v=4"],qe={title:"Components/Avatar",component:n,argTypes:{tone:{options:l,control:{type:"select"}},color:{options:m,control:{type:"select"}},size:{options:de,control:{type:"select"}},radius:{options:he,control:{type:"select"}},shadow:{options:A,control:{type:"select"}},shadowColor:{options:m,control:{type:"select"}},status:{options:ge,control:{type:"select"}},statusPosition:{options:Se,control:{type:"select"}},outlined:{options:[!0,!1],control:{type:"boolean"}}},parameters:{controls:{expanded:!0}}},Ae=o=>s(fe,{prop:"Default",children:s(n,{...o,src:De,initials:"ND"})}),w=Ae.bind({}),Re=o=>{const r=m.map(e=>s(a.Fragment,{children:s(i,{prop:"color",value:e,children:l.map(t=>a.createElement(n,{...o,key:t,color:e,tone:t,initials:"ND"}))})},e));return s(c,{children:r})},v=Re.bind({}),ze=o=>{const r=l.map(e=>s(a.Fragment,{children:s(i,{prop:"tone",value:e,children:m.map(t=>a.createElement(n,{...o,key:t,color:t,tone:e,initials:"ND"}))})},e));return s(c,{children:r})},y=ze.bind({}),Ce=o=>{const r=de.map(e=>s(a.Fragment,{children:s(i,{prop:"size",value:e,children:l.map(t=>a.createElement(n,{...o,key:t,size:e,tone:t,initials:"ND"}))})},e));return s(c,{children:r})},V=Ce.bind({}),Ee=o=>{const r=he.map(e=>s(a.Fragment,{children:s(i,{prop:"radius",value:e,children:l.map(t=>a.createElement(n,{...o,key:t,radius:e,tone:t,initials:"ND"}))})},e));return s(c,{children:r})},N=Ee.bind({}),Te=o=>{const r=A.map(e=>s(a.Fragment,{children:s(i,{prop:"shadow",value:e,children:l.map(t=>a.createElement(n,{...o,key:t,shadow:e,tone:t,initials:"ND"}))})},e));return s(c,{children:r})},b=Te.bind({}),xe=o=>{const r=m.map(e=>s(a.Fragment,{children:s(i,{prop:"shadowColor",value:e,children:A.map(t=>a.createElement(n,{...o,key:t,shadowColor:e,color:e,shadow:t,initials:"ND"}))})},e));return s(c,{children:r})},G=xe.bind({}),je=o=>{const r=ge.map(e=>s(a.Fragment,{children:s(i,{prop:"status",value:e,children:m.map(t=>l.map(p=>a.createElement(n,{...o,key:`${e}-${t}-${p}`,status:e,color:t,tone:p,initials:"ND"})))})},e));return s(c,{children:r})},f=je.bind({}),_e=o=>s(c,{children:s(i,{prop:"",children:s(n.Group,{children:Fe.map((r,e)=>s(n,{...o,src:r,initials:"IN"},e))})})}),k=_e.bind({});var O,$,P;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Avatar {...args} src={src} initials="ND" />
    </EnhancedView>;
}`,...(P=($=w.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var I,M,q;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map(tone => <Avatar {...args} key={tone} color={color} tone={tone} initials="ND" />)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(q=(M=v.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var B,H,J;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const items = tones.map(tone => <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map(color => <Avatar {...args} key={color} color={color} tone={tone} initials="ND" />)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,L,Q;V.parameters={...V.parameters,docs:{...(K=V.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map(tone => <Avatar {...args} key={tone} size={size} tone={tone} initials="ND" />)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(Q=(L=V.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,W,X;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map(tone => <Avatar {...args} key={tone} radius={radius} tone={tone} initials="ND" />)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(X=(W=N.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const items = shadows.map(shadow => <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map(tone => <Avatar {...args} key={tone} shadow={shadow} tone={tone} initials="ND" />)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,te,oe;G.parameters={...G.parameters,docs:{...(se=G.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="shadowColor" value={color}>
        {shadows.map(shadow => <Avatar {...args} key={shadow} shadowColor={color} color={color} shadow={shadow} initials="ND" />)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(oe=(te=G.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ae,ne;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
  const items = statuses.map(status => <React.Fragment key={status}>
      <View prop="status" value={status}>
        {colors.map(color => {
        return tones.map(tone => <Avatar {...args} key={\`\${status}-\${color}-\${tone}\`} status={status} color={color} tone={tone} initials="ND" />);
      })}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,ce,le;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  return <ViewGroup>
      <View prop="">
        <Avatar.Group>
          {group.map((src, index) => <Avatar key={index} {...args} src={src} initials="IN" />)}
        </Avatar.Group>
      </View>
    </ViewGroup>;
}`,...(le=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const Be=["Default","Colors","Tones","Sizes","Radiuses","Shadows","ShadowColors","Statuses","Group"];export{v as Colors,w as Default,k as Group,N as Radiuses,G as ShadowColors,b as Shadows,V as Sizes,f as Statuses,y as Tones,Be as __namedExportsOrder,qe as default};
//# sourceMappingURL=Avatar.stories-2cff38b1.js.map
