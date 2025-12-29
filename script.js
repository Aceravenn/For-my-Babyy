document.addEventListener("DOMContentLoaded", () => {
  const envelopes = document.querySelectorAll(".envelope-wrapper");

  envelopes.forEach((envelope) => {
    envelope.dataset.envelopeState = "closed";

    envelope.addEventListener("click", () => {
      // Toggle data attribute
      envelope.dataset.envelopeState =
        envelope.dataset.envelopeState === "closed" ? "opened" : "closed";

      // Toggle CSS class for animations
      envelope.classList.toggle("open");
    });
  });

  // ==== ACTION BUTTONS (Add, Edit, Archive) ====
  const actionContainers = document.querySelectorAll(".tab-actions");

  actionContainers.forEach((container) => {
    const tabName = container.getAttribute("data-tab-actions");

    container.addEventListener("click", (event) => {
      const btn = event.target.closest(".action-btn");
      if (!btn) return;

      const action = btn.getAttribute("data-action");

      if (action === "add") handleAdd(tabName);
      else if (action === "edit") handleEdit(tabName);
      else if (action === "archive") handleArchive(tabName);
    });
  });

  function handleAdd(tabName) {
    if (tabName === "letters") {
      const text = prompt("Write a short new letter snippet:");
      if (!text) return;

      const lettersSection = document.getElementById("letters");
      const newCard = document.createElement("article");
      newCard.className = "letter-card";
      newCard.innerHTML = `
        <h3>New Letter</h3>
        <p class="letter-date">Added just now</p>
        <p>${text}</p>
      `;
      lettersSection.appendChild(newCard);
    }

    if (tabName === "pictures") {
      alert(
        "For now, to add a new picture, edit the HTML and add another <figure> in the gallery. 😊"
      );
    }

    if (tabName === "milestones") {
      const title = prompt("Milestone title:");
      const desc = prompt("Describe this milestone:");
      if (!title || !desc) return;

      const timeline = document.querySelector("#milestones .timeline");
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <p class="milestone-date">Added just now</p>
          <h3>${title}</h3>
          <p>${desc}</p>
        </div>
      `;
      timeline.appendChild(item);
    }
  }

  function handleEdit(tabName) {
    if (tabName === "letters") {
      alert(
        "To edit a letter, you can change the text directly in the HTML file. In the future this could be a full editor. ✏️"
      );
    }

    if (tabName === "pictures") {
      alert(
        "To edit pictures or captions, update the <img> and <figcaption> in the HTML."
      );
    }

    if (tabName === "milestones") {
      alert(
        "To edit milestones, update the text inside each .timeline-item in the HTML."
      );
    }
  }

  function handleArchive(tabName) {
    alert(
      `Imagine this as your archive button for "${tabName}". You can later make it hide or move old items. 📦`
    );
  }
});