export interface SimplificationStep {
    step: number;
    description: string;
    expression: string;
    rule: string;
}

export interface SimplificationProblem {
    expression: string;
    expressionStr: string;
    simplified: string;
    simplifiedStr: string;
    steps: SimplificationStep[];
}

export interface SimplificationValidationRequest {
    expressionStr: string;
    userAnswer: string;
    stepNumber: number;
}

export interface SimplificationValidationResponse {
    correct: boolean;
    correctAnswer: string;
    userAnswer: string;
    correctStr: string;
    userStr: string;
    error?: string;
}
