// async4.js

const fetchData = function() {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {

            const data = 'Fetch data from the server';
            //const data = '';

            if (data != '') {
                resolve(data);
            } else {
                reject('Error');
            }

        }, 2000); //2초
    }); 
}


const processData = function(data) {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            
            const isSuccess = true;

            if (isSuccess) {
                resolve(`process data : ${data}`);
            } else {
                reject('Process Error');
            }
          
        }, 1000); //1초
    }); 
}


const task = async () => {

    const data = await fetchData();

    console.log('data : ', data);

    const result = await processData(data);

    return result;  // Promise 객체

}


task()
    .then((data) => {
        console.log('data : ', data);
    })
    .catch((error) => {
        console.log('error : ', error);
    });





