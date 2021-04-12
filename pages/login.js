import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
export default function Login() {
  const SignIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <LoginContainer>
        <Logo src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png"></Logo>
        <Button onClick={SignIn} variant="outlined">
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const Logo = styled.img`
  max-width: 200px;
  margin-bottom: 50px;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
