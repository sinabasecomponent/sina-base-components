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
      backgroundColor: "black",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <BaseIcon
      size={{ height: 50, width: 50 }}
      unit={"pixel"}
      name={"Calendar-_-Close"}
    />
  </div>
);

export const Primary = Template.bind({});
