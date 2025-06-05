from typing import Any, Dict
import random
import sympy as sp
from sympy import latex, simplify, expand


def generate_simplification_problem() -> Dict[str, Any]:
    """Generate a simple algebraic simplification problem."""
    x = sp.symbols("x")

    # Randomly generate expressions that need simplification
    expr_type = random.choice(["like_terms", "expand", "fraction"])

    if expr_type == "like_terms":
        a = random.randint(1, 5)
        b = random.randint(1, 5)
        c = random.randint(1, 5)
        expression = a * x + b * x + c * x
    elif expr_type == "expand":
        a = random.randint(1, 3)
        b = random.randint(1, 3)
        c = random.randint(1, 3)
        expression = (a * x + b) * (c * x + 1)
    else:  # fraction
        a = random.randint(1, 5)
        b = random.randint(1, 5)
        expression = (a * x) / (b / x)

    expanded = expand(expression)
    simplified = simplify(expression)

    steps = [
        {
            "step": 1,
            "description": "Original expression",
            "expression": latex(expression),
            "rule": "Given",
        }
    ]

    if expanded != expression:
        steps.append(
            {
                "step": 2,
                "description": "Expand",
                "expression": latex(expanded),
                "rule": "Distribute multiplication",
            }
        )

    steps.append(
        {
            "step": len(steps) + 1,
            "description": "Simplify",
            "expression": latex(simplified),
            "rule": "Combine like terms",
        }
    )

    return {
        "expression": latex(expression),
        "expressionStr": str(expression),
        "simplified": latex(simplified),
        "simplifiedStr": str(simplified),
        "steps": steps,
    }


def validate_simplification_step(
    expression_str: str, user_answer: str, step_number: int
) -> Dict[str, Any]:
    """Validate a user's simplification answer."""
    try:
        expr = sp.sympify(expression_str)
        correct = simplify(expr)
        user_expr = sp.sympify(user_answer)
        user_simplified = simplify(user_expr)

        is_correct = sp.simplify(correct - user_simplified) == 0

        return {
            "correct": is_correct,
            "correctAnswer": latex(correct),
            "userAnswer": latex(user_simplified),
            "correctStr": str(correct),
            "userStr": str(user_simplified),
        }
    except Exception as e:
        return {
            "correct": False,
            "error": f"Unable to parse expression: {str(e)}",
            "correctAnswer": "",
            "userAnswer": user_answer,
        }
