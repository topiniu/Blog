> JavaScript高级程序设计读书笔记。顺便复习一下javascript基础知识。

## 作用域与作用域链

### 作用域
每个函数都有自己的执行环境。<br>
全局执行环境是最外围的一个执行环境，默认为window对象。所有全局变量和函数都是作为window对象的属性和方法创建的。<br>

### 作用域链

当代码在一个执行环境中执行时，会创建变量对象的一个**作用域链（scope chain） **。作用域链的用途时保证对执行环境有权访问的所有变量和函数的有序访问。作用域链的前端，始终都是当前执行的代码所在环境的变量对象。<br>
离开作用域的值将被自动标记为可回收，将在垃圾收集期间被删除。

## 面向对象

### 创建对象
- 工厂模式

  ```javascript
  function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
      alert(this.name);
    };
    return o;
  }
  var person1 = createPerson('Jack', 29, 'None');
  ```


- 构造函数模式

  > - 没有显式地创建对象
  > - 直接将属性和方法赋给了this对象
  > - 没有return语句

  ```javascript
  function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
      alert(this.name);
    }
  }
  var person1 = new Person('Jack', 29, 'None');
  ```


- 原型模式

  > 将所有实体相似的属性设定到对象的prototype中。

  ```javascript
  function Person(){

  }
  Person.prototype.name = 'Jack';
  Person.prototype.age = 29;
  Person.prototype.job = 'None';
  Person.prototype.sayName = function(){
    alert(this.name);
  };

  var person1 = new Person();
  person1.sayName();
  ```

  **原型与in操作符**<br>

  > 有两种方式使用in操作符：单独使用和在for-in循环中使用。在单独使用时，in操作符会在通过对象能够访问给定属性时返回true，无论该属性存在与实例中还是原型中。<br>
  > 即，使用in操作符判断某个属性是否存在与某个实例中时，系统会丛当前实例寻找起顺着原型链一直找下去。与单独使用时的in相对的时hasOwnProperty方法，该方法只会在实例的作用域（执行环境）里寻找是否有匹配的属性，而不会顺着原型链一直找下去。<br>


- 构造函数+原型模式

  > 目前创建自定义类型最常见的方式就是构造函数（构造器）+原型模式。构造函数用于定义实例属性，而原型模式用于定义方法和共享的属性。<br>

  ```javascript
  function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['Jack', 'Kang'];
  }
  Person.prototype = {
    constructor : Person,
    sayName : function(){
      alert(this.name);
    }
  }
  var person1 = new Person('Jane', 29, 'None');
  ```


- 动态原型模式

  ```javascript
  function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;

    if(typeof this.sayName != 'function'){
      Person.prototype.sayName = function(){
        alert(this.name);
      };
    }
  }
  var friend = new Person('Jack', 29, 'None');
  ```


- 寄生构造函数模式

  ```javascript
  function Person(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
      alert(this.name);
    };
    return 0;
  }
  var friend = new Person('Jack', 29, 'None');
  ```


- 稳妥构造函数模式

  > 道格拉斯·克罗克福德发明了js中的稳妥对象概念。** 稳妥对象 **指的是没有公共属性，而且其方法也不引用this的对象。稳妥对象最适合在一些安全的环境中（这些环境会金庸this和new），或者在防治数据被其他应用程序改动时使用。稳妥构造函数模式与寄生构造函数模式类似，但有两点不同：
  >
  > 1. 新创建对象的实力方法不引用this
  > 2. 不使用new操作符调用构造函数。

  ```javascript
  function Person(name, age, job){
    var o = new Object();
    o.sayName = function(){
      alert(name);
    }
    return o;
  }
  var friend = new Person('Jack', 29, 'None');
  friend.sayName();
  ```

在上面的示例中，出了调用sayName方法外没有办法再访问到name属性。

### 继承

> 许多OO语言都支持两种继承方式：
>
> 1. 接口继承： 只继承放方法签名（声明）
> 2. 实现继承： 继承实际的方法（方法生命与方法体）
>
> ECMAScript只支持实现继承。

