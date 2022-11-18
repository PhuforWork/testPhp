import { SET_EDIT_TYPES } from "../types/edit.types";

const setEditAction = (data) => {
    return {
        type: SET_EDIT_TYPES,
        payload: data,
    };
};

export { setEditAction };
