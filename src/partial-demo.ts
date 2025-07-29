interface User {
    id:number;
    name:string;
    age:number;
    email:string;
}

type UserOptional = Partial<User>;

export const user :User = {
    id:2323,
    name:'xiaoming',
    age:24,
    email:'xx@xx.com'
}
export const user1:UserOptional ={
    name:'xiaoming'
}