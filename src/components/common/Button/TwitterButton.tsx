import { Button } from "./style";

const TwitterButton = (props : any) => {
  const {title , styleBtn , onClick  } = props;
  return (
    <Button theme={styleBtn} onClick={onClick}>
        {title}
    </Button>
  );
};

export default TwitterButton;
