var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { useField } from "formik";
const InputField = (_a) => {
    var { label, size: _ } = _a, props = __rest(_a, ["label", "size"]);
    const [field, { error }] = useField(props);
    return (React.createElement("span", null,
        React.createElement("input", Object.assign({}, field, props, { autoComplete: 'off', type: "text", id: field.name, placeholder: props.placeholder })),
        React.createElement("div", { className: "error-message-container" },
            React.createElement("h5", { className: "form-error-message" }, error ? error : null))));
};
export default InputField;
//# sourceMappingURL=InputField.js.map