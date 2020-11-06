import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar({ search }) {
const [className, setClassName] = useState('search-bar');
    const [searchText, setSearchText] = useState("");
    const handleChange = event => {
        setSearchText(event.target.value);
        search(searchText);
    }
    return (
        <div id='search-bar-container'>
            <div className={className} onMouseOver={() => setClassName(className+" bg-color")} onMouseLeave={()=>{setClassName('search-bar')}}>
                <SearchIcon></SearchIcon>
                <input name='search-text' placeholder='Search your notes' onChange={handleChange} value={searchText}></input>
            </div>
        </div>
    )
}
