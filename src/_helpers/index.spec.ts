const helper = require("./")
describe('Run test suite', () => {
  const testData = "JOHN0000MICHAEL0009994567"

  describe('test helper functions', () => {

    it('get name, version 1', () => {
      const result = helper.getUserData(testData)
      expect(result).toEqual({
        firstName: "JOHN0000",
        lastName: "MICHAEL000",
        clientId: "9994567"
      })
    })

    it('get name, version 2', () => {
      const result = helper.getUserData(testData, "v2")
      expect(result).toEqual({
        firstName: "JOHN",
        lastName: "MICHAEL",
        clientId: "999-4567"
      })
    })
  })

  describe('test helper functions', () => {

    let idx = 0
    it('test get first name', () => {
      const result = helper.getFirstName(testData)
      idx = result.end
      expect(result).toEqual({ start: 0, end: 8, firstName: "JOHN0000" })
    })

    it('test get last name', () => {
      const result = helper.getLastName(testData, idx)
      expect(result).toEqual({ start: idx, end: 18, lastName: "MICHAEL000" })
      idx = result.end
    })

    it('test get clientId', () => {
      const result = helper.getClientId(testData, idx)
      expect(result).toEqual({ clientId: "9994567" })
    })
  })
})
