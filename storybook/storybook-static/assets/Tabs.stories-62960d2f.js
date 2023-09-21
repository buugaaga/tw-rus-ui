import{q as E,_ as W,j as a,F as Ta,t as ia,a as i}from"./usePropId-97cc893b.js";import{b as $}from"./Card-22106150.js";import{t as ga}from"./use-element-context.hook-714f7c36.js";import{r as l}from"./index-76fb7be0.js";import{t as la}from"./tw-merge-1166cefb.js";import{t as fa}from"./use-horizontal-arrows.hook-79ad3cdf.js";import{E as G,a as f,V as u}from"./View-0bd09aa3.js";import{h as ya,o as wa,i as Ca,g as $a}from"./Sparkle.es-98d9ef20.js";import"./Image-ba5545c6.js";import"./_commonjsHelpers-de833af9.js";import"./use-keypress-dd3b0736.js";import"./IconBase.es-33536b25.js";const[ka,ba]=ga("Tabs compound components cannot be rendered outside the Tabs component"),S=l.forwardRef((s,e)=>{const o=E("Tabs"),{anchor:r,children:n,className:b}=s,d=W(s,["anchor","children","className"]),{activeTabAnchor:T,baseId:m,color:h,fullWidth:p,radius:w,setActiveTabAnchor:F,size:g,tone:C}=Object.assign({},ba()),R=`tab-${m}-${r}`,_=`tabpanel-${m}-${r}`,j=r===T,A=j?"active":"inactive",ua=l.useMemo(()=>la(o.tab({className:b,color:h,fullWidth:p,radius:w,size:g,state:A,tone:C})),[b,h,p,w,g,A,o,C]);return a("button",Object.assign({id:R,ref:e,type:"button",role:"tab","aria-selected":j,"aria-controls":_,tabIndex:j?0:-1,onClick:()=>{F(r)},className:ua},d,{children:n}))});S.displayName="Tab";S.__docgenInfo={description:"",methods:[],displayName:"Tab"};const da=s=>{const{activeTabAnchor:e,baseId:o,method:r}=ba(),{anchor:n,children:b}=s,d=W(s,["anchor","children"]),T=`tabpanel-${o}-${n}`,m=`tab-${o}-${n}`,h=n===e,p=a("div",Object.assign({id:T,style:{display:h?"block":"none"},role:"tabpanel","aria-labelledby":m,"aria-hidden":!h},d,{children:b}));return r==="unmount"?h?p:a(Ta,{}):p};da.displayName="TabContent";const ha=s=>{const{children:e,className:o=""}=s,r=W(s,["children","className"]),n=l.useRef(null),b=E("Tabs"),d=ia(s.id);return fa(n),a("div",Object.assign({id:d,ref:n,role:"tablist","aria-orientation":"horizontal",className:la(b.list({className:o}))},r,{children:e}))};ha.displayName="TabList";const Va={color:"dark",method:"hide",radius:"none",size:"md",tone:"line"},I=l.forwardRef((s,e)=>{const o=Object.assign(Object.assign({},Va),s),{children:r,color:n,defaultTab:b,fullWidth:d,method:T,radius:m,size:h,tone:p}=o,w=W(o,["children","color","defaultTab","fullWidth","method","radius","size","tone"]),F=E("Tabs"),g=ia(s.id),[C,R]=l.useState(b);return a(ka,Object.assign({value:{activeTabAnchor:C,baseId:g,color:n,fullWidth:d,method:T,radius:m,setActiveTabAnchor:R,size:h,tone:p}},{children:a("div",Object.assign({id:g,ref:e,className:F.wrapper({fullWidth:d})},w,{children:r}))}))});I.displayName="Tabs";const t=Object.assign(I,{Tab:S,List:ha,Content:da});I.__docgenInfo={description:"",methods:[],displayName:"Tabs"};const O=["blue","red","green","yellow","purple","gray","dark","black"],y=["line","pill"],pa=["sm","md","lg"],ma=["none","sm","base","md","lg","full"],c=[{anchor:"tab-1",label:"Introduction",icon:a(ya,{weight:"duotone",className:"text-blue-500"}),content:"tw-rus-ui is a React component library that provides a set of accessible, reusable, and customizable components to help you build your next project. We've designed our components to be flexible and easy to use, so you can focus on what matters most: building great user experiences."},{anchor:"tab-2",label:"Getting started",icon:a(wa,{weight:"duotone",className:"text-blue-500"}),content:"Getting started with tw-rus-ui is easy! Simply install the package using your package manager of choice, and you're ready to go. We've also included a set of Storybook stories to help you get familiar with our components and how to use them."},{anchor:"tab-3",label:"Contribute",icon:a(Ca,{weight:"duotone",className:"text-blue-500"}),content:"We're always looking for new contributors to help us improve tw-rus-ui UI! If you'd like to contribute, please check out our contribution guidelines to get started. We're looking forward to working with you!"},{anchor:"tab-4",label:"Information",icon:a($a,{weight:"duotone",className:"text-blue-500"}),content:"If you'd like to learn more about tw-rus-ui, please visit our website. You can also follow us on Twitter to stay up to date with the latest news and updates."}],qa={title:"Components/Tabs",component:t,argTypes:{color:{options:O,control:{type:"radio"}},tone:{options:y,control:{type:"radio"}},size:{options:pa,control:{type:"radio"}},radius:{options:ma,control:{type:"select"}},fullWidth:{options:[!0,!1],control:{type:"boolean"}},ref:{table:{disable:!0}}},parameters:{backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"},{name:"dark",value:"#334155"}]},controls:{expanded:!0,sort:"alpha"}}},va=s=>a(G,{prop:"Default",children:i(t,{...s,defaultTab:"tab-1",children:[a(t.List,{children:c.map(e=>a(t.Tab,{anchor:e.anchor,children:e.label},`tab-${e.anchor}`))}),c.map(e=>a(t.Content,{anchor:e.anchor,children:e.content},`content-${e.anchor}`))]})}),k=va.bind({}),Na=s=>{const e=O.map(o=>a(l.Fragment,{children:a(f,{prop:"color",value:o,children:y.map(r=>i(t,{...s,tone:r,color:o,defaultTab:"tab-1",children:[a(t.List,{children:c.map(n=>a(t.Tab,{anchor:n.anchor,children:n.label},`tab-${n.anchor}`))}),c.map(n=>a(t.Content,{anchor:n.anchor,children:n.content},`content-${n.anchor}`))]},r))})},o));return a(u,{children:e})},V=Na.bind({}),xa=s=>{const e=y.map(o=>a(l.Fragment,{children:a(f,{prop:"tone",value:o,children:O.map(r=>i(t,{...s,tone:o,color:r,defaultTab:"tab-1",children:[a(t.List,{children:c.map(n=>a(t.Tab,{anchor:n.anchor,children:n.label},`tab-${n.anchor}`))}),c.map(n=>a(t.Content,{anchor:n.anchor,children:n.content},`content-${n.anchor}`))]},r))})},o));return a(u,{children:e})},v=xa.bind({}),La=s=>{const e=pa.map(o=>a(l.Fragment,{children:a(f,{prop:"size",value:o,children:y.map(r=>i(t,{...s,tone:r,size:o,defaultTab:"tab-1",children:[a(t.List,{children:c.map(n=>a(t.Tab,{anchor:n.anchor,children:n.label},`tab-${n.anchor}`))}),c.map(n=>a(t.Content,{anchor:n.anchor,children:n.content},`content-${n.anchor}`))]},r))})},o));return a(u,{children:e})},N=La.bind({}),za=s=>{const e=ma.map(o=>a(l.Fragment,{children:a(f,{prop:"radius",value:o,children:i(t,{...s,tone:"pill",radius:o,defaultTab:"tab-1",children:[a(t.List,{children:c.map(r=>a(t.Tab,{anchor:r.anchor,children:r.label},`tab-${r.anchor}`))}),c.map(r=>a(t.Content,{anchor:r.anchor,children:r.content},`content-${r.anchor}`))]})})},o));return a(u,{children:e})},x=za.bind({}),Wa=s=>{const e=[!0,!1].map(o=>a(l.Fragment,{children:a(f,{prop:"fullWidth",value:o?"true":"false",children:y.map(r=>i(t,{...s,tone:r,fullWidth:o,defaultTab:"tab-1",children:[a(t.List,{children:c.map(n=>a(t.Tab,{anchor:n.anchor,children:n.label},`tab-${n.anchor}`))}),c.map(n=>a(t.Content,{anchor:n.anchor,children:n.content},`content-${n.anchor}`))]},r))})},o?"1":"2"));return a(u,{children:e})},L=Wa.bind({}),Fa=s=>i(u,{children:[a(G,{prop:"Content in Cards",children:i(t,{...s,defaultTab:"tab-1",children:[a(t.List,{children:c.map(e=>i(t.Tab,{anchor:e.anchor,className:"flex items-center gap-x-2",children:[e.icon," ",e.label]},`tab-${e.anchor}`))}),c.map(e=>a(t.Content,{anchor:e.anchor,children:a($,{children:a($.Body,{children:e.content})})},`content-${e.anchor}`))]})}),a(G,{prop:"Tabs in Card",children:a($,{shadow:"base",children:a($.Body,{className:"p-0",children:i(t,{tone:"line",fullWidth:!0,...s,defaultTab:"tab-1",children:[a(t.List,{className:"m-0 p-0 bg-gray-100/50",children:c.map(e=>i(t.Tab,{anchor:e.anchor,className:"py-3.5 flex items-center gap-x-2",children:[e.icon," ",e.label]},`tab-${e.anchor}`))}),c.map(e=>a(t.Content,{anchor:e.anchor,className:"p-5",children:e.content},`content-${e.anchor}`))]})})})})]}),z=Fa.bind({});var B,D,M;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Tabs {...args} defaultTab="tab-1">
        <Tabs.List>
          {tabs.map(tab => <Tabs.Tab key={\`tab-\${tab.anchor}\`} anchor={tab.anchor}>
              {tab.label}
            </Tabs.Tab>)}
        </Tabs.List>

        {tabs.map(tab => <Tabs.Content key={\`content-\${tab.anchor}\`} anchor={tab.anchor}>
            {tab.content}
          </Tabs.Content>)}
      </Tabs>
    </EnhancedView>;
}`,...(M=(D=k.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var q,U,Y;V.parameters={...V.parameters,docs:{...(q=V.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map(tone => <Tabs key={tone} {...args} tone={tone} color={color} defaultTab="tab-1">
            <Tabs.List>
              {tabs.map(tab => <Tabs.Tab key={\`tab-\${tab.anchor}\`} anchor={tab.anchor}>
                  {tab.label}
                </Tabs.Tab>)}
            </Tabs.List>

            {tabs.map(tab => <Tabs.Content key={\`content-\${tab.anchor}\`} anchor={tab.anchor}>
                {tab.content}
              </Tabs.Content>)}
          </Tabs>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(Y=(U=V.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var H,J,K;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const items = tones.map(tone => <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map(color => <Tabs key={color} {...args} tone={tone} color={color} defaultTab="tab-1">
            <Tabs.List>
              {tabs.map(tab => <Tabs.Tab key={\`tab-\${tab.anchor}\`} anchor={tab.anchor}>
                  {tab.label}
                </Tabs.Tab>)}
            </Tabs.List>

            {tabs.map(tab => <Tabs.Content key={\`content-\${tab.anchor}\`} anchor={tab.anchor}>
                {tab.content}
              </Tabs.Content>)}
          </Tabs>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,X;N.parameters={...N.parameters,docs:{...(P=N.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map(tone => <Tabs key={tone} {...args} tone={tone} size={size} defaultTab="tab-1">
            <Tabs.List>
              {tabs.map(tab => <Tabs.Tab key={\`tab-\${tab.anchor}\`} anchor={tab.anchor}>
                  {tab.label}
                </Tabs.Tab>)}
            </Tabs.List>

            {tabs.map(tab => <Tabs.Content key={\`content-\${tab.anchor}\`} anchor={tab.anchor}>
                {tab.content}
              </Tabs.Content>)}
          </Tabs>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(X=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,aa,ea;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        <Tabs {...args} tone="pill" radius={radius} defaultTab="tab-1">
          <Tabs.List>
            {tabs.map(tab => <Tabs.Tab key={\`tab-\${tab.anchor}\`} anchor={tab.anchor}>
                {tab.label}
              </Tabs.Tab>)}
          </Tabs.List>

          {tabs.map(tab => <Tabs.Content key={\`content-\${tab.anchor}\`} anchor={tab.anchor}>
              {tab.content}
            </Tabs.Content>)}
        </Tabs>
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(ea=(aa=x.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var na,ta,oa;L.parameters={...L.parameters,docs:{...(na=L.parameters)==null?void 0:na.docs,source:{originalSource:`args => {
  const items = [true, false].map(fullWidth => <React.Fragment key={fullWidth ? '1' : '2'}>
      <View prop="fullWidth" value={fullWidth ? 'true' : 'false'}>
        {tones.map(tone => <Tabs key={tone} {...args} tone={tone} fullWidth={fullWidth} defaultTab="tab-1">
            <Tabs.List>
              {tabs.map(tab => <Tabs.Tab key={\`tab-\${tab.anchor}\`} anchor={tab.anchor}>
                  {tab.label}
                </Tabs.Tab>)}
            </Tabs.List>

            {tabs.map(tab => <Tabs.Content key={\`content-\${tab.anchor}\`} anchor={tab.anchor}>
                {tab.content}
              </Tabs.Content>)}
          </Tabs>)}
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(oa=(ta=L.parameters)==null?void 0:ta.docs)==null?void 0:oa.source}}};var ra,sa,ca;z.parameters={...z.parameters,docs:{...(ra=z.parameters)==null?void 0:ra.docs,source:{originalSource:`args => {
  return <ViewGroup>
      <EnhancedView prop="Content in Cards">
        <Tabs {...args} defaultTab="tab-1">
          <Tabs.List>
            {tabs.map(tab => <Tabs.Tab key={\`tab-\${tab.anchor}\`} anchor={tab.anchor} className="flex items-center gap-x-2">
                {tab.icon} {tab.label}
              </Tabs.Tab>)}
          </Tabs.List>

          {tabs.map(tab => <Tabs.Content key={\`content-\${tab.anchor}\`} anchor={tab.anchor}>
              <Card>
                <Card.Body>{tab.content}</Card.Body>
              </Card>
            </Tabs.Content>)}
        </Tabs>
      </EnhancedView>

      <EnhancedView prop="Tabs in Card">
        <Card shadow="base">
          <Card.Body className="p-0">
            <Tabs tone="line" fullWidth={true} {...args} defaultTab="tab-1">
              <Tabs.List className="m-0 p-0 bg-gray-100/50">
                {tabs.map(tab => <Tabs.Tab key={\`tab-\${tab.anchor}\`} anchor={tab.anchor} className="py-3.5 flex items-center gap-x-2">
                    {tab.icon} {tab.label}
                  </Tabs.Tab>)}
              </Tabs.List>

              {tabs.map(tab => <Tabs.Content key={\`content-\${tab.anchor}\`} anchor={tab.anchor} className="p-5">
                  {tab.content}
                </Tabs.Content>)}
            </Tabs>
          </Card.Body>
        </Card>
      </EnhancedView>
    </ViewGroup>;
}`,...(ca=(sa=z.parameters)==null?void 0:sa.docs)==null?void 0:ca.source}}};const Ua=["Default","Colors","Tones","Sizes","Radiuses","FullWidth","Examples"];export{V as Colors,k as Default,z as Examples,L as FullWidth,x as Radiuses,N as Sizes,v as Tones,Ua as __namedExportsOrder,qa as default};
//# sourceMappingURL=Tabs.stories-62960d2f.js.map
