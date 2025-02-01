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
            <Text textStyle="3x1">Shorten your URL</Text>
            <Center>
              <Field
                label="URL"
                required
                maxWidth="50rem"
                errorText={
                  submitError
                    ? 'Could not make it shorter. Please, try again.'
                    : 'Required. Must be a http/https URL.'
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
                  placeholder="Type the URL to shorten"
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
                Shorten it
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
                    Your Short URL:
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
