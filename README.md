# 📰 Fake News Detector

This repository contains a prototype fake news detection system, including:

* A **Chrome extension** mockup UI
* A **machine learning model** prototype for classifying news as fake or real
* A **dashboard** for displaying flagged content

> ⚠️ **Note**: This is a proof-of-concept. The extension and dashboard are not yet connected to the live machine learning model.

---

## 📁 Project Structure

```
fakeNewsDetector/
├── extension/      # Chrome extension (mockup)
├── model/          # Machine learning prototype
├── dashboard/      # Flask-based dashboard mockup
└── README.md       # This file
```

---

## 🧩 Chrome Extension (`extension/`)

This folder contains the mockup for a Chrome extension that would eventually flag suspicious news.

### Setup

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer Mode** (top right)
3. Click **Load unpacked**
4. Select the `extension/` folder

> The extension currently uses a placeholder word list in `models.json`. It is **not yet connected** to the ML model.

---

## 🧠 Machine Learning Prototype (`model/`)

The core model logic is implemented in `nontrivial.py`.

### Setup

1. Upload two datasets to your Google Drive:

   * One for **real** news
   * One for **fake** news

2. Modify `nontrivial.py` to reference your file paths if needed.

> For reference, two English-language datasets are already included in the `model/` folder.

---

## 📊 Dashboard (`dashboard/`)

This is a simple mockup dashboard built using Flask to display flagged news items.

### Setup

1. Ensure you have **Python 3** and **Flask** installed:

   ```bash
   pip install flask
   ```

2. Run the app:

   ```bash
   cd dashboard/
   python3 app.py
   ```

3. Visit `http://127.0.0.1:5000/` in your browser.

---

## 🚧 Roadmap

* [ ] Connect the Chrome extension to the ML model
* [ ] Improve UI/UX of the extension and dashboard
* [ ] Add real-time classification
* [ ] Extend support for multilingual datasets

---

## 📜 License

This project is for educational and prototyping purposes. Feel free to fork and adapt!
