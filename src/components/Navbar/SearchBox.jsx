
import { useState, useEffect } from 'react';
import { searchIcon } from './SvgIcons';
import { ClickAwayListener } from '@mui/material';
import SearchItem from './SearchItem';

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(false);
    const [searching, setSearching] = useState(false);
    const [products, setProducts] = useState([]);

    const handleFocus = () => {
        setSearchResult(true);
        setSearching(true);
    }

    const handleBlur = () => {
        setSearchResult(false);
        setSearching(false);
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) { console.log(searchTerm); }
    }
    const handleClickAway = () => {
        setSearchResult(false);
        setSearching(false);
    }


    const fetchProducts = async () => {
        if (searchTerm.trim().length > 0) {
            let data = await fetch(`http://localhost:4000/api/products/search/${searchTerm}`);
            data = await data.json();
            setProducts(data.products);
        }
        else{
            setProducts([]);
        }
    }
    useEffect(() => { fetchProducts() }, [searchTerm]);

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            {/* {!searching && <div onBlur={handleBlur} onClick={handleFocus}>{searchIcon}</div>}
            {searching && <div className="search-bar">{searchIcon}<input className="search-input" type="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} /></div>} */}
            <div className="search-bar" onClick={handleFocus}>
                {searchIcon}
                {searching && <input className="search-input" type="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} />}
                {/* {products.length > 0 && */}
                    {/* <> */}
                        {/* <div className="absolute right-1/2 -bottom-5 rotate-45 h-4 w-4 drop-shadow-lg bg-white rounded-sm border-l border-t"></div>
                        <div className={`${true ? 'justify-center items-center' : products.length < 1 && 'justify-center items-center'} absolute overflow-y-auto overflow-x-hidden flex flex-col top-[49px] w-[23rem] -left-11 h-80 bg-white drop-shadow-xl rounded`}> */}
                           {searching && <>{products.length > 0 && <hr/>}{
                        //    products.length > 0 ?
                            
                                    products.map((product) => (
                                        // <p key={product._id}>{product.name}</p>
                                        <SearchItem product={product} key={product._id}/>
                                    ))
                                    // :
                                    // <span className="text-gray-400 text-sm">No results found.</span>
                            }
                            </>}

                        {/* </div> */}
                    {/* </> */}
                {/* } */}
            </div>
        </ClickAwayListener>
    )
}

export default SearchBox;