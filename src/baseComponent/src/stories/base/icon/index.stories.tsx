import { Meta, Story } from "@storybook/react/types-6-0";
import { BaseIcon, BaseIconProps } from "../../../atoms/baseIcon";
export default {
  title: "BaseIcon",
  component: BaseIcon,
} as Meta<BaseIconProps>;

const Template: Story<BaseIconProps> = (args) => (
  <div style={{ backgroundColor: "black" }}>
    <BaseIcon {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  name: "Create-Project_Download-Icon",
};
