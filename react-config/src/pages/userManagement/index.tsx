import React from "react";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { storeT } from "../../redux/store";

interface UserManagementProps {

}

const UserManagement: FunctionComponent<UserManagementProps> = () => {
    const {userName} = useSelector<storeT,storeT["userInfoReducer"]>((state)=>state.userInfoReducer);
    return (<div>
        用户管理{userName}
    </div>);
}

export default UserManagement;