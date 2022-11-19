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
      <Radio.Group
        name="sag"
        onBlur={(e) => {
          console.log(e, "blur");
        }}
        onFocus={(e) => {
          console.log(e, "focus");
        }}
        onChange={onChangeHandler}
        value="1"
      >
        <Radio value={"1"}>radio 1</Radio>
        <Radio value={"2"}>
          <Text color="red" size={20}>
            radio 2
          </Text>
        </Radio>
        <Radio value={"3"}>radio 3</Radio>
        <Radio value={"4"}>radio 4</Radio>
      </Radio.Group>
    </StoryContainer>
  );
};

export const RadioGroup = Template.bind({});
