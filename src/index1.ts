interface  User{
    id:number;
    name:string;
    email:string;
    age:number;
}
type UserBasicInfo = Pick<User,'id' | 'name'>
export const user:UserBasicInfo = {
    id:1,
    name:'Alice'
}

interface Post {
    id:number;
    title:string;
    content:string;
    createdAt:Date;
    updatedAt:Date
}

type PostSummary = Pick<Post ,'id'|'title'|'createdAt'>


function getPostSummaries() :PostSummary{
    return {
        id:1,title:'TypeScript Tips',createdAt:new Date()
    }
}

type Numbers = 1 |2 |3 | 4 |5;
type EvenNumbers = 2|4;
type OddNumbers = Exclude<Numbers,EvenNumbers>

interface Person {
    name:string;
    age:number;
    gender:string;
    email:string;
}
type PersonWithoutEmail = Exclude<keyof Person,'email'>

interface Todo {
    id:number;
    title:string;
    description:string;
    completed:boolean;
    createdAt:Date;
}
type TodoPublic = Pick<Todo,Exclude<keyof Todo,'description' | 'createdAt'>>;

const publicTodo :TodoPublic = {
    id:1,
    title:'Learn Typescript',
    completed:false
}

interface FormFields {
    username:string;
    password:string;
    comfirmPassword:string;
    email:string;
    phone:string;
}

type RegisterForm = Pick<FormFields,'username' | 'password' | 'comfirmPassword' | 'email' | 'phone'>
type LoginForm = Pick<FormFields ,'username' | 'password'>