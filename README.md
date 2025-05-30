# AI SDK Python Streaming Preview

This template demonstrates the usage of [Data Stream Protocol](https://sdk.vercel.ai/docs/ai-sdk-ui/stream-protocol#data-stream-protocol) to stream chat completions from a Python endpoint ([FastAPI](https://fastapi.tiangolo.com)) and display them using the [useChat](https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot#chatbot) hook in your Next.js application.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-preview-python-streaming&env=OPENAI_API_KEY&envDescription=API%20keys%20needed%20for%20application&envLink=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-preview-python-streaming%2Fblob%2Fmain%2F.env.example)

## How to use

Run [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/vercel-labs/ai-sdk-preview-python-streaming ai-sdk-preview-python-streaming-example
```

```bash
yarn create next-app --example https://github.com/vercel-labs/ai-sdk-preview-python-streaming ai-sdk-preview-python-streaming-example
```

```bash
pnpm create next-app --example https://github.com/vercel-labs/ai-sdk-preview-python-streaming ai-sdk-preview-python-streaming-example
```

To run the example locally you need to:

1. Sign up for accounts with the AI providers you want to use (e.g., OpenAI, Anthropic).
2. Obtain API keys for each provider.
3. Set the required environment variables as shown in the `.env.example` file, but in a new file called `.env`.
4. `pnpm install` to install the required Node dependencies.
5. `virtualenv venv` to create a virtual environment.
6. `source venv/bin/activate` to activate the virtual environment.
7. `pip install -r requirements.txt` to install the required Python dependencies.
8. `pnpm dev` to launch the development server.

## Learn More

To learn more about the AI SDK or Next.js by Vercel, take a look at the following resources:

- [AI SDK Documentation](https://sdk.vercel.ai/docs)
- [Next.js Documentation](https://nextjs.org/docs)

# Math Practice Suite

An interactive mathematics training platform for matrices, calculus, and algebraic operations with step-by-step solutions.

## Features

- **Matrix Multiplication Trainer**: Practice matrix multiplication with step-by-step guidance
- **Interactive UI**: Modern, responsive interface built with Next.js and HeroUI
- **Step-by-step Solutions**: Learn by following detailed calculation steps
- **Highlight Mode**: Visual highlighting of relevant matrix rows/columns
- **Progress Tracking**: Track your progress through each problem

## Tech Stack

- **Frontend**: Next.js 13, React, TypeScript, HeroUI, Tailwind CSS
- **Backend**: FastAPI, Python, NumPy
- **Development**: pnpm, uv (Python package manager)

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Python 3.12+ and uv

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd math-practice
```

2. Install frontend dependencies:
```bash
pnpm install
```

3. Install backend dependencies:
```bash
uv sync
```

### Development

Start the development server (runs both frontend and backend):

```bash
pnpm dev
```

This will start:
- Next.js frontend on http://localhost:3000
- FastAPI backend on http://localhost:8000

### API Documentation

When running in development mode, you can access the FastAPI documentation at:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── modules/          # Module-specific components
│   ├── main-layout.tsx   # Main layout component
│   └── workspace-card.tsx # Shared workspace component
├── api/                   # FastAPI backend
│   ├── math/             # Math problem generators
│   └── index.py          # Main API file
└── lib/                   # Utility functions
```

## Modules

### Matrix Multiplication
- Generate random matrix multiplication problems
- Step-by-step calculation display
- Interactive highlighting of relevant rows/columns
- Progress tracking through solution steps

### Coming Soon
- **Differentiation**: Symbolic differentiation with step-by-step solutions
- **Integration**: Symbolic integration practice
- **Simplification**: Algebraic expression simplification
- **Powers & Roots**: Power and root calculations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
