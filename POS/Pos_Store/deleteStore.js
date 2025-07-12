'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost', // Update with your AWS region
    endpoint: 'http://localhost:8000' // Update with your DynamoDB endpoint
});

module.exports.deleteStore = async (event) => {
    // Extract store_id from path parameters
    const store_id = event.pathParameters.store_id;

    if (!store_id) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'store_id is required in path parameters' }),
        };
    }

    const params = {
        TableName: 'Stores', // Replace with your DynamoDB table name
        Key: { store_id },
    };

    try {
        // Attempt to delete the store record
        await dynamoDb.delete(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Store deleted successfully' }),
        };
    } catch (error) {
        console.error('Error deleting store:', error);
        return {
            statusCode: error.statusCode || 500,
            body: JSON.stringify({ message: 'Couldn\'t delete the store' }),
        };
    }
};
