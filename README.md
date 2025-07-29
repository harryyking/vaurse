# Rick and Morty Characters Portal

A web application built with Next.js that allows users to browse and view detailed information about characters from the Rick and Morty universe. This project focuses on modern web development practices, including PWA capabilities for an enhanced user experience.

## ✨ Features

* **Browse Characters:** View a list of Rick and Morty characters.
* **Character Details:** Click on any character to see their comprehensive profile, including status, species, gender, origin, last known location, and a list of episodes they appeared in.
* **Responsive Design:** Optimized for seamless viewing across various devices (mobile, tablet, desktop).
* **PWA (Progressive Web App) Capabilities:**
    * **Offline Access:** Browse character details even when offline, thanks to intelligent caching of API responses.
    * **Add to Home Screen:** Install the application directly to your device's home screen for a native app-like experience.
    * **Fast Loading:** Leverages service workers and caching strategies for quick load times and efficient resource management.
* **Dynamic Image Slider:** An eye-catching header with a fading image slideshow featuring Rick and Morty banners.
* **Themed UI:** Utilizes Shadcn UI for a consistent and modern component library.
* **Rick and Morty Themed Typography:** Custom fonts (`Get Schwifty`, `Gochi Hand`) are integrated to enhance the show's aesthetic.
* **Status Indicators:** Visually differentiate character status (Alive, Dead, Unknown) with color-coded indicators.
* **Optimized Images:** Employs Next.js Image component for efficient image loading and optimization from remote sources.

## 🛠️ Technologies Used

* **Next.js 14+:** React framework for production-grade applications.
* **React Query (TanStack Query):** For efficient data fetching, caching, and state management.
* **Tailwind CSS:** For rapid and highly customizable styling.
* **Shadcn UI:** Reusable UI components built on Tailwind CSS.
* **`@ducanh2912/next-pwa`:** A Next.js plugin to easily add PWA features.
* **`next/image`:** Next.js's built-in component for image optimization.
* **`react-hot-toast` (via Shadcn Toaster):** For displaying non-intrusive notifications (e.g., offline status).

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/harryyking/vaurse]
    cd vaurse
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4.  **Building for Production (to test PWA features):**
    PWA features like service workers are typically active only in a production build.
    ```bash
    npm run build
    # or
    yarn build
    # or
    pnpm build
    ```
    Then, start the production server:
    ```bash
    npm run start
    # or
    yarn start
    # or
    pnpm start
    ```
    Open your application in a browser and check the "Application" tab in Developer Tools to inspect the Service Worker and Manifest.

## 🌐 PWA Notes

* This application utilizes a Service Worker to cache API responses and static assets, enabling a seamless offline experience for character Browse.
* The `manifest.json` file provides metadata for "Add to Home Screen" functionality, allowing the app to be installed like a native application.
* Ensure to build and serve the application in a production environment (`npm run build && npm run start`) to fully test the PWA capabilities, as the service worker is disabled during development.

---