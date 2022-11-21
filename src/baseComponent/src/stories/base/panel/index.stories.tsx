import { Meta, Story } from "@storybook/react/types-6-0";
import { Collapse, CollapseProps } from "../../../atoms";
import { StoryContainer } from "../../container";

const { Panel } = Collapse;

export default {
  title: "panel",
  component: Panel,
} as Meta<CollapseProps>;

const Template: Story<CollapseProps> = () => {
  return (
    <StoryContainer>
      <Collapse>
        <Panel id="1" title={"General info1"}>
          <div style={{ height: 300, backgroundColor: "yellow" }}>sag</div>
        </Panel>
        <Panel id="2" title={"General info2"}>
          <div style={{ height: 200, backgroundColor: "red" }}>sag2</div>
        </Panel>
        <Panel id="3" title={"General info3"}>
          <div style={{ height: 100, backgroundColor: "purple" }}>sag3</div>
        </Panel>
      </Collapse>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
