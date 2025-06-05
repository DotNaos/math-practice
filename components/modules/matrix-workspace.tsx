'use client';

import { Divider } from '@heroui/react';
import React from 'react';
import { LatexExpression, LatexMatrix } from '../ui/latexMatrix';

interface MatrixProblem {
    matrixA: number[][];
    matrixB: number[][];
    result: (number | string)[][];
    steps: {
        row: number;
        col: number;
        calculation: string;
        value: number;
    }[];
}

interface MatrixWorkspaceProps {
    problem: MatrixProblem | null;
    currentStep: number;
    highlightMode: boolean;
}

export const MatrixWorkspace: React.FC<MatrixWorkspaceProps> = ({
    problem,
    currentStep,
    highlightMode,
}) => {
    if (!problem) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-center">
                    <p className="text-default-500">
                        Loading matrix problem...
                    </p>
                </div>
            </div>
        );
    }

    const { matrixA, matrixB, result, steps } = problem;
    const currentStepData = steps[currentStep - 1];

    // Create result matrix with revealed values
    const displayResult = result.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
            const stepIndex = steps.findIndex(
                (step) => step.row === rowIndex && step.col === colIndex
            );
            if (stepIndex < currentStep) {
                return steps[stepIndex].value;
            }
            return '?';
        })
    );

    // Calculate revealed cells for highlighting
    const revealedCells = steps.slice(0, currentStep).map((step) => ({
        row: step.row,
        col: step.col,
    }));

    return (
        <div className="space-y-6 min-h-96">
            <div className="text-center text-lg font-medium">
                Multiply the following matrices
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                {/* Matrix A */}
                <LatexMatrix
                    matrix={matrixA}
                    label="Matrix A"
                    highlightRow={
                        highlightMode && currentStepData
                            ? currentStepData.row
                            : undefined
                    }
                    className="flex-shrink-0"
                />

                <div className="text-3xl font-bold">×</div>

                {/* Matrix B */}
                <LatexMatrix
                    matrix={matrixB}
                    label="Matrix B"
                    highlightCol={
                        highlightMode && currentStepData
                            ? currentStepData.col
                            : undefined
                    }
                    className="flex-shrink-0"
                />

                <div className="text-3xl font-bold">=</div>

                {/* Result Matrix */}
                <LatexMatrix
                    matrix={displayResult}
                    label="Result"
                    revealedCells={revealedCells}
                    currentCell={
                        currentStepData
                            ? {
                                  row: currentStepData.row,
                                  col: currentStepData.col,
                              }
                            : undefined
                    }
                    className="flex-shrink-0"
                />
            </div>

            {currentStepData && (
                <>
                    <Divider />

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">
                            Current Step Calculation
                        </h3>
                        <div className="bg-content2 p-4 rounded-md">
                            <div className="text-center">
                                <LatexExpression
                                    expression={`${currentStepData.calculation
                                        .replace(/×/g, ' \\cdot ')
                                        .replace(/\+/g, ' + ')} = ${
                                        currentStepData.value
                                    }`}
                                    inline={false}
                                    className={
                                        highlightMode
                                            ? 'bg-primary-50 px-2 py-1 rounded'
                                            : ''
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
