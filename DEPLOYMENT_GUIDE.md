# 🚀 教學網站部署指南

## 快速部署 - Netlify (推薦新手)

### 步驟 1: 準備檔案
1. 確認`教學網站`資料夾包含所有檔案
2. 檢查`index.html`可正常開啟

### 步驟 2: 部署到Netlify
1. 前往 [netlify.com](https://www.netlify.com)
2. 點擊「Sign up」註冊帳號
3. 選擇「Deploy manually」
4. 將整個`教學網站`資料夾拖拽到頁面中
5. 等待上傳完成，獲得網址

### 步驟 3: 自訂網址 (選填)
1. 在Netlify控制台點擊「Domain settings」
2. 點擊「Change site name」
3. 輸入想要的名稱，如：`esl-teaching-guide`
4. 新網址：`https://esl-teaching-guide.netlify.app`

## GitHub Pages 部署

### 步驟 1: 上傳到GitHub
```bash
# 在教學網站資料夾中執行
git init
git add .
git commit -m "Initial teaching website"
git remote add origin https://github.com/username/esl-teaching-guide.git
git push -u origin main
```

### 步驟 2: 啟用GitHub Pages
1. 進入GitHub倉庫設定
2. 找到「Pages」設定
3. 選擇「Deploy from a branch」
4. 選擇「main branch」
5. 點擊「Save」

## 本地測試

### 使用Python簡易伺服器
```bash
# 在教學網站資料夾中執行
python -m http.server 8000
# 或 Python 2
python -m SimpleHTTPServer 8000

# 瀏覽器開啟: http://localhost:8000
```

### 使用Node.js live-server
```bash
# 安裝
npm install -g live-server

# 在教學網站資料夾中執行
live-server
```

## 部署後檢查清單

- [ ] 所有頁面可正常載入
- [ ] 導航連結正常運作
- [ ] 圖片佔位符互動正常
- [ ] 手機版顯示正確
- [ ] 所有CSS和JS載入正常

## 網址分享

部署完成後，您可以：
1. 分享網址給同事使用
2. 製作QR Code方便手機存取
3. 加入書籤便於日後修改

## 更新網站內容

### Netlify更新
1. 修改本地檔案
2. 重新拖拽整個資料夾到Netlify
3. 自動覆蓋舊版本

### GitHub Pages更新
```bash
# 修改檔案後
git add .
git commit -m "Update content"
git push
# 自動更新線上版本
```

## 故障排除

### 頁面顯示404錯誤
- 檢查檔案名稱大小寫
- 確認所有連結路徑正確
- 檢查index.html是否在根目錄

### CSS/JS載入失敗
- 檢查檔案路徑是否正確
- 確認assets資料夾結構完整
- 查看瀏覽器開發者工具的錯誤訊息

### 手機版顯示異常
- 確認meta viewport標籤存在
- 檢查CSS媒體查詢
- 測試不同裝置尺寸

---

**建議**: 首次部署建議使用Netlify，操作最簡單且功能完整！