import { useState, useCallback } from "react";

export const useBoolean = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);

  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return { value, on, off, toggle, setValue };
};
