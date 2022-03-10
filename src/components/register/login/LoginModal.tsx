import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { find } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, TextField } from "@mui/material";
import { getspecificuser } from "../../../reducers/twitter";

type Inputs = {
  username: string;
  exampleRequired: string;
};

const LoginModal: FC = () => {
  const userObj = useSelector((state: any) => state?.twitter?.allUsers);
  const dispatch = useDispatch();

  const Navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const checkUser = find(
      userObj,
      (user: any) => user?.username === data?.username
    );
    if (checkUser) {
      Navigate("/home");
      notification.success({
        message: "Login",
        description: "Welcome to login page",
      });
    } else {
      notification.error({
        message: "Wrong Credentials",
        description: "You Enter wrong username",
      });
    }
    dispatch(getspecificuser(checkUser));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid rowSpacing={10}>
        <Grid item xs={24}>
          <TextField
            id="outlined-basic"
            label="username"
            variant="outlined"
            placeholder="Enter username"
            required
            {...register("username")}
          />
        </Grid>
        <Grid item xs={24}>
          <Button variant="contained">Login</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginModal;
