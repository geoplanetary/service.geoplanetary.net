---
title: 制限済みサーバー
---
このサービスとの送受信を制限しているサーバーの一覧です。

## ブロックしているサーバー{#blocking}

このサービスは、以下のサーバーとのやり取りを禁止しています。

### 規約・ポリシーに違反した運用{#blocking-for-terms-violation-server}

- `activitypub-troll.cf`  
	<small>脆弱性 "<a target="_blank" href="https://github.com/misskey-dev/misskey/pull/9247">Forkbomb</a>" の悪用, <a target="_blank" href="https://misskey.io/notes/98bjfxxwv1">参考</a></small>
- `bird.makeup`  
	<small>引用の範囲を超える、許可のない著作物の複製</small>
- `misskey-forkbomb.cf`  
	<small>脆弱性 "<a target="_blank" href="https://github.com/misskey-dev/misskey/pull/9247">Forkbomb</a>" の悪用, <a target="_blank" href="https://misskey.io/notes/98bjfxxwv1">参考</a></small>
- `repl.co`  
	<small>脆弱性 "<a target="_blank" href="https://github.com/misskey-dev/misskey/pull/9247">Forkbomb</a>" の悪用, <a target="_blank" href="https://misskey.io/notes/98bjfxxwv1">参考</a></small>

### 規約・ポリシーに違反したモデレーション{#blocking-for-terms-violation-moderation}

- `annihilation.social`
- `ap.jadiunr.net`
- `bae.st`
- `breastmilk.club`
- `cdrom.tokyo`
- `crucible.world`
- `detroitriotcity.com`
- `ezdog.org`
- `freespeechextremist.com`
- `gnusocial.jp`
- `mastodon.green`
- `minidisc.tokyo`
- `mugicha.club`
- `nicecrew.digital`
- `poa.st`
- `poster.place`
- `sneed.social`
- `shitpost.cloud`
- `wolfgirl.bar`

## サイレンスしているサーバー{#silence}

このサービスは、以下のサーバーからのリクエストの受信を制限しています。

<small>現在、リストは空です</small>

## 配送を停止しているサーバー{#deliver-blocking}

このサービスは、以下のサーバーへのアクティビティの送信を停止しています。

### 管理者による要請{#deliver-blocking-for-admin-request}

- Misskey.cf(`misskey.cf`)  
	<small><a target="_blank" href="https://misskey.io/notes/9gcdr0blkh">参考</a></small>

### 規約・ポリシーに違反したモデレーション{#deliver-blocking-for-terms-violation-moderation}

- 9ineverse(`9ineverse.com`)  
	<small>不当な選定基準によるホワイトリスト連合, <a target="_blank" href="https://geoplanetary.net/notes/9qcf3o516e">参考</a></small>

### 応答なし{#deliver-blocking-for-not-responding}

- `calc.menac.at`
- ちこもえ(`chico.moe`)
- にる村α(`m.n1l.dev`)  
	<small>閉鎖済み</small>
- comorichicodon(`mastodon.comorichico.com`)  
	<small>閉鎖済み, <a target="_blank" href="https://geoplanetary.net/notes/9ho0vj6o72">参考</a></small>
- `misskey.atelier-kanata.dev`
- Mastodon Indonesia(`mstdn.id`)
- `shitposter.club`
- のと's private room(`social.nohto.net`)
- `relay.04.si`
- Mastodon | Dev-Wiki Social(`social.dev-wiki.de`)  
	<small>閉鎖済み</small>

### 連合停止{#deliver-blocking-for-federation-suspension}

<small>現在、リストは空です</small>
