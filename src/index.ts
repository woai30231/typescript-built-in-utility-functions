//Partial工具使用示例
interface User{
    name:string;
    age:number;
    email:string;
}
const user:User = {
    name:"John",
    age:20,
    email:"John@example.com"
};
const user1:Partial<User>  = {};

interface formData {
    username:string;
    password:string;
    email:string;
}
function submitForm(data:Partial<formData>){

}
function submitForm1(data:formData){

}
submitForm({})
submitForm1({
    username:'john',
    password:'123456',
    email:'john@example.com'
})


//Record工具示例
type Record1 = Record<'xiaoming'|'xiaohong',number>;
const record1:Record1 = {
    xiaoming:10,xiaohong:3
}

type Local = 'en' | 'fr' | 'zh';
type Translations = Record<Local,string>;
const messages:Record<string,Translations> = {
    str1:{
        en:'hello',
        fr:'bonjour',
        zh:'你好'
    },
    str2:{
        en:'goodbye',
        fr:'au revoir',
        zh:'再见'
    }
}

type Person = {
    name:string;
    age:number;
    address:string;
}

type PersonKeys = keyof Person;
function getProperty(obj:Person,key:PersonKeys){
    return obj[key];
}

function getValue<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}
const person = {name:'bob',age:25};
const lname = getValue(person,'name')

interface Product {
    id:number;
    name:string;
    price:number;
    inStock:boolean;
}

type ProductEditableFields = keyof Omit<Product ,'id'>;
type ProductUpdate = Partial<Pick<Product,ProductEditableFields>>
function updateProduct (product:Product,changes:ProductUpdate){
    return {...product,...changes};
}