import { Meta, Story } from "@storybook/react/types-6-0";
import { TextInput, TextInputProps } from "../../../atoms";
import { StoryContainer } from "../../container";
export default {
  title: "text input",
  component: TextInput,
} as Meta<TextInputProps>;

const Template: Story<TextInputProps> = () => (
  <StoryContainer>
    <TextInput
      label={"sdfsdf"}
      onChange={(e) => {
        e.target.value;
      }}
    />
  </StoryContainer>
);

export const Primary = Template.bind({});
