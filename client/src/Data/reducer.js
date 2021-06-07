export const initialState ={
    page : "home"
};

const reducer = (state,action) => {
    console.log(action);

    switch (action.type) {
        case "SET_PAGE":
            switch (action.page) {
                case "health":
                    return {
                        ...state,
                        page: "health"
                    }
            
                default:
                    return state;
            }
    
        default:
            return state;
    }
}

export default reducer