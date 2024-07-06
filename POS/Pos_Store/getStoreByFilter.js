'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
});

module.exports.getAllStoreFilter = async (event) => {
    let filters = {};

    // Parse input data from request body
    if (event.body) {
        try {
            filters = JSON.parse(event.body);
        } catch (error) {
            console.error('Invalid JSON input:', error);
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Invalid JSON input' }),
            };
        }
    }

    const params = {
        TableName: 'Stores',
    };

    // Dynamically construct the DynamoDB query based on filters
    if (filters.name && filters.location) {
        params.FilterExpression = 'store_name = :storeName AND address.branch_location = :location';
        params.ExpressionAttributeValues = {
            ':storeName': filters.name,
            ':location': filters.location,
        };
    } else if (filters.name) {
        params.FilterExpression = 'store_name = :storeName';
        params.ExpressionAttributeValues = {
            ':storeName': filters.name,
        };
    } else if (filters.location) {
        params.FilterExpression = 'address.branch_location = :location';
        params.ExpressionAttributeValues = {
            ':location': filters.location,
        };
    }

    try {
        console.log('Params:', params); // Log the constructed params for debugging

        const data = await dynamoDb.scan(params).promise();

        console.log('Filtered stores:', data.Items); // Log the filtered stores for verification

        return {
            statusCode: 200,
            body: JSON.stringify(data.Items),
        };
    } catch (error) {
        console.error('Error fetching stores:', error);
        return {
            statusCode: error.statusCode || 500,
            body: JSON.stringify({ message: 'Couldn\'t fetch the stores' }),
        };
    }
};
