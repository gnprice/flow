/* @flow */

interface HasOptional {
  a: string,
  b?: number,
};

var test1: HasOptional = { a: "hello" }

var test2: HasOptional = {}; // Error: missing property a

var test3: HasOptional = { a: "hello", b: true }; // Error: boolean ~> number

var test4: HasOptional = { a: "hello", b: 4 };

var test5: HasOptional = ({ a: "hello" }: {| a: string, b?: number |});

// TODO lacks error
var test6: HasOptional = ({ a: "hello", b: 4 }: {| a: string, b: number |}); // Error
