'use client';

import React from 'react';
import { WorkspaceCard } from '../workspace-card';

export const DifferentiationModule: React.FC = () => {
    const [highlightMode, setHighlightMode] = React.useState(false);

    return (
        <WorkspaceCard
            title="Differentiation Trainer"
            description="Practice symbolic differentiation step by step"
            module="Differentiation"
            highlightMode={highlightMode}
            onHighlightModeChange={setHighlightMode}
            showHighlightToggle={true}
        >
            <div className="flex items-center justify-center h-64">
                <div className="text-center">
                    <p className="text-default-500 text-lg mb-2">
                        Differentiation Module
                    </p>
                    <p className="text-default-400">
                        Coming soon - symbolic differentiation with step-by-step
                        solutions
                    </p>
                </div>
            </div>
        </WorkspaceCard>
    );
};
