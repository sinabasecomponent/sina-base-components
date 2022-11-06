import { Meta, Story } from "@storybook/react/types-6-0";
import { FileInput, FileInputProps } from "../../../atoms";
export default {
  title: "file input",
  component: FileInput,
} as Meta<FileInputProps>;

const Template: Story<FileInputProps> = (args) => <FileInput />;

export const Primary = Template.bind({});
