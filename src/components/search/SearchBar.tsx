import { FaSistrix } from 'react-icons/fa'
import { SearchIcon, Search, SerarchSection } from './style'

const SearchBar = () => {
  return (
    <SerarchSection>
      <Search>
        <SearchIcon>
          <FaSistrix className="search" />
        </SearchIcon>
        <input
          type="text"
          className="trend__control"
          placeholder="Search Twitter"
        />
      </Search>
    </SerarchSection>
  )
}

export default SearchBar