const functions = require('./functions');

test("adding add method",()=>{
    expect(functions.add(2,2)).toBe(4)
})

test("check if the fuction is null",()=>{
    expect(functions.isNull()).toBeNull();
})

test("check if the user is John Uwimana Object",()=>{
    expect(functions.createUser()).toEqual({
        firstname:'John', 
        lastname:'Uwimana'
    });
})

test("less than 160",()=>{
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})

test("There is no I in team",()=>{
    expect('team').not.toMatch(/I/)
})

test("Check if the array contain the Admin",()=>{
    usernames = ['Marry','Jane','John','Admin']
    expect(usernames).toContain("Admin");
})