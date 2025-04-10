import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log(allUsers);
  try {
    //連接到資料庫
    await prisma.$connect();

    const allUsers = await prisma.user.findMany();
    console.log('所有使用者:', allUsers);
  } catch (err) {
    console.error('查詢使用者失敗:',err);
  }
}

// 判斷是否為開發環境
export const isDev = process.env.NODE_ENV === "development";

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    //如果是開發環境，顯示錯誤訊息
    if (isDev) console.log(e);
    await prisma.$disconnect();
  });
