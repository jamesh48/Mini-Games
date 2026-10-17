import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { useGlobalContext } from "GlobalStore";
import InputField from "TSSrc/public/components/UserForms/InputField";
import { MeDocument, useLoginMutation } from "TSSrc/generated/graphql";
import { toErrorMap } from "TSSrc/utils/toErrorMap";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
          if (window.location.href.indexOf('fullstack') > -1) {
            history.push('/fullstack/minesweeper');
          } else {
            history.push('/');
          }
        }

        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Box component={Form} sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
          <Stack spacing={1.5} sx={{ width: { xs: '80%', sm: '40%', md: '25%' } }}>
            <InputField name="username" placeholder="username" label="Username" />
            <InputField name="password" placeholder="password" label="Password" type="password" />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              size="small"
            >
              Login
            </Button>
          </Stack>
        </Box>
      )}
    </Formik>
  );
};

export default UserLoginForm;
