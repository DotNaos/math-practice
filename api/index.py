from typing import List

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from api.math.matrices import generate_matrix_problem, validate_matrix_step

load_dotenv(".env.local")

app = FastAPI(
    title="Math Practice API",
    description="API for generating and validating math practice problems",
    version="1.0.0",
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class MatrixValidationRequest(BaseModel):
    matrixA: List[List[int]]
    matrixB: List[List[int]]
    row: int
    col: int
    userAnswer: int


@app.get("/")
async def root():
    return {"message": "Math Practice API", "version": "1.0.0"}


@app.post("/api/math/matrices/generate")
async def generate_matrix():
    """Generate a new matrix multiplication problem."""
    try:
        problem = generate_matrix_problem()
        return problem
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to generate matrix problem: {str(e)}"
        )


@app.post("/api/math/matrices/validate")
async def validate_matrix(request: MatrixValidationRequest):
    """Validate a user's answer for a matrix multiplication step."""
    try:
        result = validate_matrix_step(
            request.matrixA,
            request.matrixB,
            request.row,
            request.col,
            request.userAnswer,
        )
        return result
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to validate answer: {str(e)}"
        )


@app.get("/api/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy", "service": "math-practice-api"}
