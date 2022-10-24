import { faker } from "@faker-js/faker";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Text } from "../../../atoms";
import { Table } from "../../../molecules/Table";
export default {
  title: "baseColumn",
  component: Table,
} as Meta<any>;

const mockData = [...new Array(30)].map((_, index) => {
  return {
    name: faker.name.firstName(),
    family: faker.name.lastName(),
    age: index,
    city: faker.address.cityName(),
    country: faker.address.country(),
    address: "test address",
  };
});

const Template: Story<any> = (args) => {
  return (
    <Table data={mockData}>
      <Table.Column
        width={100}
        sorter={(a, b) => a.name - b.name}
        renderFilter={({ data }) => {
          return <input />;
        }}
        render={({ value }) => {
          return <button>{value}</button>;
        }}
        align={"start"}
        dataIndex="name"
      >
        <Text color="blue">name</Text>
      </Table.Column>
      <Table.Column
        width={200}
        sorter={(a, b) => {
          console.log({ a, b });
          return a.family - b.family;
        }}
        render={({ value }) => {
          return <Text>{value}</Text>;
        }}
        align="center"
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
        align="center"
        dataIndex="age"
      >
        age
      </Table.Column>
      <Table.Column
        width={180}
        render={({ value }) => {
          return <Text>{value}</Text>;
        }}
        align="center"
        dataIndex="city"
      >
        city
      </Table.Column>

      <Table.Column
        width={120}
        render={({ value }) => {
          return <Text>{value}</Text>;
        }}
        align="center"
        dataIndex="country"
      >
        country
      </Table.Column>

      <Table.Column
        render={({ value }) => {
          return <Text>{value}</Text>;
        }}
        align="center"
        dataIndex="address"
      >
        address
      </Table.Column>
    </Table>
  );
};

export const baseTable = Template.bind({});

baseTable.args = {
  data: mockData,
};
