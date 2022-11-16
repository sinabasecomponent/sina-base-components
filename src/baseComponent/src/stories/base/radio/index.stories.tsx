import { Meta, Story } from "@storybook/react/types-6-0";
import { Radio, RadioProps, Text } from "../../../atoms";
import { StoryContainer } from "../../container";
export default {
  title: "radio",
  component: Radio,
} as Meta<RadioProps>;

const Template: Story<RadioProps> = () => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
  };

  return (
    <StoryContainer>
      {/* <div style={{ width: "100%", height: "100%", backgroundColor: "gray" }}> */}
      <Radio.Group onChange={onChangeHandler} value="1">
        <div style={{ display: "flex", columnGap: 10 }}>
          <Radio value={"1"}>radio 1</Radio>
          <Radio value={"2"}>
            <Text>radio 2</Text>
          </Radio>
          <Radio value={"3"}>radio 3</Radio>
          <Radio value={"4"}>radio 4</Radio>
        </div>
      </Radio.Group>
      {/* </div> */}
    </StoryContainer>
  );
};

export const RadioGroup = Template.bind({});