import { Meta, Story } from "@storybook/react/types-6-0";
import { Text } from "../../../atoms";
import { Radio, RadioProps } from "../../../molecules";
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
          // eslint-disable-next-line no-console
          console.log(e, "blur");
        }}
        onFocus={(e) => {
          // eslint-disable-next-line no-console
          console.log(e, "focus");
        }}
        onChange={onChangeHandler}
        value="1"
      >
        <Radio size={14} value={"1"}>
          <Text color="red" size={14}>
            radio 1
          </Text>
        </Radio>
        <Radio size={14} value={"2"}>
          <Text color="red" size={14}>
            radio 2
          </Text>
        </Radio>
        <Radio size={14} value={"3"}>
          <Text color="red" size={14}>
            radio 3
          </Text>
        </Radio>
        <Radio size={14} value={"4"}>
          <Text color="red" size={14}>
            radio 4
          </Text>
        </Radio>
      </Radio.Group>
    </StoryContainer>
  );
};

export const RadioGroup = Template.bind({});
