import{j as e,q as ze,_ as Oe,t as je,a as u}from"./usePropId-d72ac371.js";import{r as o,R as s}from"./index-76fb7be0.js";import{e as Ge}from"./use-fade.hook-88f32ede.js";import{c as $e,s as Me,t as Ie,e as We,a as Be}from"./Warning-39ff7c6c.js";import{d as De}from"./variant.context-7223bf5a.js";import{c as Pe}from"./XMark-c93d068d.js";import{k as _e}from"./floating-ui.react.esm-6cc99f0f.js";import{t as Xe}from"./tw-merge-1166cefb.js";import{u as B}from"./Button-07d76f41.js";import{c as D}from"./Text-1d222789.js";import{E as N,a as m,V as c}from"./View-9e99ac25.js";import{P as Je}from"./IconBase.es-33536b25.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./use-independent-context.hook-c68aff34.js";import"./InputGroup.context-30bba26b.js";import"./Spinner-6f5ac021.js";import"./ChevronDown-d155685d.js";const qe={accent:"none",color:"dark",dismissable:!1,dismissableAnimation:!0,radius:"md",shadow:"none",shadowColor:"none",size:"sm",tone:"light"},He={error:e($e,{}),info:e(Me,{}),question:e(Ie,{}),success:e(We,{}),warning:e(Be,{})},i=o.forwardRef((r,n)=>{const t=De("Alert",r.variant),a=ze("Alert"),R=Object.assign(Object.assign(Object.assign({},qe),t),r),{accent:Z,children:z,className:O="",color:F,dismissable:Fe,dismissableAnimation:Te=!1,icon:j,iconType:T,radius:G,shadow:$,shadowColor:M,size:p,title:I,tone:k,variant:ut}=R,ke=Oe(R,["accent","children","className","color","dismissable","dismissableAnimation","icon","iconType","radius","shadow","shadowColor","size","title","tone","variant"]),[Ne,Se]=o.useState(!0),W=o.useRef(null),Ce=_e([n||null,W]);Ge({ref:W,visible:Ne,enabled:Te});const Re=o.useMemo(()=>Xe(a.base({accent:Z,className:O,color:F,radius:G,shadow:$,shadowColor:M,size:p,tone:k})),[a,Z,O,F,G,$,M,p,k]),Ze=je(r.id);return u("div",Object.assign({id:Ze,role:"alert",ref:Ce,className:Re},ke,{children:[(j||T)&&e("span",Object.assign({className:a.iconWrapper()},{children:T?He[T]:j})),u("div",Object.assign({className:a.infoWrapper({size:p})},{children:[I&&e("span",Object.assign({className:a.title({size:p,color:F,tone:k})},{children:I})),z&&e("span",Object.assign({className:a.text()},{children:z}))]})),Fe&&e("button",Object.assign({type:"button","aria-label":"Close alert",role:"button",title:"Close alert",className:a.iconWrapper(),onClick:()=>Se(!1)},{children:e(Pe,{className:a.dismissIcon({size:p})})}))]}))});i.displayName="Alert";i.__docgenInfo={description:"",methods:[],displayName:"Alert"};var Ye=Object.defineProperty,Qe=Object.defineProperties,Ke=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,_=(r,n,t)=>n in r?Ye(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t,et=(r,n)=>{for(var t in n||(n={}))Le.call(n,t)&&_(r,t,n[t]);if(P)for(var t of P(n))Ue.call(n,t)&&_(r,t,n[t]);return r},tt=(r,n)=>Qe(r,Ke(n));const rt=new Map([["bold",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z"}))],["duotone",s.createElement(s.Fragment,null,s.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"}))],["fill",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"}))],["light",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z"}))],["regular",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"}))],["thin",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm-4-84V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z"}))]]),S=o.forwardRef((r,n)=>s.createElement(Je,tt(et({ref:n},r),{weights:rt})));S.displayName="WarningCircle";const Ae=["primary","secondary","tertiary","danger","success","warning","info"],h=["white","blue","red","green","yellow","purple","gray","dark","black"],d=["solid","light","outline"],Ve=["xs","sm","md","lg"],xe=["none","sm","md","lg","full"],C=["none","sm","base","md","lg","xl"],Ee=["none","top","right","bottom","left"],l="Our website uses cookies to improve your experience. By continuing to use our website, you agree to our use of cookies.",Zt={title:"Components/Alert",component:i,argTypes:{tone:{options:d,control:{type:"select"}},variant:{options:Ae,control:{type:"select"}},color:{options:h,control:{type:"select"}},accent:{options:Ee,control:{type:"select"}},size:{options:Ve,control:{type:"select"}},radius:{options:xe,control:{type:"select"}},shadow:{options:C,control:{type:"select"}},shadowColor:{options:h,control:{type:"select"}},dismissable:{options:[!0,!1],control:{type:"radio"}},dismissableAnimation:{options:[!0,!1],control:{type:"radio"}}},parameters:{controls:{expanded:!0}}},at=r=>e(N,{prop:"Default",children:e(i,{...r,children:l})}),g=at.bind({}),nt=r=>{const n=Ae.map(t=>e(o.Fragment,{children:e(m,{prop:"variant",value:t,children:o.createElement(i,{...r,key:t,variant:t},l)})},t));return e(c,{children:n})},w=nt.bind({}),ot=r=>{const n=h.map(t=>e(o.Fragment,{children:e(m,{prop:"color",value:t,children:d.map(a=>o.createElement(i,{...r,key:a,color:t,tone:a,title:`Tone: ${a}`},l))})},t));return e(c,{children:n})},b=ot.bind({}),st=r=>{const n=d.map(t=>e(o.Fragment,{children:e(m,{prop:"tone",value:t,children:h.map(a=>o.createElement(i,{...r,key:a,color:a,tone:t,title:`Color: ${a}`},l))})},t));return e(c,{children:n})},y=st.bind({}),it=r=>{const n=Ee.map(t=>e(o.Fragment,{children:e(m,{prop:"accent",value:t,children:d.map(a=>o.createElement(i,{...r,key:a,accent:t,tone:a,title:`Tone: ${a}`},l))})},t));return e(c,{children:n})},v=it.bind({}),ct=r=>{const n=Ve.map(t=>e(o.Fragment,{children:e(m,{prop:"size",value:t,children:d.map(a=>o.createElement(i,{...r,key:a,size:t,tone:a,title:`Tone: ${a}`},l))})},t));return e(c,{children:n})},f=ct.bind({}),lt=r=>{const n=xe.map(t=>e(o.Fragment,{children:e(m,{prop:"radius",value:t,children:d.map(a=>o.createElement(i,{...r,key:a,radius:t,tone:a},l))})},t));return e(c,{children:n})},A=lt.bind({}),mt=r=>{const n=C.map(t=>e(o.Fragment,{children:e(m,{prop:"shadow",value:t,children:d.map(a=>o.createElement(i,{...r,key:a,shadow:t,tone:a},l))})},t));return e(c,{children:n})},V=mt.bind({}),dt=r=>{const n=h.map(t=>e(o.Fragment,{children:e(m,{prop:"shadowColor",value:t,children:C.map(a=>o.createElement(i,{...r,key:a,shadowColor:t,color:t,shadow:a,title:`Shadow: ${a}`},l))})},t));return e(c,{children:n})},x=dt.bind({}),pt=r=>u(c,{children:[e(N,{prop:"Informative Alert",children:e(i,{...r,title:"Informative Alert",icon:e(S,{weight:"duotone",className:"w-10 h-10"}),tone:"light",color:"purple",className:"border border-2 border-dashed border-purple-700",children:"This is a simple informative alert. It has a title, an icon, and some content."})}),e(N,{prop:"Alert with custom JSX content",children:e(i,{...r,tone:"light",color:"red",size:"lg",shadow:"base",className:"border",children:u("div",{className:"grid gap-y-3 justify-items-center text-red-600 w-full",children:[e(S,{weight:"duotone",className:"w-16 h-16"}),e(D,{variant:"h3",className:"text-red-600",children:"Watch out!"}),e("div",{className:"border-b border-b-2 border-dashed border-red-200 w-full"}),e(D,{size:"base",className:"text-center text-red-600",children:"Here is some custom JSX content. You can use any component you want here, including Buttons, Text, etc. Furthermore you can use any Tailwind CSS classes you want."}),u("div",{className:"flex gap-x-2",children:[e(B,{tone:"outline",color:"red",children:"Cancel"}),e(B,{variant:"danger",children:"Confirm"})]})]})})})]}),E=pt.bind({});var X,J,q;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Alert {...args}>{text}</Alert>
    </EnhancedView>;
}`,...(q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var H,Y,Q;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const items = variants.map(variant => <React.Fragment key={variant}>
      <View prop="variant" value={variant}>
        <Alert {...args} key={variant} variant={variant}>
          {text}
        </Alert>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(Q=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var K,L,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map(tone => <Alert {...args} key={tone} color={color} tone={tone} title={\`Tone: \${tone}\`}>
            {text}
          </Alert>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(U=(L=b.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var ee,te,re;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const items = tones.map(tone => <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map(color => <Alert {...args} key={color} color={color} tone={tone} title={\`Color: \${color}\`}>
            {text}
          </Alert>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(re=(te=y.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,ne,oe;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
  const items = accents.map(accent => <React.Fragment key={accent}>
      <View prop="accent" value={accent}>
        {tones.map(tone => <Alert {...args} key={tone} accent={accent} tone={tone} title={\`Tone: \${tone}\`}>
            {text}
          </Alert>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(oe=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ie,ce;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map(tone => <Alert {...args} key={tone} size={size} tone={tone} title={\`Tone: \${tone}\`}>
            {text}
          </Alert>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(ce=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,me,de;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map(tone => <Alert {...args} key={tone} radius={radius} tone={tone}>
            {text}
          </Alert>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(de=(me=A.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ue,he;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  const items = shadows.map(shadow => <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map(tone => <Alert {...args} key={tone} shadow={shadow} tone={tone}>
            {text}
          </Alert>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(he=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,we,be;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="shadowColor" value={color}>
        {shadows.map(shadow => <Alert {...args} key={shadow} shadowColor={color} color={color} shadow={shadow} title={\`Shadow: \${shadow}\`}>
            {text}
          </Alert>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(be=(we=x.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};var ye,ve,fe;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`args => {
  return <ViewGroup>
      <EnhancedView prop="Informative Alert">
        <Alert {...args} title="Informative Alert" icon={<WarningCircle weight="duotone" className="w-10 h-10" />} tone="light" color="purple" className="border border-2 border-dashed border-purple-700">
          This is a simple informative alert. It has a title, an icon, and some
          content.
        </Alert>
      </EnhancedView>

      <EnhancedView prop="Alert with custom JSX content">
        <Alert {...args} tone="light" color="red" size="lg" shadow="base" className="border">
          <div className="grid gap-y-3 justify-items-center text-red-600 w-full">
            <WarningCircle weight="duotone" className="w-16 h-16" />
            <Text variant="h3" className="text-red-600">
              Watch out!
            </Text>
            <div className="border-b border-b-2 border-dashed border-red-200 w-full" />
            <Text size="base" className="text-center text-red-600">
              Here is some custom JSX content. You can use any component you
              want here, including Buttons, Text, etc. Furthermore you can use
              any Tailwind CSS classes you want.
            </Text>

            <div className="flex gap-x-2">
              <Button tone="outline" color="red">
                Cancel
              </Button>

              <Button variant="danger">Confirm</Button>
            </div>
          </div>
        </Alert>
      </EnhancedView>
    </ViewGroup>;
}`,...(fe=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};const zt=["Default","Variants","Colors","Tones","Accents","Sizes","Radiuses","Shadows","ShadowColors","Examples"];export{v as Accents,b as Colors,g as Default,E as Examples,A as Radiuses,x as ShadowColors,V as Shadows,f as Sizes,y as Tones,w as Variants,zt as __namedExportsOrder,Zt as default};
//# sourceMappingURL=Alert.stories-12d3d0f8.js.map
