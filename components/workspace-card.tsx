'use client';

import {
    Button,
    Card,
    CardBody,
    Progress,
    Switch,
    Tooltip,
} from '@heroui/react';
import { Icon } from '@iconify/react';
import React from 'react';

interface WorkspaceCardProps {
    title: string;
    description: string;
    module: string;
    children: React.ReactNode;
    highlightMode?: boolean;
    onHighlightModeChange?: (value: boolean) => void;
    showHighlightToggle?: boolean;
    onGenerate?: () => void;
    onNext?: () => void;
    onPrevious?: () => void;
    onShowSolution?: () => void;
    currentStep?: number;
    totalSteps?: number;
    isGenerating?: boolean;
}

export const WorkspaceCard: React.FC<WorkspaceCardProps> = ({
    title,
    description,
    module,
    children,
    highlightMode = false,
    onHighlightModeChange,
    showHighlightToggle = false,
    onGenerate,
    onNext,
    onPrevious,
    onShowSolution,
    currentStep = 0,
    totalSteps = 1,
    isGenerating = false,
}) => {
    const [showCompletionMessage, setShowCompletionMessage] =
        React.useState(false);

    const handleGenerate = () => {
        if (onGenerate) {
            onGenerate();
        }
        setShowCompletionMessage(false);
    };

    const handleNext = () => {
        if (onNext) {
            onNext();
        }
        if (currentStep + 1 === totalSteps) {
            setShowCompletionMessage(true);
            setTimeout(() => {
                setShowCompletionMessage(false);
            }, 3000);
        }
    };

    const handlePrevious = () => {
        if (onPrevious) {
            onPrevious();
        }
        setShowCompletionMessage(false);
    };

    const handleShowSolution = () => {
        if (onShowSolution) {
            onShowSolution();
        }
        setShowCompletionMessage(true);
        setTimeout(() => {
            setShowCompletionMessage(false);
        }, 3000);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <div className="flex items-center text-sm text-default-500 mb-2">
                    <span>Home</span>
                    <Icon
                        icon="lucide:chevron-right"
                        className="mx-1"
                        width={16}
                    />
                    <span>{module}</span>
                </div>
                <h1 className="text-2xl font-bold mb-1">{title}</h1>
                <p className="text-default-600">{description}</p>
            </div>

            {/* Workspace Card */}
            <Card className="w-full">
                <CardBody className="space-y-6">{children}</CardBody>
            </Card>

            {/* Controls */}
            <div className="flex flex-wrap gap-3 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                    <Button
                        color="primary"
                        variant="flat"
                        startContent={
                            <Icon icon="lucide:refresh-cw" width={18} />
                        }
                        onPress={handleGenerate}
                        isLoading={isGenerating}
                    >
                        Generate
                    </Button>
                    <Button
                        variant="flat"
                        startContent={
                            <Icon icon="lucide:arrow-right" width={18} />
                        }
                        onPress={handleNext}
                        isDisabled={currentStep >= totalSteps}
                    >
                        Next
                    </Button>
                    <Button
                        variant="flat"
                        startContent={
                            <Icon icon="lucide:arrow-left" width={18} />
                        }
                        onPress={handlePrevious}
                        isDisabled={currentStep <= 0}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="flat"
                        startContent={<Icon icon="lucide:eye" width={18} />}
                        onPress={handleShowSolution}
                        isDisabled={currentStep === totalSteps}
                    >
                        Show Solution
                    </Button>
                </div>

                {showHighlightToggle && (
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-default-600">
                            Highlight mode:
                        </span>
                        <Tooltip
                            content={
                                highlightMode
                                    ? 'Highlight operands'
                                    : 'Highlight rows/columns'
                            }
                        >
                            <Switch
                                size="sm"
                                isSelected={highlightMode}
                                onValueChange={onHighlightModeChange}
                            />
                        </Tooltip>
                    </div>
                )}
            </div>

            {/* Progress */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-default-600">
                        {currentStep} of {totalSteps} revealed
                    </span>
                    {showCompletionMessage && (
                        <span className="text-sm text-success flex items-center gap-1">
                            <Icon icon="lucide:check-circle" width={16} />
                            Solution complete!
                        </span>
                    )}
                </div>
                <Progress
                    aria-label="Solution progress"
                    value={(currentStep / totalSteps) * 100}
                    className="max-w-full"
                    color={currentStep === totalSteps ? 'success' : 'primary'}
                />
            </div>
        </div>
    );
};
