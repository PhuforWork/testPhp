import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Image,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    select,
    message,
    Upload,
    Text,
} from "antd";
import React, { useEffect, useState } from "react";
import {
    LoadingOutlined,
    PlusOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import "../../../css/media-form.css";
import ReactPlayer from "react-player";
import {
    fetchPostformMedia,
    fetchPostMediaFile,
    fetchPostMediaVideo,
    fetchUpdateMedia,
} from "../../src/services/postTest";
import { useNavigate, useParams } from "react-router";
import { useAsync } from "../hooks/useAsync";
import { fetchGetbyIdform } from "../../src/services/getTest";
import { useDispatch, useSelector } from "react-redux";
import { setEditAction } from "../reduxStore/actions/edit.action";

export default function Editform() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { editInfo } = useSelector((state) => state.editReducer);
    const params = useParams();
    const [image, setImage] = useState("");
    const [edit, setEdit] = useState([]);
    const [urls, setUrls] = useState("");
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState("banner");
    const [componentSize, setComponentSize] = useState("default");
    const [form] = Form.useForm();
    const formData = new FormData();

    const { state: get_edit } = useAsync({
        dependancies: [],
        service: () => fetchGetbyIdform(params.id),
    });
    useEffect(() => {
        dispatch(setEditAction(get_edit));
        if (editInfo) {
            form.setFieldsValue({
                ...get_edit,
                type: get_edit.types,
                link: get_edit.creative,
            });
        }
    }, [get_edit]);

    const handleChange = (value) => {
        setValue(value);
        console.log(`selected ${value}`);
    };
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const hanldeChangeImage = async (event) => {
        const file = event.target.files[0];
        formData.append("File", file, file.name);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async (event) => {
            setImage(event.target.result);
            // console.log(event.target.result);
            if (value === "banner") {
                await fetchPostMediaFile(formData).then(function (response) {
                    if (response.status === 200) {
                        let a = response.data;
                        setUrls(a);
                    }
                });
            } else {
                await fetchPostMediaVideo(formData).then(function (response) {
                    if (response.status === 200) {
                        let a = response.data;
                        setUrls(a);
                    }
                });
            }
        };
    };
    console.log();
    const handleSave = async (value) => {
        // value.id = params.id;
        value.link = urls;
        for (const key in value) {
            formData.append(key, value[key]);
        }
        await fetchUpdateMedia(params.id, formData);
        navigate("/media-table");
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const data = [
        {
            value: "banner",
            label: "Banner",
        },
        {
            value: "video",
            label: "Video",
        },
    ];
    return (
        <div>
            <Form
                form={form}
                className="media-form"
                style={{ width: "100%", height: "100%" }}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                // initialValues={{
                //     name: "",
                //     type: "",
                //     link: "",
                //     fields: "",
                //     File: "",
                // }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                onFinish={handleSave}
            >
                {/* <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item> */}
                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Type" name="type">
                    <Select
                        defaultValue="banner"
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={data}
                    />
                </Form.Item>
                <Form.Item label="File" name="fields" valuePropName="fileList">
                    <Input
                        type="file"
                        onChange={hanldeChangeImage}
                        accept={
                            value === "banner"
                                ? "image/png, image/gif, image/jpeg"
                                : "video/mp4,video/x-m4v,video/*"
                        }
                    />
                </Form.Item>
                <Form.Item label="Creative" name="link">
                    {form.getFieldValue("fields") ? (
                        <p>{urls}</p>
                    ) : (
                        <p>{editInfo.creative}</p>
                    )}
                </Form.Item>
                <Form.Item label=" ">
                    {value === "banner" ? (
                        <>
                            {" "}
                            <Image
                                className="preview-form"
                                src={editInfo.creative}
                                alt="preview"
                                name="hinhAnh"
                                onChange={hanldeChangeImage}
                            />
                        </>
                    ) : (
                        <>
                            <iframes src="https://youtu.be/ZiBxp4WXqi0"></iframes>
                        </>
                    )}
                </Form.Item>
                <Form.Item label="Submit form">
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
