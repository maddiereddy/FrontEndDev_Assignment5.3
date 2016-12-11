/**
 * Created by maddie on 12/8/16.
 */

/*
 Create a Method decorator, name it as MyMethodDecorator and
 define target function and display message once
 called with class MyMethodDecoratorExample.

 Console following values:
 ● target,
 ● propertyKey,
 ● descriptor
 */

function MyMethodDecorator (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
    console.log(`target: ${target}`);
    console.log(`propertyKey : ${propertyKey}`);
    console.log(`descriptor : ${descriptor}`);
}

class MyMethodDecoratorExample {
    @MyMethodDecorator
    print(output: string) {
        console.log(`classMyMethodDecoratorExample.print (${output}) called.`);
    }
}

let testObj = new MyMethodDecoratorExample();
testObj.print("test");
