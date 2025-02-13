'use client';

import {
  Card,
  Center,
  Container,
  Input,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import useCreatePage from './_create/hooks/useCreatePage';
import { Field } from '@/components/ui/field';
import {
  ClipboardIconButton,
  ClipboardInput,
  ClipboardLabel,
  ClipboardRoot,
} from '@/components/ui/clipboard';
import { InputGroup } from '@/components/ui/input-group';

export default function Home() {
  const {
    invalidInputValue,
    onInputChange,
    handleSubmit,
    shortUrlHash,
    submitError,
    inputValue,
    submitLoading,
    i18nLabels,
  } = useCreatePage();

  return (
    <Stack p={5} gap="20">
      <Center>
        <Container id="form">
          <Stack gap="5">
            <Text textStyle="3x1">{i18nLabels.pageTitle}</Text>
            <Center>
              <Field
                label={<Text fontSize="1.4rem">{i18nLabels.inputLabel}</Text>}
                required
                maxWidth="50rem"
                fontSize="1.4rem"
                errorText={
                  <Text fontSize="1.4rem">
                    {submitError
                      ? i18nLabels.backendError
                      : i18nLabels.requiredError}
                  </Text>
                }
                invalid={
                  inputValue !== '' && (invalidInputValue || submitError)
                }
              >
                <Input
                  size="lg"
                  onChange={onInputChange}
                  px="1"
                  fontSize="1.6rem"
                  placeholder={i18nLabels.inputPlaceholder}
                />
              </Field>
            </Center>

            <Center>
              <Button
                disabled={invalidInputValue || submitLoading}
                px={5}
                fontSize="1.6rem"
                textTransform="uppercase"
                fontWeight="bold"
                onClick={handleSubmit}
              >
                {i18nLabels.ctaLabel}{' '}
                {submitLoading ? <Spinner size="sm" /> : null}
              </Button>
            </Center>
          </Stack>
        </Container>
      </Center>
      {shortUrlHash ? (
        <Center>
          <Card.Root width="80%" h="10rem" p="5">
            <Card.Body gap="2">
              <Center>
                <ClipboardRoot
                  value={`${window.location.origin}/s/${shortUrlHash}`}
                >
                  <ClipboardLabel fontSize="1.6rem">
                    {i18nLabels.revealTitle}
                  </ClipboardLabel>
                  <InputGroup
                    width="full"
                    endElement={<ClipboardIconButton me="1" />}
                  >
                    <ClipboardInput size="lg" fontSize="1.6rem" />
                  </InputGroup>
                </ClipboardRoot>
              </Center>
            </Card.Body>
          </Card.Root>
        </Center>
      ) : null}
    </Stack>
  );
}
