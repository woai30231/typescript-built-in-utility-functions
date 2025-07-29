interface User{
    id:number;
    name:string;
    email:string;
    age:number
}

type UserWithoutContact = Omit<User, 'email'|'age'>
export const user :UserWithoutContact = {
    id:1,
    name:'xiaoming'
}

type Omit <T,K extends keyof T> = Pick<T , Exclude<keyof T ,K>>;
interface Post{
    id:number;
    title:string;
    content:string;
    createdAt:Date;
}

type PostWithoutDate = Omit<Post,'createdAt'>