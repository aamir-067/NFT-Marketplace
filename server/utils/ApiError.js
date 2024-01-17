export class ApiError extends Error {
    constructor(status = 500, massage = "unknown error occurred") {
        super(massage);
        this.message = massage;
        this.status = status;
        this.success = false;
    }
}