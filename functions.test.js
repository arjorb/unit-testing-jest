const functions = require('./functions');


test("adding add method",()=>{
    expect(functions.add(2,2)).toBe(4)
})