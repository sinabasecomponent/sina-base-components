import { Meta, Story } from "@storybook/react/types-6-0";
import { TextInput, TextInputProps } from "../../../molecules";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "text input",
  component: TextInput,
} as Meta<TextInputProps>;

const Template: Story<TextInputProps> = () => (
  <StoryContainer>
    <TextInput />
  </StoryContainer>
);

export const Primary = Template.bind({});
