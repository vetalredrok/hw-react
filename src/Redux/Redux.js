import {createStore, combineReducers} from "redux";


const actions ={
    loadUsers : 'LOAD_USERS',
    chooseUser: 'CHOOSE_USER',
    loadPosts: 'LOAD_POSTS',
    choosePost: 'CHOOSE_POST'
}


const userReducer = (state = {users: [], user: null}, action) => {

    switch (action.type) {
        case actions.loadUsers:
            return {...state, users: action.payload};

        case actions.chooseUser:
            let id = action.payload;
            let user = state.users.find(value => value.id === id);
            return {...state, user: user}

        default:
            return state;

    }
}


const postReducer = (state = {posts: [], post: null}, action) => {

    switch (action.type) {
        case actions.loadPosts:
            let payload = action.payload;
            return {...state, posts: payload}

        case actions.choosePost:
            let id = action.payload;
            let post = state.posts.find(value => value.id === id);
            return {...state, post: post}

        default:
            return state;
    }
}





let combineReducer = combineReducers({userReducer, postReducer});




let store = createStore(combineReducer);

export {store, actions}