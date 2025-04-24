const nav = document.createElement("nav");
nav.innerHTML = `
  <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1200px; margin: 0 auto; padding: 1rem;">
    <a href="index.html" style="font-size: 1.25rem; font-weight: bold; color: white; text-decoration: none;">
      Income and Carbon Footprint: Addressing Inequality in Sustainable Development
    </a>
    <ul style="display: flex; list-style: none; gap: 2rem; margin: 0; padding: 0;">
      <li><a href="index.html">Home</a></li>
      <li><a href="graphs.html">Graphs</a></li>
      <li><a href="results.html">Results</a></li>
      <li><a href="conclusion.html">Conclusion</a></li>
    </ul>
  </div>
`;

// Basic nav styling
nav.style.background = "#064e3b"; // dark green
nav.style.width = "100%";
nav.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
nav.style.borderBottom = "1px solid #033c29";

// Style links
nav.querySelectorAll("a").forEach((link) => {
  link.style.color = "white";
  link.style.textDecoration = "none";
  link.style.fontWeight = "600";
  link.style.transition = "color 0.3s ease";
  link.addEventListener("mouseenter", () => (link.style.color = "#a7f3d0")); // soft green hover
  link.addEventListener("mouseleave", () => (link.style.color = "white"));
});

// Insert the navbar into the DOM at the script's position
const scriptTag = document.currentScript;
scriptTag.parentNode.insertBefore(nav, scriptTag);
