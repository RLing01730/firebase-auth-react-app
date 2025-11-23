# firebase-auth-react-app

A React application with Firebase Authentication and GitHub Actions CI/CD pipeline.

## Features

- React 18 with Vite
- Firebase Authentication (UI framework ready)
- Comprehensive test suite with Vitest and React Testing Library
- ESLint for code quality
- GitHub Actions CI/CD

## Getting Started

### Prerequisites

- Node.js 18.x or 20.x
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing

This project uses:
- **Vitest** as the test runner
- **React Testing Library** for component testing
- **jsdom** for DOM simulation

Run tests with `npm test` or in watch mode with `npm run test:watch`.

## CI/CD

The project uses GitHub Actions for continuous integration. The workflow:
- Runs on push and pull requests to `main`/`master` branches
- Tests against Node.js 18.x and 20.x
- Executes linting, testing, and building steps

See `.github/workflows/ci.yml` for details.

## Project Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── src/
│   ├── components/
│   │   ├── Auth.jsx        # Authentication component
│   │   └── Auth.test.jsx   # Auth tests
│   ├── App.jsx             # Main App component
│   ├── App.test.jsx        # App tests
│   ├── App.css             # App styles
│   ├── main.jsx            # Entry point
│   ├── index.css           # Global styles
│   └── setupTests.js       # Test configuration
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
