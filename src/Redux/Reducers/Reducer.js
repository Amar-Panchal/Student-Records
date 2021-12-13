const initialState= [
    {
        id:0,
        name:"Abc",
        surname:"xkd",
        gender:'male',
        mobile:"123456789",
        email:"abc@gmail.com",
        dep:"computer",
        classyear:"2nd Year",
        rollnum:"22",
        cgpa:9.3,
    },
    {
        id:1,
        name:"dac",
        surname:"ekd",
        gender:'male',
        mobile:"12324789",
        email:"dac@gmail.com",
        dep:"computer",
        classyear:"3rd Year",
        rollnum:"23",
        cgpa:7.3,
    },
    {
        id:2,
        name:"sjkbc",
        surname:"sdd",
        gender:'female',
        mobile:"1242356789",
        email:"addjbc@gmail.com",
        dep:"computer",
        classyear:"4th Year",
        rollnum:"22",
        cgpa:9.8,
    },
    {
        id:3,
        name:"Xyz",
        surname:"ddd",
        gender:'female',
        mobile:"123456789",
        email:"xyz@gmail.com",
        dep:"mechnical",
        classyear:"1st Year",
        rollnum:"23",
        cgpa:8.3,
    },
];

const DetailReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_DETAILS":
            state = [...state,action.payload];
            return state;

        case "UPDATE_DETAILS":
            const updateState = state.map(detail => detail.id === 
                action.payload.id ? action.payload : detail);
            state= updateState;
            return state;
        default:
            return state;
    }
};

export default DetailReducer;