
import '../BasicLayout.css';

const BasicLayout = ( {children} ) => {   //props
  
    console.log('children : ', children);

    return (
        <>
            <header>
                <h1>Header Section</h1>
                <p>Welcome to the website!</p>
            </header>
            <main>
              {children}
            </main>
            <footer>
                <p>&copy; 2024 My Website. All rights reserved.</p>
            </footer>
        </>

    );


}

export default BasicLayout;