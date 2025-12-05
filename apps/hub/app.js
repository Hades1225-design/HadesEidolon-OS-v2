const PLANS_URL = "../../public/plans.json";

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "card";

  const header = document.createElement("div");
  header.className = "card-header";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = project.title || project.id;

  const status = document.createElement("span");
  status.className = "card-status";
  status.textContent = project.status || "unknown";

  header.appendChild(title);
  header.appendChild(status);

  const desc = document.createElement("p");
  desc.className = "card-desc";
  desc.textContent =
    project.description ||
    "ACE-based personal planning project.";

  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";

  const progressFill = document.createElement("div");
  progressFill.className = "progress-fill";
  const progress = Number(project.progress || 0);
  progressFill.style.width = `${Math.max(0, Math.min(100, progress))}%`;

  progressBar.appendChild(progressFill);

  const progressLabel = document.createElement("div");
  progressLabel.className = "progress-label";
  progressLabel.textContent = `Progress: ${progress}%`;

  const tagsWrap = document.createElement("div");
  tagsWrap.className = "tags";

  (project.tags || []).forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "tag";
    chip.textContent = tag;
    tagsWrap.appendChild(chip);
  });

  card.appendChild(header);
  card.appendChild(desc);
  card.appendChild(progressBar);
  card.appendChild(progressLabel);
  card.appendChild(tagsWrap);

  return card;
}

async function loadProjects() {
  const container = document.getElementById("projects-list");
  container.textContent = "Loading projects…";

  try {
    const res = await fetch(PLANS_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const items = data.items || [];

    container.textContent = "";

    if (!items.length) {
      container.textContent = "No projects yet.";
      return;
    }

    items.forEach((project) => {
      const card = createProjectCard(project);
      container.appendChild(card);
    });
  } catch (err) {
    console.error(err);
    container.textContent =
      "Failed to load projects. Check public/plans.json path.";
  }
}

window.addEventListener("DOMContentLoaded", loadProjects);
