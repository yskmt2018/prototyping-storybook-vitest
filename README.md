# prototyping-storybook-vitest

Vue と Storybook、Vitest によるフロントエンド・プロトタイピング

## 環境構築

- OS：Windows 11
- IDE：Visual Studio Code

### Node.js のインストール

- [Node.js のウェブサイト](https://nodejs.org/ja) からインストーラをダウンロードしてインストール

```bash
node --version # v25.2.1
npm --version  # 11.6.4
```

### 本プロジェクトのセットアップ

```bash
git clone https://github.com/yskmt2018/prototyping-storybook-vitest.git
cd prototyping-storybook-vitest

npm install # Project Setup
npm run dev # Compile and Hot-Reload for Development

npm run storybook # To run Storybook
```

### 参考：本プロジェクトの初期構築コマンド

```bash
npm create vue@latest

 Project name (target directory): # prototyping-storybook-vitest
 Select features to include in your project: # TypeScript, Vitest (unit testing), Prettier (code formatting)
 Select experimental features to include in your project: # none
 Skip all example code and start with a blank Vue project? # Yes

# Downgrade Vue DevTools for Storybook compatibility (as of December 2025)
npm install vite-plugin-vue-devtools@7.7.9

# Storybook
npm create storybook@latest

 What configuration should we install? # Minimal: Just the essentials for component development.

# Vuetify
npm install vuetify
npm install --save-dev @mdi/font
```

## リファレンス

- [Vue](https://ja.vuejs.org/)

- [Storybook](https://storybook.js.org/)

- [Vitest](https://vitest.dev/)

- [Vuetify](https://vuetifyjs.com/ja/)
