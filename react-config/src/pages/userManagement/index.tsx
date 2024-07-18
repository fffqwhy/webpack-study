import React from "react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeT } from "../../redux/store";
import { Button } from "antd";
import { setUserInfo } from "../../redux/action/user";

interface UserManagementProps {

}

const UserManagement: FunctionComponent<UserManagementProps> = () => {
    const dispatch = useDispatch();
    const { userName, loginTime } = useSelector<storeT, storeT["userInfoReducer"]>((state) => state.userInfoReducer);
    const changeUserInfo = () => {
        dispatch(setUserInfo({ userName: "qyfu"+new Date().getSeconds(), loginTime: new Date() }))
    }
    return (<div>
        <div>
            用户管理{userName}
        </div>
        <Button type="primary" onClick={changeUserInfo}>修改redux userinfo {(loginTime as Date).getMilliseconds()}</Button>
    </div>);
}

export default UserManagement;