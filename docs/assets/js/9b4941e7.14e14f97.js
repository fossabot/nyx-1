"use strict";(self.webpackChunk_nyx_discord_docs=self.webpackChunk_nyx_discord_docs||[]).push([[6548],{4209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=t(7458),a=t(6436),o=t(52),s=t(9262);const l={title:"\ufe0f\ud83d\udd00 Command Resolver"},c=void 0,i={id:"features/commands/command-resolver",title:"\ufe0f\ud83d\udd00 Command Resolver",description:"The CommandResolver is the object responsible for figuring to what command an ApplicationCommandInteraction or an",source:"@site/docs/features/commands/command-resolver.mdx",sourceDirName:"features/commands",slug:"/features/commands/command-resolver",permalink:"/nyx/docs/features/commands/command-resolver",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/commands/command-resolver.mdx",tags:[],version:"current",frontMatter:{title:"\ufe0f\ud83d\udd00 Command Resolver"},sidebar:"nyxSidebar",previous:{title:"\ud83d\udcd4 Command Repository",permalink:"/nyx/docs/features/commands/command-repository"},next:{title:"\ud83d\udc42 Command Subscriptions",permalink:"/nyx/docs/features/commands/command-subscribers"}},u={},d=[{value:"\ud83d\udc77 Creation",id:"-creation",level:2}];function m(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"CommandResolver"})," is the object responsible for figuring to what command an ",(0,r.jsx)(n.code,{children:"ApplicationCommandInteraction"})," or an\n",(0,r.jsx)(n.code,{children:"AutocompleteInteraction"})," is trying to call. It's stored by a ",(0,r.jsx)(n.code,{children:"CommandManager"}),", and you can get it\nvia ",(0,r.jsx)(n.code,{children:"CommandManager#getResolver()"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"danger",children:[(0,r.jsxs)(n.p,{children:["A resolver does not locate the actual command. Instead, it returns a ",(0,r.jsx)(n.code,{children:"CommandReferenceData"})," object that says data about\nthe command to find, like its name and type. The ",(0,r.jsx)(n.code,{children:"CommandRepository"})," can then use this to actually locate the command."]}),(0,r.jsx)(n.p,{children:"This intermediary is needed to avoid the resolver depending on the repository, and thus allowing you to reuse resolvers."})]}),"\n",(0,r.jsx)(n.h2,{id:"-creation",children:"\ud83d\udc77 Creation"}),"\n",(0,r.jsx)(n.p,{children:"You can create a command resolver by either:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Extending ",(0,r.jsx)(n.code,{children:"DefaultCommandResolver"})," from ",(0,r.jsx)(n.code,{children:"@framework"})," (recommended)."]}),"\n",(0,r.jsxs)(n.li,{children:["Implementing the ",(0,r.jsx)(n.code,{children:"CommandResolver"})," interface from ",(0,r.jsx)(n.code,{children:"@core"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(s.Z,{value:"Extending DefaultCommandResolver",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { DefaultCommandResolver } from '@nyx-discord/framework';\n\nclass MyCommandResolver extends DefaultCommandResolver {\n  // ...\n}\n\nconst myResolver = new MyCommandResolver();\n\nconst myBot = Bot.create((bot) => ({\n  commands: DefaultCommandManager.create(bot, client, clientBus, { resolver: myResolver }),\n}));\n"})})}),(0,r.jsx)(s.Z,{value:"Implementing CommandResolver",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { CommandResolver } from '@nyx-discord/core';\n\nclass MyCommandResolver implements CommandResolver {\n  // ...\n}\n\nconst myResolver = new MyCommandResolver();\n\nconst myBot = Bot.create((bot) => ({\n  commands: DefaultCommandManager.create(bot, client, clientBus, { resolver: myResolver }),\n}));\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9262:(e,n,t)=>{t.d(n,{Z:()=>s});t(2983);var r=t(8934);const a={tabItem:"tabItem_rG4d"};var o=t(7458);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},52:(e,n,t)=>{t.d(n,{Z:()=>C});var r=t(2983),a=t(8934),o=t(3743),s=t(3729),l=t(2461),c=t(8239),i=t(7333),u=t(6927);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=m(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[i,d]=f({queryString:t,groupId:a}),[p,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),b=(()=>{const e=i??p;return h({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=t(2034);const b={tabList:"tabList_I6mw",tabItem:"tabItem_Qvbi"};var x=t(7458);function y(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==r&&(i(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=p(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...e,...n}),(0,x.jsx)(g,{...e,...n})]})}function C(e){const n=(0,v.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},6436:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(2983);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);