import { Meta, Story } from "@storybook/react/types-6-0";
import { CheckBox, CheckBoxProps } from "../../../molecules/checkbox";
import { StoryContainer } from "../../container";
export default {
  title: "checkbox",
  component: CheckBox,
} as Meta<CheckBoxProps>;

const Template: Story<CheckBoxProps> = (args) => (
  <StoryContainer>
    <CheckBox {...args} />
  </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  value: "sag11",
  // checked: true,
};

export const indeterminate = Template.bind({});

indeterminate.args = {
  indeterminate: true,
};
