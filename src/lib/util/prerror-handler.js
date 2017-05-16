var PRErrorHandler = (function () {
    function PRErrorHandler() {
        // rethrow exceptions, so operations like 'bootstrap' will result in an error
        // when an error happens. If we do not rethrow, bootstrap will always succeed.
        //super(true);
    }
    PRErrorHandler.prototype.handleError = function (error) {
        // send the error to the server or logger
        console.log("PAGERENDER ErrorHandler: ", error);
        //super.handleError(error);
    };
    return PRErrorHandler;
}());
export default PRErrorHandler;
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/util/prerror-handler.js.map