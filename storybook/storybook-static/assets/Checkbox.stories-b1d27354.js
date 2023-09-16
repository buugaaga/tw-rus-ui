import{q as Z,_ as ee,t as se,a as R,j as s}from"./usePropId-d72ac371.js";import{r as w}from"./index-76fb7be0.js";import{t as p}from"./tw-merge-1166cefb.js";import{a as l,V as f}from"./View-9e99ac25.js";import"./_commonjsHelpers-de833af9.js";const re={color:"dark",disabled:!1,radius:"md",size:"md",tone:"solid",withRing:!0},o=w.forwardRef((r,a)=>{const e=Z("Checkbox"),t=Object.assign(Object.assign({},re),r),{children:de,className:N="",color:V,disabled:n,radius:x,size:i,tone:y,withRing:z,label:L,labelClassName:P="",description:v,descriptionClassName:Q="",error:k,errorClassName:U=""}=t,W=ee(t,["children","className","color","disabled","radius","size","tone","withRing","label","labelClassName","description","descriptionClassName","error","errorClassName"]),d=se(r.id),j=k?"invalid":"valid",X=w.useMemo(()=>p(e.base({className:N,color:V,radius:x,size:i,tone:y,validation:j,withRing:z})),[e,V,y,i,x,j,z,N]);return R("div",Object.assign({className:"flex items-center"},{children:[s("input",Object.assign({id:d,ref:a,type:"checkbox","aria-labelledby":`${d}-label`,className:X,disabled:n},W)),R("div",Object.assign({className:"grid grid-cols-1 justify-items-start"},{children:[s("label",Object.assign({id:`${d}-label`,htmlFor:d,className:p(e.label({disabled:n,size:i,className:P}))},{children:L})),v&&s("span",Object.assign({className:p(e.description({disabled:n,size:i,className:Q}))},{children:v})),k&&s("span",Object.assign({className:p(e.error({disabled:n,size:i,className:U}))},{children:k}))]}))]}))});o.displayName="Checkbox";o.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const C=["blue","red","green","yellow","purple","gray","dark","black"],H=["none","sm","base","md","lg","full"],J=["sm","md","lg","xl"],K=["solid","light"],c="I agree to the terms of service",ae="By checking this box, you agree to the Terms of Service",oe="You must agree to the Terms of Service",ge={title:"Components/Checkbox",component:o,argTypes:{tone:{options:K,control:{type:"select"}},radius:{options:H,control:{type:"select"}},color:{options:C,control:{type:"select"}},size:{options:J,control:{type:"select"}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},te=r=>s(l,{prop:"Default",children:s(o,{label:c,description:ae,error:oe,...r})}),m=te.bind({}),ie=r=>{const a=C.map(e=>s(l,{prop:"color",value:e,children:s(o,{label:c,color:e,defaultChecked:!0,...r})},e));return s(f,{children:a})},u=ie.bind({}),le=r=>{const a=K.map(e=>s(w.Fragment,{children:s(l,{prop:"tone",value:e,children:C.map(t=>s(o,{label:c,color:t,tone:e,defaultChecked:!1,...r},t))})},e));return s(f,{children:a})},b=le.bind({}),ce=r=>{const a=J.map(e=>s(l,{prop:"size",value:e,children:s(o,{label:c,size:e,defaultChecked:!0,...r})},e));return s(f,{children:a})},h=ce.bind({}),ne=r=>{const a=H.map(e=>s(l,{prop:"radius",value:e,children:s(o,{label:c,radius:e,defaultChecked:!0,...r})},e));return s(f,{children:a})},g=ne.bind({});var T,O,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return <View prop="Default">
      <Checkbox label={label} description={description} error={error} {...args} />
    </View>;
}`,...(S=(O=m.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var G,_,D;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const items = colors.map(color => <View prop="color" value={color} key={color}>
      <Checkbox label={label} color={color} defaultChecked={true} {...args} />
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(D=(_=u.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var F,$,E;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const items = tones.map(tone => <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map(color => <Checkbox key={color} label={label} color={color} tone={tone} defaultChecked={false} {...args} />)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(E=($=b.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var I,M,q;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <View prop="size" value={size} key={size}>
      <Checkbox label={label} size={size} defaultChecked={true} {...args} />
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(q=(M=h.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var B,Y,A;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <View prop="radius" value={radius} key={radius}>
      <Checkbox label={label} radius={radius} defaultChecked={true} {...args} />
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(A=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};const fe=["Default","Colors","Tones","Sizes","Radiuses"];export{u as Colors,m as Default,g as Radiuses,h as Sizes,b as Tones,fe as __namedExportsOrder,ge as default};
//# sourceMappingURL=Checkbox.stories-b1d27354.js.map
