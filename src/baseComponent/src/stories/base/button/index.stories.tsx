import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "../../../atoms";
import { StoryContainer } from "../../container";
export default {
  title: "button",
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => (
  <StoryContainer>
    <Button {...args}></Button>
  </StoryContainer>
);

export const Primary = Template.bind({});
export const secondary = Template.bind({});

Primary.args = {
  children: "add",
  mode: "primary",
};

secondary.args = {
  children: "cancel",
  mode: "secondary",
};
