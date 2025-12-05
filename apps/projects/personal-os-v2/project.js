const PROJECT_ID = "personal-os-v2";
const ACE_URL = "../../../public/ace.json";

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text || "";
}

function fillList(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = "";
  (items || []).forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    el.appendChild(li);
  });
}

function fillTags(containerId, tags) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = "";
  (tags || []).forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag-chip";
    span.textContent = t;
    el.appendChild(span);
  });
}

function fillProgress(value) {
  const progress = Math.max(0, Math.min(100, Number(value || 0)));
  const fill = document.getElementById("progress-fill");
  const label = document.getElementById("progress-value");
  if (fill) fill.style.width = `${progress}%`;
  if (label) label.textContent = `${progress}%`;
}

function bindTabs() {
  const tabs = document.querySelectorAll(".ace-tab");
  const sections = document.querySelectorAll(".ace-section");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => t.classList.remove("active"));
      sections.forEach((sec) => sec.classList.remove("active"));

      tab.classList.add("active");
      const section = document.getElementById(`section-${target}`);
      if (section) section.classList.add("active");
    });
  });
}

async function loadProject() {
  bindTabs();

  try {
    const res = await fetch(ACE_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const project = (data.projects || []).find((p) => p.id === PROJECT_ID);

    if (!project) {
      console.error("Project not found in ace.json");
      return;
    }

    // Header
    setText("project-title", project.title);
    setText("project-subtitle", "ACE Project Console");
    setText("project-status", project.status || "unknown");
    fillTags("project-tags", project.tags || []);
    fillProgress(project.progress || project.execute?.progress);

    // ALIGN
    const a = project.align || {};
    setText("align-what", a.what || "");
    fillList("align-why", a.why || []);
    fillList("align-who", a.who || []);
    fillList("align-success", a.success || []);

    // CREATE
    const c = project.create || {};
    fillList("create-modules", c.modules || []);
    fillList("create-features", c.features || []);
    fillList("create-architecture", c.architecture || []);

    const p = c.priority || {};
    fillList("priority-must", p.must || []);
    fillList("priority-should", p.should || []);
    fillList("priority-could", p.could || []);
    fillList("priority-wont", p.wont || []);

    // EXECUTE
    const e = project.execute || {};
    fillList("execute-next", e.nextActions || []);
    fillList("execute-roadmap", e.roadmap || []);
    fillList("execute-logs", e.logs || []);
  } catch (err) {
    console.error("Failed to load ACE project data:", err);
  }
}

window.addEventListener("DOMContentLoaded", loadProject);
