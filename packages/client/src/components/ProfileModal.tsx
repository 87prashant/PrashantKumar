import styled from "@emotion/styled";
import { HorizontalRule } from "./AuthenticationForm";

const Container = styled("div")({
  position: "absolute",
  fontSize: 14,
  color: "rgba(0, 0, 0, 0.7)",
  top: 60,
  right: 20,
  padding: 5,
  borderRadius: 8,
  backgroundColor: "rgba(242, 242, 242, 1)",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
});

const Info = styled("div")({
  marginBottom: 8,
});

const Button = styled("input")({
  border: "none",
  backgroundColor: "inherit",
  color: "inherit",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "all ease 100ms",
  ":hover": {
    color: "red",
  },
});

interface Props {
  userInfo: {
    username: string;
    email: string;
  };
  setIsRegistered: any;
  setSavedData: any;
  setIsChartAdded: any;
  setShowProfileModal: any;
}

const ProfileModal = (props: Props) => {
  const {
    userInfo,
    setIsRegistered,
    setSavedData,
    setIsChartAdded,
    setShowProfileModal,
  } = props;

  function handleLogout() {
    setShowProfileModal(false);
    setIsRegistered(false);
    setSavedData([]);
    setIsChartAdded(false);
  }

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Info>{userInfo.email}</Info>
      <HorizontalRule />
      <Button value="Log out" type="button" onClick={handleLogout} />
    </Container>
  );
};

export default ProfileModal;