import { Meta, Story } from "@storybook/react/types-6-0";
import { Radio, RadioProps, Text } from "../../../atoms";
import { StoryContainer } from "../../container";
export default {
  title: "radio",
  component: Radio,
} as Meta<RadioProps>;

const Template: Story<RadioProps> = () => {
  return (
    <StoryContainer>
      <div style={{ width: "100%", height: "100%", backgroundColor: "gray" }}>
        <Radio.Group name="sag" value="1">
          <div>
            <Radio value={"1"}>radio 1</Radio>
          </div>
          <Radio value={"2"}>
            <Text>radio 2</Text>
          </Radio>
          <Radio value={"3"}>radio 3</Radio>
          <Radio value={"4"}>radio 4</Radio>
        </Radio.Group>
      </div>
    </StoryContainer>
  );
};

export const RadioGroup = Template.bind({});
