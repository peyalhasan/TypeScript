"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["STARTED"] = 0] = "STARTED";
    Status[Status["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    Status[Status["COMPLETED"] = 2] = "COMPLETED";
})(Status || (Status = {}));
console.log(Status);
var status;
(function (status) {
    status["STARTED"] = "Starting...";
    status["IN_PROGRESS"] = "Processing...";
    status["COMPLETED"] = "Finished..";
})(status || (status = {}));
console.log(status);
//# sourceMappingURL=enum.js.map