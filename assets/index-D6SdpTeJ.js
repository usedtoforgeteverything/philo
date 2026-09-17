import{p as mt,u as ht,i as J,g as u,t as ie,r as Pt,l as j,b as gt,s as D,v as x,n as w,c as P,e as Q,m as K,j as ee,o as ne,d as xt,h as An,k as Y,w as zi,a as Le,x as Xi,$ as Vn,y as Zi,f as Oe,z as En,A as Pe,B as es,C as ts,I as ns,D as is,q as ss}from"./Installation-i323GCGm.js";import{p as je,b as oi,a as rs,d as as,m as os,c as ls,A as cs,h as us,r as fs,C as un,e as hs,B as ds,f as xe,s as ps,G as ms,g as Kt,i as li,N as gs,j as bs,k as ys,R as vs,l as _s,n as ws,o as Gn,q as ks,t as Ss,u as Ns,v as Os,w as As,x as Es,y as Ls,z as Ts,D as Is,E as Cs,F as qs,H as Ms,I as Ps,P as js,S as Bs,J as Ds,K as Rs,L as Hn}from"./Reglages-BcYI-lp9.js";import{a as jt}from"./features-DfOghPAs.js";var Ks=K('<label class="memoriser svelte-odrj32"><input type="checkbox"/> Mémoriser sur cet appareil</label>'),$s=K(`<p class="memoriser svelte-odrj32">La phrase ne peut pas être mémorisée hors de l'application installée.</p>`),Fs=K('<p class="refus svelte-odrj32" role="alert"> </p>'),Us=K(`<div class="ecran svelte-odrj32"><form class="svelte-odrj32"><h1 class="svelte-odrj32">Philo</h1> <p class="invite svelte-odrj32">Phrase de passe</p> <input type="password" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" enterkeyhint="go" aria-label="Phrase de passe" class="svelte-odrj32"/> <!> <button type="submit" class="svelte-odrj32"> </button> <!> <p class="note svelte-odrj32">La phrase n'est écrite nulle part. « Mémoriser » garde sur cet appareil une clé
      qui ne peut pas en ressortir, jamais la phrase.</p></form></div>`);function xs(n,e){mt(e,!0);let t=je(e,"refus",3,!1),i=je(e,"memorisable",3,!0),s=D(""),r=D(!1),a=D("attente"),o=x(()=>t()?"Phrase refusée.":"");ht(()=>{t()&&w(a,"attente")});async function l(v){if(v.preventDefault(),u(s).trim()===""||u(a)==="ouverture")return;w(a,"ouverture");const A=await as(u(s),e.manifeste);u(r)&&i()&&await os(A,e.manifeste),w(s,""),e.surOuverture(A)}var c=Us(),p=Q(c),f=P(Q(p),4),h=P(f,2);{var m=v=>{var A=Ks(),T=Q(A);rs(T,()=>u(r),L=>w(r,L)),j(v,A)},_=v=>{var A=$s();j(v,A)};J(h,v=>{i()?v(m):v(_,-1)})}var d=P(h,2),g=ne(d,!0),k=P(d,2);{var S=v=>{var A=Fs(),T=ne(A,!0);ie(()=>ee(T,u(o))),j(v,A)};J(k,v=>{u(o)&&v(S)})}ie(v=>{f.disabled=u(a)==="ouverture",d.disabled=v,ee(g,u(a)==="ouverture"?"Ouverture…":"Ouvrir")},[()=>u(s).trim()===""||u(a)==="ouverture"]),Pt("submit",p,l),oi(f,()=>u(s),v=>w(s,v)),j(n,c),gt()}var Js=K('<p class="cd-definition svelte-4qesmr"> </p>'),Vs=K('<div class="cd-fond svelte-4qesmr" role="presentation"><div class="cd-carte svelte-4qesmr" role="dialog"><p class="cd-type svelte-4qesmr"> </p> <p class="cd-titre svelte-4qesmr"> </p> <!> <button class="cd-ouvrir svelte-4qesmr">Ouvrir</button></div></div>');function Gs(n,e){var t=Vs(),i=Q(t),s=Q(i),r=ne(s,!0),a=P(s,2),o=ne(a,!0),l=P(a,2);{var c=f=>{var h=Js(),m=ne(h,!0);ie(()=>ee(m,e.definition)),j(f,h)};J(l,f=>{e.definition&&f(c)})}var p=P(l,2);ie(()=>{An(i,"aria-label",e.titre),ee(r,e.type),ee(o,e.titre)}),Y("click",t,function(...f){e.surFermer?.apply(this,f)}),Y("click",p,function(...f){e.surOuvrir?.apply(this,f)}),j(n,t)}xt(["click"]);function Hs(n,e=window.location.href){let t;try{t=new URL(n,e)}catch{return!0}if(t.protocol!=="http:"&&t.protocol!=="https:")return!0;const i=new URL(e);return t.origin!==i.origin?!0:!t.pathname.startsWith(Ws(i.pathname))}function Ws(n){const e=n.lastIndexOf("/");return e<=0?"/":n.slice(0,e+1)}function Ys(n){window.open(n,"_blank","noopener,noreferrer")}const Ln=Symbol.for("yaml.alias"),yn=Symbol.for("yaml.document"),Te=Symbol.for("yaml.map"),ci=Symbol.for("yaml.pair"),ye=Symbol.for("yaml.scalar"),ze=Symbol.for("yaml.seq"),ue=Symbol.for("yaml.node.type"),Xe=n=>!!n&&typeof n=="object"&&n[ue]===Ln,Jt=n=>!!n&&typeof n=="object"&&n[ue]===yn,bt=n=>!!n&&typeof n=="object"&&n[ue]===Te,Z=n=>!!n&&typeof n=="object"&&n[ue]===ci,V=n=>!!n&&typeof n=="object"&&n[ue]===ye,yt=n=>!!n&&typeof n=="object"&&n[ue]===ze;function z(n){if(n&&typeof n=="object")switch(n[ue]){case Te:case ze:return!0}return!1}function X(n){if(n&&typeof n=="object")switch(n[ue]){case Ln:case Te:case ye:case ze:return!0}return!1}const ui=n=>(V(n)||z(n))&&!!n.anchor,Me=Symbol("break visit"),Qs=Symbol("skip children"),ut=Symbol("remove node");function Ze(n,e){const t=zs(e);Jt(n)?Je(null,n.contents,t,Object.freeze([n]))===ut&&(n.contents=null):Je(null,n,t,Object.freeze([]))}Ze.BREAK=Me;Ze.SKIP=Qs;Ze.REMOVE=ut;function Je(n,e,t,i){const s=Xs(n,e,t,i);if(X(s)||Z(s))return Zs(n,i,s),Je(n,s,t,i);if(typeof s!="symbol"){if(z(e)){i=Object.freeze(i.concat(e));for(let r=0;r<e.items.length;++r){const a=Je(r,e.items[r],t,i);if(typeof a=="number")r=a-1;else{if(a===Me)return Me;a===ut&&(e.items.splice(r,1),r-=1)}}}else if(Z(e)){i=Object.freeze(i.concat(e));const r=Je("key",e.key,t,i);if(r===Me)return Me;r===ut&&(e.key=null);const a=Je("value",e.value,t,i);if(a===Me)return Me;a===ut&&(e.value=null)}}return s}function zs(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function Xs(n,e,t,i){if(typeof t=="function")return t(n,e,i);if(bt(e))return t.Map?.(n,e,i);if(yt(e))return t.Seq?.(n,e,i);if(Z(e))return t.Pair?.(n,e,i);if(V(e))return t.Scalar?.(n,e,i);if(Xe(e))return t.Alias?.(n,e,i)}function Zs(n,e,t){const i=e[e.length-1];if(z(i))i.items[n]=t;else if(Z(i))n==="key"?i.key=t:i.value=t;else if(Jt(i))i.contents=t;else{const s=Xe(i)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const er={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},tr=n=>n.replace(/[!,[\]{}]/g,e=>er[e]);class re{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},re.defaultYaml,e),this.tags=Object.assign({},re.defaultTags,t)}clone(){const e=new re(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new re(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:re.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},re.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:re.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},re.defaultTags),this.atNextDocument=!1);const i=e.trim().split(/[ \t]+/),s=i.shift();switch(s){case"%TAG":{if(i.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),i.length<2))return!1;const[r,a]=i;return this.tags[r]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,i.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=i;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const a=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,a),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,i,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const r=this.tags[i];if(r)try{return r+decodeURIComponent(s)}catch(a){return t(String(a)),null}return i==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,i]of Object.entries(this.tags))if(e.startsWith(i))return t+tr(e.substring(i.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],i=Object.entries(this.tags);let s;if(e&&i.length>0&&X(e.contents)){const r={};Ze(e.contents,(a,o)=>{X(o)&&o.tag&&(r[o.tag]=!0)}),s=Object.keys(r)}else s=[];for(const[r,a]of i)r==="!!"&&a==="tag:yaml.org,2002:"||(!e||s.some(o=>o.startsWith(a)))&&t.push(`%TAG ${r} ${a}`);return t.join(`
`)}}re.defaultYaml={explicit:!1,version:"1.2"};re.defaultTags={"!!":"tag:yaml.org,2002:"};function fi(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function hi(n){const e=new Set;return Ze(n,{Value(t,i){i.anchor&&e.add(i.anchor)}}),e}function di(n,e){for(let t=1;;++t){const i=`${n}${t}`;if(!e.has(i))return i}}function nr(n,e){const t=[],i=new Map;let s=null;return{onAnchor:r=>{t.push(r),s??(s=hi(n));const a=di(e,s);return s.add(a),a},setAnchors:()=>{for(const r of t){const a=i.get(r);if(typeof a=="object"&&a.anchor&&(V(a.node)||z(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=r,o}}},sourceObjects:i}}function Ve(n,e,t,i){if(i&&typeof i=="object")if(Array.isArray(i))for(let s=0,r=i.length;s<r;++s){const a=i[s],o=Ve(n,i,String(s),a);o===void 0?delete i[s]:o!==a&&(i[s]=o)}else if(i instanceof Map)for(const s of Array.from(i.keys())){const r=i.get(s),a=Ve(n,i,s,r);a===void 0?i.delete(s):a!==r&&i.set(s,a)}else if(i instanceof Set)for(const s of Array.from(i)){const r=Ve(n,i,s,s);r===void 0?i.delete(s):r!==s&&(i.delete(s),i.add(r))}else for(const[s,r]of Object.entries(i)){const a=Ve(n,i,s,r);a===void 0?delete i[s]:a!==r&&(i[s]=a)}return n.call(e,t,i)}function ce(n,e,t){if(Array.isArray(n))return n.map((i,s)=>ce(i,String(s),t));if(n&&typeof n.toJSON=="function"){if(!t||!ui(n))return n.toJSON(e,t);const i={aliasCount:0,count:1,res:void 0};t.anchors.set(n,i),t.onCreate=r=>{i.res=r,delete t.onCreate};const s=n.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof n=="bigint"&&!t?.keep?Number(n):n}class Tn{constructor(e){Object.defineProperty(this,ue,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:i,onAnchor:s,reviver:r}={}){if(!Jt(e))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},o=ce(this,"",a);if(typeof s=="function")for(const{count:l,res:c}of a.anchors.values())s(c,l);return typeof r=="function"?Ve(r,{"":o},"",o):o}}class In extends Tn{constructor(e){super(Ln),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if(t?.maxAliasCount===0)throw new ReferenceError("Alias resolution is disabled");let i;t?.aliasResolveCache?i=t.aliasResolveCache:(i=[],Ze(e,{Node:(r,a)=>{(Xe(a)||ui(a))&&i.push(a)}}),t&&(t.aliasResolveCache=i));let s;for(const r of i){if(r===this)break;r.anchor===this.source&&(s=r)}if(s&&t){const{anchors:r,doc:a,maxAliasCount:o}=t;let l=r.get(s);if(l||(ce(s,null,t),l=r.get(s)),l?.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(o>=0&&(l.count+=1,l.aliasCount===0&&(l.aliasCount=Bt(a,s,r)),l.count*l.aliasCount>o)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}}return s}toJSON(e,t){if(!t)return{source:this.source};const i=this.resolve(t.doc,t);if(!i){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(s)}return t.anchors.get(i).res}toString(e,t,i){const s=`*${this.source}`;if(e){if(fi(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${s} `}return s}}function Bt(n,e,t){if(Xe(e)){const i=e.resolve(n),s=t&&i&&t.get(i);return s?s.count*s.aliasCount:0}else if(z(e)){let i=0;for(const s of e.items){const r=Bt(n,s,t);r>i&&(i=r)}return i}else if(Z(e)){const i=Bt(n,e.key,t),s=Bt(n,e.value,t);return Math.max(i,s)}return 1}const pi=n=>!n||typeof n!="function"&&typeof n!="object";class M extends Tn{constructor(e){super(ye),this.value=e}toJSON(e,t){return t?.keep?this.value:ce(this.value,e,t)}toString(){return String(this.value)}}M.BLOCK_FOLDED="BLOCK_FOLDED";M.BLOCK_LITERAL="BLOCK_LITERAL";M.PLAIN="PLAIN";M.QUOTE_DOUBLE="QUOTE_DOUBLE";M.QUOTE_SINGLE="QUOTE_SINGLE";const ir="tag:yaml.org,2002:";function sr(n,e,t){if(e){const i=t.filter(r=>r.tag===e),s=i.find(r=>!r.format)??i[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(i=>i.identify?.(n)&&!i.format)}function dt(n,e,t){if(Jt(n)&&(n=n.contents),X(n))return n;if(Z(n)){const f=t.schema[Te].createNode?.(t.schema,null,t);return f.items.push(n),f}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:i,onAnchor:s,onTagObj:r,schema:a,sourceObjects:o}=t;let l;if(i&&n&&typeof n=="object"){if(l=o.get(n),l)return l.anchor??(l.anchor=s(n)),new In(l.anchor);l={anchor:null,node:null},o.set(n,l)}e?.startsWith("!!")&&(e=ir+e.slice(2));let c=sr(n,e,a.tags);if(!c){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const f=new M(n);return l&&(l.node=f),f}c=n instanceof Map?a[Te]:Symbol.iterator in Object(n)?a[ze]:a[Te]}r&&(r(c),delete t.onTagObj);const p=c?.createNode?c.createNode(t.schema,n,t):typeof c?.nodeClass?.from=="function"?c.nodeClass.from(t.schema,n,t):new M(n);return e?p.tag=e:c.default||(p.tag=c.tag),l&&(l.node=p),p}function $t(n,e,t){let i=t;for(let s=e.length-1;s>=0;--s){const r=e[s];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const a=[];a[r]=i,i=a}else i=new Map([[r,i]])}return dt(i,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const lt=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class mi extends Tn{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(i=>X(i)||Z(i)?i.clone(e):i),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(lt(e))this.add(t);else{const[i,...s]=e,r=this.get(i,!0);if(z(r))r.addIn(s,t);else if(r===void 0&&this.schema)this.set(i,$t(this.schema,s,t));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${s}`)}}deleteIn(e){const[t,...i]=e;if(i.length===0)return this.delete(t);const s=this.get(t,!0);if(z(s))return s.deleteIn(i);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${i}`)}getIn(e,t){const[i,...s]=e,r=this.get(i,!0);return s.length===0?!t&&V(r)?r.value:r:z(r)?r.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!Z(t))return!1;const i=t.value;return i==null||e&&V(i)&&i.value==null&&!i.commentBefore&&!i.comment&&!i.tag})}hasIn(e){const[t,...i]=e;if(i.length===0)return this.has(t);const s=this.get(t,!0);return z(s)?s.hasIn(i):!1}setIn(e,t){const[i,...s]=e;if(s.length===0)this.set(i,t);else{const r=this.get(i,!0);if(z(r))r.setIn(s,t);else if(r===void 0&&this.schema)this.set(i,$t(this.schema,s,t));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${s}`)}}}const rr=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function _e(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const Be=(n,e,t)=>n.endsWith(`
`)?_e(t,e):t.includes(`
`)?`
`+_e(t,e):(n.endsWith(" ")?"":" ")+t,gi="flow",vn="block",Dt="quoted";function Vt(n,e,t="flow",{indentAtStart:i,lineWidth:s=80,minContentWidth:r=20,onFold:a,onOverflow:o}={}){if(!s||s<0)return n;s<r&&(r=0);const l=Math.max(1+r,1+s-e.length);if(n.length<=l)return n;const c=[],p={};let f=s-e.length;typeof i=="number"&&(i>s-Math.max(2,r)?c.push(0):f=s-i);let h,m,_=!1,d=-1,g=-1,k=-1;t===vn&&(d=Wn(n,d,e.length),d!==-1&&(f=d+l));for(let v;v=n[d+=1];){if(t===Dt&&v==="\\"){switch(g=d,n[d+1]){case"x":d+=3;break;case"u":d+=5;break;case"U":d+=9;break;default:d+=1}k=d}if(v===`
`)t===vn&&(d=Wn(n,d,e.length)),f=d+e.length+l,h=void 0;else{if(v===" "&&m&&m!==" "&&m!==`
`&&m!=="	"){const A=n[d+1];A&&A!==" "&&A!==`
`&&A!=="	"&&(h=d)}if(d>=f)if(h)c.push(h),f=h+l,h=void 0;else if(t===Dt){for(;m===" "||m==="	";)m=v,v=n[d+=1],_=!0;const A=d>k+1?d-2:g-1;if(p[A])return n;c.push(A),p[A]=!0,f=A+l,h=void 0}else _=!0}m=v}if(_&&o&&o(),c.length===0)return n;a&&a();let S=n.slice(0,c[0]);for(let v=0;v<c.length;++v){const A=c[v],T=c[v+1]||n.length;A===0?S=`
${e}${n.slice(0,T)}`:(t===Dt&&p[A]&&(S+=`${n[A]}\\`),S+=`
${e}${n.slice(A+1,T)}`)}return S}function Wn(n,e,t){let i=e,s=e+1,r=n[s];for(;r===" "||r==="	";)if(e<s+t)r=n[++e];else{do r=n[++e];while(r&&r!==`
`);i=e,s=e+1,r=n[s]}return i}const Gt=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),Ht=n=>/^(%|---|\.\.\.)/m.test(n);function ar(n,e,t){if(!e||e<0)return!1;const i=e-t,s=n.length;if(s<=i)return!1;for(let r=0,a=0;r<s;++r)if(n[r]===`
`){if(r-a>i)return!0;if(a=r+1,s-a<=i)return!1}return!0}function ft(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:i}=e,s=e.options.doubleQuotedMinMultiLineLength,r=e.indent||(Ht(n)?"  ":"");let a="",o=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(a+=t.slice(o,l)+"\\ ",l+=1,o=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{a+=t.slice(o,l);const p=t.substr(l+2,4);switch(p){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:p.substr(0,2)==="00"?a+="\\x"+p.substr(2):a+=t.substr(l,6)}l+=5,o=l+1}break;case"n":if(i||t[l+2]==='"'||t.length<s)l+=1;else{for(a+=t.slice(o,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)a+=`
`,l+=2;a+=r,t[l+2]===" "&&(a+="\\"),l+=1,o=l+1}break;default:l+=1}return a=o?a+t.slice(o):t,i?a:Vt(a,r,Dt,Gt(e,!1))}function _n(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return ft(n,e);const t=e.indent||(Ht(n)?"  ":""),i="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?i:Vt(i,t,gi,Gt(e,!1))}function Ge(n,e){const{singleQuote:t}=e.options;let i;if(t===!1)i=ft;else{const s=n.includes('"'),r=n.includes("'");s&&!r?i=_n:r&&!s?i=ft:i=t?_n:ft}return i(n,e)}let wn;try{wn=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{wn=/\n+(?!\n|$)/g}function Rt({comment:n,type:e,value:t},i,s,r){const{blockQuote:a,commentString:o,lineWidth:l}=i.options;if(!a||/\n[\t ]+$/.test(t))return Ge(t,i);const c=i.indent||(i.forceBlockIndent||Ht(t)?"  ":""),p=a==="literal"?!0:a==="folded"||e===M.BLOCK_FOLDED?!1:e===M.BLOCK_LITERAL?!0:!ar(t,l,c.length);if(!t)return p?`|
`:`>
`;let f,h;for(h=t.length;h>0;--h){const T=t[h-1];if(T!==`
`&&T!=="	"&&T!==" ")break}let m=t.substring(h);const _=m.indexOf(`
`);_===-1?f="-":t===m||_!==m.length-1?(f="+",r&&r()):f="",m&&(t=t.slice(0,-m.length),m[m.length-1]===`
`&&(m=m.slice(0,-1)),m=m.replace(wn,`$&${c}`));let d=!1,g,k=-1;for(g=0;g<t.length;++g){const T=t[g];if(T===" ")d=!0;else if(T===`
`)k=g;else break}let S=t.substring(0,k<g?k+1:g);S&&(t=t.substring(S.length),S=S.replace(/\n+/g,`$&${c}`));let A=(d?c?"2":"1":"")+f;if(n&&(A+=" "+o(n.replace(/ ?[\r\n]+/g," ")),s&&s()),!p){const T=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let L=!1;const B=Gt(i,!0);a!=="folded"&&e!==M.BLOCK_FOLDED&&(B.onOverflow=()=>{L=!0});const N=Vt(`${S}${T}${m}`,c,vn,B);if(!L)return`>${A}
${c}${N}`}return t=t.replace(/\n+/g,`$&${c}`),`|${A}
${c}${S}${t}${m}`}function or(n,e,t,i){const{type:s,value:r}=n,{actualString:a,implicitKey:o,indent:l,indentStep:c,inFlow:p}=e;if(o&&r.includes(`
`)||p&&/[[\]{},]/.test(r))return Ge(r,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return o||p||!r.includes(`
`)?Ge(r,e):Rt(n,e,t,i);if(!o&&!p&&s!==M.PLAIN&&r.includes(`
`))return Rt(n,e,t,i);if(Ht(r)){if(l==="")return e.forceBlockIndent=!0,Rt(n,e,t,i);if(o&&l===c)return Ge(r,e)}const f=r.replace(/\n+/g,`$&
${l}`);if(a){const h=d=>d.default&&d.tag!=="tag:yaml.org,2002:str"&&d.test?.test(f),{compat:m,tags:_}=e.doc.schema;if(_.some(h)||m?.some(h))return Ge(r,e)}return o?f:Vt(f,l,gi,Gt(e,!1))}function Cn(n,e,t,i){const{implicitKey:s,inFlow:r}=e,a=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:o}=n;o!==M.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=M.QUOTE_DOUBLE);const l=p=>{switch(p){case M.BLOCK_FOLDED:case M.BLOCK_LITERAL:return s||r?Ge(a.value,e):Rt(a,e,t,i);case M.QUOTE_DOUBLE:return ft(a.value,e);case M.QUOTE_SINGLE:return _n(a.value,e);case M.PLAIN:return or(a,e,t,i);default:return null}};let c=l(o);if(c===null){const{defaultKeyType:p,defaultStringType:f}=e.options,h=s&&p||f;if(c=l(h),c===null)throw new Error(`Unsupported default string type ${h}`)}return c}function bi(n,e){const t=Object.assign({blockQuote:!0,commentString:rr,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let i;switch(t.collectionStyle){case"block":i=!1;break;case"flow":i=!0;break;default:i=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:i,options:t}}function lr(n,e){if(e.tag){const s=n.filter(r=>r.tag===e.tag);if(s.length>0)return s.find(r=>r.format===e.format)??s[0]}let t,i;if(V(e)){i=e.value;let s=n.filter(r=>r.identify?.(i));if(s.length>1){const r=s.filter(a=>a.test);r.length>0&&(s=r)}t=s.find(r=>r.format===e.format)??s.find(r=>!r.format)}else i=e,t=n.find(s=>s.nodeClass&&i instanceof s.nodeClass);if(!t){const s=i?.constructor?.name??(i===null?"null":typeof i);throw new Error(`Tag not resolved for ${s} value`)}return t}function cr(n,e,{anchors:t,doc:i}){if(!i.directives)return"";const s=[],r=(V(n)||z(n))&&n.anchor;r&&fi(r)&&(t.add(r),s.push(`&${r}`));const a=n.tag??(e.default?null:e.tag);return a&&s.push(i.directives.tagString(a)),s.join(" ")}function Ye(n,e,t,i){if(Z(n))return n.toString(e,t,i);if(Xe(n)){if(e.doc.directives)return n.toString(e);if(e.resolvedAliases?.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let s;const r=X(n)?n:e.doc.createNode(n,{onTagObj:l=>s=l});s??(s=lr(e.doc.schema.tags,r));const a=cr(r,s,e);a.length>0&&(e.indentAtStart=(e.indentAtStart??0)+a.length+1);const o=typeof s.stringify=="function"?s.stringify(r,e,t,i):V(r)?Cn(r,e,t,i):r.toString(e,t,i);return a?V(r)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function ur({key:n,value:e},t,i,s){const{allNullValues:r,doc:a,indent:o,indentStep:l,options:{commentString:c,indentSeq:p,simpleKeys:f}}=t;let h=X(n)&&n.comment||null;if(f){if(h)throw new Error("With simple keys, key nodes cannot have comments");if(z(n)||!X(n)&&typeof n=="object"){const B="With simple keys, collection cannot be used as a key value";throw new Error(B)}}let m=!f&&(!n||h&&e==null&&!t.inFlow||z(n)||(V(n)?n.type===M.BLOCK_FOLDED||n.type===M.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!m&&(f||!r),indent:o+l});let _=!1,d=!1,g=Ye(n,t,()=>_=!0,()=>d=!0);if(!m&&!t.inFlow&&g.length>1024){if(f)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");m=!0}if(t.inFlow){if(r||e==null)return _&&i&&i(),g===""?"?":m?`? ${g}`:g}else if(r&&!f||e==null&&m)return g=`? ${g}`,h&&!_?g+=Be(g,t.indent,c(h)):d&&s&&s(),g;_&&(h=null),m?(h&&(g+=Be(g,t.indent,c(h))),g=`? ${g}
${o}:`):(g=`${g}:`,h&&(g+=Be(g,t.indent,c(h))));let k,S,v;X(e)?(k=!!e.spaceBefore,S=e.commentBefore,v=e.comment):(k=!1,S=null,v=null,e&&typeof e=="object"&&(e=a.createNode(e))),t.implicitKey=!1,!m&&!h&&V(e)&&(t.indentAtStart=g.length+1),d=!1,!p&&l.length>=2&&!t.inFlow&&!m&&yt(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let A=!1;const T=Ye(e,t,()=>A=!0,()=>d=!0);let L=" ";if(h||k||S){if(L=k?`
`:"",S){const B=c(S);L+=`
${_e(B,t.indent)}`}T===""&&!t.inFlow?L===`
`&&v&&(L=`

`):L+=`
${t.indent}`}else if(!m&&z(e)){const B=T[0],N=T.indexOf(`
`),G=N!==-1,oe=t.inFlow??e.flow??e.items.length===0;if(G||!oe){let fe=!1;if(G&&(B==="&"||B==="!")){let $=T.indexOf(" ");B==="&"&&$!==-1&&$<N&&T[$+1]==="!"&&($=T.indexOf(" ",$+1)),($===-1||N<$)&&(fe=!0)}fe||(L=`
${t.indent}`)}}else(T===""||T[0]===`
`)&&(L="");return g+=L+T,t.inFlow?A&&i&&i():v&&!A?g+=Be(g,t.indent,c(v)):d&&s&&s(),g}function yi(n,e){(n==="debug"||n==="warn")&&console.warn(e)}const Tt="<<",we={identify:n=>n===Tt||typeof n=="symbol"&&n.description===Tt,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new M(Symbol(Tt)),{addToJSMap:vi}),stringify:()=>Tt},fr=(n,e)=>(we.identify(e)||V(e)&&(!e.type||e.type===M.PLAIN)&&we.identify(e.value))&&n?.doc.schema.tags.some(t=>t.tag===we.tag&&t.default);function vi(n,e,t){const i=_i(n,t);if(yt(i))for(const s of i.items)fn(n,e,s);else if(Array.isArray(i))for(const s of i)fn(n,e,s);else fn(n,e,i)}function fn(n,e,t){const i=_i(n,t);if(!bt(i))throw new Error("Merge sources must be maps or map aliases");const s=i.toJSON(null,n,Map);for(const[r,a]of s)e instanceof Map?e.has(r)||e.set(r,a):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function _i(n,e){return n&&Xe(e)?e.resolve(n.doc,n):e}function wi(n,e,{key:t,value:i}){if(X(t)&&t.addToJSMap)t.addToJSMap(n,e,i);else if(fr(n,t))vi(n,e,i);else{const s=ce(t,"",n);if(e instanceof Map)e.set(s,ce(i,s,n));else if(e instanceof Set)e.add(s);else{const r=hr(t,s,n),a=ce(i,r,n);r in e?Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[r]=a}}return e}function hr(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(X(n)&&t?.doc){const i=bi(t.doc,{});i.anchors=new Set;for(const r of t.anchors.keys())i.anchors.add(r.anchor);i.inFlow=!0,i.inStringifyKey=!0;const s=n.toString(i);if(!t.mapKeyWarned){let r=JSON.stringify(s);r.length>40&&(r=r.substring(0,36)+'..."'),yi(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function qn(n,e,t){const i=dt(n,void 0,t),s=dt(e,void 0,t);return new ae(i,s)}class ae{constructor(e,t=null){Object.defineProperty(this,ue,{value:ci}),this.key=e,this.value=t}clone(e){let{key:t,value:i}=this;return X(t)&&(t=t.clone(e)),X(i)&&(i=i.clone(e)),new ae(t,i)}toJSON(e,t){const i=t?.mapAsMap?new Map:{};return wi(t,i,this)}toString(e,t,i){return e?.doc?ur(this,e,t,i):JSON.stringify(this)}}function ki(n,e,t){return(e.inFlow??n.flow?pr:dr)(n,e,t)}function dr({comment:n,items:e},t,{blockItemPrefix:i,flowChars:s,itemIndent:r,onChompKeep:a,onComment:o}){const{indent:l,options:{commentString:c}}=t,p=Object.assign({},t,{indent:r,type:null});let f=!1;const h=[];for(let _=0;_<e.length;++_){const d=e[_];let g=null;if(X(d))!f&&d.spaceBefore&&h.push(""),Ft(t,h,d.commentBefore,f),d.comment&&(g=d.comment);else if(Z(d)){const S=X(d.key)?d.key:null;S&&(!f&&S.spaceBefore&&h.push(""),Ft(t,h,S.commentBefore,f))}f=!1;let k=Ye(d,p,()=>g=null,()=>f=!0);g&&(k+=Be(k,r,c(g))),f&&g&&(f=!1),h.push(i+k)}let m;if(h.length===0)m=s.start+s.end;else{m=h[0];for(let _=1;_<h.length;++_){const d=h[_];m+=d?`
${l}${d}`:`
`}}return n?(m+=`
`+_e(c(n),l),o&&o()):f&&a&&a(),m}function pr({items:n},e,{flowChars:t,itemIndent:i}){const{indent:s,indentStep:r,flowCollectionPadding:a,options:{commentString:o}}=e;i+=r;const l=Object.assign({},e,{indent:i,inFlow:!0,type:null});let c=!1,p=0;const f=[];for(let _=0;_<n.length;++_){const d=n[_];let g=null;if(X(d))d.spaceBefore&&f.push(""),Ft(e,f,d.commentBefore,!1),d.comment&&(g=d.comment);else if(Z(d)){const S=X(d.key)?d.key:null;S&&(S.spaceBefore&&f.push(""),Ft(e,f,S.commentBefore,!1),S.comment&&(c=!0));const v=X(d.value)?d.value:null;v?(v.comment&&(g=v.comment),v.commentBefore&&(c=!0)):d.value==null&&S?.comment&&(g=S.comment)}g&&(c=!0);let k=Ye(d,l,()=>g=null);c||(c=f.length>p||k.includes(`
`)),_<n.length-1?k+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(c||(c=f.reduce((S,v)=>S+v.length+2,2)+(k.length+2)>e.options.lineWidth)),c&&(k+=",")),g&&(k+=Be(k,i,o(g))),f.push(k),p=f.length}const{start:h,end:m}=t;if(f.length===0)return h+m;if(!c){const _=f.reduce((d,g)=>d+g.length+2,2);c=e.options.lineWidth>0&&_>e.options.lineWidth}if(c){let _=h;for(const d of f)_+=d?`
${r}${s}${d}`:`
`;return`${_}
${s}${m}`}else return`${h}${a}${f.join(" ")}${a}${m}`}function Ft({indent:n,options:{commentString:e}},t,i,s){if(i&&s&&(i=i.replace(/^\n+/,"")),i){const r=_e(e(i),n);t.push(r.trimStart())}}function De(n,e){const t=V(e)?e.value:e;for(const i of n)if(Z(i)&&(i.key===e||i.key===t||V(i.key)&&i.key.value===t))return i}class le extends mi{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Te,e),this.items=[]}static from(e,t,i){const{keepUndefined:s,replacer:r}=i,a=new this(e),o=(l,c)=>{if(typeof r=="function")c=r.call(t,l,c);else if(Array.isArray(r)&&!r.includes(l))return;(c!==void 0||s)&&a.items.push(qn(l,c,i))};if(t instanceof Map)for(const[l,c]of t)o(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))o(l,t[l]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}add(e,t){let i;Z(e)?i=e:!e||typeof e!="object"||!("key"in e)?i=new ae(e,e?.value):i=new ae(e.key,e.value);const s=De(this.items,i.key),r=this.schema?.sortMapEntries;if(s){if(!t)throw new Error(`Key ${i.key} already set`);V(s.value)&&pi(i.value)?s.value.value=i.value:s.value=i.value}else if(r){const a=this.items.findIndex(o=>r(i,o)<0);a===-1?this.items.push(i):this.items.splice(a,0,i)}else this.items.push(i)}delete(e){const t=De(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const s=De(this.items,e)?.value;return(!t&&V(s)?s.value:s)??void 0}has(e){return!!De(this.items,e)}set(e,t){this.add(new ae(e,t),!0)}toJSON(e,t,i){const s=i?new i:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(s);for(const r of this.items)wi(t,s,r);return s}toString(e,t,i){if(!e)return JSON.stringify(this);for(const s of this.items)if(!Z(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),ki(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:i,onComment:t})}}const et={collection:"map",default:!0,nodeClass:le,tag:"tag:yaml.org,2002:map",resolve(n,e){return bt(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>le.from(n,e,t)};class Re extends mi{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(ze,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=It(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const i=It(e);if(typeof i!="number")return;const s=this.items[i];return!t&&V(s)?s.value:s}has(e){const t=It(e);return typeof t=="number"&&t<this.items.length}set(e,t){const i=It(e);if(typeof i!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[i];V(s)&&pi(t)?s.value=t:this.items[i]=t}toJSON(e,t){const i=[];t?.onCreate&&t.onCreate(i);let s=0;for(const r of this.items)i.push(ce(r,String(s++),t));return i}toString(e,t,i){return e?ki(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:i,onComment:t}):JSON.stringify(this)}static from(e,t,i){const{replacer:s}=i,r=new this(e);if(t&&Symbol.iterator in Object(t)){let a=0;for(let o of t){if(typeof s=="function"){const l=t instanceof Set?o:String(a++);o=s.call(t,l,o)}r.items.push(dt(o,void 0,i))}}return r}}function It(n){let e=V(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const tt={collection:"seq",default:!0,nodeClass:Re,tag:"tag:yaml.org,2002:seq",resolve(n,e){return yt(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>Re.from(n,e,t)},Wt={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,i){return e=Object.assign({actualString:!0},e),Cn(n,e,t,i)}},Yt={identify:n=>n==null,createNode:()=>new M(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new M(null),stringify:({source:n},e)=>typeof n=="string"&&Yt.test.test(n)?n:e.options.nullStr},Mn={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new M(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&Mn.test.test(n)){const i=n[0]==="t"||n[0]==="T";if(e===i)return n}return e?t.options.trueStr:t.options.falseStr}};function pe({format:n,minFractionDigits:e,tag:t,value:i}){if(typeof i=="bigint")return String(i);const s=typeof i=="number"?i:Number(i);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let r=Object.is(i,-0)?"-0":JSON.stringify(i);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(r)&&!r.includes("e")){let a=r.indexOf(".");a<0&&(a=r.length,r+=".");let o=e-(r.length-a-1);for(;o-- >0;)r+="0"}return r}const Si={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:pe},Ni={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():pe(n)}},Oi={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){const e=new M(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:pe},Qt=n=>typeof n=="bigint"||Number.isInteger(n),Pn=(n,e,t,{intAsBigInt:i})=>i?BigInt(n):parseInt(n.substring(e),t);function Ai(n,e,t){const{value:i}=n;return Qt(i)&&i>=0?t+i.toString(e):pe(n)}const Ei={identify:n=>Qt(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>Pn(n,2,8,t),stringify:n=>Ai(n,8,"0o")},Li={identify:Qt,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>Pn(n,0,10,t),stringify:pe},Ti={identify:n=>Qt(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>Pn(n,2,16,t),stringify:n=>Ai(n,16,"0x")},mr=[et,tt,Wt,Yt,Mn,Ei,Li,Ti,Si,Ni,Oi];function Yn(n){return typeof n=="bigint"||Number.isInteger(n)}const Ct=({value:n})=>JSON.stringify(n),gr=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:Ct},{identify:n=>n==null,createNode:()=>new M(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ct},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:Ct},{identify:Yn,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>Yn(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:Ct}],br={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},yr=[et,tt].concat(gr,br),jn={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){const t=atob(n.replace(/[\n\r]/g,"")),i=new Uint8Array(t.length);for(let s=0;s<t.length;++s)i[s]=t.charCodeAt(s);return i}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},i,s,r){if(!t)return"";const a=t;let o;if(typeof btoa=="function"){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);o=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=M.BLOCK_LITERAL),e!==M.QUOTE_DOUBLE){const l=Math.max(i.options.lineWidth-i.indent.length,i.options.minContentWidth),c=Math.ceil(o.length/l),p=new Array(c);for(let f=0,h=0;f<c;++f,h+=l)p[f]=o.substr(h,l);o=p.join(e===M.BLOCK_LITERAL?`
`:" ")}return Cn({comment:n,type:e,value:o},i,s,r)}};function Ii(n,e){if(yt(n))for(let t=0;t<n.items.length;++t){let i=n.items[t];if(!Z(i)){if(bt(i)){i.items.length>1&&e("Each pair must have its own sequence indicator");const s=i.items[0]||new ae(new M(null));if(i.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${i.commentBefore}
${s.key.commentBefore}`:i.commentBefore),i.comment){const r=s.value??s.key;r.comment=r.comment?`${i.comment}
${r.comment}`:i.comment}i=s}n.items[t]=Z(i)?i:new ae(i)}}else e("Expected a sequence for this tag");return n}function Ci(n,e,t){const{replacer:i}=t,s=new Re(n);s.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof i=="function"&&(a=i.call(e,String(r++),a));let o,l;if(Array.isArray(a))if(a.length===2)o=a[0],l=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const c=Object.keys(a);if(c.length===1)o=c[0],l=a[o];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else o=a;s.items.push(qn(o,l,t))}return s}const Bn={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Ii,createNode:Ci};class He extends Re{constructor(){super(),this.add=le.prototype.add.bind(this),this.delete=le.prototype.delete.bind(this),this.get=le.prototype.get.bind(this),this.has=le.prototype.has.bind(this),this.set=le.prototype.set.bind(this),this.tag=He.tag}toJSON(e,t){if(!t)return super.toJSON(e);const i=new Map;t?.onCreate&&t.onCreate(i);for(const s of this.items){let r,a;if(Z(s)?(r=ce(s.key,"",t),a=ce(s.value,r,t)):r=ce(s,"",t),i.has(r))throw new Error("Ordered maps must not include duplicate keys");i.set(r,a)}return i}static from(e,t,i){const s=Ci(e,t,i),r=new this;return r.items=s.items,r}}He.tag="tag:yaml.org,2002:omap";const Dn={collection:"seq",identify:n=>n instanceof Map,nodeClass:He,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){const t=Ii(n,e),i=[];for(const{key:s}of t.items)V(s)&&(i.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):i.push(s.value));return Object.assign(new He,t)},createNode:(n,e,t)=>He.from(n,e,t)};function qi({value:n,source:e},t){return e&&(n?Mi:Pi).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}const Mi={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new M(!0),stringify:qi},Pi={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new M(!1),stringify:qi},vr={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:pe},_r={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():pe(n)}},wr={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){const e=new M(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){const i=n.substring(t+1).replace(/_/g,"");i[i.length-1]==="0"&&(e.minFractionDigits=i.length)}return e},stringify:pe},vt=n=>typeof n=="bigint"||Number.isInteger(n);function zt(n,e,t,{intAsBigInt:i}){const s=n[0];if((s==="-"||s==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),i){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}const a=BigInt(n);return s==="-"?BigInt(-1)*a:a}const r=parseInt(n,t);return s==="-"?-1*r:r}function Rn(n,e,t){const{value:i}=n;if(vt(i)){const s=i.toString(e);return i<0?"-"+t+s.substr(1):t+s}return pe(n)}const kr={identify:vt,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>zt(n,2,2,t),stringify:n=>Rn(n,2,"0b")},Sr={identify:vt,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>zt(n,1,8,t),stringify:n=>Rn(n,8,"0")},Nr={identify:vt,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>zt(n,0,10,t),stringify:pe},Or={identify:vt,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>zt(n,2,16,t),stringify:n=>Rn(n,16,"0x")};class We extends le{constructor(e){super(e),this.tag=We.tag}add(e){let t;Z(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new ae(e.key,null):t=new ae(e,null),De(this.items,t.key)||this.items.push(t)}get(e,t){const i=De(this.items,e);return!t&&Z(i)?V(i.key)?i.key.value:i.key:i}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const i=De(this.items,e);i&&!t?this.items.splice(this.items.indexOf(i),1):!i&&t&&this.items.push(new ae(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,i){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,i);throw new Error("Set items must all have null values")}static from(e,t,i){const{replacer:s}=i,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof s=="function"&&(a=s.call(t,a,a)),r.items.push(qn(a,null,i));return r}}We.tag="tag:yaml.org,2002:set";const Kn={collection:"map",identify:n=>n instanceof Set,nodeClass:We,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>We.from(n,e,t),resolve(n,e){if(bt(n)){if(n.hasAllNullValues(!0))return Object.assign(new We,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function $n(n,e){const t=n[0],i=t==="-"||t==="+"?n.substring(1):n,s=a=>e?BigInt(a):Number(a),r=i.replace(/_/g,"").split(":").reduce((a,o)=>a*s(60)+s(o),s(0));return t==="-"?s(-1)*r:r}function ji(n){let{value:e}=n,t=a=>a;if(typeof e=="bigint")t=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return pe(n);let i="";e<0&&(i="-",e*=t(-1));const s=t(60),r=[e%s];return e<60?r.unshift(0):(e=(e-r[0])/s,r.unshift(e%s),e>=60&&(e=(e-r[0])/s,r.unshift(e))),i+r.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Bi={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>$n(n,t),stringify:ji},Di={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>$n(n,!1),stringify:ji},Xt={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){const e=n.match(Xt.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,i,s,r,a,o]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(t,i-1,s,r||0,a||0,o||0,l);const p=e[8];if(p&&p!=="Z"){let f=$n(p,!1);Math.abs(f)<30&&(f*=60),c-=6e4*f}return new Date(c)},stringify:({value:n})=>n?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},Qn=[et,tt,Wt,Yt,Mi,Pi,kr,Sr,Nr,Or,vr,_r,wr,jn,we,Dn,Bn,Kn,Bi,Di,Xt],zn=new Map([["core",mr],["failsafe",[et,tt,Wt]],["json",yr],["yaml11",Qn],["yaml-1.1",Qn]]),Xn={binary:jn,bool:Mn,float:Oi,floatExp:Ni,floatNaN:Si,floatTime:Di,int:Li,intHex:Ti,intOct:Ei,intTime:Bi,map:et,merge:we,null:Yt,omap:Dn,pairs:Bn,seq:tt,set:Kn,timestamp:Xt},Ar={"tag:yaml.org,2002:binary":jn,"tag:yaml.org,2002:merge":we,"tag:yaml.org,2002:omap":Dn,"tag:yaml.org,2002:pairs":Bn,"tag:yaml.org,2002:set":Kn,"tag:yaml.org,2002:timestamp":Xt};function hn(n,e,t){const i=zn.get(e);if(i&&!n)return t&&!i.includes(we)?i.concat(we):i.slice();let s=i;if(!s)if(Array.isArray(n))s=[];else{const r=Array.from(zn.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(n))for(const r of n)s=s.concat(r);else typeof n=="function"&&(s=n(s.slice()));return t&&(s=s.concat(we)),s.reduce((r,a)=>{const o=typeof a=="string"?Xn[a]:a;if(!o){const l=JSON.stringify(a),c=Object.keys(Xn).map(p=>JSON.stringify(p)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return r.includes(o)||r.push(o),r},[])}const Er=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0;class Fn{constructor({compat:e,customTags:t,merge:i,resolveKnownTags:s,schema:r,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?hn(e,"compat"):e?hn(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=s?Ar:{},this.tags=hn(t,this.name,i),this.toStringOptions=o??null,Object.defineProperty(this,Te,{value:et}),Object.defineProperty(this,ye,{value:Wt}),Object.defineProperty(this,ze,{value:tt}),this.sortMapEntries=typeof a=="function"?a:a===!0?Er:null}clone(){const e=Object.create(Fn.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Lr(n,e){const t=[];let i=e.directives===!0;if(e.directives!==!1&&n.directives){const l=n.directives.toString(n);l?(t.push(l),i=!0):n.directives.docStart&&(i=!0)}i&&t.push("---");const s=bi(n,e),{commentString:r}=s.options;if(n.commentBefore){t.length!==1&&t.unshift("");const l=r(n.commentBefore);t.unshift(_e(l,""))}let a=!1,o=null;if(n.contents){if(X(n.contents)){if(n.contents.spaceBefore&&i&&t.push(""),n.contents.commentBefore){const p=r(n.contents.commentBefore);t.push(_e(p,""))}s.forceBlockIndent=!!n.comment,o=n.contents.comment}const l=o?void 0:()=>a=!0;let c=Ye(n.contents,s,()=>o=null,l);o&&(c+=Be(c,"",r(o))),(c[0]==="|"||c[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${c}`:t.push(c)}else t.push(Ye(n.contents,s));if(n.directives?.docEnd)if(n.comment){const l=r(n.comment);l.includes(`
`)?(t.push("..."),t.push(_e(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=n.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&t[t.length-1]!==""&&t.push(""),t.push(_e(r(l),"")))}return t.join(`
`)+`
`}class Zt{constructor(e,t,i){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,ue,{value:yn});let s=null;typeof t=="function"||Array.isArray(t)?s=t:i===void 0&&t&&(i=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},i);this.options=r;let{version:a}=r;i?._directives?(this.directives=i._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new re({version:a}),this.setSchema(a,i),this.contents=e===void 0?null:this.createNode(e,s,i)}clone(){const e=Object.create(Zt.prototype,{[ue]:{value:yn}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=X(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){Fe(this.contents)&&this.contents.add(e)}addIn(e,t){Fe(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const i=hi(this);e.anchor=!t||i.has(t)?di(t||"a",i):t}return new In(e.anchor)}createNode(e,t,i){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const g=S=>typeof S=="number"||S instanceof String||S instanceof Number,k=t.filter(g).map(String);k.length>0&&(t=t.concat(k)),s=t}else i===void 0&&t&&(i=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:a,flow:o,keepUndefined:l,onTagObj:c,tag:p}=i??{},{onAnchor:f,setAnchors:h,sourceObjects:m}=nr(this,a||"a"),_={aliasDuplicateObjects:r??!0,keepUndefined:l??!1,onAnchor:f,onTagObj:c,replacer:s,schema:this.schema,sourceObjects:m},d=dt(e,p,_);return o&&z(d)&&(d.flow=!0),h(),d}createPair(e,t,i={}){const s=this.createNode(e,null,i),r=this.createNode(t,null,i);return new ae(s,r)}delete(e){return Fe(this.contents)?this.contents.delete(e):!1}deleteIn(e){return lt(e)?this.contents==null?!1:(this.contents=null,!0):Fe(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return z(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return lt(e)?!t&&V(this.contents)?this.contents.value:this.contents:z(this.contents)?this.contents.getIn(e,t):void 0}has(e){return z(this.contents)?this.contents.has(e):!1}hasIn(e){return lt(e)?this.contents!==void 0:z(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=$t(this.schema,[e],t):Fe(this.contents)&&this.contents.set(e,t)}setIn(e,t){lt(e)?this.contents=t:this.contents==null?this.contents=$t(this.schema,Array.from(e),t):Fe(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let i;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new re({version:"1.1"}),i={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new re({version:e}),i={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,i=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(i)this.schema=new Fn(Object.assign(i,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:i,maxAliasCount:s,onAnchor:r,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:i===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},l=ce(this.contents,t??"",o);if(typeof r=="function")for(const{count:c,res:p}of o.anchors.values())r(p,c);return typeof a=="function"?Ve(a,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Lr(this,e)}}function Fe(n){if(z(n))return!0;throw new Error("Expected a YAML collection as document contents")}class Ri extends Error{constructor(e,t,i,s){super(),this.name=e,this.code=i,this.message=s,this.pos=t}}class ct extends Ri{constructor(e,t,i){super("YAMLParseError",e,t,i)}}class Tr extends Ri{constructor(e,t,i){super("YAMLWarning",e,t,i)}}const Zn=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>e.linePos(o));const{line:i,col:s}=t.linePos[0];t.message+=` at line ${i}, column ${s}`;let r=s-1,a=n.substring(e.lineStarts[i-1],e.lineStarts[i]).replace(/[\n\r]+$/,"");if(r>=60&&a.length>80){const o=Math.min(r-39,a.length-79);a="…"+a.substring(o),r-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),i>1&&/^ *$/.test(a.substring(0,r))){let o=n.substring(e.lineStarts[i-2],e.lineStarts[i-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const l=t.linePos[1];l?.line===i&&l.col>s&&(o=Math.max(1,Math.min(l.col-s,80-r)));const c=" ".repeat(r)+"^".repeat(o);t.message+=`:

${a}
${c}
`}};function Qe(n,{flow:e,indicator:t,next:i,offset:s,onError:r,parentIndent:a,startOnNewline:o}){let l=!1,c=o,p=o,f="",h="",m=!1,_=!1,d=null,g=null,k=null,S=null,v=null,A=null,T=null;for(const N of n)switch(_&&(N.type!=="space"&&N.type!=="newline"&&N.type!=="comma"&&r(N.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),_=!1),d&&(c&&N.type!=="comment"&&N.type!=="newline"&&r(d,"TAB_AS_INDENT","Tabs are not allowed as indentation"),d=null),N.type){case"space":!e&&(t!=="doc-start"||i?.type!=="flow-collection")&&N.source.includes("	")&&(d=N),p=!0;break;case"comment":{p||r(N,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const G=N.source.substring(1)||" ";f?f+=h+G:f=G,h="",c=!1;break}case"newline":c?f?f+=N.source:(!A||t!=="seq-item-ind")&&(l=!0):h+=N.source,c=!0,m=!0,(g||k)&&(S=N),p=!0;break;case"anchor":g&&r(N,"MULTIPLE_ANCHORS","A node can have at most one anchor"),N.source.endsWith(":")&&r(N.offset+N.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),g=N,T??(T=N.offset),c=!1,p=!1,_=!0;break;case"tag":{k&&r(N,"MULTIPLE_TAGS","A node can have at most one tag"),k=N,T??(T=N.offset),c=!1,p=!1,_=!0;break}case t:(g||k)&&r(N,"BAD_PROP_ORDER",`Anchors and tags must be after the ${N.source} indicator`),A&&r(N,"UNEXPECTED_TOKEN",`Unexpected ${N.source} in ${e??"collection"}`),A=N,c=t==="seq-item-ind"||t==="explicit-key-ind",p=!1;break;case"comma":if(e){v&&r(N,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),v=N,c=!1,p=!1;break}default:r(N,"UNEXPECTED_TOKEN",`Unexpected ${N.type} token`),c=!1,p=!1}const L=n[n.length-1],B=L?L.offset+L.source.length:s;return _&&i&&i.type!=="space"&&i.type!=="newline"&&i.type!=="comma"&&(i.type!=="scalar"||i.source!=="")&&r(i.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),d&&(c&&d.indent<=a||i?.type==="block-map"||i?.type==="block-seq")&&r(d,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:v,found:A,spaceBefore:l,comment:f,hasNewline:m,anchor:g,tag:k,newlineAfterProp:S,end:B,start:T??B}}function pt(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(const e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of n.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(pt(e.key)||pt(e.value))return!0}return!1;default:return!0}}function kn(n,e,t){if(e?.type==="flow-collection"){const i=e.end[0];i.indent===n&&(i.source==="]"||i.source==="}")&&pt(e)&&t(i,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Ki(n,e,t){const{uniqueKeys:i}=n.options;if(i===!1)return!1;const s=typeof i=="function"?i:(r,a)=>r===a||V(r)&&V(a)&&r.value===a.value;return e.some(r=>s(r.key,t))}const ei="All mapping items must start at the same column";function Ir({composeNode:n,composeEmptyNode:e},t,i,s,r){const a=r?.nodeClass??le,o=new a(t.schema);t.atRoot&&(t.atRoot=!1);let l=i.offset,c=null;for(const p of i.items){const{start:f,key:h,sep:m,value:_}=p,d=Qe(f,{indicator:"explicit-key-ind",next:h??m?.[0],offset:l,onError:s,parentIndent:i.indent,startOnNewline:!0}),g=!d.found;if(g){if(h&&(h.type==="block-seq"?s(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in h&&h.indent!==i.indent&&s(l,"BAD_INDENT",ei)),!d.anchor&&!d.tag&&!m){c=d.end,d.comment&&(o.comment?o.comment+=`
`+d.comment:o.comment=d.comment);continue}(d.newlineAfterProp||pt(h))&&s(h??f[f.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else d.found?.indent!==i.indent&&s(l,"BAD_INDENT",ei);t.atKey=!0;const k=d.end,S=h?n(t,h,d,s):e(t,k,f,null,d,s);t.schema.compat&&kn(i.indent,h,s),t.atKey=!1,Ki(t,o.items,S)&&s(k,"DUPLICATE_KEY","Map keys must be unique");const v=Qe(m??[],{indicator:"map-value-ind",next:_,offset:S.range[2],onError:s,parentIndent:i.indent,startOnNewline:!h||h.type==="block-scalar"});if(l=v.end,v.found){g&&(_?.type==="block-map"&&!v.hasNewline&&s(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&d.start<v.found.offset-1024&&s(S.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const A=_?n(t,_,v,s):e(t,l,m,null,v,s);t.schema.compat&&kn(i.indent,_,s),l=A.range[2];const T=new ae(S,A);t.options.keepSourceTokens&&(T.srcToken=p),o.items.push(T)}else{g&&s(S.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(S.comment?S.comment+=`
`+v.comment:S.comment=v.comment);const A=new ae(S);t.options.keepSourceTokens&&(A.srcToken=p),o.items.push(A)}}return c&&c<l&&s(c,"IMPOSSIBLE","Map comment with trailing content"),o.range=[i.offset,l,c??l],o}function Cr({composeNode:n,composeEmptyNode:e},t,i,s,r){const a=r?.nodeClass??Re,o=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=i.offset,c=null;for(const{start:p,value:f}of i.items){const h=Qe(p,{indicator:"seq-item-ind",next:f,offset:l,onError:s,parentIndent:i.indent,startOnNewline:!0});if(!h.found)if(h.anchor||h.tag||f)f?.type==="block-seq"?s(h.end,"BAD_INDENT","All sequence items must start at the same column"):s(l,"MISSING_CHAR","Sequence item without - indicator");else{c=h.end,h.comment&&(o.comment=h.comment);continue}const m=f?n(t,f,h,s):e(t,h.end,p,null,h,s);t.schema.compat&&kn(i.indent,f,s),l=m.range[2],o.items.push(m)}return o.range=[i.offset,l,c??l],o}function _t(n,e,t,i){let s="";if(n){let r=!1,a="";for(const o of n){const{source:l,type:c}=o;switch(c){case"space":r=!0;break;case"comment":{t&&!r&&i(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const p=l.substring(1)||" ";s?s+=a+p:s=p,a="";break}case"newline":s&&(a+=l),r=!0;break;default:i(o,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:s,offset:e}}const dn="Block collections are not allowed within flow collections",pn=n=>n&&(n.type==="block-map"||n.type==="block-seq");function qr({composeNode:n,composeEmptyNode:e},t,i,s,r){const a=i.start.source==="{",o=a?"flow map":"flow sequence",l=r?.nodeClass??(a?le:Re),c=new l(t.schema);c.flow=!0;const p=t.atRoot;p&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let f=i.offset+i.start.source.length;for(let g=0;g<i.items.length;++g){const k=i.items[g],{start:S,key:v,sep:A,value:T}=k,L=Qe(S,{flow:o,indicator:"explicit-key-ind",next:v??A?.[0],offset:f,onError:s,parentIndent:i.indent,startOnNewline:!1});if(!L.found){if(!L.anchor&&!L.tag&&!A&&!T){g===0&&L.comma?s(L.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):g<i.items.length-1&&s(L.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),L.comment&&(c.comment?c.comment+=`
`+L.comment:c.comment=L.comment),f=L.end;continue}!a&&t.options.strict&&pt(v)&&s(v,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(g===0)L.comma&&s(L.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(L.comma||s(L.start,"MISSING_CHAR",`Missing , between ${o} items`),L.comment){let B="";e:for(const N of S)switch(N.type){case"comma":case"space":break;case"comment":B=N.source.substring(1);break e;default:break e}if(B){let N=c.items[c.items.length-1];Z(N)&&(N=N.value??N.key),N.comment?N.comment+=`
`+B:N.comment=B,L.comment=L.comment.substring(B.length+1)}}if(!a&&!A&&!L.found){const B=T?n(t,T,L,s):e(t,L.end,A,null,L,s);c.items.push(B),f=B.range[2],pn(T)&&s(B.range,"BLOCK_IN_FLOW",dn)}else{t.atKey=!0;const B=L.end,N=v?n(t,v,L,s):e(t,B,S,null,L,s);pn(v)&&s(N.range,"BLOCK_IN_FLOW",dn),t.atKey=!1;const G=Qe(A??[],{flow:o,indicator:"map-value-ind",next:T,offset:N.range[2],onError:s,parentIndent:i.indent,startOnNewline:!1});if(G.found){if(!a&&!L.found&&t.options.strict){if(A)for(const $ of A){if($===G.found)break;if($.type==="newline"){s($,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}L.start<G.found.offset-1024&&s(G.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else T&&("source"in T&&T.source?.[0]===":"?s(T,"MISSING_CHAR",`Missing space after : in ${o}`):s(G.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const oe=T?n(t,T,G,s):G.found?e(t,G.end,A,null,G,s):null;oe?pn(T)&&s(oe.range,"BLOCK_IN_FLOW",dn):G.comment&&(N.comment?N.comment+=`
`+G.comment:N.comment=G.comment);const fe=new ae(N,oe);if(t.options.keepSourceTokens&&(fe.srcToken=k),a){const $=c;Ki(t,$.items,N)&&s(B,"DUPLICATE_KEY","Map keys must be unique"),$.items.push(fe)}else{const $=new le(t.schema);$.flow=!0,$.items.push(fe);const ke=(oe??N).range;$.range=[N.range[0],ke[1],ke[2]],c.items.push($)}f=oe?oe.range[2]:G.end}}const h=a?"}":"]",[m,..._]=i.end;let d=f;if(m?.source===h)d=m.offset+m.source.length;else{const g=o[0].toUpperCase()+o.substring(1),k=p?`${g} must end with a ${h}`:`${g} in block collection must be sufficiently indented and end with a ${h}`;s(f,p?"MISSING_CHAR":"BAD_INDENT",k),m&&m.source.length!==1&&_.unshift(m)}if(_.length>0){const g=_t(_,d,t.options.strict,s);g.comment&&(c.comment?c.comment+=`
`+g.comment:c.comment=g.comment),c.range=[i.offset,d,g.offset]}else c.range=[i.offset,d,d];return c}function mn(n,e,t,i,s,r){const a=t.type==="block-map"?Ir(n,e,t,i,r):t.type==="block-seq"?Cr(n,e,t,i,r):qr(n,e,t,i,r),o=a.constructor;return s==="!"||s===o.tagName?(a.tag=o.tagName,a):(s&&(a.tag=s),a)}function Mr(n,e,t,i,s){const r=i.tag,a=r?e.directives.tagName(r.source,h=>s(r,"TAG_RESOLVE_FAILED",h)):null;if(t.type==="block-seq"){const{anchor:h,newlineAfterProp:m}=i,_=h&&r?h.offset>r.offset?h:r:h??r;_&&(!m||m.offset<_.offset)&&s(_,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!a||a==="!"||a===le.tagName&&o==="map"||a===Re.tagName&&o==="seq")return mn(n,e,t,s,a);let l=e.schema.tags.find(h=>h.tag===a&&h.collection===o);if(!l){const h=e.schema.knownTags[a];if(h?.collection===o)e.schema.tags.push(Object.assign({},h,{default:!1})),l=h;else return h?s(r,"BAD_COLLECTION_TYPE",`${h.tag} used for ${o} collection, but expects ${h.collection??"scalar"}`,!0):s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),mn(n,e,t,s,a)}const c=mn(n,e,t,s,a,l),p=l.resolve?.(c,h=>s(r,"TAG_RESOLVE_FAILED",h),e.options)??c,f=X(p)?p:new M(p);return f.range=c.range,f.tag=a,l?.format&&(f.format=l.format),f}function Pr(n,e,t){const i=e.offset,s=jr(e,n.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[i,i,i]};const r=s.mode===">"?M.BLOCK_FOLDED:M.BLOCK_LITERAL,a=e.source?Br(e.source):[];let o=a.length;for(let d=a.length-1;d>=0;--d){const g=a[d][1];if(g===""||g==="\r")o=d;else break}if(o===0){const d=s.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let g=i+s.length;return e.source&&(g+=e.source.length),{value:d,type:r,comment:s.comment,range:[i,g,g]}}let l=e.indent+s.indent,c=e.offset+s.length,p=0;for(let d=0;d<o;++d){const[g,k]=a[d];if(k===""||k==="\r")s.indent===0&&g.length>l&&(l=g.length);else{g.length<l&&t(c+g.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(l=g.length),p=d,l===0&&!n.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=g.length+k.length+1}for(let d=a.length-1;d>=o;--d)a[d][0].length>l&&(o=d+1);let f="",h="",m=!1;for(let d=0;d<p;++d)f+=a[d][0].slice(l)+`
`;for(let d=p;d<o;++d){let[g,k]=a[d];c+=g.length+k.length+1;const S=k[k.length-1]==="\r";if(S&&(k=k.slice(0,-1)),k&&g.length<l){const A=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(c-k.length-(S?2:1),"BAD_INDENT",A),g=""}r===M.BLOCK_LITERAL?(f+=h+g.slice(l)+k,h=`
`):g.length>l||k[0]==="	"?(h===" "?h=`
`:!m&&h===`
`&&(h=`

`),f+=h+g.slice(l)+k,h=`
`,m=!0):k===""?h===`
`?f+=`
`:h=`
`:(f+=h+k,h=" ",m=!1)}switch(s.chomp){case"-":break;case"+":for(let d=o;d<a.length;++d)f+=`
`+a[d][0].slice(l);f[f.length-1]!==`
`&&(f+=`
`);break;default:f+=`
`}const _=i+s.length+e.source.length;return{value:f,type:r,comment:s.comment,range:[i,_,_]}}function jr({offset:n,props:e},t,i){if(e[0].type!=="block-scalar-header")return i(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],r=s[0];let a=0,o="",l=-1;for(let h=1;h<s.length;++h){const m=s[h];if(!o&&(m==="-"||m==="+"))o=m;else{const _=Number(m);!a&&_?a=_:l===-1&&(l=n+h)}}l!==-1&&i(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let c=!1,p="",f=s.length;for(let h=1;h<e.length;++h){const m=e[h];switch(m.type){case"space":c=!0;case"newline":f+=m.source.length;break;case"comment":t&&!c&&i(m,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),f+=m.source.length,p=m.source.substring(1);break;case"error":i(m,"UNEXPECTED_TOKEN",m.message),f+=m.source.length;break;default:{const _=`Unexpected token in block scalar header: ${m.type}`;i(m,"UNEXPECTED_TOKEN",_);const d=m.source;d&&typeof d=="string"&&(f+=d.length)}}}return{mode:r,indent:a,chomp:o,comment:p,length:f}}function Br(n){const e=n.split(/\n( *)/),t=e[0],i=t.match(/^( *)/),r=[i?.[1]?[i[1],t.slice(i[1].length)]:["",t]];for(let a=1;a<e.length;a+=2)r.push([e[a],e[a+1]]);return r}function Dr(n,e,t){const{offset:i,type:s,source:r,end:a}=n;let o,l;const c=(h,m,_)=>t(i+h,m,_);switch(s){case"scalar":o=M.PLAIN,l=Rr(r,c);break;case"single-quoted-scalar":o=M.QUOTE_SINGLE,l=Kr(r,c);break;case"double-quoted-scalar":o=M.QUOTE_DOUBLE,l=$r(r,c);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[i,i+r.length,i+r.length]}}const p=i+r.length,f=_t(a,p,e,t);return{value:l,type:o,comment:f.comment,range:[i,p,f.offset]}}function Rr(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),$i(n)}function Kr(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),$i(n.slice(1,-1)).replace(/''/g,"'")}function $i(n){const e=/(.*?)\r?\n/sy;let t=e.exec(n);if(!t)return n;let i,s;try{i=new RegExp("(?<![ 	])[ 	]+$"),s=new RegExp("^[ 	]+|(?<![ 	])[ 	]+$","g")}catch{i=/[ \t]+$/,s=/^[ \t]+|[ \t]+$/g}let r=t[1].replace(i,""),a=" ",o=e.lastIndex;for(;t=e.exec(n);){const c=t[1].replace(s,"");c===""?a===`
`?r+=a:a=`
`:(r+=a+c,a=" "),o=e.lastIndex}const l=/[ \t]*(.*)/sy;return l.lastIndex=o,t=l.exec(n),r+a+(t?.[1]??"")}function $r(n,e){let t="";for(let i=1;i<n.length-1;++i){const s=n[i];if(!(s==="\r"&&n[i+1]===`
`))if(s===`
`){const{fold:r,offset:a}=Fr(n,i);t+=r,i=a}else if(s==="\\"){let r=n[++i];const a=Ur[r];if(a)t+=a;else if(r===`
`)for(r=n[i+1];r===" "||r==="	";)r=n[++i+1];else if(r==="\r"&&n[i+1]===`
`)for(r=n[++i+1];r===" "||r==="	";)r=n[++i+1];else if(r==="x"||r==="u"||r==="U"){const o=r==="x"?2:r==="u"?4:8;t+=xr(n,i+1,o,e),i+=o}else{const o=n.substr(i-1,2);e(i-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(s===" "||s==="	"){const r=i;let a=n[i+1];for(;a===" "||a==="	";)a=n[++i+1];a!==`
`&&!(a==="\r"&&n[i+2]===`
`)&&(t+=i>r?n.slice(r,i+1):s)}else t+=s}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function Fr(n,e){let t="",i=n[e+1];for(;(i===" "||i==="	"||i===`
`||i==="\r")&&!(i==="\r"&&n[e+2]!==`
`);)i===`
`&&(t+=`
`),e+=1,i=n[e+1];return t||(t=" "),{fold:t,offset:e}}const Ur={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function xr(n,e,t,i){const s=n.substr(e,t),a=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;try{return String.fromCodePoint(a)}catch{const o=n.substr(e-2,t+2);return i(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}}function Fi(n,e,t,i){const{value:s,type:r,comment:a,range:o}=e.type==="block-scalar"?Pr(n,e,i):Dr(e,n.options.strict,i),l=t?n.directives.tagName(t.source,f=>i(t,"TAG_RESOLVE_FAILED",f)):null;let c;n.options.stringKeys&&n.atKey?c=n.schema[ye]:l?c=Jr(n.schema,s,l,t,i):e.type==="scalar"?c=Vr(n,s,e,i):c=n.schema[ye];let p;try{const f=c.resolve(s,h=>i(t??e,"TAG_RESOLVE_FAILED",h),n.options);p=V(f)?f:new M(f)}catch(f){const h=f instanceof Error?f.message:String(f);i(t??e,"TAG_RESOLVE_FAILED",h),p=new M(s)}return p.range=o,p.source=s,r&&(p.type=r),l&&(p.tag=l),c.format&&(p.format=c.format),a&&(p.comment=a),p}function Jr(n,e,t,i,s){if(t==="!")return n[ye];const r=[];for(const o of n.tags)if(!o.collection&&o.tag===t)if(o.default&&o.test)r.push(o);else return o;for(const o of r)if(o.test?.test(e))return o;const a=n.knownTags[t];return a&&!a.collection?(n.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(s(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[ye])}function Vr({atKey:n,directives:e,schema:t},i,s,r){const a=t.tags.find(o=>(o.default===!0||n&&o.default==="key")&&o.test?.test(i))||t[ye];if(t.compat){const o=t.compat.find(l=>l.default&&l.test?.test(i))??t[ye];if(a.tag!==o.tag){const l=e.tagString(a.tag),c=e.tagString(o.tag),p=`Value may be parsed as either ${l} or ${c}`;r(s,"TAG_RESOLVE_FAILED",p,!0)}}return a}function Gr(n,e,t){if(e){t??(t=e.length);for(let i=t-1;i>=0;--i){let s=e[i];switch(s.type){case"space":case"comment":case"newline":n-=s.source.length;continue}for(s=e[++i];s?.type==="space";)n+=s.source.length,s=e[++i];break}}return n}const Hr={composeNode:Ui,composeEmptyNode:Un};function Ui(n,e,t,i){const s=n.atKey,{spaceBefore:r,comment:a,anchor:o,tag:l}=t;let c,p=!0;switch(e.type){case"alias":c=Wr(n,e,i),(o||l)&&i(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Fi(n,e,l,i),o&&(c.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{c=Mr(Hr,n,e,t,i),o&&(c.anchor=o.source.substring(1))}catch(f){const h=f instanceof Error?f.message:String(f);i(e,"RESOURCE_EXHAUSTION",h)}break;default:{const f=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;i(e,"UNEXPECTED_TOKEN",f),p=!1}}return c??(c=Un(n,e.offset,void 0,null,t,i)),o&&c.anchor===""&&i(o,"BAD_ALIAS","Anchor cannot be an empty string"),s&&n.options.stringKeys&&(!V(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&i(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(c.spaceBefore=!0),a&&(e.type==="scalar"&&e.source===""?c.comment=a:c.commentBefore=a),n.options.keepSourceTokens&&p&&(c.srcToken=e),c}function Un(n,e,t,i,{spaceBefore:s,comment:r,anchor:a,tag:o,end:l},c){const p={type:"scalar",offset:Gr(e,t,i),indent:-1,source:""},f=Fi(n,p,o,c);return a&&(f.anchor=a.source.substring(1),f.anchor===""&&c(a,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(f.spaceBefore=!0),r&&(f.comment=r,f.range[2]=l),f}function Wr({options:n},{offset:e,source:t,end:i},s){const r=new In(t.substring(1));r.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+t.length,o=_t(i,a,n.strict,s);return r.range=[e,a,o.offset],o.comment&&(r.comment=o.comment),r}function Yr(n,e,{offset:t,start:i,value:s,end:r},a){const o=Object.assign({_directives:e},n),l=new Zt(void 0,o),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},p=Qe(i,{indicator:"doc-start",next:s??r?.[0],offset:t,onError:a,parentIndent:0,startOnNewline:!0});p.found&&(l.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!p.hasNewline&&a(p.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=s?Ui(c,s,p,a):Un(c,p.end,i,null,p,a);const f=l.contents.range[2],h=_t(r,f,!1,a);return h.comment&&(l.comment=h.comment),l.range=[t,f,h.offset],l}function ot(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];const{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function ti(n){let e="",t=!1,i=!1;for(let s=0;s<n.length;++s){const r=n[s];switch(r[0]){case"#":e+=(e===""?"":i?`

`:`
`)+(r.substring(1)||" "),t=!0,i=!1;break;case"%":n[s+1]?.[0]!=="#"&&(s+=1),t=!1;break;default:t||(i=!0),t=!1}}return{comment:e,afterEmptyLine:i}}class Qr{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,i,s,r)=>{const a=ot(t);r?this.warnings.push(new Tr(a,i,s)):this.errors.push(new ct(a,i,s))},this.directives=new re({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:i,afterEmptyLine:s}=ti(this.prelude);if(i){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${i}`:i;else if(s||e.directives.docStart||!r)e.commentBefore=i;else if(z(r)&&!r.flow&&r.items.length>0){let a=r.items[0];Z(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${i}
${o}`:i}else{const a=r.commentBefore;r.commentBefore=a?`${i}
${a}`:i}}if(t){for(let r=0;r<this.errors.length;++r)e.errors.push(this.errors[r]);for(let r=0;r<this.warnings.length;++r)e.warnings.push(this.warnings[r])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:ti(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,i=-1){for(const s of e)yield*this.next(s);yield*this.end(t,i)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,i,s)=>{const r=ot(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",i,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=Yr(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,i=new ct(ot(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(i):this.doc.errors.push(i);break}case"doc-end":{if(!this.doc){const i="Unexpected doc-end without preceding document";this.errors.push(new ct(ot(e),"UNEXPECTED_TOKEN",i));break}this.doc.directives.docEnd=!0;const t=_t(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const i=this.doc.comment;this.doc.comment=i?`${i}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new ct(ot(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const i=Object.assign({_directives:this.directives},this.options),s=new Zt(void 0,i);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}const xi="\uFEFF",Ji="",Vi="",Sn="";function zr(n){switch(n){case xi:return"byte-order-mark";case Ji:return"doc-mode";case Vi:return"flow-error-end";case Sn:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function de(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const ni=new Set("0123456789ABCDEFabcdef"),Xr=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),qt=new Set(",[]{}"),Zr=new Set(` ,[]{}
\r	`),gn=n=>!n||Zr.has(n);class ea{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let i=this.next??"stream";for(;i&&(t||this.hasChars(1));)i=yield*this.parseNext(i)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let i=0;for(;t===" ";)t=this.buffer[++i+e];if(t==="\r"){const s=this.buffer[i+e+1];if(s===`
`||!s&&!this.atEnd)return e+i+1}return t===`
`||i>=this.indentNext||!t&&!this.atEnd?e+i:-1}if(t==="-"||t==="."){const i=this.buffer.substr(e,3);if((i==="---"||i==="...")&&de(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===xi&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,i=e.indexOf("#");for(;i!==-1;){const r=e[i-1];if(r===" "||r==="	"){t=i-1;break}else i=e.indexOf("#",i+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Ji,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&de(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!de(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&de(t)){const i=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=i,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(gn),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,i=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=i=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((i!==-1&&i<this.indentNext&&s[0]!=="#"||i===0&&(s.startsWith("---")||s.startsWith("..."))&&de(s[3]))&&!(i===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield Vi,yield*this.parseLineStart();let r=0;for(;s[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),s[r]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(gn),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||de(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const i=this.buffer.substring(0,t);let s=i.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const r=this.continueScalar(s+1);if(r===-1)break;s=i.indexOf(`
`,r)}s!==-1&&(t=s-(i[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>de(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,i;e:for(let r=this.pos;i=this.buffer[r];++r)switch(i){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const a=this.buffer[r+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!i&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(i=this.buffer[s];i===" ";)i=this.buffer[++s];if(i==="	"){for(;i==="	"||i===" "||i==="\r"||i===`
`;)i=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let r=e-1,a=this.buffer[r];a==="\r"&&(a=this.buffer[--r]);const o=r;for(;a===" ";)a=this.buffer[--r];if(a===`
`&&r>=this.pos&&r+1+t>o)e=r;else break}while(!0);return yield Sn,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,i=this.pos-1,s;for(;s=this.buffer[++i];)if(s===":"){const r=this.buffer[i+1];if(de(r)||e&&qt.has(r))break;t=i}else if(de(s)){let r=this.buffer[i+1];if(s==="\r"&&(r===`
`?(i+=1,s=`
`,r=this.buffer[i+1]):t=i),r==="#"||e&&qt.has(r))break;if(s===`
`){const a=this.continueScalar(i+1);if(a===-1)break;i=Math.max(i,a-2)}}else{if(e&&qt.has(s))break;t=i}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield Sn,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const i=this.buffer.slice(this.pos,e);return i?(yield i,this.pos+=i.length,i.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(gn),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const t=this.flowLevel>0,i=this.charAt(1);if(de(i)||t&&qt.has(i)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!de(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Xr.has(t))t=this.buffer[++e];else if(t==="%"&&ni.has(this.buffer[e+1])&&ni.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,i;do i=this.buffer[++t];while(i===" "||e&&i==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,i=this.buffer[t];for(;!e(i);)i=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class ta{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,i=this.lineStarts.length;for(;t<i;){const r=t+i>>1;this.lineStarts[r]<e?t=r+1:i=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function Ee(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function ii(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function Gi(n){switch(n?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Mt(n){switch(n.type){case"document":return n.start;case"block-map":{const e=n.items[n.items.length-1];return e.sep??e.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function Ue(n){if(n.length===0)return[];let e=n.length;e:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;n[++e]?.type==="space";);return n.splice(e,n.length)}function Ut(n,e){if(e.length<1e5)Array.prototype.push.apply(n,e);else for(let t=0;t<e.length;++t)n.push(e[t])}function si(n){if(n.start.type==="flow-seq-start")for(const e of n.items)e.sep&&!e.value&&!Ee(e.start,"explicit-key-ind")&&!Ee(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,Gi(e.value)?e.value.end?Ut(e.value.end,e.sep):e.value.end=e.sep:Ut(e.start,e.sep),delete e.sep)}class na{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new ea,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const i of this.lexer.lex(e,t))yield*this.next(i);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=zr(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const i=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:i,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&e?.type!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const i=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in i?i.indent:0:t.type==="flow-collection"&&i.type==="document"&&(t.indent=0),t.type==="flow-collection"&&si(t),i.type){case"document":i.value=t;break;case"block-scalar":i.props.push(t);break;case"block-map":{const s=i.items[i.items.length-1];if(s.value){i.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=i.items[i.items.length-1];s.value?i.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=i.items[i.items.length-1];!s||s.value?i.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((i.type==="document"||i.type==="block-map"||i.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&ii(s.start)===-1&&(t.indent===0||s.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(i.type==="document"?i.end=s.start:i.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{ii(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=Mt(this.peek(2)),i=Ue(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const i="end"in t.value?t.value.end:void 0;(Array.isArray(i)?i[i.length-1]:void 0)?.type==="comment"?i?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2]?.value?.end;if(Array.isArray(s)){Ut(s,t.start),s.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const i=!this.onKeyLine&&this.indent===e.indent,s=i&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(s&&t.sep&&!t.value){const a=[];for(let o=0;o<t.sep.length;++o){const l=t.sep[o];switch(l.type){case"newline":a.push(o);break;case"space":break;case"comment":l.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(r=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":s||t.value?(r.push(this.sourceToken),e.items.push({start:r}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):s||t.value?(r.push(this.sourceToken),e.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Ee(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(Gi(t.key)&&!Ee(t.sep,"newline")){const a=Ue(t.start),o=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:o,sep:l}]})}else r.length>0?t.sep=t.sep.concat(r,this.sourceToken):t.sep.push(this.sourceToken);else if(Ee(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=Ue(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||s?e.items.push({start:r,key:null,sep:[this.sourceToken]}):Ee(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);s||t.value?(e.items.push({start:r,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){if(a.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Ee(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else i&&e.items.push({start:r});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const i="end"in t.value?t.value.end:void 0;(Array.isArray(i)?i[i.length-1]:void 0)?.type==="comment"?i?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2]?.value?.end;if(Array.isArray(s)){Ut(s,t.start),s.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Ee(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const i=this.startBlockValue(e);if(i){this.stack.push(i);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let i;do yield*this.pop(),i=this.peek(1);while(i?.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const i=this.startBlockValue(e);i?this.stack.push(i):(yield*this.pop(),yield*this.step())}else{const i=this.peek(2);if(i.type==="block-map"&&(this.type==="map-value-ind"&&i.indent===e.indent||this.type==="newline"&&!i.items[i.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&i.type!=="flow-collection"){const s=Mt(i),r=Ue(s);si(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Mt(e),i=Ue(t);return i.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Mt(e),i=Ue(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(i=>i.type==="newline"||i.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function ia(n){const e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new ta||null,prettyErrors:e}}function sa(n,e={}){const{lineCounter:t,prettyErrors:i}=ia(e),s=new na(t?.addNewLine),r=new Qr(e);let a=null;for(const o of r.compose(s.parse(n),!0,n.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new ct(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return i&&t&&(a.errors.forEach(Zn(n,t)),a.warnings.forEach(Zn(n,t))),a}function ra(n,e,t){let i;const s=sa(n,t);if(!s)return null;if(s.warnings.forEach(r=>yi(s.options.logLevel,r)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:i},t))}const aa=`# Référentiel — philosophie, terminale générale (BO 2019)
# Généré par une session Claude Code dans le vault (tâche 2.3).
# Ne pas éditer à la main : régénérer depuis 00-meta/listes.json et l'index des nœuds.

schema_version: 1.0.0
genere_le: '2026-09-17'
objet: 'Référentiel du programme de terminale générale : ce que l''application doit couvrir, et ce que
  le vault en couvre déjà. Dérivé de 00-meta/listes.json du vault (extraction fidèle de l''arrêté) et
  de l''index des nœuds. \`id_vault: null\` signale une cible non couverte — c''est le seul indicateur de
  manque, et il est destiné à l''écran de couverture (BACKLOG 5.6).'
sources:
- nom: Programme de philosophie, terminale générale
  reference: BO spécial n°8 du 25 juillet 2019, MENE1921238A
  fichier_vault: 10-sources/institution/spe238_annexe1_programme-philosophie-tle-generale.pdf
  sha256: 91440a1857049948055244f42225e760ed55dbb4a948d3885a033fa20f42898b
  extrait_le: '2026-07-23'
  porte: 17 notions, 84 auteurs, 31 repères
- nom: Muglioni, Repères philosophiques
  reference: J. Muglioni, Repères philosophiques, Ellipses, 2010
  statut_droits: sous droits, exemplaire possédé — hors dépôt public
  fichier_local: _bibliotheque/muglioni-reperes-2010/ (26 PDF)
  markdown_local: 10-sources/bibliotheque/ (conversion, décision 009)
  porte: 26 chapitres, écrits pour le programme de 2003
- nom: Arbitrage BO 2019 / Muglioni
  reference: 00-meta/decisions/2026-07-23-ecart-reperes-bo-muglioni.md
  porte: correspondances, scissions et exceptions ; amendement du soir
comptes:
  notions: 17
  notions_sans_noeud: 0
  auteurs: 84
  auteurs_sans_noeud: 0
  reperes_officiels: 31
  reperes_sans_noeud: 2
  reperes_adosses_a_muglioni: 24
  muglioni_chapitres: 26
exceptions_connues:
- cible: Exemple/preuve
  nature: repère officiel sans nœud
  motif: 'fiche supprimée le 2026-07-23 (amendement) : souche vide sans source ; le vault suit les repères
    effectivement travaillés, pas la nomenclature'
- cible: Hypothèse/conséquence/conclusion
  nature: repère officiel sans nœud
  motif: idem
- cible: Nécessaire, contingent, possible (Muglioni ch. 21)
  nature: chapitre Muglioni hors programme 2019
  motif: 'le triplet de 2003 est scindé en 2019 en « Contingent/nécessaire » et « Impossible/possible
    » ; le nœud rep-necessaire-contingent-possible est conservé en programme: false et pointe vers les
    deux'
- cible: Principe, conséquence (Muglioni ch. 26)
  nature: chapitre Muglioni hors programme 2019
  motif: repère de 2003 supprimé en 2019 ; sa matière est redistribuée entre « Principe/cause/fin » et
    « Hypothèse/conséquence/conclusion »
- cible: Objectif/subjectif/intersubjectif et Principe/cause/fin
  nature: nom officiel porté en alias
  motif: les fiches gardent leur nom d'origine (« Objectif ⁄ subjectif », « Cause ⁄ fin ») et leur id
    ; la formulation 2019 est un alias, conformément à l'amendement du 2026-07-23
notions:
- nom_bo: L'art
  id_vault: not-art
  fichier: L'art
  statut: brouillon
- nom_bo: Le bonheur
  id_vault: not-bonheur
  fichier: Le bonheur
  statut: brouillon
- nom_bo: La conscience
  id_vault: not-conscience
  fichier: La conscience
  statut: brouillon
- nom_bo: Le devoir
  id_vault: not-devoir
  fichier: Le devoir
  statut: brouillon
- nom_bo: L'État
  id_vault: not-etat
  fichier: L'État
  statut: brouillon
- nom_bo: L'inconscient
  id_vault: not-inconscient
  fichier: L'inconscient
  statut: brouillon
- nom_bo: La justice
  id_vault: not-justice
  fichier: La justice
  statut: brouillon
- nom_bo: Le langage
  id_vault: not-langage
  fichier: Le langage
  statut: brouillon
- nom_bo: La liberté
  id_vault: not-liberte
  fichier: La liberté
  statut: brouillon
- nom_bo: La nature
  id_vault: not-nature
  fichier: La nature
  statut: brouillon
- nom_bo: La raison
  id_vault: not-raison
  fichier: La raison
  statut: brouillon
- nom_bo: La religion
  id_vault: not-religion
  fichier: La religion
  statut: brouillon
- nom_bo: La science
  id_vault: not-science
  fichier: La science
  statut: brouillon
- nom_bo: La technique
  id_vault: not-technique
  fichier: La technique
  statut: brouillon
- nom_bo: Le temps
  id_vault: not-temps
  fichier: Le temps
  statut: brouillon
- nom_bo: Le travail
  id_vault: not-travail
  fichier: Le travail
  statut: brouillon
- nom_bo: La vérité
  id_vault: not-verite
  fichier: La vérité
  statut: brouillon
auteurs:
- nom_bo: Les présocratiques
  nom_usuel: Les présocratiques
  periode: antiquite-moyen-age
  id_vault: aut-presocratiques
  statut: travaille
- nom_bo: Platon
  nom_usuel: Platon
  periode: antiquite-moyen-age
  id_vault: aut-platon
  statut: travaille
- nom_bo: Aristote
  nom_usuel: Aristote
  periode: antiquite-moyen-age
  id_vault: aut-aristote
  statut: travaille
- nom_bo: Zhuangzi
  nom_usuel: Zhuangzi
  periode: antiquite-moyen-age
  id_vault: aut-zhuangzi
  statut: travaille
- nom_bo: Épicure
  nom_usuel: Épicure
  periode: antiquite-moyen-age
  id_vault: aut-epicure
  statut: travaille
- nom_bo: Cicéron
  nom_usuel: Cicéron
  periode: antiquite-moyen-age
  id_vault: aut-ciceron
  statut: travaille
- nom_bo: Lucrèce
  nom_usuel: Lucrèce
  periode: antiquite-moyen-age
  id_vault: aut-lucrece
  statut: travaille
- nom_bo: Sénèque
  nom_usuel: Sénèque
  periode: antiquite-moyen-age
  id_vault: aut-seneque
  statut: travaille
- nom_bo: Épictète
  nom_usuel: Épictète
  periode: antiquite-moyen-age
  id_vault: aut-epictete
  statut: travaille
- nom_bo: Marc Aurèle
  nom_usuel: Marc Aurèle
  periode: antiquite-moyen-age
  id_vault: aut-marc-aurele
  statut: travaille
- nom_bo: Nāgārjuna
  nom_usuel: Nāgārjuna
  periode: antiquite-moyen-age
  id_vault: aut-nagarjuna
  statut: travaille
- nom_bo: Sextus Empiricus
  nom_usuel: Sextus Empiricus
  periode: antiquite-moyen-age
  id_vault: aut-empiricus
  statut: travaille
- nom_bo: Plotin
  nom_usuel: Plotin
  periode: antiquite-moyen-age
  id_vault: aut-plotin
  statut: travaille
- nom_bo: Augustin
  nom_usuel: Saint Augustin
  periode: antiquite-moyen-age
  id_vault: aut-augustin
  statut: travaille
- nom_bo: Avicenne
  nom_usuel: Avicenne
  periode: antiquite-moyen-age
  id_vault: aut-avicenne
  statut: travaille
- nom_bo: Anselme
  nom_usuel: Anselme
  periode: antiquite-moyen-age
  id_vault: aut-anselme
  statut: travaille
- nom_bo: Averroès
  nom_usuel: Averroès
  periode: antiquite-moyen-age
  id_vault: aut-averroes
  statut: travaille
- nom_bo: Maïmonide
  nom_usuel: Maïmonide
  periode: antiquite-moyen-age
  id_vault: aut-maimonide
  statut: travaille
- nom_bo: Thomas d'Aquin
  nom_usuel: Thomas d'Aquin
  periode: antiquite-moyen-age
  id_vault: aut-d-aquin
  statut: travaille
- nom_bo: Guillaume d'Occam
  nom_usuel: Guillaume d'Occam
  periode: antiquite-moyen-age
  id_vault: aut-d-occam
  statut: travaille
- nom_bo: N. Machiavel
  nom_usuel: Nicolas Machiavel
  periode: moderne
  id_vault: aut-machiavel
  statut: travaille
- nom_bo: M. Montaigne (de)
  nom_usuel: Michel de Montaigne
  periode: moderne
  id_vault: aut-montaigne
  statut: travaille
- nom_bo: F. Bacon
  nom_usuel: Francis Bacon
  periode: moderne
  id_vault: aut-bacon
  statut: travaille
- nom_bo: T. Hobbes
  nom_usuel: Thomas Hobbes
  periode: moderne
  id_vault: aut-hobbes
  statut: travaille
- nom_bo: R. Descartes
  nom_usuel: René Descartes
  periode: moderne
  id_vault: aut-descartes
  statut: travaille
- nom_bo: B. Pascal
  nom_usuel: Blaise Pascal
  periode: moderne
  id_vault: aut-pascal
  statut: travaille
- nom_bo: J. Locke
  nom_usuel: John Locke
  periode: moderne
  id_vault: aut-locke
  statut: travaille
- nom_bo: B. Spinoza
  nom_usuel: Baruch Spinoza
  periode: moderne
  id_vault: aut-spinoza
  statut: travaille
- nom_bo: N. Malebranche
  nom_usuel: Nicolas Malebranche
  periode: moderne
  id_vault: aut-malebranche
  statut: travaille
- nom_bo: G. W. Leibniz
  nom_usuel: Gottfried Wilhelm Leibniz
  periode: moderne
  id_vault: aut-leibniz
  statut: travaille
- nom_bo: G. Vico
  nom_usuel: Giambattista Vico
  periode: moderne
  id_vault: aut-vico
  statut: travaille
- nom_bo: G. Berkeley
  nom_usuel: George Berkeley
  periode: moderne
  id_vault: aut-berkeley
  statut: travaille
- nom_bo: Montesquieu
  nom_usuel: Montesquieu
  periode: moderne
  id_vault: aut-montesquieu
  statut: travaille
- nom_bo: D. Hume
  nom_usuel: David Hume
  periode: moderne
  id_vault: aut-hume
  statut: travaille
- nom_bo: J.-J. Rousseau
  nom_usuel: Jean-Jacques Rousseau
  periode: moderne
  id_vault: aut-rousseau
  statut: travaille
- nom_bo: D. Diderot
  nom_usuel: Denis Diderot
  periode: moderne
  id_vault: aut-diderot
  statut: travaille
- nom_bo: E. Condillac (de)
  nom_usuel: Étienne Bonnot de Condillac
  periode: moderne
  id_vault: aut-condillac
  statut: travaille
- nom_bo: A. Smith
  nom_usuel: Adam Smith
  periode: moderne
  id_vault: aut-smith
  statut: travaille
- nom_bo: E. Kant
  nom_usuel: Emmanuel Kant
  periode: moderne
  id_vault: aut-kant
  statut: travaille
- nom_bo: J. Bentham
  nom_usuel: Jeremy Bentham
  periode: moderne
  id_vault: aut-bentham
  statut: travaille
- nom_bo: G.W.H. Hegel
  nom_usuel: Georg Wilhelm Friedrich Hegel
  periode: contemporaine
  id_vault: aut-hegel
  statut: travaille
- nom_bo: A. Schopenhauer
  nom_usuel: Arthur Schopenhauer
  periode: contemporaine
  id_vault: aut-schopenhauer
  statut: travaille
- nom_bo: A. Comte
  nom_usuel: Auguste Comte
  periode: contemporaine
  id_vault: aut-comte
  statut: travaille
- nom_bo: A.- A. Cournot
  nom_usuel: Antoine-Augustin Cournot
  periode: contemporaine
  id_vault: aut-cournot
  statut: travaille
- nom_bo: L. Feuerbach
  nom_usuel: Ludwig Feuerbach
  periode: contemporaine
  id_vault: aut-feuerbach
  statut: travaille
- nom_bo: A. Tocqueville (de)
  nom_usuel: Alexis de Tocqueville
  periode: contemporaine
  id_vault: aut-tocqueville
  statut: travaille
- nom_bo: J.-S. Mill
  nom_usuel: John Stuart Mill
  periode: contemporaine
  id_vault: aut-mill
  statut: travaille
- nom_bo: S. Kierkegaard
  nom_usuel: Søren Kierkegaard
  periode: contemporaine
  id_vault: aut-kierkegaard
  statut: travaille
- nom_bo: K. Marx
  nom_usuel: Karl Marx
  periode: contemporaine
  id_vault: aut-marx
  statut: travaille
- nom_bo: F. Engels
  nom_usuel: Friedrich Engels
  periode: contemporaine
  id_vault: aut-engels
  statut: travaille
- nom_bo: W. James
  nom_usuel: William James
  periode: contemporaine
  id_vault: aut-james
  statut: travaille
- nom_bo: F. Nietzsche
  nom_usuel: Friedrich Nietzsche
  periode: contemporaine
  id_vault: aut-nietzsche
  statut: travaille
- nom_bo: S. Freud
  nom_usuel: Sigmund Freud
  periode: contemporaine
  id_vault: aut-freud
  statut: travaille
- nom_bo: E. Durkheim
  nom_usuel: Émile Durkheim
  periode: contemporaine
  id_vault: aut-durkheim
  statut: travaille
- nom_bo: H. Bergson
  nom_usuel: Henri Bergson
  periode: contemporaine
  id_vault: aut-bergson
  statut: travaille
- nom_bo: E. Husserl
  nom_usuel: Edmund Husserl
  periode: contemporaine
  id_vault: aut-husserl
  statut: travaille
- nom_bo: M. Weber
  nom_usuel: Max Weber
  periode: contemporaine
  id_vault: aut-weber
  statut: travaille
- nom_bo: Alain
  nom_usuel: Alain
  periode: contemporaine
  id_vault: aut-alain
  statut: travaille
- nom_bo: M. Mauss
  nom_usuel: Marcel Mauss
  periode: contemporaine
  id_vault: aut-mauss
  statut: travaille
- nom_bo: B. Russell
  nom_usuel: Bertrand Russell
  periode: contemporaine
  id_vault: aut-russell
  statut: travaille
- nom_bo: K. Jaspers
  nom_usuel: Karl Jaspers
  periode: contemporaine
  id_vault: aut-jaspers
  statut: travaille
- nom_bo: G. Bachelard
  nom_usuel: Gaston Bachelard
  periode: contemporaine
  id_vault: aut-bachelard
  statut: travaille
- nom_bo: M. Heidegger
  nom_usuel: Martin Heidegger
  periode: contemporaine
  id_vault: aut-heidegger
  statut: travaille
- nom_bo: L. Wittgenstein
  nom_usuel: Ludwig Wittgenstein
  periode: contemporaine
  id_vault: aut-wittgenstein
  statut: travaille
- nom_bo: W. Benjamin
  nom_usuel: Walter Benjamin
  periode: contemporaine
  id_vault: aut-benjamin
  statut: travaille
- nom_bo: K. Popper
  nom_usuel: Karl Popper
  periode: contemporaine
  id_vault: aut-popper
  statut: travaille
- nom_bo: V. Jankélévitch
  nom_usuel: Vladimir Jankélévitch
  periode: contemporaine
  id_vault: aut-jankelevitch
  statut: travaille
- nom_bo: H. Jonas
  nom_usuel: Hans Jonas
  periode: contemporaine
  id_vault: aut-jonas
  statut: travaille
- nom_bo: R. Aron
  nom_usuel: Raymond Aron
  periode: contemporaine
  id_vault: aut-aron
  statut: travaille
- nom_bo: J.-P. Sartre
  nom_usuel: Jean-Paul Sartre
  periode: contemporaine
  id_vault: aut-sartre
  statut: travaille
- nom_bo: H. Arendt
  nom_usuel: Hannah Arendt
  periode: contemporaine
  id_vault: aut-arendt
  statut: travaille
- nom_bo: E. Levinas
  nom_usuel: Emmanuel Lévinas
  periode: contemporaine
  id_vault: aut-levinas
  statut: travaille
- nom_bo: S. de Beauvoir
  nom_usuel: Simone de Beauvoir
  periode: contemporaine
  id_vault: aut-beauvoir
  statut: travaille
- nom_bo: C. Lévi-Strauss
  nom_usuel: Claude Lévi-Strauss
  periode: contemporaine
  id_vault: aut-levi-strauss
  statut: travaille
- nom_bo: M. Merleau-Ponty
  nom_usuel: Maurice Merleau-Ponty
  periode: contemporaine
  id_vault: aut-merleau-ponty
  statut: travaille
- nom_bo: S. Weil
  nom_usuel: Simone Weil
  periode: contemporaine
  id_vault: aut-simone-weil
  statut: travaille
- nom_bo: J. Hersch
  nom_usuel: Jeanne Hersch
  periode: contemporaine
  id_vault: aut-hersch
  statut: travaille
- nom_bo: P. Ricœur
  nom_usuel: Paul Ricœur
  periode: contemporaine
  id_vault: aut-ricoeur
  statut: travaille
- nom_bo: E. Anscombe
  nom_usuel: Elizabeth Anscombe
  periode: contemporaine
  id_vault: aut-anscombe
  statut: travaille
- nom_bo: I. Murdoch
  nom_usuel: Iris Murdoch
  periode: contemporaine
  id_vault: aut-murdoch
  statut: travaille
- nom_bo: J. Rawls
  nom_usuel: John Rawls
  periode: contemporaine
  id_vault: aut-rawls
  statut: travaille
- nom_bo: G. Simondon
  nom_usuel: Gilbert Simondon
  periode: contemporaine
  id_vault: aut-simondon
  statut: travaille
- nom_bo: M. Foucault
  nom_usuel: Michel Foucault
  periode: contemporaine
  id_vault: aut-foucault
  statut: travaille
- nom_bo: H. Putnam
  nom_usuel: Hilary Putnam
  periode: contemporaine
  id_vault: aut-putnam
  statut: travaille
reperes_officiels:
- nom_bo: Absolu/relatif
  id_vault: rep-absolu-relatif
  fichier: Absolu ⁄ relatif
  statut: stable
  muglioni_chapitre: 18
- nom_bo: Abstrait/concret
  id_vault: rep-abstrait-concret
  fichier: Abstrait ⁄ concret
  statut: stable
  muglioni_chapitre: 7
- nom_bo: En acte/en puissance
  id_vault: rep-en-acte-en-puissance
  fichier: En acte ⁄ en puissance
  statut: stable
  muglioni_chapitre: 20
- nom_bo: Analyse/synthèse
  id_vault: rep-analyse-synthese
  fichier: Analyse ⁄ synthèse
  statut: stable
  muglioni_chapitre: 8
- nom_bo: Concept/image/métaphore
  id_vault: rep-concept-image-metaphore
  fichier: Concept ⁄ image ⁄ métaphore
  statut: stable
  muglioni_chapitre: null
- nom_bo: Contingent/nécessaire
  id_vault: rep-contingent-necessaire
  fichier: Contingent ⁄ nécessaire
  statut: stable
  muglioni_chapitre: null
- nom_bo: Croire/savoir
  id_vault: rep-croire-savoir
  fichier: Croire ⁄ savoir
  statut: stable
  muglioni_chapitre: 1
- nom_bo: Essentiel/accidentel
  id_vault: rep-essentiel-accidentel
  fichier: Essentiel ⁄ accidentel
  statut: stable
  muglioni_chapitre: 19
- nom_bo: Exemple/preuve
  id_vault: null
  fichier: null
  statut: null
  muglioni_chapitre: null
- nom_bo: Expliquer/comprendre
  id_vault: rep-expliquer-comprendre
  fichier: Expliquer ⁄ comprendre
  statut: stable
  muglioni_chapitre: 13
- nom_bo: En fait/en droit
  id_vault: rep-en-fait-en-droit
  fichier: En fait ⁄ en droit
  statut: stable
  muglioni_chapitre: 11
- nom_bo: Formel/matériel
  id_vault: rep-formel-materiel
  fichier: Formel ⁄ matériel
  statut: stable
  muglioni_chapitre: 22
- nom_bo: Genre/espèce/individu
  id_vault: rep-genre-espece-individu
  fichier: Genre ⁄ espèce ⁄ individu
  statut: stable
  muglioni_chapitre: 23
- nom_bo: Hypothèse/conséquence/conclusion
  id_vault: null
  fichier: null
  statut: null
  muglioni_chapitre: null
- nom_bo: Idéal/réel
  id_vault: rep-ideal-reel
  fichier: Idéal ⁄ réel
  statut: stable
  muglioni_chapitre: 15
- nom_bo: Identité/égalité/différence
  id_vault: rep-identite-egalite-difference
  fichier: Identité ⁄ égalité ⁄ différence
  statut: stable
  muglioni_chapitre: 5
- nom_bo: Impossible/possible
  id_vault: rep-possible-impossible
  fichier: Possible ⁄ impossible
  statut: stable
  muglioni_chapitre: null
- nom_bo: Intuitif/discursif
  id_vault: rep-intuitif-discursif
  fichier: Intuitif ⁄ discursif
  statut: stable
  muglioni_chapitre: 10
- nom_bo: Légal/légitime
  id_vault: rep-legal-legitime
  fichier: Légal ⁄ légitime
  statut: stable
  muglioni_chapitre: 16
- nom_bo: Médiat/immédiat
  id_vault: rep-mediat-immediat
  fichier: Médiat ⁄ immédiat
  statut: stable
  muglioni_chapitre: 9
- nom_bo: Objectif/subjectif/intersubjectif
  id_vault: rep-objectif-subjectif
  fichier: Objectif ⁄ subjectif
  statut: stable
  muglioni_chapitre: 4
- nom_bo: Obligation/contrainte
  id_vault: rep-obligation-contrainte
  fichier: Obligation ⁄ contrainte
  statut: stable
  muglioni_chapitre: 17
- nom_bo: Origine/fondement
  id_vault: rep-origine-fondement
  fichier: Origine ⁄ fondement
  statut: stable
  muglioni_chapitre: 24
- nom_bo: Persuader/convaincre
  id_vault: rep-persuader-convaincre
  fichier: Persuader ⁄ convaincre
  statut: stable
  muglioni_chapitre: 2
- nom_bo: Principe/cause/fin
  id_vault: rep-cause-fin
  fichier: Cause ⁄ fin
  statut: stable
  muglioni_chapitre: 14
- nom_bo: Public/privé
  id_vault: rep-public-prive
  fichier: Public ⁄ privé
  statut: stable
  muglioni_chapitre: null
- nom_bo: Ressemblance/analogie
  id_vault: rep-ressemblance-analogie
  fichier: Ressemblance ⁄ analogie
  statut: stable
  muglioni_chapitre: 6
- nom_bo: Théorie/pratique
  id_vault: rep-theorie-pratique
  fichier: Théorie ⁄ pratique
  statut: stable
  muglioni_chapitre: 12
- nom_bo: Transcendant/immanent
  id_vault: rep-transcendant-immanent
  fichier: Transcendant ⁄ immanent
  statut: stable
  muglioni_chapitre: 25
- nom_bo: Universel/général/particulier/singulier
  id_vault: rep-universel-general-particulier-singulier
  fichier: Universel ⁄ général ⁄ particulier ⁄ singulier
  statut: stable
  muglioni_chapitre: 3
- nom_bo: Vrai/probable/certain
  id_vault: rep-vrai-probable-certain
  fichier: Vrai ⁄ probable ⁄ certain
  statut: stable
  muglioni_chapitre: null
reperes_muglioni:
- chapitre: 1
  titre: Croire, Savoir
  id_vault: rep-croire-savoir
  markdown: 10-sources/bibliotheque/01. Croire, Savoir.md
- chapitre: 2
  titre: Persuader, convaincre
  id_vault: rep-persuader-convaincre
  markdown: 10-sources/bibliotheque/02. Persuader, convaincre.md
- chapitre: 3
  titre: Universel, général, particulier, singulier
  id_vault: rep-universel-general-particulier-singulier
  markdown: 10-sources/bibliotheque/03. Universel, général, particulier, singulier.md
- chapitre: 4
  titre: Objectif, subjectif
  id_vault: rep-objectif-subjectif
  markdown: 10-sources/bibliotheque/04. Objectif, subjectif.md
- chapitre: 5
  titre: Identité, égalité, différence
  id_vault: rep-identite-egalite-difference
  markdown: 10-sources/bibliotheque/05. Identité, égalité, différence.md
- chapitre: 6
  titre: Ressemblance, analogie
  id_vault: rep-ressemblance-analogie
  markdown: 10-sources/bibliotheque/06. Ressemblance, analogie.md
- chapitre: 7
  titre: Abstrait, concret
  id_vault: rep-abstrait-concret
  markdown: 10-sources/bibliotheque/07. Abstrait, concret.md
- chapitre: 8
  titre: Analyse, synthèse
  id_vault: rep-analyse-synthese
  markdown: 10-sources/bibliotheque/08. Analyse, synthèse.md
- chapitre: 9
  titre: Médiat, immédiat
  id_vault: rep-mediat-immediat
  markdown: 10-sources/bibliotheque/09. Médiat, immédiat.md
- chapitre: 10
  titre: Intuitif, discursif
  id_vault: rep-intuitif-discursif
  markdown: 10-sources/bibliotheque/10. Intuitif, discursif.md
- chapitre: 11
  titre: En fait, en droit
  id_vault: rep-en-fait-en-droit
  markdown: 10-sources/bibliotheque/11. En fait, en droit.md
- chapitre: 12
  titre: En théorie, en pratique
  id_vault: rep-theorie-pratique
  markdown: 10-sources/bibliotheque/12. En théorie, en pratique.md
- chapitre: 13
  titre: Expliquer, comprendre
  id_vault: rep-expliquer-comprendre
  markdown: 10-sources/bibliotheque/13. Expliquer, comprendre.md
- chapitre: 14
  titre: Cause, fin
  id_vault: rep-cause-fin
  markdown: 10-sources/bibliotheque/14. Cause, fin.md
- chapitre: 15
  titre: Idéal, réel
  id_vault: rep-ideal-reel
  markdown: 10-sources/bibliotheque/15. Idéal, réel.md
- chapitre: 16
  titre: Légal, légitime
  id_vault: rep-legal-legitime
  markdown: 10-sources/bibliotheque/16. Légal, légitime.md
- chapitre: 17
  titre: Obligation, contrainte
  id_vault: rep-obligation-contrainte
  markdown: 10-sources/bibliotheque/17. Obligation, contrainte.md
- chapitre: 18
  titre: Absolu, relatif
  id_vault: rep-absolu-relatif
  markdown: 10-sources/bibliotheque/18. Absolu, relatif.md
- chapitre: 19
  titre: Essentiel, accidentel
  id_vault: rep-essentiel-accidentel
  markdown: 10-sources/bibliotheque/19. Essentiel, accidentel.md
- chapitre: 20
  titre: En acte, en puissance
  id_vault: rep-en-acte-en-puissance
  markdown: 10-sources/bibliotheque/20. En acte, en puissance.md
- chapitre: 21
  titre: Nécessaire, contingent, possible
  id_vault: rep-necessaire-contingent-possible
  markdown: 10-sources/bibliotheque/21. Nécessaire, contingent, possible.md
- chapitre: 22
  titre: Formel, matériel
  id_vault: rep-formel-materiel
  markdown: 10-sources/bibliotheque/22. Formel, matériel.md
- chapitre: 23
  titre: Genre, espèce, individu
  id_vault: rep-genre-espece-individu
  markdown: 10-sources/bibliotheque/23. Genre, espèce, individu.md
- chapitre: 24
  titre: Origine, fondement
  id_vault: rep-origine-fondement
  markdown: 10-sources/bibliotheque/24. Origine, fondement.md
- chapitre: 25
  titre: Transcendant, immanent
  id_vault: rep-transcendant-immanent
  markdown: 10-sources/bibliotheque/25. Transcendant, immanent.md
- chapitre: 26
  titre: Principe, conséquence
  id_vault: rep-principe-consequence
  markdown: 10-sources/bibliotheque/26. Principe, conséquence.md
`,en=ra(aa),xn=n=>new Set((n??[]).map(e=>e.id_vault).filter(e=>typeof e=="string")),oa=xn(en.notions),la=xn(en.reperes_officiels),ca=xn(en.reperes_muglioni);new Map((en.auteurs??[]).filter(n=>typeof n.id_vault=="string"&&typeof n.periode=="string").map(n=>[n.id_vault,n.periode]));function ua(n,e,t,i){const s=e==="notion"?oa:e==="repère"?la:null;return s?i==="2019"?s.has(n):t&&!s.has(n):t}const fa={lalande:"Lalande",cassin:"Cassin"},ha={notion:"Notion",repère:"Repère",concept:"Concept",auteur:"Auteur",courant:"Courant",oeuvre:"Œuvre",texte:"Texte"};class da{noeuds;auteurDe=new Map;auteursLies=new Map;vue;constructor(e,t,i="2019"){this.noeuds=new Map([...e].map(a=>[a.id,a])),this.vue=i;const s=new Map,r=(a,o)=>{const l=s.get(a)??new Set;l.add(o),s.set(a,l),this.auteurDe.has(a)||this.auteurDe.set(a,o)};for(const a of t){const o=this.noeuds.get(a.de),l=this.noeuds.get(a.vers);!o||!l||(l.type==="auteur"&&o.type!=="auteur"&&r(o.id,l.id),o.type==="auteur"&&l.type!=="auteur"&&r(l.id,o.id))}for(const[a,o]of s)this.auteursLies.set(a,o.size)}titreDe(e){return e?this.noeuds.get(e)?.titre??null:null}auteurPrincipal(e){return this.titreDe(this.auteurDe.get(e))}nombreAuteurs(e){return this.auteursLies.get(e)??0}}function Ae(n){return n.filter(e=>typeof e=="string"&&e.trim()!=="").join(" · ")}function ri(n,e){if(n==null&&e==null)return null;const t=r=>r!=null&&r<0?String(-r):r==null?"":String(r),i=(n??0)<0&&(e??0)<0,s=(n??0)<0||(e??0)<0;if(i)return`${t(n)}–${t(e)} av. J.-C.`;if(s){const r=(n??0)<0?`${t(n)} av. J.-C.`:t(n),a=(e??0)<0?`${t(e)} av. J.-C.`:t(e);return`${r}–${a}`}return`${t(n)}–${t(e)}`}const pa=72;function ma(n,e){if(n.length<=e)return n;const t=n.slice(0,e-1),i=t.lastIndexOf(" ");return`${(i>e*.6?t.slice(0,i):t).trimEnd()}…`}function ga(n){const e=n.split(/\s[—–-]\s/)[1];return e&&e.replace(/\s*\([^)]*\)\s*$/,"").trim()||null}function Hi(n){const e=(n.pages??[]).length>0?`p. ${[...new Set(n.pages)].join("–")}`:n.page_livre!=null?`p. ${n.page_livre}`:null;return Ae([fa[n.ouvrage]??n.ouvrage,n.categorie_grammaticale,e])}function Nn(n,e){const t=ha[n.type]??n.type,i=ua(n.id,n.type,n.programme??!1,e.vue)?`programme ${e.vue}`:null;switch(n.type){case"auteur":{const s=(n.courants??[])[0]??null;return Ae([ri(n.date_naissance,n.date_mort),s])||t}case"notion":{const s=e.nombreAuteurs(n.id);return Ae([t,i,s>0?`${s} auteurs`:null])}case"repère":{const s=ca.has(n.id)?"Muglioni":null;return Ae([t,n.famille??i,s])}case"concept":return Ae([e.auteurPrincipal(n.id)??t]);case"courant":return Ae([ri(n.debut_env,n.fin_env)])||t;case"oeuvre":return Ae([e.auteurPrincipal(n.id),n.date_naissance==null?null:String(n.date_naissance)])||t;case"texte":{const s=e.auteurPrincipal(n.id),r=ga(n.titre),a=pa-(s?s.length+3:0);return Ae([s,r?ma(r,Math.max(a,20)):null])||t}default:return t}}var ba=K('<div class="mg-fond svelte-1ukc5tp" role="presentation"><div class="mg-feuille svelte-1ukc5tp" role="dialog" aria-label="Annoter ce passage" tabindex="-1"><p class="mg-extrait svelte-1ukc5tp"> </p> <textarea rows="4" aria-label="Note" placeholder="Ce que ce passage vous fait penser…" class="svelte-1ukc5tp"></textarea> <div class="mg-actions svelte-1ukc5tp"><button class="mg-annuler svelte-1ukc5tp">Annuler</button> <button class="mg-garder svelte-1ukc5tp"> </button></div></div></div>');function ya(n,e){mt(e,!0);let t=D("");var i=ba(),s=Q(i),r=Q(s),a=ne(r),o=P(r,2);zi(o);var l=P(o,2),c=Q(l),p=P(c,2),f=ne(p,!0);ie(h=>{ee(a,`« ${e.extrait??""} »`),ee(f,h)},[()=>u(t).trim()===""?"Surligner":"Enregistrer"]),Y("click",i,function(...h){e.surFermer?.apply(this,h)}),Y("click",s,h=>h.stopPropagation()),Y("keydown",s,h=>{h.key==="Escape"&&e.surFermer()}),oi(o,()=>u(t),h=>w(t,h)),Y("click",c,function(...h){e.surFermer?.apply(this,h)}),Y("click",p,()=>e.surEnregistrer(u(t).trim())),j(n,i),gt()}xt(["click","keydown"]);function Jn(n){return n.replace(/\s+/g," ").trim()}const Wi=8;function ai(n){return Jn(n).length>=Wi}function va(n,e){if(_a(n),e.length===0)return 0;const t=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),i=[],s=[];for(let c=t.nextNode();c;c=t.nextNode())i.push(c),s.push(c.data);const r=s.join(""),a=[];let o=0;for(const c of s)a.push(o),o+=c.length;let l=0;for(const c of[...e].sort((p,f)=>f.length-p.length)){const p=Jn(c);if(p.length<Wi)continue;const f=wa(r,p);if(f===-1)continue;const h=ka(i,a,f,f+p.length);if(!h)continue;const m=document.createElement("mark");m.className="marginale";try{m.appendChild(h.extractContents()),h.insertNode(m),l+=1}catch{}}return l}function _a(n){for(const e of[...n.querySelectorAll("mark.marginale")]){const t=e.parentNode;if(t){for(;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e),t.normalize()}}}function wa(n,e){const t=n.indexOf(e);if(t!==-1)return t;const i=e.split(" ").map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("\\s+");return n.search(new RegExp(i))}function ka(n,e,t,i){const s=l=>{for(let c=n.length-1;c>=0;c-=1){const p=e[c],f=n[c];if(!(p===void 0||!f)&&l>=p)return{noeud:f,decalage:l-p}}return null},r=s(t),a=s(Math.max(t,i-1));if(!r||!a)return null;const o=document.createRange();return o.setStart(r.noeud,Math.min(r.decalage,r.noeud.data.length)),o.setEnd(a.noeud,Math.min(a.decalage+1,a.noeud.data.length)),o}var Sa=K('<button class="fiche-retour svelte-1cgqi8k" aria-label="Revenir">‹</button>'),Na=K('<button role="tab" class="svelte-1cgqi8k"> </button>'),Oa=K('<div class="fiche-niveaux svelte-1cgqi8k" role="tablist"></div>'),Aa=K('<section class="fiche-relation svelte-1cgqi8k"><h3 class="svelte-1cgqi8k">Prérequis</h3> <div class="fiche-cartes svelte-1cgqi8k"></div></section>'),Ea=K('<button class="fiche-autres svelte-1cgqi8k"> </button>'),La=K('<section class="fiche-relation svelte-1cgqi8k"><h3 class="svelte-1cgqi8k"> </h3> <div class="fiche-cartes svelte-1cgqi8k"><!> <!></div></section>'),Ta=K('<li><button class="svelte-1cgqi8k"> </button></li>'),Ia=K('<section class="fiche-relation svelte-1cgqi8k"><h3 class="svelte-1cgqi8k">Liens externes</h3> <ul class="fiche-externes svelte-1cgqi8k"></ul></section>'),Ca=K('<p class="fiche-references svelte-1cgqi8k"> </p>'),qa=K('<section class="fiche-relation svelte-1cgqi8k"><h3 class="svelte-1cgqi8k">Dans les dictionnaires</h3> <div class="fiche-cartes svelte-1cgqi8k"></div></section>'),Ma=K('<button class="fiche-annoter svelte-1cgqi8k">Annoter</button>'),Pa=K(`<div class="fiche-sortie svelte-1cgqi8k" role="dialog" aria-modal="true" aria-label="Quitter l'application"><p>Ce lien sort de l’application.</p> <p class="fiche-adresse svelte-1cgqi8k"> </p> <button class="fiche-safari svelte-1cgqi8k">Ouvrir dans Safari</button> <button class="fiche-rester svelte-1cgqi8k">Rester ici</button></div>`),ja=K('<div><!> <article class="lecture" lang="fr"><!> <!> <!> <!> <!> <!> <!> <!> <!></article> <!> <!> <!> <!> <!></div>');function Ba(n,e){mt(e,!0);let t=je(e,"entrees",19,()=>[]),i=je(e,"contexte",3,null),s=je(e,"surOuvrirEntree",3,null),r=je(e,"surRecherche",3,null),a=je(e,"peutRevenir",3,!1),o=D(Le([])),l=D(null),c=D(null);const p=x(()=>bs(e.fiche.corps_md??"")),f=x(()=>["Lycée","Prépa","Université"].filter(b=>u(p).has(b)));let h=D(null);const m=x(()=>u(h)&&u(p).has(u(h))?u(p).get(u(h))??"":e.fiche.corps_md??""),_=x(()=>(e.fiche.prerequis??[]).map(b=>e.noeuds.get(b)).filter(b=>b!==void 0)),d=x(()=>{const b=[];for(const y of ms){const C=e.aretes.filter(I=>y.aretes.includes(I.relation)).filter(I=>y.inverse?I.vers===e.fiche.id:I.de===e.fiche.id).map(I=>e.noeuds.get(y.inverse?I.de:I.vers)).filter(I=>I!==void 0),q=C.filter((I,W)=>C.findIndex(R=>R.id===I.id)===W).slice(0,12).map(I=>({id:I.id,type:I.type,titre:I.titre,ligne:i()?Nn(I,i()):null}));q.length>0&&b.push({titre:y.titre,cartes:q})}return b}),g=x(()=>t().map((b,y)=>({e:b,rang:y})).filter(({e:b})=>Kt(b.vedette)===Kt(e.fiche.titre)).slice(0,2));let k=null;function S(b){const y="touches"in b?b.touches[0]:b;if(!y)return null;const C=document.caretRangeFromPoint?.(y.clientX,y.clientY),q=C?.startContainer.textContent??"";if(!q)return null;const I=C?.startOffset??0,W=q.slice(0,I).match(/[\p{L}'’-]+$/u)?.[0]??"",R=q.slice(I).match(/^[\p{L}'’-]+/u)?.[0]??"",te=(W+R).trim();return te.length>2?te:null}function v(b){if(!jt("definition-toucher"))return;const y=S(b);y&&(k=setTimeout(()=>{const C=e.resolveur?.resoudre(y)??null,q=C?e.noeuds.get(C.id):void 0;q&&w(c,{id:q.id,titre:q.titre,type:q.type,phrase:li(q.corps_md??"")},!0)},450))}function A(){k&&clearTimeout(k),k=null}function T(b){const y=b.target.closest("a.wikilien");if(!y)return;b.preventDefault();const C=y.dataset.id;C&&e.surOuvrir(C)}let L=D(null),B=D(Le([])),N=D(null),G=D(!1);ht(()=>{const b=e.fiche.id;if(!jt("marginalia")){w(B,[],!0);return}ls(b).then(y=>{Xi(()=>e.fiche.id)===b&&w(B,y.map(C=>C.extrait),!0)})}),ht(()=>{const b=u(L),y=u(B);u(m),b&&va(b,y)});function oe(){if(!jt("marginalia"))return;const b=window.getSelection(),y=b?.toString()??"",C=b&&u(L)&&b.anchorNode?u(L).contains(b.anchorNode):!1;w(G,C&&ai(y),!0)}function fe(){const b=Jn(window.getSelection()?.toString()??"");ai(b)&&(w(N,b,!0),w(G,!1))}async function $(b){const y=u(N);w(N,null),y&&(await ys({fiche:e.fiche.id,extrait:y,note:b,cree:Date.now()}),w(B,[...u(B),y],!0),window.getSelection()?.removeAllRanges())}const ke=24,nt=64;let Ie=null;function wt(b){const y=b.changedTouches[0];!y||y.clientX>ke||(Ie={x:y.clientX,y:y.clientY})}function tn(b){const y=b.changedTouches[0];if(!Ie||!y)return;const C=y.clientX-Ie.x,q=Math.abs(y.clientY-Ie.y);Ie=null,C>nt&&q<C&&e.surRetour()}var it=ja();Pt("touchstart",Vn,wt,void 0,!0),Pt("touchend",Vn,tn),Pt("selectionchange",Zi,oe);let kt;var St=Q(it);{var nn=b=>{var y=Sa();Y("click",y,function(...C){e.surRetour?.apply(this,C)}),j(b,y)};J(St,b=>{a()&&b(nn)})}var me=P(St,2),Ke=Q(me);{let b=x(()=>e.fiche.statut??null),y=x(()=>e.fiche.programme??!1);cs(Ke,{get type(){return e.fiche.type},get titre(){return e.fiche.titre},get statut(){return u(b)},get programme(){return u(y)}})}var $e=P(Ke,2);{var sn=b=>{gs(b,{titre:"En bref",get resume(){return`${u(d).length??""} groupes de relations`},repliable:!0,children:(y,C)=>{var q=En(),I=Pe(q);Oe(I,17,()=>u(d),W=>W.titre,(W,R)=>{var te=es();ie(()=>ee(te,`${u(R).titre??""} : ${u(R).cartes.length??""}.`)),j(W,te)}),j(y,q)},$$slots:{default:!0}})};J($e,b=>{u(d).length>0&&b(sn)})}var Nt=P($e,2);{var rn=b=>{var y=Oa();Oe(y,20,()=>["Lycée","Prépa","Université"],C=>C,(C,q)=>{var I=Na(),W=ne(I,!0);ie(R=>{An(I,"aria-selected",u(h)===q),I.disabled=R,ee(W,q)},[()=>!u(f).includes(q)]),Y("click",I,()=>w(h,u(h)===q?null:q,!0)),j(C,I)}),j(b,y)};J(Nt,b=>{u(f).length>0&&b(rn)})}var Ce=P(Nt,2);{var Ot=b=>{var y=Aa(),C=P(Q(y),2);Oe(C,21,()=>u(_),q=>q.id,(q,I)=>{un(q,{get type(){return u(I).type},get titre(){return u(I).titre},surChoix:()=>e.surOuvrir(u(I).id)})}),j(b,y)};J(Ce,b=>{u(_).length>0&&b(Ot)})}var st=P(Ce,2);us(st,()=>fs(u(m),e.resolveur));var At=P(st,2);Oe(At,17,()=>u(d),b=>b.titre,(b,y)=>{var C=La(),q=Q(C),I=ne(q,!0),W=P(q,2),R=Q(W);Oe(R,17,()=>u(o).includes(u(y).titre)?u(y).cartes:u(y).cartes.slice(0,2),ve=>ve.id,(ve,be)=>{un(ve,{get type(){return u(be).type},get titre(){return u(be).titre},get ligne(){return u(be).ligne},surChoix:()=>e.surOuvrir(u(be).id)})});var te=P(R,2);{var Ne=ve=>{var be=Ea(),qe=ne(be);ie(()=>ee(qe,`et ${u(y).cartes.length-2} autre${u(y).cartes.length-2>1?"s":""}`)),Y("click",be,()=>w(o,[...u(o),u(y).titre],!0)),j(ve,be)},cn=x(()=>u(y).cartes.length>2&&!u(o).includes(u(y).titre));J(te,ve=>{u(cn)&&ve(Ne)})}ie(()=>ee(I,u(y).titre)),j(b,C)});var Et=P(At,2);{var an=b=>{var y=Ia(),C=P(Q(y),2);Oe(C,21,()=>e.fiche.liens_externes??[],q=>q.url,(q,I)=>{var W=Ta(),R=Q(W),te=ne(R,!0);ie(()=>ee(te,u(I).site)),Y("click",R,()=>w(l,u(I).url,!0)),j(q,W)}),j(b,y)};J(Et,b=>{(e.fiche.liens_externes??[]).length>0&&b(an)})}var Lt=P(Et,2);{var on=b=>{var y=Ca(),C=ne(y);ie(()=>ee(C,`${e.fiche.references_hors_ligne??""} référence${(e.fiche.references_hors_ligne??0)>1?"s":""} dans la bibliothèque`)),j(b,y)};J(Lt,b=>{(e.fiche.references_hors_ligne??0)>0&&b(on)})}var ln=P(Lt,2);{var O=b=>{var y=qa(),C=P(Q(y),2);Oe(C,21,()=>u(g),({e:q,rang:I})=>I,(q,I)=>{let W=()=>u(I).e,R=()=>u(I).rang;{let te=x(()=>Hi(W())),Ne=x(()=>s()?()=>s()(R()):null);un(q,{get type(){return W().ouvrage},get titre(){return W().vedette},get ligne(){return u(te)},get surChoix(){return u(Ne)}})}}),j(b,y)};J(ln,b=>{u(g).length>0&&b(O)})}hs(me,b=>w(L,b),()=>u(L));var E=P(me,2);{let b=x(()=>xe.estFavori(e.fiche.id)),y=x(()=>xe.estALire(e.fiche.id));ds(E,{get favori(){return u(b)},get aLire(){return u(y)},surFavori:()=>xe.basculer("favori",e.fiche),surALire:()=>xe.basculer("aLire",e.fiche),surRecherche:()=>r()?.()})}var U=P(E,2);{var he=b=>{var y=Ma();Y("click",y,fe),j(b,y)};J(U,b=>{u(G)&&b(he)})}var Se=P(U,2);{var H=b=>{ya(b,{get extrait(){return u(N)},surEnregistrer:y=>{$(y)},surFermer:()=>w(N,null)})};J(Se,b=>{u(N)&&b(H)})}var ge=P(Se,2);{var rt=b=>{Gs(b,{get titre(){return u(c).titre},get type(){return u(c).type},get definition(){return u(c).phrase},surOuvrir:()=>{const y=u(c)?.id;w(c,null),y&&e.surOuvrir(y)},surFermer:()=>w(c,null)})};J(ge,b=>{u(c)&&b(rt)})}var F=P(ge,2);{var se=b=>{var y=Pa(),C=P(Q(y),2),q=ne(C,!0),I=P(C,2),W=P(I,2);ie(()=>ee(q,u(l))),Y("click",I,()=>{u(l)&&Hs(u(l))&&Ys(u(l)),w(l,null)}),Y("click",W,()=>w(l,null)),j(b,y)};J(F,b=>{u(l)&&b(se)})}ie(()=>kt=ps(it,1,"fiche-page svelte-1cgqi8k",null,kt,{"avec-retour":a()})),Y("click",me,T),Y("keydown",me,b=>{b.key==="Enter"&&T(b)}),Y("touchstart",me,v),Y("touchend",me,A),Y("touchmove",me,A),j(n,it),gt()}xt(["click","keydown","touchstart","touchend","touchmove"]);var Da=K('<li><button class="svelte-aqngz4"> </button></li>'),Ra=K('<ul class="fa-chemin svelte-aqngz4"></ul>'),Ka=K('<div class="fa-zone svelte-aqngz4"><!> <button class="fa-pastille svelte-aqngz4"> </button></div>');function $a(n,e){mt(e,!0);let t=D(!1);var i=En(),s=Pe(i);{var r=a=>{var o=Ka(),l=Q(o);{var c=h=>{var m=Ra();Oe(m,23,()=>e.chemin,(_,d)=>_.id+d,(_,d,g)=>{var k=Da(),S=Q(k),v=ne(S,!0);ie(()=>{S.disabled=u(g)===e.chemin.length-1,ee(v,u(d).titre)}),Y("click",S,()=>{e.surAller(u(g)),w(t,!1)}),j(_,k)}),j(h,m)};J(l,h=>{u(t)&&h(c)})}var p=P(l,2),f=ne(p);ie(()=>{An(p,"aria-expanded",u(t)),ee(f,`${e.chemin.length??""} fiches`)}),Y("click",p,()=>w(t,!u(t))),j(a,o)};J(s,a=>{e.chemin.length>1&&a(r)})}j(n,i),gt()}xt(["click"]);const On=Le({prete:!1});function Fa(n){n.waiting&&navigator.serviceWorker.controller&&(On.prete=!0),n.addEventListener("updatefound",()=>{const e=n.installing;e&&e.addEventListener("statechange",()=>{e.state==="installed"&&navigator.serviceWorker.controller&&(On.prete=!0)})})}async function Ua(){if(!("serviceWorker"in navigator))return;const n="/philo/";try{const e=await navigator.serviceWorker.register(`${n}sw.js`,{scope:n,type:"classic"});Fa(e),await e.update()}catch{}}var bn=K("<!> <!>",1),xa=K('<div class="attente svelte-1n46o8q"><p class="svelte-1n46o8q"> </p> <p class="detail svelte-1n46o8q"> </p></div>'),Ja=K('<p class="detail mono svelte-1n46o8q"> </p>'),Va=K('<p class="svelte-1n46o8q">Ouverture du contenu…</p> <!>',1),Ga=K('<p class="svelte-1n46o8q">Déchiffrement…</p>'),Ha=K(`<p class="svelte-1n46o8q">Aucun contenu.</p> <p class="detail svelte-1n46o8q">Le contenu n'a pas encore été publié, ou cet appareil n'a jamais été en ligne.</p>`,1),Wa=K(`<p class="detail svelte-1n46o8q">Mise à jour prête — elle s'appliquera au prochain lancement.</p>`),Ya=K('<div class="attente svelte-1n46o8q"><!> <!></div>');function Qa(n,e){mt(e,!0);let t=D(Le(ts()?"chargement":"installation")),i=D(null),s=D(null),r=D(null),a=D(!1),o=D(Le(new Map)),l=D(Le([])),c=D(Le([])),p=D(null),f=D(null),h=D(null),m=null,_=D(null),d=D(Le([])),g=D(null),k=D(!1),S=D("wiki"),v=D("accueil"),A=D(null),T=D("accueil"),L=D("2019");ht(()=>{Es(Ls.valeurs)});const B=As("/philo/");ht(()=>{u(t)==="chargement"&&G()});function N(){w(t,"chargement")}async function G(){const O=await Ts(B,U=>w(s,U,!0));if(w(s,null),!O){w(t,"vide");return}w(i,O,!0);const E=await Is();if(E&&Cs(E.sel,E.iterations,O)){await oe(E.cle);return}E&&await Gn(),w(t,"verrouille")}async function oe(O){if(u(i)){w(t,"ouverture"),w(a,!1),m=O;try{const E=JSON.parse(await Ce(u(i).index,O));if(u(i).entrees){const H=JSON.parse(await Ce(u(i).entrees,O));w(c,H.entrees,!0)}const U=E.blocs.find(H=>H.type==="graphe");if(!U)throw new Error("Graphe absent du contenu.");const he=JSON.parse(await Ce(U.id,O));w(o,new Map(he.noeuds.map(H=>[H.id,H])),!0),w(l,he.aretes??[],!0),w(_,_s(he),!0),w(r,{noeuds:he.noeuds.length,entrees:u(c).length,blocs:u(i).blocs.length},!0);const Se=[...he.noeuds.map(H=>({id:H.id,type:H.type,titre:H.titre,alias:(H.aliases??[]).join(" "),en:(H.en??[]).map(ge=>ge.term).join(" "),definition:li(H.corps_md??""),corps:(H.corps_md??"").slice(0,4e3)})),...u(c).map((H,ge)=>({id:`entree:${ge}`,type:"entree",titre:H.vedette,alias:"",en:"",definition:H.definition_courte,corps:"",ouvrage:H.ouvrage}))];w(g,ws(Se),!0),await xe.charger(),w(d,[],!0),w(v,"accueil"),w(S,"wiki"),w(t,"ouvert")}catch{await Gn(),w(a,!0),w(t,"verrouille")}}}const fe=x(()=>u(o).get(u(d)[u(d).length-1]??"")??null);function $(O){if(O.startsWith("entree:")){Ke(Number(O.slice(7)));return}u(o).has(O)&&($e(),u(v)!=="fiche"&&w(T,u(v),!0),w(S,"wiki"),w(v,"fiche"),w(d,[...u(d),O],!0),xe.voir(O),window.scrollTo(0,0))}const ke=x(()=>new da(u(o).values(),u(l),u(L))),nt=O=>{const E=u(o).get(O);return E?Nn(E,u(ke)):null},Ie=x(()=>{const O={};for(const E of u(o).values())O[E.type]=(O[E.type]??0)+1;return O.entree=u(c).length,O}),wt=O=>u(o).get(O)?.titre??null,tn=x(()=>{const O=Hn.find(E=>E.id===u(A))?.type;return O?[...u(o).values()].filter(E=>E.type===O).map(E=>({id:E.id,titre:E.titre,type:E.type,statut:E.statut,sous:Nn(E,u(ke))})).sort((E,U)=>E.titre.localeCompare(U.titre,"fr")):[]}),it=x(()=>u(S)==="wiki"&&(u(p)!==null||u(v)==="fiche")),kt=x(()=>Hn.find(O=>O.id===u(A))?.libelle??"");function St(O){if(O==="dictionnaires"){w(k,!0);return}w(A,O,!0),w(v,"portail"),window.scrollTo(0,0)}function nn(){const O=[...u(o).values()].filter(U=>(U.corps_md??"").length>200),E=O[Math.floor(Math.random()*O.length)];E&&$(E.id)}function me(O){w(S,O,!0),w(k,!1),O==="wiki"&&(w(v,"accueil"),w(d,[],!0),$e()),window.scrollTo(0,0)}async function Ke(O){const E=u(c)[O];if(!(!E||!m)&&(w(p,E,!0),w(h,O,!0),w(f,null),window.scrollTo(0,0),!!E.bloc))try{const U=await Ce(E.bloc,m);u(h)===O&&w(f,ks(U,E.vedette),!0)}catch{w(f,null)}}function $e(){w(p,null),w(h,null),w(f,null)}const sn=x(()=>u(h)===null?{avant:null,apres:null}:Rs(u(c),u(h))),Nt=x(()=>{if(!u(p))return[];const O=Kt(u(p).vedette);return[...u(o).values()].filter(E=>Kt(E.titre)===O).slice(0,3).map(E=>({id:E.id,type:E.type,titre:E.titre}))});function rn(){u(d).length>1?w(d,u(d).slice(0,-1),!0):(w(d,[],!0),w(v,u(T),!0)),window.scrollTo(0,0)}async function Ce(O,E){let U=await Ss(O);return U||(U=await B.bloc(O),await Ns(O,U)),Os(U,E)}var Ot=bn(),st=Pe(Ot);{var At=O=>{vs(O,{get index(){return u(g)},sousLigneDe:nt,sousLigneEntreeDe:E=>{const U=u(c)[E];return U?Hi(U):null},surOuvrir:E=>{w(k,!1),$(E)},surFermer:()=>w(k,!1)})};J(st,O=>{u(t)==="ouvert"&&u(k)&&O(At)})}var Et=P(st,2);{var an=O=>{var E=bn(),U=Pe(E);{var he=F=>{var se=En(),b=Pe(se);{var y=R=>{Ps(R,{get entree(){return u(p)},get corps(){return u(f)},get resolveur(){return u(_)},get voisines(){return u(sn)},get fichesLiees(){return u(Nt)},surOuvrirFiche:$,surOuvrirEntree:te=>{Ke(te)},surRetour:$e,surRecherche:()=>w(k,!0)})},C=R=>{var te=bn(),Ne=Pe(te);Ba(Ne,{get fiche(){return u(fe)},get noeuds(){return u(o)},get aretes(){return u(l)},get resolveur(){return u(_)},get entrees(){return u(c)},get contexte(){return u(ke)},peutRevenir:!0,surOuvrir:$,surRetour:rn,surOuvrirEntree:qe=>{Ke(qe)},surRecherche:()=>w(k,!0)});var cn=P(Ne,2);{var ve=qe=>{{let Qi=x(()=>u(d).map(at=>({id:at,titre:u(o).get(at)?.titre??at})));$a(qe,{get chemin(){return u(Qi)},surAller:at=>{w(d,u(d).slice(0,at+1),!0),window.scrollTo(0,0)}})}},be=x(()=>jt("fil-ariane"));J(cn,qe=>{u(be)&&qe(ve)})}j(R,te)},q=R=>{js(R,{get titre(){return u(kt)},get fiches(){return u(tn)},surOuvrir:$,surRetour:()=>w(v,"accueil")})},I=R=>{Bs(R,{titreDe:wt,sousLigneDe:nt,surOuvrir:$,surRetour:()=>w(v,"accueil")})},W=R=>{{let te=x(()=>u(_)?.manques().size??0);Ds(R,{get comptes(){return u(Ie)},titreDe:wt,sousLigneDe:nt,get manques(){return u(te)},surPortail:St,surOuvrir:$,surSauvegardes:()=>w(v,"sauvegardes"),surHasard:nn,surRecherche:()=>w(k,!0),get programme(){return u(L)},set programme(Ne){w(L,Ne,!0)}})}};J(b,R=>{u(p)?R(y):u(v)==="fiche"&&u(fe)?R(C,1):u(v)==="portail"?R(q,2):u(v)==="sauvegardes"?R(I,3):R(W,-1)})}j(F,se)},Se=F=>{qs(F,{get contenu(){return u(r)}})},H=F=>{var se=xa(),b=Q(se),y=ne(b,!0),C=P(b,2),q=ne(C,!0);ie(()=>{ee(y,u(S)==="etude"?"Étude":"Textes"),ee(q,u(S)==="etude"?"Exercices, révision espacée et couverture : étape 5.":"Textes intégraux et cours convertis : étape 5.")}),j(F,se)};J(U,F=>{u(S)==="wiki"?F(he):u(S)==="reglages"?F(Se,1):F(H,-1)})}var ge=P(U,2);{var rt=F=>{Ms(F,{get actif(){return u(S)},surChoix:me})};J(ge,F=>{u(it)||F(rt)})}j(O,E)},Lt=O=>{ns(O,{surTolerance:N})},on=O=>{{let E=x(is);xs(O,{get manifeste(){return u(i)},get refus(){return u(a)},surOuverture:oe,get memorisable(){return u(E)}})}},ln=O=>{var E=Ya(),U=Q(E);{var he=F=>{var se=Va(),b=P(Pe(se),2);{var y=C=>{var q=Ja(),I=ne(q);ie(W=>ee(I,`${u(s).charges??""} / ${u(s).total??""} blocs — ${W??""} Mo`),[()=>(u(s).octets/1048576).toFixed(1)]),j(C,q)};J(b,C=>{u(s)&&C(y)})}j(F,se)},Se=F=>{var se=Ga();j(F,se)},H=F=>{var se=Ha();j(F,se)};J(U,F=>{u(t)==="chargement"?F(he):u(t)==="ouverture"?F(Se,1):u(t)==="vide"&&F(H,2)})}var ge=P(U,2);{var rt=F=>{var se=Wa();j(F,se)};J(ge,F=>{On.prete&&F(rt)})}j(O,E)};J(Et,O=>{u(t)==="ouvert"?O(an):u(t)==="installation"?O(Lt,1):u(t)==="verrouille"&&u(i)?O(on,2):O(ln,-1)})}j(n,Ot),gt()}const Yi=document.getElementById("app");if(!Yi)throw new Error("Élément #app introuvable.");ss(Qa,{target:Yi});Ua();
