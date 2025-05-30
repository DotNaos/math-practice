import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";

interface MatrixWorkspaceProps {
  highlightMode: boolean;
}

export const MatrixWorkspace: React.FC<MatrixWorkspaceProps> = ({ highlightMode }) => {
  // In a real app, these would be dynamically generated
  const matrixA = [
    [2, 3, 1],
    [4, 0, 1]
  ];
  
  const matrixB = [
    [1, 2],
    [3, 1],
    [2, 0]
  ];
  
  const resultMatrix = [
    ["?", "?"],
    ["?", "?"]
  ];

  // For demonstration, we'll reveal some cells based on the current step
  const revealedCells = [
    { row: 0, col: 0, value: 13 },
    { row: 0, col: 1, value: 7 }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center text-lg font-medium">
        Multiply the following matrices
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Matrix A */}
        <div className="flex flex-col items-center">
          <div className="text-sm text-default-600 mb-1">Matrix A</div>
          <div className="border border-default-200 rounded-md p-2 bg-content2">
            <table className="matrix-table">
              <tbody>
                {matrixA.map((row, rowIndex) => (
                  <tr key={`a-row-${rowIndex}`}>
                    {row.map((cell, colIndex) => (
                      <td 
                        key={`a-cell-${rowIndex}-${colIndex}`}
                        className={`p-2 text-center ${
                          highlightMode && (rowIndex === 0) ? "bg-primary-100" : ""
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
          <div className="text-sm text-default-600 mb-1">Matrix B</div>
          <div className="border border-default-200 rounded-md p-2 bg-content2">
            <table className="matrix-table">
              <tbody>
                {matrixB.map((row, rowIndex) => (
                  <tr key={`b-row-${rowIndex}`}>
                    {row.map((cell, colIndex) => (
                      <td 
                        key={`b-cell-${rowIndex}-${colIndex}`}
                        className={`p-2 text-center ${
                          highlightMode && (colIndex === 0) ? "bg-primary-100" : ""
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
                {resultMatrix.map((row, rowIndex) => (
                  <tr key={`result-row-${rowIndex}`}>
                    {row.map((cell, colIndex) => {
                      const revealedCell = revealedCells.find(
                        c => c.row === rowIndex && c.col === colIndex
                      );
                      return (
                        <td 
                          key={`result-cell-${rowIndex}-${colIndex}`}
                          className={`p-2 text-center ${
                            revealedCell ? "bg-success-100" : "bg-default-100"
                          }`}
                        >
                          {revealedCell ? revealedCell.value : cell}
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
      
      <Divider />
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Current Step Calculation</h3>
        <div className="bg-content2 p-4 rounded-md">
          <p className="text-center">
            <span className={highlightMode ? "bg-primary-100 px-1" : ""}>
              A<sub>1,1</sub> × B<sub>1,1</sub> + A<sub>1,2</sub> × B<sub>2,1</sub> + A<sub>1,3</sub> × B<sub>3,1</sub>
            </span>
            <span className="mx-2">=</span>
            <span className={highlightMode ? "bg-primary-100 px-1" : ""}>
              2 × 1 + 3 × 3 + 1 × 2
            </span>
            <span className="mx-2">=</span>
            <span className="font-medium">13</span>
          </p>
        </div>
      </div>
    </div>
  );
};