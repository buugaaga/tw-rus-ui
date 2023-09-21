import{j as e,q as $,_,a as i,t as xe}from"./usePropId-97cc893b.js";import{t as we}from"./use-element-context.hook-714f7c36.js";import{r as s}from"./index-76fb7be0.js";import{t as W}from"./tw-merge-1166cefb.js";import{n as ze}from"./ChevronDown-fe8e455a.js";import{d as Re}from"./variant.context-7223bf5a.js";import{E as O,a as b,V as w}from"./View-0bd09aa3.js";import{h as je,o as Se,i as Oe,g as Fe}from"./Sparkle.es-98d9ef20.js";import"./_commonjsHelpers-de833af9.js";import"./IconBase.es-33536b25.js";const[Ge,Ie]=we("Accordion compound components cannot be rendered outside the Accordion component"),[Ee,fe]=we("Accordion Item compound components cannot be rendered outside the Accordion Item component"),ve=d=>{const o=s.useRef(null),{duration:a=250,isOpen:c=!1,children:n}=d,h=s.useRef(!0);return s.useEffect(()=>{const t=o.current;if(!t)return;if(!t.animate)return void(t.style.height=c?"auto":"0");if(h.current)return t.style.height=c?"auto":"0",void(h.current=!1);const p=t.getAnimations(),u=getComputedStyle(t).height,m=c?`${t.scrollHeight}px`:"0";p.length>0&&p.forEach(y=>{y.cancel()});const A={height:[u,m]};t.animate(A,{duration:a,easing:"ease-in-out"}).onfinish=()=>{t.style.overflow=m,t.style.height=c?"auto":"0px"}},[a,c]),e("div",Object.assign({ref:o,style:{height:"0px",overflow:"hidden"}},{children:n}))};ve.displayName="Collapse";const D=s.forwardRef((d,o)=>{const a=$("Accordion"),c=Object.assign({},d),{children:n,className:h=""}=c,t=_(c,["children","className"]),{activeItemAnchor:p,bordered:u,size:m}=Ie(),{anchor:A,bodyId:y,headerId:g}=fe(),I=s.useMemo(()=>W(a.body({bordered:u,className:h,size:m})),[u,h,m,a]);return e(ve,Object.assign({isOpen:A===p},{children:e("div",Object.assign({id:y,ref:o,role:"region","aria-labelledby":g,className:I},t,{children:n}))}))});D.displayName="AccordionBody";D.__docgenInfo={description:"",methods:[],displayName:"AccordionBody"};const M=s.forwardRef((d,o)=>{const a=$("Accordion"),c=Object.assign({},d),{children:n,className:h=""}=c,t=_(c,["children","className"]),{activeColor:p,activeItemAnchor:u,bordered:m,radius:A,setActiveItemAnchor:y,size:g,tone:I,withRing:f}=Ie(),{anchor:V,headerId:F,bodyId:G}=fe(),v=V===u,B=v?"active":"inactive",E=s.useMemo(()=>W(a.header({bordered:m,className:h,size:g,activeColor:p,radius:A,state:B,tone:I,withRing:f})),[m,h,A,p,g,B,a,I,f]),T=a.icon({size:g,state:B});return i("button",Object.assign({id:F,ref:o,type:"button",onClick:()=>{y(v?"":V)},className:E,"aria-expanded":v,"aria-controls":G},t,{children:[n,e(ze,{className:T})]}))});M.displayName="AccordionHeader";M.__docgenInfo={description:"",methods:[],displayName:"AccordionHeader"};const Be=d=>{const{anchor:o,children:a}=Object.assign({},d),c={anchor:o,bodyId:`${o}-body`,headerId:`${o}-header`};return e(Ee,Object.assign({value:c},{children:a}))};Be.displayName="AccordionItem";const Te={activeColor:"dark",bordered:!0,color:"white",radius:"md",shadow:"none",shadowColor:"none",size:"md",tone:"solid",withRing:!0},q=s.forwardRef((d,o)=>{const a=Re("Accordion",d.variant),c=$("Accordion"),n=Object.assign(Object.assign(Object.assign({},Te),a),d),{activeColor:h,bordered:t=!0,children:p,className:u="",color:m,defaultItem:A,radius:y,shadow:g,shadowColor:I,size:f,tone:V,withRing:F}=n,G=_(n,["activeColor","bordered","children","className","color","defaultItem","radius","shadow","shadowColor","size","tone","withRing"]),v=xe(d.id),[B,E]=s.useState(A),T={activeColor:h,activeItemAnchor:B,bordered:t,color:m,radius:y,setActiveItemAnchor:E,size:f,tone:V,withRing:F},Ce=s.useMemo(()=>W(c.base({bordered:t,className:u,color:m,radius:y,shadow:g,shadowColor:I,size:f})),[t,u,m,y,g,I,f,c]);return e(Ge,Object.assign({value:T},{children:e("div",Object.assign({id:v,ref:o,className:Ce},G,{children:p}))}))});q.displayName="Accordion";const r=Object.assign(q,{Item:Be,Header:M,Body:D});q.__docgenInfo={description:"",methods:[],displayName:"Accordion"};const Ve=["white","gray","zinc","slate"],He=["solid","light"],Y=["white","blue","red","green","yellow","purple","gray","dark","black"],$e=["none","sm","md","lg"],Ne=["sm","md","lg","xl"],ke=["none","sm","base","md","lg","xl"],l=[{anchor:"item-1",header:"What is tw-rus-ui?",icon:e(je,{weight:"duotone",className:"w-h h-5"}),body:"tw-rus-ui is a React component library that provides a set of accessible, reusable, and customizable components to help you build your next project. We've designed our components to be flexible and easy to use, so you can focus on what matters most: building great user experiences."},{anchor:"item-2",header:"How do I get started?",icon:e(Se,{weight:"duotone",className:""}),body:"Getting started with tw-rus-ui is easy! Simply install the package using your package manager of choice, and you're ready to go. We've also included a set of Storybook stories to help you get familiar with our components and how to use them."},{anchor:"item-3",header:"How do I contribute?",icon:e(Oe,{weight:"duotone",className:""}),body:"We're always looking for new contributors to help us improve tw-rus-ui! If you'd like to contribute, please check out our contribution guidelines to get started. We're looking forward to working with you!"},{anchor:"item-4",header:"Where can I find more information?",icon:e(Fe,{weight:"duotone",className:""}),body:"If you'd like to learn more about tw-rus-ui, please visit our website. You can also follow us on Twitter to stay up to date with the latest news and updates."}],no={title:"Components/Accordion",component:r,argTypes:{color:{options:Ve,control:{type:"select"}},activeColor:{options:Y,control:{type:"select"}},size:{options:Ne,control:{type:"select"}},shadow:{options:ke,control:{type:"select"}},bordered:{control:{type:"boolean"}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},_e=d=>e(O,{prop:"Default",children:e(r,{...d,defaultItem:"item-1",children:l.map(o=>i(r.Item,{anchor:o.anchor,children:[e(r.Header,{children:o.header}),e(r.Body,{children:o.body})]},o.anchor))})}),H=_e.bind({}),We=d=>{const o=Y.map(a=>e(s.Fragment,{children:e(b,{prop:"color",value:a,children:He.map(c=>e(r,{...d,tone:c,activeColor:a,defaultItem:"item-1",children:l.map(n=>i(r.Item,{anchor:n.anchor,children:[e(r.Header,{children:n.header}),e(r.Body,{children:n.body})]},n.anchor))},c))})},a));return e(w,{children:o})},N=We.bind({}),De=d=>{const o=Ve.map(a=>e(s.Fragment,{children:e(b,{prop:"color",value:a,children:e(r,{...d,color:a,defaultItem:"item-1",children:l.map(c=>i(r.Item,{anchor:c.anchor,children:[e(r.Header,{children:c.header}),e(r.Body,{children:c.body})]},c.anchor))})})},a));return e(w,{children:o})},k=De.bind({}),Me=d=>{const o=He.map(a=>e(s.Fragment,{children:e(b,{prop:"tone",value:a,children:Y.map(c=>e(r,{...d,tone:a,activeColor:c,defaultItem:"item-1",children:l.map(n=>i(r.Item,{anchor:n.anchor,children:[e(r.Header,{children:n.header}),e(r.Body,{children:n.body})]},n.anchor))},c))})},a));return e(w,{children:o})},C=Me.bind({}),qe=d=>{const o=$e.map(a=>e(s.Fragment,{children:e(b,{prop:"radius",value:a,children:e(r,{...d,radius:a,defaultItem:"item-1",children:l.map(c=>i(r.Item,{anchor:c.anchor,children:[e(r.Header,{children:c.header}),e(r.Body,{children:c.body})]},c.anchor))})})},a));return e(w,{children:o})},x=qe.bind({}),Ye=d=>{const o=Ne.map(a=>e(s.Fragment,{children:e(b,{prop:"size",value:a,children:e(r,{...d,size:a,defaultItem:"item-1",children:l.map(c=>i(r.Item,{anchor:c.anchor,children:[e(r.Header,{children:c.header}),e(r.Body,{children:c.body})]},c.anchor))})})},a));return e(w,{children:o})},z=Ye.bind({}),Je=d=>{const o=ke.map(a=>e(s.Fragment,{children:e(b,{prop:"shadow",value:a,children:e(r,{...d,shadow:a,defaultItem:"item-1",children:l.map(c=>i(r.Item,{anchor:c.anchor,children:[e(r.Header,{children:c.header}),e(r.Body,{children:c.body})]},c.anchor))})})},a));return e(w,{children:o})},R=Je.bind({}),Ke=d=>i(w,{children:[e(b,{prop:"bordered",value:"true",children:e(r,{...d,bordered:!0,defaultItem:"item-1",children:l.map(o=>i(r.Item,{anchor:o.anchor,children:[e(r.Header,{children:o.header}),e(r.Body,{children:o.body})]},o.anchor))})}),e(b,{prop:"bordered",value:"false",children:e(r,{...d,bordered:!1,defaultItem:"item-1",children:l.map(o=>i(r.Item,{anchor:o.anchor,children:[e(r.Header,{children:o.header}),e(r.Body,{children:o.body})]},o.anchor))})})]}),j=Ke.bind({}),Le=d=>i(w,{children:[e(O,{prop:"Simple Accordion",children:e(r,{...d,activeColor:"dark",size:"md",shadow:"base",bordered:!0,defaultItem:"item-1",children:l.map(o=>i(r.Item,{anchor:o.anchor,children:[e(r.Header,{children:o.header}),e(r.Body,{className:"font-light",children:o.body})]},o.anchor))})}),e(O,{prop:"Borderless Accordion with Icons",children:e(r,{...d,activeColor:"blue",size:"md",bordered:!1,defaultItem:"item-2",children:l.map(o=>i(r.Item,{anchor:o.anchor,children:[e(r.Header,{children:i("div",{className:"flex items-center space-x-2",children:[o.icon,e("span",{children:o.header})]})}),e(r.Body,{className:"font-light",children:o.body})]},o.anchor))})}),e(O,{prop:"Borderless Accordion with extra padding & Icons",children:e(r,{...d,className:"px-3 py-2",activeColor:"purple",size:"md",shadow:"base",bordered:!1,defaultItem:"item-2",children:l.map(o=>i(r.Item,{anchor:o.anchor,children:[e(r.Header,{children:i("div",{className:"flex items-center space-x-2",children:[o.icon,e("span",{children:o.header})]})}),e(r.Body,{className:"font-light",children:o.body})]},o.anchor))})})]}),S=Le.bind({});var J,K,L;H.parameters={...H.parameters,docs:{...(J=H.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Accordion {...args} defaultItem={'item-1'}>
        {accordionItems.map(item => <Accordion.Item key={item.anchor} anchor={item.anchor}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>)}
      </Accordion>
    </EnhancedView>;
}`,...(L=(K=H.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var P,Q,U;N.parameters={...N.parameters,docs:{...(P=N.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const items = activeColors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map(tone => <Accordion key={tone} {...args} tone={tone} activeColor={color} defaultItem={'item-1'}>
            {accordionItems.map(item => <Accordion.Item key={item.anchor} anchor={item.anchor}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>)}
          </Accordion>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(U=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color}>
        <Accordion {...args} color={color} defaultItem={'item-1'}>
          {accordionItems.map(item => <Accordion.Item key={item.anchor} anchor={item.anchor}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>)}
        </Accordion>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,re,ce;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  const items = tones.map(tone => <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {activeColors.map(color => <Accordion key={color} {...args} tone={tone} activeColor={color} defaultItem={'item-1'}>
            {accordionItems.map(item => <Accordion.Item key={item.anchor} anchor={item.anchor}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>)}
          </Accordion>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(ce=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var ae,de,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        <Accordion {...args} radius={radius} defaultItem={'item-1'}>
          {accordionItems.map(item => <Accordion.Item key={item.anchor} anchor={item.anchor}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>)}
        </Accordion>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(ne=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ne.source}}};var te,ie,se;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <React.Fragment key={size}>
      <View prop="size" value={size}>
        <Accordion {...args} size={size} defaultItem={'item-1'}>
          {accordionItems.map(item => <Accordion.Item key={item.anchor} anchor={item.anchor}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>)}
        </Accordion>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(se=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var me,le,he;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`args => {
  const items = shadows.map(shadow => <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        <Accordion {...args} shadow={shadow} defaultItem={'item-1'}>
          {accordionItems.map(item => <Accordion.Item key={item.anchor} anchor={item.anchor}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>)}
        </Accordion>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(he=(le=R.parameters)==null?void 0:le.docs)==null?void 0:he.source}}};var pe,ue,ye;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  return <ViewGroup>
      <View prop="bordered" value={'true'}>
        <Accordion {...args} bordered={true} defaultItem={'item-1'}>
          {accordionItems.map(item => <Accordion.Item key={item.anchor} anchor={item.anchor}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>)}
        </Accordion>
      </View>
      <View prop="bordered" value={'false'}>
        <Accordion {...args} bordered={false} defaultItem={'item-1'}>
          {accordionItems.map(item => <Accordion.Item key={item.anchor} anchor={item.anchor}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>)}
        </Accordion>
      </View>
    </ViewGroup>;
}`,...(ye=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var Ae,ge,be;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => {
  return <ViewGroup>
      <EnhancedView prop="Simple Accordion">
        <Accordion {...args} activeColor="dark" size="md" shadow="base" bordered={true} defaultItem={'item-1'}>
          {accordionItems.map(item => <Accordion.Item key={item.anchor} anchor={item.anchor}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body className="font-light">{item.body}</Accordion.Body>
            </Accordion.Item>)}
        </Accordion>
      </EnhancedView>

      <EnhancedView prop="Borderless Accordion with Icons">
        <Accordion {...args} activeColor="blue" size="md" bordered={false} defaultItem={'item-2'}>
          {accordionItems.map(item => <Accordion.Item key={item.anchor} anchor={item.anchor}>
              <Accordion.Header>
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.header}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body className="font-light">{item.body}</Accordion.Body>
            </Accordion.Item>)}
        </Accordion>
      </EnhancedView>

      <EnhancedView prop="Borderless Accordion with extra padding & Icons">
        <Accordion {...args} className="px-3 py-2" activeColor="purple" size="md" shadow="base" bordered={false} defaultItem={'item-2'}>
          {accordionItems.map(item => <Accordion.Item key={item.anchor} anchor={item.anchor}>
              <Accordion.Header>
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.header}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body className="font-light">{item.body}</Accordion.Body>
            </Accordion.Item>)}
        </Accordion>
      </EnhancedView>
    </ViewGroup>;
}`,...(be=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};const to=["Default","Tones","Colors","ActiveColors","Radiuses","Sizes","Shadows","Borders","Examples"];export{C as ActiveColors,j as Borders,k as Colors,H as Default,S as Examples,x as Radiuses,R as Shadows,z as Sizes,N as Tones,to as __namedExportsOrder,no as default};
//# sourceMappingURL=Accordion.stories-9989cf75.js.map
