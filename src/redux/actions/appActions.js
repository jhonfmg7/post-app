import axiosClient from "../../config/axiosClient";
import headerToken from "../../config/headerToken";
import { CLEAN_MESSAGE_APP, GET_AUTHOR_ERROR, GET_AUTHOR_START, GET_AUTHOR_SUCCESS, GET_COMMENTS_ERROR, GET_COMMENTS_START, GET_COMMENTS_SUCCESS, GET_POSTS_ERROR, GET_POSTS_START, GET_POSTS_SUCCESS, GET_TAGS_ERROR, GET_TAGS_START, GET_TAGS_SUCCESS } from "../types";

const cleanMessage = () => ({
    type: CLEAN_MESSAGE_APP
});

export function getPostsAction(validate, page, limit = 10) {
    return async(dispatch) => {
        dispatch(getPostsStart());

        if (validate) headerToken(validate);

        try {
            const { data } = await axiosClient.get(`/post?page=${ page }&limit=${ limit }`)
            dispatch(getPostsSuccess(data));
        } catch (error) {
            dispatch(getPostsError(error));
        }

        setTimeout(() => {
            dispatch(cleanMessage());
        }, 3000);
    }
}

const getPostsStart = () => ({
    type: GET_POSTS_START
});

const getPostsSuccess = (data) => ({
    type: GET_POSTS_SUCCESS,
    payload: data
});

const getPostsError = (error) => ({
    type: GET_POSTS_ERROR,
    payload: error
});

export function getPostsWithTagAction(validate, page, limit = 10, tag) {
    return async(dispatch) => {
        dispatch(getPostsStart());

        if (validate) headerToken(validate);

        try {
            const { data } = await axiosClient.get(`/tag/${ tag }/post?page=${ page }&limit=${ limit }`)
            dispatch(getPostsSuccess(data));
        } catch (error) {
            dispatch(getPostsError(error));
        }

        setTimeout(() => {
            dispatch(cleanMessage());
        }, 3000);
    }
}

export function getCommentsAction(validate, id) {
    return async(dispatch) => {
        dispatch(getCommentsStart());

        if (validate) headerToken(validate);

        try {
            const { data } = await axiosClient.get(`/post/${ id }/comment`);
            dispatch(getCommentsSuccess(data));
        } catch (error) {
            dispatch(getCommentsError(error));
        }

        setTimeout(() => {
            dispatch(cleanMessage());
        }, 3000);
    }
}

const getCommentsStart = () => ({
    type: GET_COMMENTS_START
});

const getCommentsSuccess = (data) => ({
    type: GET_COMMENTS_SUCCESS,
    payload: data
});

const getCommentsError = (error) => ({
    type: GET_COMMENTS_ERROR,
    payload: error
});

export function getAuthorAction(validate, id) {
    return async(dispatch) => {
        dispatch(getAuthorStart());

        if (validate) headerToken(validate);

        try {
            const { data } = await axiosClient.get(`/user/${ id }`)
            dispatch(getAuthorSuccess(data));
        } catch (error) {
            dispatch(getAuthorError(error));
        }

        setTimeout(() => {
            dispatch(cleanMessage());
        }, 3000);
    }
}

const getAuthorStart = () => ({
    type: GET_AUTHOR_START
});

const getAuthorSuccess = (data) => ({
    type: GET_AUTHOR_SUCCESS,
    payload: data
});

const getAuthorError = (error) => ({
    type: GET_AUTHOR_ERROR,
    payload: error
});

export function getTagAction(validate) {
    return async(dispatch) => {
        dispatch(getTagStart());

        if (validate) headerToken(validate);

        try {
            const { data } = await axiosClient.get(`/tag`)
            dispatch(getTagSuccess(data));
        } catch (error) {
            dispatch(getTagError(error));
        }

        setTimeout(() => {
            dispatch(cleanMessage());
        }, 3000);
    }
}

const getTagStart = () => ({
    type: GET_TAGS_START
});

const getTagSuccess = (data) => ({
    type: GET_TAGS_SUCCESS,
    payload: data
});

const getTagError = (error) => ({
    type: GET_TAGS_ERROR,
    payload: error
});