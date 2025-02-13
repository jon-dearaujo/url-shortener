import { ChangeEvent, useContext, useState } from 'react';
import { I18nContext } from '../../../modules/i18n';

const urlRegex =
  /^(https?:\/\/)?([a-zA-Z\d-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/i;

const useCreatePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [shortUrlHash, setShortUrlHash] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<boolean>(false);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const i18nLabels = useContext(I18nContext);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const isValidUrl = (text: string): boolean => {
    return text.length > 0 && urlRegex.test(text);
  };

  const handleSubmit = async () => {
    try {
      setSubmitLoading(true);
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
    } catch (error) {
      console.error({ error });
      setSubmitError(true);
    } finally {
      setSubmitLoading(false);
    }
  };

  return {
    onInputChange,
    inputValue,
    invalidInputValue: !isValidUrl(inputValue),
    handleSubmit,
    shortUrlHash,
    submitError,
    submitLoading,
    i18nLabels,
  };
};

export default useCreatePage;
