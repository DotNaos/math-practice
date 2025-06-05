export interface PowersRootsStep {
    step: number;
    description: string;
    expression: string;
    rule: string;
}

export interface PowersRootsProblem {
    expression: string;
    expressionStr: string;
    result: string;
    resultStr: string;
    steps: PowersRootsStep[];
}

export interface PowersRootsValidationRequest {
    expressionStr: string;
    userAnswer: string;
    stepNumber: number;
}

export interface PowersRootsValidationResponse {
    correct: boolean;
    correctAnswer: string;
    userAnswer: string;
    correctStr: string;
    userStr: string;
    error?: string;
}
