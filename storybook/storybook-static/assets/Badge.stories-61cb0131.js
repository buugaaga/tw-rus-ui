import{q as ne,_ as te,t as ce,j as r}from"./usePropId-97cc893b.js";import{r as s}from"./index-76fb7be0.js";import{d as ie}from"./variant.context-7223bf5a.js";import{t as de}from"./tw-merge-1166cefb.js";import{E as me,a as c,V as i}from"./View-0bd09aa3.js";import"./_commonjsHelpers-de833af9.js";const pe={color:"dark",radius:"md",shadow:"none",shadowColor:"none",size:"sm",tone:"solid"},t=s.forwardRef((o,n)=>{const e=ie("Badge",o.variant),a=ne("Badge"),k=Object.assign(Object.assign(Object.assign({},pe),e),o),{children:re,className:B="",color:F,radius:f,shadow:R,shadowColor:C,size:S,tone:b,variant:ke}=k,ae=te(k,["children","className","color","radius","shadow","shadowColor","size","tone","variant"]),oe=s.useMemo(()=>de(a({className:B,color:F,radius:f,shadow:R,shadowColor:C,size:S,tone:b})),[a,B,F,f,R,C,S,b]),se=ce(o.id);return r("span",Object.assign({id:se,ref:n,className:oe},ae,{children:re}))});t.displayName="Badge";t.__docgenInfo={description:"",methods:[],displayName:"Badge"};const Z=["primary","secondary","danger","success","warning","info"],m=["white","blue","red","green","yellow","purple","gray","dark","black"],d=["solid","light","glossy","outline"],$=["xs","sm","md","lg"],ee=["none","sm","md","lg","full"],v=["none","sm","base","md","lg","xl"],be={title:"Components/Badge",component:t,argTypes:{tone:{options:d,control:{type:"select"}},variant:{options:Z,control:{type:"select"}},color:{options:m,control:{type:"select"}},size:{options:$,control:{type:"select"}},radius:{options:ee,control:{type:"select"}},shadow:{options:v,control:{type:"select"}},shadowColor:{options:m,control:{type:"select"}}},parameters:{controls:{expanded:!0}}},le=o=>r(me,{prop:"Default",children:r(t,{...o,children:"Badge"})}),p=le.bind({}),ue=o=>{const n=Z.map(e=>r(s.Fragment,{children:r(c,{prop:"variant",value:e,children:s.createElement(t,{...o,key:e,variant:e},e)})},e));return r(i,{children:n})},l=ue.bind({}),ge=o=>{const n=m.map(e=>r(s.Fragment,{children:r(c,{prop:"color",value:e,children:d.map(a=>s.createElement(t,{...o,key:a,color:e,tone:a},e))})},e));return r(i,{children:n})},u=ge.bind({}),we=o=>{const n=d.map(e=>r(s.Fragment,{children:r(c,{prop:"tone",value:e,children:m.map(a=>s.createElement(t,{...o,key:a,color:a,tone:e},a))})},e));return r(i,{children:n})},g=we.bind({}),he=o=>{const n=$.map(e=>r(s.Fragment,{children:r(c,{prop:"size",value:e,children:d.map(a=>s.createElement(t,{...o,key:a,size:e,tone:a},"New"))})},e));return r(i,{children:n})},w=he.bind({}),Ve=o=>{const n=ee.map(e=>r(s.Fragment,{children:r(c,{prop:"radius",value:e,children:d.map(a=>s.createElement(t,{...o,key:a,radius:e,tone:a},e))})},e));return r(i,{children:n})},h=Ve.bind({}),ye=o=>{const n=v.map(e=>r(s.Fragment,{children:r(c,{prop:"shadow",value:e,children:d.map(a=>s.createElement(t,{...o,key:a,shadow:e,tone:a},e))})},e));return r(i,{children:n})},V=ye.bind({}),ve=o=>{const n=m.map(e=>r(s.Fragment,{children:r(c,{prop:"shadowColor",value:e,children:v.map(a=>s.createElement(t,{...o,key:a,shadowColor:e,color:e,shadow:a},e))})},e));return r(i,{children:n})},y=ve.bind({});var z,G,E;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Badge {...args}>Badge</Badge>
    </EnhancedView>;
}`,...(E=(G=p.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var T,N,x;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const items = variants.map(variant => <React.Fragment key={variant}>
      <View prop="variant" value={variant}>
        <Badge {...args} key={variant} variant={variant}>
          {variant}
        </Badge>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(x=(N=l.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var j,_,D;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map(tone => <Badge {...args} key={tone} color={color} tone={tone}>
            {color}
          </Badge>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(D=(_=u.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var O,M,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const items = tones.map(tone => <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map(color => <Badge {...args} key={color} color={color} tone={tone}>
            {color}
          </Badge>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(q=(M=g.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var I,A,H;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map(tone => <Badge {...args} key={tone} size={size} tone={tone}>
            New
          </Badge>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(H=(A=w.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var J,K,L;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map(tone => <Badge {...args} key={tone} radius={radius} tone={tone}>
            {radius}
          </Badge>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(L=(K=h.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var P,Q,U;V.parameters={...V.parameters,docs:{...(P=V.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const items = shadows.map(shadow => <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map(tone => <Badge {...args} key={tone} shadow={shadow} tone={tone}>
            {shadow}
          </Badge>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(U=(Q=V.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="shadowColor" value={color}>
        {shadows.map(shadow => <Badge {...args} key={shadow} shadowColor={color} color={color} shadow={shadow}>
            {color}
          </Badge>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ze=["Default","Variants","Colors","Tones","Sizes","Radiuses","Shadows","ShadowColors"];export{u as Colors,p as Default,h as Radiuses,y as ShadowColors,V as Shadows,w as Sizes,g as Tones,l as Variants,ze as __namedExportsOrder,be as default};
//# sourceMappingURL=Badge.stories-61cb0131.js.map
