import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Login = () => {
  return (
    <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 ">
      <section className="shadow-2xl m-auto shadow-blue-500/50 hover:shadow-slate-950  hover:shadow-md hover:-translate-x-1 hover:-translate-y-1 hover:bg-slate-700 hover:text-red-100 transition-all duration-500">
        <Card align="center">
          <CardHeader>
            <Heading size="md"> Login </Heading>
          </CardHeader>
          <CardBody>
            <Input
              className="my-1"
              variant="flushed"
              placeholder="Enter Your UserName"
            />
            <Input
              type="password"
              className="my-1"
              variant="flushed"
              placeholder="Enter Your Passscode"
            />
          </CardBody>
          <CardFooter className="flex flex-col">
            <Button colorScheme="blue">Go</Button>
            <Link href="https://chakra-ui.com" isExternal className="my-3">
              <Text>
                forget your password ? <ExternalLinkIcon mx="2px" />
              </Text>
            </Link>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default Login;
