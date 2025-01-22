'use client';

import { Center, Container, Input, Stack, Text } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import useCreatePage from './_create/hooks/useCreatePage';

export default function Home() {
  const { submitDisabled, onInputchange } = useCreatePage();

  return (
    <Stack p={5}>
      <Center>
        <Container id="form">
          <Stack>
            <Text textStyle="3x1">Shorten your URL</Text>
            <Center>
              <Input
                onChange={onInputchange}
                px="1"
                maxWidth="50rem"
                placeholder="Type the URL to shorten"
              />
            </Center>

            <Center>
              <Button
                disabled={submitDisabled}
                px={5}
                textTransform="uppercase"
                fontWeight="bold"
              >
                Shorten it
              </Button>
            </Center>
          </Stack>
        </Container>
      </Center>
      <Center>
        <Container id="reveal">test reveal</Container>
      </Center>
    </Stack>
  );
}
