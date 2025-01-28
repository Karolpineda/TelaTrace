const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.AWS_REGION });

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

module.exports = {
  createOrder: async (order) => {
    const params = {
      TableName: TABLE_NAME,
      Item: order,
    };
    await dynamoDb.put(params).promise();
    return order;
  },
};
