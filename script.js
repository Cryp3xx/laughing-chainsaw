function createCard() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
  
    if (input1 && input2) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <p>${input1}</p>
        <button onclick="toggleText(this, '${input1}', '${input2}')">Přeložit</button>
      `;
  
      document.getElementById("cardsContainer").appendChild(card);
      document.getElementById("input1").value = '';
      document.getElementById("input2").value = '';
    }
  }
  
  function toggleText(button, text1, text2) {
    const p = button.previousElementSibling;
    p.textContent = p.textContent === text1 ? text2 : text1;
  }