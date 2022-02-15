import { Button } from "./style";

const TwitterButton = (props : any) => {
  const {name , styleBtn } = props;
  console.log(styleBtn);
  return (
    <Button theme={styleBtn} >
        {name}
    </Button>
  );
};

export default TwitterButton;
