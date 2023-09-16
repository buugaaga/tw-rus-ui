import{q as xe,_ as ue,t as ge,j as e,a as m,F as ze}from"./usePropId-d72ac371.js";import{u as v}from"./Button-07d76f41.js";import{b as x}from"./Card-2f2f8192.js";import{t as je}from"./InputGroup.context-30bba26b.js";import{t as Ne}from"./use-element-context.hook-2cb88967.js";import{l as Re,k as Se,u as Fe,a as Ee,m as Ge,b as Ie,s as _e,c as De,d as ke,e as He,o as $e,f as Me,i as Ae,g as qe,h as Je,j as Ke}from"./floating-ui.react.esm-6cc99f0f.js";import{o as Le}from"./arrow-side.dictionary-a51e0679.js";import{r as a}from"./index-76fb7be0.js";import{t as Ue}from"./tw-merge-1166cefb.js";import{E as he,a as T,V as b}from"./View-9e99ac25.js";import"./use-independent-context.hook-c68aff34.js";import"./Spinner-6f5ac021.js";import"./ChevronDown-d155685d.js";import"./variant.context-7223bf5a.js";import"./Image-21d52e17.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";const[Qe,ve]=Ne("Popover compound components cannot be rendered outside the Popover component"),M=a.forwardRef((o,n)=>{var r,i;const s=xe("Popover"),l=Object.assign({},o),{children:u,className:p=""}=l,P=ue(l,["children","className"]),w=ge(o.id),{arrowRef:c,color:g,context:h,floating:G,getFloatingProps:I,open:d,radius:C,shadow:O,size:B,strategy:_,withinPortal:D,x:y,y:V}=ve(),[k,H]=a.useState(!d),[$,be]=a.useState(null);a.useEffect(()=>{$&&clearTimeout($),be(setTimeout(()=>H(!d),d?0:75))},[d]);const Ce=((r=h.middlewareData.arrow)===null||r===void 0?void 0:r.x)||0,Oe=((i=h.middlewareData.arrow)===null||i===void 0?void 0:i.y)||0,f=Le({side:h.placement}),Be=a.useMemo(()=>Ue(s.base({arrowSide:f,className:p,color:g,open:d,radius:C,shadow:O,size:B})),[f,p,g,d,C,O,B,s]),Ve=e("span",{ref:c,className:s.arrow({arrowSide:f,color:g}),style:Object.assign(Object.assign(Object.assign({},f!=="right"&&{left:`${Ce}px`}),f!=="top"&&{bottom:`${Oe}px`}),{[f]:"-5px"})}),J=!k&&m("div",Object.assign({id:w,ref:G,className:Be,style:{position:_,top:V??0,left:y??0,visibility:y==null?"hidden":"visible"}},I,P,{children:[Ve,u]}));return e("div",Object.assign({ref:n,className:p,"aria-hidden":!d},{children:D?e(Re,{children:J}):J}))});M.displayName="PopoverContent";M.__docgenInfo={description:"",methods:[],displayName:"PopoverContent"};const A=a.forwardRef((o,n)=>{const{children:r}=o,{reference:i,getReferenceProps:s}=ve(),l=a.Children.only(r),u=Se([i,n||null]),p=a.cloneElement(l,Object.assign(Object.assign({ref:u},l.props),s));return e(ze,{children:p})});A.displayName="PopoverTrigger";A.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};function We({placement:o="bottom",initiallyOpen:n=!1,offset:r=8}){const i=a.useRef(null),[s,l]=a.useState(n),{x:u,y:p,refs:P,strategy:w,context:c}=Fe({open:s,onOpenChange:l,placement:o,middleware:[$e(r),Me(),Ae(),qe(),Je({element:i})],whileElementsMounted:Ke}),{getFloatingProps:g,getReferenceProps:h}=Ee([Ge(c,{enabled:s==null}),Ie(c,{move:!0,handleClose:_e()}),De(c),ke(c,{referencePress:!1}),He(c,{role:"dialog"})]);return a.useMemo(()=>({x:u,y:p,reference:P.setReference,floating:P.setFloating,strategy:w,context:c,getFloatingProps:g(),getReferenceProps:h(),open:s,arrowRef:i}),[s,l,u,p])}const Xe={color:"white",initiallyOpen:!1,offset:8,placement:"top",radius:"md",shadow:"base",size:"md",withinPortal:!0},q=a.forwardRef((o,n)=>{const r=Object.assign(Object.assign(Object.assign({},Xe),je()),o),{className:i="",color:s,children:l,size:u,radius:p,placement:P,shadow:w,initiallyOpen:c,withinPortal:g,offset:h}=r,G=ue(r,["className","color","children","size","radius","placement","shadow","initiallyOpen","withinPortal","offset"]),I=ge(o.id),{x:d,y:C,reference:O,floating:B,strategy:_,context:D,open:y,arrowRef:V,getFloatingProps:k,getReferenceProps:H}=We({placement:P,initiallyOpen:c,offset:h});return e(Qe,Object.assign({value:{x:d,y:C,reference:O,floating:B,strategy:_,context:D,getFloatingProps:k,getReferenceProps:H,open:y,color:s,size:u,radius:p,shadow:w,withinPortal:g,arrowRef:V}},{children:e("div",Object.assign({id:I,ref:n,role:"dialog","aria-modal":!0,className:i},G,{children:l}))}))});q.displayName="Popover";const t=Object.assign(q,{Trigger:A,Content:M});q.__docgenInfo={description:"",methods:[],displayName:"Popover"};const Pe=["tight","xs","sm","md","lg"],fe=["none","sm","md","lg","full"],we=["none","sm","base","md"],ye=["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],Te=["white","gray","slate","zinc"],br={title:"Components/Popover",component:t,argTypes:{color:{options:Te,control:{type:"select"}},size:{options:Pe,control:{type:"select"}},radius:{options:fe,control:{type:"select"}},shadow:{options:we,control:{type:"select"}},placement:{options:ye,control:{type:"select"}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},Ye=o=>e(he,{prop:"Default",children:m(t,{initiallyOpen:!0,...o,children:[e(t.Trigger,{children:e(v,{children:"I am the trigger"})}),e(t.Content,{children:"I am the popover content"})]})}),z=Ye.bind({}),Ze=o=>{const n=Te.map(r=>e(T,{prop:"color",value:r,children:m(t,{color:r,initiallyOpen:!0,...o,children:[e(t.Content,{children:"This is a Popover"}),e(t.Trigger,{children:e(v,{children:"Button"})})]})},r));return e(b,{children:n})},j=Ze.bind({}),er=o=>{const n=Pe.map(r=>e(T,{prop:"size",value:r,children:m(t,{size:r,initiallyOpen:!0,...o,children:[e(t.Content,{children:"This is a Popover"}),e(t.Trigger,{children:e(v,{children:"Button"})})]})},r));return e(b,{children:n})},N=er.bind({}),rr=o=>{const n=fe.map(r=>e(T,{prop:"radius",value:r,children:m(t,{radius:r,initiallyOpen:!0,...o,children:[e(t.Content,{children:"This is a Popover"}),e(t.Trigger,{children:e(v,{children:"Button"})})]})},r));return e(b,{children:n})},R=rr.bind({}),or=o=>{const n=we.map(r=>e(T,{prop:"shadow",value:r,children:m(t,{shadow:r,initiallyOpen:!0,...o,children:[e(t.Content,{children:"This is a Popover"}),e(t.Trigger,{children:e(v,{children:"Button"})})]})},r));return e(b,{children:n})},S=or.bind({}),tr=o=>{const n=ye.map(r=>e(T,{prop:"placement",value:r,children:m(t,{placement:r,initiallyOpen:!0,...o,children:[e(t.Content,{children:"This is a Popover"}),e(t.Trigger,{children:e(v,{children:"Button"})})]})},r));return e(b,{children:n})},F=tr.bind({}),nr=o=>e(he,{prop:"Popover with a Card",children:m(t,{size:"tight",color:"gray",placement:"bottom-start",initiallyOpen:!0,withinPortal:!0,...o,children:[e(t.Trigger,{children:e(v,{children:"I am the trigger"})}),e(t.Content,{children:m(x,{shadow:"none",size:"sm",radius:"md",children:[e(x.Header,{className:"bg-gray-50",children:"This is a Card Header"}),e(x.Body,{children:"This is the body of the card"}),e(x.Footer,{className:"bg-gray-50",children:"And here is the footer"})]})})]})}),E=nr.bind({});var K,L,U;z.parameters={...z.parameters,docs:{...(K=z.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Popover initiallyOpen={true} {...args}>
        <Popover.Trigger>
          <Button>I am the trigger</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>
    </EnhancedView>;
}`,...(U=(L=z.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var Q,W,X;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const items = colors.map(color => <View prop="color" value={color} key={color}>
      <Popover color={color} initiallyOpen={true} {...args}>
        <Popover.Content>This is a Popover</Popover.Content>
        <Popover.Trigger>
          <Button>Button</Button>
        </Popover.Trigger>
      </Popover>
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(X=(W=j.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <View prop="size" value={size} key={size}>
      <Popover size={size} initiallyOpen={true} {...args}>
        <Popover.Content>This is a Popover</Popover.Content>
        <Popover.Trigger>
          <Button>Button</Button>
        </Popover.Trigger>
      </Popover>
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(ee=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,oe,te;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <View prop="radius" value={radius} key={radius}>
      <Popover radius={radius} initiallyOpen={true} {...args}>
        <Popover.Content>This is a Popover</Popover.Content>
        <Popover.Trigger>
          <Button>Button</Button>
        </Popover.Trigger>
      </Popover>
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(te=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,se,ae;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const items = shadows.map(shadow => <View prop="shadow" value={shadow} key={shadow}>
      <Popover shadow={shadow} initiallyOpen={true} {...args}>
        <Popover.Content>This is a Popover</Popover.Content>
        <Popover.Trigger>
          <Button>Button</Button>
        </Popover.Trigger>
      </Popover>
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(ae=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,le,pe;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  const items = placements.map(placement => <View prop="placement" value={placement} key={placement}>
      <Popover placement={placement} initiallyOpen={true} {...args}>
        <Popover.Content>This is a Popover</Popover.Content>
        <Popover.Trigger>
          <Button>Button</Button>
        </Popover.Trigger>
      </Popover>
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(pe=(le=F.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ce,de,me;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Popover with a Card">
      <Popover size="tight" color="gray" placement="bottom-start" initiallyOpen={true} withinPortal={true} {...args}>
        <Popover.Trigger>
          <Button>I am the trigger</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Card shadow="none" size="sm" radius="md">
            <Card.Header className="bg-gray-50">
              This is a Card Header
            </Card.Header>
            <Card.Body>This is the body of the card</Card.Body>
            <Card.Footer className="bg-gray-50">
              And here is the footer
            </Card.Footer>
          </Card>
        </Popover.Content>
      </Popover>
    </EnhancedView>;
}`,...(me=(de=E.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const Cr=["Default","Colors","Sizes","Radiuses","Shadows","Placements","Examples"];export{j as Colors,z as Default,E as Examples,F as Placements,R as Radiuses,S as Shadows,N as Sizes,Cr as __namedExportsOrder,br as default};
//# sourceMappingURL=Popover.stories-5478628e.js.map
