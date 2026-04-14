const tools = [
    {
      name: "Cordless Drill",
      description: "Compact & powerful, perfect for home DIY or building raised beds.",
      price: 5.00
    },
    {
      name: "Garden Shovel",
      description: "Heavy-duty shovel ideal for soil digging, planting, or landscaping.",
      price: 3.00
    },
    {
      name: "Ladder (6 ft)",
      description: "Lightweight aluminum ladder useful for painting or cleaning gutters.",
      price: 4.00
    }
  ];
  
  let filtered = [...tools];
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", e => {
        const q = e.target.value.toLowerCase();
        filtered = tools.filter(t =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
        );
        renderTools();
      });
      renderTools();
    }
  
    // Registration handler
    const authForm = document.getElementById("authForm");
    if (authForm) {
      authForm.addEventListener("submit", e => {
        e.preventDefault();
        // Simulate registration/login
        const email = document.getElementById("email").value;
        document.getElementById("authMessage").innerText = `Welcome, ${email}!`;
        setTimeout(() => window.location = "index.html", 1500);
      });
    }
  });
  
  function renderTools() {
    const list = document.getElementById("toolList");
    list.innerHTML = "";
    filtered.forEach(tool => {
      const card = document.createElement("div");
      card.className = "tool-card";
      card.innerHTML = `
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <p><strong>$${tool.price.toFixed(2)}</strong> per day</p>
        <button onclick="startPayment('${tool.name}', ${tool.price})">Borrow Tool</button>`;
      list.appendChild(card);
    });
  }
  