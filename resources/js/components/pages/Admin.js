import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, notification } from "antd";
import { parse } from "postcss";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
import "../../../css/admin.css";

export default function Admin() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const user_acc = localStorage.getItem("user_acounts");
    const handleLogout = async () => {
        await localStorage.removeItem("user_acounts");
        navigate("/login");
    };
    useEffect(() => {
        if (user_acc) {
            let user_new = JSON.parse(user_acc);
            if (user_new.data.role.role_name === "admin") {
                navigate("/");
            } else {
                navigate("/login");
                notification.error({
                    message: "You are not an admin",
                    description: "Please login first",
                });
            }
        }
    }, []);
    return (
        <Layout style={{ height: "100%" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={[
                        {
                            key: "1",
                            icon: <UserOutlined />,
                            label: "create media",
                            onClick: () => {
                                navigate("/media-form");
                            },
                        },
                        {
                            key: "2",
                            icon: <VideoCameraOutlined />,
                            label: "table media",
                            onClick: () => {
                                navigate("/media-table");
                            },
                        },
                        {
                            key: "3",
                            icon: <UploadOutlined />,
                            label: "nav 3",
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                    <span>
                        {!user_acc ? (
                            <>
                                <Link
                                    style={{ paddingRight: "20px" }}
                                    to="/register"
                                >
                                    Register
                                </Link>
                                <Link
                                    style={{ paddingRight: "20px" }}
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </>
                        ) : (
                            <>
                                <span
                                    style={{
                                        marginRight: "20px",
                                        padding: "5px",
                                        backgroundColor: "green",
                                    }}
                                >
                                    User
                                </span>
                                <a
                                    style={{ marginRight: "20px" }}
                                    onClick={handleLogout}
                                >
                                    Log out
                                </a>
                            </>
                        )}
                    </span>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}
