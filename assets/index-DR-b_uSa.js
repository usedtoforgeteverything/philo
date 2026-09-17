import{p as kt,u as vt,i as V,g as u,t as re,r as Ft,l as j,b as St,s as K,v as $,n as w,c as P,e as z,m as U,j as te,o as ne,d as Yt,h as Cn,k as Q,w as is,a as Ce,x as ss,$ as Yn,y as rs,f as Le,z as as,A as fi,B as Ge,C as os,I as ls,D as cs,q as us}from"./Installation-CWd2cBZK.js";import{p as De,b as hi,a as fs,d as hs,m as ds,n as di,c as ps,A as ms,h as gs,r as bs,e as ys,B as vs,f as He,s as _s,g as We,i as pi,C as gn,N as ws,j as ks,k as Ss,R as Ns,l as Os,o as As,q as Qn,t as Es,u as Ls,v as Ts,w as Is,x as Cs,y as qs,z as Ms,D as Ps,E as js,F as Bs,G as Ds,H as Rs,I as Ks,P as $s,S as Fs,J as Us,K as xs,L as zn}from"./Reglages-DSKdFMeW.js";import{a as Ut}from"./features-DfOghPAs.js";var Js=U('<label class="memoriser svelte-odrj32"><input type="checkbox"/> Mémoriser sur cet appareil</label>'),Vs=U(`<p class="memoriser svelte-odrj32">La phrase ne peut pas être mémorisée hors de l'application installée.</p>`),Gs=U('<p class="refus svelte-odrj32" role="alert"> </p>'),Hs=U(`<div class="ecran svelte-odrj32"><form class="svelte-odrj32"><h1 class="svelte-odrj32">Philo</h1> <p class="invite svelte-odrj32">Phrase de passe</p> <input type="password" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" enterkeyhint="go" aria-label="Phrase de passe" class="svelte-odrj32"/> <!> <button type="submit" class="svelte-odrj32"> </button> <!> <p class="note svelte-odrj32">La phrase n'est écrite nulle part. « Mémoriser » garde sur cet appareil une clé
      qui ne peut pas en ressortir, jamais la phrase.</p></form></div>`);function Ws(n,e){kt(e,!0);let t=De(e,"refus",3,!1),i=De(e,"memorisable",3,!0),s=K(""),r=K(!1),a=K("attente"),o=$(()=>t()?"Phrase refusée.":"");vt(()=>{t()&&w(a,"attente")});async function l(y){if(y.preventDefault(),u(s).trim()===""||u(a)==="ouverture")return;w(a,"ouverture");const E=await hs(u(s),e.manifeste);u(r)&&i()&&await ds(E,e.manifeste),w(s,""),e.surOuverture(E)}var c=Hs(),p=z(c),f=P(z(p),4),h=P(f,2);{var m=y=>{var E=Js(),T=z(E);fs(T,()=>u(r),I=>w(r,I)),j(y,E)},_=y=>{var E=Vs();j(y,E)};V(h,y=>{i()?y(m):y(_,-1)})}var d=P(h,2),g=ne(d,!0),S=P(d,2);{var k=y=>{var E=Gs(),T=ne(E,!0);re(()=>te(T,u(o))),j(y,E)};V(S,y=>{u(o)&&y(k)})}re(y=>{f.disabled=u(a)==="ouverture",d.disabled=y,te(g,u(a)==="ouverture"?"Ouverture…":"Ouvrir")},[()=>u(s).trim()===""||u(a)==="ouverture"]),Ft("submit",p,l),hi(f,()=>u(s),y=>w(s,y)),j(n,c),St()}const Ys=[{id:"reperes",titre:"Repères liés",types:["repère"]},{id:"auteurs",titre:"Auteurs et positions",types:["auteur"]},{id:"concepts",titre:"Concepts",types:["concept"]},{id:"textes",titre:"Textes",types:["texte","oeuvre"]},{id:"courant",titre:"Courant et époque",types:["courant"],seulementSur:["auteur"]},{id:"voir-aussi",titre:"Voir aussi",types:["notion"]}],dt=2;var Qs=U('<p class="cd-definition svelte-4qesmr"> </p>'),zs=U('<div class="cd-fond svelte-4qesmr" role="presentation"><div class="cd-carte svelte-4qesmr" role="dialog"><p class="cd-type svelte-4qesmr"> </p> <p class="cd-titre svelte-4qesmr"> </p> <!> <button class="cd-ouvrir svelte-4qesmr">Ouvrir</button></div></div>');function Xs(n,e){var t=zs(),i=z(t),s=z(i),r=ne(s,!0),a=P(s,2),o=ne(a,!0),l=P(a,2);{var c=f=>{var h=Qs(),m=ne(h,!0);re(()=>te(m,e.definition)),j(f,h)};V(l,f=>{e.definition&&f(c)})}var p=P(l,2);re(()=>{Cn(i,"aria-label",e.titre),te(r,e.type),te(o,e.titre)}),Q("click",t,function(...f){e.surFermer?.apply(this,f)}),Q("click",p,function(...f){e.surOuvrir?.apply(this,f)}),j(n,t)}Yt(["click"]);function Zs(n,e=window.location.href){let t;try{t=new URL(n,e)}catch{return!0}if(t.protocol!=="http:"&&t.protocol!=="https:")return!0;const i=new URL(e);return t.origin!==i.origin?!0:!t.pathname.startsWith(er(i.pathname))}function er(n){const e=n.lastIndexOf("/");return e<=0?"/":n.slice(0,e+1)}function tr(n){window.open(n,"_blank","noopener,noreferrer")}const qn=Symbol.for("yaml.alias"),Nn=Symbol.for("yaml.document"),qe=Symbol.for("yaml.map"),mi=Symbol.for("yaml.pair"),_e=Symbol.for("yaml.scalar"),it=Symbol.for("yaml.seq"),he=Symbol.for("yaml.node.type"),st=n=>!!n&&typeof n=="object"&&n[he]===qn,Qt=n=>!!n&&typeof n=="object"&&n[he]===Nn,Nt=n=>!!n&&typeof n=="object"&&n[he]===qe,ee=n=>!!n&&typeof n=="object"&&n[he]===mi,G=n=>!!n&&typeof n=="object"&&n[he]===_e,Ot=n=>!!n&&typeof n=="object"&&n[he]===it;function X(n){if(n&&typeof n=="object")switch(n[he]){case qe:case it:return!0}return!1}function Z(n){if(n&&typeof n=="object")switch(n[he]){case qn:case qe:case _e:case it:return!0}return!1}const gi=n=>(G(n)||X(n))&&!!n.anchor,Be=Symbol("break visit"),nr=Symbol("skip children"),bt=Symbol("remove node");function rt(n,e){const t=ir(e);Qt(n)?Ye(null,n.contents,t,Object.freeze([n]))===bt&&(n.contents=null):Ye(null,n,t,Object.freeze([]))}rt.BREAK=Be;rt.SKIP=nr;rt.REMOVE=bt;function Ye(n,e,t,i){const s=sr(n,e,t,i);if(Z(s)||ee(s))return rr(n,i,s),Ye(n,s,t,i);if(typeof s!="symbol"){if(X(e)){i=Object.freeze(i.concat(e));for(let r=0;r<e.items.length;++r){const a=Ye(r,e.items[r],t,i);if(typeof a=="number")r=a-1;else{if(a===Be)return Be;a===bt&&(e.items.splice(r,1),r-=1)}}}else if(ee(e)){i=Object.freeze(i.concat(e));const r=Ye("key",e.key,t,i);if(r===Be)return Be;r===bt&&(e.key=null);const a=Ye("value",e.value,t,i);if(a===Be)return Be;a===bt&&(e.value=null)}}return s}function ir(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function sr(n,e,t,i){if(typeof t=="function")return t(n,e,i);if(Nt(e))return t.Map?.(n,e,i);if(Ot(e))return t.Seq?.(n,e,i);if(ee(e))return t.Pair?.(n,e,i);if(G(e))return t.Scalar?.(n,e,i);if(st(e))return t.Alias?.(n,e,i)}function rr(n,e,t){const i=e[e.length-1];if(X(i))i.items[n]=t;else if(ee(i))n==="key"?i.key=t:i.value=t;else if(Qt(i))i.contents=t;else{const s=st(i)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const ar={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},or=n=>n.replace(/[!,[\]{}]/g,e=>ar[e]);class oe{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},oe.defaultYaml,e),this.tags=Object.assign({},oe.defaultTags,t)}clone(){const e=new oe(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new oe(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:oe.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},oe.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:oe.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},oe.defaultTags),this.atNextDocument=!1);const i=e.trim().split(/[ \t]+/),s=i.shift();switch(s){case"%TAG":{if(i.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),i.length<2))return!1;const[r,a]=i;return this.tags[r]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,i.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=i;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const a=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,a),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,i,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const r=this.tags[i];if(r)try{return r+decodeURIComponent(s)}catch(a){return t(String(a)),null}return i==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,i]of Object.entries(this.tags))if(e.startsWith(i))return t+or(e.substring(i.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],i=Object.entries(this.tags);let s;if(e&&i.length>0&&Z(e.contents)){const r={};rt(e.contents,(a,o)=>{Z(o)&&o.tag&&(r[o.tag]=!0)}),s=Object.keys(r)}else s=[];for(const[r,a]of i)r==="!!"&&a==="tag:yaml.org,2002:"||(!e||s.some(o=>o.startsWith(a)))&&t.push(`%TAG ${r} ${a}`);return t.join(`
`)}}oe.defaultYaml={explicit:!1,version:"1.2"};oe.defaultTags={"!!":"tag:yaml.org,2002:"};function bi(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function yi(n){const e=new Set;return rt(n,{Value(t,i){i.anchor&&e.add(i.anchor)}}),e}function vi(n,e){for(let t=1;;++t){const i=`${n}${t}`;if(!e.has(i))return i}}function lr(n,e){const t=[],i=new Map;let s=null;return{onAnchor:r=>{t.push(r),s??(s=yi(n));const a=vi(e,s);return s.add(a),a},setAnchors:()=>{for(const r of t){const a=i.get(r);if(typeof a=="object"&&a.anchor&&(G(a.node)||X(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=r,o}}},sourceObjects:i}}function Qe(n,e,t,i){if(i&&typeof i=="object")if(Array.isArray(i))for(let s=0,r=i.length;s<r;++s){const a=i[s],o=Qe(n,i,String(s),a);o===void 0?delete i[s]:o!==a&&(i[s]=o)}else if(i instanceof Map)for(const s of Array.from(i.keys())){const r=i.get(s),a=Qe(n,i,s,r);a===void 0?i.delete(s):a!==r&&i.set(s,a)}else if(i instanceof Set)for(const s of Array.from(i)){const r=Qe(n,i,s,s);r===void 0?i.delete(s):r!==s&&(i.delete(s),i.add(r))}else for(const[s,r]of Object.entries(i)){const a=Qe(n,i,s,r);a===void 0?delete i[s]:a!==r&&(i[s]=a)}return n.call(e,t,i)}function fe(n,e,t){if(Array.isArray(n))return n.map((i,s)=>fe(i,String(s),t));if(n&&typeof n.toJSON=="function"){if(!t||!gi(n))return n.toJSON(e,t);const i={aliasCount:0,count:1,res:void 0};t.anchors.set(n,i),t.onCreate=r=>{i.res=r,delete t.onCreate};const s=n.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof n=="bigint"&&!t?.keep?Number(n):n}class Mn{constructor(e){Object.defineProperty(this,he,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:i,onAnchor:s,reviver:r}={}){if(!Qt(e))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},o=fe(this,"",a);if(typeof s=="function")for(const{count:l,res:c}of a.anchors.values())s(c,l);return typeof r=="function"?Qe(r,{"":o},"",o):o}}class Pn extends Mn{constructor(e){super(qn),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if(t?.maxAliasCount===0)throw new ReferenceError("Alias resolution is disabled");let i;t?.aliasResolveCache?i=t.aliasResolveCache:(i=[],rt(e,{Node:(r,a)=>{(st(a)||gi(a))&&i.push(a)}}),t&&(t.aliasResolveCache=i));let s;for(const r of i){if(r===this)break;r.anchor===this.source&&(s=r)}if(s&&t){const{anchors:r,doc:a,maxAliasCount:o}=t;let l=r.get(s);if(l||(fe(s,null,t),l=r.get(s)),l?.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(o>=0&&(l.count+=1,l.aliasCount===0&&(l.aliasCount=xt(a,s,r)),l.count*l.aliasCount>o)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}}return s}toJSON(e,t){if(!t)return{source:this.source};const i=this.resolve(t.doc,t);if(!i){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(s)}return t.anchors.get(i).res}toString(e,t,i){const s=`*${this.source}`;if(e){if(bi(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${s} `}return s}}function xt(n,e,t){if(st(e)){const i=e.resolve(n),s=t&&i&&t.get(i);return s?s.count*s.aliasCount:0}else if(X(e)){let i=0;for(const s of e.items){const r=xt(n,s,t);r>i&&(i=r)}return i}else if(ee(e)){const i=xt(n,e.key,t),s=xt(n,e.value,t);return Math.max(i,s)}return 1}const _i=n=>!n||typeof n!="function"&&typeof n!="object";class C extends Mn{constructor(e){super(_e),this.value=e}toJSON(e,t){return t?.keep?this.value:fe(this.value,e,t)}toString(){return String(this.value)}}C.BLOCK_FOLDED="BLOCK_FOLDED";C.BLOCK_LITERAL="BLOCK_LITERAL";C.PLAIN="PLAIN";C.QUOTE_DOUBLE="QUOTE_DOUBLE";C.QUOTE_SINGLE="QUOTE_SINGLE";const cr="tag:yaml.org,2002:";function ur(n,e,t){if(e){const i=t.filter(r=>r.tag===e),s=i.find(r=>!r.format)??i[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(i=>i.identify?.(n)&&!i.format)}function _t(n,e,t){if(Qt(n)&&(n=n.contents),Z(n))return n;if(ee(n)){const f=t.schema[qe].createNode?.(t.schema,null,t);return f.items.push(n),f}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:i,onAnchor:s,onTagObj:r,schema:a,sourceObjects:o}=t;let l;if(i&&n&&typeof n=="object"){if(l=o.get(n),l)return l.anchor??(l.anchor=s(n)),new Pn(l.anchor);l={anchor:null,node:null},o.set(n,l)}e?.startsWith("!!")&&(e=cr+e.slice(2));let c=ur(n,e,a.tags);if(!c){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const f=new C(n);return l&&(l.node=f),f}c=n instanceof Map?a[qe]:Symbol.iterator in Object(n)?a[it]:a[qe]}r&&(r(c),delete t.onTagObj);const p=c?.createNode?c.createNode(t.schema,n,t):typeof c?.nodeClass?.from=="function"?c.nodeClass.from(t.schema,n,t):new C(n);return e?p.tag=e:c.default||(p.tag=c.tag),l&&(l.node=p),p}function Gt(n,e,t){let i=t;for(let s=e.length-1;s>=0;--s){const r=e[s];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const a=[];a[r]=i,i=a}else i=new Map([[r,i]])}return _t(i,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const mt=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class wi extends Mn{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(i=>Z(i)||ee(i)?i.clone(e):i),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(mt(e))this.add(t);else{const[i,...s]=e,r=this.get(i,!0);if(X(r))r.addIn(s,t);else if(r===void 0&&this.schema)this.set(i,Gt(this.schema,s,t));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${s}`)}}deleteIn(e){const[t,...i]=e;if(i.length===0)return this.delete(t);const s=this.get(t,!0);if(X(s))return s.deleteIn(i);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${i}`)}getIn(e,t){const[i,...s]=e,r=this.get(i,!0);return s.length===0?!t&&G(r)?r.value:r:X(r)?r.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!ee(t))return!1;const i=t.value;return i==null||e&&G(i)&&i.value==null&&!i.commentBefore&&!i.comment&&!i.tag})}hasIn(e){const[t,...i]=e;if(i.length===0)return this.has(t);const s=this.get(t,!0);return X(s)?s.hasIn(i):!1}setIn(e,t){const[i,...s]=e;if(s.length===0)this.set(i,t);else{const r=this.get(i,!0);if(X(r))r.setIn(s,t);else if(r===void 0&&this.schema)this.set(i,Gt(this.schema,s,t));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${s}`)}}}const fr=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function Ne(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const Re=(n,e,t)=>n.endsWith(`
`)?Ne(t,e):t.includes(`
`)?`
`+Ne(t,e):(n.endsWith(" ")?"":" ")+t,ki="flow",On="block",Jt="quoted";function zt(n,e,t="flow",{indentAtStart:i,lineWidth:s=80,minContentWidth:r=20,onFold:a,onOverflow:o}={}){if(!s||s<0)return n;s<r&&(r=0);const l=Math.max(1+r,1+s-e.length);if(n.length<=l)return n;const c=[],p={};let f=s-e.length;typeof i=="number"&&(i>s-Math.max(2,r)?c.push(0):f=s-i);let h,m,_=!1,d=-1,g=-1,S=-1;t===On&&(d=Xn(n,d,e.length),d!==-1&&(f=d+l));for(let y;y=n[d+=1];){if(t===Jt&&y==="\\"){switch(g=d,n[d+1]){case"x":d+=3;break;case"u":d+=5;break;case"U":d+=9;break;default:d+=1}S=d}if(y===`
`)t===On&&(d=Xn(n,d,e.length)),f=d+e.length+l,h=void 0;else{if(y===" "&&m&&m!==" "&&m!==`
`&&m!=="	"){const E=n[d+1];E&&E!==" "&&E!==`
`&&E!=="	"&&(h=d)}if(d>=f)if(h)c.push(h),f=h+l,h=void 0;else if(t===Jt){for(;m===" "||m==="	";)m=y,y=n[d+=1],_=!0;const E=d>S+1?d-2:g-1;if(p[E])return n;c.push(E),p[E]=!0,f=E+l,h=void 0}else _=!0}m=y}if(_&&o&&o(),c.length===0)return n;a&&a();let k=n.slice(0,c[0]);for(let y=0;y<c.length;++y){const E=c[y],T=c[y+1]||n.length;E===0?k=`
${e}${n.slice(0,T)}`:(t===Jt&&p[E]&&(k+=`${n[E]}\\`),k+=`
${e}${n.slice(E+1,T)}`)}return k}function Xn(n,e,t){let i=e,s=e+1,r=n[s];for(;r===" "||r==="	";)if(e<s+t)r=n[++e];else{do r=n[++e];while(r&&r!==`
`);i=e,s=e+1,r=n[s]}return i}const Xt=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),Zt=n=>/^(%|---|\.\.\.)/m.test(n);function hr(n,e,t){if(!e||e<0)return!1;const i=e-t,s=n.length;if(s<=i)return!1;for(let r=0,a=0;r<s;++r)if(n[r]===`
`){if(r-a>i)return!0;if(a=r+1,s-a<=i)return!1}return!0}function yt(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:i}=e,s=e.options.doubleQuotedMinMultiLineLength,r=e.indent||(Zt(n)?"  ":"");let a="",o=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(a+=t.slice(o,l)+"\\ ",l+=1,o=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{a+=t.slice(o,l);const p=t.substr(l+2,4);switch(p){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:p.substr(0,2)==="00"?a+="\\x"+p.substr(2):a+=t.substr(l,6)}l+=5,o=l+1}break;case"n":if(i||t[l+2]==='"'||t.length<s)l+=1;else{for(a+=t.slice(o,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)a+=`
`,l+=2;a+=r,t[l+2]===" "&&(a+="\\"),l+=1,o=l+1}break;default:l+=1}return a=o?a+t.slice(o):t,i?a:zt(a,r,Jt,Xt(e,!1))}function An(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return yt(n,e);const t=e.indent||(Zt(n)?"  ":""),i="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?i:zt(i,t,ki,Xt(e,!1))}function ze(n,e){const{singleQuote:t}=e.options;let i;if(t===!1)i=yt;else{const s=n.includes('"'),r=n.includes("'");s&&!r?i=An:r&&!s?i=yt:i=t?An:yt}return i(n,e)}let En;try{En=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{En=/\n+(?!\n|$)/g}function Vt({comment:n,type:e,value:t},i,s,r){const{blockQuote:a,commentString:o,lineWidth:l}=i.options;if(!a||/\n[\t ]+$/.test(t))return ze(t,i);const c=i.indent||(i.forceBlockIndent||Zt(t)?"  ":""),p=a==="literal"?!0:a==="folded"||e===C.BLOCK_FOLDED?!1:e===C.BLOCK_LITERAL?!0:!hr(t,l,c.length);if(!t)return p?`|
`:`>
`;let f,h;for(h=t.length;h>0;--h){const T=t[h-1];if(T!==`
`&&T!=="	"&&T!==" ")break}let m=t.substring(h);const _=m.indexOf(`
`);_===-1?f="-":t===m||_!==m.length-1?(f="+",r&&r()):f="",m&&(t=t.slice(0,-m.length),m[m.length-1]===`
`&&(m=m.slice(0,-1)),m=m.replace(En,`$&${c}`));let d=!1,g,S=-1;for(g=0;g<t.length;++g){const T=t[g];if(T===" ")d=!0;else if(T===`
`)S=g;else break}let k=t.substring(0,S<g?S+1:g);k&&(t=t.substring(k.length),k=k.replace(/\n+/g,`$&${c}`));let E=(d?c?"2":"1":"")+f;if(n&&(E+=" "+o(n.replace(/ ?[\r\n]+/g," ")),s&&s()),!p){const T=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let I=!1;const F=Xt(i,!0);a!=="folded"&&e!==C.BLOCK_FOLDED&&(F.onOverflow=()=>{I=!0});const A=zt(`${k}${T}${m}`,c,On,F);if(!I)return`>${E}
${c}${A}`}return t=t.replace(/\n+/g,`$&${c}`),`|${E}
${c}${k}${t}${m}`}function dr(n,e,t,i){const{type:s,value:r}=n,{actualString:a,implicitKey:o,indent:l,indentStep:c,inFlow:p}=e;if(o&&r.includes(`
`)||p&&/[[\]{},]/.test(r))return ze(r,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return o||p||!r.includes(`
`)?ze(r,e):Vt(n,e,t,i);if(!o&&!p&&s!==C.PLAIN&&r.includes(`
`))return Vt(n,e,t,i);if(Zt(r)){if(l==="")return e.forceBlockIndent=!0,Vt(n,e,t,i);if(o&&l===c)return ze(r,e)}const f=r.replace(/\n+/g,`$&
${l}`);if(a){const h=d=>d.default&&d.tag!=="tag:yaml.org,2002:str"&&d.test?.test(f),{compat:m,tags:_}=e.doc.schema;if(_.some(h)||m?.some(h))return ze(r,e)}return o?f:zt(f,l,ki,Xt(e,!1))}function jn(n,e,t,i){const{implicitKey:s,inFlow:r}=e,a=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:o}=n;o!==C.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=C.QUOTE_DOUBLE);const l=p=>{switch(p){case C.BLOCK_FOLDED:case C.BLOCK_LITERAL:return s||r?ze(a.value,e):Vt(a,e,t,i);case C.QUOTE_DOUBLE:return yt(a.value,e);case C.QUOTE_SINGLE:return An(a.value,e);case C.PLAIN:return dr(a,e,t,i);default:return null}};let c=l(o);if(c===null){const{defaultKeyType:p,defaultStringType:f}=e.options,h=s&&p||f;if(c=l(h),c===null)throw new Error(`Unsupported default string type ${h}`)}return c}function Si(n,e){const t=Object.assign({blockQuote:!0,commentString:fr,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let i;switch(t.collectionStyle){case"block":i=!1;break;case"flow":i=!0;break;default:i=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:i,options:t}}function pr(n,e){if(e.tag){const s=n.filter(r=>r.tag===e.tag);if(s.length>0)return s.find(r=>r.format===e.format)??s[0]}let t,i;if(G(e)){i=e.value;let s=n.filter(r=>r.identify?.(i));if(s.length>1){const r=s.filter(a=>a.test);r.length>0&&(s=r)}t=s.find(r=>r.format===e.format)??s.find(r=>!r.format)}else i=e,t=n.find(s=>s.nodeClass&&i instanceof s.nodeClass);if(!t){const s=i?.constructor?.name??(i===null?"null":typeof i);throw new Error(`Tag not resolved for ${s} value`)}return t}function mr(n,e,{anchors:t,doc:i}){if(!i.directives)return"";const s=[],r=(G(n)||X(n))&&n.anchor;r&&bi(r)&&(t.add(r),s.push(`&${r}`));const a=n.tag??(e.default?null:e.tag);return a&&s.push(i.directives.tagString(a)),s.join(" ")}function tt(n,e,t,i){if(ee(n))return n.toString(e,t,i);if(st(n)){if(e.doc.directives)return n.toString(e);if(e.resolvedAliases?.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let s;const r=Z(n)?n:e.doc.createNode(n,{onTagObj:l=>s=l});s??(s=pr(e.doc.schema.tags,r));const a=mr(r,s,e);a.length>0&&(e.indentAtStart=(e.indentAtStart??0)+a.length+1);const o=typeof s.stringify=="function"?s.stringify(r,e,t,i):G(r)?jn(r,e,t,i):r.toString(e,t,i);return a?G(r)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function gr({key:n,value:e},t,i,s){const{allNullValues:r,doc:a,indent:o,indentStep:l,options:{commentString:c,indentSeq:p,simpleKeys:f}}=t;let h=Z(n)&&n.comment||null;if(f){if(h)throw new Error("With simple keys, key nodes cannot have comments");if(X(n)||!Z(n)&&typeof n=="object"){const F="With simple keys, collection cannot be used as a key value";throw new Error(F)}}let m=!f&&(!n||h&&e==null&&!t.inFlow||X(n)||(G(n)?n.type===C.BLOCK_FOLDED||n.type===C.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!m&&(f||!r),indent:o+l});let _=!1,d=!1,g=tt(n,t,()=>_=!0,()=>d=!0);if(!m&&!t.inFlow&&g.length>1024){if(f)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");m=!0}if(t.inFlow){if(r||e==null)return _&&i&&i(),g===""?"?":m?`? ${g}`:g}else if(r&&!f||e==null&&m)return g=`? ${g}`,h&&!_?g+=Re(g,t.indent,c(h)):d&&s&&s(),g;_&&(h=null),m?(h&&(g+=Re(g,t.indent,c(h))),g=`? ${g}
${o}:`):(g=`${g}:`,h&&(g+=Re(g,t.indent,c(h))));let S,k,y;Z(e)?(S=!!e.spaceBefore,k=e.commentBefore,y=e.comment):(S=!1,k=null,y=null,e&&typeof e=="object"&&(e=a.createNode(e))),t.implicitKey=!1,!m&&!h&&G(e)&&(t.indentAtStart=g.length+1),d=!1,!p&&l.length>=2&&!t.inFlow&&!m&&Ot(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let E=!1;const T=tt(e,t,()=>E=!0,()=>d=!0);let I=" ";if(h||S||k){if(I=S?`
`:"",k){const F=c(k);I+=`
${Ne(F,t.indent)}`}T===""&&!t.inFlow?I===`
`&&y&&(I=`

`):I+=`
${t.indent}`}else if(!m&&X(e)){const F=T[0],A=T.indexOf(`
`),Y=A!==-1,ie=t.inFlow??e.flow??e.items.length===0;if(Y||!ie){let ae=!1;if(Y&&(F==="&"||F==="!")){let B=T.indexOf(" ");F==="&"&&B!==-1&&B<A&&T[B+1]==="!"&&(B=T.indexOf(" ",B+1)),(B===-1||A<B)&&(ae=!0)}ae||(I=`
${t.indent}`)}}else(T===""||T[0]===`
`)&&(I="");return g+=I+T,t.inFlow?E&&i&&i():y&&!E?g+=Re(g,t.indent,c(y)):d&&s&&s(),g}function Ni(n,e){(n==="debug"||n==="warn")&&console.warn(e)}const Bt="<<",Oe={identify:n=>n===Bt||typeof n=="symbol"&&n.description===Bt,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new C(Symbol(Bt)),{addToJSMap:Oi}),stringify:()=>Bt},br=(n,e)=>(Oe.identify(e)||G(e)&&(!e.type||e.type===C.PLAIN)&&Oe.identify(e.value))&&n?.doc.schema.tags.some(t=>t.tag===Oe.tag&&t.default);function Oi(n,e,t){const i=Ai(n,t);if(Ot(i))for(const s of i.items)bn(n,e,s);else if(Array.isArray(i))for(const s of i)bn(n,e,s);else bn(n,e,i)}function bn(n,e,t){const i=Ai(n,t);if(!Nt(i))throw new Error("Merge sources must be maps or map aliases");const s=i.toJSON(null,n,Map);for(const[r,a]of s)e instanceof Map?e.has(r)||e.set(r,a):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function Ai(n,e){return n&&st(e)?e.resolve(n.doc,n):e}function Ei(n,e,{key:t,value:i}){if(Z(t)&&t.addToJSMap)t.addToJSMap(n,e,i);else if(br(n,t))Oi(n,e,i);else{const s=fe(t,"",n);if(e instanceof Map)e.set(s,fe(i,s,n));else if(e instanceof Set)e.add(s);else{const r=yr(t,s,n),a=fe(i,r,n);r in e?Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[r]=a}}return e}function yr(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(Z(n)&&t?.doc){const i=Si(t.doc,{});i.anchors=new Set;for(const r of t.anchors.keys())i.anchors.add(r.anchor);i.inFlow=!0,i.inStringifyKey=!0;const s=n.toString(i);if(!t.mapKeyWarned){let r=JSON.stringify(s);r.length>40&&(r=r.substring(0,36)+'..."'),Ni(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function Bn(n,e,t){const i=_t(n,void 0,t),s=_t(e,void 0,t);return new le(i,s)}class le{constructor(e,t=null){Object.defineProperty(this,he,{value:mi}),this.key=e,this.value=t}clone(e){let{key:t,value:i}=this;return Z(t)&&(t=t.clone(e)),Z(i)&&(i=i.clone(e)),new le(t,i)}toJSON(e,t){const i=t?.mapAsMap?new Map:{};return Ei(t,i,this)}toString(e,t,i){return e?.doc?gr(this,e,t,i):JSON.stringify(this)}}function Li(n,e,t){return(e.inFlow??n.flow?_r:vr)(n,e,t)}function vr({comment:n,items:e},t,{blockItemPrefix:i,flowChars:s,itemIndent:r,onChompKeep:a,onComment:o}){const{indent:l,options:{commentString:c}}=t,p=Object.assign({},t,{indent:r,type:null});let f=!1;const h=[];for(let _=0;_<e.length;++_){const d=e[_];let g=null;if(Z(d))!f&&d.spaceBefore&&h.push(""),Ht(t,h,d.commentBefore,f),d.comment&&(g=d.comment);else if(ee(d)){const k=Z(d.key)?d.key:null;k&&(!f&&k.spaceBefore&&h.push(""),Ht(t,h,k.commentBefore,f))}f=!1;let S=tt(d,p,()=>g=null,()=>f=!0);g&&(S+=Re(S,r,c(g))),f&&g&&(f=!1),h.push(i+S)}let m;if(h.length===0)m=s.start+s.end;else{m=h[0];for(let _=1;_<h.length;++_){const d=h[_];m+=d?`
${l}${d}`:`
`}}return n?(m+=`
`+Ne(c(n),l),o&&o()):f&&a&&a(),m}function _r({items:n},e,{flowChars:t,itemIndent:i}){const{indent:s,indentStep:r,flowCollectionPadding:a,options:{commentString:o}}=e;i+=r;const l=Object.assign({},e,{indent:i,inFlow:!0,type:null});let c=!1,p=0;const f=[];for(let _=0;_<n.length;++_){const d=n[_];let g=null;if(Z(d))d.spaceBefore&&f.push(""),Ht(e,f,d.commentBefore,!1),d.comment&&(g=d.comment);else if(ee(d)){const k=Z(d.key)?d.key:null;k&&(k.spaceBefore&&f.push(""),Ht(e,f,k.commentBefore,!1),k.comment&&(c=!0));const y=Z(d.value)?d.value:null;y?(y.comment&&(g=y.comment),y.commentBefore&&(c=!0)):d.value==null&&k?.comment&&(g=k.comment)}g&&(c=!0);let S=tt(d,l,()=>g=null);c||(c=f.length>p||S.includes(`
`)),_<n.length-1?S+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(c||(c=f.reduce((k,y)=>k+y.length+2,2)+(S.length+2)>e.options.lineWidth)),c&&(S+=",")),g&&(S+=Re(S,i,o(g))),f.push(S),p=f.length}const{start:h,end:m}=t;if(f.length===0)return h+m;if(!c){const _=f.reduce((d,g)=>d+g.length+2,2);c=e.options.lineWidth>0&&_>e.options.lineWidth}if(c){let _=h;for(const d of f)_+=d?`
${r}${s}${d}`:`
`;return`${_}
${s}${m}`}else return`${h}${a}${f.join(" ")}${a}${m}`}function Ht({indent:n,options:{commentString:e}},t,i,s){if(i&&s&&(i=i.replace(/^\n+/,"")),i){const r=Ne(e(i),n);t.push(r.trimStart())}}function Ke(n,e){const t=G(e)?e.value:e;for(const i of n)if(ee(i)&&(i.key===e||i.key===t||G(i.key)&&i.key.value===t))return i}class ue extends wi{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(qe,e),this.items=[]}static from(e,t,i){const{keepUndefined:s,replacer:r}=i,a=new this(e),o=(l,c)=>{if(typeof r=="function")c=r.call(t,l,c);else if(Array.isArray(r)&&!r.includes(l))return;(c!==void 0||s)&&a.items.push(Bn(l,c,i))};if(t instanceof Map)for(const[l,c]of t)o(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))o(l,t[l]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}add(e,t){let i;ee(e)?i=e:!e||typeof e!="object"||!("key"in e)?i=new le(e,e?.value):i=new le(e.key,e.value);const s=Ke(this.items,i.key),r=this.schema?.sortMapEntries;if(s){if(!t)throw new Error(`Key ${i.key} already set`);G(s.value)&&_i(i.value)?s.value.value=i.value:s.value=i.value}else if(r){const a=this.items.findIndex(o=>r(i,o)<0);a===-1?this.items.push(i):this.items.splice(a,0,i)}else this.items.push(i)}delete(e){const t=Ke(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const s=Ke(this.items,e)?.value;return(!t&&G(s)?s.value:s)??void 0}has(e){return!!Ke(this.items,e)}set(e,t){this.add(new le(e,t),!0)}toJSON(e,t,i){const s=i?new i:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(s);for(const r of this.items)Ei(t,s,r);return s}toString(e,t,i){if(!e)return JSON.stringify(this);for(const s of this.items)if(!ee(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Li(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:i,onComment:t})}}const at={collection:"map",default:!0,nodeClass:ue,tag:"tag:yaml.org,2002:map",resolve(n,e){return Nt(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>ue.from(n,e,t)};class $e extends wi{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(it,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Dt(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const i=Dt(e);if(typeof i!="number")return;const s=this.items[i];return!t&&G(s)?s.value:s}has(e){const t=Dt(e);return typeof t=="number"&&t<this.items.length}set(e,t){const i=Dt(e);if(typeof i!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[i];G(s)&&_i(t)?s.value=t:this.items[i]=t}toJSON(e,t){const i=[];t?.onCreate&&t.onCreate(i);let s=0;for(const r of this.items)i.push(fe(r,String(s++),t));return i}toString(e,t,i){return e?Li(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:i,onComment:t}):JSON.stringify(this)}static from(e,t,i){const{replacer:s}=i,r=new this(e);if(t&&Symbol.iterator in Object(t)){let a=0;for(let o of t){if(typeof s=="function"){const l=t instanceof Set?o:String(a++);o=s.call(t,l,o)}r.items.push(_t(o,void 0,i))}}return r}}function Dt(n){let e=G(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const ot={collection:"seq",default:!0,nodeClass:$e,tag:"tag:yaml.org,2002:seq",resolve(n,e){return Ot(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>$e.from(n,e,t)},en={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,i){return e=Object.assign({actualString:!0},e),jn(n,e,t,i)}},tn={identify:n=>n==null,createNode:()=>new C(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new C(null),stringify:({source:n},e)=>typeof n=="string"&&tn.test.test(n)?n:e.options.nullStr},Dn={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new C(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&Dn.test.test(n)){const i=n[0]==="t"||n[0]==="T";if(e===i)return n}return e?t.options.trueStr:t.options.falseStr}};function ge({format:n,minFractionDigits:e,tag:t,value:i}){if(typeof i=="bigint")return String(i);const s=typeof i=="number"?i:Number(i);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let r=Object.is(i,-0)?"-0":JSON.stringify(i);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(r)&&!r.includes("e")){let a=r.indexOf(".");a<0&&(a=r.length,r+=".");let o=e-(r.length-a-1);for(;o-- >0;)r+="0"}return r}const Ti={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:ge},Ii={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():ge(n)}},Ci={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){const e=new C(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:ge},nn=n=>typeof n=="bigint"||Number.isInteger(n),Rn=(n,e,t,{intAsBigInt:i})=>i?BigInt(n):parseInt(n.substring(e),t);function qi(n,e,t){const{value:i}=n;return nn(i)&&i>=0?t+i.toString(e):ge(n)}const Mi={identify:n=>nn(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>Rn(n,2,8,t),stringify:n=>qi(n,8,"0o")},Pi={identify:nn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>Rn(n,0,10,t),stringify:ge},ji={identify:n=>nn(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>Rn(n,2,16,t),stringify:n=>qi(n,16,"0x")},wr=[at,ot,en,tn,Dn,Mi,Pi,ji,Ti,Ii,Ci];function Zn(n){return typeof n=="bigint"||Number.isInteger(n)}const Rt=({value:n})=>JSON.stringify(n),kr=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:Rt},{identify:n=>n==null,createNode:()=>new C(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Rt},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:Rt},{identify:Zn,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>Zn(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:Rt}],Sr={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},Nr=[at,ot].concat(kr,Sr),Kn={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){const t=atob(n.replace(/[\n\r]/g,"")),i=new Uint8Array(t.length);for(let s=0;s<t.length;++s)i[s]=t.charCodeAt(s);return i}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},i,s,r){if(!t)return"";const a=t;let o;if(typeof btoa=="function"){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);o=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=C.BLOCK_LITERAL),e!==C.QUOTE_DOUBLE){const l=Math.max(i.options.lineWidth-i.indent.length,i.options.minContentWidth),c=Math.ceil(o.length/l),p=new Array(c);for(let f=0,h=0;f<c;++f,h+=l)p[f]=o.substr(h,l);o=p.join(e===C.BLOCK_LITERAL?`
`:" ")}return jn({comment:n,type:e,value:o},i,s,r)}};function Bi(n,e){if(Ot(n))for(let t=0;t<n.items.length;++t){let i=n.items[t];if(!ee(i)){if(Nt(i)){i.items.length>1&&e("Each pair must have its own sequence indicator");const s=i.items[0]||new le(new C(null));if(i.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${i.commentBefore}
${s.key.commentBefore}`:i.commentBefore),i.comment){const r=s.value??s.key;r.comment=r.comment?`${i.comment}
${r.comment}`:i.comment}i=s}n.items[t]=ee(i)?i:new le(i)}}else e("Expected a sequence for this tag");return n}function Di(n,e,t){const{replacer:i}=t,s=new $e(n);s.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof i=="function"&&(a=i.call(e,String(r++),a));let o,l;if(Array.isArray(a))if(a.length===2)o=a[0],l=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const c=Object.keys(a);if(c.length===1)o=c[0],l=a[o];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else o=a;s.items.push(Bn(o,l,t))}return s}const $n={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Bi,createNode:Di};class Xe extends $e{constructor(){super(),this.add=ue.prototype.add.bind(this),this.delete=ue.prototype.delete.bind(this),this.get=ue.prototype.get.bind(this),this.has=ue.prototype.has.bind(this),this.set=ue.prototype.set.bind(this),this.tag=Xe.tag}toJSON(e,t){if(!t)return super.toJSON(e);const i=new Map;t?.onCreate&&t.onCreate(i);for(const s of this.items){let r,a;if(ee(s)?(r=fe(s.key,"",t),a=fe(s.value,r,t)):r=fe(s,"",t),i.has(r))throw new Error("Ordered maps must not include duplicate keys");i.set(r,a)}return i}static from(e,t,i){const s=Di(e,t,i),r=new this;return r.items=s.items,r}}Xe.tag="tag:yaml.org,2002:omap";const Fn={collection:"seq",identify:n=>n instanceof Map,nodeClass:Xe,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){const t=Bi(n,e),i=[];for(const{key:s}of t.items)G(s)&&(i.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):i.push(s.value));return Object.assign(new Xe,t)},createNode:(n,e,t)=>Xe.from(n,e,t)};function Ri({value:n,source:e},t){return e&&(n?Ki:$i).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}const Ki={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new C(!0),stringify:Ri},$i={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new C(!1),stringify:Ri},Or={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:ge},Ar={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():ge(n)}},Er={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){const e=new C(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){const i=n.substring(t+1).replace(/_/g,"");i[i.length-1]==="0"&&(e.minFractionDigits=i.length)}return e},stringify:ge},At=n=>typeof n=="bigint"||Number.isInteger(n);function sn(n,e,t,{intAsBigInt:i}){const s=n[0];if((s==="-"||s==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),i){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}const a=BigInt(n);return s==="-"?BigInt(-1)*a:a}const r=parseInt(n,t);return s==="-"?-1*r:r}function Un(n,e,t){const{value:i}=n;if(At(i)){const s=i.toString(e);return i<0?"-"+t+s.substr(1):t+s}return ge(n)}const Lr={identify:At,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>sn(n,2,2,t),stringify:n=>Un(n,2,"0b")},Tr={identify:At,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>sn(n,1,8,t),stringify:n=>Un(n,8,"0")},Ir={identify:At,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>sn(n,0,10,t),stringify:ge},Cr={identify:At,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>sn(n,2,16,t),stringify:n=>Un(n,16,"0x")};class Ze extends ue{constructor(e){super(e),this.tag=Ze.tag}add(e){let t;ee(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new le(e.key,null):t=new le(e,null),Ke(this.items,t.key)||this.items.push(t)}get(e,t){const i=Ke(this.items,e);return!t&&ee(i)?G(i.key)?i.key.value:i.key:i}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const i=Ke(this.items,e);i&&!t?this.items.splice(this.items.indexOf(i),1):!i&&t&&this.items.push(new le(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,i){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,i);throw new Error("Set items must all have null values")}static from(e,t,i){const{replacer:s}=i,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof s=="function"&&(a=s.call(t,a,a)),r.items.push(Bn(a,null,i));return r}}Ze.tag="tag:yaml.org,2002:set";const xn={collection:"map",identify:n=>n instanceof Set,nodeClass:Ze,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>Ze.from(n,e,t),resolve(n,e){if(Nt(n)){if(n.hasAllNullValues(!0))return Object.assign(new Ze,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function Jn(n,e){const t=n[0],i=t==="-"||t==="+"?n.substring(1):n,s=a=>e?BigInt(a):Number(a),r=i.replace(/_/g,"").split(":").reduce((a,o)=>a*s(60)+s(o),s(0));return t==="-"?s(-1)*r:r}function Fi(n){let{value:e}=n,t=a=>a;if(typeof e=="bigint")t=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return ge(n);let i="";e<0&&(i="-",e*=t(-1));const s=t(60),r=[e%s];return e<60?r.unshift(0):(e=(e-r[0])/s,r.unshift(e%s),e>=60&&(e=(e-r[0])/s,r.unshift(e))),i+r.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Ui={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>Jn(n,t),stringify:Fi},xi={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>Jn(n,!1),stringify:Fi},rn={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){const e=n.match(rn.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,i,s,r,a,o]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(t,i-1,s,r||0,a||0,o||0,l);const p=e[8];if(p&&p!=="Z"){let f=Jn(p,!1);Math.abs(f)<30&&(f*=60),c-=6e4*f}return new Date(c)},stringify:({value:n})=>n?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},ei=[at,ot,en,tn,Ki,$i,Lr,Tr,Ir,Cr,Or,Ar,Er,Kn,Oe,Fn,$n,xn,Ui,xi,rn],ti=new Map([["core",wr],["failsafe",[at,ot,en]],["json",Nr],["yaml11",ei],["yaml-1.1",ei]]),ni={binary:Kn,bool:Dn,float:Ci,floatExp:Ii,floatNaN:Ti,floatTime:xi,int:Pi,intHex:ji,intOct:Mi,intTime:Ui,map:at,merge:Oe,null:tn,omap:Fn,pairs:$n,seq:ot,set:xn,timestamp:rn},qr={"tag:yaml.org,2002:binary":Kn,"tag:yaml.org,2002:merge":Oe,"tag:yaml.org,2002:omap":Fn,"tag:yaml.org,2002:pairs":$n,"tag:yaml.org,2002:set":xn,"tag:yaml.org,2002:timestamp":rn};function yn(n,e,t){const i=ti.get(e);if(i&&!n)return t&&!i.includes(Oe)?i.concat(Oe):i.slice();let s=i;if(!s)if(Array.isArray(n))s=[];else{const r=Array.from(ti.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(n))for(const r of n)s=s.concat(r);else typeof n=="function"&&(s=n(s.slice()));return t&&(s=s.concat(Oe)),s.reduce((r,a)=>{const o=typeof a=="string"?ni[a]:a;if(!o){const l=JSON.stringify(a),c=Object.keys(ni).map(p=>JSON.stringify(p)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return r.includes(o)||r.push(o),r},[])}const Mr=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0;class Vn{constructor({compat:e,customTags:t,merge:i,resolveKnownTags:s,schema:r,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?yn(e,"compat"):e?yn(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=s?qr:{},this.tags=yn(t,this.name,i),this.toStringOptions=o??null,Object.defineProperty(this,qe,{value:at}),Object.defineProperty(this,_e,{value:en}),Object.defineProperty(this,it,{value:ot}),this.sortMapEntries=typeof a=="function"?a:a===!0?Mr:null}clone(){const e=Object.create(Vn.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Pr(n,e){const t=[];let i=e.directives===!0;if(e.directives!==!1&&n.directives){const l=n.directives.toString(n);l?(t.push(l),i=!0):n.directives.docStart&&(i=!0)}i&&t.push("---");const s=Si(n,e),{commentString:r}=s.options;if(n.commentBefore){t.length!==1&&t.unshift("");const l=r(n.commentBefore);t.unshift(Ne(l,""))}let a=!1,o=null;if(n.contents){if(Z(n.contents)){if(n.contents.spaceBefore&&i&&t.push(""),n.contents.commentBefore){const p=r(n.contents.commentBefore);t.push(Ne(p,""))}s.forceBlockIndent=!!n.comment,o=n.contents.comment}const l=o?void 0:()=>a=!0;let c=tt(n.contents,s,()=>o=null,l);o&&(c+=Re(c,"",r(o))),(c[0]==="|"||c[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${c}`:t.push(c)}else t.push(tt(n.contents,s));if(n.directives?.docEnd)if(n.comment){const l=r(n.comment);l.includes(`
`)?(t.push("..."),t.push(Ne(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=n.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&t[t.length-1]!==""&&t.push(""),t.push(Ne(r(l),"")))}return t.join(`
`)+`
`}class an{constructor(e,t,i){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,he,{value:Nn});let s=null;typeof t=="function"||Array.isArray(t)?s=t:i===void 0&&t&&(i=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},i);this.options=r;let{version:a}=r;i?._directives?(this.directives=i._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new oe({version:a}),this.setSchema(a,i),this.contents=e===void 0?null:this.createNode(e,s,i)}clone(){const e=Object.create(an.prototype,{[he]:{value:Nn}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Z(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){Je(this.contents)&&this.contents.add(e)}addIn(e,t){Je(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const i=yi(this);e.anchor=!t||i.has(t)?vi(t||"a",i):t}return new Pn(e.anchor)}createNode(e,t,i){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const g=k=>typeof k=="number"||k instanceof String||k instanceof Number,S=t.filter(g).map(String);S.length>0&&(t=t.concat(S)),s=t}else i===void 0&&t&&(i=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:a,flow:o,keepUndefined:l,onTagObj:c,tag:p}=i??{},{onAnchor:f,setAnchors:h,sourceObjects:m}=lr(this,a||"a"),_={aliasDuplicateObjects:r??!0,keepUndefined:l??!1,onAnchor:f,onTagObj:c,replacer:s,schema:this.schema,sourceObjects:m},d=_t(e,p,_);return o&&X(d)&&(d.flow=!0),h(),d}createPair(e,t,i={}){const s=this.createNode(e,null,i),r=this.createNode(t,null,i);return new le(s,r)}delete(e){return Je(this.contents)?this.contents.delete(e):!1}deleteIn(e){return mt(e)?this.contents==null?!1:(this.contents=null,!0):Je(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return X(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return mt(e)?!t&&G(this.contents)?this.contents.value:this.contents:X(this.contents)?this.contents.getIn(e,t):void 0}has(e){return X(this.contents)?this.contents.has(e):!1}hasIn(e){return mt(e)?this.contents!==void 0:X(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Gt(this.schema,[e],t):Je(this.contents)&&this.contents.set(e,t)}setIn(e,t){mt(e)?this.contents=t:this.contents==null?this.contents=Gt(this.schema,Array.from(e),t):Je(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let i;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new oe({version:"1.1"}),i={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new oe({version:e}),i={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,i=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(i)this.schema=new Vn(Object.assign(i,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:i,maxAliasCount:s,onAnchor:r,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:i===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},l=fe(this.contents,t??"",o);if(typeof r=="function")for(const{count:c,res:p}of o.anchors.values())r(p,c);return typeof a=="function"?Qe(a,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Pr(this,e)}}function Je(n){if(X(n))return!0;throw new Error("Expected a YAML collection as document contents")}class Ji extends Error{constructor(e,t,i,s){super(),this.name=e,this.code=i,this.message=s,this.pos=t}}class gt extends Ji{constructor(e,t,i){super("YAMLParseError",e,t,i)}}class jr extends Ji{constructor(e,t,i){super("YAMLWarning",e,t,i)}}const ii=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>e.linePos(o));const{line:i,col:s}=t.linePos[0];t.message+=` at line ${i}, column ${s}`;let r=s-1,a=n.substring(e.lineStarts[i-1],e.lineStarts[i]).replace(/[\n\r]+$/,"");if(r>=60&&a.length>80){const o=Math.min(r-39,a.length-79);a="…"+a.substring(o),r-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),i>1&&/^ *$/.test(a.substring(0,r))){let o=n.substring(e.lineStarts[i-2],e.lineStarts[i-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const l=t.linePos[1];l?.line===i&&l.col>s&&(o=Math.max(1,Math.min(l.col-s,80-r)));const c=" ".repeat(r)+"^".repeat(o);t.message+=`:

${a}
${c}
`}};function nt(n,{flow:e,indicator:t,next:i,offset:s,onError:r,parentIndent:a,startOnNewline:o}){let l=!1,c=o,p=o,f="",h="",m=!1,_=!1,d=null,g=null,S=null,k=null,y=null,E=null,T=null;for(const A of n)switch(_&&(A.type!=="space"&&A.type!=="newline"&&A.type!=="comma"&&r(A.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),_=!1),d&&(c&&A.type!=="comment"&&A.type!=="newline"&&r(d,"TAB_AS_INDENT","Tabs are not allowed as indentation"),d=null),A.type){case"space":!e&&(t!=="doc-start"||i?.type!=="flow-collection")&&A.source.includes("	")&&(d=A),p=!0;break;case"comment":{p||r(A,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const Y=A.source.substring(1)||" ";f?f+=h+Y:f=Y,h="",c=!1;break}case"newline":c?f?f+=A.source:(!E||t!=="seq-item-ind")&&(l=!0):h+=A.source,c=!0,m=!0,(g||S)&&(k=A),p=!0;break;case"anchor":g&&r(A,"MULTIPLE_ANCHORS","A node can have at most one anchor"),A.source.endsWith(":")&&r(A.offset+A.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),g=A,T??(T=A.offset),c=!1,p=!1,_=!0;break;case"tag":{S&&r(A,"MULTIPLE_TAGS","A node can have at most one tag"),S=A,T??(T=A.offset),c=!1,p=!1,_=!0;break}case t:(g||S)&&r(A,"BAD_PROP_ORDER",`Anchors and tags must be after the ${A.source} indicator`),E&&r(A,"UNEXPECTED_TOKEN",`Unexpected ${A.source} in ${e??"collection"}`),E=A,c=t==="seq-item-ind"||t==="explicit-key-ind",p=!1;break;case"comma":if(e){y&&r(A,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),y=A,c=!1,p=!1;break}default:r(A,"UNEXPECTED_TOKEN",`Unexpected ${A.type} token`),c=!1,p=!1}const I=n[n.length-1],F=I?I.offset+I.source.length:s;return _&&i&&i.type!=="space"&&i.type!=="newline"&&i.type!=="comma"&&(i.type!=="scalar"||i.source!=="")&&r(i.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),d&&(c&&d.indent<=a||i?.type==="block-map"||i?.type==="block-seq")&&r(d,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:y,found:E,spaceBefore:l,comment:f,hasNewline:m,anchor:g,tag:S,newlineAfterProp:k,end:F,start:T??F}}function wt(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(const e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of n.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(wt(e.key)||wt(e.value))return!0}return!1;default:return!0}}function Ln(n,e,t){if(e?.type==="flow-collection"){const i=e.end[0];i.indent===n&&(i.source==="]"||i.source==="}")&&wt(e)&&t(i,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Vi(n,e,t){const{uniqueKeys:i}=n.options;if(i===!1)return!1;const s=typeof i=="function"?i:(r,a)=>r===a||G(r)&&G(a)&&r.value===a.value;return e.some(r=>s(r.key,t))}const si="All mapping items must start at the same column";function Br({composeNode:n,composeEmptyNode:e},t,i,s,r){const a=r?.nodeClass??ue,o=new a(t.schema);t.atRoot&&(t.atRoot=!1);let l=i.offset,c=null;for(const p of i.items){const{start:f,key:h,sep:m,value:_}=p,d=nt(f,{indicator:"explicit-key-ind",next:h??m?.[0],offset:l,onError:s,parentIndent:i.indent,startOnNewline:!0}),g=!d.found;if(g){if(h&&(h.type==="block-seq"?s(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in h&&h.indent!==i.indent&&s(l,"BAD_INDENT",si)),!d.anchor&&!d.tag&&!m){c=d.end,d.comment&&(o.comment?o.comment+=`
`+d.comment:o.comment=d.comment);continue}(d.newlineAfterProp||wt(h))&&s(h??f[f.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else d.found?.indent!==i.indent&&s(l,"BAD_INDENT",si);t.atKey=!0;const S=d.end,k=h?n(t,h,d,s):e(t,S,f,null,d,s);t.schema.compat&&Ln(i.indent,h,s),t.atKey=!1,Vi(t,o.items,k)&&s(S,"DUPLICATE_KEY","Map keys must be unique");const y=nt(m??[],{indicator:"map-value-ind",next:_,offset:k.range[2],onError:s,parentIndent:i.indent,startOnNewline:!h||h.type==="block-scalar"});if(l=y.end,y.found){g&&(_?.type==="block-map"&&!y.hasNewline&&s(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&d.start<y.found.offset-1024&&s(k.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const E=_?n(t,_,y,s):e(t,l,m,null,y,s);t.schema.compat&&Ln(i.indent,_,s),l=E.range[2];const T=new le(k,E);t.options.keepSourceTokens&&(T.srcToken=p),o.items.push(T)}else{g&&s(k.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),y.comment&&(k.comment?k.comment+=`
`+y.comment:k.comment=y.comment);const E=new le(k);t.options.keepSourceTokens&&(E.srcToken=p),o.items.push(E)}}return c&&c<l&&s(c,"IMPOSSIBLE","Map comment with trailing content"),o.range=[i.offset,l,c??l],o}function Dr({composeNode:n,composeEmptyNode:e},t,i,s,r){const a=r?.nodeClass??$e,o=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=i.offset,c=null;for(const{start:p,value:f}of i.items){const h=nt(p,{indicator:"seq-item-ind",next:f,offset:l,onError:s,parentIndent:i.indent,startOnNewline:!0});if(!h.found)if(h.anchor||h.tag||f)f?.type==="block-seq"?s(h.end,"BAD_INDENT","All sequence items must start at the same column"):s(l,"MISSING_CHAR","Sequence item without - indicator");else{c=h.end,h.comment&&(o.comment=h.comment);continue}const m=f?n(t,f,h,s):e(t,h.end,p,null,h,s);t.schema.compat&&Ln(i.indent,f,s),l=m.range[2],o.items.push(m)}return o.range=[i.offset,l,c??l],o}function Et(n,e,t,i){let s="";if(n){let r=!1,a="";for(const o of n){const{source:l,type:c}=o;switch(c){case"space":r=!0;break;case"comment":{t&&!r&&i(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const p=l.substring(1)||" ";s?s+=a+p:s=p,a="";break}case"newline":s&&(a+=l),r=!0;break;default:i(o,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:s,offset:e}}const vn="Block collections are not allowed within flow collections",_n=n=>n&&(n.type==="block-map"||n.type==="block-seq");function Rr({composeNode:n,composeEmptyNode:e},t,i,s,r){const a=i.start.source==="{",o=a?"flow map":"flow sequence",l=r?.nodeClass??(a?ue:$e),c=new l(t.schema);c.flow=!0;const p=t.atRoot;p&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let f=i.offset+i.start.source.length;for(let g=0;g<i.items.length;++g){const S=i.items[g],{start:k,key:y,sep:E,value:T}=S,I=nt(k,{flow:o,indicator:"explicit-key-ind",next:y??E?.[0],offset:f,onError:s,parentIndent:i.indent,startOnNewline:!1});if(!I.found){if(!I.anchor&&!I.tag&&!E&&!T){g===0&&I.comma?s(I.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):g<i.items.length-1&&s(I.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),I.comment&&(c.comment?c.comment+=`
`+I.comment:c.comment=I.comment),f=I.end;continue}!a&&t.options.strict&&wt(y)&&s(y,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(g===0)I.comma&&s(I.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(I.comma||s(I.start,"MISSING_CHAR",`Missing , between ${o} items`),I.comment){let F="";e:for(const A of k)switch(A.type){case"comma":case"space":break;case"comment":F=A.source.substring(1);break e;default:break e}if(F){let A=c.items[c.items.length-1];ee(A)&&(A=A.value??A.key),A.comment?A.comment+=`
`+F:A.comment=F,I.comment=I.comment.substring(F.length+1)}}if(!a&&!E&&!I.found){const F=T?n(t,T,I,s):e(t,I.end,E,null,I,s);c.items.push(F),f=F.range[2],_n(T)&&s(F.range,"BLOCK_IN_FLOW",vn)}else{t.atKey=!0;const F=I.end,A=y?n(t,y,I,s):e(t,F,k,null,I,s);_n(y)&&s(A.range,"BLOCK_IN_FLOW",vn),t.atKey=!1;const Y=nt(E??[],{flow:o,indicator:"map-value-ind",next:T,offset:A.range[2],onError:s,parentIndent:i.indent,startOnNewline:!1});if(Y.found){if(!a&&!I.found&&t.options.strict){if(E)for(const B of E){if(B===Y.found)break;if(B.type==="newline"){s(B,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}I.start<Y.found.offset-1024&&s(Y.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else T&&("source"in T&&T.source?.[0]===":"?s(T,"MISSING_CHAR",`Missing space after : in ${o}`):s(Y.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const ie=T?n(t,T,Y,s):Y.found?e(t,Y.end,E,null,Y,s):null;ie?_n(T)&&s(ie.range,"BLOCK_IN_FLOW",vn):Y.comment&&(A.comment?A.comment+=`
`+Y.comment:A.comment=Y.comment);const ae=new le(A,ie);if(t.options.keepSourceTokens&&(ae.srcToken=S),a){const B=c;Vi(t,B.items,A)&&s(F,"DUPLICATE_KEY","Map keys must be unique"),B.items.push(ae)}else{const B=new ue(t.schema);B.flow=!0,B.items.push(ae);const de=(ie??A).range;B.range=[A.range[0],de[1],de[2]],c.items.push(B)}f=ie?ie.range[2]:Y.end}}const h=a?"}":"]",[m,..._]=i.end;let d=f;if(m?.source===h)d=m.offset+m.source.length;else{const g=o[0].toUpperCase()+o.substring(1),S=p?`${g} must end with a ${h}`:`${g} in block collection must be sufficiently indented and end with a ${h}`;s(f,p?"MISSING_CHAR":"BAD_INDENT",S),m&&m.source.length!==1&&_.unshift(m)}if(_.length>0){const g=Et(_,d,t.options.strict,s);g.comment&&(c.comment?c.comment+=`
`+g.comment:c.comment=g.comment),c.range=[i.offset,d,g.offset]}else c.range=[i.offset,d,d];return c}function wn(n,e,t,i,s,r){const a=t.type==="block-map"?Br(n,e,t,i,r):t.type==="block-seq"?Dr(n,e,t,i,r):Rr(n,e,t,i,r),o=a.constructor;return s==="!"||s===o.tagName?(a.tag=o.tagName,a):(s&&(a.tag=s),a)}function Kr(n,e,t,i,s){const r=i.tag,a=r?e.directives.tagName(r.source,h=>s(r,"TAG_RESOLVE_FAILED",h)):null;if(t.type==="block-seq"){const{anchor:h,newlineAfterProp:m}=i,_=h&&r?h.offset>r.offset?h:r:h??r;_&&(!m||m.offset<_.offset)&&s(_,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!a||a==="!"||a===ue.tagName&&o==="map"||a===$e.tagName&&o==="seq")return wn(n,e,t,s,a);let l=e.schema.tags.find(h=>h.tag===a&&h.collection===o);if(!l){const h=e.schema.knownTags[a];if(h?.collection===o)e.schema.tags.push(Object.assign({},h,{default:!1})),l=h;else return h?s(r,"BAD_COLLECTION_TYPE",`${h.tag} used for ${o} collection, but expects ${h.collection??"scalar"}`,!0):s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),wn(n,e,t,s,a)}const c=wn(n,e,t,s,a,l),p=l.resolve?.(c,h=>s(r,"TAG_RESOLVE_FAILED",h),e.options)??c,f=Z(p)?p:new C(p);return f.range=c.range,f.tag=a,l?.format&&(f.format=l.format),f}function $r(n,e,t){const i=e.offset,s=Fr(e,n.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[i,i,i]};const r=s.mode===">"?C.BLOCK_FOLDED:C.BLOCK_LITERAL,a=e.source?Ur(e.source):[];let o=a.length;for(let d=a.length-1;d>=0;--d){const g=a[d][1];if(g===""||g==="\r")o=d;else break}if(o===0){const d=s.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let g=i+s.length;return e.source&&(g+=e.source.length),{value:d,type:r,comment:s.comment,range:[i,g,g]}}let l=e.indent+s.indent,c=e.offset+s.length,p=0;for(let d=0;d<o;++d){const[g,S]=a[d];if(S===""||S==="\r")s.indent===0&&g.length>l&&(l=g.length);else{g.length<l&&t(c+g.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(l=g.length),p=d,l===0&&!n.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=g.length+S.length+1}for(let d=a.length-1;d>=o;--d)a[d][0].length>l&&(o=d+1);let f="",h="",m=!1;for(let d=0;d<p;++d)f+=a[d][0].slice(l)+`
`;for(let d=p;d<o;++d){let[g,S]=a[d];c+=g.length+S.length+1;const k=S[S.length-1]==="\r";if(k&&(S=S.slice(0,-1)),S&&g.length<l){const E=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(c-S.length-(k?2:1),"BAD_INDENT",E),g=""}r===C.BLOCK_LITERAL?(f+=h+g.slice(l)+S,h=`
`):g.length>l||S[0]==="	"?(h===" "?h=`
`:!m&&h===`
`&&(h=`

`),f+=h+g.slice(l)+S,h=`
`,m=!0):S===""?h===`
`?f+=`
`:h=`
`:(f+=h+S,h=" ",m=!1)}switch(s.chomp){case"-":break;case"+":for(let d=o;d<a.length;++d)f+=`
`+a[d][0].slice(l);f[f.length-1]!==`
`&&(f+=`
`);break;default:f+=`
`}const _=i+s.length+e.source.length;return{value:f,type:r,comment:s.comment,range:[i,_,_]}}function Fr({offset:n,props:e},t,i){if(e[0].type!=="block-scalar-header")return i(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],r=s[0];let a=0,o="",l=-1;for(let h=1;h<s.length;++h){const m=s[h];if(!o&&(m==="-"||m==="+"))o=m;else{const _=Number(m);!a&&_?a=_:l===-1&&(l=n+h)}}l!==-1&&i(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let c=!1,p="",f=s.length;for(let h=1;h<e.length;++h){const m=e[h];switch(m.type){case"space":c=!0;case"newline":f+=m.source.length;break;case"comment":t&&!c&&i(m,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),f+=m.source.length,p=m.source.substring(1);break;case"error":i(m,"UNEXPECTED_TOKEN",m.message),f+=m.source.length;break;default:{const _=`Unexpected token in block scalar header: ${m.type}`;i(m,"UNEXPECTED_TOKEN",_);const d=m.source;d&&typeof d=="string"&&(f+=d.length)}}}return{mode:r,indent:a,chomp:o,comment:p,length:f}}function Ur(n){const e=n.split(/\n( *)/),t=e[0],i=t.match(/^( *)/),r=[i?.[1]?[i[1],t.slice(i[1].length)]:["",t]];for(let a=1;a<e.length;a+=2)r.push([e[a],e[a+1]]);return r}function xr(n,e,t){const{offset:i,type:s,source:r,end:a}=n;let o,l;const c=(h,m,_)=>t(i+h,m,_);switch(s){case"scalar":o=C.PLAIN,l=Jr(r,c);break;case"single-quoted-scalar":o=C.QUOTE_SINGLE,l=Vr(r,c);break;case"double-quoted-scalar":o=C.QUOTE_DOUBLE,l=Gr(r,c);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[i,i+r.length,i+r.length]}}const p=i+r.length,f=Et(a,p,e,t);return{value:l,type:o,comment:f.comment,range:[i,p,f.offset]}}function Jr(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Gi(n)}function Vr(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),Gi(n.slice(1,-1)).replace(/''/g,"'")}function Gi(n){const e=/(.*?)\r?\n/sy;let t=e.exec(n);if(!t)return n;let i,s;try{i=new RegExp("(?<![ 	])[ 	]+$"),s=new RegExp("^[ 	]+|(?<![ 	])[ 	]+$","g")}catch{i=/[ \t]+$/,s=/^[ \t]+|[ \t]+$/g}let r=t[1].replace(i,""),a=" ",o=e.lastIndex;for(;t=e.exec(n);){const c=t[1].replace(s,"");c===""?a===`
`?r+=a:a=`
`:(r+=a+c,a=" "),o=e.lastIndex}const l=/[ \t]*(.*)/sy;return l.lastIndex=o,t=l.exec(n),r+a+(t?.[1]??"")}function Gr(n,e){let t="";for(let i=1;i<n.length-1;++i){const s=n[i];if(!(s==="\r"&&n[i+1]===`
`))if(s===`
`){const{fold:r,offset:a}=Hr(n,i);t+=r,i=a}else if(s==="\\"){let r=n[++i];const a=Wr[r];if(a)t+=a;else if(r===`
`)for(r=n[i+1];r===" "||r==="	";)r=n[++i+1];else if(r==="\r"&&n[i+1]===`
`)for(r=n[++i+1];r===" "||r==="	";)r=n[++i+1];else if(r==="x"||r==="u"||r==="U"){const o=r==="x"?2:r==="u"?4:8;t+=Yr(n,i+1,o,e),i+=o}else{const o=n.substr(i-1,2);e(i-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(s===" "||s==="	"){const r=i;let a=n[i+1];for(;a===" "||a==="	";)a=n[++i+1];a!==`
`&&!(a==="\r"&&n[i+2]===`
`)&&(t+=i>r?n.slice(r,i+1):s)}else t+=s}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function Hr(n,e){let t="",i=n[e+1];for(;(i===" "||i==="	"||i===`
`||i==="\r")&&!(i==="\r"&&n[e+2]!==`
`);)i===`
`&&(t+=`
`),e+=1,i=n[e+1];return t||(t=" "),{fold:t,offset:e}}const Wr={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Yr(n,e,t,i){const s=n.substr(e,t),a=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;try{return String.fromCodePoint(a)}catch{const o=n.substr(e-2,t+2);return i(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}}function Hi(n,e,t,i){const{value:s,type:r,comment:a,range:o}=e.type==="block-scalar"?$r(n,e,i):xr(e,n.options.strict,i),l=t?n.directives.tagName(t.source,f=>i(t,"TAG_RESOLVE_FAILED",f)):null;let c;n.options.stringKeys&&n.atKey?c=n.schema[_e]:l?c=Qr(n.schema,s,l,t,i):e.type==="scalar"?c=zr(n,s,e,i):c=n.schema[_e];let p;try{const f=c.resolve(s,h=>i(t??e,"TAG_RESOLVE_FAILED",h),n.options);p=G(f)?f:new C(f)}catch(f){const h=f instanceof Error?f.message:String(f);i(t??e,"TAG_RESOLVE_FAILED",h),p=new C(s)}return p.range=o,p.source=s,r&&(p.type=r),l&&(p.tag=l),c.format&&(p.format=c.format),a&&(p.comment=a),p}function Qr(n,e,t,i,s){if(t==="!")return n[_e];const r=[];for(const o of n.tags)if(!o.collection&&o.tag===t)if(o.default&&o.test)r.push(o);else return o;for(const o of r)if(o.test?.test(e))return o;const a=n.knownTags[t];return a&&!a.collection?(n.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(s(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[_e])}function zr({atKey:n,directives:e,schema:t},i,s,r){const a=t.tags.find(o=>(o.default===!0||n&&o.default==="key")&&o.test?.test(i))||t[_e];if(t.compat){const o=t.compat.find(l=>l.default&&l.test?.test(i))??t[_e];if(a.tag!==o.tag){const l=e.tagString(a.tag),c=e.tagString(o.tag),p=`Value may be parsed as either ${l} or ${c}`;r(s,"TAG_RESOLVE_FAILED",p,!0)}}return a}function Xr(n,e,t){if(e){t??(t=e.length);for(let i=t-1;i>=0;--i){let s=e[i];switch(s.type){case"space":case"comment":case"newline":n-=s.source.length;continue}for(s=e[++i];s?.type==="space";)n+=s.source.length,s=e[++i];break}}return n}const Zr={composeNode:Wi,composeEmptyNode:Gn};function Wi(n,e,t,i){const s=n.atKey,{spaceBefore:r,comment:a,anchor:o,tag:l}=t;let c,p=!0;switch(e.type){case"alias":c=ea(n,e,i),(o||l)&&i(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Hi(n,e,l,i),o&&(c.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{c=Kr(Zr,n,e,t,i),o&&(c.anchor=o.source.substring(1))}catch(f){const h=f instanceof Error?f.message:String(f);i(e,"RESOURCE_EXHAUSTION",h)}break;default:{const f=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;i(e,"UNEXPECTED_TOKEN",f),p=!1}}return c??(c=Gn(n,e.offset,void 0,null,t,i)),o&&c.anchor===""&&i(o,"BAD_ALIAS","Anchor cannot be an empty string"),s&&n.options.stringKeys&&(!G(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&i(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(c.spaceBefore=!0),a&&(e.type==="scalar"&&e.source===""?c.comment=a:c.commentBefore=a),n.options.keepSourceTokens&&p&&(c.srcToken=e),c}function Gn(n,e,t,i,{spaceBefore:s,comment:r,anchor:a,tag:o,end:l},c){const p={type:"scalar",offset:Xr(e,t,i),indent:-1,source:""},f=Hi(n,p,o,c);return a&&(f.anchor=a.source.substring(1),f.anchor===""&&c(a,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(f.spaceBefore=!0),r&&(f.comment=r,f.range[2]=l),f}function ea({options:n},{offset:e,source:t,end:i},s){const r=new Pn(t.substring(1));r.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+t.length,o=Et(i,a,n.strict,s);return r.range=[e,a,o.offset],o.comment&&(r.comment=o.comment),r}function ta(n,e,{offset:t,start:i,value:s,end:r},a){const o=Object.assign({_directives:e},n),l=new an(void 0,o),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},p=nt(i,{indicator:"doc-start",next:s??r?.[0],offset:t,onError:a,parentIndent:0,startOnNewline:!0});p.found&&(l.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!p.hasNewline&&a(p.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=s?Wi(c,s,p,a):Gn(c,p.end,i,null,p,a);const f=l.contents.range[2],h=Et(r,f,!1,a);return h.comment&&(l.comment=h.comment),l.range=[t,f,h.offset],l}function pt(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];const{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function ri(n){let e="",t=!1,i=!1;for(let s=0;s<n.length;++s){const r=n[s];switch(r[0]){case"#":e+=(e===""?"":i?`

`:`
`)+(r.substring(1)||" "),t=!0,i=!1;break;case"%":n[s+1]?.[0]!=="#"&&(s+=1),t=!1;break;default:t||(i=!0),t=!1}}return{comment:e,afterEmptyLine:i}}class na{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,i,s,r)=>{const a=pt(t);r?this.warnings.push(new jr(a,i,s)):this.errors.push(new gt(a,i,s))},this.directives=new oe({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:i,afterEmptyLine:s}=ri(this.prelude);if(i){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${i}`:i;else if(s||e.directives.docStart||!r)e.commentBefore=i;else if(X(r)&&!r.flow&&r.items.length>0){let a=r.items[0];ee(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${i}
${o}`:i}else{const a=r.commentBefore;r.commentBefore=a?`${i}
${a}`:i}}if(t){for(let r=0;r<this.errors.length;++r)e.errors.push(this.errors[r]);for(let r=0;r<this.warnings.length;++r)e.warnings.push(this.warnings[r])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:ri(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,i=-1){for(const s of e)yield*this.next(s);yield*this.end(t,i)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,i,s)=>{const r=pt(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",i,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=ta(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,i=new gt(pt(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(i):this.doc.errors.push(i);break}case"doc-end":{if(!this.doc){const i="Unexpected doc-end without preceding document";this.errors.push(new gt(pt(e),"UNEXPECTED_TOKEN",i));break}this.doc.directives.docEnd=!0;const t=Et(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const i=this.doc.comment;this.doc.comment=i?`${i}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new gt(pt(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const i=Object.assign({_directives:this.directives},this.options),s=new an(void 0,i);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}const Yi="\uFEFF",Qi="",zi="",Tn="";function ia(n){switch(n){case Yi:return"byte-order-mark";case Qi:return"doc-mode";case zi:return"flow-error-end";case Tn:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function me(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const ai=new Set("0123456789ABCDEFabcdef"),sa=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Kt=new Set(",[]{}"),ra=new Set(` ,[]{}
\r	`),kn=n=>!n||ra.has(n);class aa{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let i=this.next??"stream";for(;i&&(t||this.hasChars(1));)i=yield*this.parseNext(i)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let i=0;for(;t===" ";)t=this.buffer[++i+e];if(t==="\r"){const s=this.buffer[i+e+1];if(s===`
`||!s&&!this.atEnd)return e+i+1}return t===`
`||i>=this.indentNext||!t&&!this.atEnd?e+i:-1}if(t==="-"||t==="."){const i=this.buffer.substr(e,3);if((i==="---"||i==="...")&&me(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Yi&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,i=e.indexOf("#");for(;i!==-1;){const r=e[i-1];if(r===" "||r==="	"){t=i-1;break}else i=e.indexOf("#",i+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Qi,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&me(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!me(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&me(t)){const i=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=i,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(kn),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,i=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=i=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((i!==-1&&i<this.indentNext&&s[0]!=="#"||i===0&&(s.startsWith("---")||s.startsWith("..."))&&me(s[3]))&&!(i===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield zi,yield*this.parseLineStart();let r=0;for(;s[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),s[r]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(kn),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||me(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const i=this.buffer.substring(0,t);let s=i.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const r=this.continueScalar(s+1);if(r===-1)break;s=i.indexOf(`
`,r)}s!==-1&&(t=s-(i[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>me(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,i;e:for(let r=this.pos;i=this.buffer[r];++r)switch(i){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const a=this.buffer[r+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!i&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(i=this.buffer[s];i===" ";)i=this.buffer[++s];if(i==="	"){for(;i==="	"||i===" "||i==="\r"||i===`
`;)i=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let r=e-1,a=this.buffer[r];a==="\r"&&(a=this.buffer[--r]);const o=r;for(;a===" ";)a=this.buffer[--r];if(a===`
`&&r>=this.pos&&r+1+t>o)e=r;else break}while(!0);return yield Tn,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,i=this.pos-1,s;for(;s=this.buffer[++i];)if(s===":"){const r=this.buffer[i+1];if(me(r)||e&&Kt.has(r))break;t=i}else if(me(s)){let r=this.buffer[i+1];if(s==="\r"&&(r===`
`?(i+=1,s=`
`,r=this.buffer[i+1]):t=i),r==="#"||e&&Kt.has(r))break;if(s===`
`){const a=this.continueScalar(i+1);if(a===-1)break;i=Math.max(i,a-2)}}else{if(e&&Kt.has(s))break;t=i}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield Tn,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const i=this.buffer.slice(this.pos,e);return i?(yield i,this.pos+=i.length,i.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(kn),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const t=this.flowLevel>0,i=this.charAt(1);if(me(i)||t&&Kt.has(i)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!me(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(sa.has(t))t=this.buffer[++e];else if(t==="%"&&ai.has(this.buffer[e+1])&&ai.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,i;do i=this.buffer[++t];while(i===" "||e&&i==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,i=this.buffer[t];for(;!e(i);)i=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class oa{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,i=this.lineStarts.length;for(;t<i;){const r=t+i>>1;this.lineStarts[r]<e?t=r+1:i=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function Ie(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function oi(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function Xi(n){switch(n?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function $t(n){switch(n.type){case"document":return n.start;case"block-map":{const e=n.items[n.items.length-1];return e.sep??e.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function Ve(n){if(n.length===0)return[];let e=n.length;e:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;n[++e]?.type==="space";);return n.splice(e,n.length)}function Wt(n,e){if(e.length<1e5)Array.prototype.push.apply(n,e);else for(let t=0;t<e.length;++t)n.push(e[t])}function li(n){if(n.start.type==="flow-seq-start")for(const e of n.items)e.sep&&!e.value&&!Ie(e.start,"explicit-key-ind")&&!Ie(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,Xi(e.value)?e.value.end?Wt(e.value.end,e.sep):e.value.end=e.sep:Wt(e.start,e.sep),delete e.sep)}class la{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new aa,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const i of this.lexer.lex(e,t))yield*this.next(i);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=ia(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const i=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:i,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&e?.type!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const i=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in i?i.indent:0:t.type==="flow-collection"&&i.type==="document"&&(t.indent=0),t.type==="flow-collection"&&li(t),i.type){case"document":i.value=t;break;case"block-scalar":i.props.push(t);break;case"block-map":{const s=i.items[i.items.length-1];if(s.value){i.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=i.items[i.items.length-1];s.value?i.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=i.items[i.items.length-1];!s||s.value?i.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((i.type==="document"||i.type==="block-map"||i.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&oi(s.start)===-1&&(t.indent===0||s.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(i.type==="document"?i.end=s.start:i.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{oi(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=$t(this.peek(2)),i=Ve(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const i="end"in t.value?t.value.end:void 0;(Array.isArray(i)?i[i.length-1]:void 0)?.type==="comment"?i?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2]?.value?.end;if(Array.isArray(s)){Wt(s,t.start),s.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const i=!this.onKeyLine&&this.indent===e.indent,s=i&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(s&&t.sep&&!t.value){const a=[];for(let o=0;o<t.sep.length;++o){const l=t.sep[o];switch(l.type){case"newline":a.push(o);break;case"space":break;case"comment":l.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(r=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":s||t.value?(r.push(this.sourceToken),e.items.push({start:r}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):s||t.value?(r.push(this.sourceToken),e.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Ie(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(Xi(t.key)&&!Ie(t.sep,"newline")){const a=Ve(t.start),o=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:o,sep:l}]})}else r.length>0?t.sep=t.sep.concat(r,this.sourceToken):t.sep.push(this.sourceToken);else if(Ie(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=Ve(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||s?e.items.push({start:r,key:null,sep:[this.sourceToken]}):Ie(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);s||t.value?(e.items.push({start:r,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){if(a.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Ie(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else i&&e.items.push({start:r});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const i="end"in t.value?t.value.end:void 0;(Array.isArray(i)?i[i.length-1]:void 0)?.type==="comment"?i?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2]?.value?.end;if(Array.isArray(s)){Wt(s,t.start),s.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Ie(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const i=this.startBlockValue(e);if(i){this.stack.push(i);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let i;do yield*this.pop(),i=this.peek(1);while(i?.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const i=this.startBlockValue(e);i?this.stack.push(i):(yield*this.pop(),yield*this.step())}else{const i=this.peek(2);if(i.type==="block-map"&&(this.type==="map-value-ind"&&i.indent===e.indent||this.type==="newline"&&!i.items[i.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&i.type!=="flow-collection"){const s=$t(i),r=Ve(s);li(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=$t(e),i=Ve(t);return i.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=$t(e),i=Ve(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(i=>i.type==="newline"||i.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function ca(n){const e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new oa||null,prettyErrors:e}}function ua(n,e={}){const{lineCounter:t,prettyErrors:i}=ca(e),s=new la(t?.addNewLine),r=new na(e);let a=null;for(const o of r.compose(s.parse(n),!0,n.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new gt(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return i&&t&&(a.errors.forEach(ii(n,t)),a.warnings.forEach(ii(n,t))),a}function fa(n,e,t){let i;const s=ua(n,t);if(!s)return null;if(s.warnings.forEach(r=>Ni(s.options.logLevel,r)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:i},t))}const ha=`# Référentiel — philosophie, terminale générale (BO 2019)
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
`,on=fa(ha),Hn=n=>new Set((n??[]).map(e=>e.id_vault).filter(e=>typeof e=="string")),da=Hn(on.notions),pa=Hn(on.reperes_officiels),ma=Hn(on.reperes_muglioni);new Map((on.auteurs??[]).filter(n=>typeof n.id_vault=="string"&&typeof n.periode=="string").map(n=>[n.id_vault,n.periode]));function ga(n,e,t,i){const s=e==="notion"?da:e==="repère"?pa:null;return s?i==="2019"?s.has(n):t&&!s.has(n):t}const ba={notion:"Notion",repère:"Repère",concept:"Concept",auteur:"Auteur",courant:"Courant",oeuvre:"Œuvre",texte:"Texte"};class ya{noeuds;auteurDe=new Map;auteursLies=new Map;vue;constructor(e,t,i="2019"){this.noeuds=new Map([...e].map(a=>[a.id,a])),this.vue=i;const s=new Map,r=(a,o)=>{const l=s.get(a)??new Set;l.add(o),s.set(a,l),this.auteurDe.has(a)||this.auteurDe.set(a,o)};for(const a of t){const o=this.noeuds.get(a.de),l=this.noeuds.get(a.vers);!o||!l||(l.type==="auteur"&&o.type!=="auteur"&&r(o.id,l.id),o.type==="auteur"&&l.type!=="auteur"&&r(l.id,o.id))}for(const[a,o]of s)this.auteursLies.set(a,o.size)}titreDe(e){return e?this.noeuds.get(e)?.titre??null:null}auteurPrincipal(e){return this.titreDe(this.auteurDe.get(e))}nombreAuteurs(e){return this.auteursLies.get(e)??0}}function Te(n){return n.filter(e=>typeof e=="string"&&e.trim()!=="").join(" · ")}function ci(n,e){if(n==null&&e==null)return null;const t=r=>r!=null&&r<0?String(-r):r==null?"":String(r),i=(n??0)<0&&(e??0)<0,s=(n??0)<0||(e??0)<0;if(i)return`${t(n)}–${t(e)} av. J.-C.`;if(s){const r=(n??0)<0?`${t(n)} av. J.-C.`:t(n),a=(e??0)<0?`${t(e)} av. J.-C.`:t(e);return`${r}–${a}`}return`${t(n)}–${t(e)}`}const va=72;function _a(n,e){if(n.length<=e)return n;const t=n.slice(0,e-1),i=t.lastIndexOf(" ");return`${(i>e*.6?t.slice(0,i):t).trimEnd()}…`}function wa(n){const e=n.split(/\s[—–-]\s/)[1];return e&&e.replace(/\s*\([^)]*\)\s*$/,"").trim()||null}function Zi(n){const e=(n.pages??[]).length>0?`p. ${[...new Set(n.pages)].join("–")}`:n.page_livre!=null?`p. ${n.page_livre}`:null;return Te([di(n.ouvrage),n.categorie_grammaticale,e])}function et(n,e){const t=ba[n.type]??n.type,i=ga(n.id,n.type,n.programme??!1,e.vue)?`programme ${e.vue}`:null;switch(n.type){case"auteur":{const s=(n.courants??[])[0]??null;return Te([s,ci(n.date_naissance,n.date_mort)])}case"notion":{const s=e.nombreAuteurs(n.id);return Te([t,i,s>0?`${s} auteurs`:null])}case"repère":{const s=ma.has(n.id)?"Muglioni":null;return Te([t,n.famille??i,s])}case"concept":return Te([e.auteurPrincipal(n.id)??t]);case"courant":return Te([ci(n.debut_env,n.fin_env)])||t;case"oeuvre":return Te([e.auteurPrincipal(n.id),n.date_naissance==null?null:String(n.date_naissance)])||t;case"texte":{const s=e.auteurPrincipal(n.id),r=wa(n.titre),a=va-(s?s.length+3:0);return Te([s,r?_a(r,Math.max(a,20)):null])||t}default:return t}}var ka=U('<div class="mg-fond svelte-1ukc5tp" role="presentation"><div class="mg-feuille svelte-1ukc5tp" role="dialog" aria-label="Annoter ce passage" tabindex="-1"><p class="mg-extrait svelte-1ukc5tp"> </p> <textarea rows="4" aria-label="Note" placeholder="Ce que ce passage vous fait penser…" class="svelte-1ukc5tp"></textarea> <div class="mg-actions svelte-1ukc5tp"><button class="mg-annuler svelte-1ukc5tp">Annuler</button> <button class="mg-garder svelte-1ukc5tp"> </button></div></div></div>');function Sa(n,e){kt(e,!0);let t=K("");var i=ka(),s=z(i),r=z(s),a=ne(r),o=P(r,2);is(o);var l=P(o,2),c=z(l),p=P(c,2),f=ne(p,!0);re(h=>{te(a,`« ${e.extrait??""} »`),te(f,h)},[()=>u(t).trim()===""?"Surligner":"Enregistrer"]),Q("click",i,function(...h){e.surFermer?.apply(this,h)}),Q("click",s,h=>h.stopPropagation()),Q("keydown",s,h=>{h.key==="Escape"&&e.surFermer()}),hi(o,()=>u(t),h=>w(t,h)),Q("click",c,function(...h){e.surFermer?.apply(this,h)}),Q("click",p,()=>e.surEnregistrer(u(t).trim())),j(n,i),St()}Yt(["click","keydown"]);function Wn(n){return n.replace(/\s+/g," ").trim()}const es=8;function ui(n){return Wn(n).length>=es}function Na(n,e){if(Oa(n),e.length===0)return 0;const t=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),i=[],s=[];for(let c=t.nextNode();c;c=t.nextNode())i.push(c),s.push(c.data);const r=s.join(""),a=[];let o=0;for(const c of s)a.push(o),o+=c.length;let l=0;for(const c of[...e].sort((p,f)=>f.length-p.length)){const p=Wn(c);if(p.length<es)continue;const f=Aa(r,p);if(f===-1)continue;const h=Ea(i,a,f,f+p.length);if(!h)continue;const m=document.createElement("mark");m.className="marginale";try{m.appendChild(h.extractContents()),h.insertNode(m),l+=1}catch{}}return l}function Oa(n){for(const e of[...n.querySelectorAll("mark.marginale")]){const t=e.parentNode;if(t){for(;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e),t.normalize()}}}function Aa(n,e){const t=n.indexOf(e);if(t!==-1)return t;const i=e.split(" ").map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("\\s+");return n.search(new RegExp(i))}function Ea(n,e,t,i){const s=l=>{for(let c=n.length-1;c>=0;c-=1){const p=e[c],f=n[c];if(!(p===void 0||!f)&&l>=p)return{noeud:f,decalage:l-p}}return null},r=s(t),a=s(Math.max(t,i-1));if(!r||!a)return null;const o=document.createRange();return o.setStart(r.noeud,Math.min(r.decalage,r.noeud.data.length)),o.setEnd(a.noeud,Math.min(a.decalage+1,a.noeud.data.length)),o}var La=U('<button class="fiche-retour svelte-1cgqi8k" aria-label="Revenir">‹</button>'),Ta=U('<button class="fiche-autres svelte-1cgqi8k"> </button>'),Ia=U('<section class="fiche-relation svelte-1cgqi8k"><h3 class="svelte-1cgqi8k"> </h3> <div class="fiche-cartes svelte-1cgqi8k"><!> <!></div></section>'),Ca=U('<button role="tab" class="svelte-1cgqi8k"> </button>'),qa=U('<div class="fiche-niveaux svelte-1cgqi8k" role="tablist"></div>'),Ma=U('<section class="fiche-relation svelte-1cgqi8k"><h3 class="svelte-1cgqi8k">Prérequis</h3> <div class="fiche-cartes svelte-1cgqi8k"></div></section>'),Pa=U('<section class="fiche-relation svelte-1cgqi8k"><h3 class="svelte-1cgqi8k">Dans les dictionnaires</h3> <div class="fiche-cartes svelte-1cgqi8k"></div></section>'),ja=U('<li><button class="svelte-1cgqi8k"> </button></li>'),Ba=U('<section class="fiche-relation svelte-1cgqi8k"><h3 class="svelte-1cgqi8k">Liens externes</h3> <ul class="fiche-externes svelte-1cgqi8k"></ul></section>'),Da=U('<p class="fiche-references svelte-1cgqi8k"> </p>'),Ra=U('<button class="fiche-annoter svelte-1cgqi8k">Annoter</button>'),Ka=U(`<div class="fiche-sortie svelte-1cgqi8k" role="dialog" aria-modal="true" aria-label="Quitter l'application"><p>Ce lien sort de l’application.</p> <p class="fiche-adresse svelte-1cgqi8k"> </p> <button class="fiche-safari svelte-1cgqi8k">Ouvrir dans Safari</button> <button class="fiche-rester svelte-1cgqi8k">Rester ici</button></div>`),$a=U('<div><!> <article class="lecture" lang="fr"><!> <!> <!> <!> <!>  <!> <!> <!> <!> <!></article> <!> <!> <!> <!> <!></div>');function Fa(n,e){kt(e,!0);let t=De(e,"entrees",19,()=>[]),i=De(e,"contexte",3,null),s=De(e,"surOuvrirEntree",3,null),r=De(e,"surRecherche",3,null),a=De(e,"peutRevenir",3,!1),o=K(Ce([])),l=K(null),c=K(null);const p=$(()=>ks(e.fiche.corps_md??"")),f=$(()=>["Lycée","Prépa","Université"].filter(v=>u(p).has(v)));let h=K(null);const m=$(()=>u(h)&&u(p).has(u(h))?u(p).get(u(h))??"":e.fiche.corps_md??""),_=$(()=>(e.fiche.prerequis??[]).map(v=>e.noeuds.get(v)).filter(v=>v!==void 0)),d=$(()=>{const v=[],b=new Set([e.fiche.id]);for(const M of e.aretes){const W=M.de===e.fiche.id?M.vers:M.vers===e.fiche.id?M.de:null;if(!W||b.has(W))continue;const R=e.noeuds.get(W);R&&(b.add(W),v.push(R))}const N=[],q=new Set;for(const M of Ys){if(M.seulementSur&&!M.seulementSur.includes(e.fiche.type))continue;const W=v.filter(R=>!q.has(R.id)&&M.types.includes(R.type)).map(R=>(q.add(R.id),{id:R.id,type:R.type,titre:R.titre,ligne:i()?et(R,i()):null}));W.length>0&&N.push({id:M.id,titre:M.titre,cartes:W})}const D=v.filter(M=>!q.has(M.id));if(D.length>0){const M=N.find(R=>R.id==="voir-aussi"),W=D.map(R=>({id:R.id,type:R.type,titre:R.titre,ligne:i()?et(R,i()):null}));M?M.cartes.push(...W):N.push({id:"voir-aussi",titre:"Voir aussi",cartes:W})}return N}),g=["reperes","auteurs","concepts","textes"],S=$(()=>u(d).filter(v=>g.includes(v.id))),k=$(()=>u(d).filter(v=>!g.includes(v.id))),y=$(()=>e.fiche.questions??[]),E=$(()=>t().map((v,b)=>({e:v,rang:b})).filter(({e:v})=>We(v.vedette)===We(e.fiche.titre)).slice(0,2));let T=null;function I(v){const b="touches"in v?v.touches[0]:v;if(!b)return null;const N=document.caretRangeFromPoint?.(b.clientX,b.clientY),q=N?.startContainer.textContent??"";if(!q)return null;const D=N?.startOffset??0,M=q.slice(0,D).match(/[\p{L}'’-]+$/u)?.[0]??"",W=q.slice(D).match(/^[\p{L}'’-]+/u)?.[0]??"",R=(M+W).trim();return R.length>2?R:null}function F(v){if(!Ut("definition-toucher"))return;const b=I(v);b&&(T=setTimeout(()=>{const N=e.resolveur?.resoudre(b)??null,q=N?e.noeuds.get(N.id):void 0;q&&w(c,{id:q.id,titre:q.titre,type:q.type,phrase:pi(q.corps_md??"")},!0)},450))}function A(){T&&clearTimeout(T),T=null}function Y(v){const b=v.target.closest("a.wikilien");if(!b)return;v.preventDefault();const N=b.dataset.id;N&&e.surOuvrir(N)}let ie=K(null),ae=K(Ce([])),B=K(null),de=K(!1);vt(()=>{const v=e.fiche.id;if(!Ut("marginalia")){w(ae,[],!0);return}ps(v).then(b=>{ss(()=>e.fiche.id)===v&&w(ae,b.map(N=>N.extrait),!0)})}),vt(()=>{const v=u(ie),b=u(ae);u(m),v&&Na(v,b)});function lt(){if(!Ut("marginalia"))return;const v=window.getSelection(),b=v?.toString()??"",N=v&&u(ie)&&v.anchorNode?u(ie).contains(v.anchorNode):!1;w(de,N&&ui(b),!0)}function ln(){const v=Wn(window.getSelection()?.toString()??"");ui(v)&&(w(B,v,!0),w(de,!1))}async function Lt(v){const b=u(B);w(B,null),b&&(await Ss({fiche:e.fiche.id,extrait:b,note:v,cree:Date.now()}),w(ae,[...u(ae),b],!0),window.getSelection()?.removeAllRanges())}const cn=24,un=64;let Me=null;function fn(v){const b=v.changedTouches[0];!b||b.clientX>cn||(Me={x:b.clientX,y:b.clientY})}function hn(v){const b=v.changedTouches[0];if(!Me||!b)return;const N=b.clientX-Me.x,q=Math.abs(b.clientY-Me.y);Me=null,N>un&&q<N&&e.surRetour()}var ct=$a();Ft("touchstart",Yn,fn,void 0,!0),Ft("touchend",Yn,hn),Ft("selectionchange",rs,lt);let Fe;var Ue=z(ct);{var dn=v=>{var b=La();Q("click",b,function(...N){e.surRetour?.apply(this,N)}),j(v,b)};V(Ue,v=>{a()&&v(dn)})}var be=P(Ue,2);{const v=(b,N=as)=>{var q=Ia(),D=z(q),M=ne(D,!0),W=P(D,2),R=z(W);Le(R,17,()=>u(o).includes(N().id)?N().cartes:N().cartes.slice(0,dt),je=>je.id,(je,Ee)=>{gn(je,{get type(){return u(Ee).type},get titre(){return u(Ee).titre},get ligne(){return u(Ee).ligne},surChoix:()=>e.surOuvrir(u(Ee).id)})});var pe=P(R,2);{var ht=je=>{var Ee=Ta(),ns=ne(Ee);re(()=>te(ns,`et ${N().cartes.length-dt} autre${N().cartes.length-dt>1?"s":""}`)),Q("click",Ee,()=>w(o,[...u(o),N().id],!0)),j(je,Ee)},Se=$(()=>N().cartes.length>dt&&!u(o).includes(N().id));V(pe,je=>{u(Se)&&je(ht)})}re(()=>te(M,N().titre)),j(b,q)};var Tt=z(be);{let b=$(()=>i()&&et(e.fiche,i())||null),N=$(()=>e.fiche.statut??null),q=$(()=>e.fiche.programme??!1);ms(Tt,{get type(){return e.fiche.type},get titre(){return e.fiche.titre},get sousTitre(){return u(b)},get statut(){return u(N)},get programme(){return u(q)}})}var It=P(Tt,2);{var xe=b=>{ws(b,{titre:"Pour orienter la lecture",ton:"accent",get questions(){return u(y)}})};V(It,b=>{u(y).length>0&&b(xe)})}var ut=P(It,2);{var Ct=b=>{var N=qa();Le(N,20,()=>["Lycée","Prépa","Université"],q=>q,(q,D)=>{var M=Ca(),W=ne(M,!0);re(R=>{Cn(M,"aria-selected",u(h)===D),M.disabled=R,te(W,D)},[()=>!u(f).includes(D)]),Q("click",M,()=>w(h,u(h)===D?null:D,!0)),j(q,M)}),j(b,N)};V(ut,b=>{u(f).length>0&&b(Ct)})}var qt=P(ut,2);{var pn=b=>{var N=Ma(),q=P(z(N),2);Le(q,21,()=>u(_),D=>D.id,(D,M)=>{gn(D,{get type(){return u(M).type},get titre(){return u(M).titre},surChoix:()=>e.surOuvrir(u(M).id)})}),j(b,N)};V(qt,b=>{u(_).length>0&&b(pn)})}var Mt=P(qt,2);gs(Mt,()=>bs(u(m),e.resolveur));var Pt=P(Mt,2);Le(Pt,17,()=>u(S),b=>b.id,(b,N)=>{v(b,()=>u(N))});var jt=P(Pt,2);{var mn=b=>{var N=Pa(),q=P(z(N),2);Le(q,21,()=>u(E).slice(0,dt),({e:D,rang:M})=>M,(D,M)=>{let W=()=>u(M).e,R=()=>u(M).rang;{let pe=$(()=>di(W().ouvrage)),ht=$(()=>Zi(W())),Se=$(()=>s()?()=>s()(R()):null);gn(D,{get type(){return u(pe)},get titre(){return W().vedette},get ligne(){return u(ht)},get surChoix(){return u(Se)}})}}),j(b,N)};V(jt,b=>{u(E).length>0&&b(mn)})}var O=P(jt,2);Le(O,17,()=>u(k),b=>b.id,(b,N)=>{v(b,()=>u(N))});var L=P(O,2);{var J=b=>{var N=Ba(),q=P(z(N),2);Le(q,21,()=>e.fiche.liens_externes??[],D=>D.url,(D,M)=>{var W=ja(),R=z(W),pe=ne(R,!0);re(()=>te(pe,u(M).site)),Q("click",R,()=>w(l,u(M).url,!0)),j(D,W)}),j(b,N)};V(L,b=>{(e.fiche.liens_externes??[]).length>0&&b(J)})}var ce=P(L,2);{var ye=b=>{var N=Da(),q=ne(N);re(()=>te(q,`${e.fiche.references_hors_ligne??""} référence${(e.fiche.references_hors_ligne??0)>1?"s":""} dans la bibliothèque`)),j(b,N)};V(ce,b=>{(e.fiche.references_hors_ligne??0)>0&&b(ye)})}ys(be,b=>w(ie,b),()=>u(ie))}var H=P(be,2);{let v=$(()=>He.estFavori(e.fiche.id)),b=$(()=>He.estALire(e.fiche.id));vs(H,{get favori(){return u(v)},get aLire(){return u(b)},surFavori:()=>He.basculer("favori",e.fiche),surALire:()=>He.basculer("aLire",e.fiche),surRecherche:()=>r()?.()})}var ve=P(H,2);{var ft=v=>{var b=Ra();Q("click",b,ln),j(v,b)};V(ve,v=>{u(de)&&v(ft)})}var x=P(ve,2);{var se=v=>{Sa(v,{get extrait(){return u(B)},surEnregistrer:b=>{Lt(b)},surFermer:()=>w(B,null)})};V(x,v=>{u(B)&&v(se)})}var we=P(x,2);{var Pe=v=>{Xs(v,{get titre(){return u(c).titre},get type(){return u(c).type},get definition(){return u(c).phrase},surOuvrir:()=>{const b=u(c)?.id;w(c,null),b&&e.surOuvrir(b)},surFermer:()=>w(c,null)})};V(we,v=>{u(c)&&v(Pe)})}var ke=P(we,2);{var Ae=v=>{var b=Ka(),N=P(z(b),2),q=ne(N,!0),D=P(N,2),M=P(D,2);re(()=>te(q,u(l))),Q("click",D,()=>{u(l)&&Zs(u(l))&&tr(u(l)),w(l,null)}),Q("click",M,()=>w(l,null)),j(v,b)};V(ke,v=>{u(l)&&v(Ae)})}re(()=>Fe=_s(ct,1,"fiche-page svelte-1cgqi8k",null,Fe,{"avec-retour":a()})),Q("click",be,Y),Q("keydown",be,v=>{v.key==="Enter"&&Y(v)}),Q("touchstart",be,F),Q("touchend",be,A),Q("touchmove",be,A),j(n,ct),St()}Yt(["click","keydown","touchstart","touchend","touchmove"]);var Ua=U('<li><button class="svelte-aqngz4"> </button></li>'),xa=U('<ul class="fa-chemin svelte-aqngz4"></ul>'),Ja=U('<div class="fa-zone svelte-aqngz4"><!> <button class="fa-pastille svelte-aqngz4"> </button></div>');function Va(n,e){kt(e,!0);let t=K(!1);var i=fi(),s=Ge(i);{var r=a=>{var o=Ja(),l=z(o);{var c=h=>{var m=xa();Le(m,23,()=>e.chemin,(_,d)=>_.id+d,(_,d,g)=>{var S=Ua(),k=z(S),y=ne(k,!0);re(()=>{k.disabled=u(g)===e.chemin.length-1,te(y,u(d).titre)}),Q("click",k,()=>{e.surAller(u(g)),w(t,!1)}),j(_,S)}),j(h,m)};V(l,h=>{u(t)&&h(c)})}var p=P(l,2),f=ne(p);re(()=>{Cn(p,"aria-expanded",u(t)),te(f,`${e.chemin.length??""} fiches`)}),Q("click",p,()=>w(t,!u(t))),j(a,o)};V(s,a=>{e.chemin.length>1&&a(r)})}j(n,i),St()}Yt(["click"]);const In=Ce({prete:!1});function Ga(n){n.waiting&&navigator.serviceWorker.controller&&(In.prete=!0),n.addEventListener("updatefound",()=>{const e=n.installing;e&&e.addEventListener("statechange",()=>{e.state==="installed"&&navigator.serviceWorker.controller&&(In.prete=!0)})})}async function Ha(){if(!("serviceWorker"in navigator))return;const n="/philo/";try{const e=await navigator.serviceWorker.register(`${n}sw.js`,{scope:n,type:"classic"});Ga(e),await e.update()}catch{}}var Sn=U("<!> <!>",1),Wa=U('<div class="attente svelte-1n46o8q"><p class="svelte-1n46o8q"> </p> <p class="detail svelte-1n46o8q"> </p></div>'),Ya=U('<p class="detail mono svelte-1n46o8q"> </p>'),Qa=U('<p class="svelte-1n46o8q">Ouverture du contenu…</p> <!>',1),za=U('<p class="svelte-1n46o8q">Déchiffrement…</p>'),Xa=U(`<p class="svelte-1n46o8q">Aucun contenu.</p> <p class="detail svelte-1n46o8q">Le contenu n'a pas encore été publié, ou cet appareil n'a jamais été en ligne.</p>`,1),Za=U(`<p class="detail svelte-1n46o8q">Mise à jour prête — elle s'appliquera au prochain lancement.</p>`),eo=U('<div class="attente svelte-1n46o8q"><!> <!></div>');function to(n,e){kt(e,!0);let t=K(Ce(os()?"chargement":"installation")),i=K(null),s=K(null),r=K(null),a=K(!1),o=K(Ce(new Map)),l=K(Ce([])),c=K(Ce([])),p=K(null),f=K(null),h=K(null),m=null,_=K(null),d=K(Ce([])),g=K(null),S=K(!1),k=K("wiki"),y=K("accueil"),E=K(null),T=K("accueil"),I=K("2019");vt(()=>{qs(Ms.valeurs)});const F=Cs("/philo/");vt(()=>{u(t)==="chargement"&&Y()});function A(){w(t,"chargement")}async function Y(){const O=await Ps(F,J=>w(s,J,!0));if(w(s,null),!O){w(t,"vide");return}w(i,O,!0);const L=await js();if(L&&Bs(L.sel,L.iterations,O)){await ie(L.cle);return}L&&await Qn(),w(t,"verrouille")}async function ie(O){if(u(i)){w(t,"ouverture"),w(a,!1),m=O;try{const L=JSON.parse(await xe(u(i).index,O));if(u(i).entrees){const H=JSON.parse(await xe(u(i).entrees,O));w(c,H.entrees,!0)}const J=L.blocs.find(H=>H.type==="graphe");if(!J)throw new Error("Graphe absent du contenu.");const ce=JSON.parse(await xe(J.id,O));w(o,new Map(ce.noeuds.map(H=>[H.id,H])),!0),w(l,ce.aretes??[],!0),w(_,Os(ce),!0),w(r,{noeuds:ce.noeuds.length,entrees:u(c).length,blocs:u(i).blocs.length},!0);const ye=[...ce.noeuds.map(H=>({id:H.id,type:H.type,titre:H.titre,alias:(H.aliases??[]).join(" "),en:(H.en??[]).map(ve=>ve.term).join(" "),definition:pi(H.corps_md??""),corps:(H.corps_md??"").slice(0,4e3)})),...u(c).map((H,ve)=>({id:`entree:${ve}`,type:"entree",titre:H.vedette,alias:"",en:"",definition:H.definition_courte,corps:"",ouvrage:H.ouvrage}))];w(g,As(ye),!0),await He.charger(),w(d,[],!0),w(y,"accueil"),w(k,"wiki"),w(t,"ouvert")}catch{await Qn(),w(a,!0),w(t,"verrouille")}}}const ae=$(()=>u(o).get(u(d)[u(d).length-1]??"")??null);function B(O){if(O.startsWith("entree:")){Fe(Number(O.slice(7)));return}u(o).has(O)&&(Ue(),u(y)!=="fiche"&&w(T,u(y),!0),w(k,"wiki"),w(y,"fiche"),w(d,[...u(d),O],!0),He.voir(O),window.scrollTo(0,0))}const de=$(()=>new ya(u(o).values(),u(l),u(I))),lt=O=>{const L=u(o).get(O);return L?et(L,u(de)):null},ln=$(()=>{const O={};for(const L of u(o).values())O[L.type]=(O[L.type]??0)+1;return O.entree=u(c).length,O}),Lt=O=>u(o).get(O)?.titre??null,cn=$(()=>{const O=zn.find(L=>L.id===u(E))?.type;return O?[...u(o).values()].filter(L=>L.type===O).map(L=>({id:L.id,titre:L.titre,type:L.type,statut:L.statut,sous:et(L,u(de))})).sort((L,J)=>L.titre.localeCompare(J.titre,"fr")):[]}),un=$(()=>u(k)==="wiki"&&(u(p)!==null||u(y)==="fiche")),Me=$(()=>zn.find(O=>O.id===u(E))?.libelle??"");function fn(O){if(O==="dictionnaires"){w(S,!0);return}w(E,O,!0),w(y,"portail"),window.scrollTo(0,0)}function hn(){const O=[...u(o).values()].filter(J=>(J.corps_md??"").length>200),L=O[Math.floor(Math.random()*O.length)];L&&B(L.id)}function ct(O){w(k,O,!0),w(S,!1),O==="wiki"&&(w(y,"accueil"),w(d,[],!0),Ue()),window.scrollTo(0,0)}async function Fe(O){const L=u(c)[O];if(!(!L||!m)&&(w(p,L,!0),w(h,O,!0),w(f,null),window.scrollTo(0,0),!!L.bloc))try{const J=await xe(L.bloc,m);u(h)===O&&w(f,Es(J,L.vedette),!0)}catch{w(f,null)}}function Ue(){w(p,null),w(h,null),w(f,null)}const dn=$(()=>u(h)===null?{avant:null,apres:null}:xs(u(c),u(h))),be=$(()=>{const O=u(p);return O?.renvois?.length?O.renvois.map(L=>{const J=We(L),ce=u(c).findIndex(ye=>ye.ouvrage===O.ouvrage&&We(ye.vedette)===J);return{texte:L,rang:ce===-1?null:ce}}):[]}),Tt=$(()=>{if(!u(p))return[];const O=We(u(p).vedette);return[...u(o).values()].filter(L=>We(L.titre)===O).slice(0,3).map(L=>({id:L.id,type:L.type,titre:L.titre,ligne:et(L,u(de))}))});function It(){u(d).length>1?w(d,u(d).slice(0,-1),!0):(w(d,[],!0),w(y,u(T),!0)),window.scrollTo(0,0)}async function xe(O,L){let J=await Ls(O);return J||(J=await F.bloc(O),await Ts(O,J)),Is(J,L)}var ut=Sn(),Ct=Ge(ut);{var qt=O=>{Ns(O,{get index(){return u(g)},sousLigneDe:lt,sousLigneEntreeDe:L=>{const J=u(c)[L];return J?Zi(J):null},surOuvrir:L=>{w(S,!1),B(L)},surFermer:()=>w(S,!1)})};V(Ct,O=>{u(t)==="ouvert"&&u(S)&&O(qt)})}var pn=P(Ct,2);{var Mt=O=>{var L=Sn(),J=Ge(L);{var ce=x=>{var se=fi(),we=Ge(se);{var Pe=N=>{Ks(N,{get entree(){return u(p)},get corps(){return u(f)},get voisines(){return u(dn)},get fichesLiees(){return u(Tt)},get renvoisResolus(){return u(be)},surOuvrirFiche:B,surOuvrirEntree:q=>{Fe(q)},surRetour:Ue,surRecherche:()=>w(S,!0)})},ke=N=>{var q=Sn(),D=Ge(q);Fa(D,{get fiche(){return u(ae)},get noeuds(){return u(o)},get aretes(){return u(l)},get resolveur(){return u(_)},get entrees(){return u(c)},get contexte(){return u(de)},peutRevenir:!0,surOuvrir:B,surRetour:It,surOuvrirEntree:pe=>{Fe(pe)},surRecherche:()=>w(S,!0)});var M=P(D,2);{var W=pe=>{{let ht=$(()=>u(d).map(Se=>({id:Se,titre:u(o).get(Se)?.titre??Se})));Va(pe,{get chemin(){return u(ht)},surAller:Se=>{w(d,u(d).slice(0,Se+1),!0),window.scrollTo(0,0)}})}},R=$(()=>Ut("fil-ariane"));V(M,pe=>{u(R)&&pe(W)})}j(N,q)},Ae=N=>{$s(N,{get titre(){return u(Me)},get fiches(){return u(cn)},surOuvrir:B,surRetour:()=>w(y,"accueil")})},v=N=>{Fs(N,{titreDe:Lt,sousLigneDe:lt,surOuvrir:B,surRetour:()=>w(y,"accueil")})},b=N=>{{let q=$(()=>u(_)?.manques().size??0);Us(N,{get comptes(){return u(ln)},titreDe:Lt,sousLigneDe:lt,get manques(){return u(q)},surPortail:fn,surOuvrir:B,surSauvegardes:()=>w(y,"sauvegardes"),surHasard:hn,surRecherche:()=>w(S,!0),get programme(){return u(I)},set programme(D){w(I,D,!0)}})}};V(we,N=>{u(p)?N(Pe):u(y)==="fiche"&&u(ae)?N(ke,1):u(y)==="portail"?N(Ae,2):u(y)==="sauvegardes"?N(v,3):N(b,-1)})}j(x,se)},ye=x=>{Ds(x,{get contenu(){return u(r)}})},H=x=>{var se=Wa(),we=z(se),Pe=ne(we,!0),ke=P(we,2),Ae=ne(ke,!0);re(()=>{te(Pe,u(k)==="etude"?"Étude":"Textes"),te(Ae,u(k)==="etude"?"Exercices, révision espacée et couverture : étape 5.":"Textes intégraux et cours convertis : étape 5.")}),j(x,se)};V(J,x=>{u(k)==="wiki"?x(ce):u(k)==="reglages"?x(ye,1):x(H,-1)})}var ve=P(J,2);{var ft=x=>{Rs(x,{get actif(){return u(k)},surChoix:ct})};V(ve,x=>{u(un)||x(ft)})}j(O,L)},Pt=O=>{ls(O,{surTolerance:A})},jt=O=>{{let L=$(cs);Ws(O,{get manifeste(){return u(i)},get refus(){return u(a)},surOuverture:ie,get memorisable(){return u(L)}})}},mn=O=>{var L=eo(),J=z(L);{var ce=x=>{var se=Qa(),we=P(Ge(se),2);{var Pe=ke=>{var Ae=Ya(),v=ne(Ae);re(b=>te(v,`${u(s).charges??""} / ${u(s).total??""} blocs — ${b??""} Mo`),[()=>(u(s).octets/1048576).toFixed(1)]),j(ke,Ae)};V(we,ke=>{u(s)&&ke(Pe)})}j(x,se)},ye=x=>{var se=za();j(x,se)},H=x=>{var se=Xa();j(x,se)};V(J,x=>{u(t)==="chargement"?x(ce):u(t)==="ouverture"?x(ye,1):u(t)==="vide"&&x(H,2)})}var ve=P(J,2);{var ft=x=>{var se=Za();j(x,se)};V(ve,x=>{In.prete&&x(ft)})}j(O,L)};V(pn,O=>{u(t)==="ouvert"?O(Mt):u(t)==="installation"?O(Pt,1):u(t)==="verrouille"&&u(i)?O(jt,2):O(mn,-1)})}j(n,ut),St()}const ts=document.getElementById("app");if(!ts)throw new Error("Élément #app introuvable.");us(to,{target:ts});Ha();
