import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  StyledAlert,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSubmitButton,
} from "./ChangePassword.styled";

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Field is required"),
  newPassword1: Yup.string().required("Field is required"),
  newPassword2: Yup.string().required("Field is required"),
});

interface ChangePasswordProps {
  setChangePassword: (arg: boolean) => void;
  setEditDetails: (arg: boolean) => void;
}

const ChangePassord = ({
  setChangePassword,
  setEditDetails,
}: ChangePasswordProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: {
    oldPassword: string;
    newPassword1: string;
    newPassword2: string;
  }) => {
    console.log(data);
  };

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChangePassword(false);
    setEditDetails(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>Old Password:</StyledLabel>
      <StyledInput {...register("oldPassword")} type="password" />
      {errors.oldPassword && (
        <StyledAlert>{errors.oldPassword.message}</StyledAlert>
      )}

      <StyledLabel>New Password:</StyledLabel>
      <StyledInput {...register("newPassword1")} type="password" />
      {errors.newPassword1 && (
        <StyledAlert>{errors.newPassword1.message}</StyledAlert>
      )}

      <StyledLabel>Repeat new password:</StyledLabel>
      <StyledInput {...register("newPassword2")} type="password" />
      {errors.newPassword2 && (
        <StyledAlert>{errors.newPassword2.message}</StyledAlert>
      )}

      <StyledSubmitButton type="submit">Change passwrod</StyledSubmitButton>
      <StyledButton onClick={(e) => handleBackClick(e)}>
        &larr; Back
      </StyledButton>
    </StyledForm>
  );
};

export default ChangePassord;
