import { FaSistrix } from 'react-icons/fa'
import { SearchIcon, Search, SerarchSection } from './style'

const SearchBar = () => {
  return (
    <SerarchSection>
      <Search>
        <input
          type="text"
          className="trend__control"
          placeholder="Search Twitter"
        />
        <SearchIcon>
          <FaSistrix className="search" />
        </SearchIcon>
      </Search>
    </SerarchSection>
  )
}

export default SearchBar