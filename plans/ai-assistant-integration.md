---
id: ai-assistant-integration
title: AI Assistant Integration
type: project
status: planned
progress: 0
tags:
  - ACE
  - ai-assistant
  - integration
  - chatgpt
---

# AI Assistant Integration — ACE Project Brief

> 專案名稱：AI Assistant Integration  
> 建立日期：2025-12  
> 最近更新：2025-12  

---

## A. ALIGN（對齊方向）

### 1. What ─ 我要做的是什麼？（一句話）

讓 AI 助理（ChatGPT）能穩定讀取與理解 Hades Personal OS v2 的資料，並提供有結構的建議與下一步行動，而不是只能零散對話。

### 2. Why ─ 為什麼要做？（動機 / 痛點）

- 現在 AI 對我的專案理解是「一次性的」，每次都要重複解釋。  
- 想讓 AI 能持續追蹤計劃狀態（ACE）並協助我推進，而不是純聊天。  
- 如果未來轉職或做新專案，希望 AI 能像「熟悉我系統的人類助理」一樣支援。  

### 3. For Who ─ 這是給誰用的？

- 給現在與未來的我：讓 AI 成為我 OS v2 的常駐顧問。  
- 也可以作為未來公開範例，展示「個人 OS x AI 助理整合」的一種做法。

### 4. Success Criteria ─ 怎樣算「完成」？

- AI 能讀取 `plans.json` / `ace.json` 並正確描述專案狀態。  
- 我只要說「目前計劃」或點出某專案，AI 就能接上上下文。  
- 新增專案後，AI 不用重新教學就能理解（因為格式一致）。  
- 能透過 ACE 結構，得到「下一步行動」等實際建議。

---

## C. CREATE（拆解與設計）

### 1. Modules ─ 模組拆解

- **Data Interface 模組**：`plans.json` / `ace.json` 的結構與更新流程。  
- **Prompt & Instruction 模組**：給 AI 的說明格式、系統提示。  
- **Project Selector 模組**：如何指定「我要談哪個專案」。  
- **Safety / Privacy 模組**：哪些資料可以公開，哪些不行。  

### 2. Features ─ 功能列表

- AI 能列出目前所有專案與進度。  
- AI 能根據 ACE 結構，總結某個專案的現況。  
- AI 能根據 `execute.nextActions` 給具體建議或幫忙拆更小步驟。  
- 新增專案後，只要照 ACE 模板填寫，就能被 AI 正確理解。  

### 3. Architecture ─ 架構草圖（文字）

- 資料來源：GitHub Pages 上的 `public/plans.json` 與 `public/ace.json`。  
- 結構：固定欄位（align / create / execute），易於解析。  
- 使用方式：我在對話中提供 URL 或直接貼內容，AI 能根據格式解析。  
- 未來可能擴充：透過 Supabase Edge Functions 提供更動態的 API。  

### 4. Priority ─ 優先順序（MoSCoW）

**M（Must-have，必做）**

- 定義穩定的 `plans.json` / `ace.json` schema。  
- AI 能讀取並理解至少一個專案的完整 ACE。  
- AI 能根據 ACE 給出「下一步行動」建議。

**S（Should-have，應做）**

- 錯誤處理：當資料缺漏時，AI 也能給出合理回應。  
- 提供標準提示（prompt）讓未來的我容易喚起這套模式。  

**C（Could-have，可以做）**

- 自動從 Supabase 產出 `ace.json`。  
- 專案清單與 ACE 狀態的定期總結。  

**W（Won’t-do now，暫時不做）**

- 完整 API 封裝成公開服務。  
- 高度自動化的「AI 自己幫我建新專案」。  

---

## E. EXECUTE（執行與推進）

### 1. Progress ─ 目前進度

> 目前進度：**0%**（尚未開始實作，只完成企劃）

### 2. Next Actions ─ 下一步行動（最多 3 項）

- [ ] 確認並固定 `ace.json` 的欄位名稱與結構。  
- [ ] 在 ChatGPT 內建立一份「使用 OS v2 資料的標準說明稿」。  
- [ ] 測試：讓 AI 讀取 `personal-os-v2` 的 ACE，檢查理解程度。  

### 3. Roadmap ─ 版本路線圖

- **v0.1**：AI 能讀取 1 個專案的 ACE 並正確總結。  
- **v0.3**：AI 能列出所有專案、狀態與進度。  
- **v0.5**：AI 能當作「OS v2 專案顧問」，穩定提供下一步建議。  
- **v1.0**：AI 與 OS v2 完整整合，成為日常運作的一部分。  

### 4. Logs ─ 紀錄 / 里程碑

- 2025-12：決定將「AI 助理整合」獨立成 OS v2 的一個專案。  
