import{q as _,_ as W,t as E,j as i,a as $}from"./usePropId-d72ac371.js";import{t as k}from"./FormControl.context-30bba26b.js";import{t as q}from"./InputGroup.context-30bba26b.js";import{r}from"./index-76fb7be0.js";import{a as L}from"./Spinner-6f5ac021.js";import{t as M}from"./tw-merge-1166cefb.js";const C={color:"dark",disabled:!1,loading:!1,radius:"md",shadow:"none",size:"md",tone:"light",validation:"none",withRing:!0},u=r.forwardRef((c,z)=>{const s=_("Input"),g=Object.assign(Object.assign(Object.assign(Object.assign({},C),k()),q()),c),{className:h="",color:N,controlId:O,leftIcon:o,loading:e,radius:I,rightIcon:t,shadow:b,size:a,tone:n,type:l="text",validation:f,withRing:j}=g,y=W(g,["className","color","controlId","leftIcon","loading","radius","rightIcon","shadow","size","tone","type","validation","withRing"]),R=E(c.id),v=O||R,d=!!o,p=!!t,m=c.disabled||e,x=r.useMemo(()=>M(s.base({className:h,color:N,disabled:m,hasLeftIcon:d,hasRightIcon:p,loading:e,radius:I,shadow:b,size:a,tone:n,type:l,validation:f,withRing:j})),[h,N,m,d,p,e,I,b,a,s,n,l,f,j]),w=i("input",Object.assign({id:v,type:l,ref:z,className:x},y,{disabled:m}));return d||p||e?$("div",Object.assign({className:s.wrapper()},{children:[o&&i("span",Object.assign({className:s.leftIconWrapper({size:a})},{children:r.cloneElement(o,{className:s.icon({tone:n,size:a,className:o.props.className})})})),w,t&&!e&&i("span",Object.assign({className:s.rightIconWrapper({size:a})},{children:r.cloneElement(t,{className:s.icon({tone:n,size:a,className:t.props.className})})})),e&&i("span",Object.assign({className:s.rightIconWrapper({size:a})},{children:i(L,{size:a,color:"gray"})}))]})):w});u.displayName="Input";u.__docgenInfo={description:"",methods:[],displayName:"Input"};export{u as g};
//# sourceMappingURL=Input-f4ca4156.js.map
