import React, {useState} from 'react';
import {StyledSearchBlock, StyledSearch} from './Search.styled';

import {ReactComponent as SearchIcon} from './search.svg';

const Search = () => {
    const [visible, setVisible] = useState(false);

    return(
        <StyledSearchBlock active={visible}>
            <StyledSearch active={visible} type='text'/>
            <SearchIcon 
                onClick={()=>setVisible(prevState=>!prevState)}
                className='search-icon'
            />
        </StyledSearchBlock>
    )
}

export default Search