module.exports = (function createModule() {

  const getUserData = (data: string, version = "v1") => {
    const res1 = getFirstName(data)
    const res2 = getLastName(data, res1.end)
    const res3 = getClientId(data, res2.end)

    if (version === "v2") {
      res1.firstName = res1.firstName.replace("0000", '')
      res2.lastName = res2.lastName.replace("000", '')
      let clientId = res3.clientId
      clientId = clientId.substring(0, 3) + '-' + clientId.substr(-4)
      res3.clientId = clientId
    }

    return {
      firstName: res1.firstName,
      lastName: res2.lastName,
      clientId: res3.clientId
    }
  }

  const getFirstName = (data: string, start = 0) => {
    let end = 0
    let firstName = ''
    for (let i = 0; i < data.length; i++) {
      if (data.substr(i, 4) === '0000') {
        end = i + 4
        firstName = data.substr(start, end)
        break
      }
    }
    return { start, end, firstName }
  }

  const getLastName = (data: string, start = 0) => {

    let end = 0
    let lastName = ''
    for (let i = start; i < data.length; i++) {
      if (data.substr(i, 3) === '000') {
        end = i + 3
        lastName = data.substr(start, end - start)
        break
      }
    }
    return { start, end, lastName }
  }

  const getClientId = (data: string, start = 0) => {
    const clientId = data.substr(start, data.length - start)
    return { clientId }
  }


  return {
    getUserData,
    getFirstName,
    getLastName,
    getClientId
  }

})()
