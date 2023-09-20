import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Heading,
} from "@react-email/components";

export default function ContactSubmitEmail({ name, email, message, sendCopy }) {
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }

  return (
    <Html>
      <Head />
      <Preview>{limit(message, 50)}...</Preview>

      <Tailwind>
        <Body
          className="w-auto h-auto min-h-screen 
        bg-gray-900
        text-neutral-200 p-12 text-center"
        >
          <Section>
            <Container>
              <Hr />
              <Section>
                <Row>
                  <Heading className="text-lg font-bold">
                    Contact form submitted in TikApps
                  </Heading>
                  <Text>Message: {message}</Text>
                  <Text>
                    by {name}, {email}
                  </Text>
                </Row>
              </Section>
              <Hr />
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
