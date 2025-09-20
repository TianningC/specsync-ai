# Spec-as-Code

Spec-as-Code is a landing site and demo application showcasing how to keep your project specifications and implementation in perfect sync using AI-driven workflows.

## Demo

View the live demo here (when deployed):

```
https://your-deployment-url.com
```

## Features

- Store and version your specs alongside code in your repository.
- AI agents analyze code changes and propose spec updates via draft pull requests.
- Permanent, unbreakable links between requirements, documentation, and implementation.

## Technology Stack

- Vite + TypeScript
- React 18
- Tailwind CSS & shadcn-ui (Radix UI)
- lucide-react for icons
- AI synchronization powered by custom agents

## Getting Started

### Prerequisites

- Node.js (>=16.x)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/TianningC/specsync-ai.git
cd specsync-ai
npm install
# or
# yarn install
```

### Development

Start the development server with hot-reloading:

```bash
npm run dev
# or
# yarn dev
```

Open http://localhost:5173 in your browser to view the app.

### Build

Bundle the application for production:

```bash
npm run build
# or
# yarn build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
# yarn preview
```

## Configuration

- Tailwind configuration: `tailwind.config.ts`
- shadcn-ui components schema: `components.json`
- Environment variables can be defined in a `.env` file at the project root.

## Deployment

This is a static front-end application. You can deploy it to any static hosting provider (e.g., Vercel, Netlify, GitHub Pages) by serving the contents of the `dist` directory.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve features, fix bugs, or enhance documentation.

## License

This project is released under the MIT License.