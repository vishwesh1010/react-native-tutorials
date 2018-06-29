const helloWorld_reducer = (state = [], action) => {

    if(action.type=='HELLO_WORLD'){
        return [
            ...state,
            {
              log: action.log,
            }
          ]
    }
}

  export default helloWorld_reducer
