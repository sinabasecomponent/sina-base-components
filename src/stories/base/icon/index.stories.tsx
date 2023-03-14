import { Meta, Story } from "@storybook/react/types-6-0";
import { BaseIcon, BaseIconProps } from "../../../atoms/baseIcon";
export default {
  title: "BaseIcon",
  component: BaseIcon,
} as Meta<BaseIconProps>;

const Template: Story<BaseIconProps> = () => (
  <div style={{ backgroundColor: "black" }}>
    <BaseIcon name={"Calendar-_-Close"} />
  </div>
);

export const Primary = Template.bind({});
