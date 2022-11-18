import { DELETE_TYPES, SET_API, SET_EDIT_TYPES } from "../types/edit.types";

const DEDFAULT_STATE = {
    editInfo: [],
    listAPI: [],
};

export const editReducer = (state = DEDFAULT_STATE, { type, payload }) => {
    switch (type) {
        case SET_EDIT_TYPES: {
            state.editInfo = payload;
            return { ...state };
        }
        case SET_API: {
            state.listAPI = payload;
            return { ...state };
        }
        default:
            return state;
    }
};
