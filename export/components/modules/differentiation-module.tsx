import React from "react";
import { WorkspaceCard } from "../workspace-card";
import { SymbolicWorkspace } from "./symbolic-workspace";

export const DifferentiationModule: React.FC = () => {
  return (
    <WorkspaceCard
      title="Differentiation Trainer"
      description="Practice differentiating expressions step by step"
      module="Differentiation"
    >
      <SymbolicWorkspace 
        problem="f(x) = 3x^4 - 2x^2 + 5x - 7"
        task="Find f'(x)"
        steps={[
          { text: "Differentiate each term using the power rule: d/dx(x^n) = nx^(n-1)" },
          { text: "d/dx(3x^4) = 3 · 4x^3 = 12x^3" },
          { text: "d/dx(-2x^2) = -2 · 2x^1 = -4x" },
          { text: "d/dx(5x) = 5 · 1x^0 = 5" },
          { text: "d/dx(-7) = 0" },
          { text: "f'(x) = 12x^3 - 4x + 5" }
        ]}
      />
    </WorkspaceCard>
  );
};