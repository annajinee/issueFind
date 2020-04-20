import config from 'config';

export const chartService = {
    getChartInfo,
    getStockInfo,
    
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

    return fetch(`${config.apiUrl}/api/stock/`+eventname+`/highlow`, requestOptions).then(handleResponse).then(response => {
         console.log(response);
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

function getStockInfo(code){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    };
    //예 : 083660
    console.log('url  => '+ `${config.apiUrl}/api/stock/`+code+'/highlow');

    return fetch(`${config.apiUrl}/api/stock/`+code+'/highlow', requestOptions).then(handleResponse);
}

function getStockMasterInfo(code){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    };
    let selectiveMaster = "";
    let masterUrl = "https://sandbox-apigw.koscom.co.kr/v2/market/stocks/"+marketCode+"/"+stockCode+"/selectiveMaste?"+selectiveMaster;

    return fetch(masterUrl, requestOptions).then(handleResponse);
}