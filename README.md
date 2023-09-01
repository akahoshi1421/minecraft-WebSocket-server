# Minecraft-WebSocket-Server

これはMinecraft(統合版)から送られてきたブロックデータとメールアドレスが入っているJSONデータをSTL形式のファイルに変換し、ユーザが指定したメールアドレスにそのデータを飛ばすためのWebSocketサーバです。

JSONデータは送るクライアント側は[こちら](https://github.com/akahoshi1421/minecraft-3D-data-exporter)

## 使い方

1. プロジェクトのclone

```bash
$ git clone https://github.com/akahoshi1421/minecraft-WebSocket-server.git
$ cd minecraft-WebSocket-server
```

2. プロジェクトのビルド

```bash
$ npm i
$ ./build.bat #windows
$ bash build.sh #linux
```

3. .envファイルの記述

```bash
$ type nul > .env #windows
$ touch .env #linux
```

```.env
MAIL_ADDRESS="{{ YOUR_MAIL_ADDRESS }}"
CLIENT_ID="{{ YOUR_CLIENT_ID }}"
CLIENT_SECRET="{{ YOUR_CLIENT_SECRET }}"
REFRESH_TOKEN="{{ YOUR_REFRESH_TOKEN }}"
```

[参考](https://zenn.dev/hisho/scraps/efbcb7cd2f7b82)

4. サーバを走らせる

```bash
$ node server.js
```