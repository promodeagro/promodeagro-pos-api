'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
});

module.exports.updateStore = async (event) => {
    let updatedStore = {};

    // Parse input data from request body
    if (event.body) {
        try {
            updatedStore = JSON.parse(event.body);
        } catch (error) {
            console.error('Invalid JSON input:', error);
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Invalid JSON input' }),
            };
        }
    }

    // Extract store_id from path parameters
    const store_id = event.pathParameters.store_id;

    if (!store_id) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'store_id is required in path parameters' }),
        };
    }

    const { store_name, address, store_contact_number, gst_number, "#users": users, fssai_license, createdAt, updatedAt } = updatedStore;

    // Validate the required fields
    if (!store_name || !address || !store_contact_number || !gst_number || !users || !fssai_license || !createdAt || !updatedAt) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'All fields are required' }),
        };
    }

    const params = {
        TableName: 'Stores',
        Key: { store_id },
        UpdateExpression: 'set store_name = :storeName, address = :address, store_contact_number = :storeContactNumber, gst_number = :gstNumber, #users = :users, fssai_license = :fssaiLicense, createdAt = :createdAt, updatedAt = :updatedAt',
        ExpressionAttributeValues: {
            ':storeName': store_name,
            ':address': address,
            ':storeContactNumber': store_contact_number,
            ':gstNumber': gst_number,
            ':users': users,
            ':fssaiLicense': fssai_license,
            ':createdAt': createdAt,
            ':updatedAt': updatedAt,
        },
        ExpressionAttributeNames: {
            '#users': 'users'
        },
        ReturnValues: 'ALL_NEW',
    };

    try {
        const data = await dynamoDb.update(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(data.Attributes),
        };
    } catch (error) {
        console.error('Error updating store:', error);
        return {
            statusCode: error.statusCode || 500,
            body: JSON.stringify({ message: 'Couldn\'t update the store' }),
        };
    }
};
