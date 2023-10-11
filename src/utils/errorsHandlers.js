class ErrorsHandlers extends Error {
	constructor(message, statusCode = 400) {
		super(message);
		this.name = 'ErrorsHandlers';
		this.statusCode = statusCode;
	}
}

module.exports = ErrorsHandlers;
