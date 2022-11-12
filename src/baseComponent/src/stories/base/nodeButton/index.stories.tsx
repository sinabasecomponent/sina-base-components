import { Meta, Story } from "@storybook/react/types-6-0";
import { NodeButton, NodeButtonProps } from "../../../molecules";
export default {
  title: "node button",
  component: NodeButton,
} as Meta<NodeButtonProps>;

const Template: Story<NodeButtonProps> = (args) => <NodeButton {...args} />;

export const Primary = Template.bind({
  clickHandler: () => ({}),
  text: "sdfsdf",
});
