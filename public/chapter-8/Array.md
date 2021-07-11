---
title: Array
author: Therainisme
chapter: 集合引用类型
---

## 问题描述

解构不仅可以用于对象类型，还可以用于数组。

## 需要使用的方法

```js
let [a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20
```

## 试验场地

请根据给定的函数，让它返回期望的值。你现在需要通过数组的解构赋值来完成一个交换两个数的函数。

## 期待的结果

请补全 `swap` 的定义，使用一个**箭头函数**，输入两个数 `a` 和 `b`，**隐式地**返回一个数组，下标为 `0` 的值是 `b`，下标为 `1` 的值是 `a`。

也就是说需要一行完成交换两个数的操作。

<script test>
;(function (){
    let testFuncArray = [
        [[1, 2],[2, 1]],
        [[100, 2],[2, 100]],
        [[1.2, 2.33],[2.33, 1.2]]
    ];

    for (const [input, output] of testFuncArray) {
        const outputArray = swap(...input);
        const [oa, ob] = output;
        if (outputArray instanceof Array === false) return false;
        if (oa !== outputArray[0] || ob !== outputArray[1]) return false;
    }
    return true;
})();
</script>

<script template>
let swap = ;
</script>