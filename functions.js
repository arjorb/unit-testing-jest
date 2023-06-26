const { default: axios } = require("axios");

const functions = {
    add: (num1,num2) => num1+num2 ,
    isNull: () => null,
    createUser: ()=>{
       const user = {firstname:'John'};
        user['lastname']='Uwimana';
        return user;
    },
    fectUser: ()=> axios.get('https://jsonplaceholder.typicode.com/users/1').
    then(res => res.data).
    catch(error => 'error')
}
module.exports = functions;