import { Meta, Story } from "@storybook/react/types-6-0";
import { SearchBox, SearchBoxProps } from "../../../atoms";
import { StoryContainer } from "../../container";
export default {
  title: "search box",
  component: SearchBox,
} as Meta<SearchBoxProps>;

const Template: Story<SearchBoxProps> = (args) => (
  <StoryContainer>
    <SearchBox
      searchTitle={"sdfsdf"}
      searchHandler={(value) => {
        console.log(value);
      }}
    />
  </StoryContainer>
);

export const Primary = Template.bind({});
