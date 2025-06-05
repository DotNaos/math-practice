from typing import Any, Dict
import random
import sympy as sp
from sympy import latex, sqrt


def generate_powers_roots_problem() -> Dict[str, Any]:
    """Generate a power or root problem."""
    x = sp.symbols("x")
    problem_type = random.choice(["power", "root"])

    if problem_type == "power":
        base = random.randint(2, 6)
        exp = random.randint(2, 4)
        expression = base ** exp
        steps = [
            {
                "step": 1,
                "description": "Write as repeated multiplication",
                "expression": latex(sp.Mul(*([base] * exp))),
                "rule": "Power definition",
            },
            {
                "step": 2,
                "description": "Compute the power",
                "expression": latex(expression),
                "rule": "Multiply",
            },
        ]
    else:
        radicand = random.randint(4, 36)
        expression = sqrt(radicand)
        steps = [
            {
                "step": 1,
                "description": "Rewrite the root",
                "expression": latex(expression),
                "rule": "Root definition",
            },
            {
                "step": 2,
                "description": "Simplify the root",
                "expression": latex(sp.sqrt(radicand)),
                "rule": "Simplify",
            },
        ]

    result = sp.simplify(expression)

    return {
        "expression": latex(expression),
        "expressionStr": str(expression),
        "result": latex(result),
        "resultStr": str(result),
        "steps": steps,
    }


def validate_powers_roots_step(
    expression_str: str, user_answer: str, step_number: int
) -> Dict[str, Any]:
    """Validate a user's power/root answer."""
    try:
        expr = sp.sympify(expression_str)
        correct = sp.simplify(expr)
        user_expr = sp.sympify(user_answer)
        user_simplified = sp.simplify(user_expr)

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
