import config from 'config';

export const chartService = {
    getChartInfo
    // getCompanyInfo,
    // serchCompanyInfo
};

function getChartInfo() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    };

    return fetch(`${config.apiUrl}/api/stock/083660`, requestOptions).then(handleResponse);
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
