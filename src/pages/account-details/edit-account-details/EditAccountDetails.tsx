import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  ButtonContainer,
  StyledAlert,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSubmitButton,
} from "./EditAccountDetails.styled";
import { useAppDispatch } from "../../../store/hooks";
import { updateUserAsync } from "../../../store/account/accountThunk";
import { AccountInfo } from "../../../types";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

interface EditAccountDetalsProps {
  account: AccountInfo;
  setChangePassword: (arg: boolean) => void;
  setEditDetails: (arg: boolean) => void;
}

const EditAccountDetals = ({
  account,
  setChangePassword,
  setEditDetails,
}: EditAccountDetalsProps) => {
  const handeChangePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChangePassword(true);
    setEditDetails(false);
  };

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChangePassword(false);
    setEditDetails(false);
  };

  // const token = localStorage.getItem("userToken");
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: account.email,
      username: account.username,
      firstname: account.firstname,
      lastname: account.lastname,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
  }) => {
    dispatch(
      updateUserAsync({
        id: account.id,
        firstname: data.firstname,
        lastname: data.lastname,
        username: data.username,
        email: data.email,
      })
    );
    setChangePassword(false);
    setEditDetails(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>Email:</StyledLabel>
      <StyledInput {...register("email")} />
      {errors.email && <StyledAlert>{errors.email.message}</StyledAlert>}

      <StyledLabel>Username:</StyledLabel>
      <StyledInput {...register("username")} />
      {errors.username && <StyledAlert>{errors.username.message}</StyledAlert>}

      <StyledLabel>Firstnme:</StyledLabel>
      <StyledInput {...register("firstname")} />
      {errors.firstname && (
        <StyledAlert>{errors.firstname.message}</StyledAlert>
      )}

      <StyledLabel>Lastame:</StyledLabel>
      <StyledInput {...register("lastname")} />
      {errors.lastname && <StyledAlert>{errors.lastname.message}</StyledAlert>}

      <StyledSubmitButton type="submit">Edit Account</StyledSubmitButton>
      <ButtonContainer>
        <StyledButton onClick={(e) => handleBackClick(e)}>
          &larr; Back
        </StyledButton>
        <StyledButton onClick={(e) => handeChangePassword(e)}>
          Change password &rarr;
        </StyledButton>
      </ButtonContainer>
    </StyledForm>
  );
};

export default EditAccountDetals;
