import{q as oe,_ as ce,t as ne,a as T,j as s}from"./usePropId-d72ac371.js";import{r as o}from"./index-76fb7be0.js";import{t as d}from"./tw-merge-1166cefb.js";import{E as le,a as S,V as k}from"./View-9e99ac25.js";import"./_commonjsHelpers-de833af9.js";const de={color:"dark",radius:"full",size:"md",withRing:!0},c=o.forwardRef((a,i)=>{const e=oe("Switch"),z=Object.assign(Object.assign({},de),a),{className:V="",checked:L=!1,color:j,disabled:l,onChange:v,radius:b,size:n,withRing:C,label:P,labelClassName:Q="",description:x,descriptionClassName:U="",error:E,errorClassName:Z=""}=z,ee=ce(z,["className","checked","color","disabled","onChange","radius","size","withRing","label","labelClassName","description","descriptionClassName","error","errorClassName"]),g=ne(a.id),[t,se]=o.useState(L),R=o.useRef(null),w=o.useRef(!0),y=t?"active":"inactive",re=o.useMemo(()=>d(e.base({className:V,color:j,radius:b,size:n,state:y,withRing:C})),[e,j,n,b,y,C,V]);return o.useEffect(()=>{const r=R.current;if(!r)return;if(w.current)return r.style.justifySelf=t?"end":"start",r.style.transform="",void(w.current=!1);const O=r.getAnimations();O.length>0&&O.forEach(ie=>{ie.cancel()});const N=r.parentElement;if(!N)return;const G=N.scrollWidth-r.offsetWidth-(N.scrollHeight-r.offsetHeight),ae=t?"translateX(0)":`translateX(${G}px)`,te=t?`translateX(${G}px)`:"translateX(0)";r.style.justifySelf="",r.animate({transform:[ae,te]},{duration:50}).onfinish=()=>{r.style.transform="",r.style.justifySelf=t?"end":"start"}},[t]),o.useEffect(()=>{v&&!w.current&&v(t)},[t]),T("div",Object.assign({onClick:()=>{l||se(!t)},className:"flex items-center"},{children:[s("button",Object.assign({ref:i,className:re,role:"switch","aria-checked":t,"aria-labelledby":`${g}-label`,disabled:l},ee,{children:s("span",{ref:R,className:e.inner({radius:b,size:n,state:y})})})),T("div",Object.assign({className:"grid grid-cols-1 justify-items-start"},{children:[s("label",Object.assign({id:`${g}-label`,htmlFor:g,className:d(e.label({disabled:l,size:n,className:Q}))},{children:P})),x&&s("span",Object.assign({className:d(e.description({disabled:l,size:n,className:U}))},{children:x})),E&&s("span",Object.assign({className:d(e.error({disabled:l,size:n,className:Z}))},{children:E}))]}))]}))});c.displayName="Switch";c.__docgenInfo={description:"",methods:[],displayName:"Switch"};const Y=["blue","red","green","yellow","purple","gray","dark","black"],J=["sm","md","lg","xl"],K=["none","sm","base","md","lg","full"],f="I agree to the terms of service",me="By checking this box, you agree to the Terms of Service",ue="You must agree to the Terms of Service",ke={title:"Components/Switch",component:c,argTypes:{color:{options:Y,control:{type:"select"}},size:{options:J,control:{type:"select"}},radius:{options:K,control:{type:"select"}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},pe=a=>s(le,{prop:"Default",children:s(c,{checked:!0,...a,label:f,description:me,error:ue})}),m=pe.bind({}),he=a=>{const i=Y.map(e=>s(S,{prop:"color",value:e,children:s(c,{checked:!0,label:f,color:e,...a})},e));return s(k,{children:i})},u=he.bind({}),fe=a=>{const i=J.map(e=>s(S,{prop:"size",value:e,children:s(c,{checked:!0,label:f,size:e,...a})},e));return s(k,{children:i})},p=fe.bind({}),be=a=>{const i=K.map(e=>s(S,{prop:"radius",value:e,children:s(c,{checked:!0,label:f,radius:e,...a})},e));return s(k,{children:i})},h=be.bind({});var _,D,X;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Switch checked {...args} label={label} description={description} error={error} />
    </EnhancedView>;
}`,...(X=(D=m.parameters)==null?void 0:D.docs)==null?void 0:X.source}}};var $,H,W;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const items = colors.map(color => <View prop="color" value={color} key={color}>
      <Switch checked label={label} color={color} {...args} />
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(W=(H=u.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var A,F,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <View prop="size" value={size} key={size}>
      <Switch checked label={label} size={size} {...args} />
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(I=(F=p.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var M,q,B;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <View prop="radius" value={radius} key={radius}>
      <Switch checked label={label} radius={radius} {...args} />
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(B=(q=h.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const ze=["Default","Colors","Sizes","Radiuses"];export{u as Colors,m as Default,h as Radiuses,p as Sizes,ze as __namedExportsOrder,ke as default};
//# sourceMappingURL=Switch.stories-fe101172.js.map
