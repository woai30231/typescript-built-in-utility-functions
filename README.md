## typscript内置工具笔记记录

- 该笔记主要记录关于ts内置工具类型函数的使用方式！
### ts内置工具

#### Partial
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


#### Record

- Record<K,T>工具是创建一个对象类型，第一个参数为对象的健值，而第二个参数，为对象的类型，使用示例如下：

```typescript
    type User = Record<"name"|'email'|'address',string>
    const user :User = {
        name:'xiaoming',
        email:'xx@xx.com',
        address:'城南'
    }
```

- Record内部实现如下：

```typescript
    type Record<K extends keyof any ,T> = {[P in K]:T}
```


#### keyof

- keyof T返回一个T类型的所有属性名组成的联合类型，使用示例如下：
```typescript
    interface User {
        name:string;
        age:number;
        email:string;
    }
    type UserKeys = keyof User;//返回的是 'name' | 'age' | 'address';
    let userKey : UserKeys = 'name' ;
    userKey = 'age';
    userKey = 'email';
```

#### Pick

- Pick<T,K>是从类型T中选取部分熟悉K来创建一个新类型，使用示例如下：
  ```typescript
   interface User{
    name:string
    age:number
    email:string
    address:string
   }
   type ConstantType = 'name'|'email';
   type UserBasicInfo = Pick<User,ConstantType>
   const user:UserBasicInfo = {
        name:'xiaoming',
        email:'xx@xx.com'
   } 
  ```

  - Pick内部实现如下：
  
  ```typescript
    type Pick<T,K extends keyof T> = {[P in K ]:T[P]}
  ```
