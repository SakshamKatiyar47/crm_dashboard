import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search position-relative d-flex align-items-center">
        <IoSearchOutline className="mr-2"/>
        <input type="text" placeholder="search now .."/>
    </div>
  )
}

export default Search;
