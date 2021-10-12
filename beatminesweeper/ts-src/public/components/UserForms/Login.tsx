import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { useGlobalContext } from "GlobalStore";
import InputField from "TSSrc/public/components/UserForms/InputField";
import { MeDocument, useLoginMutation } from "TSSrc/generated/graphql";
import { toErrorMap } from "TSSrc/utils/toErrorMap";
import "./userForms.scss";

const UserLoginForm: React.FC<{}> = () => {
  const history = useHistory();
  const [_, globalDispatch] = useGlobalContext();
  const [login] = useLoginMutation();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        setSubmitting(true);


        const loginData = await login({
          variables: { options: values },
          refetchQueries: [MeDocument],
        });

        const loginErrors = loginData?.data?.login.errors;
        const loginSuccess = loginData?.data?.login.user;

        if (loginErrors) {
          setErrors(toErrorMap(loginErrors));
        }

        if (loginSuccess) {
          globalDispatch({
            type: "SET DEFINED USERNAME",
            payload: { userName: loginSuccess.username },
          });
          // After logging in return to home screen
          if (window.location.href.indexOf('fullstack') > -1) {
            history.push('/fullstack/minesweeper')
          } else {
            history.push('/');
          }
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
              <input type="submit" value="login" />
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserLoginForm;
