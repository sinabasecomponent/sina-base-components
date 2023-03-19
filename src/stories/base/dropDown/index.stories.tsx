import { faker } from "@faker-js/faker";
import { Story } from "@storybook/react/types-6-0";
import { DropDown } from "../../../organism";
import { StoryContainer } from "../../container";
export default {
  title: "drop down",
  component: DropDown,
};

const mockData = [...new Array(40)].map((_, index) => {
  return {
    label: faker.name.lastName(),
    value: `${index}id`,
  };
});

const Template: Story<any> = () => (
  <StoryContainer>
    <div>drop down</div>
  </StoryContainer>
);

export const Primary = Template.bind({});