1. 原型链

   ECMAScript描述了原型链的概念，并将原型链当作实现继承的主要方法。每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。如果这个时候让原型对象等于另一个类型的实例，那么此时的原型对象将包含一个指向另一个原型对象的指针，相应的，另一个原型有包含着一个指向另一个构造函数的指针，如此下来，就形成了实例与原型的链条。也就是**原型链**的基本概念。示例代码如下：

   ```javascript
   function SuperType(){
       this.property = true;
   }
   SuperType.prototype.getSuperValue = function(){
       return this.property;
   };
   function SubType(){
       this.subproperty = false;
   }
   SubType.prototype = new SuperType();
   SubType.prototype.getSubValue = function(){
       return this.subproperty;
   }
   var instance = new SubType();
   alert(instance.getSuperValue());//true
   ```

   1. 谨慎的定义方法
      给原型添加方法的代码一定要放在替换原型的语句之后。不可以使用字面量方式创建原型，使用字面量会重写原型链。

   2. 原型链的缺点
      · 通过原型来实现继承时，原型实际上会变成另一个类型的实例。于是，原先的实例属性也就顺理成章的变成了现在的原型属性。(迷糊)看代码：

      ```javascript
      function SuperType(){
          this.colors = ['red','blue'];
      }
      function SubType(){
          
      }
      SubType.prototype = new SuperType();
      var instance1 = new SubperType();
      instance1.colors.push('black');
      alert(instance1.colors);//red,blue,black

      var instance2 = new SubType();
      alert(instance2.colors);//red,blue,black
      ```

      · 在创建子类型的实例时，不能向超类型的构造函数传递参数。应该说是没有办法在不影响当前实例情况下给超类型构造函数传参数。

2. 借用构造函数

   >  借用构造函数思想是在子类型构造函数的内部调用超类型构造函数。

   ```javascript
   function SuperType(){
       this.colors = ['red','blue'];
   }
   function SubType(){
       SuperType.call(this);
   }
   var instance1 = new SubType();
   instance1.colors.push('black');
   alert(instance1.colors);//red,blue,black

   var instance2 = new SubType();
   alert(instance2.colors);//red,blue
   ```

   - 传递参数

     借用构造函数可以实现在子类型的构造函数中向超类型传递参数。看下面例子：

     ```javascript
     function SuperType(name){
         this.name = name;
     }
     function SubType(){
       SuperType.call(this,'Jack');
       this.age = 29;//为避免超类型重写子类型属性，将子类型属性定义在调用超类型之后
     }
     var instance = new SubType();
     alert(instance.name);//'Jack'
     alert(instance.age);//29
     ```

   - 借用构造函数问题

     方法都在构造函数中定义，因此函数复用就无从谈起了。

3. 组合继承。

   将原型链和借用构造函数的技术组合到一块，从而发挥二者之长的一种继承模式。大致思路是使用原型链实现对原型属性的继承，通过借用构造函数来实现对实例属性的继承。

   ```javascript
   function SuperType(name){
       this.name = name;
     	this.colors = ['red','blue'];
   }
   SuperType.prototype.sayName = function(){
       alert(this.name);
   };
   function SubType(name,age){
       SuperType.call(this,name);
     	this.age = age;
   }
   SubType.prototype = new SuperType();//继承方法
   SubType.prototype.sayAge = function(){
       alert(this.age);
   };
   var instance1 = new SubType('Jack',29);
   instance1.colors.push('black');

   alert(instance1.colors);//red,blue,black
   instance1.sayName();//'Jack'
   instanse1.sayAge();//29

   var instance2 = new SubType('Jane',27);
   alert(instance2.colors);//red,blue
   instance2.sayName();//Jane
   instance2.sayAge();//27
   ```

4. 除了上述几种继承方式外，还有**原型式继承**、**寄生式继承**、**寄生组合式继承**。

   ​

