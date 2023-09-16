import{j as e}from"./usePropId-d72ac371.js";import{c as a}from"./Text-1d222789.js";import{r as s}from"./index-76fb7be0.js";import{E as P,a as i,V as o}from"./View-9e99ac25.js";import"./variant.context-7223bf5a.js";import"./_commonjsHelpers-de833af9.js";const w="The cat lazily stretched out on the sun-soaked windowsill, basking in the warmth of the afternoon sun.",V="The sun slowly rose over the horizon, casting a warm glow across the peaceful meadow. The flowers swayed gently in the breeze, their sweet fragrance filling the air. A group of birds chirped happily in the distance, their melodies creating a beautiful symphony. In the distance, a lone figure could be seen walking along the path, lost in thought. As the morning continued, the world around them came to life, with animals scurrying about and the gentle hum of insects buzzing in the air. It was a perfect day, filled with promise and possibility.",q=["white","blue","red","green","yellow","purple","gray","dark","black"],J=["thin","extraLight","light","normal","medium","semiBold","bold","extraBold","black"],K=["xs","sm","base","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"],M=["d1","d2","d3","d4","h1","h2","h3","h4","h5","h6","p"],Q=["3","4","5","6","7","8","9","10","none","tight","snug","normal","relaxed","loose"],U=["tighter","tight","normal","wide","wider","widest"],X={variants:{d1:"Display 1",d2:"Display 2",d3:"Display 3",d4:"Display 4",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6",p:"Paragraph"}},me={title:"Components/Text",component:a,argTypes:{variant:{options:M,control:{type:"select"}},color:{options:q,control:{type:"select"}},weight:{options:J,control:{type:"select"}},size:{options:K,control:{type:"select"}},tracking:{options:U,control:{type:"select"}},leading:{options:Q,control:{type:"select"}},as:{table:{disable:!0}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},Y=n=>e(P,{prop:"Default",children:e(a,{...n,children:V})}),c=Y.bind({}),Z=n=>{const t=M.map(r=>e(s.Fragment,{children:e(i,{prop:"variant",value:r,children:e(a,{...n,variant:r,children:X.variants[r]})})},r));return e(o,{children:t})},l=Z.bind({}),$=n=>{const t=q.map(r=>e(s.Fragment,{children:e(i,{prop:"color",value:r,children:e(a,{...n,color:r,children:w})})},r));return e(o,{children:t})},p=$.bind({}),ee=n=>{const t=K.map(r=>e(s.Fragment,{children:e(i,{prop:"size",value:r,children:e(a,{...n,size:r,children:w})})},r));return e(o,{children:t})},m=ee.bind({}),re=n=>{const t=J.map(r=>e(s.Fragment,{children:e(i,{prop:"weight",value:r,children:e(a,{...n,weight:r,children:w})})},r));return e(o,{children:t})},d=re.bind({}),ne=n=>{const t=Q.map(r=>e(s.Fragment,{children:e(i,{prop:"leading",value:r,children:e(a,{...n,leading:r,children:V})})},r));return e(o,{children:t})},g=ne.bind({}),te=n=>{const t=U.map(r=>e(s.Fragment,{children:e(i,{prop:"tracking",value:r,children:e(a,{...n,tracking:r,children:V})})},r));return e(o,{children:t})},h=te.bind({}),ae=n=>{const r=["underline decoration-2 decoration-sky-500"].map(x=>e(s.Fragment,{children:e(P,{prop:"className",value:x,children:e(a,{...n,size:"xl",className:x,children:w})})},x));return e(o,{children:r})},u=ae.bind({});var T,y,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Text {...args}>{longText}</Text>
    </EnhancedView>;
}`,...(k=(y=c.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var v,b,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const items = variants.map(variant => <React.Fragment key={variant}>
      <View prop="variant" value={variant}>
        <Text {...args} variant={variant}>
          {glossaries.variants[variant]}
        </Text>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var F,z,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color}>
        <Text {...args} color={color}>
          {shortSentence}
        </Text>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(S=(z=p.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var G,R,E;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <React.Fragment key={size}>
      <View prop="size" value={size}>
        <Text {...args} size={size}>
          {shortSentence}
        </Text>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var D,N,H;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const items = weights.map(weight => <React.Fragment key={weight}>
      <View prop="weight" value={weight}>
        <Text {...args} weight={weight}>
          {shortSentence}
        </Text>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(H=(N=d.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var C,L,W;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const items = leadings.map(leading => <React.Fragment key={leading}>
      <View prop="leading" value={leading}>
        <Text {...args} leading={leading}>
          {longText}
        </Text>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(W=(L=g.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var j,A,B;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const items = trackings.map(tracking => <React.Fragment key={tracking}>
      <View prop="tracking" value={tracking}>
        <Text {...args} tracking={tracking}>
          {longText}
        </Text>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(B=(A=h.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var I,_,O;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const classNames = ["underline decoration-2 decoration-sky-500"];
  const items = classNames.map(className => <React.Fragment key={className}>
      <EnhancedView prop="className" value={className}>
        <Text {...args} size="xl" className={className}>
          {shortSentence}
        </Text>
      </EnhancedView>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(O=(_=u.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const de=["Default","Variants","Colors","Sizes","Weights","Leading","Tracking","Examples"];export{p as Colors,c as Default,u as Examples,g as Leading,m as Sizes,h as Tracking,l as Variants,d as Weights,de as __namedExportsOrder,me as default};
//# sourceMappingURL=Text.stories-519047b0.js.map
