# 🤖 AppBajar

**AppBajar** is a high-performance, modern web storefront designed specifically for discovering and managing robotics applications. Built with a focus on speed, responsiveness, and a seamless user experience, it allows users to explore a curated catalog of specialized robot software.

---

## 🚀 Description

AppBajar serves as a central hub for the robotics community. Whether you are looking for industrial automation tools, educational robot controllers, or hobbyist scripts, AppBajar provides a clean interface to:
* **Browse & Filter:** Search through a diverse list of robotics apps.
* **Detailed Insights:** View comprehensive app details, including ratings, download counts, and size.
* **Local Installation:** Simulate app installations managed via persistent local storage.
* **Visual Analytics:** Interactive rating breakdowns using custom-styled charts.

---
## 🔗 Live Links:

**[Surge](http://app-bazar-alfred23.surge.sh/), [Netlify](https://app-bajar-alfred23.netlify.app/), [Vercel](https://app-bajar.vercel.app/)**
---

## 🛠️ Technologies Used

The project leverages a modern "Frontend-First" technical stack for optimal developer experience and UI performance:

### Core Frameworks
* **React:** Utilizing the latest concurrent features like the `use()` hook for data fetching.
* **Vite:** Next-generation frontend tooling for lightning-fast Hot Module Replacement (HMR).
* **React Router:** Handling complex navigation, nested layouts, and wildcard error boundaries.

### Styling & UI
* **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
* **DaisyUI:** Component library for accessible, themeable interface elements.
* **React Icons:** High-quality icons (Flat Color, Font Awesome, Bootstrap) for a polished look.

### Data & Visualization
* **Recharts:** Composable charting library used for rendering rating distributions.
* **LocalStorage API:** Used for persistent state management of "Installed" applications.

---

## ✨ Key Features

* **Dynamic Sorting:** Sort apps by Alphabetical Order, Popularity, or User Ratings.
* **Smart Navigation:** Automatic "Scroll to Top" and hash-link support for a smoother UX.
* **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop views.
* **Custom Error Handling:** Dedicated "App Not Found" pages and global error boundaries for 404/500 scenarios.

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AlfredGomes23/AppBajar.git
2. **Install dependencies:**
   ```bash
   npm install

3. **Run the development server:**
    ```bash
    npm run dev
