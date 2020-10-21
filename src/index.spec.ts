const axios = require('axios')

describe('Run API Call Test', () => {

  const respoonse_v1 = { statusCode: 200, data: { firstName: "JOHN0000", lastName: "MICHAEL000", clientId: "9994567" } }
  const respoonse_v2 = { statusCode: 200, data: { firstName: "JOHN", lastName: "MICHAEL", clientId: "999-4567" } }

  const fetchData = (url: string) => axios({
    url,
    method: 'post',
    data: { "data": "JOHN0000MICHAEL0009994567" }
  })

  const errorLog = (error: Error) => {
    console.error('Server not running, try "npm start",', error.message)
  }

  it('make api call on version 1', async () => {
    const url = 'http://localhost:3000/api/v1/parse'
  
    try {
      const resp = await fetchData(url);
      expect(resp.data).toEqual(respoonse_v1);
    } catch (error) {
      errorLog(error);
    }
  })

  it('make api call on version 2', async () => {
    const url = 'http://localhost:3000/api/v2/parse'

    try {
      const resp = await fetchData(url);
      expect(resp.data).toEqual(respoonse_v2);
    } catch (error) {
      errorLog(error);
    }
  })

}) 