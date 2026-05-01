---
title: このサイトについて
---
<script setup>
import { useData } from 'vitepress';
const { site } = useData();
</script>

<card href="https://github.com/geoplanetary/service.geoplanetary.net">
	<div style="font-size:1.2rem;font-weight:600;">このサイトのソース</div>
</card>

## 著作権

{{ site.themeConfig.copyright }}

## オープンソースライセンス{#lib-license}

このサイトは、次に示すオープンソースライブラリを使用して開発されています。

- [mfm-js](https://www.npmjs.com/package/mfm-js) ([MIT License](https://opensource.org/license/mit))
- [vitepress](https://www.npmjs.com/package/vitepress) ([MIT License](https://opensource.org/license/mit))
- [vue](https://www.npmjs.com/package/vue) ([MIT License](https://opensource.org/license/mit))
