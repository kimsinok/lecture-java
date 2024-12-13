// es6.js

// 간결한 메서드 (Concise Method)

const user = {
    id: 'javascript',
    pwd: '1234',
    getUser() {  // method
        console.log('this : ', this);
        console.log(`id : ${this.id}, pwd : ${this.pwd}`);        
    }
}

user.getUser();
