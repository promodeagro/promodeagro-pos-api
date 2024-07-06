'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000'
});

module.exports.getAllStores = async () => {
  const params = {
    TableName: 'Stores',  // Correct table name
  };

  try {
    const result = await dynamoDb.scan(params).promise();
    console.log('Stores retrieved:', JSON.stringify(result.Items, null, 2)); // Log the result
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (error) {
    console.error('Error retrieving stores:', error); // Log the error
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t retrieve the stores.',
    };
  }
};
