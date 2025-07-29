interface User  {
    name:string;
    age:number;
    email:string;
}

type UserKeys = keyof User;
let userKey :UserKeys= 'name' ;
userKey = 'age';
userKey = 'email';
