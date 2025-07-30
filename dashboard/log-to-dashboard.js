function logSuspiciousText(text, score) {
  fetch("http://127.0.0.1:5000/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: text,
      score: score,
      url: window.location.href
    })
  }).catch(err => console.error("Logging failed:", err));
}
