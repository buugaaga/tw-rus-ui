import{q as Re,_ as xe,t as Ne,a as N,F as Ie,j as o}from"./usePropId-d72ac371.js";import{r as i}from"./index-76fb7be0.js";import{t as qe}from"./use-element-context.hook-2cb88967.js";import{t as Ae}from"./tw-merge-1166cefb.js";import{k as He}from"./floating-ui.react.esm-6cc99f0f.js";import{t as Je}from"./use-horizontal-arrows.hook-79ad3cdf.js";import{w as Ke}from"./Tooltip-50261324.js";import{E as Qe,V as w,a as c}from"./View-9e99ac25.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./use-keypress-dd3b0736.js";import"./arrow-side.dictionary-a51e0679.js";const[Ye,Ue]=qe("Selector compound components cannot be rendered outside the Selector component"),q=i.forwardRef((t,e)=>{const a=Re("Selector"),r=Object.assign(Object.assign({},Ue()),t),{activeTabAnchor:A,anchor:T,children:G,className:S="",color:k,disabled:h=!1,label:p,orientation:V,radius:g,separator:b,setActiveTabAnchor:z,shadow:J,size:f,tone:R,withSeparator:F}=r,B=xe(r,["activeTabAnchor","anchor","children","className","color","disabled","label","orientation","radius","separator","setActiveTabAnchor","shadow","size","tone","withSeparator"]),x=Ne(t.id),v=T===A,u=typeof p=="string"?p:void 0,I=i.useMemo(()=>Ae(a.tab({active:v,className:S,color:k,orientation:V,radius:g,size:f,tone:R})),[v,S,k,V,g,f,a,R]);return N(Ie,{children:[o("button",Object.assign({id:x,ref:e,role:"radio","aria-checked":v,"aria-label":u,onClick:()=>{z(T)},className:I,disabled:h,tabIndex:v?0:-1},B,{children:o("span",Object.assign({className:"z-40 h-full flex items-center"},{children:p}))})),F&&(b||o("span",{className:a.separator({orientation:V,size:f})}))]})});q.displayName="SelectorTab";q.__docgenInfo={description:"",methods:[],displayName:"SelectorTab"};const Xe={color:"dark",fullWidth:!1,orientation:"horizontal",radius:"md",shadow:"base",size:"md",tone:"solid",withAnimation:!0,withSeparator:!0},H=i.forwardRef((t,e)=>{const a=Re("Selector"),r=Object.assign(Object.assign({},Xe),t),{children:A,className:T="",color:G,fullWidth:S,onChange:k,orientation:h,radius:p,separator:V,shadow:g,size:b,tone:z,value:J,withAnimation:f,withSeparator:R}=r,F=xe(r,["children","className","color","fullWidth","onChange","orientation","radius","separator","shadow","size","tone","value","withAnimation","withSeparator"]),B=Ne(t.id),x=i.useRef(null),v=He([e||null,x]),[u,I]=i.useState(J),O=i.useRef(!0),y=i.useRef(null),W=i.useRef(null),[$e,_e]=i.useState(""),K=new Map,Ce=i.useMemo(()=>Ae(a.wrapper({className:T,fullWidth:S,orientation:h,radius:p,shadow:g,size:b})),[T,S,h,p,g,b,a]),Q=(d,m,Y,Me="md",so="horizontal",Pe=!0)=>{const U=d.getBoundingClientRect(),Fe=U.width,Be=U.height;m.style.setProperty("width",`${Fe}px`),m.style.setProperty("height",`${Be}px`),m.style.setProperty("top",`${d.offsetTop}px`),m.style.setProperty("left",`${d.offsetLeft}px`),_e(a.base({color:K.get(Y),size:Me,radius:p,tone:z,initialRun:Pe,withAnimation:f}))};i.useEffect(()=>{var d;if(!u)return;const m=(d=x.current)===null||d===void 0?void 0:d.querySelector('button[aria-checked="true"]');return m&&y.current?(Q(m,y.current,u,b,h,O.current),O.current=!1,W.current=new ResizeObserver(Y=>{y.current&&Q(m,y.current,u,b,h,O.current)}),W.current.observe(y.current),()=>{W.current&&W.current.disconnect()}):void 0},[u,G,S,h,p,b,z,f,R]),i.useEffect(()=>{k&&!O.current&&k(u)},[u]);const De={activeTabAnchor:u,color:G,orientation:h,radius:p,separator:V,setActiveTabAnchor:I,shadow:g,size:b,tone:z,withSeparator:R};return i.Children.map(A,d=>{K.set(d.props.anchor,d.props.color||G)}),Je(x),o(Ye,Object.assign({value:De},{children:N("div",Object.assign({id:B,ref:v,role:"radiogroup",className:Ce},F,{children:[A,o("div",{ref:y,className:$e})]}))}))});H.displayName="Selector";const n=Object.assign(H,{Tab:q});H.__docgenInfo={description:"",methods:[],displayName:"Selector"};const Ge=["xs","sm","md","lg"],Oe=["solid","light"],We=["none","sm","base","md","lg","full"],je=["none","sm","base","md","lg","xl"],Ee=[!0,!1],Le=[!0,!1],To={title:"Components/Selector",component:n,argTypes:{color:{options:Oe,control:{type:"radio"}},size:{options:Ge,control:{type:"radio"}},radius:{options:We,control:{type:"radio"}},withAnimation:{options:Ee,control:{type:"boolean"}},withSeparator:{options:Le,control:{type:"boolean"}},shadow:{options:je,control:{type:"radio"}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},X=[{label:"White",anchor:"a",color:"white"},{label:"Blue",anchor:"b",color:"blue"},{label:"Red",anchor:"c",color:"red"},{label:"Green",anchor:"d",color:"green"}],l=[{label:"White",anchor:"a",color:"white"},{label:"Blue",anchor:"b",color:"blue"},{label:"Red",anchor:"c",color:"red"},{label:"Green",anchor:"d",color:"green"},{label:"Yellow",anchor:"e",color:"yellow"},{label:"Purple",anchor:"f",color:"purple"},{label:"Gray",anchor:"g",color:"gray"},{label:"Dark",anchor:"h",color:"dark"},{label:"Black",anchor:"i",color:"black"},{label:"Disabled",anchor:"j",color:"black",disabled:!0},{label:o(Ke,{label:"This is a react node with a tooltip",tone:"solid",color:"dark",offset:15,shadow:"base",children:o("span",{className:"whitespace-nowrap underline underline-offset-2 decoration-2 decoration-pink-500",children:"React Node"})}),anchor:"k",color:"white"}];function s(t){const e=t.filter(a=>!a.disabled).map(a=>a.anchor).join("");return e[Math.floor(Math.random()*e.length)]}const Ze=t=>o(Qe,{prop:"Default",children:o(n,{...t,value:s(X),children:X.map(e=>o(n.Tab,{anchor:e.anchor,label:e.label,color:e.color,disabled:e.disabled},e.anchor))})}),j=Ze.bind({}),eo=t=>o(w,{children:Ge.map(e=>o(c,{prop:"size",value:e,children:i.createElement(n,{...t,key:e,size:e,value:s(l)},l.map(a=>o(n.Tab,{anchor:a.anchor,label:a.label,color:a.color,disabled:a.disabled},e+a.anchor)))},e))}),E=eo.bind({}),oo=t=>{const e=s(l);return o(w,{children:Oe.map(a=>o(c,{prop:"tone",value:a,children:i.createElement(n,{...t,key:a,tone:a,value:e},l.map(r=>o(n.Tab,{anchor:r.anchor,label:r.label,color:r.color,disabled:r.disabled},a+r.anchor)))},a))})},L=oo.bind({}),ao=t=>{const e=s(l);return o(w,{children:We.map(a=>o(c,{prop:"radius",value:a,children:i.createElement(n,{...t,key:a,radius:a,value:e},l.map(r=>o(n.Tab,{anchor:r.anchor,label:r.label,color:r.color,disabled:r.disabled},a+r.anchor)))},a))})},$=ao.bind({}),ro=t=>o(w,{children:je.map(e=>o(c,{prop:"shadow",value:e,children:i.createElement(n,{...t,key:e,shadow:e,value:s(l)},l.map(a=>o(n.Tab,{anchor:a.anchor,label:a.label,color:a.color,disabled:a.disabled},e+a.anchor)))},e))}),_=ro.bind({}),to=t=>o(w,{children:Ee.map((e,a)=>o(c,{prop:"animation",value:e?"true":"false",children:i.createElement(n,{...t,key:a,withAnimation:e,value:s(l)},l.map(r=>o(n.Tab,{anchor:r.anchor,label:r.label,color:r.color,disabled:r.disabled},a+r.anchor)))},a))}),C=to.bind({}),no=t=>N(w,{children:[o(c,{prop:"separator",value:"...",children:o(n,{...t,withSeparator:!0,separator:o("span",{className:"last-of-type:hidden self-center mx-1 w-1 h-1 bg-gray-200 rounded-full"}),value:s(l),children:l.map(e=>o(n.Tab,{anchor:e.anchor,label:e.label,color:e.color,disabled:e.disabled},3+e.anchor))})}),Le.map((e,a)=>o(c,{prop:"withSeparator",value:e?"true":"false",children:i.createElement(n,{...t,key:a,withSeparator:e,value:s(l)},l.map(r=>o(n.Tab,{anchor:r.anchor,label:r.label,color:r.color,disabled:r.disabled},a+r.anchor)))},a))]}),D=no.bind({}),lo=t=>N(w,{children:[o(c,{prop:"orientation",value:"horizontal",children:o(n,{...t,orientation:"horizontal",value:s(l),children:l.map(e=>o(n.Tab,{anchor:e.anchor,label:e.label,color:e.color,disabled:e.disabled},3+e.anchor))})}),o(c,{prop:"orientation",value:"vertical",children:o(n,{...t,orientation:"vertical",value:s(l),children:l.map(e=>o(n.Tab,{anchor:e.anchor,label:e.label,color:e.color,disabled:e.disabled},3+e.anchor))})})]}),M=lo.bind({}),io=t=>N(w,{children:[o(c,{prop:"fullWidth",value:"true",children:o(n,{...t,fullWidth:!0,orientation:"horizontal",withSeparator:!0,separator:o("span",{className:"last-of-type:hidden w-px h-5 rounded-full bg-gray-300"}),value:s(l),children:l.map(e=>o(n.Tab,{anchor:e.anchor,label:e.label,color:e.color,disabled:e.disabled},3+e.anchor))})}),o(c,{prop:"fullWidth",value:"true",children:o(n,{...t,fullWidth:!0,orientation:"vertical",withSeparator:!0,separator:o("span",{className:"last-of-type:hidden w-px h-5 rounded-full bg-gray-300"}),value:s(l),children:l.map(e=>o(n.Tab,{anchor:e.anchor,label:e.label,color:e.color,disabled:e.disabled},3+e.anchor))})})]}),P=io.bind({});var Z,ee,oe;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Selector {...args} value={generateRandomLetter(simpleOptions)}>
        {simpleOptions.map(option => <Selector.Tab key={option.anchor} anchor={option.anchor} label={option.label} color={option.color} disabled={option.disabled}></Selector.Tab>)}
      </Selector>
    </EnhancedView>;
}`,...(oe=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var ae,re,te;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
  return <ViewGroup>
      {sizes.map(size => <View key={size} prop="size" value={size}>
          <Selector {...args} key={size} size={size} value={generateRandomLetter(options)}>
            {options.map(option => <Selector.Tab key={size + option.anchor} anchor={option.anchor} label={option.label} color={option.color} disabled={option.disabled}></Selector.Tab>)}
          </Selector>
        </View>)}
    </ViewGroup>;
}`,...(te=(re=E.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,le,ie;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const value = generateRandomLetter(options);
  return <ViewGroup>
      {tones.map(tone => <View key={tone} prop="tone" value={tone}>
          <Selector {...args} key={tone} tone={tone} value={value}>
            {options.map(option => <Selector.Tab key={tone + option.anchor} anchor={option.anchor} label={option.label} color={option.color} disabled={option.disabled}></Selector.Tab>)}
          </Selector>
        </View>)}
    </ViewGroup>;
}`,...(ie=(le=L.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var se,ce,de;$.parameters={...$.parameters,docs:{...(se=$.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const value = generateRandomLetter(options);
  return <ViewGroup>
      {radiuses.map(radius => <View key={radius} prop="radius" value={radius}>
          <Selector {...args} key={radius} radius={radius} value={value}>
            {options.map(option => <Selector.Tab key={radius + option.anchor} anchor={option.anchor} label={option.label} color={option.color} disabled={option.disabled}></Selector.Tab>)}
          </Selector>
        </View>)}
    </ViewGroup>;
}`,...(de=(ce=$.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,he;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  return <ViewGroup>
      {shadows.map(shadow => <View key={shadow} prop="shadow" value={shadow}>
          <Selector {...args} key={shadow} shadow={shadow} value={generateRandomLetter(options)}>
            {options.map(option => <Selector.Tab key={shadow + option.anchor} anchor={option.anchor} label={option.label} color={option.color} disabled={option.disabled}></Selector.Tab>)}
          </Selector>
        </View>)}
    </ViewGroup>;
}`,...(he=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var be,me,we;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`args => {
  return <ViewGroup>
      {animations.map((animation, index) => <View key={index} prop="animation" value={animation ? "true" : "false"}>
          <Selector {...args} key={index} withAnimation={animation} value={generateRandomLetter(options)}>
            {options.map(option => <Selector.Tab key={index + option.anchor} anchor={option.anchor} label={option.label} color={option.color} disabled={option.disabled}></Selector.Tab>)}
          </Selector>
        </View>)}
    </ViewGroup>;
}`,...(we=(me=C.parameters)==null?void 0:me.docs)==null?void 0:we.source}}};var Se,ge,fe;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`args => {
  return <ViewGroup>
      <View prop="separator" value="...">
        <Selector {...args} withSeparator={true} separator={<span className="last-of-type:hidden self-center mx-1 w-1 h-1 bg-gray-200 rounded-full" />} value={generateRandomLetter(options)}>
          {options.map(option => <Selector.Tab key={3 + option.anchor} anchor={option.anchor} label={option.label} color={option.color} disabled={option.disabled}></Selector.Tab>)}
        </Selector>
      </View>

      {separators.map((separator, index) => <View key={index} prop="withSeparator" value={separator ? "true" : "false"}>
          <Selector {...args} key={index} withSeparator={separator} value={generateRandomLetter(options)}>
            {options.map(option => <Selector.Tab key={index + option.anchor} anchor={option.anchor} label={option.label} color={option.color} disabled={option.disabled}></Selector.Tab>)}
          </Selector>
        </View>)}
    </ViewGroup>;
}`,...(fe=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ve,ye,Te;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`args => {
  return <ViewGroup>
      <View prop="orientation" value="horizontal">
        <Selector {...args} orientation="horizontal" value={generateRandomLetter(options)}>
          {options.map(option => <Selector.Tab key={3 + option.anchor} anchor={option.anchor} label={option.label} color={option.color} disabled={option.disabled}></Selector.Tab>)}
        </Selector>
      </View>

      <View prop="orientation" value="vertical">
        <Selector {...args} orientation="vertical" value={generateRandomLetter(options)}>
          {options.map(option => <Selector.Tab key={3 + option.anchor} anchor={option.anchor} label={option.label} color={option.color} disabled={option.disabled}></Selector.Tab>)}
        </Selector>
      </View>
    </ViewGroup>;
}`,...(Te=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var ke,Ve,ze;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`args => {
  return <ViewGroup>
      <View prop="fullWidth" value="true">
        <Selector {...args} fullWidth={true} orientation="horizontal" withSeparator={true} separator={<span className="last-of-type:hidden w-px h-5 rounded-full bg-gray-300" />} value={generateRandomLetter(options)}>
          {options.map(option => <Selector.Tab key={3 + option.anchor} anchor={option.anchor} label={option.label} color={option.color} disabled={option.disabled}></Selector.Tab>)}
        </Selector>
      </View>

      <View prop="fullWidth" value="true">
        <Selector {...args} fullWidth={true} orientation="vertical" withSeparator={true} separator={<span className="last-of-type:hidden w-px h-5 rounded-full bg-gray-300" />} value={generateRandomLetter(options)}>
          {options.map(option => <Selector.Tab key={3 + option.anchor} anchor={option.anchor} label={option.label} color={option.color} disabled={option.disabled}></Selector.Tab>)}
        </Selector>
      </View>
    </ViewGroup>;
}`,...(ze=(Ve=P.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};const ko=["Default","Sizes","Tones","Radiuses","Shadows","Animation","Separator","Orientation","FullWidth"];export{C as Animation,j as Default,P as FullWidth,M as Orientation,$ as Radiuses,D as Separator,_ as Shadows,E as Sizes,L as Tones,ko as __namedExportsOrder,To as default};
//# sourceMappingURL=Selector.stories-6555d1d2.js.map
