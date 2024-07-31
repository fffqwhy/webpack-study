import React, { useState } from "react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeT } from "../../redux/store";
import { Button, Space } from "antd";
import { fetchData, setUserInfo } from "../../redux/action/user";
import { checkProgress, queryEmployeesTableUserList, startCalculation } from "../../api/goService";
import { useTranslation } from "react-i18next";
import StreamCom from "./stream";

interface UserManagementProps {

}

const UserManagement: FunctionComponent<UserManagementProps> = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [percent, setPercent] = useState<number | false>(false);
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
        if (res.code === 200 && res?.data) {
            setUserList(res.data || []);
        }
    }
    const doStartCalculation = async () => {
        const res = await startCalculation();
        console.log(res);
        if (res.status) {
            docheckProgress()
        }
    }
    const docheckProgress = async () => {
        const res = await checkProgress();
        if (res) {

            const progress = res.progress;
            const total = res.total;
            const percentCompleted = Math.round((progress * 100) / total);
            console.log(res, progress, total, percentCompleted);
            setPercent(percentCompleted);
            if (percentCompleted !== 100) {
                setTimeout(docheckProgress, 2000); // 每秒检查一次进度
            } else {
                console.log('计算完成');
            }
        }
    }
    return (<div>
        <div>
            用户管理{userName}
        </div>
        <div>
            {t('bye')}
        </div>
        <Space>
            <Button type="primary" onClick={changeUserInfo}>修改redux userinfo {(loginTime as Date).getMilliseconds()}</Button>
            <Button type="primary" onClick={changeUserInfoBythunk}>修改redux-thunk {(loginTime as Date).getMilliseconds()}</Button>
            <Button type="primary" onClick={getUsers}>获取go服务的userlist</Button>
        </Space>
        {(userList && userList.length) ? userList.map(item => {
            return <div key={item.employee_id}>{JSON.stringify(item)}</div>
        }) : <span>暂无数据</span>}
        <div style={{ margin: "12px", backgroundColor: "gray", padding: "1.4rem" }}>
            <Button onClick={doStartCalculation} loading={percent === false ? false : percent < 100}>开始计算</Button>
            <div>
                当前进度：{percent ? `${percent}%` : "0"}
            </div>
        </div>
        <div>
            <StreamCom />
        </div>
    </div>);
}

export default UserManagement;