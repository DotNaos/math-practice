from typing import List

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from api.math.differentiation import (
    generate_differentiation_problem,
    validate_differentiation_step,
)
from api.math.integration import generate_integration_problem, validate_integration_step
from api.math.matrices import generate_matrix_problem, validate_matrix_step
from api.math.simplification import (
    generate_simplification_problem,
    validate_simplification_step,
)
from api.math.powers_roots import (
    generate_powers_roots_problem,
    validate_powers_roots_step,
)

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


class DifferentiationValidationRequest(BaseModel):
    functionStr: str
    userDerivative: str
    stepNumber: int


class IntegrationValidationRequest(BaseModel):
    functionStr: str
    userIntegral: str
    stepNumber: int


class SimplificationValidationRequest(BaseModel):
    expressionStr: str
    userAnswer: str
    stepNumber: int


class PowersRootsValidationRequest(BaseModel):
    expressionStr: str
    userAnswer: str
    stepNumber: int


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


@app.post("/api/math/differentiation/generate")
async def generate_differentiation():
    """Generate a new differentiation problem."""
    try:
        problem = generate_differentiation_problem()
        return problem
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate differentiation problem: {str(e)}",
        )


@app.post("/api/math/differentiation/validate")
async def validate_differentiation(request: DifferentiationValidationRequest):
    """Validate a user's answer for a differentiation step."""
    try:
        result = validate_differentiation_step(
            request.functionStr,
            request.userDerivative,
            request.stepNumber,
        )
        return result
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to validate answer: {str(e)}"
        )


@app.post("/api/math/integration/generate")
async def generate_integration():
    """Generate a new integration problem."""
    try:
        problem = generate_integration_problem()
        return problem
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to generate integration problem: {str(e)}"
        )


@app.post("/api/math/integration/validate")
async def validate_integration(request: IntegrationValidationRequest):
    """Validate a user's answer for an integration step."""
    try:
        result = validate_integration_step(
            request.functionStr,
            request.userIntegral,
            request.stepNumber,
        )
        return result
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to validate answer: {str(e)}"
        )


@app.post("/api/math/simplification/generate")
async def generate_simplification():
    """Generate a new simplification problem."""
    try:
        problem = generate_simplification_problem()
        return problem
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate simplification problem: {str(e)}",
        )


@app.post("/api/math/simplification/validate")
async def validate_simplification(request: SimplificationValidationRequest):
    """Validate a user's answer for a simplification step."""
    try:
        result = validate_simplification_step(
            request.expressionStr,
            request.userAnswer,
            request.stepNumber,
        )
        return result
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to validate answer: {str(e)}"
        )


@app.post("/api/math/powers-roots/generate")
async def generate_powers_roots():
    """Generate a new powers & roots problem."""
    try:
        problem = generate_powers_roots_problem()
        return problem
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate powers/roots problem: {str(e)}",
        )


@app.post("/api/math/powers-roots/validate")
async def validate_powers_roots(request: PowersRootsValidationRequest):
    """Validate a user's answer for a powers & roots step."""
    try:
        result = validate_powers_roots_step(
            request.expressionStr,
            request.userAnswer,
            request.stepNumber,
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
