import{a as n,j as e}from"./usePropId-d72ac371.js";import{u as l}from"./Button-07d76f41.js";import{e as t}from"./use-fade.hook-88f32ede.js";import{r}from"./index-76fb7be0.js";import{V as w,a as b}from"./View-9e99ac25.js";import"./use-independent-context.hook-c68aff34.js";import"./InputGroup.context-30bba26b.js";import"./Spinner-6f5ac021.js";import"./tw-merge-1166cefb.js";import"./ChevronDown-d155685d.js";import"./variant.context-7223bf5a.js";import"./_commonjsHelpers-de833af9.js";const j={title:"Hooks/Fade",argTypes:{ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},h=V=>{const[o,g]=r.useState(!0),[i,R]=r.useState(!0),[a,v]=r.useState(!0),u=r.useRef(null),d=r.useRef(null),c=r.useRef(null);return t({ref:u,visible:o}),t({ref:d,visible:i}),t({ref:c,visible:a}),n(w,{children:[n(b,{prop:"Controls",children:[e(l,{color:"red",onClick:()=>g(!o),children:"Toggle red"}),e(l,{color:"green",onClick:()=>R(!i),children:"Toggle green"}),e(l,{color:"blue",onClick:()=>v(!a),children:"Toggle blue"})]}),n(b,{prop:"Example",children:[e("div",{ref:u,className:"w-20 h-20 rounded bg-red-500 flex shadow"}),e("div",{ref:d,className:"w-20 h-20 rounded bg-green-500 flex shadow"}),e("div",{ref:c,className:"w-20 h-20 rounded bg-blue-500 flex shadow"})]})]})},s=h.bind({});var f,p,m;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [visibleRed, setVisibleRed] = React.useState(true);
  const [visibleGreen, setVisibleGreen] = React.useState(true);
  const [visibleBlue, setVisibleBlue] = React.useState(true);
  const redRef = React.useRef<HTMLDivElement>(null);
  const greenRef = React.useRef<HTMLDivElement>(null);
  const blueRef = React.useRef<HTMLDivElement>(null);
  useFade({
    ref: redRef,
    visible: visibleRed
  });
  useFade({
    ref: greenRef,
    visible: visibleGreen
  });
  useFade({
    ref: blueRef,
    visible: visibleBlue
  });
  return <ViewGroup>
      <View prop="Controls">
        <Button color="red" onClick={() => setVisibleRed(!visibleRed)}>
          Toggle red
        </Button>
        <Button color="green" onClick={() => setVisibleGreen(!visibleGreen)}>
          Toggle green
        </Button>
        <Button color="blue" onClick={() => setVisibleBlue(!visibleBlue)}>
          Toggle blue
        </Button>
      </View>

      <View prop="Example">
        <div ref={redRef} className="w-20 h-20 rounded bg-red-500 flex shadow" />
        <div ref={greenRef} className="w-20 h-20 rounded bg-green-500 flex shadow" />
        <div ref={blueRef} className="w-20 h-20 rounded bg-blue-500 flex shadow" />
      </View>
    </ViewGroup>;
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const L=["Default"];export{s as Default,L as __namedExportsOrder,j as default};
//# sourceMappingURL=FadeHook.stories-45b3a809.js.map
