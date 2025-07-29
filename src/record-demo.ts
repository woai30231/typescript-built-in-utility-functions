interface User{
    name:string;
    age:number;
    email:string;
}

type UserRecord = Record<keyof User,string>;
const userRecord:UserRecord = {
    name:'xiamoming',
    age:'34',
    email:'xx@xx.com'
}
export type Person = Record<'name' | 'address',string>;
const person :Person = {
    name:'xiaoming',
    address:'城南'
}