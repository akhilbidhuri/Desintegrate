const action = payload => {
    console.log('hi', payload)
    return {type:'Login',
             data: payload
         }
}
export default action;