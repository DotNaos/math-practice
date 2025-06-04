'use client';

import { SimplificationProblem } from '@/types/simplification';
import React from 'react';
import { WorkspaceCard } from '../workspace-card';
import { SimplificationWorkspace } from './simplificationWorkspace';

export const SimplificationModule: React.FC = () => {
    const [highlightMode, setHighlightMode] = React.useState(false);
    const [problem, setProblem] = React.useState<SimplificationProblem | null>(null);
    const [currentStep, setCurrentStep] = React.useState(0);
    const [isGenerating, setIsGenerating] = React.useState(false);

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const response = await fetch('/api/math/simplification/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                const data = await response.json();
                setProblem(data);
                setCurrentStep(0);
            }
        } catch (error) {
            console.error('Failed to generate simplification problem:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleNext = () => {
        if (problem && currentStep < problem.steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleShowSolution = () => {
        if (problem) {
            setCurrentStep(problem.steps.length);
        }
    };

    React.useEffect(() => {
        handleGenerate();
    }, []);

    return (
        <WorkspaceCard
            title="Simplification Trainer"
            description="Practice algebraic simplification step by step"
            module="Simplification"
            highlightMode={highlightMode}
            onHighlightModeChange={setHighlightMode}
            showHighlightToggle={true}
            onGenerate={handleGenerate}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onShowSolution={handleShowSolution}
            currentStep={currentStep}
            totalSteps={problem?.steps.length || 1}
            isGenerating={isGenerating}
        >
            <SimplificationWorkspace
                problem={problem}
                currentStep={currentStep}
                highlightMode={highlightMode}
            />
        </WorkspaceCard>
    );
};
