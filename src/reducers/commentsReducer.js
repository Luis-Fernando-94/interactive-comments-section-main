export function listCommentsReducer(state = {}, action) {
    switch (action.type) {
        case "FETCH_DATA":
            return state = action.payload;
        default:
            return state;
    }
}

export function addCommentReducer(state = [], action) {
    switch (action.type) {
        case "ADD_COMMENT":
            let comment = {
                id: idGenerator(),
                content: action.payload.content,
                createdAt: "teste ainda",
                score: 0,
                user: {
                    image: {
                        png: "./images/avatars/image-juliusomo.png",
                        webp: "./images/avatars/image-juliusomo.webp"
                    },
                    username: "juliusomo"
                },
                replies: []
            }

            let comments = action.payload.comments;

            comments.push(comment);
            state = [...comments];
            return state;

        default:
            return state;
    }
}

function idGenerator() {
    return Math.floor(Math.random() * 10000);
}