'use strict';

module.exports = {
	verbose: true,
	preset: '@shelf/jest-mongodb',
	moduleFileExtensions: ['js'],
	setupFiles: ['./jest.setup.js'],
	testEnvironment: 'node',
	reporters: ['default'],
	coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/src/config/', '/src/db/', '/src/utils/', '/src/modules/.*\\.controller\\.js','/src/modules/.*\\.repository\\.js'],
	clearMocks: true,
	resetMocks: true,
	restoreMocks: true,
	coverageDirectory: './coverage'
};
