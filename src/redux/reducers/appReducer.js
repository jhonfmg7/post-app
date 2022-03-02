import { CLEAN_MESSAGE_APP, GET_AUTHOR_ERROR, GET_AUTHOR_START, GET_AUTHOR_SUCCESS, GET_COMMENTS_ERROR, GET_COMMENTS_START, GET_COMMENTS_SUCCESS, GET_POSTS_ERROR, GET_POSTS_START, GET_POSTS_SUCCESS, GET_TAGS_ERROR, GET_TAGS_START, GET_TAGS_SUCCESS } from "../types";

const initialState = {
    posts: [],
    loading: false,
    quantity: 0,
    currentPage: 0,
    limitPerPage: 0,
    messageApp: null,
    comments: [],
    author: null,
    tags: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_START:
            return {
                ...state,
                loading: true,
                message: null,
                posts: [],
                currentPage: 0,
                limitPerPage: 0,
                messageApp: null
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload.data,
                quantity: action.payload.total,
                currentPage: action.payload.page,
                limitPerPage: action.payload.limit,
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                messageApp: action.payload,
                posts: [],
                quantity: 0,
                currentPage: 0,
                limitPerPage: 0,
            }
        case GET_COMMENTS_START:
            return {
                ...state,
                comments: []
            }
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload.data
            }
        case GET_COMMENTS_ERROR:
            return {
                ...state,
                comments: [],
                messageApp: action.payload,
            }
        case GET_AUTHOR_START:
            return {
                ...state,
                author: null
            }
        case GET_AUTHOR_SUCCESS:
            return {
                ...state,
                author: action.payload
            }
        case GET_AUTHOR_ERROR:
            return {
                ...state,
                author: null,
                messageApp: action.payload,
            }
        case GET_TAGS_START:
            return {
                ...state,
                tags: null
            }
        case GET_TAGS_SUCCESS:
            return {
                ...state,
                tags: action.payload.data
            }
        case GET_TAGS_ERROR:
            return {
                ...state,
                tags: null,
                messageApp: action.payload,
            }
        case CLEAN_MESSAGE_APP:
            return {
                ...state,
                messageApp: null,
            }
        default:
            return state;
    }
}