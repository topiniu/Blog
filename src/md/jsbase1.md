> JavaScript高级程序设计读书笔记。顺便复习一下javascript基础知识。

## 作用域与作用域链

### 作用域
每个函数都有自己的执行环境。<br>
全局执行环境是最外围的一个执行环境，默认为window对象。所有全局变量和函数都是作为window对象的属性和方法创建的。<br>

### 作用域链

当代码在一个执行环境中执行时，会创建变量对象的一个** 作用域链（scope chain） **。作用域链的用途时保证对执行环境有权访问的所有变量和函数的有序访问。作用域链的前端，始终都是当前执行的代码所在环境的变量对象。<br>
离开作用域的值将被自动标记为可回收，将在垃圾收集期间被删除。

## 面向对象

### 创建对象
· 工厂模式
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
· 构造函数模式
> · 没有显式地创建对象
> · 直接将属性和方法赋给了this对象
> · 没有return语句
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