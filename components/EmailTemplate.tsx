import { Body, Container, Head, Html, Img, Text } from '@react-email/components';

const baseUrl = '/tulsi-logo1.png';

export const EmailTemplate = () => (
  <Html>
    <Head />
    <Body>
      <Container style={{ textAlign: 'center', padding: '40px 0' }}>
        <Img src={baseUrl} width="212" height="88" alt="Tulsi" />
        <Text style={{ fontSize: 18, marginTop: 24, fontWeight: 600 }}>
          A new booking are recorded in system
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
