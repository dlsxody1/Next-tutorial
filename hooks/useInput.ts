import React from "react";
import { useState, useCallback } from "react";

const useInput = (initialForm: any) => {
  const [form, setForm] = useState(initialForm);

  const onChangeData = useCallback(
    (e: { target: { name: any; value: any } }) => {
      console.log(e.target.value);
      const { name, value } = e.target;
      setForm((form: any) => ({ ...form, [name]: value }));
    },
    []
  );

  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChangeData, reset];
};

export default useInput;
