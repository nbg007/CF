function comments(state = {}, action) {
    const {postId} = action
    switch(action.type) {
        case 'REMOVE_COMMENT':
            const {index} = action
            return {...state, [postId]:[
                ...state[postId].slice(0, index),
                ...state[postId].slice(index + 1)
            ]}

        case 'ADD_COMMENT':
            const {author, comment} = action
            return {...state, [postId]:[
                ...state[postId],
                {user: author, text:comment}
            ]}

        default:
            return state
    }
}

export default comments