export interface DifferentiationStep {
    step: number;
    description: string;
    expression: string;
    rule: string;
}

export interface DifferentiationProblem {
    function: string;
    functionStr: string;
    derivative: string;
    derivativeStr: string;
    functionType: string;
    steps: DifferentiationStep[];
}

export interface DifferentiationValidationRequest {
    functionStr: string;
    userDerivative: string;
    stepNumber: number;
}

export interface DifferentiationValidationResponse {
    correct: boolean;
    correctAnswer: string;
    userAnswer: string;
    correctStr: string;
    userStr: string;
    error?: string;
}
