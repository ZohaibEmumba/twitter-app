import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "./style";

// eslint-disable-next-line @typescript-eslint/no-redeclare
const TwitterButton: React.FC = () => {
  return (
    <Button>
      {/* <Link className="btn" to="/"> */}
        Tweet
      {/* </Link> */}
    </Button>
  );
};

export default TwitterButton;
