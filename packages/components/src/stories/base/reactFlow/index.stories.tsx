import { Meta } from "@storybook/react/types-6-0";
import { StoryContainer } from "../../container";
import React from "react";
import { DnDFlow } from "../../../atoms";
export default {
  title: "react flow",
  component: DnDFlow,
} as Meta<any>;

const Template = () => {
  return (
    <StoryContainer>
      <DnDFlow />
    </StoryContainer>
  );
};

export const ReactFlow = Template.bind({});
