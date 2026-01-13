const videos = [
  { title: "Aprende JavaScript desde cero", channel: "Code Simple", views: "120K vistas" },
  { title: "CSS Grid explicado fácil", channel: "Frontend Pro", views: "89K vistas" },
  { title: "HTML5 en 20 minutos", channel: "Dev Rápido", views: "45K vistas" },
  { title: "Clon frontend paso a paso", channel: "Web Creators", views: "210K vistas" },
  { title: "Diseño responsive moderno", channel: "UI Lab", views: "67K vistas" },
  { title: "JavaScript sin frameworks", channel: "Vanilla JS", views: "95K vistas" }
];

const videoGrid = document.getElementById("videoGrid");
const searchInput = document.getElementById("searchInput");

function renderVideos(list) {
  videoGrid.innerHTML = "";

  list.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";

    card.innerHTML = `
      <div class="thumbnail">▶</div>
      <div class="video-info">
        <div class="video-title">${video.title}</div>
        <div class="video-meta">${video.channel} · ${video.views}</div>
      </div>
    `;

    videoGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(query) ||
    v.channel.toLowerCase().includes(query)
  );
  renderVideos(filtered);
});

renderVideos(videos);
