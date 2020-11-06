import React from "react";
import ListAltIcon from '@material-ui/icons/ListAlt';
import SearchBar from "./SearchBar";

function Header({searching}) {
 
  return (
    <header>
      <h1>
        <ListAltIcon fontSize='large' />
        Notes
      </h1>
      <SearchBar search={searching}></SearchBar>
    </header>
  );
}

export default Header;
