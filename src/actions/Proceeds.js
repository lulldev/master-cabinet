import fetch from 'cross-fetch';

export function requestProceeds() {
  return {
    type: 'REQUEST_PROCEEDS',
  };
}

export function receiveProceeds(jsonData) {
  return {
    type: 'RECEIVE_PROCEEDS',
    proceeds: jsonData,
  };
}

export function errorProceeds(error) {
  return {
    type: 'ERROR_PROCEEDS',
    error,
  };
}

// API `/index.php/api/proceeds/${date}`

// const mockResponse = '{"Proceeds":{"\u041e\u043a\u0440\u0430\u0448\u0438\u0432\u0430\u043d\u0438\u0435\/\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b":{"\u041f\u0440\u0430\u0439\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d":6982.75},"\u041f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440 \u0420\u0410\u0411\u041e\u0422\u0410 2":{"\u041f\u0440\u0430\u0439\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d":1190},"proceed_total_amount":8172.75}}';
const mockResponse = '{"Proceeds":{"\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u0446\u0435\u043d\u0442\u0440":{"\u041f\u0440\u0430\u0439\u0441 \u0441\u0430\u0439\u0442":1000},"\u0416\u0443\u0440\u043a\u0438\u043d\u0430 \u0437\u0430\u043d\u044f\u0442\u0438\u044f":{"\u041f\u0440\u0430\u0439\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d":1800,"\u0413\u0440\u0443\u043f\u043f\u043e\u0432\u043e\u0435 \u0437\u0430\u043d\u044f\u0442\u0438\u0435":2200},"\u041c\u0430\u0441\u0442\u0435\u0440-\u043a\u043b\u0430\u0441\u0441":{"\u041f\u0440\u0430\u0439\u0441 \u0441\u0430\u0439\u0442":1500},"proceed_total_amount":6500},"Subscriptions":[{"subscription":"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0448\u043a\u043e\u043b\u0435 5-6 \u043b\u0435\u0442 (8 \u0437\u0430\u043d\u044f\u0442\u0438\u0439)","count":6},{"subscription":"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0448\u043a\u043e\u043b\u0435 6-7 \u043b\u0435\u0442 (8\u0437\u0430\u043d\u044f\u0442\u0438\u0439)","count":7}]}';
export function loadProceeds(date) {
  return (dispatch) => {
    dispatch(requestProceeds());
    fetch(`/index.php/api/proceeds/${date}`, { method: 'GET' })
      .then((response) => {
        if (response.status !== 200) {
          dispatch(errorProceeds({ statusText: response.statusText }));
          return null;
        }
        // return response.json();
        return JSON.parse(mockResponse);
      },
      (error) => {
        dispatch(errorProceeds(error));
      })
      .then(json => dispatch(receiveProceeds({ response: json })));
  };
}