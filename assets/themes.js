// assets/themes.js
console.log('themes loaded');

window.KR_THEMES = {
  1: [
    { name: "Aqua Spring", vars: { "--bg":"#fbfcff","--ink":"#15202b","--muted":"#52606d","--panel":"#ffffff","--card":"#ffffff","--line":"#e8eef6","--accent":"#4fb6c6","--accent2":"#a6d86a","--accent3":"#ffd8a8" } },
    { name: "Lavender Dawn", vars: { "--bg":"#fcfbff","--ink":"#1b1630","--muted":"#5f5a77","--panel":"#ffffff","--card":"#ffffff","--line":"#ece8f7","--accent":"#7b6cff","--accent2":"#ff9fd3","--accent3":"#ffe7a3" } },
    { name: "Sand & Sage", vars: { "--bg":"#fffdf7","--ink":"#1b2430","--muted":"#5f6b63","--panel":"#ffffff","--card":"#ffffff","--line":"#efe7da","--accent":"#cfa77b","--accent2":"#7cc4a5","--accent3":"#ffd2a6" } },
    { name: "Nordic Sky", vars: { "--bg":"#f7fbff","--ink":"#0f1e2b","--muted":"#4c6376","--panel":"#ffffff","--card":"#ffffff","--line":"#e2edf7","--accent":"#3f8efc","--accent2":"#7be0ff","--accent3":"#c7ffb6" } },
    { name: "Bloom Coral", vars: { "--bg":"#fff9fb","--ink":"#2b1520","--muted":"#7a4f5f","--panel":"#ffffff","--card":"#ffffff","--line":"#f1e2ea","--accent":"#ff6b9b","--accent2":"#ffb86b","--accent3":"#b8f2e6" } }
  ],

  2: [
    { name: "Paper Mint", vars: { "--bg":"#f6fff9","--ink":"#122016","--muted":"#516a5a","--panel":"#ffffff","--card":"#ffffff","--line":"#dbefe3","--accent":"#2fbf71","--accent2":"#6ad6ff","--accent3":"#ffe08a" } },
    { name: "Terracotta Calm", vars: { "--bg":"#fff7f1","--ink":"#2b1b13","--muted":"#7a5b4d","--panel":"#ffffff","--card":"#ffffff","--line":"#f0dfd3","--accent":"#c96b4b","--accent2":"#f4b47a","--accent3":"#9fe7d6" } },
    { name: "Indigo Studio", vars: { "--bg":"#f7f7ff","--ink":"#11112b","--muted":"#4b4b7a","--panel":"#ffffff","--card":"#ffffff","--line":"#e6e6fb","--accent":"#4c4cff","--accent2":"#6be4ff","--accent3":"#c9ea88" } },
    { name: "Sunlit Lemon", vars: { "--bg":"#fffef6","--ink":"#202012","--muted":"#6f6a3a","--panel":"#ffffff","--card":"#ffffff","--line":"#f0edc8","--accent":"#c8b82f","--accent2":"#61c0cf","--accent3":"#ffb3c7" } },
    { name: "Rose Quartz", vars: { "--bg":"#fff7fb","--ink":"#2a1120","--muted":"#7a4a61","--panel":"#ffffff","--card":"#ffffff","--line":"#f2ddea","--accent":"#d16ba5","--accent2":"#86a8e7","--accent3":"#ffd166" } }
  ],

  3: [
    { name: "Zen Aqua", vars: { "--bg":"#f7fffe","--ink":"#0f2322","--muted":"#4a6b6a","--panel":"#ffffff","--card":"#ffffff","--line":"#dff3f2","--accent":"#2ec4b6","--accent2":"#a9f0d1","--accent3":"#ffe8a3" } },
    { name: "Forest Light", vars: { "--bg":"#f8fff6","--ink":"#142014","--muted":"#5b735b","--panel":"#ffffff","--card":"#ffffff","--line":"#dfeedd","--accent":"#3a7d44","--accent2":"#a3d977","--accent3":"#ffd6a5" } },
    { name: "Ocean Night (light)", vars: { "--bg":"#f6fbff","--ink":"#071a2b","--muted":"#3f607a","--panel":"#ffffff","--card":"#ffffff","--line":"#d8e8f7","--accent":"#0ea5e9","--accent2":"#22c55e","--accent3":"#a78bfa" } },
    { name: "Soft Peach", vars: { "--bg":"#fff8f3","--ink":"#2b1912","--muted":"#7a5a4d","--panel":"#ffffff","--card":"#ffffff","--line":"#f1e0d7","--accent":"#ff8a65","--accent2":"#ffd54f","--accent3":"#81d4fa" } },
    { name: "Lilac Balance", vars: { "--bg":"#fbf8ff","--ink":"#201634","--muted":"#6a5a86","--panel":"#ffffff","--card":"#ffffff","--line":"#ece2fb","--accent":"#8b5cf6","--accent2":"#ec4899","--accent3":"#22c55e" } }
  ],

  4: [
    { name: "Skyline", vars: { "--bg":"#f7fbff","--ink":"#0e1a28","--muted":"#4f657a","--panel":"#ffffff","--card":"#ffffff","--line":"#dfeaf7","--accent":"#61c0cf","--accent2":"#c7ea86","--accent3":"#ffe3bb" } },
    { name: "Copper & Cream", vars: { "--bg":"#fffaf3","--ink":"#23170f","--muted":"#7a5d4a","--panel":"#ffffff","--card":"#ffffff","--line":"#f0e1d1","--accent":"#c77d4a","--accent2":"#ffd166","--accent3":"#7bdff2" } },
    { name: "Plum Glass", vars: { "--bg":"#fbf7ff","--ink":"#1d1026","--muted":"#6d4a7a","--panel":"#ffffff","--card":"#ffffff","--line":"#efe3fb","--accent":"#a855f7","--accent2":"#fb7185","--accent3":"#60a5fa" } },
    { name: "Teal Ink", vars: { "--bg":"#f6fffd","--ink":"#062521","--muted":"#3f6f67","--panel":"#ffffff","--card":"#ffffff","--line":"#dff4f0","--accent":"#14b8a6","--accent2":"#84cc16","--accent3":"#f59e0b" } },
    { name: "Mono Calm", vars: { "--bg":"#fbfbfb","--ink":"#1b1b1b","--muted":"#5c5c5c","--panel":"#ffffff","--card":"#ffffff","--line":"#e6e6e6","--accent":"#2b6cb0","--accent2":"#38a169","--accent3":"#dd6b20" } }
  ],

  5: [
    { name: "Magazine Mint", vars: { "--bg":"#f4fffb","--ink":"#10231c","--muted":"#4a6a5f","--panel":"#ffffff","--card":"#ffffff","--line":"#d6f2e7","--accent":"#2dd4bf","--accent2":"#a3e635","--accent3":"#ffd166" } },
    { name: "Studio Blue", vars: { "--bg":"#f6f8ff","--ink":"#0f1630","--muted":"#4c5a86","--panel":"#ffffff","--card":"#ffffff","--line":"#dfe4ff","--accent":"#3b82f6","--accent2":"#22c55e","--accent3":"#f472b6" } },
    { name: "Soft Sand", vars: { "--bg":"#fffdf7","--ink":"#1f1b12","--muted":"#6d624c","--panel":"#ffffff","--card":"#ffffff","--line":"#efe6d4","--accent":"#d4a373","--accent2":"#90be6d","--accent3":"#577590" } },
    { name: "Candy Pop", vars: { "--bg":"#fff7ff","--ink":"#2a1232","--muted":"#7a4a86","--panel":"#ffffff","--card":"#ffffff","--line":"#f1ddfb","--accent":"#ec4899","--accent2":"#8b5cf6","--accent3":"#22c55e" } },
    { name: "Citrus", vars: { "--bg":"#fffef2","--ink":"#1f200a","--muted":"#6b6a2c","--panel":"#ffffff","--card":"#ffffff","--line":"#f0efc4","--accent":"#f59e0b","--accent2":"#10b981","--accent3":"#3b82f6" } }
  ],

  6: [
    { name: "Aurora Mint", vars: { "--bg":"#fbfcff","--ink":"#13202a","--muted":"#52606d","--panel":"#ffffff","--card":"#ffffff","--line":"#e8eef6","--accent":"#4fb6c6","--accent2":"#a6d86a","--accent3":"#ffd8a8" } },
    { name: "Rose Dawn", vars: { "--bg":"#fff9fb","--ink":"#201822","--muted":"#6a5a6f","--panel":"#ffffff","--card":"#ffffff","--line":"#f0e5ee","--accent":"#ff6fae","--accent2":"#ffd3a8","--accent3":"#b8f2e6" } },
    { name: "Ocean Sky", vars: { "--bg":"#f6fbff","--ink":"#0f2333","--muted":"#4f6474","--panel":"#ffffff","--card":"#ffffff","--line":"#dfeaf5","--accent":"#2ea7ff","--accent2":"#57d6c4","--accent3":"#ffe29a" } },
    { name: "Lavender Path", vars: { "--bg":"#fbf9ff","--ink":"#1b1630","--muted":"#5b5774","--panel":"#ffffff","--card":"#ffffff","--line":"#ebe7f7","--accent":"#7b6cff","--accent2":"#ff9fd3","--accent3":"#ffe7a3" } },
    { name: "Sand & Sage", vars: { "--bg":"#fffcf6","--ink":"#1f2420","--muted":"#606a61","--panel":"#ffffff","--card":"#ffffff","--line":"#efe6d6","--accent":"#7fb38a","--accent2":"#f0b35e","--accent3":"#a6d1ff" } }
  ]
};