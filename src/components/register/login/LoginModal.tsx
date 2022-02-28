import { FC, useState } from "react";

type userDataType ={
  email: string ;
  password: string;
}

const LoginModal = () => {
  const [step, setStep] = useState<number>(1)
  const [userData, setUserData] = useState<userDataType>({
    email:'',
    password:''
  })

  const nextStep = () => { 
    setStep(step + 1)
  };

  const prevStep = () => {
    setStep(step - 1)
  };

  // const handleChange = (input: any) => (e: { target: { value: any; }; }) => {
  //   setUserData({ [input]: e.target.value });
  // };
  return (
      <>
      <h1>Helloe there</h1>
      </>
  
  );
};

export default LoginModal;
