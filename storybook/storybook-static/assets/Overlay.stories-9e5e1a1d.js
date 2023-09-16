import{a as c,j as r}from"./usePropId-d72ac371.js";import{u as i}from"./Button-07d76f41.js";import{m as p}from"./Overlay-f04cad5a.js";import{r as m}from"./index-76fb7be0.js";import{a as u}from"./View-9e99ac25.js";import"./use-independent-context.hook-c68aff34.js";import"./InputGroup.context-30bba26b.js";import"./Spinner-6f5ac021.js";import"./tw-merge-1166cefb.js";import"./ChevronDown-d155685d.js";import"./variant.context-7223bf5a.js";import"./_commonjsHelpers-de833af9.js";const f=["none","sm","base","md","lg","xl"],d=["white","gray","dark"],C=["25","50","75"],B={title:"Components/Overlay",component:p,argTypes:{color:{options:d,control:{type:"select"}},blur:{options:f,control:{type:"select"}},opacity:{options:C,control:{type:"select"}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},O=l=>{const[o,t]=m.useState(!1);return c(u,{prop:"Default",children:[r(i,{onClick:()=>t(!o),children:"Click me!"}),o&&r(p,{onClose:()=>t(!1),closeOnClick:!0,...l})]})},e=O.bind({});var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <View prop="Default">
      <Button onClick={() => setOpen(!open)}>Click me!</Button>
      {open && <Overlay onClose={() => setOpen(false)} closeOnClick={true} {...args} />}
    </View>;
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,B as default};
//# sourceMappingURL=Overlay.stories-9e5e1a1d.js.map
