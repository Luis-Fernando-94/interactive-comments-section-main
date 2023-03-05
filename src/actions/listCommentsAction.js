export const listComments = (data) => {return {type: "FETCH_DATA", payload: data}};

export const addComment = (data, content) => {return {type: "ADD_COMMENT", payload: {
    comments: data.comments,
    content: content
}}};