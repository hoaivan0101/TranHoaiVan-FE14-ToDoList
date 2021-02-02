
export const addNewTask = (task) => { 
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export const deleteTask = (task) => { 
    return {
        type: 'DELETE_TASK',
        payload: task
    }
}

export const editTask = (task) => { 
    return {
        type: 'EDIT_TASK',
        payload: task
    }
}

export const addTask = (task) => { 
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export const fetchTask = (task) => { 
    return {
        type: 'FETCH_TASK',
        payload: task
    }
}