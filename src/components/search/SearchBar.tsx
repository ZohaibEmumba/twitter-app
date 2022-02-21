import { FaSistrix } from 'react-icons/fa'
import { Search } from './style'

const SearchBar = () => {
  return (
      <Search>
        {/* <SearchIcon>
          <FaSistrix className="search" />
        </SearchIcon> */}
        <input
          type="text"
          className="trend__control"
          placeholder="Search Twitter"
        />
      </Search>
  )
}

export default SearchBar