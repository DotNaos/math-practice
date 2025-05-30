# Math Practice Suite - Project Overview

## Project Description

The Math Practice Suite is an interactive web application designed to help students practice various mathematical concepts through step-by-step guided exercises. The application focuses on providing visual, interactive learning experiences with immediate feedback and progress tracking.

## Architecture

### Frontend (Next.js + HeroUI)
- **Framework**: Next.js 13 with App Router
- **UI Library**: HeroUI (modern React component library)
- **Styling**: Tailwind CSS with custom matrix table styles
- **Icons**: Iconify React for consistent iconography
- **State Management**: React hooks for local component state

### Backend (FastAPI + Python)
- **Framework**: FastAPI for high-performance API endpoints
- **Math Engine**: NumPy for matrix operations and calculations
- **Data Models**: Pydantic for request/response validation
- **CORS**: Configured for development with Next.js frontend

## Features Implemented

### 1. Matrix Multiplication Trainer
- **Problem Generation**: Random matrix generation with configurable dimensions (2x2, 2x3, 3x2, 3x3)
- **Step-by-step Solutions**: Each cell calculation shown individually with full working
- **Interactive Highlighting**: Visual highlighting of relevant rows/columns during calculation
- **Progress Tracking**: Progress bar showing completion status
- **Controls**: Generate new problems, navigate steps, show complete solution

### 2. User Interface
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Theme**: Modern dark theme with HeroUI components
- **Sidebar Navigation**: Collapsible sidebar for module selection
- **Module System**: Extensible architecture for adding new math modules

### 3. API Endpoints
- `POST /api/math/matrices/generate` - Generate new matrix multiplication problems
- `POST /api/math/matrices/validate` - Validate user answers for specific steps
- `GET /api/health` - Health check endpoint

## Project Structure

```
math-practice/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with HeroUI provider
│   ├── page.tsx                 # Main application page
│   └── globals.css              # Global styles + matrix table CSS
├── components/                   # React components
│   ├── modules/                 # Math module components
│   │   ├── matrices-module.tsx  # Matrix multiplication trainer
│   │   ├── matrix-workspace.tsx # Matrix display and calculation
│   │   ├── differentiation-module.tsx  # Placeholder
│   │   ├── integration-module.tsx      # Placeholder
│   │   ├── simplification-module.tsx   # Placeholder
│   │   ├── powers-roots-module.tsx     # Placeholder
│   │   └── settings-module.tsx         # Settings interface
│   ├── main-layout.tsx          # Main layout with sidebar
│   └── workspace-card.tsx       # Shared workspace container
├── api/                         # FastAPI backend
│   ├── math/                    # Math problem generators
│   │   ├── __init__.py
│   │   └── matrices.py          # Matrix problem generation
│   └── index.py                 # Main FastAPI application
├── lib/                         # Utility functions
│   └── utils.ts                 # Tailwind class merging utility
└── Configuration files
    ├── package.json             # Node.js dependencies
    ├── pyproject.toml           # Python dependencies
    ├── tailwind.config.js       # Tailwind + HeroUI configuration
    ├── next.config.js           # Next.js API proxy configuration
    └── tsconfig.json            # TypeScript configuration
```

## Development Workflow

### Frontend Development
1. Components are built using HeroUI for consistent styling
2. TypeScript for type safety
3. Responsive design with Tailwind CSS
4. State management with React hooks

### Backend Development
1. FastAPI for fast, modern Python API development
2. Pydantic models for request/response validation
3. NumPy for mathematical computations
4. Modular structure for easy extension

### API Integration
1. Next.js proxy configuration routes `/api/*` to FastAPI backend
2. Frontend makes HTTP requests to backend endpoints
3. Error handling with try/catch blocks
4. Loading states for better UX

## Future Enhancements

### Planned Modules
1. **Differentiation Trainer**: Symbolic differentiation with step-by-step solutions
2. **Integration Trainer**: Integration techniques and practice
3. **Algebraic Simplification**: Expression simplification with rule explanations
4. **Powers & Roots**: Exponent and radical calculations

### Potential Features
1. **User Accounts**: Save progress and track learning
2. **Difficulty Levels**: Adaptive problem difficulty
3. **Performance Analytics**: Detailed progress tracking
4. **Custom Problem Sets**: Teacher-created problem collections
5. **Collaborative Features**: Shared problem solving
6. **Mobile App**: React Native version for mobile devices

## Technical Decisions

### Why HeroUI?
- Modern, accessible React component library
- Excellent TypeScript support
- Built-in dark theme support
- Comprehensive component set

### Why FastAPI?
- High performance Python web framework
- Automatic API documentation generation
- Excellent type hints support
- Easy integration with NumPy for math operations

### Why Next.js App Router?
- Modern React patterns with server components
- Built-in API proxy capabilities
- Excellent developer experience
- Easy deployment to Vercel

## Deployment Considerations

### Development
- Frontend: `pnpm dev` (localhost:3000)
- Backend: `uv run uvicorn api.index:app --reload` (localhost:8000)
- Combined: `pnpm dev` runs both concurrently

### Production
- Frontend can be deployed to Vercel, Netlify, or similar
- Backend can be deployed to Railway, Render, or similar Python hosting
- Environment variables needed for API endpoints and CORS configuration

## Learning Outcomes

This project demonstrates:
1. **Full-stack Development**: Frontend and backend integration
2. **Modern React Patterns**: Hooks, TypeScript, component composition
3. **API Design**: RESTful endpoints with proper validation
4. **Mathematical Computing**: NumPy integration for calculations
5. **UI/UX Design**: Responsive, accessible interface design
6. **Development Tooling**: Modern development workflow with hot reloading
