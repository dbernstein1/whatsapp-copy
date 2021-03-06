import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import getRecipentEmail from "../utils/getRecipentEmail";
import { auth, db } from "../firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
function Chat({ id, users }) {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [recipentSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipentEmail(users, user))
  );

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };
  const recipient = recipentSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipentEmail(users, user);
  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}
      <p>{recipientEmail}</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;
const UserAvatar = styled(Avatar)`
  margin: 5x;
  margin-right: 15px;
`;
