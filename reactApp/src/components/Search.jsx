import { useSearchParams } from "react-router-dom";


const Search = () =>  {

    const [params] = useSearchParams();

    const keyfield = params.get('keyfield');
    
    const keyword = params.get('keyword');

    return(
        <>
            <h1>{`keyfield : ${keyfield}, keyword : ${keyword}`}</h1>
        </>

    )
}


export default Search;