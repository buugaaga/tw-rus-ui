import{q as W,t as X,_ as Y,a as u,j as r}from"./usePropId-97cc893b.js";import{r as o}from"./index-76fb7be0.js";import{E as Z,a as w,V as v}from"./View-0bd09aa3.js";import"./_commonjsHelpers-de833af9.js";const ee={animated:!1,color:"dark",radius:"md",shadow:"none",showValue:!1,size:"md",striped:!1},i=o.forwardRef((a,t)=>{const e=W("Progress"),V=X(a.id),z=`${V}-label`,k=Object.assign(Object.assign({},ee),a),{animated:S,children:ie,className:J="",color:K,description:R,label:l="",radius:L,shadow:M,showValue:f,size:n,striped:c,value:d=0}=k,Q=Y(k,["animated","children","className","color","description","label","radius","shadow","showValue","size","striped","value"]),s=o.useRef(null);o.useEffect(()=>{if(!S||!c||!(s!=null&&s.current))return;const U=s.current.animate({backgroundPosition:["0 0",e.stripe({size:n})]},{duration:2e3,iterations:1/0});return()=>{U.cancel()}},[S,c,s,n,e]),o.useEffect(()=>{if(s!=null&&s.current){if(!c)return s.current.style.backgroundSize="",void(s.current.style.backgroundImage="");s.current.style.backgroundSize=e.stripe({size:n}),s.current.style.backgroundImage="linear-gradient(-45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)"}},[s,n,c,e]);const y=n&&["xs","sm"].includes(n)?"outer":"inner";return u("div",Object.assign({id:V,ref:t,className:e.wrapper({className:J,size:n})},Q,{children:[(l||f&&y==="outer")&&u("div",Object.assign({className:e.label({size:n})},{children:[l&&r("span",Object.assign({id:z,role:"presentation"},{children:l})),f&&y==="outer"&&u("span",{children:[d,"%"]})]})),r("div",Object.assign({className:e.base({radius:L,size:n,shadow:M})},{children:r("div",Object.assign({ref:s,role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,"aria-labelledby":l?z:void 0,style:{width:`${d}%`},className:e.bar({color:K})},{children:f&&y==="inner"&&u("span",{children:[d,"%"]})}))})),R&&r("span",Object.assign({className:e.description({size:n})},{children:R}))]}))});i.displayName="Progress";i.__docgenInfo={description:"",methods:[],displayName:"Progress"};const A=["xs","sm","md","lg"],re=["none","sm","base","md","lg","full"],B=["none","sm","base","md"],H=["white","blue","red","green","yellow","purple","gray","dark","black"],me={title:"Components/Progress",component:i,argTypes:{color:{options:H,control:{type:"select"}},size:{options:A,control:{type:"select"}},shadow:{options:B,control:{type:"select"}},showValue:{default:!0,control:{type:"boolean"}},striped:{default:!0,control:{type:"boolean"}},animated:{default:!0,control:{type:"boolean"}},as:{table:{disable:!0}},ref:{table:{disable:!0}}},parameters:{controls:{expanded:!0,sort:"alpha"}}},ae=a=>r(Z,{prop:"Default",children:r(i,{...a,label:"This is a long long label",value:75})}),m=ae.bind({}),se=a=>{const t=H.map(e=>r(o.Fragment,{children:r(w,{prop:"color",value:e,direction:"column",children:o.createElement(i,{...a,key:e,color:e,label:`Color: ${e}`,value:75})})},e));return r(v,{children:t})},p=se.bind({}),oe=a=>{const t=A.map(e=>r(o.Fragment,{children:r(w,{prop:"size",value:e,direction:"column",children:o.createElement(i,{...a,key:e,size:e,label:`Size: ${e}`,value:75})})},e));return r(v,{children:t})},g=oe.bind({}),ne=a=>{const t=re.map(e=>r(o.Fragment,{children:r(w,{prop:"radius",value:e,direction:"column",children:o.createElement(i,{...a,key:e,radius:e,label:`Radius: ${e}`,value:75})})},e));return r(v,{children:t})},b=ne.bind({}),te=a=>{const t=B.map(e=>r(o.Fragment,{children:r(w,{prop:"shadow",value:e,direction:"column",children:o.createElement(i,{...a,key:e,shadow:e,label:`Shadow: ${e}`,value:75})})},e));return r(v,{children:t})},h=te.bind({});var j,E,F;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Progress {...args} label="This is a long long label" value={75} />
    </EnhancedView>;
}`,...(F=(E=m.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var N,P,x;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const items = colors.map(color => <React.Fragment key={color}>
      <View prop="color" value={color} direction="column">
        <Progress {...args} key={color} color={color} label={\`Color: \${color}\`} value={75} />
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(x=(P=p.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var O,$,G;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <React.Fragment key={size}>
      <View prop="size" value={size} direction="column">
        <Progress {...args} key={size} size={size} label={\`Size: \${size}\`} value={75} />
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(G=($=g.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var T,_,C;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <React.Fragment key={radius}>
      <View prop="radius" value={radius} direction="column">
        <Progress {...args} key={radius} radius={radius} label={\`Radius: \${radius}\`} value={75} />
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(C=(_=b.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var D,I,q;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const items = shadows.map(shadow => <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow} direction="column">
        <Progress {...args} key={shadow} shadow={shadow} label={\`Shadow: \${shadow}\`} value={75} />
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(q=(I=h.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const pe=["Default","Colors","Sizes","Radiuses","Shadows"];export{p as Colors,m as Default,b as Radiuses,h as Shadows,g as Sizes,pe as __namedExportsOrder,me as default};
//# sourceMappingURL=Progress.stories-8641d6f2.js.map
