import React, { FunctionComponent } from "react";
import { Table } from 'antd';
interface TestTableProps {

}

const TestTable: FunctionComponent<TestTableProps> = () => {
    return (<div>
        <Table
            columns={[{ title: "姓名", dataIndex: "name" }, { title: "性别", dataIndex: "sex" }]}
            dataSource={[{ name: "王刚", sex: "女" }]}
            pagination={false}
            size={"small"}
        />
    </div>);
}

export default TestTable;