import { ModuleType } from '@/app/page';
import { Button, Tooltip } from '@heroui/react';
import { Icon } from '@iconify/react';
import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
    activeModule: ModuleType;
    setActiveModule: (module: ModuleType) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    isSidebarOpen,
    setIsSidebarOpen,
    activeModule,
    setActiveModule,
}) => {
    const modules = [
        { id: 'matrices', label: 'Matrices', icon: 'lucide:grid' },
        {
            id: 'differentiation',
            label: 'Differentiation',
            icon: 'lucide:function-square',
        },
        { id: 'integration', label: 'Integration', icon: 'lucide:sigma' },
        { id: 'simplification', label: 'Simplification', icon: 'lucide:equal' },
        {
            id: 'powers-roots',
            label: 'Powers & Roots',
            icon: 'lucide:radical',
        },
        { id: 'settings', label: 'Settings', icon: 'lucide:settings' },
    ];

    return (
        <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`${
                    isSidebarOpen ? 'w-64' : 'w-0 -ml-64'
                } lg:ml-0 flex-shrink-0 border-r border-divider bg-content1 transition-all duration-300 ease-in-out overflow-hidden`}
            >
                <div className="flex flex-col h-full py-4">
                    <div className="px-4 mb-6 flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Modules</h2>
                        <Button
                            isIconOnly
                            size="sm"
                            variant="light"
                            onPress={() => setIsSidebarOpen(false)}
                            className="lg:hidden"
                            aria-label="Close sidebar"
                        >
                            <Icon icon="lucide:x" width={18} />
                        </Button>
                    </div>
                    <nav className="flex-1">
                        <ul className="space-y-1 px-2">
                            {modules.map((module) => (
                                <li key={module.id}>
                                    <Button
                                        fullWidth
                                        variant="flat"
                                        color={
                                            activeModule === module.id
                                                ? 'primary'
                                                : 'default'
                                        }
                                        className={`justify-start ${
                                            activeModule === module.id
                                                ? ''
                                                : 'bg-transparent'
                                        }`}
                                        startContent={
                                            <Icon
                                                icon={module.icon}
                                                width={20}
                                            />
                                        }
                                        onPress={() =>
                                            setActiveModule(
                                                module.id as ModuleType
                                            )
                                        }
                                    >
                                        {module.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-auto relative">
                {!isSidebarOpen && (
                    <Tooltip content="Open sidebar" placement="right">
                        <Button
                            isIconOnly
                            variant="flat"
                            className="absolute top-4 left-4 z-10 lg:hidden"
                            onPress={() => setIsSidebarOpen(true)}
                            aria-label="Open sidebar"
                        >
                            <Icon icon="lucide:menu" width={20} />
                        </Button>
                    </Tooltip>
                )}
                <div className="container mx-auto px-4 py-6 max-w-5xl">
                    {children}
                </div>
            </main>
        </div>
    );
};
