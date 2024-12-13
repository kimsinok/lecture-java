// es7.js
// 프로퍼티의 계산된 이름


const name = 'username';
// const name = 'name';

const member = {
  id: 'javascript',
  pwd: '1234',
  [name]: 'Hong guil-dong'
}


console.log('member : ', member); //{id: 'javascript', pwd: '1234', username: 'Hong guil-dong'}

console.log(`id : ${member.id}, name : ${member[name]}`);

// console.log(`id : ${member['id']}, name : ${member.name}`); // undefined

// console.log(`id : ${member['id']}, name : ${member['name']}`); // undefined
