# 🌸 Menstrupedia Comic Reader

> A mobile-first, accessible, offline-capable comic book reader built specifically for **Menstrupedia** — solving their stated problem that *"the digital version is not compatible with mobile devices and tablets yet."*

[![Live Demo](https://img.shields.io/badge/🚀-Live%20Demo-FF6B6B?style=for-the-badge)](https://yourusername.github.io/menstrupedia-comic-reader)
[![GitHub](https://img.shields.io/badge/📁-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/yourusername/menstrupedia-comic-reader)

---

## 📱 Problem Statement

**Menstrupedia's current digital comic has a critical UX flaw:**

> *"The digital version is not compatible with mobile devices and tablets yet. We recommend accessing it via a laptop or a desktop computer."*

This excludes millions of children in India who primarily access the internet through smartphones.

## ✅ Solution

This project is a **progressive web app (PWA)** comic reader designed from the ground up for:
- 📱 **Mobile phones** (primary target)
- 📲 **Tablets** (school use)
- 💻 **Desktops** (secondary)
- 📴 **Offline reading** (rural areas with poor connectivity)

---

## ✨ Features

| Feature | Description | Why It Matters for Menstrupedia |
|---------|-------------|--------------------------------|
| **📱 Mobile-First Design** | Touch-optimized with 48px+ tap targets | Children use phones, not laptops |
| **👆 Swipe Navigation** | Instagram Stories-style swipe to turn pages | Intuitive for young users |
| **🌍 Multi-Language** | English, Hindi, Marathi, Gujarati | Reaches India's diverse population |
| **🔊 Read Aloud** | Text-to-speech with language detection | Helps children with reading difficulties |
| **🔖 Bookmarks** | Save and jump to favorite pages | Easy reference for teachers/parents |
| **📴 Offline Mode** | Service Worker caches content for offline reading | Critical for rural schools with poor internet |
| **♿ Accessibility** | ARIA labels, keyboard navigation, screen reader support | Inclusive for children with disabilities |
| **🎨 Child-Friendly UI** | Warm colors, large buttons, no complex menus | Designed for 9+ year old users |
| **⚙️ Customizable** | Auto-hide controls, contrast mode, page fit options | Personal reading experience |
| **📊 Progress Tracking** | Visual progress bar with page counter | Encourages completion |

---

## 🛠️ Tech Stack

| Layer | Technology | Justification |
|-------|-----------|---------------|
| **Frontend** | Vanilla JavaScript (ES6+) | Lightweight, fast, no build step needed |
| **Styling** | CSS3 (Custom Properties, Flexbox, Grid) | Modern, maintainable, theming support |
| **Storage** | localStorage + IndexedDB | Persistent bookmarks, settings, offline cache |
| **PWA** | Service Worker + Web App Manifest | Offline capability, installable app |
| **Accessibility** | ARIA, Semantic HTML, Keyboard Navigation | WCAG 2.1 AA compliant |
| **Images** | Lazy Loading, WebP-ready | Performance on slow networks |

> **Why Vanilla JS over React?** For this specific use case (a comic reader), vanilla JS provides better performance, smaller bundle size, and faster load times on low-end devices common in rural India. However, the code is structured in an OOP pattern that easily translates to React components.

---

## 🚀 Live Demo

**[👉 Click here to try the live demo](https://yourusername.github.io/menstrupedia-comic-reader)**

### How to Test

1. **Open on your phone** — The reader is designed mobile-first
2. **Try swipe gestures** — Swipe left/right to navigate pages
3. **Toggle Read Aloud** — Tap the speaker icon to hear narration
4. **Switch languages** — Open menu → select Hindi/Marathi/Gujarati
5. **Test offline** — Turn off WiFi, refresh the page — it still works!
6. **Install as PWA** — Add to home screen for app-like experience

---

## 📁 Project Structure

```
menstrupedia-comic-reader/
├── 📄 index.html              # Main HTML entry point
├── 📄 manifest.json           # PWA manifest
├── 📄 sw.js                   # Service Worker for offline caching
├── 📁 css/
│   └── style.css              # All styles (mobile-first, 900+ lines)
├── 📁 js/
│   ├── comic-data.js          # Multilingual comic content data
│   ├── reader.js              # Core reader logic (ComicReader class)
│   └── sw-register.js         # Service Worker registration
└── 📄 README.md               # This file
```

---

## 🎯 How This Project Targets Menstrupedia's JD

### Essential Requirements ✅

| JD Requirement | How This Project Demonstrates It |
|---------------|----------------------------------|
| **Basic knowledge of JavaScript, HTML, CSS** | Entire app built with these three technologies — no frameworks |
| **Exposure to backend technologies such as Laravel** | Data structure mirrors API response format; ready for Laravel backend integration |
| **Strong problem-solving mindset** | Solved a real problem Menstrupedia admits they have |
| **Ability to understand requirements and implement solutions with guidance** | Built based on actual website analysis and job description |
| **Good communication and teamwork skills** | Well-documented code, clear README, structured project |

### Desirable Requirements ✅

| JD Requirement | How This Project Demonstrates It |
|---------------|----------------------------------|
| **Familiarity with React.js** | Code uses component-like OOP pattern; easily portable to React |
| **Basic understanding of UI/UX principles** | Child-friendly design, accessibility, mobile-first approach |
| **Personal projects in web development** | This IS the project — deployed, documented, and functional |

---

## 🧠 Design Decisions

### 1. **Mobile-First Approach**
- 85% of India's internet users access via mobile
- Menstrupedia's target audience (9-14 year olds) primarily use parents' phones
- All tap targets are 48px+ (WCAG guideline)
- Swipe gestures mirror Instagram Stories — familiar to children

### 2. **Warm, Friendly Color Palette**
```css
--primary: #FF6B6B;      /* Coral — energetic, friendly */
--secondary: #4ECDC4;    /* Teal — calming, trustworthy */
--accent: #FFE66D;       /* Yellow — cheerful, optimistic */
--bg: #FFF8F8;           /* Soft pink-white — gentle */
```
- No clinical whites or harsh colors
- Colors chosen to reduce anxiety around the sensitive topic

### 3. **Privacy-First Design**
- No account required
- All data stored locally (localStorage)
- No tracking or analytics
- Critical for a topic as personal as menstrual health

### 4. **Accessibility for Children**
- Large, simple icons (no abstract symbols)
- Text-to-speech for emerging readers
- High contrast mode for visual impairments
- Keyboard navigation for motor disabilities

### 5. **Offline-First Architecture**
- Service Worker caches all assets
- Works without internet after first load
- Essential for schools in rural areas with intermittent connectivity

---

## 🔧 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/menstrupedia-comic-reader.git

# Navigate to project
cd menstrupedia-comic-reader

# Serve with any static server
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx serve .

# Option 3: VS Code Live Server extension
# Just click "Go Live"

# Open in browser
http://localhost:8000
```

---

## 🚀 Deploy to GitHub Pages

```bash
# 1. Create a new repository on GitHub
# 2. Push your code
git init
git add .
git commit -m "Initial commit: Menstrupedia Comic Reader"
git branch -M main
git remote add origin https://github.com/yourusername/menstrupedia-comic-reader.git
git push -u origin main

# 3. Enable GitHub Pages
# Go to Settings → Pages → Source → Deploy from a branch → main → / (root)
# Your site will be live at: https://yourusername.github.io/menstrupedia-comic-reader
```

---

## 📝 What I Learned

1. **Progressive Web Apps** — Service Workers, caching strategies, offline-first architecture
2. **Touch & Gesture APIs** — Swipe detection, touch event handling for mobile
3. **Web Speech API** — Text-to-speech with multilingual support
4. **Accessibility (a11y)** — ARIA labels, keyboard navigation, screen reader testing
5. **Mobile Performance** — Lazy loading, image optimization, CSS containment
6. **Child-Centric UX** — Designing for cognitive load, emotional sensitivity, and motor skills of 9-14 year olds

---

## 🔮 Future Improvements

- [ ] **React.js Migration** — Convert to React for better state management
- [ ] **Laravel Backend** — Connect to real API for dynamic comic content
- [ ] **User Accounts** — Optional accounts for progress sync across devices
- [ ] **More Languages** — Add Tamil, Telugu, Bengali, Kannada
- [ ] **Audio Narration** — Professional voice-over instead of TTS
- [ ] **Parent Dashboard** — Track child's reading progress
- [ ] **Quiz Integration** — Add comprehension quizzes after each chapter

---

## 🤝 Why I Built This

I built this project because I believe **technology should serve social good**. Menstrupedia is doing incredible work breaking menstrual taboos in India, and their digital platform deserves to be as accessible as their mission. This comic reader directly addresses their stated mobile compatibility issue while maintaining the warmth, sensitivity, and child-friendliness that makes Menstrupedia special.

> *"Periods are a natural and healthy part of life. They are nothing to be ashamed of."* — Menstrupedia

---

## 📄 License

MIT License — Feel free to use, modify, and contribute!

---

<p align="center">
  <b>Built with 💗 for Menstrupedia</b><br>
  <sub>Helping 13 million children (and counting) learn about their bodies</sub>
</p>
