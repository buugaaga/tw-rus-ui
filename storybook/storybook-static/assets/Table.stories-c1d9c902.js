import{_ as u,q as b,t as y,j as e,a as F}from"./usePropId-d72ac371.js";import{t as ee}from"./use-element-context.hook-2cb88967.js";import{r as p}from"./index-76fb7be0.js";import{k as re}from"./floating-ui.react.esm-6cc99f0f.js";import{E as oe,a as Q,V as W}from"./View-9e99ac25.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";const[se,B]=ee("Table compound components cannot be rendered outside the Table component"),ae={},V=p.forwardRef((o,r)=>{const s=Object.assign(Object.assign({},ae),o),{className:n,children:c}=s,a=u(s,["className","children"]),{borderStyle:l,horizontalBorders:t,size:d}=B(),m=b("Table"),h=y(o.id);return e("tbody",Object.assign({id:h,ref:r,className:m.tbody({borderStyle:l,horizontalBorders:t,size:d})},a,{children:c}))});V.displayName="Tbody";V.__docgenInfo={description:"",methods:[],displayName:"Tbody"};const te={},k=p.forwardRef((o,r)=>{const s=Object.assign(Object.assign({},te),o),{className:n,children:c}=s,a=u(s,["className","children"]),l=b("Table"),t=y(o.id),{size:d}=B();return e("td",Object.assign({id:t,ref:r,className:l.td({className:n,size:d})},a,{children:c}))});k.displayName="Td";k.__docgenInfo={description:"",methods:[],displayName:"Td"};const de={},P=p.forwardRef((o,r)=>{const s=Object.assign(Object.assign({},de),o),{className:n,children:c}=s,a=u(s,["className","children"]),{borderStyle:l,footerBorders:t,size:d}=B(),m=b("Table"),h=y(o.id);return e("tfoot",Object.assign({id:h,ref:r,className:m.tfoot({borderStyle:l,footerBorders:t,size:d})},a,{children:c}))});P.displayName="Tfoot";P.__docgenInfo={description:"",methods:[],displayName:"Tfoot"};const ie={},E=p.forwardRef((o,r)=>{const s=Object.assign(Object.assign({},ie),o),{className:n,children:c}=s,a=u(s,["className","children"]),l=b("Table"),t=y(o.id),{size:d}=B();return e("th",Object.assign({id:t,ref:r,className:l.th({className:n,size:d})},a,{children:c}))});E.displayName="Th";E.__docgenInfo={description:"",methods:[],displayName:"Th"};const ne={},$=p.forwardRef((o,r)=>{const s=Object.assign(Object.assign({},ne),o),{className:n,children:c}=s,a=u(s,["className","children"]),{borderStyle:l,headerBorders:t,headerColor:d,size:m}=B(),h=b("Table"),f=y(o.id);return e("thead",Object.assign({id:f,ref:r,className:h.thead({borderStyle:l,headerBorders:t,headerColor:d,size:m})},a,{children:c}))});$.displayName="Thead";$.__docgenInfo={description:"",methods:[],displayName:"Thead"};const ce={color:"none"},x=p.forwardRef((o,r)=>{const s=Object.assign(Object.assign({},ce),o),{className:n,children:c,color:a}=s,l=u(s,["className","children","color"]),{borderStyle:t,verticalBorders:d,hoverable:m,striped:h,stripePosition:f}=B(),g=b("Table"),T=p.useRef(null),z=re([T,r||null]),_=y(o.id),[R,C]=p.useState(g.tr({borderStyle:t,verticalBorders:d,className:n,color:a,hoverable:m,striped:h}));return p.useEffect(()=>{var v,N;const j=(N=(v=T==null?void 0:T.current)===null||v===void 0?void 0:v.parentElement)===null||N===void 0?void 0:N.tagName;C(g.tr({borderStyle:t,verticalBorders:d,className:n,color:a,hoverable:j==="TBODY"&&m,striped:j==="TBODY"&&h,stripePosition:f}))},[t,n,a,m,h,f,g,d]),e("tr",Object.assign({id:_,ref:z,className:R},l,{children:c}))});x.displayName="Tr";x.__docgenInfo={description:"",methods:[],displayName:"Tr"};const le={borderStyle:"solid",footerBorders:!0,headerBorders:!0,headerColor:"gray",horizontalBorders:!0,hoverable:!0,outerBorders:!0,radius:"lg",size:"md",striped:!0,stripePosition:"even",verticalBorders:!1},D=p.forwardRef((o,r)=>{const s=Object.assign(Object.assign({},le),o),{borderStyle:n,children:c,className:a,color:l,footerBorders:t,headerBorders:d,headerColor:m,horizontalBorders:h,hoverable:f,outerBorders:g,radius:T,size:z,striped:_,stripePosition:R,verticalBorders:C}=s,v=u(s,["borderStyle","children","className","color","footerBorders","headerBorders","headerColor","horizontalBorders","hoverable","outerBorders","radius","size","striped","stripePosition","verticalBorders"]),N=b("Table"),j=y(o.id);return e(se,Object.assign({value:{borderStyle:n,footerBorders:t,headerBorders:d,headerColor:m,horizontalBorders:h,hoverable:f,outerBorders:g,size:z,striped:_,stripePosition:R,verticalBorders:C}},{children:e("div",Object.assign({id:j,ref:r,className:N.wrapper({borderStyle:n,className:a,outerBorders:g,radius:T})},v,{children:e("table",Object.assign({className:N.table({radius:T,size:z})},{children:c}))}))}))});D.displayName="Table";const i=Object.assign(D,{Thead:$,Tbody:V,Tfoot:P,Tr:x,Th:E,Td:k});D.__docgenInfo={description:"",methods:[],displayName:"Table"};const G=["ID","Country","Code","City"],pe=[{id:1,country:"Portugal",code:"PT",city:"Foz do Arelho"},{id:2,country:"Brazil",code:"BR",city:"Cruz Alta"},{id:3,country:"Belarus",code:"BY",city:"Veyno"},{id:4,country:"China",code:"CN",city:"Shangjiangxu"},{id:5,country:"Sweden",code:"SE",city:"Örnsköldsvik"},{id:6,country:"Japan",code:"JP",city:"Shibetsu"},{id:7,country:"Norway",code:"NO",city:"Oslo"},{id:8,country:"United States",code:"US",city:"Los Angeles"},{id:9,country:"Ukraine",code:"UA",city:"Truskavets"},{id:10,country:"Netherlands",code:"NL",city:"Hellevoetsluis"}],me=["solid","dashed"],he=["white","gray","dark","black"],X=["sm","md","lg"],Z=["none","sm","base","md","lg"],Se={title:"Components/Table",component:i,argTypes:{borderStyle:{options:me,control:{type:"radio"}},headerColor:{options:he,control:{type:"radio"}},size:{options:X,control:{type:"radio"}},radius:{options:Z,control:{type:"select"}},footerBorders:{options:[!0,!1],control:{type:"boolean"}},headerBorders:{options:[!0,!1],control:{type:"boolean"}},horizontalBorders:{options:[!0,!1],control:{type:"boolean"}},hoverable:{options:[!0,!1],control:{type:"boolean"}},outerBorders:{options:[!0,!1],control:{type:"boolean"}},striped:{options:[!0,!1],control:{type:"boolean"}},verticalBorders:{options:[!0,!1],control:{type:"boolean"}},ref:{table:{disable:!0}}},parameters:{backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"},{name:"dark",value:"#334155"}]},controls:{expanded:!0,sort:"alpha"}}},I=o=>F(i,{...o,children:[e(i.Thead,{children:e(i.Tr,{children:G.map(r=>e(i.Th,{children:r},r))})}),e(i.Tbody,{children:pe.map(r=>F(i.Tr,{children:[e(i.Td,{align:"center",children:r.id}),e(i.Td,{children:r.country}),e(i.Td,{children:r.code}),e(i.Td,{children:r.city})]},r.id))}),e(i.Tfoot,{children:e(i.Tr,{children:G.map(r=>e(i.Td,{align:"center",children:r},r))})})]}),ue=o=>e(oe,{prop:"Default",children:e(I,{...o})}),S=ue.bind({}),be=o=>{const r=X.map(s=>e(p.Fragment,{children:e(Q,{prop:"size",value:s,children:e(I,{...o,size:s})})},s));return e(W,{children:r})},O=be.bind({}),ye=o=>{const r=Z.map(s=>e(p.Fragment,{children:e(Q,{prop:"radius",value:s,children:e(I,{...o,radius:s})})},s));return e(W,{children:r})},w=ye.bind({});var A,U,Y;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <EnhancedView prop="Default">
      <Template {...args} />
    </EnhancedView>;
}`,...(Y=(U=S.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var J,L,q;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const items = sizes.map(size => <React.Fragment key={size}>
      <View prop="size" value={size}>
        <Template {...args} size={size} />
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(q=(L=O.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var H,M,K;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const items = radiuses.map(radius => <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        <Template {...args} radius={radius} />
      </View>
    </React.Fragment>);
  return <ViewGroup>{items}</ViewGroup>;
}`,...(K=(M=w.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};const Oe=["Default","Sizes","Radiuses"];export{S as Default,w as Radiuses,O as Sizes,Oe as __namedExportsOrder,Se as default};
//# sourceMappingURL=Table.stories-c1d9c902.js.map