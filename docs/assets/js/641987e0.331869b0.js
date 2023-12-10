"use strict";(self.webpackChunk_nyx_discord_docs=self.webpackChunk_nyx_discord_docs||[]).push([[435],{6843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=t(7458),s=t(6436),a=t(52),o=t(9262);const i={title:"\ud83d\udc42 Command Subscriptions"},c=void 0,u={id:"features/commands/command-subscribers",title:"\ud83d\udc42 Command Subscriptions",description:"The CommandSubscriptionsContainer is the object responsible for managing command subscriptions. That is, the subscribers",source:"@site/docs/features/commands/command-subscribers.mdx",sourceDirName:"features/commands",slug:"/features/commands/command-subscribers",permalink:"/nyx/docs/features/commands/command-subscribers",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/commands/command-subscribers.mdx",tags:[],version:"current",frontMatter:{title:"\ud83d\udc42 Command Subscriptions"},sidebar:"nyxSidebar",previous:{title:"\ufe0f\ud83d\udd00 Command Resolver",permalink:"/nyx/docs/features/commands/command-resolver"},next:{title:"\ud83d\udce3 Command Event Bus",permalink:"/nyx/docs/features/commands/command-bus"}},l={},d=[{value:"\ud83d\udc77 Creation",id:"-creation",level:2},{value:"\ud83d\udc42 Replacing command subscribers",id:"-replacing-command-subscribers",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"CommandSubscriptionsContainer"})," is the object responsible for managing command subscriptions. That is, the subscribers\nthat are subscribed to the ",(0,r.jsx)(n.a,{href:"../events/event-manager#-client-event-bus",children:"Client Event Bus"}),", and are listening to\n",(0,r.jsx)(n.code,{children:"interactionCreate"})," events. It's stored by a ",(0,r.jsx)(n.code,{children:"CommandManager"}),", and you can get it via\n",(0,r.jsx)(n.code,{children:"CommandManager#getSubscriptions()"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"With this object you can override the manager's command subscribers, letting you add your own custom logic in runtime."}),"\n",(0,r.jsx)(n.h2,{id:"-creation",children:"\ud83d\udc77 Creation"}),"\n",(0,r.jsx)(n.p,{children:"You can create a command subscriptions container by either:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Extending ",(0,r.jsx)(n.code,{children:"DefaultCommandSubscriptionsContainer"})," from ",(0,r.jsx)(n.code,{children:"@framework"})," (recommended)."]}),"\n",(0,r.jsxs)(n.li,{children:["Implementing the ",(0,r.jsx)(n.code,{children:"CommandSubscriptionsContainer"})," interface from ",(0,r.jsx)(n.code,{children:"@core"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(o.Z,{value:"Extending DefaultCommandSubscriptionsContainer",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { DefaultCommandSubscriptionsContainer } from '@nyx-discord/framework';\n\nclass MyCommandSubscriptionsContainer extends DefaultCommandSubscriptionsContainer {\n  // ...\n}\n\nconst myContainer = new MyCommandSubscriptionsContainer();\n\nconst myBot = Bot.create((bot) => ({\n  commands: DefaultCommandManager.create(bot, client, clientBus, { subscriptionsContainer: myContainer }),\n}));\n"})})}),(0,r.jsx)(o.Z,{value:"Implementing CommandSubscriptionsContainer",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { CommandSubscriptionsContainer } from '@nyx-discord/core';\n\nclass MyCommandSubscriptionsContainer implements CommandSubscriptionsContainer {\n  // ...\n}\n\nconst myContainer = new MyCommandSubscriptionsContainer();\n\nconst myBot = Bot.create((bot) => ({\n  commands: DefaultCommandManager.create(bot, client, clientBus, { subscriptionsContainer: myContainer }),\n}));\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"-replacing-command-subscribers",children:"\ud83d\udc42 Replacing command subscribers"}),"\n",(0,r.jsx)(n.p,{children:"You can use this object to override the manager's command subscribers, letting you add your own custom logic in runtime."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["For more information about creating subscribers, check the ",(0,r.jsx)(n.a,{href:"../events/event-subscriber",children:"\ud83d\udce9 Event Subscribers"})," guide."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { AbstractDJSClientSubscriber } from 'discord.js';\n\nclass MyCommandInteractionSubscriber extends AbstractDJSClientSubscriber<'interactionCreate'> {\n  protected override readonly event = Events.InteractionCreate;\n\n  public async handleEvent(\n    meta: EventDispatchMeta,\n    interaction: Interaction,\n  ): Promise<void> {\n    // Your custom logic.\n  }\n}\n\nconst subscriber = new MyCommandInteractionSubscriber();\nawait bot.commands.getSubscriptions().setInteractionSubscriber(subscriber);\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"danger",children:[(0,r.jsx)(n.p,{children:"This will completely override the default subscriber. If your custom subscriber doesn't perform the logic that it\nshould, your bot could ignore commands completely."}),(0,r.jsxs)(n.p,{children:["You can check the ",(0,r.jsx)(n.code,{children:"DefaultCommandInteractionSubscriber"})," and ",(0,r.jsx)(n.code,{children:"DefaultCommandAutocompleteSubscriber"})," to see how a\ncommand subscriber should work."]})]})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9262:(e,n,t)=>{t.d(n,{Z:()=>o});t(2983);var r=t(8934);const s={tabItem:"tabItem_rG4d"};var a=t(7458);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:t,children:n})}},52:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(2983),s=t(8934),a=t(3743),o=t(3729),i=t(2461),c=t(8239),u=t(7333),l=t(6927);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=m(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,d]=h({queryString:t,groupId:s}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,l.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),v=(()=>{const e=u??p;return b({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(2034);const v={tabList:"tabList_I6mw",tabItem:"tabItem_Qvbi"};var g=t(7458);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),l=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==r&&(u(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:l,...a,className:(0,s.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function C(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(C,{...e,...n})]})}function j(e){const n=(0,f.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},6436:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(2983);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);