import { request } from "../configs/axios";

const fetchPostTest = (data) => {
    return request({
        url: "/api/register",
        method: "POST",
        data,
    });
};

const fetchCheckLogin = (data) => {
    return request({
        url: "/api/logincheck",
        method: "POST",
        data,
    });
};

const fetchPostMediaFile = (data) => {
    return request({
        url: "/api/geturl/files/images",
        method: "POST",
        data,
    });
};
const fetchPostMediaVideo = (data) => {
    return request({
        url: "/api/geturl/files/videos",
        method: "POST",
        data,
    });
};
const fetchPostformMedia = (data) => {
    return request({
        url: "/api/media-form",
        method: "POST",
        data,
    });
};

const fetchUpdateMedia = (id, data) => {
    return request({
        url: `/api/update-media-form/${id}`,
        method: "POST",
        data,
    });
};
export {
    fetchPostTest,
    fetchCheckLogin,
    fetchPostMediaFile,
    fetchPostMediaVideo,
    fetchPostformMedia,
    fetchUpdateMedia,
};
