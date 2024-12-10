
  // object1.js

  // 사용자 정의 객체 : 객체 리터럴

  console.log('Global this : ', this); // Window
  
  const member = {
    id: 'javascript',
    pwd: '1111',
    getMember: function() {  // method
         //console.log('this : ', this);
         console.log(`id : ${this.id}, pwd : ${this.pwd}`);
    }
  }


//   console.log('member : ', member);
//   console.log('member dataType : ', typeof member);
//   console.log('member dataType : ', toString.call(member));

  
//   console.log('id : ', member.id);
//   console.log('id : ', member['id']);

member.getMember();


  

  