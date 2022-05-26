import { useCallback, useEffect, useRef, useState } from "react";

export const useForm = () => {
  const formFields = useRef([]);

  const validate = useRef(false);

  const formFieldsByName = useRef([]);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.addEventListener("input", handleChange);
    return () => document.removeEventListener("input", handleChange);
  }, []);

  const register = useCallback(
    ({
        required = false,
        minLength = null,
        maxLength = null,
        isNumber = false,
        pattern = null,
      }) =>
      (ref) => {
        if ((!ref && !ref?.name) || formFieldsByName.current.includes(ref.name))
          return;
        formFields.current.push({
          rules: { required, minLength, maxLength, isNumber, pattern },
          ref,
          name: ref.name,
        });
        formFieldsByName.current.push(ref.name);
      },
    []
  );

  const handleChange = ({ target: { name, value } }) => {
    if (!validate.current) return;
    setErrors((prev) => {
      return { ...prev, ...handleValidate({ name, value }) };
    });
  };

  const validateForm = (cb) => {
    const formErrors = formFields.current.reduce(
      (initial, { name, ref: { value } }) => {
        return { ...initial, ...handleValidate({ name, value }) };
      },
      {}
    );
    setErrors((prev) => {
      return { ...prev, ...formErrors };
    });
  };

  const handleSubmit = (cb) => () => {
    validate.current = true;
    validateForm(cb);
  };

  const handleValidate = ({ name, value }) => {
    const formError = {};

    const {
      rules: {
        required = null,
        minLength = null,
        maxLength = null,
        pattern = null,
      } = {},
      ref = null,
    } =
      formFields.current.find(({ name: fieldName }) => fieldName === name) ??
      {};

    if (ref === null) return;

    if (required && String(value).trim() == "") {
      formError[name] = { type: "required", ref };
    }
    if (minLength && String(value.length).trim() < minLength) {
      formError[name] = { type: "minLength", ref };
    }
    if (maxLength && String(value.length).trim() > maxLength) {
      formError[name] = { type: "maxLength", ref };
    }
    if (pattern && !RegExp(pattern).test(value)) {
      formError[name] = { type: "pattern", ref };
    }

    return formError;
  };

  // const updateError = (formErrors, cb) => {
  //   let isValid = Object.keys(formErrors).length == 0 ? true : false;
  //   if (isValid) {
  //     let data = {};
  //     formFields.current.forEach(
  //       ({ rules: { isNumber }, ref: { value }, name }) => {
  //         data[name] = isNumber ? parseInt(value) : value;
  //       }
  //     );
  //     cb(data);
  //   } else {
  //     Object.values(formErrors)[0]?.ref?.focus();
  //   }
  //   setErrors({ ...errors, ...formErrors });
  // };

  const getValue = (fieldName = "") => {
    let formValue = formFields.current.find(({ name }) => {
      return fieldName === name;
    });
    return formValue ? formValue?.ref.value : "";
  };

  const setValue = (fieldName) => {
    console.log(fieldName);
  };

  const setError = (fieldName) => {
    console.log(fieldName);
  };

  const clearError = (fieldName) => {
    console.log(fieldName);
  };

  const reset = () => {
    formFields.current.forEach(({ ref }) => {
      ref.value = "";
    });
  };

  return {
    errors: errors,
    register: register,
    handleSubmit: handleSubmit,
    getValue: getValue,
    setValue: setValue,
    reset: reset,
    setError: setError,
    clearError: clearError,
  };
};
