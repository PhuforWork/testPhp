import axios from "axios";

export const request = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        // TokenCybersoft: TOKEN_CYBERSOFT,
        // Authorization: userInfo?.accessToken,
        // "Content-Type": "multipart/form-data",
    },
});

//REQUEST:  A => INTERCEPTORS => B
request.interceptors.request.use((config) => {
    //   let userInfo = localStorage.getItem(USER_ACCOUNT_KEY);
    //   if (userInfo) {
    // userInfo = JSON.parse(userInfo);
    // console.log(userInfo.accessToken);

    //Bearer: tiêu chuẩn JSON web token
    // config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
    //   }
    return config;
});

//RESPONE:  A => INTERCEPTORS => B

request.interceptors.response.use((response) => {
    return response;
});
