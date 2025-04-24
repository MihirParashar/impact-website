const nav = document.createElement('nav');
nav.innerHTML = `
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="graphs.html">Graphs</a></li>
    <li><a href="results.html">Results</a></li>
    <li><a href="conclusion.html">Conclusion</a></li>
  </ul>
`;
nav.style.display = 'flex';
nav.style.justifyContent = 'center';
nav.style.gap = '2rem';
nav.querySelectorAll('a').forEach(link => {
  link.style.color = '#38bdf8';
  link.style.textDecoration = 'none';
  link.style.fontWeight = '600';
  link.addEventListener('mouseenter', () => link.style.color = '#0ea5e9');
  link.addEventListener('mouseleave', () => link.style.color = '#38bdf8');
});

// Insert the navbar into the DOM at the script's position
const scriptTag = document.currentScript;
scriptTag.parentNode.insertBefore(nav, scriptTag);
