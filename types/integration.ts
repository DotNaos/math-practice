export interface IntegrationStep {
    step: number;
    description: string;
    expression: string;
    rule: string;
}

export interface IntegrationProblem {
    function: string;
    functionStr: string;
    integral: string;
    integralStr: string;
    functionType: string;
    steps: IntegrationStep[];
}

export interface IntegrationValidationRequest {
    functionStr: string;
    userIntegral: string;
    stepNumber: number;
}

export interface IntegrationValidationResponse {
    correct: boolean;
    correctAnswer: string;
    userAnswer: string;
    correctStr: string;
    userStr: string;
    error?: string;
}
