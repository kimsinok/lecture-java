// async1.js
// Promise 객체


const myPromise = new Promise( (resolve, reject) => {

    setTimeout(() => {

        const isSuccess = false;  // 비동기 작업을 성공적으로 수행

        if (isSuccess) {
            resolve('suceess');
        } else {
            reject('fail');
        }

    }, 2000);

} );


myPromise
    .then((data) => {
        console.log('data : ', data);
    })
    .catch((error) => {
        console.log('error : ', error);
    });
    



