import React, { useEffect, useRef } from 'react'
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

const SearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <InputGroup style={{width: "30rem"}}>
            <InputGroup.Button>
                <SearchIcon />
            </InputGroup.Button>
            <Input
                className='outline-none text-[14px] font-light w-full'
                placeholder='Search...'
                ref={inputRef}
            />
        </InputGroup>
    )
}

export default SearchBar