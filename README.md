## typscript内置工具笔记记录

- 该笔记主要记录关于ts内置工具类型函数的使用方式！
### ts内置工具

- Partial用于实现类型的属性可选，如：
  
  ```typescript
   interface User{
    id:number;
    name:string;
    age:number;
    email:string;
   }
   type UserOptional = Partial<User>

   const user :User = {//这里的user为User类型，所以类型必须完全匹配
    id:23424,
    name:'xiaoming',
    age:23,
    email:'xx@xx.com'
   }

   const user1:UserOptional = {//因为该类型的某些属性是可选的，所以可以只要name属性
     name:'xiaomign'
   }
  ```

- Partial的内部实现如下：
  ```typescript
  type Partial<T> = {[P in keyof T]?:T[P]}
  ```