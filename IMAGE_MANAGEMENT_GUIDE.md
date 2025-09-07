# 圖片管理系統與佔位符使用指南

## 🎯 目的
本文檔說明如何在教學網站中管理和添加圖片，包括如何使用圖片佔位符系統和圖片命名規範。

## 📁 圖片資料夾結構

```
參考資料/教學網站/
├── assets/
│   └── images/
│       ├── frontend/           # 前台操作截圖
│       │   ├── login/         # 登入相關截圖
│       │   ├── homepage/      # 首頁功能截圖
│       │   ├── settings/      # 設定頁面截圖
│       │   ├── reading/       # 點讀功能截圖
│       │   ├── vocabulary/    # 單字卡截圖
│       │   └── games/         # 遊戲功能截圖
│       ├── backend/           # 後台管理截圖
│       │   ├── admin/         # 後台登入截圖
│       │   └── vocabulary-mgmt/ # 單字管理截圖
│       └── common/            # 共用圖片
│           ├── icons/         # 功能圖標
│           ├── logos/         # 標誌圖片
│           └── ui-elements/   # 介面元素
```

## 🖼️ 圖片佔位符系統

### 佔位符HTML結構
```html
<div class="image-placeholder" onclick="showImageUploadInstructions(this)">
    <i class="fas fa-image"></i>
    <p>圖片描述文字</p>
    <small>點擊查看圖片上傳說明</small>
</div>
```

### 如何使用佔位符

1. **點擊佔位符**：點擊任何佔位符區域會彈出上傳指示
2. **查看說明**：彈出的對話框會顯示該圖片的具體要求
3. **準備圖片**：根據說明截圖或準備相應圖片
4. **替換佔位符**：將準備好的圖片替換佔位符

### 圖片替換步驟

1. **準備圖片檔案**
   - 截圖或準備相應的圖片
   - 確保圖片清晰度足夠
   - 建議尺寸：1920x1080 或更高

2. **重新命名檔案**
   - 使用有意義的檔案名稱
   - 格式：`功能-頁面-描述.png`
   - 例如：`login-form-interface.png`

3. **放置圖片檔案**
   - 將圖片放入對應的資料夾
   - 前台截圖放入 `assets/images/frontend/`
   - 後台截圖放入 `assets/images/backend/`

4. **更新HTML**
   - 將佔位符程式碼替換為img標籤
   - 例如：
   ```html
   <img src="../assets/images/frontend/login/login-form-interface.png" 
        alt="登入表單介面截圖" 
        class="guide-image">
   ```

## 📷 截圖指南

### 截圖品質要求

1. **解析度**
   - 最低：1920x1080
   - 建議：2560x1440 或更高
   - 格式：PNG（推薦）或 JPG

2. **截圖內容**
   - 包含完整的功能區域
   - 避免包含個人敏感資訊
   - 確保文字清晰可讀

3. **標註要求**
   - 重要操作步驟用紅色箭頭標示
   - 關鍵按鈕用紅色框線標註
   - 使用黃色高亮顯示重要區域

### 不同類型截圖要求

#### 前台截圖
- **登入頁面**：顯示完整登入表單
- **首頁**：包含主要功能區域
- **設定頁面**：顯示各設定選項
- **功能頁面**：展示具體操作介面

#### 後台截圖
- **管理介面**：顯示完整管理控制台
- **功能表單**：包含所有欄位和按鈕
- **列表頁面**：展示資料管理介面
- **操作對話框**：顯示確認和警告訊息

## 🏷️ 檔案命名規範

### 命名格式
```
[功能區域]-[頁面類型]-[具體描述].[副檔名]
```

### 命名範例

#### 前台截圖命名
- `login-form-interface.png` - 登入表單介面
- `homepage-main-features.png` - 首頁主要功能
- `settings-audio-controls.png` - 設定頁音頻控制
- `reading-word-highlight.png` - 點讀單字高亮
- `vocabulary-card-front.png` - 單字卡正面
- `games-listening-exercise.png` - 聽力遊戲練習

#### 後台截圖命名
- `admin-login-verification.png` - 管理員登入驗證
- `admin-dashboard-overview.png` - 管理後台總覽
- `vocab-mgmt-add-form.png` - 單字管理新增表單
- `vocab-mgmt-edit-interface.png` - 單字編輯介面
- `vocab-mgmt-batch-operations.png` - 批量操作介面

## 🔧 技術要求

### CSS 類別
圖片替換後請使用適當的CSS類別：

```css
.guide-image {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin: 16px 0;
}

.screenshot-large {
    max-width: 100%;
    height: auto;
    border: 2px solid #007acc;
    border-radius: 12px;
    margin: 24px 0;
}

.interface-preview {
    max-width: 800px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: 12px auto;
    display: block;
}
```

### Alt 文字要求
所有圖片必須包含描述性的 alt 文字：
- 準確描述圖片內容
- 包含功能相關關鍵字
- 協助視障用戶理解內容

## 📋 檢查清單

### 添加圖片前
- [ ] 圖片內容符合教學需求
- [ ] 圖片解析度足夠清晰
- [ ] 檔案大小適中（建議 < 2MB）
- [ ] 檔案命名符合規範

### 添加圖片後
- [ ] 圖片正確顯示在網頁中
- [ ] Alt 文字描述適當
- [ ] 圖片載入速度正常
- [ ] 響應式顯示正確

## 💡 最佳實務建議

1. **截圖前準備**
   - 清理桌面和瀏覽器
   - 使用無痕模式避免個人資料
   - 確保系統UI語言設定正確

2. **截圖工具推薦**
   - Windows：內建截圖工具、Snip & Sketch
   - macOS：內建截圖功能（Cmd+Shift+4）
   - 跨平台：Greenshot、Lightshot

3. **圖片優化**
   - 使用TinyPNG壓縮圖片檔案大小
   - 保持清晰度的同時減少檔案大小
   - 考慮使用WebP格式提升載入速度

4. **版本控制**
   - 保留原始高解析度圖片
   - 為不同用途創建不同尺寸版本
   - 定期更新過時的介面截圖

## 🚀 自動化建議

未來可考慮的自動化改進：
1. 圖片自動壓縮腳本
2. 批量重新命名工具
3. 圖片品質檢查腳本
4. 自動產生縮圖功能

---

**注意**：本指南會隨著網站發展持續更新，請定期檢查最新版本。