import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'jhon@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Igor Ribeiro',
    email: 'igor@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
