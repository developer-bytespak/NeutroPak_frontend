# NeutroPak Frontend

A modern, production-ready TypeScript frontend application built with Next.js and React.

## Project Structure

```
Neutro_frontend/
├── src/
│   ├── pages/              # Next.js pages and routing
│   │   ├── _app.tsx       # App wrapper component
│   │   ├── _document.tsx  # HTML document wrapper
│   │   └── index.tsx      # Home page
│   ├── components/         # Reusable React components
│   │   └── Layout.tsx     # Main layout component
│   ├── utils/             # Utility functions and helpers
│   │   ├── api.ts        # API client with axios
│   │   └── constants.ts  # App constants
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts      # Shared types and interfaces
│   └── styles/            # Global styles
│       └── globals.css   # Global CSS
├── public/                # Static assets
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore rules
└── .env.example          # Environment variables example
```

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/developer-bytespak/NeutroPak_frontend.git
cd NeutroPak_frontend
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Configure API endpoint in `.env.local`
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NODE_ENV=development
```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Create an optimized production build:
```bash
npm run build
# or
yarn build
```

### Production

Start the production server:
```bash
npm start
# or
yarn start
```

### Linting

Check code quality:
```bash
npm run lint
# or
yarn lint
```

### Type Checking

Run TypeScript compiler check:
```bash
npm run type-check
# or
yarn type-check
```

## Key Features

- ✅ **Next.js 14**: Modern React framework with automatic SSR and static optimization
- ✅ **TypeScript**: Full type safety and better development experience
- ✅ **Axios API Client**: Pre-configured with interceptors for auth tokens
- ✅ **Type Definitions**: Comprehensive types for User, Product, Order, and API responses
- ✅ **ESLint & TypeScript**: Code quality and type checking
- ✅ **Global Styles**: Responsive CSS with mobile-first approach
- ✅ **Layout Component**: Reusable layout with header, main, and footer
- ✅ **Environment Configuration**: Easy setup with env variables

## API Integration

The project includes a pre-configured API client in `src/utils/api.ts` with:
- Automatic request/response interceptors
- Bearer token authentication support
- Error handling
- TypeScript generics for type-safe requests

### Making API Calls

```typescript
import { apiGet, apiPost, apiDelete } from '@/utils/api';
import { User, ApiResponse } from '@/types';

// GET request
const { data: users } = await apiGet<ApiResponse<User[]>>('/users');

// POST request
const { data } = await apiPost<ApiResponse<User>>('/users', {
  name: 'John',
  email: 'john@example.com',
});

// DELETE request
await apiDelete('/users/123');
```

## Type System

Common types are defined in `src/types/index.ts`:
- `User`: User entity with auth info
- `Product`: Product entity
- `Order`: Order with items
- `ApiResponse`: Standard API response wrapper
- `AuthToken`: JWT token structure

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | `http://localhost:3001` | Backend API base URL |
| `NODE_ENV` | `development` | Environment mode |

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript 5
- **Styling**: CSS3 (Global)
- **HTTP Client**: Axios
- **Linting**: ESLint
- **Development**: React 18

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please create an issue on GitHub.
