<script setup lang="ts"></script>

<template>
  <v-app id="prototype">
    <!-- 簡易的な横幅調整のため両サイドに配置 -->
    <v-navigation-drawer location="left" color="grey-lighten-3" />
    <v-navigation-drawer location="right" color="grey-lighten-3" />

    <v-app-bar>
      <v-app-bar-title>
        VueとStorybook、Vitestによるフロントエンド・プロトタイピング
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <!-- メインコンテンツエリアは空にしています -->
      </v-container>
    </v-main>

    <v-footer app border>
      <v-spacer />
      <v-icon icon="mdi-github" start />
      yskmt2018 (Yusuke Muto)
    </v-footer>
  </v-app>
</template>
