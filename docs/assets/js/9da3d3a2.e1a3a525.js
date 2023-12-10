"use strict";(self.webpackChunk_nyx_discord_docs=self.webpackChunk_nyx_discord_docs||[]).push([[8260],{4113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var s=t(7458),a=t(6436),i=t(52),o=t(9262);const r={title:"\ud83d\udcc1 Stage Pagination Session"},c=void 0,l={id:"features/sessions/types/stage-pagination-session",title:"\ud83d\udcc1 Stage Pagination Session",description:"It's recommended that you first read the \ufe0f\ud83d\udd22 Pagination Session documentation, since this is an extension of it.",source:"@site/docs/features/sessions/types/stage-pagination-session.mdx",sourceDirName:"features/sessions/types",slug:"/features/sessions/types/stage-pagination-session",permalink:"/nyx/docs/features/sessions/types/stage-pagination-session",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/sessions/types/stage-pagination-session.mdx",tags:[],version:"current",frontMatter:{title:"\ud83d\udcc1 Stage Pagination Session"},sidebar:"nyxSidebar",previous:{title:"\ud83d\udce6 List Pagination Session",permalink:"/nyx/docs/features/sessions/types/list-pagination-session"},next:{title:"\ufe0f\ud83d\udee1\ufe0f Session Interception",permalink:"/nyx/docs/features/sessions/session-interception"}},d={},u=[{value:"\ud83d\udcc1 Stages",id:"-stages",level:2},{value:"\ud83c\udfc6 Session start stages",id:"-session-start-stages",level:3},{value:"\ud83d\udc77 Stage creation",id:"-stage-creation",level:3},{value:"\ud83d\udcac Pagination Custom Ids",id:"-pagination-custom-ids",level:2},{value:"\ud83d\udc77 Session creation",id:"-session-creation",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"Pre-knowledge",type:"tip",children:(0,s.jsxs)(n.p,{children:["It's recommended that you first read the ",(0,s.jsx)(n.a,{href:"./pagination-session",children:"\ufe0f\ud83d\udd22 Pagination Session"})," documentation, since this is an extension of it."]})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"StagePaginationSession"})," is a special type of pagination session made to paginate a list of stages."]}),"\n",(0,s.jsx)(n.h2,{id:"-stages",children:"\ud83d\udcc1 Stages"}),"\n",(0,s.jsxs)(n.p,{children:["A stage is an object inside a ",(0,s.jsx)(n.code,{children:"StagePaginationSession"})," that represents a single page in the pagination. Switching from\none stage to another is the equivalent of switching pages on a pagination component."]}),"\n",(0,s.jsx)(n.p,{children:"A stage can:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Be updated, similar to a ",(0,s.jsx)(n.code,{children:"Session"})," update (see ",(0,s.jsx)(n.a,{href:"./session#-updating",children:"\ud83d\udc64 Session (\ud83d\udcdd Updating)"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Be switched to and reply to the interaction switching to it via ",(0,s.jsx)(n.code,{children:"SessionStage#onSwitch()"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Be left and perform some cleanup logic via ",(0,s.jsx)(n.code,{children:"SessionStage#onLeave()"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Return a result, similar to a ",(0,s.jsx)(n.code,{children:"Session"})," result (see ",(0,s.jsx)(n.a,{href:"./session#-result",children:"\ud83d\udc64 Session (\ud83c\udfc6 Result)"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"-session-start-stages",children:"\ud83c\udfc6 Session start stages"}),"\n",(0,s.jsxs)(n.p,{children:["The first stage on a ",(0,s.jsx)(n.code,{children:"StagePaginationSession"})," is a ",(0,s.jsx)(n.code,{children:"SessionStartStage"}),". It's used to start the session, and behaves\nexactly the same as any session, except it also has a ",(0,s.jsx)(n.code,{children:"SessionStartStage#onStart()"})," method, called when the session\nis started."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"SessionStartStage"})," is necessary because the ",(0,s.jsx)(n.code,{children:"SessionStartInteraction"})," and ",(0,s.jsx)(n.code,{children:"SessionUpdateInteraction"})," types aren't\ncompatible with each other, so a \"normal\" stage can't be used."]})}),"\n",(0,s.jsx)(n.h3,{id:"-stage-creation",children:"\ud83d\udc77 Stage creation"}),"\n",(0,s.jsx)(n.p,{children:"You can create a stage by either:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Extending ",(0,s.jsx)(n.code,{children:"AbstractSessionStage"})," (or ",(0,s.jsx)(n.code,{children:"AbstractSessionStartStage"}),") from ",(0,s.jsx)(n.code,{children:"@framework"})," (recommended)."]}),"\n",(0,s.jsxs)(n.li,{children:["Implementing the ",(0,s.jsx)(n.code,{children:"SessionStage"})," (or ",(0,s.jsx)(n.code,{children:"SessionStartStage"}),") interface from ",(0,s.jsx)(n.code,{children:"@core"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["After creating it, add it to a ",(0,s.jsx)(n.code,{children:"StagePaginationSession"}),"'s class."]}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(o.Z,{value:"Extending AbstractSessionStage",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { AbstractSessionStage } from '@nyx-discord/framework';\n\nclass MyStage extends AbstractSessionStage<void> {\n  public async onSwitch(\n    interaction: SessionUpdateInteraction,\n  ): Promise<boolean> {\n    const row = this.buildDefaultPageRow();\n\n    const buttonId = this.customId.clonePush('button').build();\n    const button = new ButtonBuilder()\n      .setStyle(1)\n      .setLabel('Click me!')\n      .setCustomId(buttonId);\n\n    const buttonRow = new ActionRowBuilder<ButtonBuilder>().addComponents(button);\n\n    await interaction.update({\n      components: [row, buttonRow],\n      content: 'Switched to this stage.',\n    });\n\n    return true;\n  }\n\n  public onLeave(\n    _interaction: SessionUpdateInteraction,\n    nextStage: SessionStage<unknown>,\n    _meta: SessionExecutionMeta\n  ) {\n    this.bot.logger.log('Left MyStage. Went to: ', nextStage);\n  }\n\n  protected async handleButton(\n    interaction: ButtonInteraction,\n  ): Promise<boolean> {\n    await interaction.reply('Clicked!');\n\n    return true;\n  }\n}\n"})})}),(0,s.jsx)(o.Z,{value:"Implementing SessionStage",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { SessionStage } from '@nyx-discord/core';\n\nclass MyStage implements SessionStage<void> {\n  // ...\n}\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"-pagination-custom-ids",children:"\ud83d\udcac Pagination Custom Ids"}),"\n",(0,s.jsxs)(n.p,{children:["The pagination works in a similar way as in the\n",(0,s.jsx)(n.a,{href:"./pagination-session#-pagination-custom-ids",children:"\ud83d\udd22 Pagination Session (\ud83d\udcac Pagination Custom Ids)"}),". In essence:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A customId not referring to a page is handled by ",(0,s.jsx)(n.code,{children:"SessionStage#update()"})," (see ",(0,s.jsx)(n.a,{href:"./session#-updating",children:"\ud83d\udc64 Session [\ud83d\udcdd Updating]"}),") of the current stage."]}),"\n",(0,s.jsxs)(n.li,{children:["A customId referring to a page makes the session switch to that stage, calling ",(0,s.jsx)(n.code,{children:"SessionStage#onSwitch()"}),"\non the new one and ",(0,s.jsx)(n.code,{children:"SessionStage#onLeave()"})," on the old one."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-session-creation",children:"\ud83d\udc77 Session creation"}),"\n",(0,s.jsx)(n.p,{children:"You can create a stage pagination session by either:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Extending ",(0,s.jsx)(n.code,{children:"AbstractStagePaginationSession"})," from ",(0,s.jsx)(n.code,{children:"@framework"})," (recommended)."]}),"\n",(0,s.jsxs)(n.li,{children:["Implementing the ",(0,s.jsx)(n.code,{children:"StagePaginationSession"})," interface from ",(0,s.jsx)(n.code,{children:"@core"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["After creating it, start it via ",(0,s.jsx)(n.code,{children:"SessionManager#start()"}),"."]}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(o.Z,{value:"Extending AbstractStagePaginationSession",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { AbstractStagePaginationSession } from '@nyx-discord/framework';\n\nclass MyStageSession extends AbstractStagePaginationSession {\n  protected readonly stages = [\n    new Stage1(this),\n    new Stage2(this),\n  ] as const;\n}\n\nconst sessionId = 'mySessionId'; // Ideally randomly generated\nconst session = new MyStageSession(bot, sessionId, interaction);\nawait bot.sessions.start(session);\n"})})}),(0,s.jsx)(o.Z,{value:"Implementing StagePaginationSession",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { StagePaginationSession } from '@nyx-discord/core';\n\nclass MyStageSession implements StagePaginationSession {\n  // ...\n}\n\nconst session = new MyStageSession(/** ... */);\nawait bot.sessions.start(session);\n"})})})]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9262:(e,n,t)=>{t.d(n,{Z:()=>o});t(2983);var s=t(8934);const a={tabItem:"tabItem_rG4d"};var i=t(7458);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,o),hidden:t,children:n})}},52:(e,n,t)=>{t.d(n,{Z:()=>y});var s=t(2983),a=t(8934),i=t(3743),o=t(3729),r=t(2461),c=t(8239),l=t(7333),d=t(6927);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[o,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[l,u]=p({queryString:t,groupId:a}),[m,S]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Nk)(t);return[a,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),x=(()=>{const e=l??m;return g({value:e,tabValues:i})?e:null})();(0,r.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),S(e)}),[u,S,i]),tabValues:i}}var S=t(2034);const x={tabList:"tabList_I6mw",tabItem:"tabItem_Qvbi"};var f=t(7458);function b(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=r[t].value;a!==s&&(l(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function y(e){const n=(0,S.Z)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(n))}},6436:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(2983);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);