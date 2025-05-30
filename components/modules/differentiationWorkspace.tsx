'use client';

import {
    DifferentiationProblem,
    DifferentiationStep,
} from '@/types/differentiation';
import { Card, CardBody, CardHeader } from '@heroui/react';
import 'katex/dist/katex.min.css';
import React from 'react';
import { BlockMath } from 'react-katex';

interface DifferentiationWorkspaceProps {
    problem: DifferentiationProblem | null;
    currentStep: number;
    highlightMode: boolean;
}

export const DifferentiationWorkspace: React.FC<
    DifferentiationWorkspaceProps
> = ({ problem, currentStep, highlightMode }) => {
    if (!problem) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="text-center">
                    <p className="text-default-500 text-lg mb-2">
                        No differentiation problem loaded
                    </p>
                    <p className="text-default-400">
                        Click "Generate" to create a new problem
                    </p>
                </div>
            </div>
        );
    }

    const renderStep = (step: DifferentiationStep, index: number) => {
        const isCurrentStep = index === currentStep;
        const isRevealed = index < currentStep;

        return (
            <Card
                key={step.step}
                className={`mb-4 transition-all duration-300 ${
                    isCurrentStep && highlightMode
                        ? 'ring-2 ring-primary bg-primary/5'
                        : isRevealed
                        ? 'bg-success/5 border-success/20'
                        : 'bg-default/5'
                }`}
            >
                <CardHeader className="pb-2">
                    <div className="flex items-center justify-between w-full">
                        <h4 className="text-sm font-semibold">
                            Step {step.step}: {step.description}
                        </h4>
                        <span className="text-xs text-default-500">
                            {step.rule}
                        </span>
                    </div>
                </CardHeader>
                <CardBody className="pt-0">
                    <div
                        className={`transition-opacity duration-300 ${
                            isCurrentStep || isRevealed
                                ? 'opacity-100'
                                : 'opacity-30'
                        }`}
                    >
                        <BlockMath math={step.expression} />
                    </div>
                </CardBody>
            </Card>
        );
    };

    return (
        <div className="space-y-6">
            {/* Problem Statement */}
            <Card>
                <CardHeader>
                    <h3 className="text-lg font-semibold">
                        Find the derivative of the following function:
                    </h3>
                </CardHeader>
                <CardBody>
                    <div className="text-center">
                        <BlockMath math={`f(x) = ${problem.function}`} />
                    </div>
                </CardBody>
            </Card>

            {/* Function Type Info */}
            <Card className="bg-info/10 border-info/20">
                <CardBody>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-info">
                            Function Type:
                        </span>
                        <span className="text-sm capitalize">
                            {problem.functionType.replace('_', ' ')}
                        </span>
                    </div>
                </CardBody>
            </Card>

            {/* Steps */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Solution Steps:</h3>

                {problem.steps.map((step, index) => renderStep(step, index))}

                {/* Final answer */}
                {currentStep >= problem.steps.length && (
                    <Card className="bg-success/10 border-success/20">
                        <CardHeader>
                            <h4 className="text-lg font-semibold text-success">
                                Final Answer
                            </h4>
                        </CardHeader>
                        <CardBody>
                            <div className="text-center">
                                <BlockMath
                                    math={`f'(x) = ${problem.derivative}`}
                                />
                            </div>
                        </CardBody>
                    </Card>
                )}
            </div>

            {/* Progress indicator */}
            <div className="mt-6">
                <div className="flex items-center justify-between text-sm text-default-500">
                    <span>
                        Step {Math.min(currentStep + 1, problem.steps.length)}{' '}
                        of {problem.steps.length}
                    </span>
                    <span>
                        {Math.round((currentStep / problem.steps.length) * 100)}
                        % Complete
                    </span>
                </div>
                <div className="w-full bg-default-200 rounded-full h-2 mt-2">
                    <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{
                            width: `${
                                (currentStep / problem.steps.length) * 100
                            }%`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
