"use strict";(self.webpackChunkreact_nodegui=self.webpackChunkreact_nodegui||[]).push([[6059],{3418:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>h,toc:()=>a});var i=s(4848),n=s(8453);const r={},o=void 0,h={id:"api/README",title:"README",description:"@nodegui/react-nodegui v0.14.0 \u2022 Docs",source:"@site/docs/api/README.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},a=[{value:"How does it look?",id:"how-does-it-look",level:2},{value:"Features",id:"features",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Docs for contributing",id:"docs-for-contributing",level:2},{value:"Building",id:"building",level:2},{value:"Using custom Qt",id:"using-custom-qt",level:2},{value:"Updating docs",id:"updating-docs",level:2},{value:"Funding",id:"funding",level:2},{value:"Special Thanks",id:"special-thanks",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"License",id:"license",level:2},{value:"Maintainers \u2728",id:"maintainers-",level:2},{value:"Contributors \u2728",id:"contributors-",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",del:"del",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"@nodegui/react-nodegui v0.14.0"})," \u2022 ",(0,i.jsx)(t.a,{href:"/docs/api/globals",children:(0,i.jsx)(t.strong,{children:"Docs"})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h1,{id:"react-nodegui",children:"React NodeGui"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.del,{children:"\u26a0\ufe0f React NodeGui is no longer maintained. Please fork it to continue development \u26a0\ufe0f"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://spectrum.chat/nodegui",children:(0,i.jsx)(t.img,{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the NodeGUI community on Spectrum"})}),"\n",(0,i.jsx)(t.a,{href:"#contributors",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square",alt:"All Contributors"})})]}),"\n",(0,i.jsxs)(t.p,{children:["Build ",(0,i.jsx)(t.strong,{children:"performant"}),", ",(0,i.jsx)(t.strong,{children:"native"})," and ",(0,i.jsx)(t.strong,{children:"cross-platform"})," desktop applications with React.\ud83d\ude80"]}),"\n",(0,i.jsxs)(t.p,{children:["React NodeGUI is powered by ",(0,i.jsx)(t.strong,{children:"React"})," \u269b\ufe0f and ",(0,i.jsx)(t.strong,{children:"Qt5"})," \ud83d\udc9a which makes it CPU and memory efficient as compared to other chromium based solutions like electron. React NodeGUI is essentially a React renderer for ",(0,i.jsx)(t.a,{href:"https://github.com/nodegui/nodegui",children:"NodeGUI"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Visit: ",(0,i.jsx)(t.a,{href:"https://react.nodegui.org",children:"https://react.nodegui.org"})," for docs."]}),"\n",(0,i.jsx)("img",{alt:"logo",src:"https://github.com/nodegui/nodegui/raw/master/extras/logo/nodegui.png",height:"200"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"This project is in active development. It should be okay for smaller projects but anything complex - electron is the way to go for now. \ud83d\udea7"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-does-it-look",children:"How does it look?"}),"\n",(0,i.jsxs)("div",{style:"display:inline; margin: 0 auto;",children:[(0,i.jsx)("img",{alt:"demo_linux",src:"https://github.com/nodegui/examples/raw/master/react-nodegui/calculator/calculator_linux.png",height:"280"}),(0,i.jsx)("img",{alt:"demo_win",src:"https://github.com/nodegui/examples/raw/master/react-nodegui/calculator/calculator_win.jpg",height:"280"}),(0,i.jsx)("img",{alt:"demo_mac",src:"https://github.com/nodegui/examples/raw/master/react-nodegui/calculator/calculator_mac.png",height:"280"})]}),"\n",(0,i.jsxs)("div",{style:"display:inline; margin: 0 auto;",children:[(0,i.jsx)("img",{alt:"kitchen",src:"https://github.com/nodegui/nodegui/raw/master/extras/assets/kitchen.png",height:"280"}),(0,i.jsx)("img",{alt:"demo_mac",src:"https://github.com/nodegui/examples/raw/master/react-nodegui/weather-app-widget/weather_widget_mac.png",height:"280"}),(0,i.jsx)("img",{alt:"demo_win",src:"https://github.com/nodegui/examples/raw/master/react-nodegui/image-view/image_view_win.jpg",height:"280"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"More screenshots?"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/nodegui/examples/",children:"See examples"})}),"\n",(0,i.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\ud83e\uddec Cross platform. Should work on major Linux flavours, Windows and MacOS"}),"\n",(0,i.jsx)(t.li,{children:"\ud83d\udcc9 Low CPU and memory footprint. Current CPU stays at 0% on idle and memory usage is under 20mb for a hello world program."}),"\n",(0,i.jsx)(t.li,{children:"\ud83d\udc85 Styling with CSS (includes actual cascading). Also has full support for Flexbox layout (thanks to Yoga)."}),"\n",(0,i.jsx)(t.li,{children:"\u2705 Complete Nodejs api support (Currently runs on Node v12.x - and is easily upgradable). Hence has access to all nodejs compatible npm modules."}),"\n",(0,i.jsx)(t.li,{children:"\ud83c\udfaa Native widget event listener support. supports all event available from Qt / NodeJs."}),"\n",(0,i.jsx)(t.li,{children:"\ud83d\udcb8 Can be used for Commercial applications."}),"\n",(0,i.jsx)(t.li,{children:"\ud83d\udd75\ufe0f\u200d\u2642\ufe0f Good Devtools support (supports react-devtools, node debugger)."}),"\n",(0,i.jsx)(t.li,{children:"\ud83d\udcda Good documentation and website."}),"\n",(0,i.jsx)(t.li,{children:"\ud83e\uddd9\u200d\u2642\ufe0f Good documentation for contributors."}),"\n",(0,i.jsx)(t.li,{children:"\ud83e\uddb9\ud83c\udffb\u200d\u2640\ufe0f Good support for dark mode (Thanks to QT)."}),"\n",(0,i.jsx)(t.li,{children:"\ud83c\udfc5First class Typescript support. (Works on regular JS projects too \ud83d\ude09)."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Check out ",(0,i.jsx)(t.a,{href:"https://github.com/nodegui/react-nodegui-starter",children:"react-nodegui-starter"})," to get up and running with your own React NodeGUI app!"]}),"\n",(0,i.jsxs)(t.li,{children:["Read through the ",(0,i.jsx)(t.a,{href:"https://react.nodegui.org",children:"docs"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Community Guides"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://gregbenner.life/node-gui-react-component-by-component/",children:"https://gregbenner.life/node-gui-react-component-by-component/"})," - An awesome intro to all base components in react nodegui"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://blog.logrocket.com/electron-alternatives-exploring-nodegui-and-react-nodegui/",children:"https://blog.logrocket.com/electron-alternatives-exploring-nodegui-and-react-nodegui/"})," - Electron alternatives: Exploring NodeGUI and React NodeGUI by ",(0,i.jsx)(t.a,{href:"https://blog.logrocket.com/author/siegfriedgrimbeek/",children:"Siegfried Grimbeek"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Talks/Podcasts"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=8jH5gaEEDv4",children:"NodeGui and React NodeGui at KarmaJS Nov 2019 meetup: https://www.youtube.com/watch?v=8jH5gaEEDv4"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)("audio",{"data-theme":"night","data-src":"https://changelog.com/jsparty/96/embed",src:"https://cdn.changelog.com/uploads/jsparty/96/js-party-96.mp3",preload:"none",class:"changelog-episode",controls:!0}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("a",{href:"https://changelog.com/jsparty/96",children:"JS Party 96: Performant Node desktop apps with NodeGUI"})," \u2013 Listen on ",(0,i.jsx)("a",{href:"https://changelog.com/",children:"Changelog.com"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"docs-for-contributing",children:"Docs for contributing"}),"\n",(0,i.jsx)(t.p,{children:"Looking to contribute? If you wish to implement a new widget/add more features and need help understanding the codebase. You can start here:"}),"\n",(0,i.jsx)(t.p,{children:"Contributing developer docs link:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/nodegui/nodegui/tree/master/website/docs/development",children:"https://github.com/nodegui/nodegui/tree/master/website/docs/development"})}),"\n",(0,i.jsxs)(t.p,{children:["Please read: ",(0,i.jsx)(t.a,{href:"https://github.com/nodegui/.github/blob/master/CONTRIBUTING.md",children:"https://github.com/nodegui/.github/blob/master/CONTRIBUTING.md"})]}),"\n",(0,i.jsx)(t.h2,{id:"building",children:"Building"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"npm run build"})}),"\n",(0,i.jsx)(t.h2,{id:"using-custom-qt",children:"Using custom Qt"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"QT_INSTALL_DIR=/path/to/qt npm install"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"npm run build"})}),"\n",(0,i.jsx)(t.h2,{id:"updating-docs",children:"Updating docs"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"npm run docs"})}),"\n",(0,i.jsx)(t.p,{children:"then followed by:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"cd website &&  GIT_USER=<your_git_username> yarn deploy"})}),"\n",(0,i.jsx)(t.h2,{id:"funding",children:"Funding"}),"\n",(0,i.jsx)(t.p,{children:"React NodeGUI is an open source project and requires your support. If you like this project, please consider supporting my work by clicking on the sponsor button on this Github repo or via Ko-Fi. Alternatively, Issues on React NodeGui can be funded by anyone via Issuehunt and the amount will be distributed to respective contributors."}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)("a",{href:"https://ko-fi.com/E1E510AV9",target:"_blank",children:(0,i.jsx)("img",{height:"36",style:"border:0px;height:36px;",src:"https://az743702.vo.msecnd.net/cdn/kofi4.png?v=2",border:"0",alt:"Buy Me a Coffee at ko-fi.com"})})," \xa0 \xa0"]}),(0,i.jsx)("a",{href:"https://issuehunt.io/r/nodegui/react-nodegui",children:(0,i.jsx)("img",{alt:"issuehunt",src:"https://github.com/BoostIO/issuehunt-materials/raw/master/v1/issuehunt-button-v1.svg?sanitize=true",height:"36px"})})]}),"\n",(0,i.jsx)(t.h2,{id:"special-thanks",children:"Special Thanks"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/nodegui/nodegui/blob/master/extras/legal/logo/thanks.md",children:"Logo: Thanks to Vishwas Shetty from the Noun Project."})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/nodegui/.github/blob/master/CODE_OF_CONDUCT.md",children:"https://github.com/nodegui/.github/blob/master/CODE_OF_CONDUCT.md"})}),"\n",(0,i.jsx)(t.h2,{id:"license",children:"License"}),"\n",(0,i.jsx)(t.p,{children:"MIT"}),"\n",(0,i.jsx)(t.h2,{id:"maintainers-",children:"Maintainers \u2728"}),"\n",(0,i.jsx)(t.p,{children:"People maintaining this project."}),"\n",(0,i.jsx)("table",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("td",{align:"center",children:(0,i.jsxs)("a",{href:"https://blog.atulr.com",children:[(0,i.jsx)("img",{src:"https://avatars2.githubusercontent.com/u/4029423?v=4",width:"100px;",alt:"Atul R"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Atul R"})})]})})})}),"\n",(0,i.jsx)(t.h2,{id:"contributors-",children:"Contributors \u2728"}),"\n",(0,i.jsxs)(t.p,{children:["Thanks goes to these wonderful people (",(0,i.jsx)(t.a,{href:"https://allcontributors.org/docs/en/emoji-key",children:"emoji key"}),"):"]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"http://rahulgaba.com",children:[(0,i.jsx)("img",{src:"https://avatars3.githubusercontent.com/u/7898942?v=4?s=100",width:"100px;",alt:"Rahul Gaba"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Rahul Gaba"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=rgabs",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://github.com/kakulgupta",children:[(0,i.jsx)("img",{src:"https://avatars3.githubusercontent.com/u/10727047?v=4?s=100",width:"100px;",alt:"Kakul Gupta"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Kakul Gupta"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=kakulgupta",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://github.com/Nicify",children:[(0,i.jsx)("img",{src:"https://avatars3.githubusercontent.com/u/24217275?v=4?s=100",width:"100px;",alt:"Eva1ent"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Eva1ent"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=Nicify",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://github.com/slidinghotdog",children:[(0,i.jsx)("img",{src:"https://avatars3.githubusercontent.com/u/33790211?v=4?s=100",width:"100px;",alt:"slidinghotdog"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"slidinghotdog"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=slidinghotdog",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://www.linkedin.com/in/roysommer/",children:[(0,i.jsx)("img",{src:"https://avatars2.githubusercontent.com/u/6681893?v=4?s=100",width:"100px;",alt:"Roy Sommer"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Roy Sommer"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=illBeRoy",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://github.com/nateshmbhat",children:[(0,i.jsx)("img",{src:"https://avatars1.githubusercontent.com/u/23279926?v=4?s=100",width:"100px;",alt:"Natesh M Bhat"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Natesh M Bhat"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=nateshmbhat",title:"Documentation",children:"\ud83d\udcd6"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://www.greatapes.fi",children:[(0,i.jsx)("img",{src:"https://avatars3.githubusercontent.com/u/3404389?v=4?s=100",width:"100px;",alt:"Mikko Sairio"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Mikko Sairio"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=msairio",title:"Code",children:"\ud83d\udcbb"})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://github.com/shubhamzanwar",children:[(0,i.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/15626155?v=4?s=100",width:"100px;",alt:"Shubham Zanwar"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Shubham Zanwar"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=shubhamzanwar",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://matrunchyk.com",children:[(0,i.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/2089828?v=4?s=100",width:"100px;",alt:"Serhii Matrunchyk"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Serhii Matrunchyk"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=matrunchyk",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://github.com/Solant",children:[(0,i.jsx)("img",{src:"https://avatars2.githubusercontent.com/u/5971578?v=4?s=100",width:"100px;",alt:"Solant"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Solant"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=Solant",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://cbp.io",children:[(0,i.jsx)("img",{src:"https://avatars1.githubusercontent.com/u/995050?v=4?s=100",width:"100px;",alt:"Christian Petersen"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Christian Petersen"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=fnky",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://github.com/agg23",children:[(0,i.jsx)("img",{src:"https://avatars1.githubusercontent.com/u/238679?v=4?s=100",width:"100px;",alt:"Adam Gastineau"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Adam Gastineau"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=agg23",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://github.com/gluaxspeed",children:[(0,i.jsx)("img",{src:"https://avatars2.githubusercontent.com/u/16431709?v=4?s=100",width:"100px;",alt:"gluaxspeed"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"gluaxspeed"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=gluaxspeed",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"http://chrisshepherd.me",children:[(0,i.jsx)("img",{src:"https://avatars1.githubusercontent.com/u/1379888?v=4?s=100",width:"100px;",alt:"Chris Shepherd"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Chris Shepherd"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=sheepsteak",title:"Code",children:"\ud83d\udcbb"})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://github.com/MistahMojo",children:[(0,i.jsx)("img",{src:"https://avatars1.githubusercontent.com/u/51117537?v=4?s=100",width:"100px;",alt:"Jak"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Jak"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=MistahMojo",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://gregbenner.life",children:[(0,i.jsx)("img",{src:"https://avatars3.githubusercontent.com/u/1177690?v=4?s=100",width:"100px;",alt:"Greg B"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Greg B"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=gregbenner",title:"Documentation",children:"\ud83d\udcd6"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"http://eeems.website",children:[(0,i.jsx)("img",{src:"https://avatars1.githubusercontent.com/u/1176979?v=4?s=100",width:"100px;",alt:"Nathaniel van Diepen"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"Nathaniel van Diepen"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=Eeems",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"http://N/A",children:[(0,i.jsx)("img",{src:"https://avatars.githubusercontent.com/u/61944859?v=4?s=100",width:"100px;",alt:"KR Tirtho"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"KR Tirtho"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=KRTirtho",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"http://thelmgn.com",children:[(0,i.jsx)("img",{src:"https://avatars.githubusercontent.com/u/12257112?v=4?s=100",width:"100px;",alt:"theLMGN"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"theLMGN"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=theLMGN",title:"Code",children:"\ud83d\udcbb"})]}),(0,i.jsxs)("td",{align:"center",children:[(0,i.jsxs)("a",{href:"https://github.com/KaMeHb-UA",children:[(0,i.jsx)("img",{src:"https://avatars.githubusercontent.com/u/20382677?v=4?s=100",width:"100px;",alt:"KaMeHb-UA"}),(0,i.jsx)("br",{}),(0,i.jsx)("sub",{children:(0,i.jsx)("b",{children:"KaMeHb-UA"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/nodegui/react-nodegui/commits?author=KaMeHb-UA",title:"Code",children:"\ud83d\udcbb"})]})]})]}),(0,i.jsx)("tfoot",{})]}),"\n",(0,i.jsxs)(t.p,{children:["This project follows the ",(0,i.jsx)(t.a,{href:"https://github.com/all-contributors/all-contributors",children:"all-contributors"})," specification. Contributions of any kind welcome!"]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>h});var i=s(6540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);