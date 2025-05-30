'use client';

import React from 'react';
import { WorkspaceCard } from '../workspace-card';

export const PowersRootsModule: React.FC = () => {
    const [highlightMode, setHighlightMode] = React.useState(false);

    return (
        <WorkspaceCard
            title="Powers & Roots Trainer"
            description="Practice calculations with powers and roots step by step"
            module="Powers & Roots"
            highlightMode={highlightMode}
            onHighlightModeChange={setHighlightMode}
            showHighlightToggle={true}
        >
            <div className="flex items-center justify-center h-64">
                <div className="text-center">
                    <p className="text-default-500 text-lg mb-2">
                        Powers & Roots Module
                    </p>
                    <p className="text-default-400">
                        Coming soon - power and root calculations with
                        step-by-step solutions
                    </p>
                </div>
            </div>
        </WorkspaceCard>
    );
};
