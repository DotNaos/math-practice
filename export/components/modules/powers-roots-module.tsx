import React from "react";
import { WorkspaceCard } from "../workspace-card";
import { SymbolicWorkspace } from "./symbolic-workspace";

export const PowersRootsModule: React.FC = () => {
  return (
    <WorkspaceCard
      title="Powers & Roots Trainer"
      description="Practice working with exponents and radicals"
      module="Powers & Roots"
    >
      <SymbolicWorkspace 
        problem="Simplify: (x^2 · x^3)^2 ÷ x^5"
        task="Apply exponent rules to simplify the expression"
        steps={[
          { text: "First, use the product rule inside the parentheses: x^2 · x^3 = x^(2+3) = x^5" },
          { text: "Now we have: (x^5)^2 ÷ x^5" },
          { text: "Apply the power rule: (x^5)^2 = x^(5·2) = x^10" },
          { text: "Now we have: x^10 ÷ x^5" },
          { text: "Apply the quotient rule: x^10 ÷ x^5 = x^(10-5) = x^5" },
          { text: "Final answer: x^5" }
        ]}
      />
    </WorkspaceCard>
  );
};