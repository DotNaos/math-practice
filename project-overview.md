# Math Practice Suite - Project Overview

## Project Description

The Math Practice Suite is an interactive web application designed to help students practice various mathematical concepts through step-by-step guided exercises. The application provides visual, interactive learning experiences with immediate feedback, comprehensive mathematical problem generation, and LaTeX-rendered mathematical expressions for a professional learning environment.

## Architecture

### Frontend (Next.js 15 + HeroUI)

- **Framework**: Next.js 15 with App Router and React 19
- **UI Library**: HeroUI 2.8.0-beta (modern React component library)
- **Styling**: Tailwind CSS 4.1.8 with custom matrix table styles
- **Math Rendering**: KaTeX and react-katex for LaTeX expression rendering
- **Icons**: Iconify React for consistent iconography
- **State Management**: React hooks for local component state
- **Build Tool**: pnpm for package management

### Backend (FastAPI + Python)

- **Framework**: FastAPI for high-performance API endpoints
- **Math Engine**:
  - NumPy for matrix operations and numerical calculations
  - SymPy for symbolic mathematics (differentiation, integration, algebraic manipulation)
- **Data Models**: Pydantic for request/response validation
- **CORS**: Configured for development with Next.js frontend
- **Package Management**: uv for Python dependency management

## Features Implemented

### 1. Matrix Multiplication Trainer ✅ **Fully Implemented**

- **Problem Generation**: Random matrix generation with configurable dimensions (2x2, 2x3, 3x2, 3x3)
- **Step-by-step Solutions**: Each cell calculation shown individually with full working
- **Interactive Highlighting**: Visual highlighting of relevant rows/columns during calculation
- **Progress Tracking**: Progress bar showing completion status
- **Controls**: Generate new problems, navigate steps, show complete solution
- **Validation**: Real-time answer validation for each step

### 2. Differentiation Trainer ✅ **Fully Implemented**

- **Problem Generation**: Multiple function types (polynomial, exponential, trigonometric, logarithmic, product rule, chain rule)
- **Step-by-step Solutions**: Detailed differentiation steps with rule explanations
- **LaTeX Rendering**: Beautiful mathematical expression display
- **Interactive Workspace**: Step navigation and solution verification
- **Rule Explanation**: Clear explanation of differentiation rules applied

### 3. Integration Trainer ✅ **Fully Implemented**

- **Problem Generation**: Various integration techniques (polynomial, exponential, trigonometric, logarithmic, substitution)
- **Step-by-step Solutions**: Detailed integration steps with technique explanations
- **LaTeX Rendering**: Professional mathematical notation
- **Interactive Workspace**: Progressive solution display
- **Technique Explanation**: Clear explanation of integration methods used

### 4. User Interface

- **Responsive Design**: Works on desktop and mobile devices using min-h-dvh for proper viewport handling
- **Dark Theme**: Modern dark theme with HeroUI components
- **Sidebar Navigation**: Collapsible sidebar for module selection
- **Module System**: Extensible architecture for adding new math modules
- **LaTeX Support**: Integrated KaTeX rendering throughout the application
- **Professional Layout**: Clean, educational-focused design

### 5. API Endpoints

- `POST /api/math/matrices/generate` - Generate matrix multiplication problems
- `POST /api/math/matrices/validate` - Validate user matrix calculation steps
- `POST /api/math/differentiation/generate` - Generate differentiation problems
- `POST /api/math/differentiation/validate` - Validate differentiation steps
- `POST /api/math/integration/generate` - Generate integration problems
- `POST /api/math/integration/validate` - Validate integration steps
- `GET /` - API health check and version information

## Project Structure

```
math-practice/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with HeroUI provider
│   ├── page.tsx                 # Main application with module routing
│   ├── globals.css              # Global styles + matrix table CSS
│   └── og/                      # Open Graph image generation
│       ├── background.png       # OG background image
│       └── route.tsx            # Dynamic OG image generation
├── components/                   # React components
│   ├── modules/                 # Math module components
│   │   ├── matrices-module.tsx  # Matrix multiplication trainer ✅
│   │   ├── matrix-workspace.tsx # Matrix display and calculation ✅
│   │   ├── differentiation-module.tsx    # Differentiation trainer ✅
│   │   ├── differentiationWorkspace.tsx  # Differentiation workspace ✅
│   │   ├── integration-module.tsx        # Integration trainer ✅
│   │   ├── integrationWorkspace.tsx      # Integration workspace ✅
│   │   ├── simplification-module.tsx     # Placeholder (UI only)
│   │   ├── powers-roots-module.tsx       # Placeholder (UI only)
│   │   └── settings-module.tsx           # Settings interface
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx           # Custom button component
│   │   ├── latexMatrix.tsx      # LaTeX matrix renderer
│   │   └── textarea.tsx         # Custom textarea component
│   ├── main-layout.tsx          # Main layout with sidebar
│   ├── workspace-card.tsx       # Shared workspace container
│   ├── providers.tsx            # React context providers
│   └── icons.tsx                # Icon definitions
├── api/                         # FastAPI backend
│   ├── index.py                 # Main FastAPI application
│   ├── math/                    # Math problem generators
│   │   ├── __init__.py
│   │   ├── matrices.py          # Matrix problem generation ✅
│   │   ├── differentiation.py   # Differentiation problems ✅
│   │   └── integration.py       # Integration problems ✅
│   └── utils/                   # Utility functions
│       ├── __init__.py
│       ├── attachment.py        # File attachment utilities
│       ├── prompt.py            # AI prompt utilities
│       └── tools.py             # Common tool functions
├── types/                       # TypeScript type definitions
│   ├── differentiation.ts       # Differentiation problem types
│   └── integration.ts           # Integration problem types
├── hooks/                       # Custom React hooks
│   └── use-scroll-to-bottom.tsx # Auto-scroll functionality
├── lib/                         # Utility functions
│   └── utils.ts                 # Tailwind class merging utility
├── config/                      # Configuration files
│   └── config.ts                # Application configuration
├── assets/                      # Static assets
│   ├── geist.ttf                # Geist font regular
│   └── geist-semibold.ttf       # Geist font semibold
└── Configuration files
    ├── package.json             # Node.js dependencies (pnpm)
    ├── pyproject.toml           # Python dependencies (uv)
    ├── uv.lock                  # Python dependency lockfile
    ├── pnpm-lock.yaml           # Node.js dependency lockfile
    ├── tailwind.config.js       # Tailwind + HeroUI configuration
    ├── next.config.js           # Next.js API proxy configuration
    ├── tsconfig.json            # TypeScript configuration
    ├── components.json          # UI component configuration
    ├── postcss.config.js        # PostCSS configuration
    └── vercel.json              # Vercel deployment configuration
```

