import React from "react";
import { WorkspaceCard } from "../workspace-card";
import { SymbolicWorkspace } from "./symbolic-workspace";

export const IntegrationModule: React.FC = () => {
  return (
    <WorkspaceCard
      title="Integration Trainer"
      description="Practice integrating expressions step by step"
      module="Integration"
    >
      <SymbolicWorkspace 
        problem="∫(2x^3 + 4x - 5) dx"
        task="Find the indefinite integral"
        steps={[
          { text: "Integrate each term using the power rule: ∫x^n dx = x^(n+1)/(n+1) + C" },
          { text: "∫2x^3 dx = 2 · x^4/4 = x^4/2" },
          { text: "∫4x dx = 4 · x^2/2 = 2x^2" },
          { text: "∫(-5) dx = -5x" },
          { text: "Add the constant of integration: + C" },
          { text: "∫(2x^3 + 4x - 5) dx = x^4/2 + 2x^2 - 5x + C" }
        ]}
      />
    </WorkspaceCard>
  );
};