import{a as c,j as r}from"./usePropId-97cc893b.js";import{u as i}from"./Button-8f6129d9.js";import{m as p}from"./Overlay-0d528997.js";import{r as m}from"./index-76fb7be0.js";import{a as u}from"./View-0bd09aa3.js";import"./use-independent-context.hook-9077e291.js";import"./InputGroup.context-bea77a96.js";import"./Spinner-211d531f.js";import"./tw-merge-1166cefb.js";import"./ChevronDown-fe8e455a.js";import"./variant.context-7223bf5a.js";import"./_commonjsHelpers-de833af9.js";const f=["none","sm","base","md","lg","xl"],d=["white","gray","dark"],C=["25","50","75"],B={title:"Components/Overlay",component:p,argTypes:{color:{options:d,control:{type:"select"}},blur:{options:f,control:{type:"select"}},opacity:{options:C,control:{type:"select"}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},O=l=>{const[o,t]=m.useState(!1);return c(u,{prop:"Default",children:[r(i,{onClick:()=>t(!o),children:"Click me!"}),o&&r(p,{onClose:()=>t(!1),closeOnClick:!0,...l})]})},e=O.bind({});var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <View prop="Default">
      <Button onClick={() => setOpen(!open)}>Click me!</Button>
      {open && <Overlay onClose={() => setOpen(false)} closeOnClick={true} {...args} />}
    </View>;
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,B as default};
//# sourceMappingURL=Overlay.stories-a36767ff.js.map
