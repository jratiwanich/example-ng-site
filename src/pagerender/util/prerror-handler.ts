import { ErrorHandler } from '@angular/core';

export default class PRErrorHandler implements ErrorHandler {
  constructor() {
   // rethrow exceptions, so operations like 'bootstrap' will result in an error
   // when an error happens. If we do not rethrow, bootstrap will always succeed.
   //super(true);
 }

   handleError(error) {
     // send the error to the server or logger
     console.log("PAGERENDER ErrorHandler: ",error);
     //super.handleError(error);
   }
}
