# 制限済みサーバー
このサービスとの送受信を制限しているサーバーの一覧です。
- ## ブロックしているサーバー
  このサービスは、以下のサーバーとのやり取りを禁止しています。
- ### 脆弱性を悪用した攻撃を行うサーバー
  以下のサーバーは脆弱性を悪用した攻撃を行うことが確認されています。これらのサーバーからの/へのアクセスを許可することはできません。
	- `activitypub-troll.cf`
	  理由: Forkbomb, [参考](https://misskey.io/notes/98bjfxxwv1)
	- `misskey-forkbomb.cf`
	  理由: Forkbomb, [参考](https://misskey.io/notes/98bjfxxwv1)
	- `repl.co`
	  理由: Forkbomb, [参考](https://misskey.io/notes/98bjfxxwv1)
- ## サイレンスしているサーバー
  このサービスは、以下のサーバーからのリクエストの受信を制限しています。
- ### 差別的なモデレーション
  以下のサーバーは不当な選定基準によるホワイトリスト連合を行っているため、サイレンス処理を行っています。
	- Misskey.design(`misskey.design`)
	  [参考](https://misskey.design/notes/9prwvf7u6d)
	  解除予定: 2024-08-30
	- 9ineverse(`9ineverse.com`)
	  [参考](https://9ineverse.com/notes/9pt9tov37f)
	  解除予定: 2024-08-29
- ## 配送を停止しているサーバー
  このサービスは、以下のサーバーへのアクティビティの送信を停止しています。
- ### 管理者による要請
  以下のサーバーは、そのサーバーの管理者によって配送を停止するよう要請されているため、アクティビティの配送を停止しています。
	- Misskey.cf(`misskey.cf`)
	  [参考](https://misskey.io/notes/9gcdr0blkh)
- ### 差別的なモデレーション
  以下のサーバーは不当な選定基準によるホワイトリスト連合を行っているため、アクティビティの配送を停止しています。
	- Misskey.design(`misskey.design`)
	  [参考](https://misskey.design/notes/9prwvf7u6d)
	  解除予定: 2024-08-30
	- 9ineverse(`9ineverse.com`)
	  [参考](https://9ineverse.com/notes/9qcf3o51m1)
- ### 応答なし
  以下のサーバーは、長期間にわたってサーバーの動作が確認できないことから、アクティビティの配送を停止しています。
	- Mastodon | Dev-Wiki Social(`social.dev-wiki.de`)
	  閉鎖済み
	- Mastodon Indonesia(`mstdn.id`)
	- `relay.04.si`
	- ちこもえ(`chico.moe`)
	- comorichicodon(`mastodon.comorichico.com`)
	  閉鎖済み, [参考](https://geoplanetary.net/notes/9ho0vj6o72)
	- `misskey.atelier-kanata.dev`
- ### 連合停止
  以下のサーバーは、Fediverse上での連合を停止しています。連合が再開されるまでアクティビティの配送を停止します。
	- [:small "現在、リストは空です"]
