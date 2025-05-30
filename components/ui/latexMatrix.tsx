'use client';

import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';

interface LatexMatrixProps {
    matrix: (number | string)[][];
    label?: string;
    highlightRow?: number;
    highlightCol?: number;
    revealedCells?: { row: number; col: number }[];
    currentCell?: { row: number; col: number };
    className?: string;
}

export const LatexMatrix: React.FC<LatexMatrixProps> = ({
    matrix,
    label,
    highlightRow,
    highlightCol,
    revealedCells = [],
    currentCell,
    className = '',
}) => {
    const generateMatrixLatex = () => {
        // Create matrix content with simple color highlighting
        const rows = matrix
            .map((row, rowIndex) => {
                return row
                    .map((cell, colIndex) => {
                        let cellValue = String(cell);

                        // Apply highlighting using simple KaTeX color commands
                        const isHighlightedRow =
                            highlightRow !== undefined &&
                            rowIndex === highlightRow;
                        const isHighlightedCol =
                            highlightCol !== undefined &&
                            colIndex === highlightCol;
                        const isCurrentCell =
                            currentCell &&
                            currentCell.row === rowIndex &&
                            currentCell.col === colIndex;
                        const isRevealed = revealedCells.some(
                            (c) => c.row === rowIndex && c.col === colIndex
                        );

                        // Apply highlighting with supported KaTeX commands
                        if (isCurrentCell) {
                            cellValue = `\\boxed{\\color{orange}{${cellValue}}}`;
                        } else if (isRevealed) {
                            cellValue = `\\mathbf{\\color{green}{${cellValue}}}`;
                        } else if (isHighlightedRow || isHighlightedCol) {
                            cellValue = `\\color{blue}{${cellValue}}`;
                        }

                        return cellValue;
                    })
                    .join(' & ');
            })
            .join(' \\\\ ');

        // Wrap in matrix environment
        return `\\begin{bmatrix} ${rows} \\end{bmatrix}`;
    };

    const matrixLatex = generateMatrixLatex();

    return (
        <div className={`latex-matrix-container ${className}`}>
            <div className="flex flex-col items-center">
                {label && (
                    <div className="text-sm text-default-600 mb-2">{label}</div>
                )}
                <div className="bg-content2 rounded-lg p-4 border border-default-200">
                    <BlockMath math={matrixLatex} />
                </div>
            </div>
        </div>
    );
};

interface LatexExpressionProps {
    expression: string;
    className?: string;
    inline?: boolean;
}

export const LatexExpression: React.FC<LatexExpressionProps> = ({
    expression,
    className = '',
    inline = true,
}) => {
    return (
        <div className={className}>
            {inline ? (
                <InlineMath math={expression} />
            ) : (
                <BlockMath math={expression} />
            )}
        </div>
    );
};
