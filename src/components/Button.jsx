
// Button.jsx


/*
props = {
    text: '카페',
    color: 'green'
}
*/

const Button = ({ text, color } ) => {

    console.log('text : ', text);
    console.log('color : ', color);

    return (
        <>
            <button style={{color: color}}>{text}</button>
        </>
    );

}


export default Button;
