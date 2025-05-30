'use client';

import React from 'react';
import { WorkspaceCard } from '../workspace-card';

export const SimplificationModule: React.FC = () => {
    const [highlightMode, setHighlightMode] = React.useState(false);

    return (
        <WorkspaceCard
            title="Simplification Trainer"
            description="Practice algebraic simplification step by step"
            module="Simplification"
            highlightMode={highlightMode}
            onHighlightModeChange={setHighlightMode}
            showHighlightToggle={true}
        >
            <div className="flex items-center justify-center h-64">
                <div className="text-center">
                    <p className="text-default-500 text-lg mb-2">
                        Simplification Module
                    </p>
                    <p className="text-default-400">
                        Coming soon - algebraic simplification with step-by-step
                        solutions
                    </p>
                </div>
            </div>
        </WorkspaceCard>
    );
};
