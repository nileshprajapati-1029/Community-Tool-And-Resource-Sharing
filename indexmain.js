function openModal() {
    document.getElementById('toolModal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('toolModal').style.display = 'none';
  }
  
  document.getElementById("shareForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Tool shared successfully!");
    closeModal();
  });
  
  function filterTools() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const cards = document.querySelectorAll(".tool-card");
  
    cards.forEach(card => {
      const toolName = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = toolName.includes(input) ? "block" : "none";
    });
  }

  const params = new URLSearchParams(window.location.search);
const next = params.get("next");
if (next) {
  window.location.href = "index.html?next=" + next;
} else {
  window.location.href = "index.html";
}

//!-- JavaScript Logic for feedback -->

    // Simulated login status — replace with real session/cookie check
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    function handleShareClick() {
      if (!isLoggedIn) {
        window.location.href = "register.html?next=share";
      } else {
        openModal();
      }
    }

    function openModal() {
      document.getElementById("toolModal").style.display = "block";
    }

    function closeModal() {
      document.getElementById("toolModal").style.display = "none";
    }

    // Check if redirected from register with ?next=share
    window.onload = function () {
      const params = new URLSearchParams(window.location.search);
      if (params.get("next") === "share" && isLoggedIn) {
        openModal();
      }
    }

    // Tool search filter
    function filterTools() {
      const input = document.getElementById("searchBar").value.toLowerCase();
      const tools = document.querySelectorAll(".tool-card");
      tools.forEach(tool => {
        const name = tool.querySelector("h3").textContent.toLowerCase();
        tool.style.display = name.includes(input) ? "block" : "none";
      });
    }

    // Feedback form handling
    document.getElementById("feedbackForm").addEventListener("submit", function(e){
      e.preventDefault();
      const name = document.getElementById("feedbackName").value.trim();
      const opinion = document.getElementById("feedbackOpinion").value.trim();

      if(name && opinion){
        document.getElementById("feedbackMessage").textContent =
          `Thank you, ${name}! Your feedback has been received.`;
        this.reset();
      } else {
        document.getElementById("feedbackMessage").textContent =
          "Please fill in both fields.";
      }
    });
  



