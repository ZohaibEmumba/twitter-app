import { Button } from "./style";

const TwitterButton = (props : any) => {
  const {title , handleClick , className , disable } = props;
  
  return (
    <Button className={className} onClick={handleClick} disabled={disable} >
        {title}
    </Button>
  );
};

export default TwitterButton;
