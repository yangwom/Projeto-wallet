import { useEffect, useState } from 'react';

function Validate() {
  const [disabled, setDisabled] = useState(true);
  const useValidate = (email, password) => {
    useEffect(() => {
      const MIN_CHAR = 6;
      const VALIDATE_BUTTON = email.includes('@')
     && email.includes('.com')
     && password.length >= (MIN_CHAR);

      if (VALIDATE_BUTTON) return setDisabled(false);
    }, [email, password]);
  };

  return {
    disabled,
    useValidate,
  };
}

export default Validate;
