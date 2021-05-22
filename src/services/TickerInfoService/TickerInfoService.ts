class TickerInfoService {
  static getTickerInfo({ payload }: any) {
    console.log('Symobl form Service: ', payload);
    const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${payload}&region=US`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '51643301fcmsh82d66fa5ae8c336p1bbcf5jsn24e2916ce9c5',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => {
        console.error(err);
      });
  }
}

export default TickerInfoService;
