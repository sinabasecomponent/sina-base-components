import { Meta, Story } from "@storybook/react/types-6-0";
import { Text, TextProps } from "../../../atoms/text";
export default {
  title: "BaseText",
  component: Text,
} as Meta<TextProps>;

const Template: Story<TextProps> = (args) => <Text {...args}>یبسیب</Text>;

export const Primary = Template.bind({});
Primary.args = {
  theme: "bold",
  lang: "fa",
  color: "red",
};
