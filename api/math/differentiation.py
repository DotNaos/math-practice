import random
from typing import Any, Dict

import sympy as sp
from sympy import diff, latex, simplify, symbols


def generate_differentiation_problem() -> Dict[str, Any]:
    """Generate a differentiation problem with step-by-step solution."""

    x = symbols("x")
    function = None  # Initialize function variable

    # Define different types of functions to differentiate
    function_types = [
        "polynomial",
        "exponential",
        "trigonometric",
        "logarithmic",
        "product_rule",
        "chain_rule",
    ]

    function_type = random.choice(function_types)

    if function_type == "polynomial":
        # Generate polynomial: ax^n + bx^m + c
        a = random.randint(1, 5)
        n = random.randint(2, 4)
        b = random.randint(-3, 3)
        m = random.randint(1, n - 1)
        c = random.randint(-5, 5)

        if b == 0:
            b = 1

        function = a * x**n + b * x**m + c

    elif function_type == "exponential":
        # Generate exponential: a*e^(bx) or a*b^x
        a = random.randint(1, 3)
        b = random.randint(2, 4)

        if random.choice([True, False]):
            function = a * sp.exp(b * x)
        else:
            function = a * b**x

    elif function_type == "trigonometric":
        # Generate trig functions: a*sin(bx), a*cos(bx), a*tan(x)
        a = random.randint(1, 3)
        b = random.randint(1, 3)

        trig_choice = random.choice(["sin", "cos", "tan"])
        if trig_choice == "sin":
            function = a * sp.sin(b * x)
        elif trig_choice == "cos":
            function = a * sp.cos(b * x)
        else:
            function = a * sp.tan(x)  # Keep tan simple

    elif function_type == "logarithmic":
        # Generate log functions: a*ln(bx), a*log(bx, base)
        a = random.randint(1, 3)
        b = random.randint(1, 3)

        function = a * sp.ln(b * x)

    elif function_type == "product_rule":
        # Generate functions needing product rule: (ax + b)(cx^2 + d)
        a = random.randint(1, 3)
        b = random.randint(1, 3)
        c = random.randint(1, 3)
        d = random.randint(1, 3)

        function = (a * x + b) * (c * x**2 + d)

    elif function_type == "chain_rule":
        # Generate functions needing chain rule: (ax + b)^n, sin(ax + b)
        a = random.randint(1, 3)
        b = random.randint(1, 3)
        n = random.randint(2, 4)

        if random.choice([True, False]):
            function = (a * x + b) ** n
        else:
            function = sp.sin(a * x + b)

    # Fallback to polynomial if function is still None
    if function is None:
        function = x**2 + x + 1
        function_type = "polynomial"

    # Calculate the derivative
    derivative = diff(function, x)
    simplified_derivative = simplify(derivative)

    # Generate step-by-step solution
    steps = []

    # Step 1: Show the original function
    steps.append(
        {
            "step": 1,
            "description": "Original function",
            "expression": f"f(x) = {latex(function)}",
            "rule": "Given",
        }
    )

    # Step 2: Apply the appropriate rule
    rule_description = _get_rule_description(function_type)
    steps.append(
        {
            "step": 2,
            "description": f"Apply {rule_description}",
            "expression": f"f'(x) = {latex(derivative)}",
            "rule": rule_description,
        }
    )

    # Step 3: Simplify if needed
    if derivative != simplified_derivative:
        steps.append(
            {
                "step": 3,
                "description": "Simplify",
                "expression": f"f'(x) = {latex(simplified_derivative)}",
                "rule": "Algebraic simplification",
            }
        )

    return {
        "function": latex(function),
        "functionStr": str(function),
        "derivative": latex(simplified_derivative),
        "derivativeStr": str(simplified_derivative),
        "functionType": function_type,
        "steps": steps,
    }


def _get_rule_description(function_type: str) -> str:
    """Get the differentiation rule description for the function type."""
    rules = {
        "polynomial": "Power Rule: d/dx[x^n] = nx^(n-1)",
        "exponential": "Exponential Rule: d/dx[e^x] = e^x, d/dx[a^x] = a^x ln(a)",
        "trigonometric": "Trigonometric Rules: d/dx[sin(x)] = cos(x), d/dx[cos(x)] = -sin(x), d/dx[tan(x)] = sec²(x)",
        "logarithmic": "Logarithmic Rule: d/dx[ln(x)] = 1/x",
        "product_rule": "Product Rule: d/dx[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)",
        "chain_rule": "Chain Rule: d/dx[f(g(x))] = f'(g(x)) × g'(x)",
    }
    return rules.get(function_type, "Differentiation rules")


def validate_differentiation_step(
    function_str: str, user_derivative: str, step_number: int
) -> Dict[str, Any]:
    """Validate a user's derivative answer."""

    try:
        x = symbols("x")
        function = sp.sympify(function_str)
        correct_derivative = diff(function, x)
        simplified_correct = simplify(correct_derivative)

        # Parse user's answer
        user_expr = sp.sympify(user_derivative)
        simplified_user = simplify(user_expr)

        # Check if they're equivalent
        is_correct = sp.simplify(simplified_correct - simplified_user) == 0

        return {
            "correct": is_correct,
            "correctAnswer": latex(simplified_correct),
            "userAnswer": latex(simplified_user),
            "correctStr": str(simplified_correct),
            "userStr": str(simplified_user),
        }

    except Exception as e:
        return {
            "correct": False,
            "error": f"Unable to parse expression: {str(e)}",
            "correctAnswer": "",
            "userAnswer": user_derivative,
        }
