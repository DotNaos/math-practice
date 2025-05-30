import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { MainLayout } from "./components/main-layout";
import { MatricesModule } from "./components/modules/matrices-module";
import { DifferentiationModule } from "./components/modules/differentiation-module";
import { IntegrationModule } from "./components/modules/integration-module";
import { SimplificationModule } from "./components/modules/simplification-module";
import { PowersRootsModule } from "./components/modules/powers-roots-module";
import { SettingsModule } from "./components/modules/settings-module";

export type ModuleType = "matrices" | "differentiation" | "integration" | "simplification" | "powers-roots" | "settings";

const App: React.FC = () => {
  const [activeModule, setActiveModule] = React.useState<ModuleType>("matrices");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderModule = () => {
    switch (activeModule) {
      case "matrices":
        return <MatricesModule />;
      case "differentiation":
        return <DifferentiationModule />;
      case "integration":
        return <IntegrationModule />;
      case "simplification":
        return <SimplificationModule />;
      case "powers-roots":
        return <PowersRootsModule />;
      case "settings":
        return <SettingsModule />;
      default:
        return <MatricesModule />;
    }
  };

  const moduleOptions = [
    { key: "matrices", label: "Matrices" },
    { key: "differentiation", label: "Differentiation" },
    { key: "integration", label: "Integration" },
    { key: "simplification", label: "Simplification" },
    { key: "powers-roots", label: "Powers & Roots" },
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
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
            <Icon icon="lucide:calculator" className="text-primary" width={28} height={28} />
            <p className="font-bold text-inherit text-lg">MathPractice</p>
          </div>
        </NavbarBrand>
        <NavbarContent justify="end">
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="flat" 
                endContent={<Icon icon="lucide:chevron-down" width={16} />}
              >
                {moduleOptions.find(m => m.key === activeModule)?.label || "Select Module"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Module selection" 
              onAction={(key) => setActiveModule(key as ModuleType)}
              selectedKeys={[activeModule]}
              selectionMode="single"
            >
              {moduleOptions.map((option) => (
                <DropdownItem key={option.key}>{option.label}</DropdownItem>
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
};

export default App;