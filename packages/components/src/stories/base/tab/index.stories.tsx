import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import { Tabs, TabsProps } from "../../../molecules";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "tab",
  component: Tabs,
} as Meta<TabsProps>;

const { TabPane } = Tabs;

const Template: Story<TabsProps> = () => {
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);
  return (
    <StoryContainer>
      <div style={{ backgroundColor: "gray", padding: 20, height: "100%" }}>
        <Tabs
          TabsTitle={"Shelf View"}
          activeTab={activeTab}
          onChange={(id: string) => {
            setActiveTab(id);
          }}
        >
          <TabPane closable id="service" renderTitle="abstract service">
            <div style={{ backgroundColor: "red", height: 200, width: 100 }}>
              sag
            </div>
          </TabPane>
          <TabPane id="lom" renderTitle="lom">
            <div style={{ backgroundColor: "blue", height: 200, width: 100 }}>
              sag
            </div>
          </TabPane>
          <TabPane id="bpm" renderTitle="bpm">
            <div style={{ backgroundColor: "yellow", height: 200 }}>sag</div>
          </TabPane>
        </Tabs>
      </div>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
