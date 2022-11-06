import { Meta, Story } from "@storybook/react/types-6-0";
import { BaseIconProps, Button } from "../../../atoms";
import { StoryContainer } from "../../container";
export default {
  title: "button",
  component: Button,
} as Meta<BaseIconProps>;

const Template: Story<BaseIconProps> = (args) => (
  <StoryContainer>
    <Button {...args}>ssdfsdf</Button>
  </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {};
