import Customer from "./Customer";

const c1 = new Customer();
c1.name = 'Eduardo Pinheiro Schimidt'
c1.age = 16
c1.email = 'schimidt@alunos.utfpr.edu.br'
c1.birthday = new Date(2024, 11, 6)

console.log(c1.age)