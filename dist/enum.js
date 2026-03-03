// Enum is a store where we can store our value it does not allow duplicate value. 
// There are 3 types of Enum: numeric, string, hetergenous
var Status;
(function (Status) {
    Status[Status["STARTED"] = 0] = "STARTED";
    Status[Status["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    Status[Status["COMPLETED"] = 2] = "COMPLETED";
})(Status || (Status = {}));
// console.log(Status)
var status;
(function (status) {
    status["STARTED"] = "Starting...";
    status["IN_PROGRESS"] = "Processing...";
    status["COMPLETED"] = "Finished..";
})(status || (status = {}));
// console.log(status)
// console.log(status['STARTED'])
var dataSet;
(function (dataSet) {
    dataSet[dataSet["COW_DATA"] = 12] = "COW_DATA";
    dataSet[dataSet["THIF"] = 4] = "THIF";
    dataSet[dataSet["POLICE"] = 5] = "POLICE";
})(dataSet || (dataSet = {}));
const dataSetValues = {
    [dataSet.COW_DATA]: 12,
    [dataSet.THIF]: 5,
    [dataSet.POLICE]: ['kalam', 'Rofiq', 'Saki', 'Jony', 'Masud']
};
console.log(dataSetValues);
export {};
//# sourceMappingURL=enum.js.map