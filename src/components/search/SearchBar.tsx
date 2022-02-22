import { Search } from './style'

const SearchBar = () => {
  return (
      <Search>
        <input
          type="text"
          className="trend__control"
          placeholder="Search Twitter"
        />
      </Search>
  )
}

export default SearchBar