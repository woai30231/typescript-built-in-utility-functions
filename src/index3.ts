interface User {
    name:string;
    age:number;
    email:string;
}
interface User{
    address:string;
    hobbies:string;
}
export const user :User = {
    name:'xiaoming',
    age:18,
    email:'xx@cc.com',
    address:'城南',
    hobbies:'看书'
}


//说明type不能重复定义
// type Person = {
//     name:string;
//     age:number;
//     email:string;
// }
// type Person = {

// }