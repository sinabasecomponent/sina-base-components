import { faker } from "@faker-js/faker";
import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import { Text } from "../../../atoms";
import { Table } from "../../../muscles/Table";
import { StoryContainer } from "../../container";
export default {
  title: "table",
  component: Table,
} as Meta<any>;

const mockData = [...new Array(400)].map((_, index) => {
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
      <button style={{ marginBottom: 20 }} onClick={onLoading}>
        click for loading!
      </button>
      <div style={{ height: 300 }}>
        <Table
          isLoading={isLoading}
          data={mockData}
          rowKey={"id"}
          onCheckedRows={(rows) => {
            console.log(rows);
          }}
        >
          <Table.Column
            width={300}
            sorter={(a, b) => a.name - b.name}
            renderFilter={() => {
              return <input />;
            }}
            render={({ value }) => {
              return <button>{value}</button>;
            }}
            dataIndex="name"
          >
            <Text color="blue">name</Text>
          </Table.Column>
          <Table.Column
            width={200}
            sorter={function (a, b) {
              if (a.family < b.family) {
                return -1;
              }
              if (a.family > b.family) {
                return 1;
              }
              return 0;
            }}
            render={({ value }) => {
              return <Text>{value}</Text>;
            }}
            dataIndex="family"
          >
            family
          </Table.Column>
          <Table.Column
            width={200}
            sorter={(a, b) => a.age - b.age}
            render={({ value }) => {
              return <Text>{value}</Text>;
            }}
            dataIndex="age"
          >
            age
          </Table.Column>
          <Table.Column
            render={({ value }) => {
              return <Text>{value}</Text>;
            }}
            dataIndex="city"
          >
            city
          </Table.Column>

          <Table.Column
            width={120}
            render={({ value }) => {
              return <Text>{value}</Text>;
            }}
            dataIndex="country"
          >
            country
          </Table.Column>

          <Table.Column
            render={({ value }) => {
              return <Text>{value}</Text>;
            }}
            dataIndex="address"
          >
            address
          </Table.Column>
        </Table>
      </div>
    </StoryContainer>
  );
};

export const BaseTable = Template.bind({});
