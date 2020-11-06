import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar({ search }) {
    const [searchText, setSearchText] = useState("");
    const handleChange = event => {
        setSearchText(event.target.value);
        search(searchText);
    }
    return (
        <div id='search-bar-container'>
            <div className='search-bar'>
                <SearchIcon ></SearchIcon>
                <input name='search-text' placeholder='Search your notes' onChange={handleChange} value={searchText}></input>
            </div>
        </div>
    )
}
