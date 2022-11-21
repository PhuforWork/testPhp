import { request } from "../configs/axios";

const fetchGetform = (page) => {
    return request({
        url: `/api/media-table?page=${page}`,
        method: "GET",
    });
};

const fetchGetbyIdform = (id) => {
    return request({
        url: `/api/get-media-id/${id}`,
        method: "GET",
    });
};

const fetchDeletebyIdform = (id) => {
    return request({
        url: `/api/delete-media/${id}`,
        method: "GET",
    });
};
export { fetchGetform, fetchGetbyIdform, fetchDeletebyIdform };
