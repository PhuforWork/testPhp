import { Space, Table, Tag } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { fetchDeletebyIdform, fetchGetform } from "../../src/services/getTest";
import { useAsync } from "../hooks/useAsync";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { SET_API } from "../reduxStore/types/edit.types";

export default function Tableform() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [pages, setPages] = useState(1);
    const { listAPI } = useSelector((state) => state.editReducer);
    const { state: getmedia } = useAsync({
        dependancies: [],
        service: () => fetchGetform(pages),
    });
    useEffect(() => {
        dispatch({
            type: SET_API,
            payload: getmedia,
        });
    }, [getmedia]);
    console.log(listAPI);
    const columns = [
        {
            title: "id",
            dataIndex: "id",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Name",
            dataIndex: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Types",
            dataIndex: "types",
        },
        {
            title: "Creative",
            dataIndex: "creative",
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (id) => {
                return (
                    <>
                        <a
                            onClick={() => {
                                navigate(`/edit-table/${id}`);
                            }}
                        >
                            <EditOutlined />
                        </a>
                        <a
                            onClick={async () => {
                                await fetchDeletebyIdform(id);
                                const result = await fetchGetform();
                                dispatch({
                                    type: SET_API,
                                    payload: result.data,
                                });
                            }}
                        >
                            <DeleteOutlined />
                        </a>
                    </>
                );
            },
        },
    ];
    const data = listAPI.data?.map((ele, index) => {
        return {
            key: index,
            id: index + 1,
            name: ele.name,
            types: ele.types,
            creative: ele.creative,
            action: ele.id,
        };
    });
    return (
        <div>
            <Table
                style={{ height: "100%" }}
                columns={columns}
                dataSource={data}
                pagination={{
                    total: 100,
                    onChange: async (page) => {
                        setPages(page);
                        const result = await fetchGetform(page);
                        dispatch({
                            type: SET_API,
                            payload: result.data,
                        });
                    },
                }}
            />
        </div>
    );
}
