import { Meta, Story } from "@storybook/react/types-6-0";
import { Text } from "../../../atoms";
import { Table } from "../../../molecules/Table";
export default {
  title: "baseColumn",
  component: Table,
} as Meta<any>;

const Template: Story<any> = (args) => {
  return (
    <Table {...args}>
      <Table.Column dataIndex="name">
        <Text color="blue">name</Text>
      </Table.Column>
      <Table.Column dataIndex="family">family</Table.Column>
    </Table>
  );
};

export const baseTable = Template.bind({});

baseTable.args = {
  data: [
    { name: "ali", family: "mahmoodi" },
    { name: "mammad", family: "gholi" },
  ],
};
