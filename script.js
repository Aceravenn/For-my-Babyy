// Yes button navigates to help page
document.getElementById('yesBtn').addEventListener('click', () => {
    window.location.href = 'help.html';
});

// Nothing button runs away from cursor
const nothingBtn = document.getElementById("nothingBtn");
nothingBtn.addEventListener("mouseenter", () => {
  const x = Math.floor(Math.random() * 300) - 150; // -150px to +150px
  const y = Math.floor(Math.random() * 300) - 150;
  nothingBtn.style.transform = `translate(${x}px, ${y}px)`;
});