'use client';

import { DifferentiationProblem } from '@/types/differentiation';
import React from 'react';
import { WorkspaceCard } from '../workspace-card';
import { DifferentiationWorkspace } from './differentiationWorkspace';

export const DifferentiationModule: React.FC = () => {
    const [highlightMode, setHighlightMode] = React.useState(false);
    const [problem, setProblem] = React.useState<DifferentiationProblem | null>(
        null
    );
    const [currentStep, setCurrentStep] = React.useState(0);
    const [isGenerating, setIsGenerating] = React.useState(false);

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const response = await fetch('/api/math/differentiation/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setProblem(data);
                setCurrentStep(0);
            }
        } catch (error) {
            console.error('Failed to generate differentiation problem:', error);
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
        handleGenerate(); // Generate initial problem
    }, []);

    return (
        <WorkspaceCard
            title="Differentiation Trainer"
            description="Practice symbolic differentiation step by step"
            module="Differentiation"
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
            <DifferentiationWorkspace
                problem={problem}
                currentStep={currentStep}
                highlightMode={highlightMode}
            />
        </WorkspaceCard>
    );
};
