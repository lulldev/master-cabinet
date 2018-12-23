import fetch from 'cross-fetch';

export function requestClientRecords() {
  return {
    type: 'REQUEST_CLIENT_RECORDS',
  };
}

export function receiveClientRecords(jsonData) {
  return {
    type: 'RECEIVE_CLIENT_RECORDS',
    clientRecords: jsonData,
  };
}

export function errorClientRecords(error) {
  return {
    type: 'ERROR_CLIENT_RECORDS',
    error,
  };
}

// const mockResponse = '[{"client_id":"008493","fullname":"\u0420\u043e\u0436\u043a\u043e\u0432\u0430 \u0421\u0432\u0435\u0442\u043b\u0430\u043d\u0430 \u0412\u0438\u043a\u0442\u043e\u0440\u043e\u0432\u043d\u0430","another_fullname":"  ","card_no":"0000004345   ","client_fact":"","birthday":"13\/12\/1991","service":{"service_id":"00000005625","service_group_title":"01. \u0421\u0442\u0440\u0438\u0436\u043a\u0438 (\u043c\u0443\u0436\u0441\u043a\u0438\u0435 + \u0436\u0435\u043d\u0441\u043a\u0438\u0435)","title":"01. \u0421\u0442\u0440\u0438\u0436\u043a\u0430 \u0436\u0435\u043d\u0441\u043a\u0430\u044f (\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0435 \u0432\u043e\u043b\u043e\u0441\u044b)","price":1400,"service_duration":0,"group_count":0,"group_busy":0,"is_compliment":false},"record_date":"23\/12\/2018","record_time":"9:15","record_id":"00000038033","is_group":false,"compliment":{"service_id":"00000106001","service_group_title":"\u041a\u043e\u043c\u043f\u043b\u0438\u043c\u0435\u043d\u0442\u044b","title":"\u041e\u0442\u043a\u0430\u0437 \u043e\u0442 \u043a\u043e\u043c\u043f\u043b\u0438\u043c\u0435\u043d\u0442\u0430","price":0,"service_duration":0,"group_count":0,"group_busy":0,"is_compliment":true,"record_id":"00000038033"}},{"client_id":"008493","fullname":"\u0420\u043e\u0436\u043a\u043e\u0432\u0430 \u0421\u0432\u0435\u0442\u043b\u0430\u043d\u0430 \u0412\u0438\u043a\u0442\u043e\u0440\u043e\u0432\u043d\u0430","another_fullname":"  ","card_no":"0000004345   ","client_fact":"","birthday":"13\/12\/1991","service":{"service_id":"00000005625","service_group_title":"01. \u0421\u0442\u0440\u0438\u0436\u043a\u0438 (\u043c\u0443\u0436\u0441\u043a\u0438\u0435 + \u0436\u0435\u043d\u0441\u043a\u0438\u0435)","title":"01. \u0421\u0442\u0440\u0438\u0436\u043a\u0430 \u0436\u0435\u043d\u0441\u043a\u0430\u044f (\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0435 \u0432\u043e\u043b\u043e\u0441\u044b)","price":1400,"service_duration":0,"group_count":0,"group_busy":0,"is_compliment":false},"record_date":"23\/12\/2018","record_time":"12:30","record_id":"00000038034","is_group":false,"compliment":{"service_id":"00000106016","service_group_title":"\u041f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u0441\u043a\u0438\u0439 \u0437\u0430\u043b","title":"\u0423\u0445\u043e\u0434 \u043f\u043e \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044e \u0438 \u043f\u0438\u0442\u0430\u043d\u0438\u044e \u0432\u043e\u043b\u043e\u0441 \u043f\u043e\u0434 \u0432\u0430\u043f\u0430\u0440\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u043c","price":0,"service_duration":0,"group_count":0,"group_busy":0,"is_compliment":true,"record_id":"00000038034"}},{"client_id":"008493","fullname":"\u0420\u043e\u0436\u043a\u043e\u0432\u0430 \u0421\u0432\u0435\u0442\u043b\u0430\u043d\u0430 \u0412\u0438\u043a\u0442\u043e\u0440\u043e\u0432\u043d\u0430","another_fullname":"  ","card_no":"0000004345   ","client_fact":"","birthday":"13\/12\/1991","service":{"service_id":"00000005625","service_group_title":"01. \u0421\u0442\u0440\u0438\u0436\u043a\u0438 (\u043c\u0443\u0436\u0441\u043a\u0438\u0435 + \u0436\u0435\u043d\u0441\u043a\u0438\u0435)","title":"01. \u0421\u0442\u0440\u0438\u0436\u043a\u0430 \u0436\u0435\u043d\u0441\u043a\u0430\u044f (\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0435 \u0432\u043e\u043b\u043e\u0441\u044b)","price":1400,"service_duration":0,"group_count":0,"group_busy":0,"is_compliment":false},"record_date":"23\/12\/2018","record_time":"15:45","record_id":"00000038035","is_group":false,"compliment":{"service_id":"00000106001","service_group_title":"\u041a\u043e\u043c\u043f\u043b\u0438\u043c\u0435\u043d\u0442\u044b","title":"\u041e\u0442\u043a\u0430\u0437 \u043e\u0442 \u043a\u043e\u043c\u043f\u043b\u0438\u043c\u0435\u043d\u0442\u0430","price":0,"service_duration":0,"group_count":0,"group_busy":0,"is_compliment":true,"record_id":"00000038035"}}]';
export function loadClientRecords() {
  return (dispatch) => {
    dispatch(requestClientRecords());
    fetch('/index.php/api/client_records/', { method: 'GET' })
      .then((response) => {
        if (response.status !== 200) {
          dispatch(errorClientRecords({ statusText: response.statusText }));
          return null;
        }
        return response.json();
        // return JSON.parse(mockResponse);
      },
      (error) => {
        dispatch(errorClientRecords(error));
      })
      .then(json => dispatch(receiveClientRecords({ response: json })));
  };
}