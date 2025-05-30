import React from "react";
import { Card, CardBody, Switch, Divider, RadioGroup, Radio, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const SettingsModule: React.FC = () => {
  const [autoProgress, setAutoProgress] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState("medium");
  const [showHints, setShowHints] = React.useState(true);
  const [animationSpeed, setAnimationSpeed] = React.useState("normal");

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center text-sm text-default-500 mb-2">
          <span>Home</span>
          <Icon icon="lucide:chevron-right" className="mx-1" width={16} />
          <span>Settings</span>
        </div>
        <h1 className="text-2xl font-bold mb-1">Application Settings</h1>
        <p className="text-default-600">Customize your learning experience</p>
      </div>

      <Card>
        <CardBody className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">General Settings</h2>
            
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-md font-medium">Auto Progress</h3>
                <p className="text-sm text-default-500">Automatically move to the next step after a delay</p>
              </div>
              <Switch isSelected={autoProgress} onValueChange={setAutoProgress} />
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-md font-medium">Show Hints</h3>
                <p className="text-sm text-default-500">Display helpful hints during exercises</p>
              </div>
              <Switch isSelected={showHints} onValueChange={setShowHints} />
            </div>
          </div>
          
          <Divider />
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Exercise Settings</h2>
            
            <div>
              <h3 className="text-md font-medium mb-2">Difficulty Level</h3>
              <RadioGroup 
                value={difficulty} 
                onValueChange={setDifficulty}
                orientation="horizontal"
              >
                <Radio value="easy">Easy</Radio>
                <Radio value="medium">Medium</Radio>
                <Radio value="hard">Hard</Radio>
              </RadioGroup>
            </div>
            
            <div>
              <h3 className="text-md font-medium mb-2">Animation Speed</h3>
              <RadioGroup 
                value={animationSpeed} 
                onValueChange={setAnimationSpeed}
                orientation="horizontal"
              >
                <Radio value="slow">Slow</Radio>
                <Radio value="normal">Normal</Radio>
                <Radio value="fast">Fast</Radio>
              </RadioGroup>
            </div>
          </div>
          
          <Divider />
          
          <div className="flex justify-end gap-2">
            <Button variant="flat">Reset to Defaults</Button>
            <Button color="primary">Save Settings</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};