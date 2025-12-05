---
id: personal-os-v2
title: Hades Personal OS v2
type: project
status: active
progress: 10
tags:
  - ACE
  - planning-system
  - supabase
  - github-pages
---

# Hades Personal OS v2 — ACE Project Brief

> 專案名稱：Hades Personal OS v2  
> 建立日期：2025-12  
> 最近更新：2025-12  

---

## A. ALIGN（對齊方向）

### 1. What ─ 我要做的是什麼？（一句話）

打造一套「以 ACE 為核心引擎」的個人計劃系統，能統一管理所有專案、任務、目標，並可長期複製與擴展。

### 2. Why ─ 為什麼要做？（動機 / 痛點）

- 過去的計畫分散、結構不一，容易做一做失去方向。  
- 沒有完整「從想法 → 企劃 → 拆解 → 執行」的標準流程。  
- 希望建立能長期持續、可複製、可自動化的個人 OS。  
- 讓任何計劃都能透過 ACE 模式自然完成，而不是自由發揮到後來卡住。

### 3. For Who ─ 這是給誰用的？

- 給現在的我：建立清晰、可持續、可複製的工作方式。  
- 給未來的我：讓我不論轉職、跳領域，都能用這套 OS 快速進入狀態。  
- 也可能給未來想打造自己系統的人做示範。

### 4. Success Criteria ─ 怎樣算「完成」？

- 所有專案都能自動生成 ACE 企劃書。  
- 我每天會自願打開 OS，並依照它前進。  
- 能管理多個並行專案（>10）而不混亂。  
- ChatGPT 能根據 ACE 狀態給出有效下一步建議。  
- 系統能成為我未來任何計畫的「標準框架」。

---

## C. CREATE（拆解與設計）

### 1. Modules ─ 模組拆解

- **ACE Engine**：計劃標準格式（ALIGN / CREATE / EXECUTE）  
- **Projects 模組**：管理專案、狀態、ACE 三段式  
- **Tasks 模組**：任務、優先順序、進度  
- **Areas 模組**：人生領域分類  
- **Admin（後台）**：新增、編輯、管理資料  
- **Hub（前台展示）**：公開專案或自己查看的主視覺  
- **API / JSON 模組**：`plans.json` / `ace.json`  
- **AI Assistant 模組**：ChatGPT 自動解析 ACE  

### 2. Features ─ 功能列表

- 新增專案時自動生成 ACE 模板  
- 專案可編輯 ALIGN / CREATE / EXECUTE 區塊  
- 進度條（progress）  
- 設定下一步 Next Actions  
- Roadmap 版本規劃（v0.1 / v0.3 / v0.5 / v1.0）  
- 專案與任務的關聯（FK）  
- 公開 API：`ace.json`（給 ChatGPT 讀取）  
- 私有後台（Supabase Auth）  
- 深色 UI（統一 OS 視覺）  

### 3. Architecture ─ 系統架構草圖（文字）

**前端（GitHub Pages）**

- `/hub`：專案總覽  
- `/projects/:id`：ACE 三模組顯示（Align / Create / Execute）  
- `/admin`：後台（CRUD）

**資料庫（Supabase PostgreSQL）**

- `areas`  
- `projects`（含 ACE 欄位）  
- `tasks`  
- `logs`  
- `tags` / `project_tags`

**API / JSON**

- `/public/plans.json` → 概要列表  
- `/public/ace.json` → 完整 ACE 計劃書資料（給 ChatGPT）

### 4. Priority ─ 優先順序（MoSCoW）

**M（Must-have，必做）**

- Projects 模組（含 ACE 三段）  
- Tasks 模組  
- Supabase schema  
- 前端專案頁（ACE 顯示）  
- `plans.json` / `ace.json` API  

**S（Should-have，應做）**

- Hub UI 美化  
- Dark UI 設計  
- Roadmap 介面化  

**C（Could-have，可以做）**

- 匯出 PDF  
- 自動化寫日誌  
- 外部工具整合（例如日曆）

**W（Won’t-do now，暫時不做）**

- 行動裝置 App  
- 插件系統  

---

## E. EXECUTE（執行與推進）

### 1. Progress ─ 目前進度

> 目前進度：**10%**（已定義 ACE 架構與 OS v2 方向）

### 2. Next Actions ─ 下一步行動（最多 3 項）

- [ ] 建立 Supabase `projects` 表格 + ACE 欄位  
- [ ] 在前端 `/projects/:id` 生成 ACE 三區塊畫面  
- [ ] 實作第一版 `ace.json` 匯出（可先手動）  

### 3. Roadmap ─ 版本路線圖

- **v0.1**：ACE 模板完成 + 基本資料表建立  
- **v0.3**：後台 Admin + 專案/任務管理可用  
- **v0.5**：Hub + `plans.json` + `ace.json` 對外穩定  
- **v1.0**：完整 Personal OS v2，日常穩定使用  

### 4. Logs ─ 紀錄 / 里程碑

- 2025-12：確立 ACE 為 OS 核心引擎  
- 2025-12：完成 Personal OS v2 的 ACE 企劃初版  
- 2025-12：決定資料庫使用 Supabase，前端使用 GitHub Pages
