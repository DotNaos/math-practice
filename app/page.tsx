'use client';

import { MainLayout } from '@/components/main-layout';
import { DifferentiationModule } from '@/components/modules/differentiation-module';
import { IntegrationModule } from '@/components/modules/integration-module';
import { MatricesModule } from '@/components/modules/matrices-module';
import { PowersRootsModule } from '@/components/modules/powers-roots-module';
import { SettingsModule } from '@/components/modules/settings-module';
import { SimplificationModule } from '@/components/modules/simplification-module';
import { MODULES, ModuleType } from '@/types/modules';
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarBrand,
    NavbarContent,
} from '@heroui/react';
import { Icon } from '@iconify/react';
import React from 'react';

export default function Page() {
    const [activeModule, setActiveModule] =
        React.useState<ModuleType>('matrices');
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const renderModule = () => {
        const components: Record<ModuleType, React.ReactNode> = {
            matrices: <MatricesModule />,
            differentiation: <DifferentiationModule />,
            integration: <IntegrationModule />,
            simplification: <SimplificationModule />,
            'powers-roots': <PowersRootsModule />,
            settings: <SettingsModule />,
        };
        return components[activeModule] || <MatricesModule />;
    };

    const moduleOptions = MODULES;

    return (
        <div className="flex flex-col h-dvh bg-background">
            <Navbar maxWidth="full" className="border-b border-divider">
                <NavbarBrand>
                    <Button
                        isIconOnly
                        variant="light"
                        className="lg:hidden"
                        onPress={toggleSidebar}
                        aria-label="Toggle sidebar"
                    >
                        <Icon icon="lucide:menu" width={24} />
                    </Button>
                    <div className="flex items-center gap-2">
                        <Icon
                            icon="lucide:calculator"
                            className="text-primary"
                            width={28}
                            height={28}
                        />
                        <p className="font-bold text-inherit text-lg">
                            MathPractice
                        </p>
                    </div>
                </NavbarBrand>
                <NavbarContent justify="end">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="flat"
                                endContent={
                                    <Icon
                                        icon="lucide:chevron-down"
                                        width={16}
                                    />
                                }
                            >
                                {moduleOptions.find(
                                    (m) => m.key === activeModule
                                )?.label || 'Select Module'}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Module selection"
                            onAction={(key) =>
                                setActiveModule(key as ModuleType)
                            }
                            selectedKeys={[activeModule]}
                            selectionMode="single"
                        >
                            {moduleOptions.map((option) => (
                                <DropdownItem key={option.key}>
                                    {option.label}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            </Navbar>

            <MainLayout
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                activeModule={activeModule}
                setActiveModule={setActiveModule}
            >
                {renderModule()}
            </MainLayout>
        </div>
    );
}
