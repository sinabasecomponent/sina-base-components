import { faker } from "@faker-js/faker";
import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import { Table } from "../../../organism/Table";
import { StoryContainer } from "../../container";
export default {
  title: "table/Regular",
  component: Table,
} as Meta<any>;

const mockData = [...new Array(4000)].map((_, index) => {
  return {
    name: faker.name.firstName(),
    family: faker.name.lastName(),
    age: index,
    city: faker.address.cityName(),
    country: faker.address.country(),
    address: "test address",
    id: `${index}id`,
  };
});

const Template: Story<any> = () => {
  const [isLoading, setLoading] = useState(false);
  const onLoading = () => {
    setLoading((prev) => !prev);
  };
  return (
    <StoryContainer>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <button style={{ marginBottom: 20 }} onClick={onLoading}>
          click for loading!
        </button>
      </div>
    </StoryContainer>
  );
};

export const BaseTable = Template.bind({});
