'use client';

import { Card, Center, Container, Input, Stack, Text } from '@chakra-ui/react';
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

const CONSTANTS = {
  pageTitle: 'Shorten your URL',
  inputLabel: 'URL',
  backendError: 'Could not make it shorter. Please, try again.',
  requiredError: 'Required. Must be a valid http/https URL.',
  inputPlaceholder: 'Type the URL to shorten',
  ctaLabel: 'Shorten it',
  revealTitle: 'Your Short URL:',
};

export default function Home() {
  const {
    invalidInputValue,
    onInputChange,
    handleSubmit,
    shortUrlHash,
    submitError,
    inputValue,
  } = useCreatePage();

  return (
    <Stack p={5} gap="20">
      <Center>
        <Container id="form">
          <Stack gap="5">
            <Text textStyle="3x1">{CONSTANTS.pageTitle}</Text>
            <Center>
              <Field
                label={<Text textStyle="lg">{CONSTANTS.inputLabel}</Text>}
                required
                maxWidth="50rem"
                textStyle="lg"
                errorText={
                  <Text textStyle="lg">
                    {submitError
                      ? CONSTANTS.backendError
                      : CONSTANTS.requiredError}
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
                  placeholder={CONSTANTS.inputPlaceholder}
                />
              </Field>
            </Center>

            <Center>
              <Button
                disabled={invalidInputValue}
                px={5}
                fontSize="1.6rem"
                textTransform="uppercase"
                fontWeight="bold"
                onClick={handleSubmit}
              >
                {CONSTANTS.ctaLabel}
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
                    {CONSTANTS.revealTitle}
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
