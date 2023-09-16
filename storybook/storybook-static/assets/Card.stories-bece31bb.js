import{j as e,a}from"./usePropId-d72ac371.js";import{b as r}from"./Card-2f2f8192.js";import{E as L,a as n,V as l}from"./View-9e99ac25.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./use-element-context.hook-2cb88967.js";import"./tw-merge-1166cefb.js";import"./Image-21d52e17.js";const U=["white","gray","zinc","slate"],Y=["none","sm","base","md","lg","xl"],J=["none","sm","base","md","lg"],K=["sm","base","md","lg"],s="Header",t="Rewind UI is a React component library that provides a set of accessible, reusable, and customizable components to help you build your next project. We've designed our components to be flexible and easy to use, so you can focus on what matters most: building great user experiences.",i="Footer",N="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4140&q=80",pe={title:"Components/Card",component:r,argTypes:{radius:{options:J,control:{type:"select"}},color:{options:U,control:{type:"select"}},shadow:{options:Y,control:{type:"select"}},size:{options:K,control:{type:"select"}},bordered:{control:{type:"boolean"}},withDivider:{control:{type:"boolean"}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},P=o=>e(L,{prop:"Default",children:a(r,{...o,children:[e(r.Header,{children:s}),e(r.Body,{children:t}),e(r.Footer,{children:i})]})}),p=P.bind({}),Q=o=>{const c=U.map(d=>e(n,{prop:"color",value:d,children:a(r,{...o,color:d,children:[e(r.Header,{children:s}),e(r.Body,{children:t}),e(r.Footer,{children:i})]})},d));return e(l,{children:c})},u=Q.bind({}),X=o=>{const c=K.map(d=>e(n,{prop:"size",value:d,children:a(r,{...o,size:d,children:[e(r.Header,{children:s}),e(r.Body,{children:t}),e(r.Footer,{children:i})]})},d));return e(l,{children:c})},m=X.bind({}),Z=o=>{const c=J.map(d=>e(n,{prop:"radius",value:d,children:a(r,{...o,radius:d,children:[e(r.Header,{children:s}),e(r.Body,{children:t}),e(r.Footer,{children:i})]})},d));return e(l,{children:c})},h=Z.bind({}),$=o=>{const c=Y.map(d=>e(n,{prop:"shadow",value:d,children:a(r,{...o,shadow:d,children:[e(r.Header,{children:s}),e(r.Body,{children:t}),e(r.Footer,{children:i})]})},d));return e(l,{children:c})},C=$.bind({}),ee=o=>a(l,{children:[e(n,{prop:"bordered",value:"true",children:a(r,{...o,bordered:!0,children:[e(r.Header,{children:s}),e(r.Body,{children:t}),e(r.Footer,{children:i})]})}),e(n,{prop:"bordered",value:"false",children:a(r,{...o,bordered:!1,children:[e(r.Header,{children:s}),e(r.Body,{children:t}),e(r.Footer,{children:i})]})})]}),w=ee.bind({}),re=o=>a(l,{children:[e(n,{prop:"withDivider",value:"true",children:a(r,{...o,withDivider:!0,children:[e(r.Header,{children:s}),e(r.Body,{children:t}),e(r.Footer,{children:i})]})}),e(n,{prop:"withDivider",value:"false",children:a(r,{...o,withDivider:!1,children:[e(r.Header,{children:s}),e(r.Body,{children:t}),e(r.Footer,{children:i})]})})]}),y=re.bind({}),oe=o=>e(n,{prop:"bordered",value:"true",children:a(r,{...o,bordered:!0,children:[e(r.Image,{src:N,caption:"This is a beautiful image",mode:"dark"}),e(r.Body,{children:t})]})}),b=oe.bind({});var x,g,T;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Card {...args}>
        <Card.Header>{headerText}</Card.Header>
        <Card.Body>{bodyText}</Card.Body>
        <Card.Footer>{footerText}</Card.Footer>
      </Card>
    </EnhancedView>;
}`,...(T=(g=p.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var f,V,B;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const items = colors.map(color => <View key={color} prop="color" value={color}>
      <Card {...args} color={color}>
        <Card.Header>{headerText}</Card.Header>
        <Card.Body>{bodyText}</Card.Body>
        <Card.Footer>{footerText}</Card.Footer>
      </Card>
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(B=(V=u.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var v,H,F;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <View key={size} prop="size" value={size}>
      <Card {...args} size={size}>
        <Card.Header>{headerText}</Card.Header>
        <Card.Body>{bodyText}</Card.Body>
        <Card.Footer>{footerText}</Card.Footer>
      </Card>
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(F=(H=m.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var D,S,G;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <View key={radius} prop="radius" value={radius}>
      <Card {...args} radius={radius}>
        <Card.Header>{headerText}</Card.Header>
        <Card.Body>{bodyText}</Card.Body>
        <Card.Footer>{footerText}</Card.Footer>
      </Card>
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(G=(S=h.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};var z,I,k;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const items = shadows.map(shadow => <View key={shadow} prop="shadow" value={shadow}>
      <Card {...args} shadow={shadow}>
        <Card.Header>{headerText}</Card.Header>
        <Card.Body>{bodyText}</Card.Body>
        <Card.Footer>{footerText}</Card.Footer>
      </Card>
    </View>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(k=(I=C.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var j,E,R;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <ViewGroup>
      <View prop="bordered" value="true">
        <Card {...args} bordered={true}>
          <Card.Header>{headerText}</Card.Header>
          <Card.Body>{bodyText}</Card.Body>
          <Card.Footer>{footerText}</Card.Footer>
        </Card>
      </View>

      <View prop="bordered" value="false">
        <Card {...args} bordered={false}>
          <Card.Header>{headerText}</Card.Header>
          <Card.Body>{bodyText}</Card.Body>
          <Card.Footer>{footerText}</Card.Footer>
        </Card>
      </View>
    </ViewGroup>;
}`,...(R=(E=w.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var M,W,_;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <ViewGroup>
      <View prop="withDivider" value="true">
        <Card {...args} withDivider={true}>
          <Card.Header>{headerText}</Card.Header>
          <Card.Body>{bodyText}</Card.Body>
          <Card.Footer>{footerText}</Card.Footer>
        </Card>
      </View>

      <View prop="withDivider" value="false">
        <Card {...args} withDivider={false}>
          <Card.Header>{headerText}</Card.Header>
          <Card.Body>{bodyText}</Card.Body>
          <Card.Footer>{footerText}</Card.Footer>
        </Card>
      </View>
    </ViewGroup>;
}`,...(_=(W=y.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,A,O;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <View prop="bordered" value="true">
      <Card {...args} bordered={true}>
        <Card.Image src={imgSrc} caption="This is a beautiful image" mode="dark"></Card.Image>
        <Card.Body>{bodyText}</Card.Body>
      </Card>
    </View>;
}`,...(O=(A=b.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const ue=["Default","Colors","Sizes","Radiuses","Shadows","Bordered","Divided","Image"];export{w as Bordered,u as Colors,p as Default,y as Divided,b as Image,h as Radiuses,C as Shadows,m as Sizes,ue as __namedExportsOrder,pe as default};
//# sourceMappingURL=Card.stories-bece31bb.js.map
