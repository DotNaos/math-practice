'use client';

import { Divider } from '@heroui/react';
import React from 'react';

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

    return (
        <div className="space-y-6">
            <div className="text-center text-lg font-medium">
                Multiply the following matrices
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                {/* Matrix A */}
                <div className="flex flex-col items-center">
                    <div className="text-sm text-default-600 mb-1">
                        Matrix A
                    </div>
                    <div className="border border-default-200 rounded-md p-2 bg-content2">
                        <table className="matrix-table">
                            <tbody>
                                {matrixA.map((row, rowIndex) => (
                                    <tr key={`a-row-${rowIndex}`}>
                                        {row.map((cell, colIndex) => (
                                            <td
                                                key={`a-cell-${rowIndex}-${colIndex}`}
                                                className={`p-2 text-center min-w-[40px] ${
                                                    highlightMode &&
                                                    currentStepData &&
                                                    currentStepData.row ===
                                                        rowIndex
                                                        ? 'bg-primary-100'
                                                        : ''
                                                }`}
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="text-2xl font-bold">×</div>

                {/* Matrix B */}
                <div className="flex flex-col items-center">
                    <div className="text-sm text-default-600 mb-1">
                        Matrix B
                    </div>
                    <div className="border border-default-200 rounded-md p-2 bg-content2">
                        <table className="matrix-table">
                            <tbody>
                                {matrixB.map((row, rowIndex) => (
                                    <tr key={`b-row-${rowIndex}`}>
                                        {row.map((cell, colIndex) => (
                                            <td
                                                key={`b-cell-${rowIndex}-${colIndex}`}
                                                className={`p-2 text-center min-w-[40px] ${
                                                    highlightMode &&
                                                    currentStepData &&
                                                    currentStepData.col ===
                                                        colIndex
                                                        ? 'bg-primary-100'
                                                        : ''
                                                }`}
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="text-2xl font-bold">=</div>

                {/* Result Matrix */}
                <div className="flex flex-col items-center">
                    <div className="text-sm text-default-600 mb-1">Result</div>
                    <div className="border border-default-200 rounded-md p-2 bg-content2">
                        <table className="matrix-table">
                            <tbody>
                                {displayResult.map((row, rowIndex) => (
                                    <tr key={`result-row-${rowIndex}`}>
                                        {row.map((cell, colIndex) => {
                                            const isRevealed =
                                                typeof cell === 'number';
                                            const isCurrentTarget =
                                                currentStepData &&
                                                currentStepData.row ===
                                                    rowIndex &&
                                                currentStepData.col ===
                                                    colIndex;

                                            return (
                                                <td
                                                    key={`result-cell-${rowIndex}-${colIndex}`}
                                                    className={`p-2 text-center min-w-[40px] ${
                                                        isCurrentTarget
                                                            ? 'bg-warning-100 border-2 border-warning-300'
                                                            : isRevealed
                                                            ? 'bg-success-100'
                                                            : 'bg-default-100'
                                                    }`}
                                                >
                                                    {cell}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {currentStepData && (
                <>
                    <Divider />

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">
                            Current Step Calculation
                        </h3>
                        <div className="bg-content2 p-4 rounded-md">
                            <p className="text-center font-mono">
                                <span
                                    className={
                                        highlightMode
                                            ? 'bg-primary-100 px-1 rounded'
                                            : ''
                                    }
                                >
                                    {currentStepData.calculation}
                                </span>
                                <span className="mx-2">=</span>
                                <span className="font-medium text-success">
                                    {currentStepData.value}
                                </span>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
