import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { useGlobalContext } from "GlobalStore";
import InputField from "TSSrc/public/components/UserForms/InputField";
import { MeDocument, useLoginMutation } from "TSSrc/generated/graphql";
import { toErrorMap } from "TSSrc/utils/toErrorMap";
import "./userForms.scss";
const UserLoginForm = () => {
    const history = useHistory();
    const [_, globalDispatch] = useGlobalContext();
    const [login] = useLoginMutation();
    return (React.createElement(Formik, { initialValues: { username: "", password: "" }, onSubmit: async (values, { setSubmitting, setErrors }) => {
            var _a, _b;
            setSubmitting(true);
            const loginData = await login({
                variables: { options: values },
                refetchQueries: [MeDocument],
            });
            const loginErrors = (_a = loginData === null || loginData === void 0 ? void 0 : loginData.data) === null || _a === void 0 ? void 0 : _a.login.errors;
            const loginSuccess = (_b = loginData === null || loginData === void 0 ? void 0 : loginData.data) === null || _b === void 0 ? void 0 : _b.login.user;
            if (loginErrors) {
                setErrors(toErrorMap(loginErrors));
            }
            if (loginSuccess) {
                globalDispatch({
                    type: "SET DEFINED USERNAME",
                    payload: { userName: loginSuccess.username },
                });
                history.push("/");
            }
            setSubmitting(false);
        } }, ({}) => (React.createElement(Form, { className: "login-register-form" },
        React.createElement("div", { className: "user-inputs" },
            React.createElement(InputField, { name: "username", placeholder: "username", label: "Username" }),
            React.createElement(InputField, { name: "password", placeholder: "password", label: "Password", type: "password" }),
            React.createElement("span", null,
                React.createElement("input", { type: "submit", value: "login" })))))));
};
export default UserLoginForm;
//# sourceMappingURL=Login.js.map