import { useState } from "react";

export const useForm = (initialState: any) => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    (event: any) => {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
}