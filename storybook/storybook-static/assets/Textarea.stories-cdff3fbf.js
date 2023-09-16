import{j as e}from"./usePropId-d72ac371.js";import{l as s}from"./Textarea-4bafefb4.js";import{r as n}from"./index-76fb7be0.js";import{E as M,a as i,V as c}from"./View-9e99ac25.js";import"./FormControl.context-30bba26b.js";import"./use-independent-context.hook-c68aff34.js";import"./InputGroup.context-30bba26b.js";import"./tw-merge-1166cefb.js";import"./_commonjsHelpers-de833af9.js";const p=["light","solid","transparent"],K=["blue","purple","gray","dark","black"],L=["xs","sm","md","lg"],N=["none","sm","base","md","lg","xl"],P=["none","invalid","valid","warning"],Q=["none","sm","base","md"],me={title:"Components/Textarea",component:s,argTypes:{tone:{options:p,control:{type:"radio"}},color:{options:K,control:{type:"radio"}},size:{options:L,control:{type:"radio"}},as:{table:{disable:!0}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},U=a=>e(M,{prop:"Default",children:e(s,{placeholder:"This is a placeholder",...a})}),l=U.bind({}),W=a=>{const o=p.map(r=>e(n.Fragment,{children:e(i,{prop:"tone",value:r,children:e(s,{...a,tone:r,placeholder:r})})},r));return e(c,{children:o})},m=W.bind({}),X=a=>{const o=K.map(r=>e(n.Fragment,{children:e(i,{prop:"color",value:r,children:e(s,{...a,color:r,placeholder:r})})},r));return e(c,{children:o})},d=X.bind({}),Y=a=>{const o=L.map(r=>e(n.Fragment,{children:e(i,{prop:"size",value:r,children:p.map(t=>e(n.Fragment,{children:e(s,{...a,size:r,tone:t,placeholder:t})},t))})},r));return e(c,{children:o})},u=Y.bind({}),Z=a=>{const o=N.map(r=>e(n.Fragment,{children:e(i,{prop:"radius",value:r,children:p.map(t=>e(n.Fragment,{children:e(s,{...a,radius:r,tone:t,placeholder:t})},t))})},r));return e(c,{children:o})},g=Z.bind({}),$=a=>{const o=Q.map(r=>e(n.Fragment,{children:e(i,{prop:"shadow",value:r,children:p.map(t=>e(n.Fragment,{children:e(s,{...a,shadow:r,tone:t,placeholder:t})},t))})},r));return e(c,{children:o})},h=$.bind({}),ee=a=>{const o=P.map(r=>e(n.Fragment,{children:e(i,{prop:"validation",value:r,children:p.map(t=>e(n.Fragment,{children:e(s,{...a,validation:r,tone:t,placeholder:t})},t))})},r));return e(c,{children:o})},w=ee.bind({}),re=a=>{const o=e(i,{prop:"disabled",value:"true",children:p.map(r=>e(s,{...a,tone:r,placeholder:r,disabled:!0},r))});return e(c,{children:o})},V=re.bind({});var F,v,R;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Textarea placeholder="This is a placeholder" {...args} />
    </EnhancedView>;
}`,...(R=(v=l.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var T,b,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const items = tones.map(tone => <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        <Textarea {...args} tone={tone} placeholder={tone} />
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(S=(b=m.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,y,G;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color}>
        <Textarea {...args} color={color} placeholder={color} />
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(G=(y=d.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var k,f,z;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map(tone => <React.Fragment key={tone}>
            <Textarea {...args} size={size} tone={tone} placeholder={tone} />
          </React.Fragment>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(z=(f=u.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var E,D,C;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map(tone => <React.Fragment key={tone}>
            <Textarea {...args} radius={radius} tone={tone} placeholder={tone} />
          </React.Fragment>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(C=(D=g.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var j,_,O;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const items = shadows.map(shadow => <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map(tone => <React.Fragment key={tone}>
            <Textarea {...args} shadow={shadow} tone={tone} placeholder={tone} />
          </React.Fragment>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(O=(_=h.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,A,B;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const items = validations.map(validation => <React.Fragment key={validation}>
      <View prop="validation" value={validation}>
        {tones.map(tone => <React.Fragment key={tone}>
            <Textarea {...args} validation={validation} tone={tone} placeholder={tone} />
          </React.Fragment>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(B=(A=w.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var H,I,J;V.parameters={...V.parameters,docs:{...(H=V.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const items = <View prop="disabled" value="true">
      {tones.map(tone => <Textarea key={tone} {...args} tone={tone} placeholder={tone} disabled />)}
    </View>;
  return <ViewGroup>{items}</ViewGroup>;
}`,...(J=(I=V.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const de=["Default","Tones","Colors","Sizes","Radiuses","Shadows","Validations","States"];export{d as Colors,l as Default,g as Radiuses,h as Shadows,u as Sizes,V as States,m as Tones,w as Validations,de as __namedExportsOrder,me as default};
//# sourceMappingURL=Textarea.stories-cdff3fbf.js.map
