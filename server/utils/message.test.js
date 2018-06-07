var expect = require('expect')
var {createMessage} = require('./message')
const _ = require("lodash");

expect.extend({
  toBeDate(received) {
    const pass = _.isNumber(received);
    if (pass) {
      return {
        message: () =>
          `expected ${received} is a valid date.`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected createdAt to be a valid date.`,
        pass: false,
      };
    }
  },
});

describe("CreateMessage", () => {
  var from = "Deepak";
  var text = "My new message";
  var message = createMessage(from, text);
  it("Should generate a message object", () => {
    expect(message).toHaveProperty("from", from);
    expect(message).toHaveProperty("text", text);
    expect(message.createdAt).toBeDate();
  })
})
