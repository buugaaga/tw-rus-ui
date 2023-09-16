import{j as a,a as ce}from"./usePropId-d72ac371.js";import{r}from"./index-76fb7be0.js";import{h as re}from"./MagnifyingGlass.es-a88f7a31.js";import{E as ie,a as s,V as l}from"./View-9e99ac25.js";import{u as c}from"./Button-07d76f41.js";import"./_commonjsHelpers-de833af9.js";import"./IconBase.es-33536b25.js";import"./use-independent-context.hook-c68aff34.js";import"./InputGroup.context-30bba26b.js";import"./Spinner-6f5ac021.js";import"./tw-merge-1166cefb.js";import"./ChevronDown-d155685d.js";import"./variant.context-7223bf5a.js";const oe=["primary","secondary","tertiary","link","danger","success","warning","info"],p=["white","blue","red","green","yellow","purple","gray","dark","black"],i=["solid","light","outline","transparent"],ne=["xs","sm","md","lg"],se=["none","sm","md","lg","full"],F=["none","sm","base","md","lg","xl"],Ie={title:"Components/Button",component:c,argTypes:{tone:{options:i,control:{type:"select"}},variant:{options:oe,control:{type:"select"}},color:{options:p,control:{type:"select"}},size:{options:ne,control:{type:"select"}},radius:{options:se,control:{type:"select"}},shadow:{options:F,control:{type:"select"}},shadowColor:{options:p,control:{type:"select"}}},parameters:{docs:{page:null},controls:{expanded:!0}}},le=o=>a(ie,{prop:"Default",children:a(c,{children:"Button"})}),u=le.bind({}),pe=o=>{const n=oe.reverse().map(e=>a(r.Fragment,{children:a(s,{prop:"variant",value:e,children:r.createElement(c,{...o,key:e,variant:e,className:"capitalize",withRing:!0},e)})},e));return a(l,{children:n})},d=pe.bind({}),me=o=>{const n=p.map(e=>a(r.Fragment,{children:a(s,{prop:"color",value:e,children:i.map(t=>r.createElement(c,{...o,key:t,color:e,tone:t,className:"capitalize"},t))})},e));return a(l,{children:n})},g=me.bind({}),ue=o=>{const n=i.map(e=>a(r.Fragment,{children:a(s,{prop:"tone",value:e,children:p.map(t=>r.createElement(c,{...o,key:t,color:t,tone:e,className:"capitalize"},t))})},e));return a(l,{children:n})},w=ue.bind({}),de=o=>{const n=ne.map(e=>a(r.Fragment,{children:a(s,{prop:"size",value:e,children:i.map(t=>r.createElement(c,{...o,key:t,size:e,tone:t,className:"capitalize"},"Button"))})},e));return a(l,{children:n})},h=de.bind({}),ge=o=>{const n=se.map(e=>a(r.Fragment,{children:a(s,{prop:"radius",value:e,children:i.map(t=>r.createElement(c,{...o,key:t,radius:e,tone:t,className:"capitalize"},"Button"))})},e));return a(l,{children:n})},V=ge.bind({}),we=o=>{const n=F.map(e=>a(r.Fragment,{children:a(s,{prop:"shadow",value:e,children:i.map(t=>r.createElement(c,{...o,key:t,shadow:e,tone:t,className:"capitalize"},"Button"))})},e));return a(l,{children:n})},y=we.bind({}),he=o=>{const n=p.map(e=>a(r.Fragment,{children:a(s,{prop:"shadowColor",value:e,children:F.map(t=>r.createElement(c,{...o,key:t,shadowColor:e,color:e,shadow:t,className:"capitalize"},"Button"))})},e));return a(l,{children:n})},k=he.bind({}),Ve=o=>{const n=i.map(t=>a(r.Fragment,{children:a(s,{prop:"tone",value:t,children:p.map(m=>r.createElement(c,{...o,key:m,color:m,tone:t,className:"capitalize",disabled:!0},m))})},t)),e=i.map(t=>a(r.Fragment,{children:a(s,{prop:"tone",value:t,children:p.map(m=>r.createElement(c,{...o,key:m,color:m,tone:t,className:"capitalize",loading:!0},m))})},t));return ce(l,{children:[a(s,{prop:"disabled",value:"true",children:n}),a(s,{prop:"loading",value:"true",children:e})]})},v=Ve.bind({}),ye=o=>{const n=p.map(e=>a(r.Fragment,{children:a(s,{prop:"color",value:e,children:i.map(t=>r.createElement(c,{...o,key:t,color:e,tone:t,className:"capitalize",icon:!0},a(re,{className:"w-3.5 h-3.5"})))})},e));return a(l,{children:n})},B=ye.bind({}),ke=o=>{const n=p.map(e=>a(r.Fragment,{children:a(s,{prop:"color",value:e,children:i.map(t=>r.createElement(c,{...o,key:t,color:e,tone:t,className:"capitalize"},a(re,{className:"mr-2 w-4 h-4"}),"Search"))})},e));return a(l,{children:n})},z=ke.bind({});var R,N,S;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Button>Button</Button>
    </EnhancedView>;
}`,...(S=(N=u.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var b,G,E;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const items = variants.reverse().map(variant => <React.Fragment key={variant}>
      <View prop="variant" value={variant}>
        <Button {...args} key={variant} variant={variant} className="capitalize" withRing>
          {variant}
        </Button>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(E=(G=d.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var f,T,C;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map(tone => <Button {...args} key={tone} color={color} tone={tone} className="capitalize">
            {tone}
          </Button>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(C=(T=g.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,x,D;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const items = tones.map(tone => <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map(color => <Button {...args} key={color} color={color} tone={tone} className="capitalize">
            {color}
          </Button>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(D=(x=w.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var j,L,W;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map(tone => <Button {...args} key={tone} size={size} tone={tone} className="capitalize">
            Button
          </Button>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var M,_,O;V.parameters={...V.parameters,docs:{...(M=V.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map(tone => <Button {...args} key={tone} radius={radius} tone={tone} className="capitalize">
            Button
          </Button>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(O=(_=V.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,A,H;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const items = shadows.map(shadow => <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map(tone => <Button {...args} key={tone} shadow={shadow} tone={tone} className="capitalize">
            Button
          </Button>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(H=(A=y.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var J,K,P;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="shadowColor" value={color}>
        {shadows.map(shadow => <Button {...args} key={shadow} shadowColor={color} color={color} shadow={shadow} className="capitalize">
            Button
          </Button>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(P=(K=k.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const disabledItems = tones.map(tone => <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map(color => <Button {...args} key={color} color={color} tone={tone} className="capitalize" disabled>
            {color}
          </Button>)}
      </View>
    </React.Fragment>);
  const loadingItems = tones.map(tone => <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map(color => <Button {...args} key={color} color={color} tone={tone} className="capitalize" loading>
            {color}
          </Button>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>
      <View prop="disabled" value={'true'}>
        {disabledItems}
      </View>
      <View prop="loading" value={'true'}>
        {loadingItems}
      </View>
    </ViewGroup>;
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map(tone => <Button {...args} key={tone} color={color} tone={tone} className="capitalize" icon>
            <MagnifyingGlass className={'w-3.5 h-3.5'} />
          </Button>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...($=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map(tone => <Button {...args} key={tone} color={color} tone={tone} className="capitalize">
            <MagnifyingGlass className="mr-2 w-4 h-4" />
            Search
          </Button>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(te=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const xe=["Default","Variants","Colors","Tones","Sizes","Radiuses","Shadows","ShadowColors","States","Icons","LabelWithIcons"];export{g as Colors,u as Default,B as Icons,z as LabelWithIcons,V as Radiuses,k as ShadowColors,y as Shadows,h as Sizes,v as States,w as Tones,d as Variants,xe as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Button.stories-3786faae.js.map
