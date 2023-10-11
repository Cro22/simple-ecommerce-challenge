'use strict';

const { faker } = require('@faker-js/faker');

function generateProductMock() {
	const productTypes = ['Coffee', 'Equipment', 'Accessories'];
	return {
		name: faker.commerce.productName(),
		category: faker.helpers.arrayElement(productTypes),
		quantity:  faker.number.int({
			min: 1,
			max: 5
		}),
		price: parseFloat(faker.commerce.price({
			min: 1,
			max: 1000,
			dec: 2
		})),
	};
}

function getFakeId() {
	return faker.database.mongodbObjectId();
}
module.exports = {
	generateProductMock,
	getFakeId
};
