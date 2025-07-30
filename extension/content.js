document.addEventListener('mouseup', () => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    const range = window.getSelection().getRangeAt(0);
    const rect = range.getBoundingClientRect();
    analyzeText(selectedText, rect);
  }
});

async function analyzeText(text, rect) {
  const response = await fetch(chrome.runtime.getURL('model.json'));
  const model = await response.json();
  const words = text.toLowerCase().split(/\W+/);

  let score = model.intercept;
  for (let word of words) {
    if (word in model.vocabulary) {
      const index = model.vocabulary[word];
      score += model.coefficients[index];
    }
  }

  removeExistingPopup(); // Clear old popups

  if (score > 0) {
    showPopup("⚠️ Suspicious language detected", rect);
  }
}

function showPopup(message, rect) {
  const popup = document.createElement("div");
  popup.innerText = message;
  popup.style.position = "fixed";
  popup.style.left = `${rect.left + window.scrollX}px`;
  popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
  popup.style.background = "#fef3c7";
  popup.style.color = "#92400e";
  popup.style.border = "1px solid #fcd34d";
  popup.style.padding = "8px 12px";
  popup.style.borderRadius = "8px";
  popup.style.boxShadow = "0 2px 6px rgba(0,0,0,0.15)";
  popup.style.zIndex = 9999;
  popup.style.fontFamily = "Arial, sans-serif";
  popup.className = "highlight-warning-popup";

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 4000); // Hide after 4 seconds
}

function removeExistingPopup() {
  document.querySelectorAll(".highlight-warning-popup").forEach(p => p.remove());
}
