import React from "react";
import { WorkspaceCard } from "../workspace-card";
import { MatrixWorkspace } from "./matrix-workspace";

export const MatricesModule: React.FC = () => {
  const [highlightMode, setHighlightMode] = React.useState(false);
  
  return (
    <WorkspaceCard
      title="Matrix Multiplication Trainer"
      description="Practice multiplying matrices step by step"
      module="Matrices"
      highlightMode={highlightMode}
      onHighlightModeChange={setHighlightMode}
      showHighlightToggle={true}
    >
      <MatrixWorkspace highlightMode={highlightMode} />
    </WorkspaceCard>
  );
};