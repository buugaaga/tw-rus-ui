import{j as t,q as we,_ as ye,t as ve,a as V}from"./usePropId-d72ac371.js";import{r as n}from"./index-76fb7be0.js";import{u as H}from"./Button-07d76f41.js";import{c as Ce,s as Te,t as fe,e as be,a as ke}from"./Warning-39ff7c6c.js";import{d as Ve}from"./variant.context-7223bf5a.js";import{t as Ee}from"./tw-merge-1166cefb.js";import{a as u,V as p}from"./View-9e99ac25.js";import"./_commonjsHelpers-de833af9.js";import"./use-independent-context.hook-c68aff34.js";import"./InputGroup.context-30bba26b.js";import"./Spinner-6f5ac021.js";import"./ChevronDown-d155685d.js";const ae=()=>({add:o=>{const s=new CustomEvent("toasts:add",{detail:o});document.dispatchEvent(s)},update:o=>{const s=new CustomEvent("toasts:update",{detail:o});document.dispatchEvent(s)},remove:o=>{const s=new CustomEvent("toasts:remove",{detail:{id:o}});document.dispatchEvent(s)},clear:()=>{const o=new CustomEvent("toasts:clear",{});document.dispatchEvent(o)}}),Fe={closeOnClick:!0,color:"blue",pauseOnHover:!0,radius:"md",shadow:"base",shadowColor:"gray",showProgress:!0,tone:"solid"},Oe={error:t(Ce,{}),info:t(Te,{}),question:t(fe,{}),success:t(be,{}),warning:t(ke,{})},a=n.forwardRef((o,s)=>{const e=Ve("Toast",o.variant),r=we("Toast"),h=Object.assign(Object.assign(Object.assign({},Fe),e),o),{actions:S=[],className:R="",closeOnClick:N,color:c,description:j="",duration:g=3e3,halted:G=!1,iconType:D,pauseOnHover:de,radius:A,shadow:$,shadowColor:x,showProgress:ue,title:E="",tone:l,variant:qe}=h,pe=ye(h,["actions","className","closeOnClick","color","description","duration","halted","iconType","pauseOnHover","radius","shadow","shadowColor","showProgress","title","tone","variant"]),[q,_]=n.useState(G),[F,me]=n.useState(G?1e3:0),B=ae(),w=ve(o.id),y=n.useRef(null),d=n.useRef(null),he=!!E,ge=n.useMemo(()=>Ee(r.toast({className:R,color:c,tone:l,radius:A,shadow:$,shadowColor:x})),[R,c,l,A,$,x,r]),M=i=>{d.current||(d.current=i),i-(d.current||0)>=50&&(me(O=>O+50),d.current=i),y.current=requestAnimationFrame(M)};return n.useEffect(()=>{if(q||(y.current=requestAnimationFrame(M)),de)return()=>{y.current&&cancelAnimationFrame(y.current),d.current&&cancelAnimationFrame(d.current)}},[q]),n.useEffect(()=>{g&&F>=g&&B.remove(w)},[F]),V("div",Object.assign({id:w,ref:s,role:"alert",onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),className:ge},pe,{children:[g>0&&ue&&t("div",Object.assign({className:r.progress({color:c,tone:l})},{children:t("div",{className:r.progressInner({color:c,tone:l}),style:{width:100*F/g+"%",transitionDuration:"50ms"}})})),V("div",Object.assign({className:r.contentWrapper({closeOnClick:N}),onClick:()=>{N&&B.remove(w)}},{children:[D&&Oe[D],V("div",Object.assign({className:r.content()},{children:[E&&t("h4",Object.assign({className:r.title()},{children:E})),j&&t("p",Object.assign({className:r.description({hasTitle:he})},{children:j}))]}))]})),S.length>0&&t("div",Object.assign({className:r.actionsWrapper({tone:l,color:c})},{children:S.map((i,O)=>t("button",Object.assign({className:r.action({primary:i.primary,tone:l,color:c}),onClick:i.onClick},{children:i.label}),`action-${w}-${O}`))}))]}))});a.displayName="Toast";a.__docgenInfo={description:"",methods:[],displayName:"Toast"};const Se=["top-left","top-right","bottom-left","bottom-right"],ie=["white","blue","red","green","yellow","purple","gray","dark","black"],ce=["solid","light"],Re=["none","sm","base","md","lg"],le=["none","sm","base","md","lg","xl"],Ne=["primary","secondary","danger","success","warning","info"],m=[{label:"Cancel",onClick:()=>{console.log("Clicked close")},primary:!1},{label:"Delete",onClick:()=>{console.log("Clicked save")},primary:!0}],Qe={title:"Components/Toast",component:a,argTypes:{position:{options:Se,control:{type:"select"}},max:{control:{type:"number"}},ref:{table:{disable:!0}}}},je=o=>{const[s,e]=n.useState(0),r=ae();return n.useEffect(()=>{s&&r.add({title:"Are you sure?",description:"Do you really want to delete the selected User?",iconType:"question",id:s.toString(),duration:3e3,color:"green",actions:m})},[s]),V(u,{prop:"Default",children:[t(H,{onClick:()=>e(h=>h+1),children:"Add"}),t(H,{onClick:()=>r.clear(),children:"Clear"})]})},v=je.bind({}),Ge=o=>{const s=Ne.map(e=>t(n.Fragment,{children:t(u,{prop:"variant",value:e,children:n.createElement(a,{...o,duration:3e3,halted:!0,title:e,description:"description",key:e,variant:e})})},e));return t(p,{children:s})},C=Ge.bind({}),De=o=>{const s=ie.map(e=>t(n.Fragment,{children:t(u,{prop:"color",value:e,children:ce.map(r=>n.createElement(a,{...o,duration:3e3,halted:!0,actions:m,iconType:"success",title:"Title",description:"description",key:r,color:e,tone:r}))})},e));return t(p,{children:s})},T=De.bind({}),Ae=o=>{const s=Re.map(e=>t(n.Fragment,{children:t(u,{prop:"radius",value:e,children:n.createElement(a,{...o,duration:3e3,halted:!0,actions:m,iconType:"success",title:"Title",description:"description",key:e,radius:e})})},e));return t(p,{children:s})},f=Ae.bind({}),$e=o=>{const s=le.map(e=>t(n.Fragment,{children:t(u,{prop:"shadow",value:e,children:ce.map(r=>n.createElement(a,{...o,duration:3e3,halted:!0,actions:m,iconType:"success",title:"Title",description:"description",key:`${e}-${r}`,tone:r,shadow:e}))})},e));return t(p,{children:s})},b=$e.bind({}),xe=o=>{const s=ie.map(e=>t(n.Fragment,{children:t(u,{prop:"shadowColor",value:e,children:le.map(r=>n.createElement(a,{...o,initialCount:3e3,duration:3e3,halted:!0,actions:m,iconType:"success",title:"Title",description:"description",key:r,color:e,shadowColor:e,shadow:r}))})},e));return t(p,{children:s})},k=xe.bind({});var P,I,W;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [counter, setCounter] = React.useState(0);
  const toast = useToast();
  useEffect(() => {
    if (!counter) {
      return;
    }
    toast.add({
      title: "Are you sure?",
      description: "Do you really want to delete the selected User?",
      iconType: "question",
      id: counter.toString(),
      duration: 3000,
      color: "green",
      actions
    });
  }, [counter]);
  return <View prop="Default">
      <Button onClick={() => setCounter(prev => prev + 1)}>Add</Button>
      <Button onClick={() => toast.clear()}>Clear</Button>
    </View>;
}`,...(W=(I=v.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var L,U,z;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const items = variants.map(variant => <React.Fragment key={variant}>
      <View prop="variant" value={variant}>
        <Toast {...args} duration={3000} halted={true} title={variant} description="description" key={variant} variant={variant} />
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(z=(U=C.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var J,K,Q;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map(tone => <Toast {...args} duration={3000} halted={true} actions={actions} iconType="success" title="Title" description="description" key={tone} color={color} tone={tone} />)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(Q=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        <Toast {...args} duration={3000} halted={true} actions={actions} iconType="success" title="Title" description="description" key={radius} radius={radius} />
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,oe;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const items = shadows.map(shadow => <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map(tone => <Toast {...args} duration={3000} halted={true} actions={actions} iconType="success" title="Title" description="description" key={\`\${shadow}-\${tone}\`} tone={tone} shadow={shadow} />)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(oe=(te=b.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,se,ne;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="shadowColor" value={color}>
        {shadows.map(shadow => <Toast {...args} initialCount={3000} duration={3000} halted={true} actions={actions} iconType="success" title="Title" description="description" key={shadow} color={color} shadowColor={color} shadow={shadow} />)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(ne=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const Xe=["Default","Variants","Colors","Radiuses","Shadows","ShadowColors"];export{T as Colors,v as Default,f as Radiuses,k as ShadowColors,b as Shadows,C as Variants,Xe as __namedExportsOrder,Qe as default};
//# sourceMappingURL=Toast.stories-d3e6b069.js.map
