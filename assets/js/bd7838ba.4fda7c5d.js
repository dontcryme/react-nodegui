"use strict";(self.webpackChunkreact_nodegui=self.webpackChunkreact_nodegui||[]).push([[5622],{6954:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>t,metadata:()=>r,toc:()=>u});var o=i(4848),s=i(8453);const t={sidebar_label:"Debugging in VSCode",title:"Debugging in VSCode"},d=void 0,r={id:"guides/debugging-in-vscode",title:"Debugging in VSCode",description:"- Open a NodeGui project in VSCode.",source:"@site/docs/guides/debugging-in-vscode.md",sourceDirName:"guides",slug:"/guides/debugging-in-vscode",permalink:"/docs/guides/debugging-in-vscode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Debugging in VSCode",title:"Debugging in VSCode"},sidebar:"guides",previous:{title:"Debugging",permalink:"/docs/guides/debugging"},next:{title:"Native Node Modules",permalink:"/docs/guides/using-native-node-modules"}},c={},u=[];function g(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Open a NodeGui project in VSCode."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ git clone git@github.com:nodegui/react-nodegui-starter.git\n$ code react-nodegui-starter\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Add a file ",(0,o.jsx)(n.code,{children:".vscode/launch.json"})," with the following configuration:"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Qode Process",\n      "type": "node",\n      "request": "launch",\n      "cwd": "${workspaceRoot}",\n      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/qode",\n      "windows": {\n        "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/qode.exe"\n      },\n      "args": ["./dist/index.js"],\n      "outputCapture": "std"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Tip"}),": You could also configure a preLaunchTask for building typescript before launching the debugger everytime."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Debugging"})}),"\n",(0,o.jsxs)(n.p,{children:["Set some breakpoints in ",(0,o.jsx)(n.code,{children:"index.js"}),", and start debugging in the ",(0,o.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging",children:"Debug View"}),". You should be able to hit the breakpoints."]}),"\n"]}),"\n"]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var o=i(6540);const s={},t=o.createContext(s);function d(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);