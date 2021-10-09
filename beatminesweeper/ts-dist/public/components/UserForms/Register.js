import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { useGlobalContext } from "GlobalStore";
import InputField from "TSSrc/public/components/UserForms/InputField";
import { MeDocument, useRegisterMutation } from "TSSrc/generated/graphql";
import { toErrorMap } from "TSSrc/utils/toErrorMap";
import "./userForms.scss";
const UserLoginForm = () => {
    let history = useHistory();
    const [, globalDispatch] = useGlobalContext();
    const [register] = useRegisterMutation();
    return (React.createElement(Formik, { initialValues: { username: "", password: "" }, onSubmit: async (values, { setSubmitting, setErrors }) => {
            var _a, _b;
            setSubmitting(true);
            const registerData = await register({
                variables: { options: values },
                refetchQueries: [MeDocument],
            });
            const registerErrors = (_a = registerData === null || registerData === void 0 ? void 0 : registerData.data) === null || _a === void 0 ? void 0 : _a.register.errors;
            const registerSuccess = (_b = registerData === null || registerData === void 0 ? void 0 : registerData.data) === null || _b === void 0 ? void 0 : _b.register.user;
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
        } }, ({}) => (React.createElement(Form, { className: "login-register-form" },
        React.createElement("div", { className: "user-inputs" },
            React.createElement(InputField, { name: "username", placeholder: "username", label: "Username" }),
            React.createElement(InputField, { name: "password", placeholder: "password", label: "Password", type: "password" }),
            React.createElement("span", null,
                React.createElement("input", { type: "submit", value: "Register" })))))));
};
export default UserLoginForm;
//# sourceMappingURL=Register.js.map