export type ModuleType =
    | 'matrices'
    | 'differentiation'
    | 'integration'
    | 'simplification'
    | 'powers-roots'
    | 'settings';

export interface ModuleOption {
    id: ModuleType;
    label: string;
    icon: string;
}

export const MODULES: ModuleOption[] = [
    { id: 'matrices', label: 'Matrices', icon: 'lucide:grid' },
    {
        id: 'differentiation',
        label: 'Differentiation',
        icon: 'lucide:function-square',
    },
    { id: 'integration', label: 'Integration', icon: 'lucide:sigma' },
    { id: 'simplification', label: 'Simplification', icon: 'lucide:equal' },
    { id: 'powers-roots', label: 'Powers & Roots', icon: 'lucide:radical' },
    { id: 'settings', label: 'Settings', icon: 'lucide:settings' },
];
