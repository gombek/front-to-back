import { createUser } from 'shared'

const zupa = 'pomidor';
const user = createUser(zupa, 4)

export const printUser = () => user;

console.log(printUser());
