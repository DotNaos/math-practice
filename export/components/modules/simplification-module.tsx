import React from "react";
import { WorkspaceCard } from "../workspace-card";
import { SymbolicWorkspace } from "./symbolic-workspace";

export const SimplificationModule: React.FC = () => {
  return (
    <WorkspaceCard
      title="Algebraic Simplification Trainer"
      description="Practice simplifying algebraic expressions"
      module="Simplification"
    >
      <SymbolicWorkspace 
        problem="(3x^2 + 2x - 1)(2x - 3)"
        task="Expand and simplify the expression"
        steps={[
          { text: "Use the distributive property: (a + b + c)(d) = ad + bd + cd" },
          { text: "(3x^2)(2x) + (2x)(2x) + (-1)(2x)" },
          { text: "6x^3 + 4x^2 - 2x" },
          { text: "Now distribute with -3: (3x^2)(-3) + (2x)(-3) + (-1)(-3)" },
          { text: "-9x^2 - 6x + 3" },
          { text: "Combine like terms: 6x^3 + 4x^2 - 9x^2 - 2x - 6x + 3" },
          { text: "6x^3 + (4 - 9)x^2 + (-2 - 6)x + 3" },
          { text: "6x^3 - 5x^2 - 8x + 3" }
        ]}
      />
    </WorkspaceCard>
  );
};