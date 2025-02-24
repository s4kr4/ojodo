# 往生堂

原神キャラ育成管理ツール(予定)

## 開発環境

```bash
# 開発環境の起動
docker compose up -d

# 開発環境の停止
docker compose down
```

## データベース

```bash
# DBマイグレーション
docker compose exec app npx prisma migrate dev

# シードデータの投入
docker compose exec app npx prisma db seed
```
