import config from 'config';

export const chartService = {
    getChartInfo
    // getCompanyInfo,
    // serchCompanyInfo
};

function getChartInfo(eventname) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    };
    //예 : 083660
    console.log('eventname:'+eventname);

    return fetch(`${config.apiUrl}/api/stock/`+eventname, requestOptions).then(handleResponse).then(response => {
        return response;
    });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text;
        if (response.status !== 200) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(data);
        return data;
    });
}
