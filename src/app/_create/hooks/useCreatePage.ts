import { ChangeEvent, useState } from 'react';

const urlRegex =
  /^(https?:\/\/)?([a-zA-Z\d-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/i;

const useCreatePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [shortUrlHash, setShortUrlHash] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<boolean>(false);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const isValidUrl = (text: string): boolean => {
    return text.length > 0 && urlRegex.test(text);
  };

  const handleSubmit = async () => {
    const result = await fetch('/api/short-url/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
      },
      body: JSON.stringify({ fullUrl: inputValue.trim() }),
    });
    if (result.ok) {
      const responseBody = await result.json();
      setShortUrlHash(responseBody.shortUrl);
      setSubmitError(false);
    } else {
      setSubmitError(true);
    }
  };

  return {
    onInputChange,
    inputValue,
    invalidInputValue: !isValidUrl(inputValue),
    handleSubmit,
    shortUrlHash,
    submitError,
  };
};

export default useCreatePage;
