
/*
 * action creator
 */
export function onIncrement() {
    console.log('add')
    return {
        type: 'INCREMENT'
    }
}

export function onDecrement() {
    console.log('del')
    return {
        type: 'DECREMENT'
    }
}

/*
 * reducer
 */
export default counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default: 
            return 10
    }
}