import { Button } from "./style";

const TwitterButton = (props : any) => {
  const {title , handleClick , className  } = props;
  
  return (
    <Button className={className} onClick={handleClick} >
        {title}
    </Button>
  );
};

export default TwitterButton;
