import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar() {

    return (
        <div id='search-bar-container'>
            <div id='search-bar'>
                <SearchIcon fontSize='medium'></SearchIcon>
                <input name='search-text' placeholder='Search you notes'></input>
            </div>
        </div>
    )
}
