import { ChangeEvent, useState } from 'react';

const useCreatePage = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const onInputChange = (e: ChangeEvent) => {
    const value = e.currentTarget.textContent;
    log
  };

  return { onInputchange, submitDisabled };
};

export default useCreatePage;