## Development Workflow

### Frontend Development

1. Components are built using HeroUI for consistent styling
2. TypeScript for type safety throughout the application
3. Responsive design with Tailwind CSS using min-h-dvh for proper mobile viewport
4. State management with React hooks and context providers
5. LaTeX rendering with KaTeX for mathematical expressions

### Backend Development

1. FastAPI for fast, modern Python API development
2. Pydantic models for request/response validation
3. SymPy for symbolic mathematics and step-by-step solutions
4. NumPy for numerical computations
5. Modular structure for easy extension of new math topics

### API Integration

1. Next.js proxy configuration routes `/api/*` to FastAPI backend
2. Frontend makes HTTP requests to backend endpoints
3. Error handling with proper error response objects (not try/catch)
4. Loading states and progress indicators for better UX
5. Real-time validation and feedback

## Current Status & Future Enhancements

### ✅ Completed Modules

1. **Matrix Multiplication Trainer**: Fully functional with step-by-step solutions, interactive highlighting, and validation
2. **Differentiation Trainer**: Complete symbolic differentiation with multiple function types and detailed explanations
3. **Integration Trainer**: Comprehensive integration practice with various techniques and step-by-step solutions

### 🚧 Planned Modules

1. **Algebraic Simplification Trainer**: Expression simplification with rule explanations (UI placeholder exists)
2. **Powers & Roots Trainer**: Exponent and radical calculations (UI placeholder exists)
3. **Linear Equations Solver**: Systems of linear equations with step-by-step solutions
4. **Polynomial Operations**: Addition, subtraction, multiplication, and factoring

### 🔮 Potential Features

1. **User Accounts**: Save progress and track learning across sessions
2. **Difficulty Levels**: Adaptive problem difficulty based on performance
3. **Performance Analytics**: Detailed progress tracking and learning insights
4. **Custom Problem Sets**: Teacher-created problem collections and assignments
5. **Collaborative Features**: Shared problem solving and peer learning
6. **Mobile App**: React Native version for mobile devices
7. **AI Tutoring**: Integrated AI assistance for hints and explanations
8. **Export/Import**: Export progress and import custom problem sets

## Technical Decisions

### Why HeroUI?

- Modern, accessible React component library with excellent TypeScript support
- Built-in dark theme support and professional design system
- Comprehensive component set reducing custom component needs
- Active development and community support

### Why FastAPI + SymPy?

- High performance Python web framework with automatic API documentation
- SymPy provides powerful symbolic mathematics capabilities
- Excellent type hints support for robust API development
- Easy integration with NumPy for numerical operations
- Step-by-step solution generation capabilities

### Why Next.js 15 App Router?

- Modern React patterns with server components and improved performance
- Built-in API proxy capabilities for seamless backend integration
- Excellent developer experience with hot reloading and TypeScript support
- Easy deployment to Vercel with automatic optimizations

### Why pnpm + uv?

- pnpm provides faster, more efficient Node.js package management
- uv offers blazing-fast Python dependency resolution and installation
- Both tools improve development workflow and CI/CD performance

## Deployment Considerations

### Development

- Frontend: `pnpm dev` (localhost:3000)
- Backend: `uv run uvicorn api.index:app --reload` (localhost:8000)
- Combined: `pnpm dev` runs both concurrently with automatic reloading

### Production

- Frontend: Optimized for Vercel deployment with automatic build optimization
- Backend: Compatible with Railway, Render, or any Python ASGI hosting platform
- Environment variables needed for API endpoints and CORS configuration
- Database integration ready for progress tracking features

## Learning Outcomes

This project demonstrates:

1. **Full-stack Development**: Seamless frontend and backend integration with modern tools
2. **Modern React Patterns**: Hooks, TypeScript, component composition, and context providers
3. **API Design**: RESTful endpoints with proper validation and error handling
4. **Mathematical Computing**: SymPy integration for symbolic mathematics and NumPy for numerical operations
5. **UI/UX Design**: Responsive, accessible interface design with professional mathematical notation
6. **Development Tooling**: Modern development workflow with fast package managers and hot reloading
7. **LaTeX Integration**: Mathematical expression rendering with KaTeX for professional presentation
8. **Modular Architecture**: Extensible design pattern for adding new mathematical modules
