import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { useGlobalContext } from "GlobalStore";
import InputField from "TSSrc/public/components/UserForms/InputField";
import { MeDocument, useRegisterMutation } from "TSSrc/generated/graphql";
import { toErrorMap } from "TSSrc/utils/toErrorMap";
import "./userForms.scss";

const UserLoginForm: React.FC<{}> = () => {
  let history = useHistory();
  const [, globalDispatch] = useGlobalContext();
  const [register] = useRegisterMutation();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        setSubmitting(true);
        const registerData = await register({
          variables: { options: values },
          refetchQueries: [MeDocument],
        });

        const registerErrors = registerData?.data?.register.errors;
        const registerSuccess = registerData?.data?.register.user;

        if (registerErrors) {
          setErrors(toErrorMap(registerErrors));
        }

        if (registerSuccess) {
          globalDispatch({
            type: "SET DEFINED USERNAME",
            payload: { userName: registerSuccess.username },
          });
          history.push("/");
        }

        setSubmitting(false);
      }}
    >
      {({}) => (
        <Form className="login-register-form">
          <div className="user-inputs">
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />

            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />
            <span>
              <input type="submit" value="Register" />
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserLoginForm;
