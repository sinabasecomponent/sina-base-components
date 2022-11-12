import { Meta, Story } from "@storybook/react/types-6-0";
import { TreeNode } from "../../../molecules";
import { StoryContainer } from "../../container";
export default {
  title: "tree node",
  component: TreeNode,
} as Meta<any>;

const mockData = [
  { id: "1", title: "test1" },
  { id: "2", title: "test2" },
  { id: "3", title: "test3" },
  {
    id: "4",
    title: "test4",
    children: [
      {
        id: "4-1",
        title: "test4-1",
        children: [
          { id: "4-1-1", title: "test4-1-1" },
          { id: "4-1-2", title: "test4-1-2" },
        ],
      },
      { id: "4-2", title: "test4-2" },
      { id: "4-3", title: "test4-3" },
    ],
  },
  { id: "5", title: "test5" },
];

const Template: Story<any> = (args) => (
  <StoryContainer>
    <TreeNode {...args} />
  </StoryContainer>
);

export const Primary = Template.bind({});

Primary.args = {
  data: mockData,
};
