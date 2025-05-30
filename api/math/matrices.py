import random
from typing import Any, Dict, List

import numpy as np


def generate_matrix_problem() -> Dict[str, Any]:
    """Generate a matrix multiplication problem with step-by-step solution."""

    # Generate random dimensions for matrices
    # Matrix A: m x n, Matrix B: n x p
    m = random.randint(2, 3)  # rows in A
    n = random.randint(2, 3)  # cols in A, rows in B
    p = random.randint(2, 3)  # cols in B

    # Generate random matrices with small integers
    matrix_a = np.random.randint(-5, 6, size=(m, n))
    matrix_b = np.random.randint(-5, 6, size=(n, p))

    # Calculate the result
    result = np.dot(matrix_a, matrix_b)

    # Generate step-by-step calculation
    steps = []
    result_matrix = [["?" for _ in range(p)] for _ in range(m)]

    for i in range(m):
        for j in range(p):
            # Calculate the dot product for position (i, j)
            calculation_parts = []
            for k in range(n):
                calculation_parts.append(f"{matrix_a[i][k]} × {matrix_b[k][j]}")

            calculation = " + ".join(calculation_parts)
            value = int(result[i][j])

            steps.append(
                {"row": i, "col": j, "calculation": calculation, "value": value}
            )

    return {
        "matrixA": matrix_a.tolist(),
        "matrixB": matrix_b.tolist(),
        "result": result_matrix,
        "steps": steps,
    }


def validate_matrix_step(
    matrix_a: List[List[int]],
    matrix_b: List[List[int]],
    row: int,
    col: int,
    user_answer: int,
) -> Dict[str, Any]:
    """Validate a user's answer for a specific matrix multiplication step."""

    # Convert to numpy arrays
    a = np.array(matrix_a)
    b = np.array(matrix_b)

    # Calculate the correct answer for this position
    correct_answer = int(np.dot(a[row], b[:, col]))

    is_correct = user_answer == correct_answer

    # Generate the calculation string
    calculation_parts = []
    for k in range(len(matrix_a[0])):
        calculation_parts.append(f"{matrix_a[row][k]} × {matrix_b[k][col]}")

    calculation = " + ".join(calculation_parts)

    return {
        "correct": is_correct,
        "correctAnswer": correct_answer,
        "calculation": calculation,
        "userAnswer": user_answer,
    }
