

type user = { userName: string, userId: number };
let users: user[];

users = []


let user1: user = { userName: 'Anis', userId: 101 }
users.push(user1)

// console.log(users)


type RequestType = 'GET' | 'POST';

let getRequest: RequestType;

getRequest = 'GET';

function requestHandler(requestType: RequestType){
    console.log(requestType)
}
requestHandler("GET")


type dataType = string | number;

function dataFunction(data:dataType){
    console.log(data)
}
dataFunction(12)