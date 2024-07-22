import React, { useState } from "react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeT } from "../../redux/store";
import { Button, Space } from "antd";
import { fetchData, setUserInfo } from "../../redux/action/user";
import { queryEmployeesTableUserList } from "../../api/goService";

interface UserManagementProps {

}

const UserManagement: FunctionComponent<UserManagementProps> = () => {
    const dispatch = useDispatch();
    const [userList, setUserList] = useState<any[]>([])
    const { userName, loginTime } = useSelector<storeT, storeT["userInfoReducer"]>((state) => state.userInfoReducer);
    const changeUserInfo = () => {
        dispatch(setUserInfo({ userName: "qyfu" + new Date().getSeconds(), loginTime: new Date() }))
    }
    const changeUserInfoBythunk = () => {
        dispatch(fetchData() as any)
    }
    const getUsers = async () => {
        const res = await queryEmployeesTableUserList();
        console.log(res);
        if (res?.message) {
            setUserList(res.message);
        }
    }
    return (<div>
        <div>
            用户管理{userName}
        </div>
        <Space>
            <Button type="primary" onClick={changeUserInfo}>修改redux userinfo {(loginTime as Date).getMilliseconds()}</Button>
            <Button type="primary" onClick={changeUserInfoBythunk}>修改redux-thunk {(loginTime as Date).getMilliseconds()}</Button>
            <Button type="primary" onClick={getUsers}>获取go服务的userlist</Button>
        </Space>
        {userList.map(item => {
            return <div key={item.employee_id}>{JSON.stringify(item)}</div>
        })}
    </div>);
}

export default UserManagement;