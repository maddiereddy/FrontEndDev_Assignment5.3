/**
 * Created by maddie on 12/8/16.
 */

/*
 Create a Static Method decorator, name it as MyStaticMethodDecorator and
 define target function and display message once
 called with class MyStaticMethodDecoratorExample.

 Console following values:
 ● target,
 ● propertyKey,
 ● descriptor
 */

function MyStaticMethodDecorator(
    target: Function,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
) {
    console.log(`MyStaticMethodDecorator called on: 
        target function - ${target}, 
        propertyKey - ${propertyKey},
        descriptor - ${descriptor}`);
}

class MyStaticMethodDecoratorExample {
    @MyStaticMethodDecorator
    static print(output: string) {
        console.log(`MyStaticMethodDecoratorExample.print(${output}) called.`);
    }
}

MyStaticMethodDecoratorExample.print("test");
