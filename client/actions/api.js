
const Api = {
    getHeaders() {
        let headers = {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        }
        return headers;
    },

    find(data) {
        console.log('send');
        return dispatch => {
            dispatch({ type: 'FIND_REQUEST' })
            fetch('/api/login.json', {
                method: 'post',
                headers: this.getHeaders(),
                body: JSON.stringify(data)
            }).then((response) => {
                return response.json()
            }).then((data) => {
                dispatch({
                    type: 'FIND_RESPONSE',
                    response: data
                })
            })
        }
    }
}

export default Api