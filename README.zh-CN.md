# vite-react-electron

[![awesome-vite](https://awesome.re/mentioned-badge.svg)](https://github.com/vitejs/awesome-vite)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/vite-react-electron?color=fa6470&style=flat)
![GitHub issues](https://img.shields.io/github/issues/caoxiemeihao/vite-react-electron?color=d8b22d&style=flat)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/vite-react-electron?style=flat)
[![Required Node.JS >= v14.17.0](https://img.shields.io/static/v1?label=node&message=%3E=14.17.0&logo=node.js&color=3f893e&style=flat)](https://nodejs.org/about/releases)

[English](README.md) | 简体中文

## 概述

📦 开箱即用  
🎯 基于 [react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) 模板, 低侵入性  
🌱 结构清晰，可塑性强  
💪 支持在渲染进程中使用 Electron、Node.js API  
🔩 支持 C/C++ 模块  
🖥 很容易实现多窗口  

## 快速开始

```sh
npm create electron-vite
```

![electron-vite-react.gif](https://github.com/electron-vite/electron-vite-react/blob/main/public/electron-vite-react.gif?raw=true)

## 调试

![electron-vite-react-debug.gif](https://github.com/electron-vite/electron-vite-react/blob/main/public/electron-vite-react-debug.gif?raw=true)

## 目录

*🚨 默认情况下, `electron` 文件夹下的文件将会被构建到 `dist/electron`*

```tree
├── electron                  Electron 源码文件夹
|   ├── main                  Main-process 源码
|   ├── preload               Preload-script 源码
|   └── resources             应用打包的资源文件夹
|       ├── icon.icns             应用图标(macOS)
|       ├── icon.ico              应用图标
|       ├── installerIcon.ico     安装图标
|       └── uninstallerIcon.ico   卸载图标
|
├── release                   构建后生成程序目录
|   └──{version}
|       ├── {os}-unpacked     未打包的程序(绿色运行版)
|       └── Setup.{ext}       应用安装文件
|
├── public                    同 Vite 模板的 public
└── src                       渲染进程源码、React代码
```

文件目录，方便我们后续的开发。新建好的目录中，包含如下的结构：
├── build                     用于生产构建的资源
|   ├── icon.icns             应用图标(macOS)
|   ├── icon.ico              应用图标
|   ├── installerIcon.ico     安装图标
|   └── uninstallerIcon.ico   卸载图标
|
├── dist                      构建后，根据 packages 目录生成
|   ├── main
|   ├── preload
|   └── renderer
|
├── release                   在生产构建后生成，包含可执行文件
|   └── {version}
|       ├── win-unpacked      包含未打包的应用程序可执行文件
|       └── Setup.exe         应用程序的安装程序
|
├── scripts
|   ├── build.mjs             项目开发脚本 npm run build
|   └── watch.mjs             项目开发脚本 npm run dev
|
├── packages
|   ├── main                  主进程源码
|   |   └── vite.config.ts
|   ├── preload               预加载脚本源码
|   |   └── vite.config.ts
|   └── renderer              渲染进程源码
|       └── vite.config.ts
复制代码


## 依赖放到 dependencies 还是 devDependencies

&emsp;&emsp;对待 **Electron-Main、Preload-Script** 时 vite 会以 lib 形式打包 commonjs 格式代码；
如果碰 node 环境的包可以直接放到 dependencies 中，vite 会解析为 require('xxxx')；
electron-builder 打包时候会将 dependencies 中的包打包到 app.asar 里面

&emsp;&emsp;对待 **Electron-Renderer** 时 vite 会以 ESM 格式解析代码；
像 vue、react 这种前端用的包可以直接被 vite 构建，所以不需要 vue、react 源码；
现实情况 vue、react 放到 dependencies 或 devDependencies 中都可以被正确构建；
但是放到 dependencies 会被 electron-builder 打包到 app.asar 里面导致包体变大；
所以放到 devDependencies 既能被正确构建还可以减小 app.asar 体积，一举两得
