'use client';

import {
    Card,
    CardBody,
    CardHeader,
    Select,
    SelectItem,
    Slider,
    Switch,
} from '@heroui/react';
import React from 'react';
import { WorkspaceCard } from '../workspace-card';

export const SettingsModule: React.FC = () => {
    const [difficulty, setDifficulty] = React.useState([50]);
    const [autoAdvance, setAutoAdvance] = React.useState(false);
    const [animations, setAnimations] = React.useState(true);
    const [theme, setTheme] = React.useState('dark');

    return (
        <WorkspaceCard
            title="Settings"
            description="Configure your math practice experience"
            module="Settings"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* General Settings */}
                <Card>
                    <CardHeader>
                        <h3 className="text-lg font-semibold">General</h3>
                    </CardHeader>
                    <CardBody className="space-y-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-medium">
                                    Auto-advance steps
                                </p>
                                <p className="text-sm text-default-500">
                                    Automatically show next step after delay
                                </p>
                            </div>
                            <Switch
                                isSelected={autoAdvance}
                                onValueChange={setAutoAdvance}
                            />
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-medium">Animations</p>
                                <p className="text-sm text-default-500">
                                    Enable transition animations
                                </p>
                            </div>
                            <Switch
                                isSelected={animations}
                                onValueChange={setAnimations}
                            />
                        </div>

                        <div>
                            <p className="font-medium mb-2">Theme</p>
                            <Select
                                selectedKeys={[theme]}
                                onSelectionChange={(keys) =>
                                    setTheme(Array.from(keys)[0] as string)
                                }
                                className="max-w-xs"
                            >
                                <SelectItem key="light">Light</SelectItem>
                                <SelectItem key="dark">Dark</SelectItem>
                                <SelectItem key="auto">Auto</SelectItem>
                            </Select>
                        </div>
                    </CardBody>
                </Card>

                {/* Difficulty Settings */}
                <Card>
                    <CardHeader>
                        <h3 className="text-lg font-semibold">Difficulty</h3>
                    </CardHeader>
                    <CardBody className="space-y-4">
                        <div>
                            <p className="font-medium mb-2">
                                Problem Difficulty
                            </p>
                            <Slider
                                label="Complexity Level"
                                step={10}
                                minValue={10}
                                maxValue={100}
                                value={difficulty}
                                onChange={setDifficulty}
                                className="max-w-md"
                            />
                            <p className="text-sm text-default-500 mt-1">
                                Higher values generate more complex problems
                            </p>
                        </div>
                    </CardBody>
                </Card>

                {/* Module Specific Settings */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <h3 className="text-lg font-semibold">
                            Module Preferences
                        </h3>
                    </CardHeader>
                    <CardBody>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <h4 className="font-medium">
                                    Matrix Operations
                                </h4>
                                <div className="space-y-1 text-sm">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="rounded"
                                            defaultChecked
                                        />
                                        Show step highlights
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="rounded"
                                            defaultChecked
                                        />
                                        Color code operations
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-medium">Calculus</h4>
                                <div className="space-y-1 text-sm">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="rounded"
                                            defaultChecked
                                        />
                                        Show intermediate steps
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="rounded"
                                        />
                                        Use simplified notation
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-medium">Algebra</h4>
                                <div className="space-y-1 text-sm">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="rounded"
                                            defaultChecked
                                        />
                                        Show rule applications
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="rounded"
                                        />
                                        Alternative methods
                                    </label>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </WorkspaceCard>
    );
};
