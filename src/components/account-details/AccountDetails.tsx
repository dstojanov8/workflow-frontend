import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { DetailItem, DetailsContainer, Title } from "./AccountDetails.styled";
import { useAppSelector } from "../../store/hooks";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const AccountDetails = () => {
  const account = useAppSelector((state) => state.account.accountInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
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
        <b>Password: </b>
        {account?.email}
      </DetailItem>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <input {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">Submit</button>
      </form> */}
    </DetailsContainer>
  );
};

export default AccountDetails;
