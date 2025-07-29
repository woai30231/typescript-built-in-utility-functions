interface User{
    name:string;
    age:number;
    email:string;
}
type ConstantType = 'name' | 'email';
type UserBasicType = Pick<User,ConstantType>;
export const user:UserBasicType = {
    name:'xiaoming',
    email:'xx@xx.com'
}