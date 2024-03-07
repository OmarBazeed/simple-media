import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Input,
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Confetti from "react-confetti";

const Register = () => {
  // const navigate = useNavigate();
  const toast = useToast();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();

  const handleSubmit = (name, email, password, confirmPassword) => {
    axios
      .post("https://posts-api.preview-ym.com/api/auth/register", {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      })
      .then((res) => {
        toast({
          title: "Account Signed In",
          description: res.data.message,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        <Confetti
          width={window.innerWidth || 300}
          height={window.innerHeight || 200}
        />;
        // navigate("/auth");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      });
  };

  const PasswordInput = (pas, set, place) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder={place}
          onChange={(e) => set(e.target.value)}
          value={pas}
          className="my-1"
          variant="flushed"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  };

  return (
    <div className="h-screen duration-300 ">
      <section
        className={`shadow-lg m-auto hover:text-red-100 transition-all duration-500 loginModule`}
      >
        <Card align="center">
          <CardHeader>
            <Heading size="lg" className="registerHead">
              Register
            </Heading>
          </CardHeader>
          <CardBody>
            <Input
              className="my-1 px-2"
              variant="flushed"
              placeholder="Enter Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              className="my-1 px-2"
              variant="flushed"
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {PasswordInput(password, setPassword, "Enter Your Password")}
            {PasswordInput(
              confirmPassword,
              setconfirmPassword,
              "Confirm Password"
            )}
          </CardBody>
          <CardFooter className="flex flex-col">
            <Button
              colorScheme="blue"
              onClick={() =>
                handleSubmit(name, email, password, confirmPassword)
              }
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default Register;
