import{q as ee,_ as ae,t as se,a as h,j as a}from"./usePropId-97cc893b.js";import{i as de}from"./use-independent-context.hook-9077e291.js";import{r as t}from"./index-76fb7be0.js";import{t as b}from"./tw-merge-1166cefb.js";import{a as g,V as O}from"./View-0bd09aa3.js";import"./_commonjsHelpers-de833af9.js";const[ue,pe]=de(),me={color:"dark",disabled:!1,radius:"full",size:"md",tone:"solid",withRing:!0},o=t.forwardRef((s,r)=>{const e=ee("Radio"),i=Object.assign(Object.assign(Object.assign({},me),pe()),s),{children:T,className:c="",color:d,defaultChecked:y,description:l,descriptionClassName:f="",disabled:n,error:u,errorClassName:p="",label:j,labelClassName:G="",name:x,setValue:_,initialValue:D,value:te,radius:F,size:m,tone:$,withRing:A}=i,le=ae(i,["children","className","color","defaultChecked","description","descriptionClassName","disabled","error","errorClassName","label","labelClassName","name","setValue","initialValue","value","radius","size","tone","withRing"]),v=se(s.id),B=u?"invalid":"valid",ne=t.useMemo(()=>b(e.base({className:c,color:d,radius:F,size:m,tone:$,validation:B,withRing:A})),[e,d,$,m,F,B,A,c]);return h("div",Object.assign({className:"flex items-center"},{children:[a("input",Object.assign({id:v,ref:r,type:"radio","aria-labelledby":`${v}-label`,className:ne,disabled:n,onChange:ce=>{_&&_(ce.target.value)},name:x,defaultChecked:D?D===te:y},le)),h("div",Object.assign({className:"grid grid-cols-1 justify-items-start"},{children:[a("label",Object.assign({id:`${v}-label`,htmlFor:v,className:b(e.label({disabled:n,size:m,className:G}))},{children:j})),l&&a("span",Object.assign({className:b(e.description({disabled:n,size:m,className:f}))},{children:l})),u&&a("span",Object.assign({className:b(e.error({disabled:n,size:m,className:p}))},{children:u}))]}))]}))});o.displayName="Radio";o.__docgenInfo={description:"",methods:[],displayName:"Radio"};const be={orientation:"horizontal"},z=t.forwardRef((s,r)=>{const e=ee("Radio"),i=Object.assign(Object.assign({},be),s),{children:T,className:c,initialValue:d,name:y,onChange:l,orientation:f}=i,n=ae(i,["children","className","initialValue","name","onChange","orientation"]),u=se(s.id),[p,j]=t.useState(d),G={initialValue:d,name:y,setValue:j,value:p},x=t.useMemo(()=>b(e.group({className:c,orientation:f})),[e,f,c]);return t.useEffect(()=>{l&&l(p)},[p,l]),a(ue,Object.assign({value:G},{children:a("div",Object.assign({id:u,ref:r,role:"radiogroup",className:x},n,{children:T}))}))});z.displayName="RadioGroup";z.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};const S=["blue","red","green","yellow","purple","gray","dark","black"],re=["none","sm","base","md","lg","full"],oe=["sm","md","lg","xl"],ie=["solid","light"],k="I agree to the terms of service",ke={title:"Components/Radio",component:o,argTypes:{tone:{options:ie,control:{type:"select"}},radius:{options:re,control:{type:"select"}},color:{options:S,control:{type:"select"}},size:{options:oe,control:{type:"select"}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},he=s=>h(g,{prop:"Default",children:[h(z,{orientation:"vertical",name:"vertical",initialValue:"1",children:[a(o,{...s,label:"Option A",value:"1"}),a(o,{...s,label:"Option B",value:"2"})]}),h(z,{orientation:"horizontal",name:"horizontal",children:[a(o,{...s,label:"Option A",value:"1"}),a(o,{...s,label:"Option B",value:"2",defaultChecked:!0})]})]}),V=he.bind({}),ge=s=>{const r=S.map(e=>a(g,{prop:"color",value:e,children:a(o,{name:"color",label:k,color:e,defaultChecked:!0,...s})},e));return a(O,{children:r})},R=ge.bind({}),fe=s=>{const r=ie.map(e=>a(t.Fragment,{children:a(g,{prop:"tone",value:e,children:S.map(i=>a(o,{name:"color",label:k,color:i,tone:e,defaultChecked:!1,...s},i))})},e));return a(O,{children:r})},w=fe.bind({}),ve=s=>{const r=oe.map(e=>a(g,{prop:"size",value:e,children:a(o,{label:k,size:e,defaultChecked:!0,...s})},e));return a(O,{children:r})},C=ve.bind({}),Ve=s=>{const r=re.map(e=>a(g,{prop:"radius",value:e,children:a(o,{label:k,radius:e,defaultChecked:!0,...s})},e));return a(O,{children:r})},N=Ve.bind({});var I,E,M;V.parameters={...V.parameters,docs:{...(I=V.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <View prop="Default">
      <RadioGroup orientation="vertical" name="vertical" initialValue="1">
        <Radio {...args} label="Option A" value="1" />
        <Radio {...args} label="Option B" value="2" />
      </RadioGroup>
      <RadioGroup orientation="horizontal" name="horizontal">
        <Radio {...args} label="Option A" value="1" />
        <Radio {...args} label="Option B" value="2" defaultChecked />
      </RadioGroup>
    </View>;
}`,...(M=(E=V.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var q,P,H;R.parameters={...R.parameters,docs:{...(q=R.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const items = colors.map(color => <View prop="color" value={color} key={color}>
      <Radio name={"color"} label={label} color={color} defaultChecked={true} {...args} />
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(H=(P=R.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var J,K,L;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const items = tones.map(tone => <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map(color => <Radio key={color} name={"color"} label={label} color={color} tone={tone} defaultChecked={false} {...args} />)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(L=(K=w.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,U,W;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <View prop="size" value={size} key={size}>
      <Radio label={label} size={size} defaultChecked={true} {...args} />
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(W=(U=C.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <View prop="radius" value={radius} key={radius}>
      <Radio label={label} radius={radius} defaultChecked={true} {...args} />
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(Z=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ye=["Default","Colors","Tones","Sizes","Radiuses"];export{R as Colors,V as Default,N as Radiuses,C as Sizes,w as Tones,ye as __namedExportsOrder,ke as default};
//# sourceMappingURL=Radio.stories-e164572d.js.map
