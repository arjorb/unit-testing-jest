const reverse = require('./reverse');

test("check if the reverse function exist",()=>{
    expect(reverse).toBeDefined();
});

test("check if the passed string reversed!", ()=>{
    expect(reverse("hello")).toEqual("olleh");
})