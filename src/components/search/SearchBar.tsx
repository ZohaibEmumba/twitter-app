import { Tooltip } from "antd";
import { Search } from "./style";

const SearchBar = () => {
  return (
    <Search>
      <Tooltip title="Search Bar" placement="bottomLeft">
        <input
          type="text"
          className="trend__control"
          placeholder="Search Twitter"
        />
      </Tooltip>
    </Search>
  );
};

export default SearchBar;
