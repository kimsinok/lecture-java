
// Header.jsx

// Function Component

const Header = () => {
    
    const username = 'Hong guil-dong';
    const age = 10;
    const gender = 'M';

    return (
        <>
            <h3>{`username : ${username}, age : ${age}`}</h3>    
            <h3>성별 : {gender === 'M' ? '남' : '여'}</h3>    
        </>
    );

 }


 export default Header;