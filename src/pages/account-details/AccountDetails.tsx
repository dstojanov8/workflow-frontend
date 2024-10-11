import {
  DetailItem,
  DetailsContainer,
  StyledButton,
  Title,
} from "./AccountDetails.styled";
import { useAppSelector } from "../../store/hooks";
import { useState } from "react";
import EditAccountDetals from "./edit-account-details/EditAccountDetails";
import ChangePassord from "./change-password/ChangePassword";

const AccountDetails = () => {
  const account = useAppSelector((state) => state.account.accountInfo);
  const [editDetails, setEditDetails] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  return (
    <>
      {!editDetails && !changePassword && (
        <DetailsContainer>
          <Title>Account Details</Title>
          <DetailItem>
            <b>First Name: </b>
            {account?.firstname}
          </DetailItem>
          <DetailItem>
            <b>Last Name: </b>
            {account?.lastname}
          </DetailItem>
          <DetailItem>
            <b>Username: </b>
            {account?.username}
          </DetailItem>
          <DetailItem>
            <b>Email: </b>
            {account?.email}
          </DetailItem>

          <StyledButton onClick={() => setEditDetails(true)}>
            Edit &rarr;
          </StyledButton>
        </DetailsContainer>
      )}

      {editDetails && (
        <EditAccountDetals
          account={account!}
          setEditDetails={setEditDetails}
          setChangePassword={setChangePassword}
        />
      )}

      {changePassword && (
        <ChangePassord
          setEditDetails={setEditDetails}
          setChangePassword={setChangePassword}
        />
      )}
    </>
  );
};

export default AccountDetails;
