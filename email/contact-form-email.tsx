import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>📬 New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans text-black">
          <Container className="my-10 mx-auto max-w-lg">
            <Section className="bg-white border border-gray-300 shadow-sm px-8 py-6 rounded-md">
              <Heading className="text-xl font-semibold mb-4 text-gray-800">
                📩 New Message Received
              </Heading>

              <Text className="text-gray-600 text-sm mb-2">
                Someone contacted you via your portfolio site. Here's the message:
              </Text>

              <Section className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                <Text className="text-base text-gray-800 whitespace-pre-line">
                  {message}
                </Text>
              </Section>

              <Text className="text-sm text-gray-500">
                <strong>Sender Email:</strong> {senderEmail}
              </Text>

              <Hr className="my-6" />

              <Text className="text-xs text-gray-400 text-center">
                This email was generated automatically by your portfolio site.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
