import{j as e,a as R}from"./usePropId-97cc893b.js";import{u as r}from"./Button-8f6129d9.js";import{w as i}from"./Tooltip-00ac686c.js";import{E as _,V as n,a as s}from"./View-0bd09aa3.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./use-independent-context.hook-9077e291.js";import"./InputGroup.context-bea77a96.js";import"./Spinner-211d531f.js";import"./tw-merge-1166cefb.js";import"./ChevronDown-fe8e455a.js";import"./variant.context-7223bf5a.js";import"./floating-ui.react.esm-6cc99f0f.js";import"./index-d3ea75b5.js";import"./arrow-side.dictionary-25540b52.js";const D=["xs","sm","md","lg"],E=["none","sm","md","lg","full"],P=["white","blue","red","green","yellow","purple","gray","dark","black"],C=["none","sm","base","md"],N=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],ne={title:"Components/Tooltip",component:i,argTypes:{color:{options:P,control:{type:"select"}},size:{options:D,control:{type:"select"}},radius:{options:E,control:{type:"select"}},shadow:{options:C,control:{type:"select"}},placement:{options:N,control:{type:"select"}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},q=t=>e(_,{prop:"Default",children:e(i,{label:"This is a Tooltip",initiallyOpen:!0,withinPortal:!0,...t,children:e(r,{children:"Trigger"})})}),l=q.bind({}),A=t=>e(n,{children:P.map(o=>R(s,{prop:"color",value:o,justify:"evenly",children:[e(i,{label:"This is a Tooltip",tone:"solid",color:o,initiallyOpen:!0,...t,children:e(r,{color:o,children:e("span",{className:"capitalize",children:o})})}),e(i,{label:"This is a Tooltip",tone:"light",color:o,initiallyOpen:!0,...t,children:e(r,{color:o,tone:"light",children:e("span",{className:"capitalize",children:o})})})]},o))}),a=A.bind({}),F=t=>e(n,{children:D.map(o=>e(s,{prop:"size",value:o,justify:"evenly",children:e(i,{label:"This is a Tooltip",tone:"solid",size:o,initiallyOpen:!0,...t,children:e(r,{size:o,children:"Trigger"})})},o))}),p=F.bind({}),H=t=>e(n,{children:E.map(o=>e(s,{prop:"radius",value:o,justify:"evenly",children:e(i,{label:"This is a Tooltip",tone:"solid",radius:o,initiallyOpen:!0,...t,children:e(r,{children:"Trigger"})})},o))}),c=H.bind({}),I=t=>e(n,{children:C.map(o=>e(s,{prop:"shadow",value:o,justify:"evenly",children:e(i,{label:"This is a Tooltip",tone:"solid",shadow:o,initiallyOpen:!0,color:"white",...t,children:e(r,{children:"Trigger"})})},o))}),u=I.bind({}),J=t=>e(n,{children:N.map(o=>e(s,{prop:"placement",value:o,justify:"evenly",children:e(i,{label:"This is a Tooltip",tone:"solid",placement:o,initiallyOpen:!0,radius:"none",...t,children:e(r,{size:"lg",children:"Trigger"})})},o))}),d=J.bind({});var m,h,T;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Tooltip label="This is a Tooltip" initiallyOpen={true} withinPortal={true} {...args}>
        <Button>Trigger</Button>
      </Tooltip>
    </EnhancedView>;
}`,...(T=(h=l.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var g,y,w;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <ViewGroup>
      {colors.map(color => <View key={color} prop="color" value={color} justify="evenly">
          <Tooltip label="This is a Tooltip" tone="solid" color={color} initiallyOpen={true} {...args}>
            <Button color={color}>
              <span className={"capitalize"}>{color}</span>
            </Button>
          </Tooltip>

          <Tooltip label="This is a Tooltip" tone="light" color={color} initiallyOpen={true} {...args}>
            <Button color={color} tone="light">
              <span className={"capitalize"}>{color}</span>
            </Button>
          </Tooltip>
        </View>)}
    </ViewGroup>;
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var b,V,f;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <ViewGroup>
      {sizes.map(size => <View key={size} prop="size" value={size} justify="evenly">
          <Tooltip label="This is a Tooltip" tone="solid" size={size} initiallyOpen={true} {...args}>
            <Button size={size}>Trigger</Button>
          </Tooltip>
        </View>)}
    </ViewGroup>;
}`,...(f=(V=p.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var v,z,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <ViewGroup>
      {radiuses.map(radius => <View key={radius} prop="radius" value={radius} justify="evenly">
          <Tooltip label="This is a Tooltip" tone="solid" radius={radius} initiallyOpen={true} {...args}>
            <Button>Trigger</Button>
          </Tooltip>
        </View>)}
    </ViewGroup>;
}`,...(O=(z=c.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var B,j,S;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <ViewGroup>
      {shadows.map(shadow => <View key={shadow} prop="shadow" value={shadow} justify="evenly">
          <Tooltip label="This is a Tooltip" tone="solid" shadow={shadow} initiallyOpen={true} color="white" {...args}>
            <Button>Trigger</Button>
          </Tooltip>
        </View>)}
    </ViewGroup>;
}`,...(S=(j=u.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var G,k,x;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  return <ViewGroup>
      {placements.map(placement => <View key={placement} prop="placement" value={placement} justify="evenly">
          <Tooltip label="This is a Tooltip" tone="solid" placement={placement} initiallyOpen={true} radius="none" {...args}>
            <Button size="lg">Trigger</Button>
          </Tooltip>
        </View>)}
    </ViewGroup>;
}`,...(x=(k=d.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const se=["Default","Colors","Sizes","Radiuses","Shadows","Placements"];export{a as Colors,l as Default,d as Placements,c as Radiuses,u as Shadows,p as Sizes,se as __namedExportsOrder,ne as default};
//# sourceMappingURL=Tooltip.stories-bf2ba151.js.map
