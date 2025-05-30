import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";

interface Step {
  text: string;
}

interface SymbolicWorkspaceProps {
  problem: string;
  task: string;
  steps: Step[];
}

export const SymbolicWorkspace: React.FC<SymbolicWorkspaceProps> = ({
  problem,
  task,
  steps,
}) => {
  // In a real app, this would be controlled by the parent component
  const currentStep = 2; // Show first two steps

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="text-lg font-medium mb-2">{task}</div>
        <div className="text-xl font-semibold bg-content2 py-3 px-4 rounded-md inline-block">
          {problem}
        </div>
      </div>
      
      <Divider />
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Solution Steps</h3>
        
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`p-3 rounded-md transition-all duration-300 ${
                index < currentStep 
                  ? "bg-content2" 
                  : "bg-default-100 text-default-400"
              }`}
            >
              <div className="flex">
                <div className="font-medium mr-2">Step {index + 1}:</div>
                <div>{index < currentStep ? step.text : "???"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};