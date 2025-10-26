# prototyping-storybook-vitest

Vue と Storybook、Vitest によるフロントエンド・プロトタイピング

## 環境構築

- OS：Windows 11
- IDE：Visual Studio Code

### Node.js のインストール

- [Node.js のウェブサイト](https://nodejs.org/ja) からインストーラをダウンロードしてインストール

```bash
node --version # v25.0.0
npm --version  # 11.6.2
```

### 本プロジェクトのセットアップ

```bash
git clone https://github.com/yskmt2018/prototyping-storybook-vitest.git
cd prototyping-storybook-vitest

npm install # Project Setup
npm run dev # Compile and Hot-Reload for Development
```

### 参考：本プロジェクトの初期構築コマンド

```bash
npm create vue@latest

 Project name (target directory): # prototyping-storybook-vitest
 Select features to include in your project: # TypeScript, Vitest (unit testing), Prettier (code formatting)
 Select experimental features to include in your project: # none
 Skip all example code and start with a blank Vue project? # Yes
```

## リファレンス

- [Vue](https://ja.vuejs.org/)

- [Storybook](https://storybook.js.org/)

- [Vitest](https://vitest.dev/)
