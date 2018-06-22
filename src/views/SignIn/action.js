import {FETCH_FAILED,FETCH_START,FETCH_SUCCESS} from './actionTypes'

let nextSeqId = 0;

export const fetchWeatherStarted = () => ({
    type: FETCH_START
});

export const fetchWeatherSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result
})

export const fetchWeatherFailure = (error) => ({
    type: FETCH_FAILED,
    error
})

export const postNewUser = (data)=>{
    return async (dispatch)=>{
        fetch(url,{
            method : 'POST',
            body : JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res=>res.json())

    }
}
export const fetchWeather = (cityCode) => {
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;

        const seqId = ++ nextSeqId;

        const dispatchIfValid = (action) => {
            if (seqId === nextSeqId) {
                return dispatch(action);
            }
        }

        dispatchIfValid(fetchWeatherStarted())

        fetch({
            method : 'POST',
            url
        }).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                dispatchIfValid(fetchWeatherSuccess(responseJson.weatherinfo));
            }).catch((error) => {
                dispatchIfValid(fetchWeatherFailure(error));
            });
        }).catch((error) => {
            dispatchIfValid(fetchWeatherFailure(error));
        })
    };
}