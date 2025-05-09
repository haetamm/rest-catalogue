- **Restaurant List and Details**: Displays a list of restaurants
- **Favorite Restaurants**: Displays a list of restaurants saved as favorites, stored locally in IndexedDB 
- **Four Rendering Modes**:
  - **SSR** (`/ssr/:id`): Fetches data from the API on every request, ideal for frequently changing content.
  - **SSG** (`/ssg/:id`): Generates pages at build time for fast, static content delivery.
  - **ISR** (`/isr/:id`): Combines SSG speed with automatic data updates
  - **Client-Side**: Submits reviews via a client-side form with real-time UI updates using API calls.
- **Progressive Web App (PWA)**: Installable app with offline support for cached pages, powered by next-pwa.
- **Styled Components**: Modular CSS-in-JS styling, supporting dynamic themes