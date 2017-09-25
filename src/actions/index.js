export const ADD_REMINDER = "ADD_REMINDER";
export const DELETE_REMINDER = "DELETE_REMINDER";

export const addReminder = (text) => {
    return {
        type: ADD_REMINDER,
        text
        
        
    };
    
};

export const deleteReminder = (id) =>{
    return {
        type: DELETE_REMINDER,
        id
        
    };
};