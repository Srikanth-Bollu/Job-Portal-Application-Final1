// class ErrorResponse extends Error{
//     constructor(message, codeStatus){
//         super(message);
//         this.codeStatus=codeStatus;
//     }
// }
// module.exports=ErrorResponse;

function ErrorResponse(message, codeStatus) {
    const error = new Error(message); // Create a new Error object with the message
    error.codeStatus = codeStatus; // Add the codeStatus property to the error object
    return error; // Return the customized error object
}

module.exports = ErrorResponse;
