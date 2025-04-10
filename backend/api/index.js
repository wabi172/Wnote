import express from "express";
import cors from "cors";
import pool from "pg";
import logger from "morgan";
import patg from "path";
import * as fs from "fs";
import path from 'path'
import createError from 'http-errors'

import { pathToFileURL } from "url";
const app = express();
const port = 3000;

// 設定白名單 不要只寫app.use(cors())
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
const whiteList = frontendUrl.split(",");
app.use(
  cors({
    origin: whiteList,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

//剖析 POST 與 PUT 要求的JSON格式資料
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 在public目錄提供影像、CSS等靜態檔案
app.use(express.static(path.join(process.cwd(), "public")));

// 根路由預設測試畫面
app.get("/", (req, res) => res.send("Express server is running."));

// 載入routes中的各路由檔案，並套用api路由 START
// 目前可以讀取routes資料夾中的所有檔案，最多至其中再一層的資料夾自動套用路由檔案，以下為範例:
//  routes/index.js ==> /api/
//  routes/user.js ==> /api/user
//  routes/user/login.js ==> /api/user/login
const apiPath = "/api"; //預設路由
const routePath = path.join(process.cwd(), "routes");
const filenames = await fs.promises.readdir(routePath);

for (const filename of filenames) {
  // statSync同步取得檔案資訊 判斷是檔案或資料夾
  const stats = fs.statSync(path.join(routePath, filename));

  // 如果是檔案 直接載入並套用路由
  if (stats.isFile()) {
    const item = await import(pathToFileURL(path.join(routePath, filename)));
    const slug = filename.split(".")[0];
    app.use(`${apiPath}/${slug === "index" ? "" : slug}`, item.default);
  }

  // 如果是資料夾則在讀取資料夾內的檔案
  if(stats.isDirectory()){
    const subFilenames = await fs.promises.readdir(
        path.join(routePath,filename)
    )

    //讀取資料夾內的檔案，並以此資料夾名稱為次路由，再載入並套用路由
    for(const subFilename of subFilenames){
        const subStats = fs.statSync(path.join(routePath,filename,subFilename))

        if(subStats.isFile()){
            const item = await import(
                pathToFileURL(path.join(routePath, filename,subFilename))
            )
            const slug = subFilename.split('.')[0]
            app.use(
                `${apiPath}/${filename}/${slug === 'index' ? '' : slug}`, item.default
            )
        }
    }
  }
}

//捕抓404錯誤處理
app.use(function (req, res, next){
    next(createError(404))
})

//錯誤處理函式
app.use(function (err, req, res){
    //set locals, only providing error in develpment
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development'

    //render the error page
    res.status(err.status || 500)
    //更改為錯誤訊息預設為JSON格式
    res.status(500).send({ error: err})
})

app.listen(port, () => {
  console.log(`Server ready on port http://localhost:${port}`);
});

export default app;
