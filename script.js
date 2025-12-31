// Yes button navigates to help page
document.getElementById('yesBtn').addEventListener('click', () => {
    window.location.href = 'help.html';
});

// Nothing button runs away (desktop + mobile reliably)
const nothingBtn = document.getElementById("nothingBtn");

// Prepare it to move freely
nothingBtn.style.position = "fixed";
nothingBtn.style.transition = "top 0.2s ease, left 0.2s ease";

function moveAway(e) {
    if (e) e.preventDefault(); // stop double-tap zoom & ghost click

    const btn = nothingBtn.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let x = Math.random() * (screenWidth - btn.width);
    let y = Math.random() * (screenHeight - btn.height);

    nothingBtn.style.left = x + "px";
    nothingBtn.style.top  = y + "px";

    // force browser to acknowledge new position (fixes “stops after 2 taps” bug)
    nothingBtn.offsetHeight;
}

// Desktop hover
nothingBtn.addEventListener("mouseover", moveAway);

// Mobile tap
nothingBtn.addEventListener("touchstart", moveAway, { passive: false });

// Fallback for mobile browsers that convert taps to clicks
nothingBtn.addEventListener("click", moveAway);