import random
from typing import Any, Dict

import sympy as sp
from sympy import integrate, latex, simplify, symbols


def generate_integration_problem() -> Dict[str, Any]:
    """Generate an integration problem with step-by-step solution."""

    x = symbols("x")
    function = None

    # Define different types of functions to integrate
    function_types = [
        "polynomial",
        "exponential",
        "trigonometric",
        "logarithmic",
        "power_rule",
        "substitution",
    ]

    function_type = random.choice(function_types)

    if function_type == "polynomial":
        # Generate polynomial: ax^n + bx^m + c
        a = random.randint(1, 5)
        n = random.randint(1, 4)
        b = random.randint(-3, 3)
        m = random.randint(0, n - 1) if n > 1 else 0
        c = random.randint(-5, 5)

        if b == 0 and m > 0:
            b = 1

        if m == 0:
            function = a * x**n + c
        else:
            function = a * x**n + b * x**m + c

    elif function_type == "exponential":
        # Generate exponential: a*e^(bx) or simple exponentials
        a = random.randint(1, 3)
        b = random.randint(1, 3)

        if random.choice([True, False]):
            function = a * sp.exp(b * x)
        else:
            function = a * sp.exp(x)

    elif function_type == "trigonometric":
        # Generate trig functions: a*sin(bx), a*cos(bx)
        a = random.randint(1, 3)
        b = random.randint(1, 3)

        trig_choice = random.choice(["sin", "cos"])
        if trig_choice == "sin":
            function = a * sp.sin(b * x)
        else:
            function = a * sp.cos(b * x)

    elif function_type == "logarithmic":
        # Generate simple functions that integrate to logarithms: a/x
        a = random.randint(1, 5)
        function = a / x

    elif function_type == "power_rule":
        # Generate functions using power rule: ax^n where n != -1
        a = random.randint(1, 5)
        n = random.choice([i for i in range(-3, 5) if i != -1])  # Exclude -1
        function = a * x**n

    elif function_type == "substitution":
        # Generate functions needing simple substitution: (ax + b)^n, sin(ax + b), etc.
        a = random.randint(1, 3)
        b = random.randint(1, 3)
        n = random.randint(2, 4)

        sub_choice = random.choice(["polynomial", "sin", "cos", "exp"])
        if sub_choice == "polynomial":
            function = (a * x + b) ** n
        elif sub_choice == "sin":
            function = sp.sin(a * x + b)
        elif sub_choice == "cos":
            function = sp.cos(a * x + b)
        else:
            function = sp.exp(a * x + b)

    # Fallback to simple polynomial if function is still None
    if function is None:
        function = x**2 + x
        function_type = "polynomial"

    # Calculate the integral (indefinite)
    integral = integrate(function, x)
    simplified_integral = simplify(integral)

    # Generate step-by-step solution
    steps = []

    # Step 1: Show the original function
    steps.append(
        {
            "step": 1,
            "description": "Original function",
            "expression": f"\\int {latex(function)} \\, dx",
            "rule": "Given",
        }
    )

    # Step 2: Apply the appropriate rule
    rule_description = _get_integration_rule_description(function_type)
    steps.append(
        {
            "step": 2,
            "description": f"Apply {rule_description}",
            "expression": f"{latex(integral)} + C",
            "rule": rule_description,
        }
    )

    # Step 3: Simplify if needed
    if integral != simplified_integral:
        steps.append(
            {
                "step": 3,
                "description": "Simplify",
                "expression": f"{latex(simplified_integral)} + C",
                "rule": "Algebraic simplification",
            }
        )

    return {
        "function": latex(function),
        "functionStr": str(function),
        "integral": latex(simplified_integral),
        "integralStr": str(simplified_integral),
        "functionType": function_type,
        "steps": steps,
    }


def _get_integration_rule_description(function_type: str) -> str:
    """Get the integration rule description for the function type."""
    rules = {
        "polynomial": "Power Rule: ∫x^n dx = x^(n+1)/(n+1) + C",
        "exponential": "Exponential Rule: ∫e^x dx = e^x + C, ∫e^(ax) dx = e^(ax)/a + C",
        "trigonometric": "Trigonometric Rules: ∫sin(x) dx = -cos(x) + C, ∫cos(x) dx = sin(x) + C",
        "logarithmic": "Logarithmic Rule: ∫1/x dx = ln|x| + C",
        "power_rule": "Power Rule: ∫x^n dx = x^(n+1)/(n+1) + C (n ≠ -1)",
        "substitution": "Substitution Method: ∫f(g(x))g'(x) dx = F(g(x)) + C",
    }
    return rules.get(function_type, "Integration rules")


def validate_integration_step(
    function_str: str, user_integral: str, step_number: int
) -> Dict[str, Any]:
    """Validate a user's integral answer."""

    try:
        x = symbols("x")
        function = sp.sympify(function_str)
        correct_integral = integrate(function, x)
        simplified_correct = simplify(correct_integral)

        # Parse user's answer (remove +C if present)
        user_input = user_integral.replace("+C", "").replace("+ C", "").strip()
        user_expr = sp.sympify(user_input)
        simplified_user = simplify(user_expr)

        # Check if they're equivalent (up to a constant)
        # We do this by taking the derivative and comparing
        correct_derivative = sp.diff(simplified_correct, x)
        user_derivative = sp.diff(simplified_user, x)

        is_correct = sp.simplify(correct_derivative - user_derivative) == 0

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
            "userAnswer": user_integral,
        }
