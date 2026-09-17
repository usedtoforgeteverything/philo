import{p as lt,u as nt,i as U,g as u,t as ie,r as zt,l as j,b as ct,s as D,v as B,n as y,c as q,e as H,m as R,j as te,o as ne,d as qt,h as $n,k as G,w as As,a as Ae,x as Es,$ as os,y as ki,f as qe,z as Si,A as Ls,B as Qe,C as Ni,I as Oi,D as Ai,q as Ei}from"./Installation-CWd2cBZK.js";import{p as je,b as Un,a as Li,d as Ti,m as Ii,n as Ts,R as ls,c as qi,e as _e,A as Ci,h as Mi,r as ji,f as cs,B as Pi,s as Bi,g as Xe,i as Is,l as qs,C as En,j as us,N as Di,k as Ri,o as Ki,q as Fi,t as xi,u as $i,v as fs,w as Ui,x as Ji,y as Vi,z as Gi,D as Hi,E as Wi,F as Yi,G as zi,H as Qi,I as Xi,J as Zi,K as er,P as tr,S as nr,L as sr,M as ir,O as ds}from"./Reglages-CW-eLNyy.js";import{a as Qt}from"./features-DfOghPAs.js";var rr=R('<label class="memoriser svelte-odrj32"><input type="checkbox"/> Mémoriser sur cet appareil</label>'),ar=R(`<p class="memoriser svelte-odrj32">La phrase ne peut pas être mémorisée hors de l'application installée.</p>`),or=R('<p class="refus svelte-odrj32" role="alert"> </p>'),lr=R(`<div class="ecran svelte-odrj32"><form class="svelte-odrj32"><h1 class="svelte-odrj32">Philo</h1> <p class="invite svelte-odrj32">Phrase de passe</p> <input type="password" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" enterkeyhint="go" aria-label="Phrase de passe" class="svelte-odrj32"/> <!> <button type="submit" class="svelte-odrj32"> </button> <!> <p class="note svelte-odrj32">La phrase n'est écrite nulle part. « Mémoriser » garde sur cet appareil une clé
      qui ne peut pas en ressortir, jamais la phrase.</p></form></div>`);function cr(n,e){lt(e,!0);let t=je(e,"refus",3,!1),s=je(e,"memorisable",3,!0),i=D(""),r=D(!1),a=D("attente"),o=B(()=>t()?"Phrase refusée.":"");nt(()=>{t()&&y(a,"attente")});async function l(b){if(b.preventDefault(),u(i).trim()===""||u(a)==="ouverture")return;y(a,"ouverture");const E=await Ti(u(i),e.manifeste);u(r)&&s()&&await Ii(E,e.manifeste),y(i,""),e.surOuverture(E)}var c=lr(),p=H(c),f=q(H(p),4),d=q(f,2);{var g=b=>{var E=rr(),T=H(E);Li(T,()=>u(r),I=>y(r,I)),j(b,E)},w=b=>{var E=ar();j(b,E)};U(d,b=>{s()?b(g):b(w,-1)})}var h=q(d,2),m=ne(h,!0),S=q(h,2);{var k=b=>{var E=or(),T=ne(E,!0);ie(()=>te(T,u(o))),j(b,E)};U(S,b=>{u(o)&&b(k)})}ie(b=>{f.disabled=u(a)==="ouverture",h.disabled=b,te(m,u(a)==="ouverture"?"Ouverture…":"Ouvrir")},[()=>u(i).trim()===""||u(a)==="ouverture"]),zt("submit",p,l),Un(f,()=>u(i),b=>y(i,b)),j(n,c),ct()}const ur=[{id:"reperes",titre:"Repères liés",types:["repère"]},{id:"auteurs",titre:"Auteurs et positions",types:["auteur"]},{id:"concepts",titre:"Concepts",types:["concept"]},{id:"textes",titre:"Textes",types:["texte","oeuvre"]},{id:"courant",titre:"Courant et époque",types:["courant"],seulementSur:["auteur"]},{id:"voir-aussi",titre:"Voir aussi",types:["notion"]}],St=2;var fr=R('<p class="cd-definition svelte-4qesmr"> </p>'),dr=R('<div class="cd-fond svelte-4qesmr" role="presentation"><div class="cd-carte svelte-4qesmr" role="dialog"><p class="cd-type svelte-4qesmr"> </p> <p class="cd-titre svelte-4qesmr"> </p> <!> <button class="cd-ouvrir svelte-4qesmr">Ouvrir</button></div></div>');function hr(n,e){var t=dr(),s=H(t),i=H(s),r=ne(i,!0),a=q(i,2),o=ne(a,!0),l=q(a,2);{var c=f=>{var d=fr(),g=ne(d,!0);ie(()=>te(g,e.definition)),j(f,d)};U(l,f=>{e.definition&&f(c)})}var p=q(l,2);ie(()=>{$n(s,"aria-label",e.titre),te(r,e.type),te(o,e.titre)}),G("click",t,function(...f){e.surFermer?.apply(this,f)}),G("click",p,function(...f){e.surOuvrir?.apply(this,f)}),j(n,t)}qt(["click"]);function pr(n,e=window.location.href){let t;try{t=new URL(n,e)}catch{return!0}if(t.protocol!=="http:"&&t.protocol!=="https:")return!0;const s=new URL(e);return t.origin!==s.origin?!0:!t.pathname.startsWith(mr(s.pathname))}function mr(n){const e=n.lastIndexOf("/");return e<=0?"/":n.slice(0,e+1)}function gr(n){window.open(n,"_blank","noopener,noreferrer")}const Jn=Symbol.for("yaml.alias"),Pn=Symbol.for("yaml.document"),Pe=Symbol.for("yaml.map"),Cs=Symbol.for("yaml.pair"),we=Symbol.for("yaml.scalar"),ut=Symbol.for("yaml.seq"),he=Symbol.for("yaml.node.type"),ft=n=>!!n&&typeof n=="object"&&n[he]===Jn,rn=n=>!!n&&typeof n=="object"&&n[he]===Pn,Ct=n=>!!n&&typeof n=="object"&&n[he]===Pe,ee=n=>!!n&&typeof n=="object"&&n[he]===Cs,W=n=>!!n&&typeof n=="object"&&n[he]===we,Mt=n=>!!n&&typeof n=="object"&&n[he]===ut;function X(n){if(n&&typeof n=="object")switch(n[he]){case Pe:case ut:return!0}return!1}function Z(n){if(n&&typeof n=="object")switch(n[he]){case Jn:case Pe:case we:case ut:return!0}return!1}const Ms=n=>(W(n)||X(n))&&!!n.anchor,$e=Symbol("break visit"),vr=Symbol("skip children"),Et=Symbol("remove node");function dt(n,e){const t=br(e);rn(n)?Ze(null,n.contents,t,Object.freeze([n]))===Et&&(n.contents=null):Ze(null,n,t,Object.freeze([]))}dt.BREAK=$e;dt.SKIP=vr;dt.REMOVE=Et;function Ze(n,e,t,s){const i=yr(n,e,t,s);if(Z(i)||ee(i))return _r(n,s,i),Ze(n,i,t,s);if(typeof i!="symbol"){if(X(e)){s=Object.freeze(s.concat(e));for(let r=0;r<e.items.length;++r){const a=Ze(r,e.items[r],t,s);if(typeof a=="number")r=a-1;else{if(a===$e)return $e;a===Et&&(e.items.splice(r,1),r-=1)}}}else if(ee(e)){s=Object.freeze(s.concat(e));const r=Ze("key",e.key,t,s);if(r===$e)return $e;r===Et&&(e.key=null);const a=Ze("value",e.value,t,s);if(a===$e)return $e;a===Et&&(e.value=null)}}return i}function br(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function yr(n,e,t,s){if(typeof t=="function")return t(n,e,s);if(Ct(e))return t.Map?.(n,e,s);if(Mt(e))return t.Seq?.(n,e,s);if(ee(e))return t.Pair?.(n,e,s);if(W(e))return t.Scalar?.(n,e,s);if(ft(e))return t.Alias?.(n,e,s)}function _r(n,e,t){const s=e[e.length-1];if(X(s))s.items[n]=t;else if(ee(s))n==="key"?s.key=t:s.value=t;else if(rn(s))s.contents=t;else{const i=ft(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const wr={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},kr=n=>n.replace(/[!,[\]{}]/g,e=>wr[e]);class ce{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},ce.defaultYaml,e),this.tags=Object.assign({},ce.defaultTags,t)}clone(){const e=new ce(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new ce(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:ce.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},ce.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:ce.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},ce.defaultTags),this.atNextDocument=!1);const s=e.trim().split(/[ \t]+/),i=s.shift();switch(i){case"%TAG":{if(s.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),s.length<2))return!1;const[r,a]=s;return this.tags[r]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,s.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=s;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const a=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,a),!1}}default:return t(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,s,i]=e.match(/^(.*!)([^!]*)$/s);i||t(`The ${e} tag has no suffix`);const r=this.tags[s];if(r)try{return r+decodeURIComponent(i)}catch(a){return t(String(a)),null}return s==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,s]of Object.entries(this.tags))if(e.startsWith(s))return t+kr(e.substring(s.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],s=Object.entries(this.tags);let i;if(e&&s.length>0&&Z(e.contents)){const r={};dt(e.contents,(a,o)=>{Z(o)&&o.tag&&(r[o.tag]=!0)}),i=Object.keys(r)}else i=[];for(const[r,a]of s)r==="!!"&&a==="tag:yaml.org,2002:"||(!e||i.some(o=>o.startsWith(a)))&&t.push(`%TAG ${r} ${a}`);return t.join(`
`)}}ce.defaultYaml={explicit:!1,version:"1.2"};ce.defaultTags={"!!":"tag:yaml.org,2002:"};function js(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function Ps(n){const e=new Set;return dt(n,{Value(t,s){s.anchor&&e.add(s.anchor)}}),e}function Bs(n,e){for(let t=1;;++t){const s=`${n}${t}`;if(!e.has(s))return s}}function Sr(n,e){const t=[],s=new Map;let i=null;return{onAnchor:r=>{t.push(r),i??(i=Ps(n));const a=Bs(e,i);return i.add(a),a},setAnchors:()=>{for(const r of t){const a=s.get(r);if(typeof a=="object"&&a.anchor&&(W(a.node)||X(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=r,o}}},sourceObjects:s}}function et(n,e,t,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let i=0,r=s.length;i<r;++i){const a=s[i],o=et(n,s,String(i),a);o===void 0?delete s[i]:o!==a&&(s[i]=o)}else if(s instanceof Map)for(const i of Array.from(s.keys())){const r=s.get(i),a=et(n,s,i,r);a===void 0?s.delete(i):a!==r&&s.set(i,a)}else if(s instanceof Set)for(const i of Array.from(s)){const r=et(n,s,i,i);r===void 0?s.delete(i):r!==i&&(s.delete(i),s.add(r))}else for(const[i,r]of Object.entries(s)){const a=et(n,s,i,r);a===void 0?delete s[i]:a!==r&&(s[i]=a)}return n.call(e,t,s)}function de(n,e,t){if(Array.isArray(n))return n.map((s,i)=>de(s,String(i),t));if(n&&typeof n.toJSON=="function"){if(!t||!Ms(n))return n.toJSON(e,t);const s={aliasCount:0,count:1,res:void 0};t.anchors.set(n,s),t.onCreate=r=>{s.res=r,delete t.onCreate};const i=n.toJSON(e,t);return t.onCreate&&t.onCreate(i),i}return typeof n=="bigint"&&!t?.keep?Number(n):n}class Vn{constructor(e){Object.defineProperty(this,he,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:s,onAnchor:i,reviver:r}={}){if(!rn(e))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},o=de(this,"",a);if(typeof i=="function")for(const{count:l,res:c}of a.anchors.values())i(c,l);return typeof r=="function"?et(r,{"":o},"",o):o}}class Gn extends Vn{constructor(e){super(Jn),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if(t?.maxAliasCount===0)throw new ReferenceError("Alias resolution is disabled");let s;t?.aliasResolveCache?s=t.aliasResolveCache:(s=[],dt(e,{Node:(r,a)=>{(ft(a)||Ms(a))&&s.push(a)}}),t&&(t.aliasResolveCache=s));let i;for(const r of s){if(r===this)break;r.anchor===this.source&&(i=r)}if(i&&t){const{anchors:r,doc:a,maxAliasCount:o}=t;let l=r.get(i);if(l||(de(i,null,t),l=r.get(i)),l?.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(o>=0&&(l.count+=1,l.aliasCount===0&&(l.aliasCount=Xt(a,i,r)),l.count*l.aliasCount>o)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}}return i}toJSON(e,t){if(!t)return{source:this.source};const s=this.resolve(t.doc,t);if(!s){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(i)}return t.anchors.get(s).res}toString(e,t,s){const i=`*${this.source}`;if(e){if(js(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${i} `}return i}}function Xt(n,e,t){if(ft(e)){const s=e.resolve(n),i=t&&s&&t.get(s);return i?i.count*i.aliasCount:0}else if(X(e)){let s=0;for(const i of e.items){const r=Xt(n,i,t);r>s&&(s=r)}return s}else if(ee(e)){const s=Xt(n,e.key,t),i=Xt(n,e.value,t);return Math.max(s,i)}return 1}const Ds=n=>!n||typeof n!="function"&&typeof n!="object";class C extends Vn{constructor(e){super(we),this.value=e}toJSON(e,t){return t?.keep?this.value:de(this.value,e,t)}toString(){return String(this.value)}}C.BLOCK_FOLDED="BLOCK_FOLDED";C.BLOCK_LITERAL="BLOCK_LITERAL";C.PLAIN="PLAIN";C.QUOTE_DOUBLE="QUOTE_DOUBLE";C.QUOTE_SINGLE="QUOTE_SINGLE";const Nr="tag:yaml.org,2002:";function Or(n,e,t){if(e){const s=t.filter(r=>r.tag===e),i=s.find(r=>!r.format)??s[0];if(!i)throw new Error(`Tag ${e} not found`);return i}return t.find(s=>s.identify?.(n)&&!s.format)}function Tt(n,e,t){if(rn(n)&&(n=n.contents),Z(n))return n;if(ee(n)){const f=t.schema[Pe].createNode?.(t.schema,null,t);return f.items.push(n),f}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:s,onAnchor:i,onTagObj:r,schema:a,sourceObjects:o}=t;let l;if(s&&n&&typeof n=="object"){if(l=o.get(n),l)return l.anchor??(l.anchor=i(n)),new Gn(l.anchor);l={anchor:null,node:null},o.set(n,l)}e?.startsWith("!!")&&(e=Nr+e.slice(2));let c=Or(n,e,a.tags);if(!c){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const f=new C(n);return l&&(l.node=f),f}c=n instanceof Map?a[Pe]:Symbol.iterator in Object(n)?a[ut]:a[Pe]}r&&(r(c),delete t.onTagObj);const p=c?.createNode?c.createNode(t.schema,n,t):typeof c?.nodeClass?.from=="function"?c.nodeClass.from(t.schema,n,t):new C(n);return e?p.tag=e:c.default||(p.tag=c.tag),l&&(l.node=p),p}function tn(n,e,t){let s=t;for(let i=e.length-1;i>=0;--i){const r=e[i];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const a=[];a[r]=s,s=a}else s=new Map([[r,s]])}return Tt(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const Ot=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class Rs extends Vn{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(s=>Z(s)||ee(s)?s.clone(e):s),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Ot(e))this.add(t);else{const[s,...i]=e,r=this.get(s,!0);if(X(r))r.addIn(i,t);else if(r===void 0&&this.schema)this.set(s,tn(this.schema,i,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}deleteIn(e){const[t,...s]=e;if(s.length===0)return this.delete(t);const i=this.get(t,!0);if(X(i))return i.deleteIn(s);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${s}`)}getIn(e,t){const[s,...i]=e,r=this.get(s,!0);return i.length===0?!t&&W(r)?r.value:r:X(r)?r.getIn(i,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!ee(t))return!1;const s=t.value;return s==null||e&&W(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){const[t,...s]=e;if(s.length===0)return this.has(t);const i=this.get(t,!0);return X(i)?i.hasIn(s):!1}setIn(e,t){const[s,...i]=e;if(i.length===0)this.set(s,t);else{const r=this.get(s,!0);if(X(r))r.setIn(i,t);else if(r===void 0&&this.schema)this.set(s,tn(this.schema,i,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}}const Ar=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function Ee(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const Ue=(n,e,t)=>n.endsWith(`
`)?Ee(t,e):t.includes(`
`)?`
`+Ee(t,e):(n.endsWith(" ")?"":" ")+t,Ks="flow",Bn="block",Zt="quoted";function an(n,e,t="flow",{indentAtStart:s,lineWidth:i=80,minContentWidth:r=20,onFold:a,onOverflow:o}={}){if(!i||i<0)return n;i<r&&(r=0);const l=Math.max(1+r,1+i-e.length);if(n.length<=l)return n;const c=[],p={};let f=i-e.length;typeof s=="number"&&(s>i-Math.max(2,r)?c.push(0):f=i-s);let d,g,w=!1,h=-1,m=-1,S=-1;t===Bn&&(h=hs(n,h,e.length),h!==-1&&(f=h+l));for(let b;b=n[h+=1];){if(t===Zt&&b==="\\"){switch(m=h,n[h+1]){case"x":h+=3;break;case"u":h+=5;break;case"U":h+=9;break;default:h+=1}S=h}if(b===`
`)t===Bn&&(h=hs(n,h,e.length)),f=h+e.length+l,d=void 0;else{if(b===" "&&g&&g!==" "&&g!==`
`&&g!=="	"){const E=n[h+1];E&&E!==" "&&E!==`
`&&E!=="	"&&(d=h)}if(h>=f)if(d)c.push(d),f=d+l,d=void 0;else if(t===Zt){for(;g===" "||g==="	";)g=b,b=n[h+=1],w=!0;const E=h>S+1?h-2:m-1;if(p[E])return n;c.push(E),p[E]=!0,f=E+l,d=void 0}else w=!0}g=b}if(w&&o&&o(),c.length===0)return n;a&&a();let k=n.slice(0,c[0]);for(let b=0;b<c.length;++b){const E=c[b],T=c[b+1]||n.length;E===0?k=`
${e}${n.slice(0,T)}`:(t===Zt&&p[E]&&(k+=`${n[E]}\\`),k+=`
${e}${n.slice(E+1,T)}`)}return k}function hs(n,e,t){let s=e,i=e+1,r=n[i];for(;r===" "||r==="	";)if(e<i+t)r=n[++e];else{do r=n[++e];while(r&&r!==`
`);s=e,i=e+1,r=n[i]}return s}const on=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),ln=n=>/^(%|---|\.\.\.)/m.test(n);function Er(n,e,t){if(!e||e<0)return!1;const s=e-t,i=n.length;if(i<=s)return!1;for(let r=0,a=0;r<i;++r)if(n[r]===`
`){if(r-a>s)return!0;if(a=r+1,i-a<=s)return!1}return!0}function Lt(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:s}=e,i=e.options.doubleQuotedMinMultiLineLength,r=e.indent||(ln(n)?"  ":"");let a="",o=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(a+=t.slice(o,l)+"\\ ",l+=1,o=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{a+=t.slice(o,l);const p=t.substr(l+2,4);switch(p){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:p.substr(0,2)==="00"?a+="\\x"+p.substr(2):a+=t.substr(l,6)}l+=5,o=l+1}break;case"n":if(s||t[l+2]==='"'||t.length<i)l+=1;else{for(a+=t.slice(o,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)a+=`
`,l+=2;a+=r,t[l+2]===" "&&(a+="\\"),l+=1,o=l+1}break;default:l+=1}return a=o?a+t.slice(o):t,s?a:an(a,r,Zt,on(e,!1))}function Dn(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return Lt(n,e);const t=e.indent||(ln(n)?"  ":""),s="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?s:an(s,t,Ks,on(e,!1))}function tt(n,e){const{singleQuote:t}=e.options;let s;if(t===!1)s=Lt;else{const i=n.includes('"'),r=n.includes("'");i&&!r?s=Dn:r&&!i?s=Lt:s=t?Dn:Lt}return s(n,e)}let Rn;try{Rn=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Rn=/\n+(?!\n|$)/g}function en({comment:n,type:e,value:t},s,i,r){const{blockQuote:a,commentString:o,lineWidth:l}=s.options;if(!a||/\n[\t ]+$/.test(t))return tt(t,s);const c=s.indent||(s.forceBlockIndent||ln(t)?"  ":""),p=a==="literal"?!0:a==="folded"||e===C.BLOCK_FOLDED?!1:e===C.BLOCK_LITERAL?!0:!Er(t,l,c.length);if(!t)return p?`|
`:`>
`;let f,d;for(d=t.length;d>0;--d){const T=t[d-1];if(T!==`
`&&T!=="	"&&T!==" ")break}let g=t.substring(d);const w=g.indexOf(`
`);w===-1?f="-":t===g||w!==g.length-1?(f="+",r&&r()):f="",g&&(t=t.slice(0,-g.length),g[g.length-1]===`
`&&(g=g.slice(0,-1)),g=g.replace(Rn,`$&${c}`));let h=!1,m,S=-1;for(m=0;m<t.length;++m){const T=t[m];if(T===" ")h=!0;else if(T===`
`)S=m;else break}let k=t.substring(0,S<m?S+1:m);k&&(t=t.substring(k.length),k=k.replace(/\n+/g,`$&${c}`));let E=(h?c?"2":"1":"")+f;if(n&&(E+=" "+o(n.replace(/ ?[\r\n]+/g," ")),i&&i()),!p){const T=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let I=!1;const x=on(s,!0);a!=="folded"&&e!==C.BLOCK_FOLDED&&(x.onOverflow=()=>{I=!0});const A=an(`${k}${T}${g}`,c,Bn,x);if(!I)return`>${E}
${c}${A}`}return t=t.replace(/\n+/g,`$&${c}`),`|${E}
${c}${k}${t}${g}`}function Lr(n,e,t,s){const{type:i,value:r}=n,{actualString:a,implicitKey:o,indent:l,indentStep:c,inFlow:p}=e;if(o&&r.includes(`
`)||p&&/[[\]{},]/.test(r))return tt(r,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return o||p||!r.includes(`
`)?tt(r,e):en(n,e,t,s);if(!o&&!p&&i!==C.PLAIN&&r.includes(`
`))return en(n,e,t,s);if(ln(r)){if(l==="")return e.forceBlockIndent=!0,en(n,e,t,s);if(o&&l===c)return tt(r,e)}const f=r.replace(/\n+/g,`$&
${l}`);if(a){const d=h=>h.default&&h.tag!=="tag:yaml.org,2002:str"&&h.test?.test(f),{compat:g,tags:w}=e.doc.schema;if(w.some(d)||g?.some(d))return tt(r,e)}return o?f:an(f,l,Ks,on(e,!1))}function Hn(n,e,t,s){const{implicitKey:i,inFlow:r}=e,a=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:o}=n;o!==C.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=C.QUOTE_DOUBLE);const l=p=>{switch(p){case C.BLOCK_FOLDED:case C.BLOCK_LITERAL:return i||r?tt(a.value,e):en(a,e,t,s);case C.QUOTE_DOUBLE:return Lt(a.value,e);case C.QUOTE_SINGLE:return Dn(a.value,e);case C.PLAIN:return Lr(a,e,t,s);default:return null}};let c=l(o);if(c===null){const{defaultKeyType:p,defaultStringType:f}=e.options,d=i&&p||f;if(c=l(d),c===null)throw new Error(`Unsupported default string type ${d}`)}return c}function Fs(n,e){const t=Object.assign({blockQuote:!0,commentString:Ar,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let s;switch(t.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:s,options:t}}function Tr(n,e){if(e.tag){const i=n.filter(r=>r.tag===e.tag);if(i.length>0)return i.find(r=>r.format===e.format)??i[0]}let t,s;if(W(e)){s=e.value;let i=n.filter(r=>r.identify?.(s));if(i.length>1){const r=i.filter(a=>a.test);r.length>0&&(i=r)}t=i.find(r=>r.format===e.format)??i.find(r=>!r.format)}else s=e,t=n.find(i=>i.nodeClass&&s instanceof i.nodeClass);if(!t){const i=s?.constructor?.name??(s===null?"null":typeof s);throw new Error(`Tag not resolved for ${i} value`)}return t}function Ir(n,e,{anchors:t,doc:s}){if(!s.directives)return"";const i=[],r=(W(n)||X(n))&&n.anchor;r&&js(r)&&(t.add(r),i.push(`&${r}`));const a=n.tag??(e.default?null:e.tag);return a&&i.push(s.directives.tagString(a)),i.join(" ")}function at(n,e,t,s){if(ee(n))return n.toString(e,t,s);if(ft(n)){if(e.doc.directives)return n.toString(e);if(e.resolvedAliases?.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let i;const r=Z(n)?n:e.doc.createNode(n,{onTagObj:l=>i=l});i??(i=Tr(e.doc.schema.tags,r));const a=Ir(r,i,e);a.length>0&&(e.indentAtStart=(e.indentAtStart??0)+a.length+1);const o=typeof i.stringify=="function"?i.stringify(r,e,t,s):W(r)?Hn(r,e,t,s):r.toString(e,t,s);return a?W(r)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function qr({key:n,value:e},t,s,i){const{allNullValues:r,doc:a,indent:o,indentStep:l,options:{commentString:c,indentSeq:p,simpleKeys:f}}=t;let d=Z(n)&&n.comment||null;if(f){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(X(n)||!Z(n)&&typeof n=="object"){const x="With simple keys, collection cannot be used as a key value";throw new Error(x)}}let g=!f&&(!n||d&&e==null&&!t.inFlow||X(n)||(W(n)?n.type===C.BLOCK_FOLDED||n.type===C.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!g&&(f||!r),indent:o+l});let w=!1,h=!1,m=at(n,t,()=>w=!0,()=>h=!0);if(!g&&!t.inFlow&&m.length>1024){if(f)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");g=!0}if(t.inFlow){if(r||e==null)return w&&s&&s(),m===""?"?":g?`? ${m}`:m}else if(r&&!f||e==null&&g)return m=`? ${m}`,d&&!w?m+=Ue(m,t.indent,c(d)):h&&i&&i(),m;w&&(d=null),g?(d&&(m+=Ue(m,t.indent,c(d))),m=`? ${m}
${o}:`):(m=`${m}:`,d&&(m+=Ue(m,t.indent,c(d))));let S,k,b;Z(e)?(S=!!e.spaceBefore,k=e.commentBefore,b=e.comment):(S=!1,k=null,b=null,e&&typeof e=="object"&&(e=a.createNode(e))),t.implicitKey=!1,!g&&!d&&W(e)&&(t.indentAtStart=m.length+1),h=!1,!p&&l.length>=2&&!t.inFlow&&!g&&Mt(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let E=!1;const T=at(e,t,()=>E=!0,()=>h=!0);let I=" ";if(d||S||k){if(I=S?`
`:"",k){const x=c(k);I+=`
${Ee(x,t.indent)}`}T===""&&!t.inFlow?I===`
`&&b&&(I=`

`):I+=`
${t.indent}`}else if(!g&&X(e)){const x=T[0],A=T.indexOf(`
`),Y=A!==-1,re=t.inFlow??e.flow??e.items.length===0;if(Y||!re){let oe=!1;if(Y&&(x==="&"||x==="!")){let K=T.indexOf(" ");x==="&"&&K!==-1&&K<A&&T[K+1]==="!"&&(K=T.indexOf(" ",K+1)),(K===-1||A<K)&&(oe=!0)}oe||(I=`
${t.indent}`)}}else(T===""||T[0]===`
`)&&(I="");return m+=I+T,t.inFlow?E&&s&&s():b&&!E?m+=Ue(m,t.indent,c(b)):h&&i&&i(),m}function xs(n,e){(n==="debug"||n==="warn")&&console.warn(e)}const Vt="<<",Le={identify:n=>n===Vt||typeof n=="symbol"&&n.description===Vt,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new C(Symbol(Vt)),{addToJSMap:$s}),stringify:()=>Vt},Cr=(n,e)=>(Le.identify(e)||W(e)&&(!e.type||e.type===C.PLAIN)&&Le.identify(e.value))&&n?.doc.schema.tags.some(t=>t.tag===Le.tag&&t.default);function $s(n,e,t){const s=Us(n,t);if(Mt(s))for(const i of s.items)Ln(n,e,i);else if(Array.isArray(s))for(const i of s)Ln(n,e,i);else Ln(n,e,s)}function Ln(n,e,t){const s=Us(n,t);if(!Ct(s))throw new Error("Merge sources must be maps or map aliases");const i=s.toJSON(null,n,Map);for(const[r,a]of i)e instanceof Map?e.has(r)||e.set(r,a):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function Us(n,e){return n&&ft(e)?e.resolve(n.doc,n):e}function Js(n,e,{key:t,value:s}){if(Z(t)&&t.addToJSMap)t.addToJSMap(n,e,s);else if(Cr(n,t))$s(n,e,s);else{const i=de(t,"",n);if(e instanceof Map)e.set(i,de(s,i,n));else if(e instanceof Set)e.add(i);else{const r=Mr(t,i,n),a=de(s,r,n);r in e?Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[r]=a}}return e}function Mr(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(Z(n)&&t?.doc){const s=Fs(t.doc,{});s.anchors=new Set;for(const r of t.anchors.keys())s.anchors.add(r.anchor);s.inFlow=!0,s.inStringifyKey=!0;const i=n.toString(s);if(!t.mapKeyWarned){let r=JSON.stringify(i);r.length>40&&(r=r.substring(0,36)+'..."'),xs(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return i}return JSON.stringify(e)}function Wn(n,e,t){const s=Tt(n,void 0,t),i=Tt(e,void 0,t);return new ue(s,i)}class ue{constructor(e,t=null){Object.defineProperty(this,he,{value:Cs}),this.key=e,this.value=t}clone(e){let{key:t,value:s}=this;return Z(t)&&(t=t.clone(e)),Z(s)&&(s=s.clone(e)),new ue(t,s)}toJSON(e,t){const s=t?.mapAsMap?new Map:{};return Js(t,s,this)}toString(e,t,s){return e?.doc?qr(this,e,t,s):JSON.stringify(this)}}function Vs(n,e,t){return(e.inFlow??n.flow?Pr:jr)(n,e,t)}function jr({comment:n,items:e},t,{blockItemPrefix:s,flowChars:i,itemIndent:r,onChompKeep:a,onComment:o}){const{indent:l,options:{commentString:c}}=t,p=Object.assign({},t,{indent:r,type:null});let f=!1;const d=[];for(let w=0;w<e.length;++w){const h=e[w];let m=null;if(Z(h))!f&&h.spaceBefore&&d.push(""),nn(t,d,h.commentBefore,f),h.comment&&(m=h.comment);else if(ee(h)){const k=Z(h.key)?h.key:null;k&&(!f&&k.spaceBefore&&d.push(""),nn(t,d,k.commentBefore,f))}f=!1;let S=at(h,p,()=>m=null,()=>f=!0);m&&(S+=Ue(S,r,c(m))),f&&m&&(f=!1),d.push(s+S)}let g;if(d.length===0)g=i.start+i.end;else{g=d[0];for(let w=1;w<d.length;++w){const h=d[w];g+=h?`
${l}${h}`:`
`}}return n?(g+=`
`+Ee(c(n),l),o&&o()):f&&a&&a(),g}function Pr({items:n},e,{flowChars:t,itemIndent:s}){const{indent:i,indentStep:r,flowCollectionPadding:a,options:{commentString:o}}=e;s+=r;const l=Object.assign({},e,{indent:s,inFlow:!0,type:null});let c=!1,p=0;const f=[];for(let w=0;w<n.length;++w){const h=n[w];let m=null;if(Z(h))h.spaceBefore&&f.push(""),nn(e,f,h.commentBefore,!1),h.comment&&(m=h.comment);else if(ee(h)){const k=Z(h.key)?h.key:null;k&&(k.spaceBefore&&f.push(""),nn(e,f,k.commentBefore,!1),k.comment&&(c=!0));const b=Z(h.value)?h.value:null;b?(b.comment&&(m=b.comment),b.commentBefore&&(c=!0)):h.value==null&&k?.comment&&(m=k.comment)}m&&(c=!0);let S=at(h,l,()=>m=null);c||(c=f.length>p||S.includes(`
`)),w<n.length-1?S+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(c||(c=f.reduce((k,b)=>k+b.length+2,2)+(S.length+2)>e.options.lineWidth)),c&&(S+=",")),m&&(S+=Ue(S,s,o(m))),f.push(S),p=f.length}const{start:d,end:g}=t;if(f.length===0)return d+g;if(!c){const w=f.reduce((h,m)=>h+m.length+2,2);c=e.options.lineWidth>0&&w>e.options.lineWidth}if(c){let w=d;for(const h of f)w+=h?`
${r}${i}${h}`:`
`;return`${w}
${i}${g}`}else return`${d}${a}${f.join(" ")}${a}${g}`}function nn({indent:n,options:{commentString:e}},t,s,i){if(s&&i&&(s=s.replace(/^\n+/,"")),s){const r=Ee(e(s),n);t.push(r.trimStart())}}function Je(n,e){const t=W(e)?e.value:e;for(const s of n)if(ee(s)&&(s.key===e||s.key===t||W(s.key)&&s.key.value===t))return s}class fe extends Rs{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Pe,e),this.items=[]}static from(e,t,s){const{keepUndefined:i,replacer:r}=s,a=new this(e),o=(l,c)=>{if(typeof r=="function")c=r.call(t,l,c);else if(Array.isArray(r)&&!r.includes(l))return;(c!==void 0||i)&&a.items.push(Wn(l,c,s))};if(t instanceof Map)for(const[l,c]of t)o(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))o(l,t[l]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}add(e,t){let s;ee(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new ue(e,e?.value):s=new ue(e.key,e.value);const i=Je(this.items,s.key),r=this.schema?.sortMapEntries;if(i){if(!t)throw new Error(`Key ${s.key} already set`);W(i.value)&&Ds(s.value)?i.value.value=s.value:i.value=s.value}else if(r){const a=this.items.findIndex(o=>r(s,o)<0);a===-1?this.items.push(s):this.items.splice(a,0,s)}else this.items.push(s)}delete(e){const t=Je(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const i=Je(this.items,e)?.value;return(!t&&W(i)?i.value:i)??void 0}has(e){return!!Je(this.items,e)}set(e,t){this.add(new ue(e,t),!0)}toJSON(e,t,s){const i=s?new s:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(i);for(const r of this.items)Js(t,i,r);return i}toString(e,t,s){if(!e)return JSON.stringify(this);for(const i of this.items)if(!ee(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Vs(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:t})}}const ht={collection:"map",default:!0,nodeClass:fe,tag:"tag:yaml.org,2002:map",resolve(n,e){return Ct(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>fe.from(n,e,t)};class Ve extends Rs{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(ut,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Gt(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const s=Gt(e);if(typeof s!="number")return;const i=this.items[s];return!t&&W(i)?i.value:i}has(e){const t=Gt(e);return typeof t=="number"&&t<this.items.length}set(e,t){const s=Gt(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const i=this.items[s];W(i)&&Ds(t)?i.value=t:this.items[s]=t}toJSON(e,t){const s=[];t?.onCreate&&t.onCreate(s);let i=0;for(const r of this.items)s.push(de(r,String(i++),t));return s}toString(e,t,s){return e?Vs(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:t}):JSON.stringify(this)}static from(e,t,s){const{replacer:i}=s,r=new this(e);if(t&&Symbol.iterator in Object(t)){let a=0;for(let o of t){if(typeof i=="function"){const l=t instanceof Set?o:String(a++);o=i.call(t,l,o)}r.items.push(Tt(o,void 0,s))}}return r}}function Gt(n){let e=W(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const pt={collection:"seq",default:!0,nodeClass:Ve,tag:"tag:yaml.org,2002:seq",resolve(n,e){return Mt(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>Ve.from(n,e,t)},cn={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,s){return e=Object.assign({actualString:!0},e),Hn(n,e,t,s)}},un={identify:n=>n==null,createNode:()=>new C(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new C(null),stringify:({source:n},e)=>typeof n=="string"&&un.test.test(n)?n:e.options.nullStr},Yn={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new C(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&Yn.test.test(n)){const s=n[0]==="t"||n[0]==="T";if(e===s)return n}return e?t.options.trueStr:t.options.falseStr}};function be({format:n,minFractionDigits:e,tag:t,value:s}){if(typeof s=="bigint")return String(s);const i=typeof s=="number"?s:Number(s);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let r=Object.is(s,-0)?"-0":JSON.stringify(s);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(r)&&!r.includes("e")){let a=r.indexOf(".");a<0&&(a=r.length,r+=".");let o=e-(r.length-a-1);for(;o-- >0;)r+="0"}return r}const Gs={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:be},Hs={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():be(n)}},Ws={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){const e=new C(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:be},fn=n=>typeof n=="bigint"||Number.isInteger(n),zn=(n,e,t,{intAsBigInt:s})=>s?BigInt(n):parseInt(n.substring(e),t);function Ys(n,e,t){const{value:s}=n;return fn(s)&&s>=0?t+s.toString(e):be(n)}const zs={identify:n=>fn(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>zn(n,2,8,t),stringify:n=>Ys(n,8,"0o")},Qs={identify:fn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>zn(n,0,10,t),stringify:be},Xs={identify:n=>fn(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>zn(n,2,16,t),stringify:n=>Ys(n,16,"0x")},Br=[ht,pt,cn,un,Yn,zs,Qs,Xs,Gs,Hs,Ws];function ps(n){return typeof n=="bigint"||Number.isInteger(n)}const Ht=({value:n})=>JSON.stringify(n),Dr=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:Ht},{identify:n=>n==null,createNode:()=>new C(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ht},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:Ht},{identify:ps,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>ps(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:Ht}],Rr={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},Kr=[ht,pt].concat(Dr,Rr),Qn={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){const t=atob(n.replace(/[\n\r]/g,"")),s=new Uint8Array(t.length);for(let i=0;i<t.length;++i)s[i]=t.charCodeAt(i);return s}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},s,i,r){if(!t)return"";const a=t;let o;if(typeof btoa=="function"){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);o=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=C.BLOCK_LITERAL),e!==C.QUOTE_DOUBLE){const l=Math.max(s.options.lineWidth-s.indent.length,s.options.minContentWidth),c=Math.ceil(o.length/l),p=new Array(c);for(let f=0,d=0;f<c;++f,d+=l)p[f]=o.substr(d,l);o=p.join(e===C.BLOCK_LITERAL?`
`:" ")}return Hn({comment:n,type:e,value:o},s,i,r)}};function Zs(n,e){if(Mt(n))for(let t=0;t<n.items.length;++t){let s=n.items[t];if(!ee(s)){if(Ct(s)){s.items.length>1&&e("Each pair must have its own sequence indicator");const i=s.items[0]||new ue(new C(null));if(s.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${s.commentBefore}
${i.key.commentBefore}`:s.commentBefore),s.comment){const r=i.value??i.key;r.comment=r.comment?`${s.comment}
${r.comment}`:s.comment}s=i}n.items[t]=ee(s)?s:new ue(s)}}else e("Expected a sequence for this tag");return n}function ei(n,e,t){const{replacer:s}=t,i=new Ve(n);i.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof s=="function"&&(a=s.call(e,String(r++),a));let o,l;if(Array.isArray(a))if(a.length===2)o=a[0],l=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const c=Object.keys(a);if(c.length===1)o=c[0],l=a[o];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else o=a;i.items.push(Wn(o,l,t))}return i}const Xn={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Zs,createNode:ei};class st extends Ve{constructor(){super(),this.add=fe.prototype.add.bind(this),this.delete=fe.prototype.delete.bind(this),this.get=fe.prototype.get.bind(this),this.has=fe.prototype.has.bind(this),this.set=fe.prototype.set.bind(this),this.tag=st.tag}toJSON(e,t){if(!t)return super.toJSON(e);const s=new Map;t?.onCreate&&t.onCreate(s);for(const i of this.items){let r,a;if(ee(i)?(r=de(i.key,"",t),a=de(i.value,r,t)):r=de(i,"",t),s.has(r))throw new Error("Ordered maps must not include duplicate keys");s.set(r,a)}return s}static from(e,t,s){const i=ei(e,t,s),r=new this;return r.items=i.items,r}}st.tag="tag:yaml.org,2002:omap";const Zn={collection:"seq",identify:n=>n instanceof Map,nodeClass:st,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){const t=Zs(n,e),s=[];for(const{key:i}of t.items)W(i)&&(s.includes(i.value)?e(`Ordered maps must not include duplicate keys: ${i.value}`):s.push(i.value));return Object.assign(new st,t)},createNode:(n,e,t)=>st.from(n,e,t)};function ti({value:n,source:e},t){return e&&(n?ni:si).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}const ni={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new C(!0),stringify:ti},si={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new C(!1),stringify:ti},Fr={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:be},xr={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():be(n)}},$r={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){const e=new C(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){const s=n.substring(t+1).replace(/_/g,"");s[s.length-1]==="0"&&(e.minFractionDigits=s.length)}return e},stringify:be},jt=n=>typeof n=="bigint"||Number.isInteger(n);function dn(n,e,t,{intAsBigInt:s}){const i=n[0];if((i==="-"||i==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),s){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}const a=BigInt(n);return i==="-"?BigInt(-1)*a:a}const r=parseInt(n,t);return i==="-"?-1*r:r}function es(n,e,t){const{value:s}=n;if(jt(s)){const i=s.toString(e);return s<0?"-"+t+i.substr(1):t+i}return be(n)}const Ur={identify:jt,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>dn(n,2,2,t),stringify:n=>es(n,2,"0b")},Jr={identify:jt,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>dn(n,1,8,t),stringify:n=>es(n,8,"0")},Vr={identify:jt,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>dn(n,0,10,t),stringify:be},Gr={identify:jt,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>dn(n,2,16,t),stringify:n=>es(n,16,"0x")};class it extends fe{constructor(e){super(e),this.tag=it.tag}add(e){let t;ee(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new ue(e.key,null):t=new ue(e,null),Je(this.items,t.key)||this.items.push(t)}get(e,t){const s=Je(this.items,e);return!t&&ee(s)?W(s.key)?s.key.value:s.key:s}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const s=Je(this.items,e);s&&!t?this.items.splice(this.items.indexOf(s),1):!s&&t&&this.items.push(new ue(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,s);throw new Error("Set items must all have null values")}static from(e,t,s){const{replacer:i}=s,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof i=="function"&&(a=i.call(t,a,a)),r.items.push(Wn(a,null,s));return r}}it.tag="tag:yaml.org,2002:set";const ts={collection:"map",identify:n=>n instanceof Set,nodeClass:it,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>it.from(n,e,t),resolve(n,e){if(Ct(n)){if(n.hasAllNullValues(!0))return Object.assign(new it,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function ns(n,e){const t=n[0],s=t==="-"||t==="+"?n.substring(1):n,i=a=>e?BigInt(a):Number(a),r=s.replace(/_/g,"").split(":").reduce((a,o)=>a*i(60)+i(o),i(0));return t==="-"?i(-1)*r:r}function ii(n){let{value:e}=n,t=a=>a;if(typeof e=="bigint")t=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return be(n);let s="";e<0&&(s="-",e*=t(-1));const i=t(60),r=[e%i];return e<60?r.unshift(0):(e=(e-r[0])/i,r.unshift(e%i),e>=60&&(e=(e-r[0])/i,r.unshift(e))),s+r.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const ri={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>ns(n,t),stringify:ii},ai={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>ns(n,!1),stringify:ii},hn={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){const e=n.match(hn.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,s,i,r,a,o]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(t,s-1,i,r||0,a||0,o||0,l);const p=e[8];if(p&&p!=="Z"){let f=ns(p,!1);Math.abs(f)<30&&(f*=60),c-=6e4*f}return new Date(c)},stringify:({value:n})=>n?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},ms=[ht,pt,cn,un,ni,si,Ur,Jr,Vr,Gr,Fr,xr,$r,Qn,Le,Zn,Xn,ts,ri,ai,hn],gs=new Map([["core",Br],["failsafe",[ht,pt,cn]],["json",Kr],["yaml11",ms],["yaml-1.1",ms]]),vs={binary:Qn,bool:Yn,float:Ws,floatExp:Hs,floatNaN:Gs,floatTime:ai,int:Qs,intHex:Xs,intOct:zs,intTime:ri,map:ht,merge:Le,null:un,omap:Zn,pairs:Xn,seq:pt,set:ts,timestamp:hn},Hr={"tag:yaml.org,2002:binary":Qn,"tag:yaml.org,2002:merge":Le,"tag:yaml.org,2002:omap":Zn,"tag:yaml.org,2002:pairs":Xn,"tag:yaml.org,2002:set":ts,"tag:yaml.org,2002:timestamp":hn};function Tn(n,e,t){const s=gs.get(e);if(s&&!n)return t&&!s.includes(Le)?s.concat(Le):s.slice();let i=s;if(!i)if(Array.isArray(n))i=[];else{const r=Array.from(gs.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(n))for(const r of n)i=i.concat(r);else typeof n=="function"&&(i=n(i.slice()));return t&&(i=i.concat(Le)),i.reduce((r,a)=>{const o=typeof a=="string"?vs[a]:a;if(!o){const l=JSON.stringify(a),c=Object.keys(vs).map(p=>JSON.stringify(p)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return r.includes(o)||r.push(o),r},[])}const Wr=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0;class ss{constructor({compat:e,customTags:t,merge:s,resolveKnownTags:i,schema:r,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?Tn(e,"compat"):e?Tn(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=i?Hr:{},this.tags=Tn(t,this.name,s),this.toStringOptions=o??null,Object.defineProperty(this,Pe,{value:ht}),Object.defineProperty(this,we,{value:cn}),Object.defineProperty(this,ut,{value:pt}),this.sortMapEntries=typeof a=="function"?a:a===!0?Wr:null}clone(){const e=Object.create(ss.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Yr(n,e){const t=[];let s=e.directives===!0;if(e.directives!==!1&&n.directives){const l=n.directives.toString(n);l?(t.push(l),s=!0):n.directives.docStart&&(s=!0)}s&&t.push("---");const i=Fs(n,e),{commentString:r}=i.options;if(n.commentBefore){t.length!==1&&t.unshift("");const l=r(n.commentBefore);t.unshift(Ee(l,""))}let a=!1,o=null;if(n.contents){if(Z(n.contents)){if(n.contents.spaceBefore&&s&&t.push(""),n.contents.commentBefore){const p=r(n.contents.commentBefore);t.push(Ee(p,""))}i.forceBlockIndent=!!n.comment,o=n.contents.comment}const l=o?void 0:()=>a=!0;let c=at(n.contents,i,()=>o=null,l);o&&(c+=Ue(c,"",r(o))),(c[0]==="|"||c[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${c}`:t.push(c)}else t.push(at(n.contents,i));if(n.directives?.docEnd)if(n.comment){const l=r(n.comment);l.includes(`
`)?(t.push("..."),t.push(Ee(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=n.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&t[t.length-1]!==""&&t.push(""),t.push(Ee(r(l),"")))}return t.join(`
`)+`
`}class pn{constructor(e,t,s){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,he,{value:Pn});let i=null;typeof t=="function"||Array.isArray(t)?i=t:s===void 0&&t&&(s=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},s);this.options=r;let{version:a}=r;s?._directives?(this.directives=s._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new ce({version:a}),this.setSchema(a,s),this.contents=e===void 0?null:this.createNode(e,i,s)}clone(){const e=Object.create(pn.prototype,{[he]:{value:Pn}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Z(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){Ye(this.contents)&&this.contents.add(e)}addIn(e,t){Ye(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const s=Ps(this);e.anchor=!t||s.has(t)?Bs(t||"a",s):t}return new Gn(e.anchor)}createNode(e,t,s){let i;if(typeof t=="function")e=t.call({"":e},"",e),i=t;else if(Array.isArray(t)){const m=k=>typeof k=="number"||k instanceof String||k instanceof Number,S=t.filter(m).map(String);S.length>0&&(t=t.concat(S)),i=t}else s===void 0&&t&&(s=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:a,flow:o,keepUndefined:l,onTagObj:c,tag:p}=s??{},{onAnchor:f,setAnchors:d,sourceObjects:g}=Sr(this,a||"a"),w={aliasDuplicateObjects:r??!0,keepUndefined:l??!1,onAnchor:f,onTagObj:c,replacer:i,schema:this.schema,sourceObjects:g},h=Tt(e,p,w);return o&&X(h)&&(h.flow=!0),d(),h}createPair(e,t,s={}){const i=this.createNode(e,null,s),r=this.createNode(t,null,s);return new ue(i,r)}delete(e){return Ye(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Ot(e)?this.contents==null?!1:(this.contents=null,!0):Ye(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return X(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return Ot(e)?!t&&W(this.contents)?this.contents.value:this.contents:X(this.contents)?this.contents.getIn(e,t):void 0}has(e){return X(this.contents)?this.contents.has(e):!1}hasIn(e){return Ot(e)?this.contents!==void 0:X(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=tn(this.schema,[e],t):Ye(this.contents)&&this.contents.set(e,t)}setIn(e,t){Ot(e)?this.contents=t:this.contents==null?this.contents=tn(this.schema,Array.from(e),t):Ye(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let s;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new ce({version:"1.1"}),s={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new ce({version:e}),s={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,s=null;break;default:{const i=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(s)this.schema=new ss(Object.assign(s,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:s,maxAliasCount:i,onAnchor:r,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:s===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},l=de(this.contents,t??"",o);if(typeof r=="function")for(const{count:c,res:p}of o.anchors.values())r(p,c);return typeof a=="function"?et(a,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Yr(this,e)}}function Ye(n){if(X(n))return!0;throw new Error("Expected a YAML collection as document contents")}class oi extends Error{constructor(e,t,s,i){super(),this.name=e,this.code=s,this.message=i,this.pos=t}}class At extends oi{constructor(e,t,s){super("YAMLParseError",e,t,s)}}class zr extends oi{constructor(e,t,s){super("YAMLWarning",e,t,s)}}const bs=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>e.linePos(o));const{line:s,col:i}=t.linePos[0];t.message+=` at line ${s}, column ${i}`;let r=i-1,a=n.substring(e.lineStarts[s-1],e.lineStarts[s]).replace(/[\n\r]+$/,"");if(r>=60&&a.length>80){const o=Math.min(r-39,a.length-79);a="…"+a.substring(o),r-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),s>1&&/^ *$/.test(a.substring(0,r))){let o=n.substring(e.lineStarts[s-2],e.lineStarts[s-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const l=t.linePos[1];l?.line===s&&l.col>i&&(o=Math.max(1,Math.min(l.col-i,80-r)));const c=" ".repeat(r)+"^".repeat(o);t.message+=`:

${a}
${c}
`}};function ot(n,{flow:e,indicator:t,next:s,offset:i,onError:r,parentIndent:a,startOnNewline:o}){let l=!1,c=o,p=o,f="",d="",g=!1,w=!1,h=null,m=null,S=null,k=null,b=null,E=null,T=null;for(const A of n)switch(w&&(A.type!=="space"&&A.type!=="newline"&&A.type!=="comma"&&r(A.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),w=!1),h&&(c&&A.type!=="comment"&&A.type!=="newline"&&r(h,"TAB_AS_INDENT","Tabs are not allowed as indentation"),h=null),A.type){case"space":!e&&(t!=="doc-start"||s?.type!=="flow-collection")&&A.source.includes("	")&&(h=A),p=!0;break;case"comment":{p||r(A,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const Y=A.source.substring(1)||" ";f?f+=d+Y:f=Y,d="",c=!1;break}case"newline":c?f?f+=A.source:(!E||t!=="seq-item-ind")&&(l=!0):d+=A.source,c=!0,g=!0,(m||S)&&(k=A),p=!0;break;case"anchor":m&&r(A,"MULTIPLE_ANCHORS","A node can have at most one anchor"),A.source.endsWith(":")&&r(A.offset+A.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),m=A,T??(T=A.offset),c=!1,p=!1,w=!0;break;case"tag":{S&&r(A,"MULTIPLE_TAGS","A node can have at most one tag"),S=A,T??(T=A.offset),c=!1,p=!1,w=!0;break}case t:(m||S)&&r(A,"BAD_PROP_ORDER",`Anchors and tags must be after the ${A.source} indicator`),E&&r(A,"UNEXPECTED_TOKEN",`Unexpected ${A.source} in ${e??"collection"}`),E=A,c=t==="seq-item-ind"||t==="explicit-key-ind",p=!1;break;case"comma":if(e){b&&r(A,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),b=A,c=!1,p=!1;break}default:r(A,"UNEXPECTED_TOKEN",`Unexpected ${A.type} token`),c=!1,p=!1}const I=n[n.length-1],x=I?I.offset+I.source.length:i;return w&&s&&s.type!=="space"&&s.type!=="newline"&&s.type!=="comma"&&(s.type!=="scalar"||s.source!=="")&&r(s.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),h&&(c&&h.indent<=a||s?.type==="block-map"||s?.type==="block-seq")&&r(h,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:b,found:E,spaceBefore:l,comment:f,hasNewline:g,anchor:m,tag:S,newlineAfterProp:k,end:x,start:T??x}}function It(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(const e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of n.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(It(e.key)||It(e.value))return!0}return!1;default:return!0}}function Kn(n,e,t){if(e?.type==="flow-collection"){const s=e.end[0];s.indent===n&&(s.source==="]"||s.source==="}")&&It(e)&&t(s,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function li(n,e,t){const{uniqueKeys:s}=n.options;if(s===!1)return!1;const i=typeof s=="function"?s:(r,a)=>r===a||W(r)&&W(a)&&r.value===a.value;return e.some(r=>i(r.key,t))}const ys="All mapping items must start at the same column";function Qr({composeNode:n,composeEmptyNode:e},t,s,i,r){const a=r?.nodeClass??fe,o=new a(t.schema);t.atRoot&&(t.atRoot=!1);let l=s.offset,c=null;for(const p of s.items){const{start:f,key:d,sep:g,value:w}=p,h=ot(f,{indicator:"explicit-key-ind",next:d??g?.[0],offset:l,onError:i,parentIndent:s.indent,startOnNewline:!0}),m=!h.found;if(m){if(d&&(d.type==="block-seq"?i(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in d&&d.indent!==s.indent&&i(l,"BAD_INDENT",ys)),!h.anchor&&!h.tag&&!g){c=h.end,h.comment&&(o.comment?o.comment+=`
`+h.comment:o.comment=h.comment);continue}(h.newlineAfterProp||It(d))&&i(d??f[f.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else h.found?.indent!==s.indent&&i(l,"BAD_INDENT",ys);t.atKey=!0;const S=h.end,k=d?n(t,d,h,i):e(t,S,f,null,h,i);t.schema.compat&&Kn(s.indent,d,i),t.atKey=!1,li(t,o.items,k)&&i(S,"DUPLICATE_KEY","Map keys must be unique");const b=ot(g??[],{indicator:"map-value-ind",next:w,offset:k.range[2],onError:i,parentIndent:s.indent,startOnNewline:!d||d.type==="block-scalar"});if(l=b.end,b.found){m&&(w?.type==="block-map"&&!b.hasNewline&&i(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&h.start<b.found.offset-1024&&i(k.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const E=w?n(t,w,b,i):e(t,l,g,null,b,i);t.schema.compat&&Kn(s.indent,w,i),l=E.range[2];const T=new ue(k,E);t.options.keepSourceTokens&&(T.srcToken=p),o.items.push(T)}else{m&&i(k.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),b.comment&&(k.comment?k.comment+=`
`+b.comment:k.comment=b.comment);const E=new ue(k);t.options.keepSourceTokens&&(E.srcToken=p),o.items.push(E)}}return c&&c<l&&i(c,"IMPOSSIBLE","Map comment with trailing content"),o.range=[s.offset,l,c??l],o}function Xr({composeNode:n,composeEmptyNode:e},t,s,i,r){const a=r?.nodeClass??Ve,o=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=s.offset,c=null;for(const{start:p,value:f}of s.items){const d=ot(p,{indicator:"seq-item-ind",next:f,offset:l,onError:i,parentIndent:s.indent,startOnNewline:!0});if(!d.found)if(d.anchor||d.tag||f)f?.type==="block-seq"?i(d.end,"BAD_INDENT","All sequence items must start at the same column"):i(l,"MISSING_CHAR","Sequence item without - indicator");else{c=d.end,d.comment&&(o.comment=d.comment);continue}const g=f?n(t,f,d,i):e(t,d.end,p,null,d,i);t.schema.compat&&Kn(s.indent,f,i),l=g.range[2],o.items.push(g)}return o.range=[s.offset,l,c??l],o}function Pt(n,e,t,s){let i="";if(n){let r=!1,a="";for(const o of n){const{source:l,type:c}=o;switch(c){case"space":r=!0;break;case"comment":{t&&!r&&s(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const p=l.substring(1)||" ";i?i+=a+p:i=p,a="";break}case"newline":i&&(a+=l),r=!0;break;default:s(o,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:i,offset:e}}const In="Block collections are not allowed within flow collections",qn=n=>n&&(n.type==="block-map"||n.type==="block-seq");function Zr({composeNode:n,composeEmptyNode:e},t,s,i,r){const a=s.start.source==="{",o=a?"flow map":"flow sequence",l=r?.nodeClass??(a?fe:Ve),c=new l(t.schema);c.flow=!0;const p=t.atRoot;p&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let f=s.offset+s.start.source.length;for(let m=0;m<s.items.length;++m){const S=s.items[m],{start:k,key:b,sep:E,value:T}=S,I=ot(k,{flow:o,indicator:"explicit-key-ind",next:b??E?.[0],offset:f,onError:i,parentIndent:s.indent,startOnNewline:!1});if(!I.found){if(!I.anchor&&!I.tag&&!E&&!T){m===0&&I.comma?i(I.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):m<s.items.length-1&&i(I.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),I.comment&&(c.comment?c.comment+=`
`+I.comment:c.comment=I.comment),f=I.end;continue}!a&&t.options.strict&&It(b)&&i(b,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(m===0)I.comma&&i(I.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(I.comma||i(I.start,"MISSING_CHAR",`Missing , between ${o} items`),I.comment){let x="";e:for(const A of k)switch(A.type){case"comma":case"space":break;case"comment":x=A.source.substring(1);break e;default:break e}if(x){let A=c.items[c.items.length-1];ee(A)&&(A=A.value??A.key),A.comment?A.comment+=`
`+x:A.comment=x,I.comment=I.comment.substring(x.length+1)}}if(!a&&!E&&!I.found){const x=T?n(t,T,I,i):e(t,I.end,E,null,I,i);c.items.push(x),f=x.range[2],qn(T)&&i(x.range,"BLOCK_IN_FLOW",In)}else{t.atKey=!0;const x=I.end,A=b?n(t,b,I,i):e(t,x,k,null,I,i);qn(b)&&i(A.range,"BLOCK_IN_FLOW",In),t.atKey=!1;const Y=ot(E??[],{flow:o,indicator:"map-value-ind",next:T,offset:A.range[2],onError:i,parentIndent:s.indent,startOnNewline:!1});if(Y.found){if(!a&&!I.found&&t.options.strict){if(E)for(const K of E){if(K===Y.found)break;if(K.type==="newline"){i(K,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}I.start<Y.found.offset-1024&&i(Y.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else T&&("source"in T&&T.source?.[0]===":"?i(T,"MISSING_CHAR",`Missing space after : in ${o}`):i(Y.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const re=T?n(t,T,Y,i):Y.found?e(t,Y.end,E,null,Y,i):null;re?qn(T)&&i(re.range,"BLOCK_IN_FLOW",In):Y.comment&&(A.comment?A.comment+=`
`+Y.comment:A.comment=Y.comment);const oe=new ue(A,re);if(t.options.keepSourceTokens&&(oe.srcToken=S),a){const K=c;li(t,K.items,A)&&i(x,"DUPLICATE_KEY","Map keys must be unique"),K.items.push(oe)}else{const K=new fe(t.schema);K.flow=!0,K.items.push(oe);const pe=(re??A).range;K.range=[A.range[0],pe[1],pe[2]],c.items.push(K)}f=re?re.range[2]:Y.end}}const d=a?"}":"]",[g,...w]=s.end;let h=f;if(g?.source===d)h=g.offset+g.source.length;else{const m=o[0].toUpperCase()+o.substring(1),S=p?`${m} must end with a ${d}`:`${m} in block collection must be sufficiently indented and end with a ${d}`;i(f,p?"MISSING_CHAR":"BAD_INDENT",S),g&&g.source.length!==1&&w.unshift(g)}if(w.length>0){const m=Pt(w,h,t.options.strict,i);m.comment&&(c.comment?c.comment+=`
`+m.comment:c.comment=m.comment),c.range=[s.offset,h,m.offset]}else c.range=[s.offset,h,h];return c}function Cn(n,e,t,s,i,r){const a=t.type==="block-map"?Qr(n,e,t,s,r):t.type==="block-seq"?Xr(n,e,t,s,r):Zr(n,e,t,s,r),o=a.constructor;return i==="!"||i===o.tagName?(a.tag=o.tagName,a):(i&&(a.tag=i),a)}function ea(n,e,t,s,i){const r=s.tag,a=r?e.directives.tagName(r.source,d=>i(r,"TAG_RESOLVE_FAILED",d)):null;if(t.type==="block-seq"){const{anchor:d,newlineAfterProp:g}=s,w=d&&r?d.offset>r.offset?d:r:d??r;w&&(!g||g.offset<w.offset)&&i(w,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!a||a==="!"||a===fe.tagName&&o==="map"||a===Ve.tagName&&o==="seq")return Cn(n,e,t,i,a);let l=e.schema.tags.find(d=>d.tag===a&&d.collection===o);if(!l){const d=e.schema.knownTags[a];if(d?.collection===o)e.schema.tags.push(Object.assign({},d,{default:!1})),l=d;else return d?i(r,"BAD_COLLECTION_TYPE",`${d.tag} used for ${o} collection, but expects ${d.collection??"scalar"}`,!0):i(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),Cn(n,e,t,i,a)}const c=Cn(n,e,t,i,a,l),p=l.resolve?.(c,d=>i(r,"TAG_RESOLVE_FAILED",d),e.options)??c,f=Z(p)?p:new C(p);return f.range=c.range,f.tag=a,l?.format&&(f.format=l.format),f}function ta(n,e,t){const s=e.offset,i=na(e,n.options.strict,t);if(!i)return{value:"",type:null,comment:"",range:[s,s,s]};const r=i.mode===">"?C.BLOCK_FOLDED:C.BLOCK_LITERAL,a=e.source?sa(e.source):[];let o=a.length;for(let h=a.length-1;h>=0;--h){const m=a[h][1];if(m===""||m==="\r")o=h;else break}if(o===0){const h=i.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let m=s+i.length;return e.source&&(m+=e.source.length),{value:h,type:r,comment:i.comment,range:[s,m,m]}}let l=e.indent+i.indent,c=e.offset+i.length,p=0;for(let h=0;h<o;++h){const[m,S]=a[h];if(S===""||S==="\r")i.indent===0&&m.length>l&&(l=m.length);else{m.length<l&&t(c+m.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(l=m.length),p=h,l===0&&!n.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=m.length+S.length+1}for(let h=a.length-1;h>=o;--h)a[h][0].length>l&&(o=h+1);let f="",d="",g=!1;for(let h=0;h<p;++h)f+=a[h][0].slice(l)+`
`;for(let h=p;h<o;++h){let[m,S]=a[h];c+=m.length+S.length+1;const k=S[S.length-1]==="\r";if(k&&(S=S.slice(0,-1)),S&&m.length<l){const E=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;t(c-S.length-(k?2:1),"BAD_INDENT",E),m=""}r===C.BLOCK_LITERAL?(f+=d+m.slice(l)+S,d=`
`):m.length>l||S[0]==="	"?(d===" "?d=`
`:!g&&d===`
`&&(d=`

`),f+=d+m.slice(l)+S,d=`
`,g=!0):S===""?d===`
`?f+=`
`:d=`
`:(f+=d+S,d=" ",g=!1)}switch(i.chomp){case"-":break;case"+":for(let h=o;h<a.length;++h)f+=`
`+a[h][0].slice(l);f[f.length-1]!==`
`&&(f+=`
`);break;default:f+=`
`}const w=s+i.length+e.source.length;return{value:f,type:r,comment:i.comment,range:[s,w,w]}}function na({offset:n,props:e},t,s){if(e[0].type!=="block-scalar-header")return s(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=e[0],r=i[0];let a=0,o="",l=-1;for(let d=1;d<i.length;++d){const g=i[d];if(!o&&(g==="-"||g==="+"))o=g;else{const w=Number(g);!a&&w?a=w:l===-1&&(l=n+d)}}l!==-1&&s(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let c=!1,p="",f=i.length;for(let d=1;d<e.length;++d){const g=e[d];switch(g.type){case"space":c=!0;case"newline":f+=g.source.length;break;case"comment":t&&!c&&s(g,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),f+=g.source.length,p=g.source.substring(1);break;case"error":s(g,"UNEXPECTED_TOKEN",g.message),f+=g.source.length;break;default:{const w=`Unexpected token in block scalar header: ${g.type}`;s(g,"UNEXPECTED_TOKEN",w);const h=g.source;h&&typeof h=="string"&&(f+=h.length)}}}return{mode:r,indent:a,chomp:o,comment:p,length:f}}function sa(n){const e=n.split(/\n( *)/),t=e[0],s=t.match(/^( *)/),r=[s?.[1]?[s[1],t.slice(s[1].length)]:["",t]];for(let a=1;a<e.length;a+=2)r.push([e[a],e[a+1]]);return r}function ia(n,e,t){const{offset:s,type:i,source:r,end:a}=n;let o,l;const c=(d,g,w)=>t(s+d,g,w);switch(i){case"scalar":o=C.PLAIN,l=ra(r,c);break;case"single-quoted-scalar":o=C.QUOTE_SINGLE,l=aa(r,c);break;case"double-quoted-scalar":o=C.QUOTE_DOUBLE,l=oa(r,c);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[s,s+r.length,s+r.length]}}const p=s+r.length,f=Pt(a,p,e,t);return{value:l,type:o,comment:f.comment,range:[s,p,f.offset]}}function ra(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),ci(n)}function aa(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),ci(n.slice(1,-1)).replace(/''/g,"'")}function ci(n){const e=/(.*?)\r?\n/sy;let t=e.exec(n);if(!t)return n;let s,i;try{s=new RegExp("(?<![ 	])[ 	]+$"),i=new RegExp("^[ 	]+|(?<![ 	])[ 	]+$","g")}catch{s=/[ \t]+$/,i=/^[ \t]+|[ \t]+$/g}let r=t[1].replace(s,""),a=" ",o=e.lastIndex;for(;t=e.exec(n);){const c=t[1].replace(i,"");c===""?a===`
`?r+=a:a=`
`:(r+=a+c,a=" "),o=e.lastIndex}const l=/[ \t]*(.*)/sy;return l.lastIndex=o,t=l.exec(n),r+a+(t?.[1]??"")}function oa(n,e){let t="";for(let s=1;s<n.length-1;++s){const i=n[s];if(!(i==="\r"&&n[s+1]===`
`))if(i===`
`){const{fold:r,offset:a}=la(n,s);t+=r,s=a}else if(i==="\\"){let r=n[++s];const a=ca[r];if(a)t+=a;else if(r===`
`)for(r=n[s+1];r===" "||r==="	";)r=n[++s+1];else if(r==="\r"&&n[s+1]===`
`)for(r=n[++s+1];r===" "||r==="	";)r=n[++s+1];else if(r==="x"||r==="u"||r==="U"){const o=r==="x"?2:r==="u"?4:8;t+=ua(n,s+1,o,e),s+=o}else{const o=n.substr(s-1,2);e(s-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(i===" "||i==="	"){const r=s;let a=n[s+1];for(;a===" "||a==="	";)a=n[++s+1];a!==`
`&&!(a==="\r"&&n[s+2]===`
`)&&(t+=s>r?n.slice(r,s+1):i)}else t+=i}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function la(n,e){let t="",s=n[e+1];for(;(s===" "||s==="	"||s===`
`||s==="\r")&&!(s==="\r"&&n[e+2]!==`
`);)s===`
`&&(t+=`
`),e+=1,s=n[e+1];return t||(t=" "),{fold:t,offset:e}}const ca={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function ua(n,e,t,s){const i=n.substr(e,t),a=i.length===t&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;try{return String.fromCodePoint(a)}catch{const o=n.substr(e-2,t+2);return s(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}}function ui(n,e,t,s){const{value:i,type:r,comment:a,range:o}=e.type==="block-scalar"?ta(n,e,s):ia(e,n.options.strict,s),l=t?n.directives.tagName(t.source,f=>s(t,"TAG_RESOLVE_FAILED",f)):null;let c;n.options.stringKeys&&n.atKey?c=n.schema[we]:l?c=fa(n.schema,i,l,t,s):e.type==="scalar"?c=da(n,i,e,s):c=n.schema[we];let p;try{const f=c.resolve(i,d=>s(t??e,"TAG_RESOLVE_FAILED",d),n.options);p=W(f)?f:new C(f)}catch(f){const d=f instanceof Error?f.message:String(f);s(t??e,"TAG_RESOLVE_FAILED",d),p=new C(i)}return p.range=o,p.source=i,r&&(p.type=r),l&&(p.tag=l),c.format&&(p.format=c.format),a&&(p.comment=a),p}function fa(n,e,t,s,i){if(t==="!")return n[we];const r=[];for(const o of n.tags)if(!o.collection&&o.tag===t)if(o.default&&o.test)r.push(o);else return o;for(const o of r)if(o.test?.test(e))return o;const a=n.knownTags[t];return a&&!a.collection?(n.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(i(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[we])}function da({atKey:n,directives:e,schema:t},s,i,r){const a=t.tags.find(o=>(o.default===!0||n&&o.default==="key")&&o.test?.test(s))||t[we];if(t.compat){const o=t.compat.find(l=>l.default&&l.test?.test(s))??t[we];if(a.tag!==o.tag){const l=e.tagString(a.tag),c=e.tagString(o.tag),p=`Value may be parsed as either ${l} or ${c}`;r(i,"TAG_RESOLVE_FAILED",p,!0)}}return a}function ha(n,e,t){if(e){t??(t=e.length);for(let s=t-1;s>=0;--s){let i=e[s];switch(i.type){case"space":case"comment":case"newline":n-=i.source.length;continue}for(i=e[++s];i?.type==="space";)n+=i.source.length,i=e[++s];break}}return n}const pa={composeNode:fi,composeEmptyNode:is};function fi(n,e,t,s){const i=n.atKey,{spaceBefore:r,comment:a,anchor:o,tag:l}=t;let c,p=!0;switch(e.type){case"alias":c=ma(n,e,s),(o||l)&&s(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=ui(n,e,l,s),o&&(c.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{c=ea(pa,n,e,t,s),o&&(c.anchor=o.source.substring(1))}catch(f){const d=f instanceof Error?f.message:String(f);s(e,"RESOURCE_EXHAUSTION",d)}break;default:{const f=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;s(e,"UNEXPECTED_TOKEN",f),p=!1}}return c??(c=is(n,e.offset,void 0,null,t,s)),o&&c.anchor===""&&s(o,"BAD_ALIAS","Anchor cannot be an empty string"),i&&n.options.stringKeys&&(!W(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&s(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(c.spaceBefore=!0),a&&(e.type==="scalar"&&e.source===""?c.comment=a:c.commentBefore=a),n.options.keepSourceTokens&&p&&(c.srcToken=e),c}function is(n,e,t,s,{spaceBefore:i,comment:r,anchor:a,tag:o,end:l},c){const p={type:"scalar",offset:ha(e,t,s),indent:-1,source:""},f=ui(n,p,o,c);return a&&(f.anchor=a.source.substring(1),f.anchor===""&&c(a,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(f.spaceBefore=!0),r&&(f.comment=r,f.range[2]=l),f}function ma({options:n},{offset:e,source:t,end:s},i){const r=new Gn(t.substring(1));r.source===""&&i(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&i(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+t.length,o=Pt(s,a,n.strict,i);return r.range=[e,a,o.offset],o.comment&&(r.comment=o.comment),r}function ga(n,e,{offset:t,start:s,value:i,end:r},a){const o=Object.assign({_directives:e},n),l=new pn(void 0,o),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},p=ot(s,{indicator:"doc-start",next:i??r?.[0],offset:t,onError:a,parentIndent:0,startOnNewline:!0});p.found&&(l.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!p.hasNewline&&a(p.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=i?fi(c,i,p,a):is(c,p.end,s,null,p,a);const f=l.contents.range[2],d=Pt(r,f,!1,a);return d.comment&&(l.comment=d.comment),l.range=[t,f,d.offset],l}function Nt(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];const{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function _s(n){let e="",t=!1,s=!1;for(let i=0;i<n.length;++i){const r=n[i];switch(r[0]){case"#":e+=(e===""?"":s?`

`:`
`)+(r.substring(1)||" "),t=!0,s=!1;break;case"%":n[i+1]?.[0]!=="#"&&(i+=1),t=!1;break;default:t||(s=!0),t=!1}}return{comment:e,afterEmptyLine:s}}class va{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,s,i,r)=>{const a=Nt(t);r?this.warnings.push(new zr(a,s,i)):this.errors.push(new At(a,s,i))},this.directives=new ce({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:s,afterEmptyLine:i}=_s(this.prelude);if(s){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${s}`:s;else if(i||e.directives.docStart||!r)e.commentBefore=s;else if(X(r)&&!r.flow&&r.items.length>0){let a=r.items[0];ee(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${s}
${o}`:s}else{const a=r.commentBefore;r.commentBefore=a?`${s}
${a}`:s}}if(t){for(let r=0;r<this.errors.length;++r)e.errors.push(this.errors[r]);for(let r=0;r<this.warnings.length;++r)e.warnings.push(this.warnings[r])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:_s(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,s=-1){for(const i of e)yield*this.next(i);yield*this.end(t,s)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,s,i)=>{const r=Nt(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",s,i)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=ga(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,s=new At(Nt(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(s):this.doc.errors.push(s);break}case"doc-end":{if(!this.doc){const s="Unexpected doc-end without preceding document";this.errors.push(new At(Nt(e),"UNEXPECTED_TOKEN",s));break}this.doc.directives.docEnd=!0;const t=Pt(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const s=this.doc.comment;this.doc.comment=s?`${s}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new At(Nt(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const s=Object.assign({_directives:this.directives},this.options),i=new pn(void 0,s);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}}const di="\uFEFF",hi="",pi="",Fn="";function ba(n){switch(n){case di:return"byte-order-mark";case hi:return"doc-mode";case pi:return"flow-error-end";case Fn:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function ve(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const ws=new Set("0123456789ABCDEFabcdef"),ya=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Wt=new Set(",[]{}"),_a=new Set(` ,[]{}
\r	`),Mn=n=>!n||_a.has(n);class wa{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let s=this.next??"stream";for(;s&&(t||this.hasChars(1));)s=yield*this.parseNext(s)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let s=0;for(;t===" ";)t=this.buffer[++s+e];if(t==="\r"){const i=this.buffer[s+e+1];if(i===`
`||!i&&!this.atEnd)return e+s+1}return t===`
`||s>=this.indentNext||!t&&!this.atEnd?e+s:-1}if(t==="-"||t==="."){const s=this.buffer.substr(e,3);if((s==="---"||s==="...")&&ve(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===di&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,s=e.indexOf("#");for(;s!==-1;){const r=e[s-1];if(r===" "||r==="	"){t=s-1;break}else s=e.indexOf("#",s+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const i=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield hi,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&ve(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!ve(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&ve(t)){const s=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=s,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Mn),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,s=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=s=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((s!==-1&&s<this.indentNext&&i[0]!=="#"||s===0&&(i.startsWith("---")||i.startsWith("..."))&&ve(i[3]))&&!(s===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield pi,yield*this.parseLineStart();let r=0;for(;i[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),i[r]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Mn),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||ve(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const s=this.buffer.substring(0,t);let i=s.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const r=this.continueScalar(i+1);if(r===-1)break;i=s.indexOf(`
`,r)}i!==-1&&(t=i-(s[i-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>ve(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,s;e:for(let r=this.pos;s=this.buffer[r];++r)switch(s){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const a=this.buffer[r+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!s&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let i=e+1;for(s=this.buffer[i];s===" ";)s=this.buffer[++i];if(s==="	"){for(;s==="	"||s===" "||s==="\r"||s===`
`;)s=this.buffer[++i];e=i-1}else if(!this.blockScalarKeep)do{let r=e-1,a=this.buffer[r];a==="\r"&&(a=this.buffer[--r]);const o=r;for(;a===" ";)a=this.buffer[--r];if(a===`
`&&r>=this.pos&&r+1+t>o)e=r;else break}while(!0);return yield Fn,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,s=this.pos-1,i;for(;i=this.buffer[++s];)if(i===":"){const r=this.buffer[s+1];if(ve(r)||e&&Wt.has(r))break;t=s}else if(ve(i)){let r=this.buffer[s+1];if(i==="\r"&&(r===`
`?(s+=1,i=`
`,r=this.buffer[s+1]):t=s),r==="#"||e&&Wt.has(r))break;if(i===`
`){const a=this.continueScalar(s+1);if(a===-1)break;s=Math.max(s,a-2)}}else{if(e&&Wt.has(i))break;t=s}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield Fn,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const s=this.buffer.slice(this.pos,e);return s?(yield s,this.pos+=s.length,s.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(Mn),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const t=this.flowLevel>0,s=this.charAt(1);if(ve(s)||t&&Wt.has(s)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!ve(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(ya.has(t))t=this.buffer[++e];else if(t==="%"&&ws.has(this.buffer[e+1])&&ws.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,s;do s=this.buffer[++t];while(s===" "||e&&s==="	");const i=t-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=t),i}*pushUntil(e){let t=this.pos,s=this.buffer[t];for(;!e(s);)s=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class ka{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,s=this.lineStarts.length;for(;t<s;){const r=t+s>>1;this.lineStarts[r]<e?t=r+1:s=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const i=this.lineStarts[t-1];return{line:t,col:e-i+1}}}}function Me(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function ks(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function mi(n){switch(n?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Yt(n){switch(n.type){case"document":return n.start;case"block-map":{const e=n.items[n.items.length-1];return e.sep??e.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function ze(n){if(n.length===0)return[];let e=n.length;e:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;n[++e]?.type==="space";);return n.splice(e,n.length)}function sn(n,e){if(e.length<1e5)Array.prototype.push.apply(n,e);else for(let t=0;t<e.length;++t)n.push(e[t])}function Ss(n){if(n.start.type==="flow-seq-start")for(const e of n.items)e.sep&&!e.value&&!Me(e.start,"explicit-key-ind")&&!Me(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,mi(e.value)?e.value.end?sn(e.value.end,e.sep):e.value.end=e.sep:sn(e.start,e.sep),delete e.sep)}class Sa{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new wa,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const s of this.lexer.lex(e,t))yield*this.next(s);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=ba(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const s=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:s,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&e?.type!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const s=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in s?s.indent:0:t.type==="flow-collection"&&s.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Ss(t),s.type){case"document":s.value=t;break;case"block-scalar":s.props.push(t);break;case"block-map":{const i=s.items[s.items.length-1];if(i.value){s.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=t;else{Object.assign(i,{key:t,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=s.items[s.items.length-1];i.value?s.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{const i=s.items[s.items.length-1];!i||i.value?s.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((s.type==="document"||s.type==="block-map"||s.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&ks(i.start)===-1&&(t.indent===0||i.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(s.type==="document"?s.end=i.start:s.items.push({start:i.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{ks(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=Yt(this.peek(2)),s=ze(t);let i;e.end?(i=e.end,i.push(this.sourceToken),delete e.end):i=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:s,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0;(Array.isArray(s)?s[s.length-1]:void 0)?.type==="comment"?s?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2]?.value?.end;if(Array.isArray(i)){sn(i,t.start),i.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,i=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(i&&t.sep&&!t.value){const a=[];for(let o=0;o<t.sep.length;++o){const l=t.sep[o];switch(l.type){case"newline":a.push(o);break;case"space":break;case"comment":l.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(r=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":i||t.value?(r.push(this.sourceToken),e.items.push({start:r}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):i||t.value?(r.push(this.sourceToken),e.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Me(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(mi(t.key)&&!Me(t.sep,"newline")){const a=ze(t.start),o=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:o,sep:l}]})}else r.length>0?t.sep=t.sep.concat(r,this.sourceToken):t.sep.push(this.sourceToken);else if(Me(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=ze(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||i?e.items.push({start:r,key:null,sep:[this.sourceToken]}):Me(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);i||t.value?(e.items.push({start:r,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){if(a.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Me(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&e.items.push({start:r});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0;(Array.isArray(s)?s[s.length-1]:void 0)?.type==="comment"?s?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2]?.value?.end;if(Array.isArray(i)){sn(i,t.start),i.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Me(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let s;do yield*this.pop(),s=this.peek(1);while(s?.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const s=this.startBlockValue(e);s?this.stack.push(s):(yield*this.pop(),yield*this.step())}else{const s=this.peek(2);if(s.type==="block-map"&&(this.type==="map-value-ind"&&s.indent===e.indent||this.type==="newline"&&!s.items[s.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&s.type!=="flow-collection"){const i=Yt(s),r=ze(i);Ss(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Yt(e),s=ze(t);return s.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Yt(e),s=ze(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(s=>s.type==="newline"||s.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Na(n){const e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new ka||null,prettyErrors:e}}function Oa(n,e={}){const{lineCounter:t,prettyErrors:s}=Na(e),i=new Sa(t?.addNewLine),r=new va(e);let a=null;for(const o of r.compose(i.parse(n),!0,n.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new At(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return s&&t&&(a.errors.forEach(bs(n,t)),a.warnings.forEach(bs(n,t))),a}function Aa(n,e,t){let s;const i=Oa(n,t);if(!i)return null;if(i.warnings.forEach(r=>xs(i.options.logLevel,r)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:s},t))}const Ea=`# Référentiel — philosophie, terminale générale (BO 2019)
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
`,mn=Aa(Ea),rs=n=>new Set((n??[]).map(e=>e.id_vault).filter(e=>typeof e=="string")),La=rs(mn.notions),Ta=rs(mn.reperes_officiels),Ia=rs(mn.reperes_muglioni);new Map((mn.auteurs??[]).filter(n=>typeof n.id_vault=="string"&&typeof n.periode=="string").map(n=>[n.id_vault,n.periode]));function qa(n,e,t,s){const i=e==="notion"?La:e==="repère"?Ta:null;return i?s==="2019"?i.has(n):t&&!i.has(n):t}const Ca={notion:"Notion",repère:"Repère",concept:"Concept",auteur:"Auteur",courant:"Courant",oeuvre:"Œuvre",texte:"Texte"};class Ma{noeuds;auteurDe=new Map;auteursLies=new Map;vue;constructor(e,t,s="2019"){this.noeuds=new Map([...e].map(a=>[a.id,a])),this.vue=s;const i=new Map,r=(a,o)=>{const l=i.get(a)??new Set;l.add(o),i.set(a,l),this.auteurDe.has(a)||this.auteurDe.set(a,o)};for(const a of t){const o=this.noeuds.get(a.de),l=this.noeuds.get(a.vers);!o||!l||(l.type==="auteur"&&o.type!=="auteur"&&r(o.id,l.id),o.type==="auteur"&&l.type!=="auteur"&&r(l.id,o.id))}for(const[a,o]of i)this.auteursLies.set(a,o.size)}titreDe(e){return e?this.noeuds.get(e)?.titre??null:null}auteurPrincipal(e){return this.titreDe(this.auteurDe.get(e))}nombreAuteurs(e){return this.auteursLies.get(e)??0}}function Ce(n){return n.filter(e=>typeof e=="string"&&e.trim()!=="").join(" · ")}function Ns(n,e){if(n==null&&e==null)return null;const t=r=>r!=null&&r<0?String(-r):r==null?"":String(r),s=(n??0)<0&&(e??0)<0,i=(n??0)<0||(e??0)<0;if(s)return`${t(n)}–${t(e)} av. J.-C.`;if(i){const r=(n??0)<0?`${t(n)} av. J.-C.`:t(n),a=(e??0)<0?`${t(e)} av. J.-C.`:t(e);return`${r}–${a}`}return`${t(n)}–${t(e)}`}const ja=72;function Pa(n,e){if(n.length<=e)return n;const t=n.slice(0,e-1),s=t.lastIndexOf(" ");return`${(s>e*.6?t.slice(0,s):t).trimEnd()}…`}function Ba(n){const e=n.split(/\s[—–-]\s/)[1];return e&&e.replace(/\s*\([^)]*\)\s*$/,"").trim()||null}function gi(n){const e=(n.pages??[]).length>0?`p. ${[...new Set(n.pages)].join("–")}`:n.page_livre!=null?`p. ${n.page_livre}`:null;return Ce([Ts(n.ouvrage),n.categorie_grammaticale,e])}function rt(n,e){const t=Ca[n.type]??n.type,s=qa(n.id,n.type,n.programme??!1,e.vue)?`programme ${e.vue}`:null;switch(n.type){case"auteur":{const i=(n.courants??[])[0]??null;return Ce([i,Ns(n.date_naissance,n.date_mort)])}case"notion":{const i=e.nombreAuteurs(n.id);return Ce([t,s,i>0?`${i} auteurs`:null])}case"repère":{const i=Ia.has(n.id)?"Muglioni":null;return Ce([t,n.famille??s,i])}case"concept":return Ce([e.auteurPrincipal(n.id)??t]);case"courant":return Ce([Ns(n.debut_env,n.fin_env)])||t;case"oeuvre":return Ce([e.auteurPrincipal(n.id),n.date_naissance==null?null:String(n.date_naissance)])||t;case"texte":{const i=e.auteurPrincipal(n.id),r=Ba(n.titre),a=ja-(i?i.length+3:0);return Ce([i,r?Pa(r,Math.max(a,20)):null])||t}default:return t}}var Da=R('<div class="mg-fond svelte-1ukc5tp" role="presentation"><div class="mg-feuille svelte-1ukc5tp" role="dialog" aria-label="Annoter ce passage" tabindex="-1"><p class="mg-extrait svelte-1ukc5tp"> </p> <textarea rows="4" aria-label="Note" placeholder="Ce que ce passage vous fait penser…" class="svelte-1ukc5tp"></textarea> <div class="mg-actions svelte-1ukc5tp"><button class="mg-annuler svelte-1ukc5tp">Annuler</button> <button class="mg-garder svelte-1ukc5tp"> </button></div></div></div>');function Ra(n,e){lt(e,!0);let t=D("");var s=Da(),i=H(s),r=H(i),a=ne(r),o=q(r,2);As(o);var l=q(o,2),c=H(l),p=q(c,2),f=ne(p,!0);ie(d=>{te(a,`« ${e.extrait??""} »`),te(f,d)},[()=>u(t).trim()===""?"Surligner":"Enregistrer"]),G("click",s,function(...d){e.surFermer?.apply(this,d)}),G("click",i,d=>d.stopPropagation()),G("keydown",i,d=>{d.key==="Escape"&&e.surFermer()}),Un(o,()=>u(t),d=>y(t,d)),G("click",c,function(...d){e.surFermer?.apply(this,d)}),G("click",p,()=>e.surEnregistrer(u(t).trim())),j(n,s),ct()}qt(["click","keydown"]);function as(n){return n.replace(/\s+/g," ").trim()}const vi=8;function Os(n){return as(n).length>=vi}function Ka(n,e){if(Fa(n),e.length===0)return 0;const t=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),s=[],i=[];for(let c=t.nextNode();c;c=t.nextNode())s.push(c),i.push(c.data);const r=i.join(""),a=[];let o=0;for(const c of i)a.push(o),o+=c.length;let l=0;for(const c of[...e].sort((p,f)=>f.length-p.length)){const p=as(c);if(p.length<vi)continue;const f=xa(r,p);if(f===-1)continue;const d=$a(s,a,f,f+p.length);if(!d)continue;const g=document.createElement("mark");g.className="marginale";try{g.appendChild(d.extractContents()),d.insertNode(g),l+=1}catch{}}return l}function Fa(n){for(const e of[...n.querySelectorAll("mark.marginale")]){const t=e.parentNode;if(t){for(;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e),t.normalize()}}}function xa(n,e){const t=n.indexOf(e);if(t!==-1)return t;const s=e.split(" ").map(i=>i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("\\s+");return n.search(new RegExp(s))}function $a(n,e,t,s){const i=l=>{for(let c=n.length-1;c>=0;c-=1){const p=e[c],f=n[c];if(!(p===void 0||!f)&&l>=p)return{noeud:f,decalage:l-p}}return null},r=i(t),a=i(Math.max(t,s-1));if(!r||!a)return null;const o=document.createRange();return o.setStart(r.noeud,Math.min(r.decalage,r.noeud.data.length)),o.setEnd(a.noeud,Math.min(a.decalage+1,a.noeud.data.length)),o}var Ua=R('<p class="rs-aide rs-encore svelte-19iqmsz"> </p>'),Ja=R(`<div class="rs-fond svelte-19iqmsz" role="presentation"><div class="rs-feuille svelte-19iqmsz" role="dialog" aria-label="Ce que j’en sais" tabindex="-1"><p class="rs-sur svelte-19iqmsz">Ce que j’en sais</p> <p class="rs-titre svelte-19iqmsz"> </p> <p class="rs-aide svelte-19iqmsz">Trois lignes, de mémoire, sans rouvrir la fiche. Rien n’est corrigé : c’est
      pour vous, et pour mesurer plus tard l’écart avec vos rappels.</p> <textarea rows="5" aria-label="Ce que j’en sais" class="svelte-19iqmsz"></textarea> <div class="rs-actions svelte-19iqmsz"><button class="rs-annuler svelte-19iqmsz">Plus tard</button> <button class="rs-declarer svelte-19iqmsz">Je pense avoir compris</button></div> <!></div></div>`);function Va(n,e){lt(e,!0);let t=je(e,"depart",3,""),s=D(Ae(Es(()=>t())));const i=B(()=>u(s).trim().length>=ls);var r=Ja(),a=H(r),o=q(H(a),2),l=ne(o,!0),c=q(o,4);As(c);var p=q(c,2),f=H(p),d=q(f,2),g=q(p,2);{var w=h=>{var m=Ua(),S=ne(m);ie(k=>te(S,`Encore ${k??""} signes.`),[()=>ls-u(s).trim().length]),j(h,m)};U(g,h=>{u(i)||h(w)})}ie(()=>{te(l,e.titre),d.disabled=!u(i)}),G("click",r,function(...h){e.surFermer?.apply(this,h)}),G("click",a,h=>h.stopPropagation()),G("keydown",a,h=>{h.key==="Escape"&&e.surFermer()}),Un(c,()=>u(s),h=>y(s,h)),G("click",f,function(...h){e.surFermer?.apply(this,h)}),G("click",d,()=>e.surDeclarer(u(s).trim())),j(n,r),ct()}qt(["click","keydown"]);var Ga=R('<button class="fiche-retour svelte-1cgqi8k" aria-label="Revenir">‹</button>'),Ha=R('<button class="fiche-autres svelte-1cgqi8k"> </button>'),Wa=R('<section class="fiche-relation svelte-1cgqi8k"><h3 class="svelte-1cgqi8k"> </h3> <div class="fiche-cartes svelte-1cgqi8k"><!> <!></div></section>'),Ya=R('<p class="fiche-etat svelte-1cgqi8k"><!></p>'),za=R('<button role="tab" class="svelte-1cgqi8k"> </button>'),Qa=R('<div class="fiche-niveaux svelte-1cgqi8k" role="tablist"></div>'),Xa=R('<section class="fiche-relation svelte-1cgqi8k"><h3 class="svelte-1cgqi8k">Prérequis</h3> <div class="fiche-cartes svelte-1cgqi8k"></div></section>'),Za=R('<section class="fiche-relation svelte-1cgqi8k"><h3 class="svelte-1cgqi8k">Dans les dictionnaires</h3> <div class="fiche-cartes svelte-1cgqi8k"></div></section>'),eo=R('<li><button class="svelte-1cgqi8k"> </button></li>'),to=R('<section class="fiche-relation svelte-1cgqi8k"><h3 class="svelte-1cgqi8k">Liens externes</h3> <ul class="fiche-externes svelte-1cgqi8k"></ul></section>'),no=R('<p class="fiche-declare svelte-1cgqi8k"><!> <button class="svelte-1cgqi8k">Revoir ce que j’en savais</button></p>'),so=R('<button class="fiche-etudier svelte-1cgqi8k">Dire ce que j’en sais</button>'),io=R('<p class="fiche-references svelte-1cgqi8k"> </p>'),ro=R('<button class="fiche-annoter svelte-1cgqi8k">Annoter</button>'),ao=R(`<div class="fiche-sortie svelte-1cgqi8k" role="dialog" aria-modal="true" aria-label="Quitter l'application"><p>Ce lien sort de l’application.</p> <p class="fiche-adresse svelte-1cgqi8k"> </p> <button class="fiche-safari svelte-1cgqi8k">Ouvrir dans Safari</button> <button class="fiche-rester svelte-1cgqi8k">Rester ici</button></div>`),oo=R('<div><!> <article class="lecture" lang="fr"><!> <!> <!> <!> <!> <!>  <!> <!> <!> <!> <div class="fiche-fin svelte-1cgqi8k" aria-hidden="true"></div> <section class="fiche-pied svelte-1cgqi8k"><!></section> <!></article> <!> <!> <!> <!> <!> <!></div>');function lo(n,e){lt(e,!0);let t=je(e,"entrees",19,()=>[]),s=je(e,"contexte",3,null),i=je(e,"surOuvrirEntree",3,null),r=je(e,"surRecherche",3,null),a=je(e,"peutRevenir",3,!1),o=D(Ae([])),l=D(null),c=D(null);const p=B(()=>Ri(e.fiche.corps_md??"")),f=B(()=>["Lycée","Prépa","Université"].filter(_=>u(p).has(_)));let d=D(null);const g=B(()=>u(d)&&u(p).has(u(d))?u(p).get(u(d))??"":e.fiche.corps_md??""),w=B(()=>(e.fiche.prerequis??[]).map(_=>e.noeuds.get(_)).filter(_=>_!==void 0)),h=B(()=>{const _=[],v=new Set([e.fiche.id]);for(const P of e.aretes){const Q=P.de===e.fiche.id?P.vers:P.vers===e.fiche.id?P.de:null;if(!Q||v.has(Q))continue;const $=e.noeuds.get(Q);$&&(v.add(Q),_.push($))}const O=[],M=new Set;for(const P of ur){if(P.seulementSur&&!P.seulementSur.includes(e.fiche.type))continue;const Q=_.filter($=>!M.has($.id)&&P.types.includes($.type)).map($=>(M.add($.id),{id:$.id,type:$.type,titre:$.titre,ligne:s()?rt($,s()):null}));Q.length>0&&O.push({id:P.id,titre:P.titre,cartes:Q})}const F=_.filter(P=>!M.has(P.id));if(F.length>0){const P=O.find($=>$.id==="voir-aussi"),Q=F.map($=>({id:$.id,type:$.type,titre:$.titre,ligne:s()?rt($,s()):null}));P?P.cartes.push(...Q):O.push({id:"voir-aussi",titre:"Voir aussi",cartes:Q})}return O}),m=["reperes","auteurs","concepts","textes"],S=B(()=>u(h).filter(_=>m.includes(_.id))),k=B(()=>u(h).filter(_=>!m.includes(_.id))),b=B(()=>e.fiche.questions??[]),E=B(()=>t().map((_,v)=>({e:_,rang:v})).filter(({e:_})=>Xe(_.vedette)===Xe(e.fiche.titre)).slice(0,2));let T=null;function I(_){const v="touches"in _?_.touches[0]:_;if(!v)return null;const O=document.caretRangeFromPoint?.(v.clientX,v.clientY),M=O?.startContainer.textContent??"";if(!M)return null;const F=O?.startOffset??0,P=M.slice(0,F).match(/[\p{L}'’-]+$/u)?.[0]??"",Q=M.slice(F).match(/^[\p{L}'’-]+/u)?.[0]??"",$=(P+Q).trim();return $.length>2?$:null}function x(_){if(!Qt("definition-toucher"))return;const v=I(_);v&&(T=setTimeout(()=>{const O=e.resolveur?.resoudre(v)??null,M=O?e.noeuds.get(O.id):void 0;M&&y(c,{id:M.id,titre:M.titre,type:M.type,phrase:Is(M.corps_md??"")},!0)},450))}function A(){T&&clearTimeout(T),T=null}function Y(_){const v=_.target.closest("a.wikilien");if(!v)return;_.preventDefault();const O=v.dataset.id;O&&e.surOuvrir(O)}let re=D(null),oe=D(Ae([])),K=D(null),pe=D(!1);nt(()=>{const _=e.fiche.id;if(!Qt("marginalia")){y(oe,[],!0);return}qi(_).then(v=>{Es(()=>e.fiche.id)===_&&y(oe,v.map(O=>O.extrait),!0)})}),nt(()=>{const _=u(re),v=u(oe);u(g),_&&Ka(_,v)});function mt(){if(!Qt("marginalia"))return;const _=window.getSelection(),v=_?.toString()??"",O=_&&u(re)&&_.anchorNode?u(re).contains(_.anchorNode):!1;y(pe,O&&Os(v),!0)}function gn(){const _=as(window.getSelection()?.toString()??"");Os(_)&&(y(K,_,!0),y(pe,!1))}async function Bt(_){const v=u(K);y(K,null),v&&(await Ki({fiche:e.fiche.id,extrait:v,note:_,cree:Date.now()}),y(oe,[...u(oe),v],!0),window.getSelection()?.removeAllRanges())}let gt=D(null),Be=D(!1);nt(()=>{const _=u(gt),v=e.fiche.id;if(!_)return;const O=new IntersectionObserver(M=>{M.some(F=>F.isIntersecting)&&_e.marquerVu(v)},{rootMargin:"0px 0px -10% 0px"});return O.observe(_),()=>O.disconnect()});const De=B(()=>_e.etat(e.fiche.id)),vn=B(()=>qs.valeur("etat-consultation")==="affiche"),bn=24,yn=64;let ke=null;function vt(_){const v=_.changedTouches[0];!v||v.clientX>bn||(ke={x:v.clientX,y:v.clientY})}function _n(_){const v=_.changedTouches[0];if(!ke||!v)return;const O=v.clientX-ke.x,M=Math.abs(v.clientY-ke.y);ke=null,O>yn&&M<O&&e.surRetour()}var bt=oo();zt("touchstart",os,vt,void 0,!0),zt("touchend",os,_n),zt("selectionchange",ki,mt);let Dt;var Rt=H(bt);{var Ge=_=>{var v=Ga();G("click",v,function(...O){e.surRetour?.apply(this,O)}),j(_,v)};U(Rt,_=>{a()&&_(Ge)})}var me=q(Rt,2);{const _=(v,O=Si)=>{var M=Wa(),F=H(M),P=ne(F,!0),Q=q(F,2),$=H(Q);qe($,17,()=>u(o).includes(O().id)?O().cartes:O().cartes.slice(0,St),xe=>xe.id,(xe,Ie)=>{En(xe,{get type(){return u(Ie).type},get titre(){return u(Ie).titre},get ligne(){return u(Ie).ligne},surChoix:()=>e.surOuvrir(u(Ie).id)})});var kt=q($,2);{var On=xe=>{var Ie=Ha(),wi=ne(Ie);ie(()=>te(wi,`et ${O().cartes.length-St} autre${O().cartes.length-St>1?"s":""}`)),G("click",Ie,()=>y(o,[...u(o),O().id],!0)),j(xe,Ie)},An=B(()=>O().cartes.length>St&&!u(o).includes(O().id));U(kt,xe=>{u(An)&&xe(On)})}ie(()=>te(P,O().titre)),j(v,M)};var yt=H(me);{let v=B(()=>s()&&rt(e.fiche,s())||null),O=B(()=>e.fiche.statut??null),M=B(()=>e.fiche.programme??!1);Ci(yt,{get type(){return e.fiche.type},get titre(){return e.fiche.titre},get sousTitre(){return u(v)},get statut(){return u(O)},get programme(){return u(M)}})}var Kt=q(yt,2);{var wn=v=>{var O=Ya(),M=H(O);us(M,{get etat(){return u(De)}}),j(v,O)};U(Kt,v=>{u(vn)&&u(De)!=="non-vu"&&v(wn)})}var Ft=q(Kt,2);{var kn=v=>{Di(v,{titre:"Pour orienter la lecture",ton:"accent",get questions(){return u(b)}})};U(Ft,v=>{u(b).length>0&&v(kn)})}var xt=q(Ft,2);{var Sn=v=>{var O=Qa();qe(O,20,()=>["Lycée","Prépa","Université"],M=>M,(M,F)=>{var P=za(),Q=ne(P,!0);ie($=>{$n(P,"aria-selected",u(d)===F),P.disabled=$,te(Q,F)},[()=>!u(f).includes(F)]),G("click",P,()=>y(d,u(d)===F?null:F,!0)),j(M,P)}),j(v,O)};U(xt,v=>{u(f).length>0&&v(Sn)})}var N=q(xt,2);{var L=v=>{var O=Xa(),M=q(H(O),2);qe(M,21,()=>u(w),F=>F.id,(F,P)=>{En(F,{get type(){return u(P).type},get titre(){return u(P).titre},surChoix:()=>e.surOuvrir(u(P).id)})}),j(v,O)};U(N,v=>{u(w).length>0&&v(L)})}var J=q(N,2);Mi(J,()=>ji(u(g),e.resolveur));var le=q(J,2);qe(le,17,()=>u(S),v=>v.id,(v,O)=>{_(v,()=>u(O))});var ge=q(le,2);{var z=v=>{var O=Za(),M=q(H(O),2);qe(M,21,()=>u(E).slice(0,St),({e:F,rang:P})=>P,(F,P)=>{let Q=()=>u(P).e,$=()=>u(P).rang;{let kt=B(()=>Ts(Q().ouvrage)),On=B(()=>gi(Q())),An=B(()=>i()?()=>i()($()):null);En(F,{get type(){return u(kt)},get titre(){return Q().vedette},get ligne(){return u(On)},get surChoix(){return u(An)}})}}),j(v,O)};U(ge,v=>{u(E).length>0&&v(z)})}var ye=q(ge,2);qe(ye,17,()=>u(k),v=>v.id,(v,O)=>{_(v,()=>u(O))});var He=q(ye,2);{var V=v=>{var O=to(),M=q(H(O),2);qe(M,21,()=>e.fiche.liens_externes??[],F=>F.url,(F,P)=>{var Q=eo(),$=H(Q),kt=ne($,!0);ie(()=>te(kt,u(P).site)),G("click",$,()=>y(l,u(P).url,!0)),j(F,Q)}),j(v,O)};U(He,v=>{(e.fiche.liens_externes??[]).length>0&&v(V)})}var ae=q(He,2);cs(ae,v=>y(gt,v),()=>u(gt));var Se=q(ae,2),Re=H(Se);{var Ne=v=>{var O=no(),M=H(O);us(M,{get etat(){return u(De)}});var F=q(M,2);G("click",F,()=>y(Be,!0)),j(v,O)},Te=v=>{var O=so();G("click",O,()=>y(Be,!0)),j(v,O)};U(Re,v=>{u(De)==="compris"||u(De)==="maitrise"?v(Ne):v(Te,-1)})}var _t=q(Se,2);{var wt=v=>{var O=io(),M=ne(O);ie(()=>te(M,`${e.fiche.references_hors_ligne??""} référence${(e.fiche.references_hors_ligne??0)>1?"s":""} dans la bibliothèque`)),j(v,O)};U(_t,v=>{(e.fiche.references_hors_ligne??0)>0&&v(wt)})}cs(me,v=>y(re,v),()=>u(re))}var se=q(me,2);{let _=B(()=>_e.estFavori(e.fiche.id)),v=B(()=>_e.estALire(e.fiche.id));Pi(se,{get favori(){return u(_)},get aLire(){return u(v)},surFavori:()=>_e.basculer("favori",e.fiche),surALire:()=>_e.basculer("aLire",e.fiche),surRecherche:()=>r()?.()})}var Oe=q(se,2);{var We=_=>{{let v=B(()=>_e.restitution(e.fiche.id));Va(_,{get titre(){return e.fiche.titre},get depart(){return u(v)},surDeclarer:O=>{_e.declarerCompris(e.fiche.id,O),y(Be,!1)},surFermer:()=>y(Be,!1)})}};U(Oe,_=>{u(Be)&&_(We)})}var $t=q(Oe,2);{var Nn=_=>{var v=ro();G("click",v,gn),j(_,v)};U($t,_=>{u(pe)&&_(Nn)})}var Ut=q($t,2);{var Ke=_=>{Ra(_,{get extrait(){return u(K)},surEnregistrer:v=>{Bt(v)},surFermer:()=>y(K,null)})};U(Ut,_=>{u(K)&&_(Ke)})}var Jt=q(Ut,2);{var Fe=_=>{hr(_,{get titre(){return u(c).titre},get type(){return u(c).type},get definition(){return u(c).phrase},surOuvrir:()=>{const v=u(c)?.id;y(c,null),v&&e.surOuvrir(v)},surFermer:()=>y(c,null)})};U(Jt,_=>{u(c)&&_(Fe)})}var yi=q(Jt,2);{var _i=_=>{var v=ao(),O=q(H(v),2),M=ne(O,!0),F=q(O,2),P=q(F,2);ie(()=>te(M,u(l))),G("click",F,()=>{u(l)&&pr(u(l))&&gr(u(l)),y(l,null)}),G("click",P,()=>y(l,null)),j(_,v)};U(yi,_=>{u(l)&&_(_i)})}ie(()=>Dt=Bi(bt,1,"fiche-page svelte-1cgqi8k",null,Dt,{"avec-retour":a()})),G("click",me,Y),G("keydown",me,_=>{_.key==="Enter"&&Y(_)}),G("touchstart",me,x),G("touchend",me,A),G("touchmove",me,A),j(n,bt),ct()}qt(["click","keydown","touchstart","touchend","touchmove"]);var co=R('<li><button class="svelte-aqngz4"> </button></li>'),uo=R('<ul class="fa-chemin svelte-aqngz4"></ul>'),fo=R('<div class="fa-zone svelte-aqngz4"><!> <button class="fa-pastille svelte-aqngz4"> </button></div>');function ho(n,e){lt(e,!0);let t=D(!1);var s=Ls(),i=Qe(s);{var r=a=>{var o=fo(),l=H(o);{var c=d=>{var g=uo();qe(g,23,()=>e.chemin,(w,h)=>w.id+h,(w,h,m)=>{var S=co(),k=H(S),b=ne(k,!0);ie(()=>{k.disabled=u(m)===e.chemin.length-1,te(b,u(h).titre)}),G("click",k,()=>{e.surAller(u(m)),y(t,!1)}),j(w,S)}),j(d,g)};U(l,d=>{u(t)&&d(c)})}var p=q(l,2),f=ne(p);ie(()=>{$n(p,"aria-expanded",u(t)),te(f,`${e.chemin.length??""} fiches`)}),G("click",p,()=>y(t,!u(t))),j(a,o)};U(i,a=>{e.chemin.length>1&&a(r)})}j(n,s),ct()}qt(["click"]);const xn=Ae({prete:!1});function po(n){n.waiting&&navigator.serviceWorker.controller&&(xn.prete=!0),n.addEventListener("updatefound",()=>{const e=n.installing;e&&e.addEventListener("statechange",()=>{e.state==="installed"&&navigator.serviceWorker.controller&&(xn.prete=!0)})})}async function mo(){if(!("serviceWorker"in navigator))return;const n="/philo/";try{const e=await navigator.serviceWorker.register(`${n}sw.js`,{scope:n,type:"classic"});po(e),await e.update()}catch{}}var jn=R("<!> <!>",1),go=R('<div class="attente svelte-1n46o8q"><p class="svelte-1n46o8q"> </p> <p class="detail svelte-1n46o8q"> </p></div>'),vo=R('<p class="detail mono svelte-1n46o8q"> </p>'),bo=R('<p class="svelte-1n46o8q">Ouverture du contenu…</p> <!>',1),yo=R('<p class="svelte-1n46o8q">Déchiffrement…</p>'),_o=R(`<p class="svelte-1n46o8q">Aucun contenu.</p> <p class="detail svelte-1n46o8q">Le contenu n'a pas encore été publié, ou cet appareil n'a jamais été en ligne.</p>`,1),wo=R(`<p class="detail svelte-1n46o8q">Mise à jour prête — elle s'appliquera au prochain lancement.</p>`),ko=R('<div class="attente svelte-1n46o8q"><!> <!></div>');function So(n,e){lt(e,!0);let t=D(Ae(Ni()?"chargement":"installation")),s=D(null),i=D(null),r=D(null),a=D(!1),o=D(Ae(new Map)),l=D(Ae([])),c=D(Ae([])),p=D(null),f=D(null),d=D(null),g=null,w=D(null),h=D(Ae([])),m=D(null),S=D(!1),k=D("wiki"),b=D("accueil"),E=D(null),T=D("accueil"),I=D("2019");nt(()=>{Wi(qs.valeurs)});const x=Hi("/philo/");nt(()=>{u(t)==="chargement"&&Y()});function A(){y(t,"chargement")}async function Y(){const N=await Yi(x,J=>y(i,J,!0));if(y(i,null),!N){y(t,"vide");return}y(s,N,!0);const L=await zi();if(L&&Qi(L.sel,L.iterations,N)){await re(L.cle);return}L&&await fs(),y(t,"verrouille")}async function re(N){if(u(s)){y(t,"ouverture"),y(a,!1),g=N;try{const L=JSON.parse(await Ge(u(s).index,N));if(u(s).entrees){const z=JSON.parse(await Ge(u(s).entrees,N));y(c,z.entrees,!0)}const J=L.blocs.find(z=>z.type==="graphe");if(!J)throw new Error("Graphe absent du contenu.");const le=JSON.parse(await Ge(J.id,N));y(o,new Map(le.noeuds.map(z=>[z.id,z])),!0),y(l,le.aretes??[],!0),y(w,xi(le),!0),y(r,{noeuds:le.noeuds.length,entrees:u(c).length,blocs:u(s).blocs.length},!0);const ge=[...le.noeuds.map(z=>({id:z.id,type:z.type,titre:z.titre,alias:(z.aliases??[]).join(" "),en:(z.en??[]).map(ye=>ye.term).join(" "),definition:Is(z.corps_md??""),corps:(z.corps_md??"").slice(0,4e3)})),...u(c).map((z,ye)=>({id:`entree:${ye}`,type:"entree",titre:z.vedette,alias:"",en:"",definition:z.definition_courte,corps:"",ouvrage:z.ouvrage}))];y(m,$i(ge),!0),await _e.charger(),y(h,[],!0),y(b,"accueil"),y(k,"wiki"),y(t,"ouvert")}catch{await fs(),y(a,!0),y(t,"verrouille")}}}const oe=B(()=>u(o).get(u(h)[u(h).length-1]??"")??null);function K(N){if(N.startsWith("entree:")){ke(Number(N.slice(7)));return}u(o).has(N)&&(vt(),u(b)!=="fiche"&&y(T,u(b),!0),y(k,"wiki"),y(b,"fiche"),y(h,[...u(h),N],!0),_e.voir(N),window.scrollTo(0,0))}const pe=B(()=>new Ma(u(o).values(),u(l),u(I))),mt=N=>{const L=u(o).get(N);return L?rt(L,u(pe)):null},gn=B(()=>{const N={};for(const L of u(o).values())N[L.type]=(N[L.type]??0)+1;return N.entree=u(c).length,N}),Bt=N=>u(o).get(N)?.titre??null,gt=B(()=>{const N=ds.find(L=>L.id===u(E))?.type;return N?[...u(o).values()].filter(L=>L.type===N).map(L=>({id:L.id,titre:L.titre,type:L.type,statut:L.statut,sous:rt(L,u(pe))})).sort((L,J)=>L.titre.localeCompare(J.titre,"fr")):[]}),Be=B(()=>u(k)==="wiki"&&(u(p)!==null||u(b)==="fiche")),De=B(()=>ds.find(N=>N.id===u(E))?.libelle??"");function vn(N){if(N==="dictionnaires"){y(S,!0);return}y(E,N,!0),y(b,"portail"),window.scrollTo(0,0)}function bn(){const N=[...u(o).values()].filter(J=>(J.corps_md??"").length>200),L=N[Math.floor(Math.random()*N.length)];L&&K(L.id)}function yn(N){y(k,N,!0),y(S,!1),N==="wiki"&&(y(b,"accueil"),y(h,[],!0),vt()),window.scrollTo(0,0)}async function ke(N){const L=u(c)[N];if(!(!L||!g)&&(y(p,L,!0),y(d,N,!0),y(f,null),window.scrollTo(0,0),!!L.bloc))try{const J=await Ge(L.bloc,g);u(d)===N&&y(f,Ui(J,L.vedette),!0)}catch{y(f,null)}}function vt(){y(p,null),y(d,null),y(f,null)}const _n=B(()=>u(d)===null?{avant:null,apres:null}:ir(u(c),u(d))),bt=B(()=>{const N=u(p);return N?.renvois?.length?N.renvois.map(L=>{const J=Xe(L),le=u(c).findIndex(ge=>ge.ouvrage===N.ouvrage&&Xe(ge.vedette)===J);return{texte:L,rang:le===-1?null:le}}):[]}),Dt=B(()=>{if(!u(p))return[];const N=Xe(u(p).vedette);return[...u(o).values()].filter(L=>Xe(L.titre)===N).slice(0,3).map(L=>({id:L.id,type:L.type,titre:L.titre,ligne:rt(L,u(pe))}))});function Rt(){u(h).length>1?y(h,u(h).slice(0,-1),!0):(y(h,[],!0),y(b,u(T),!0)),window.scrollTo(0,0)}async function Ge(N,L){let J=await Ji(N);return J||(J=await x.bloc(N),await Vi(N,J)),Gi(J,L)}var me=jn(),yt=Qe(me);{var Kt=N=>{Fi(N,{get index(){return u(m)},sousLigneDe:mt,sousLigneEntreeDe:L=>{const J=u(c)[L];return J?gi(J):null},surOuvrir:L=>{y(S,!1),K(L)},surFermer:()=>y(S,!1)})};U(yt,N=>{u(t)==="ouvert"&&u(S)&&N(Kt)})}var wn=q(yt,2);{var Ft=N=>{var L=jn(),J=Qe(L);{var le=V=>{var ae=Ls(),Se=Qe(ae);{var Re=se=>{er(se,{get entree(){return u(p)},get corps(){return u(f)},get voisines(){return u(_n)},get fichesLiees(){return u(Dt)},get renvoisResolus(){return u(bt)},surOuvrirFiche:K,surOuvrirEntree:Oe=>{ke(Oe)},surRetour:vt,surRecherche:()=>y(S,!0)})},Ne=se=>{var Oe=jn(),We=Qe(Oe);lo(We,{get fiche(){return u(oe)},get noeuds(){return u(o)},get aretes(){return u(l)},get resolveur(){return u(w)},get entrees(){return u(c)},get contexte(){return u(pe)},peutRevenir:!0,surOuvrir:K,surRetour:Rt,surOuvrirEntree:Ke=>{ke(Ke)},surRecherche:()=>y(S,!0)});var $t=q(We,2);{var Nn=Ke=>{{let Jt=B(()=>u(h).map(Fe=>({id:Fe,titre:u(o).get(Fe)?.titre??Fe})));ho(Ke,{get chemin(){return u(Jt)},surAller:Fe=>{y(h,u(h).slice(0,Fe+1),!0),window.scrollTo(0,0)}})}},Ut=B(()=>Qt("fil-ariane"));U($t,Ke=>{u(Ut)&&Ke(Nn)})}j(se,Oe)},Te=se=>{tr(se,{get titre(){return u(De)},get fiches(){return u(gt)},surOuvrir:K,surRetour:()=>y(b,"accueil")})},_t=se=>{nr(se,{titreDe:Bt,sousLigneDe:mt,surOuvrir:K,surRetour:()=>y(b,"accueil")})},wt=se=>{{let Oe=B(()=>u(w)?.manques().size??0);sr(se,{get comptes(){return u(gn)},titreDe:Bt,sousLigneDe:mt,get manques(){return u(Oe)},surPortail:vn,surOuvrir:K,surSauvegardes:()=>y(b,"sauvegardes"),surHasard:bn,surRecherche:()=>y(S,!0),get programme(){return u(I)},set programme(We){y(I,We,!0)}})}};U(Se,se=>{u(p)?se(Re):u(b)==="fiche"&&u(oe)?se(Ne,1):u(b)==="portail"?se(Te,2):u(b)==="sauvegardes"?se(_t,3):se(wt,-1)})}j(V,ae)},ge=V=>{Xi(V,{get contenu(){return u(r)}})},z=V=>{var ae=go(),Se=H(ae),Re=ne(Se,!0),Ne=q(Se,2),Te=ne(Ne,!0);ie(()=>{te(Re,u(k)==="etude"?"Étude":"Textes"),te(Te,u(k)==="etude"?"Exercices, révision espacée et couverture : étape 5.":"Textes intégraux et cours convertis : étape 5.")}),j(V,ae)};U(J,V=>{u(k)==="wiki"?V(le):u(k)==="reglages"?V(ge,1):V(z,-1)})}var ye=q(J,2);{var He=V=>{Zi(V,{get actif(){return u(k)},surChoix:yn})};U(ye,V=>{u(Be)||V(He)})}j(N,L)},kn=N=>{Oi(N,{surTolerance:A})},xt=N=>{{let L=B(Ai);cr(N,{get manifeste(){return u(s)},get refus(){return u(a)},surOuverture:re,get memorisable(){return u(L)}})}},Sn=N=>{var L=ko(),J=H(L);{var le=V=>{var ae=bo(),Se=q(Qe(ae),2);{var Re=Ne=>{var Te=vo(),_t=ne(Te);ie(wt=>te(_t,`${u(i).charges??""} / ${u(i).total??""} blocs — ${wt??""} Mo`),[()=>(u(i).octets/1048576).toFixed(1)]),j(Ne,Te)};U(Se,Ne=>{u(i)&&Ne(Re)})}j(V,ae)},ge=V=>{var ae=yo();j(V,ae)},z=V=>{var ae=_o();j(V,ae)};U(J,V=>{u(t)==="chargement"?V(le):u(t)==="ouverture"?V(ge,1):u(t)==="vide"&&V(z,2)})}var ye=q(J,2);{var He=V=>{var ae=wo();j(V,ae)};U(ye,V=>{xn.prete&&V(He)})}j(N,L)};U(wn,N=>{u(t)==="ouvert"?N(Ft):u(t)==="installation"?N(kn,1):u(t)==="verrouille"&&u(s)?N(xt,2):N(Sn,-1)})}j(n,me),ct()}const bi=document.getElementById("app");if(!bi)throw new Error("Élément #app introuvable.");Ei(So,{target:bi});mo();
