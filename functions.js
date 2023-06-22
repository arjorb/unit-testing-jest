const functions = {
    add: (num1,num2) => num1+num2 ,
    isNull: () => null,
    createUser: ()=>{
       const user = {firstname:'John'};
        user['lastname']='Uwimana';
        return user;
    }
}
module.exports = functions;