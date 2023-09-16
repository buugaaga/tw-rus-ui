import{j as e,F as ie,a as p}from"./usePropId-d72ac371.js";import{E as n}from"./Combobox-7b527760.js";import{d}from"./Image-21d52e17.js";import{c as b}from"./Text-1d222789.js";import{h as c}from"./MagnifyingGlass.es-a88f7a31.js";import{r as g}from"./index-76fb7be0.js";import"./use-independent-context.hook-c68aff34.js";import"./floating-ui.react.esm-6cc99f0f.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./FormControl.context-30bba26b.js";import"./InputGroup.context-30bba26b.js";import"./Spinner-6f5ac021.js";import"./tw-merge-1166cefb.js";import"./use-keypress-dd3b0736.js";import"./use-vertical-arrows.hook-85ba772b.js";import"./XMark-c93d068d.js";import"./CaretUpDown-f91bd343.js";import"./variant.context-7223bf5a.js";import"./IconBase.es-33536b25.js";const m=["light","solid","transparent"],Z=["blue","purple","gray","dark","black"],$=["xs","sm","md","lg"],ee=["none","sm","base","md","lg"],ae=["none","sm","base","md","lg"],oe=["none","invalid","valid","warning"],u=[{heading:"Europe",options:[{value:"1",label:"Germany"},{value:"2",label:"Great Britain"},{value:"3",label:"Greece"},{value:"4",label:"Sweden"}]},{heading:"Asia",options:[{value:"5",label:"Japan"},{value:"6",label:"China"},{value:"7",label:"India",disabled:!0}]},{heading:"America",options:[{value:"8",label:"United States"},{value:"9",label:"Canada"},{value:"10",label:"Mexico"}]}],ne=[{heading:"Europe",options:[{value:"1",label:"Germany",description:"The second-most populous country in Europe",media:e(d,{alt:"Germany",className:"w-10 h-10",src:"https://img.icons8.com/color/64/germany-circular.png"})},{value:"2",label:"Great Britain",description:"An island nation in northwestern Europe",media:e(d,{alt:"Great Britain",className:"w-10 h-10",src:"https://img.icons8.com/color/64/great-britain-circular.png"})},{value:"3",label:"Greece",description:"The cradle of Western civilization",media:e(d,{alt:"Greece",className:"w-10 h-10",src:"https://img.icons8.com/color/64/greece-circular.png"})},{value:"4",label:"Sweden",description:"An economic powerhouse",media:e(d,{alt:"Greece",className:"w-10 h-10",src:"https://img.icons8.com/color/64/sweden-circular.png"})}]},{heading:"Asia",options:[{value:"5",label:"Japan",description:"An island country in East Asia",media:e(d,{alt:"Japan",className:"w-10 h-10",src:"https://img.icons8.com/color/64/japan-circular.png"})},{value:"6",label:"China",description:"The world's third largest country",disabled:!0,media:e(d,{alt:"China",className:"w-10 h-10",src:"https://img.icons8.com/color/64/china-circular.png"})},{value:"7",label:"India",description:"The most populous democracy in the world",media:e(d,{alt:"India",className:"w-10 h-10",src:"https://img.icons8.com/color/64/india-circular.png"})}]},{heading:"North America",options:[{value:"8",label:"USA",description:"Commonly known as the United States",media:e(d,{alt:"USA",className:"w-10 h-10",src:"https://img.icons8.com/color/64/usa-circular.png"})},{value:"9",label:"Canada",description:"It has the longest coastline in the world",media:e(d,{alt:"Canada",className:"w-10 h-10",src:"https://img.icons8.com/color/64/canada-circular.png"})},{value:"10",label:"Mexico",description:"It is organized as a federal republic",media:e(d,{alt:"Mexico",className:"w-10 h-10",src:"https://img.icons8.com/color/64/mexico-circular.png"})}]}],Me={title:"Components/Combobox",component:n,argTypes:{tone:{options:m,control:{type:"radio"}},color:{options:Z,control:{type:"radio"}},size:{options:$,control:{type:"radio"}},radius:{options:ee,control:{type:"radio"}},validation:{options:oe,control:{type:"radio"}},shadow:{options:ae,control:{type:"radio"}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},le=r=>e(ie,{children:e(n,{...r,leftIcon:e(c,{}),placeholder:"Select a country...",onChange:s=>console.log("story selected value",s),initialValue:["1","2"],multiple:!0,children:ne.map((s,i)=>e(n.Group,{heading:s.heading,children:s.options.map(o=>e(n.Option,{value:o.value,label:o.label,description:o.description,disabled:o.disabled,media:o.media},o.value))},i))})}),h=le.bind({}),te=r=>{const s=m.map(i=>e(n,{tone:i,...r,leftIcon:e(c,{}),placeholder:"Select a country...",initialValue:"1",children:u.map((o,t)=>e(n.Group,{heading:o.heading,children:o.options.map(a=>e(n.Option,{value:a.value,label:a.label,description:a.description,disabled:a.disabled,media:a.media},a.value))},t))},i));return e("div",{className:"flex flex-col space-y-4",children:s})},x=te.bind({}),se=r=>{const s=Z.map(i=>e(n,{color:i,...r,leftIcon:e(c,{}),placeholder:"Select a country...",initialValue:"1",children:u.map((o,t)=>e(n.Group,{heading:o.heading,children:o.options.map(a=>e(n.Option,{value:a.value,label:a.label,description:a.description,disabled:a.disabled,media:a.media},a.value))},t))},i));return e("div",{className:"flex flex-col space-y-4",children:s})},v=se.bind({}),re=r=>{const s=$.map(i=>p(g.Fragment,{children:[p(b,{children:["Size: ",i]}),m.map(o=>e(n,{size:i,tone:o,...r,leftIcon:e(c,{}),placeholder:"Select a country...",initialValue:"1",children:u.map((t,a)=>e(n.Group,{heading:t.heading,children:t.options.map(l=>e(n.Option,{value:l.value,label:l.label,description:l.description,disabled:l.disabled,media:l.media},l.value))},a))},o))]},i));return e("div",{className:"flex flex-col space-y-4",children:s})},y=re.bind({}),de=r=>{const s=ee.map(i=>p(g.Fragment,{children:[p(b,{children:["Radius: ",i]}),m.map(o=>e(n,{radius:i,tone:o,...r,leftIcon:e(c,{}),placeholder:"Select a country...",initialValue:"1",children:u.map((t,a)=>e(n.Group,{heading:t.heading,children:t.options.map(l=>e(n.Option,{value:l.value,label:l.label,description:l.description,disabled:l.disabled,media:l.media},l.value))},a))},o))]},i));return e("div",{className:"flex flex-col space-y-4",children:s})},f=de.bind({}),ce=r=>{const s=ae.map(i=>p(g.Fragment,{children:[p(b,{children:["Shadow: ",i]}),m.map(o=>e(n,{shadow:i,tone:o,...r,leftIcon:e(c,{}),placeholder:"Select a country...",initialValue:"1",children:u.map((t,a)=>e(n.Group,{heading:t.heading,children:t.options.map(l=>e(n.Option,{value:l.value,label:l.label,description:l.description,disabled:l.disabled,media:l.media},l.value))},a))},o))]},i));return e("div",{className:"flex flex-col space-y-4",children:s})},C=ce.bind({}),pe=r=>{const s=oe.map(i=>p(g.Fragment,{children:[p(b,{children:["Validation: ",i]}),m.map(o=>e(n,{validation:i,tone:o,...r,leftIcon:e(c,{}),placeholder:"Select a country...",initialValue:"1",children:u.map((t,a)=>e(n.Group,{heading:t.heading,children:t.options.map(l=>e(n.Option,{value:l.value,label:l.label,description:l.description,disabled:l.disabled,media:l.media},l.value))},a))},o))]},i));return e("div",{className:"flex flex-col space-y-4",children:s})},S=pe.bind({}),me=r=>{const s=m.map(i=>e(n,{tone:i,withRing:!0,...r,leftIcon:e(c,{}),placeholder:"Select a country...",initialValue:"1",children:u.map((o,t)=>e(n.Group,{heading:o.heading,children:o.options.map(a=>e(n.Option,{value:a.value,label:a.label,description:a.description,disabled:a.disabled,media:a.media},a.value))},t))},i));return e("div",{className:"flex flex-col space-y-4",children:s})},G=me.bind({}),ue=r=>{const s=p(g.Fragment,{children:[e(b,{children:"State: loading"}),m.map(i=>e(n,{loading:!0,tone:i,...r,leftIcon:e(c,{}),placeholder:"Select a country...",initialValue:"1",children:u.map((o,t)=>e(n.Group,{heading:o.heading,children:o.options.map(a=>e(n.Option,{value:a.value,label:a.label,description:a.description,disabled:a.disabled,media:a.media},a.value))},t))},i)),e(b,{children:"State: disabled"}),m.map(i=>e(n,{disabled:!0,tone:i,...r,leftIcon:e(c,{}),placeholder:"Select a country...",initialValue:"1",children:u.map((o,t)=>e(n.Group,{heading:o.heading,children:o.options.map(a=>e(n.Option,{value:a.value,label:a.label,description:a.description,disabled:a.disabled,media:a.media},a.value))},t))},i))]});return e("div",{className:"flex flex-col space-y-4",children:s})},k=ue.bind({});var w,O,T;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <>
      <Combobox {...args} leftIcon={<MagnifyingGlass />} placeholder="Select a country..." onChange={selectedValue => console.log("story selected value", selectedValue)} initialValue={["1", "2"]} multiple>
        {options.map((group, index) => <Combobox.Group heading={group.heading} key={index}>
            {group.options.map(option => <Combobox.Option key={option.value} value={option.value} label={option.label} description={option.description} disabled={option.disabled} media={option.media} />)}
          </Combobox.Group>)}
      </Combobox>
    </>;
}`,...(T=(O=h.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var N,V,I;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const items = tones.map(tone => <Combobox key={tone} tone={tone} {...args} leftIcon={<MagnifyingGlass />} placeholder="Select a country..." initialValue="1">
      {simpleOptions.map((group, index) => <Combobox.Group heading={group.heading} key={index}>
          {group.options.map(option => <Combobox.Option key={option.value} value={option.value} label={option.label} description={option.description} disabled={option.disabled} media={option.media} />)}
        </Combobox.Group>)}
    </Combobox>);
  return <div className={"flex flex-col space-y-4"}>{items}</div>;
}`,...(I=(V=x.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var R,F,z;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const items = colors.map(color => <Combobox key={color} color={color} {...args} leftIcon={<MagnifyingGlass />} placeholder="Select a country..." initialValue="1">
      {simpleOptions.map((group, index) => <Combobox.Group heading={group.heading} key={index}>
          {group.options.map(option => <Combobox.Option key={option.value} value={option.value} label={option.label} description={option.description} disabled={option.disabled} media={option.media} />)}
        </Combobox.Group>)}
    </Combobox>);
  return <div className={"flex flex-col space-y-4"}>{items}</div>;
}`,...(z=(F=v.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var M,A,E;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <React.Fragment key={size}>
      <Text>Size: {size}</Text>
      {tones.map(tone => <Combobox key={tone} size={size} tone={tone} {...args} leftIcon={<MagnifyingGlass />} placeholder="Select a country..." initialValue="1">
          {simpleOptions.map((group, index) => <Combobox.Group heading={group.heading} key={index}>
              {group.options.map(option => <Combobox.Option key={option.value} value={option.value} label={option.label} description={option.description} disabled={option.disabled} media={option.media} />)}
            </Combobox.Group>)}
        </Combobox>)}
    </React.Fragment>);
  return <div className={"flex flex-col space-y-4"}>{items}</div>;
}`,...(E=(A=y.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var j,U,B;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <React.Fragment key={radius}>
      <Text>Radius: {radius}</Text>
      {tones.map(tone => <Combobox key={tone} radius={radius} tone={tone} {...args} leftIcon={<MagnifyingGlass />} placeholder="Select a country..." initialValue="1">
          {simpleOptions.map((group, index) => <Combobox.Group heading={group.heading} key={index}>
              {group.options.map(option => <Combobox.Option key={option.value} value={option.value} label={option.label} description={option.description} disabled={option.disabled} media={option.media} />)}
            </Combobox.Group>)}
        </Combobox>)}
    </React.Fragment>);
  return <div className={"flex flex-col space-y-4"}>{items}</div>;
}`,...(B=(U=f.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var D,J,_;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const items = shadows.map(shadow => <React.Fragment key={shadow}>
      <Text>Shadow: {shadow}</Text>
      {tones.map(tone => <Combobox key={tone} shadow={shadow} tone={tone} {...args} leftIcon={<MagnifyingGlass />} placeholder="Select a country..." initialValue="1">
          {simpleOptions.map((group, index) => <Combobox.Group heading={group.heading} key={index}>
              {group.options.map(option => <Combobox.Option key={option.value} value={option.value} label={option.label} description={option.description} disabled={option.disabled} media={option.media} />)}
            </Combobox.Group>)}
        </Combobox>)}
    </React.Fragment>);
  return <div className={"flex flex-col space-y-4"}>{items}</div>;
}`,...(_=(J=C.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var W,q,H;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const items = validations.map(validation => <React.Fragment key={validation}>
      <Text>Validation: {validation}</Text>
      {tones.map(tone => <Combobox key={tone} validation={validation} tone={tone} {...args} leftIcon={<MagnifyingGlass />} placeholder="Select a country..." initialValue="1">
          {simpleOptions.map((group, index) => <Combobox.Group heading={group.heading} key={index}>
              {group.options.map(option => <Combobox.Option key={option.value} value={option.value} label={option.label} description={option.description} disabled={option.disabled} media={option.media} />)}
            </Combobox.Group>)}
        </Combobox>)}
    </React.Fragment>);
  return <div className={"flex flex-col space-y-4"}>{items}</div>;
}`,...(H=(q=S.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var K,L,P;G.parameters={...G.parameters,docs:{...(K=G.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const items = tones.map(tone => <Combobox key={tone} tone={tone} withRing={true} {...args} leftIcon={<MagnifyingGlass />} placeholder="Select a country..." initialValue="1">
      {simpleOptions.map((group, index) => <Combobox.Group heading={group.heading} key={index}>
          {group.options.map(option => <Combobox.Option key={option.value} value={option.value} label={option.label} description={option.description} disabled={option.disabled} media={option.media} />)}
        </Combobox.Group>)}
    </Combobox>);
  return <div className={"flex flex-col space-y-4"}>{items}</div>;
}`,...(P=(L=G.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var Q,X,Y;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const items = <React.Fragment>
      <Text>State: loading</Text>
      {tones.map(tone => <Combobox key={tone} loading={true} tone={tone} {...args} leftIcon={<MagnifyingGlass />} placeholder="Select a country..." initialValue="1">
          {simpleOptions.map((group, index) => <Combobox.Group heading={group.heading} key={index}>
              {group.options.map(option => <Combobox.Option key={option.value} value={option.value} label={option.label} description={option.description} disabled={option.disabled} media={option.media} />)}
            </Combobox.Group>)}
        </Combobox>)}
      <Text>State: disabled</Text>
      {tones.map(tone => <Combobox key={tone} disabled={true} tone={tone} {...args} leftIcon={<MagnifyingGlass />} placeholder="Select a country..." initialValue="1">
          {simpleOptions.map((group, index) => <Combobox.Group heading={group.heading} key={index}>
              {group.options.map(option => <Combobox.Option key={option.value} value={option.value} label={option.label} description={option.description} disabled={option.disabled} media={option.media} />)}
            </Combobox.Group>)}
        </Combobox>)}
    </React.Fragment>;
  return <div className={"flex flex-col space-y-4"}>{items}</div>;
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ae=["Default","Tones","Colors","Sizes","Radiuses","Shadows","Validations","Ring","States"];export{v as Colors,h as Default,f as Radiuses,G as Ring,C as Shadows,y as Sizes,k as States,x as Tones,S as Validations,Ae as __namedExportsOrder,Me as default};
//# sourceMappingURL=Combobox.stories-cb76f003.js.map
