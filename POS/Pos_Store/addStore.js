'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000'
});

module.exports.addStore = async (event) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  console.log('Received event:', JSON.stringify(event, null, 2)); // Log the event

  if (typeof data.store_name !== 'string' || !Array.isArray(data.users)) {
    console.error('Validation Failed');
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the store item.',
    };
  }

  const params = {
    TableName: 'Stores',  // Correct table name
    Item: {
      store_id: uuid.v4(),
      store_name: data.store_name,
      store_contact_number: data.store_contact_number,
      fssai_license: data.fssai_license,
      gst_number: data.gst_number,
      address: data.address,
      users: data.users,  // Add the users list here
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  console.log('DynamoDB params:', JSON.stringify(params, null, 2)); // Log the params

  try {
    await dynamoDb.put(params).promise();
    console.log('Store successfully added:', JSON.stringify(params.Item, null, 2)); // Log success
    return {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
  } catch (error) {
    console.error('Error adding store:', error); // Log the error
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the store item.',
    };
  }
};
