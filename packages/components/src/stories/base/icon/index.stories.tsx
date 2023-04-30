import { Meta, Story } from "@storybook/react/types-6-0";
import { BaseIcon, BaseIconProps } from "../../../atoms/baseIcon";
import React from "react";
export default {
  title: "BaseIcon",
  component: BaseIcon,
} as Meta<BaseIconProps>;

const Template: Story<BaseIconProps> = () => (
  <div
    style={{
      backgroundColor: "gray",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <BaseIcon size={{ height: 300, width: 300 }} unit={"pixel"} name={"ODC"} />
  </div>
);
export const Primary = Template.bind({});
