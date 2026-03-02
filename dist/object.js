"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users;
users = [];
let user1 = { userName: 'Anis', userId: 101 };
users.push(user1);
let getRequest;
getRequest = 'GET';
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
function dataFunction(data) {
    console.log(data);
}
dataFunction(12);
//# sourceMappingURL=object.js.map