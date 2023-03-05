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
            return state = [...action.payload.comments, {
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
            }];
        default:
            return state;
    }
}

function idGenerator() {
    return Math.floor(Math.random() * 100);
}