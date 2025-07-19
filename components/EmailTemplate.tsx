import { Html, Head, Body, Container, Text, Heading, Section } from '@react-email/components';

export default function AdminNotification({
  name,
  phoneNumber,
  service,
  address
}: {
  name: string;
  phoneNumber: string;
  service: string;
  address: string;
}) {
  return (
    <Html>
      <Head />
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>New Service Booking!</Heading>
          <Text style={paragraph}>A new service booking has been successfully made through the platform.</Text>
          
          <Section>
            <Text style={label}>Customer Name:</Text>
            <Text style={value}>{name}</Text>
          </Section>
          
          <Section>
            <Text style={label}>Phone Number:</Text>
            <Text style={value}>{phoneNumber}</Text>
          </Section>
          
          <Section>
            <Text style={label}>Service:</Text>
            <Text style={value}>{service}</Text>
          </Section>
          
          <Section>
            <Text style={label}>Address:</Text>
            <Text style={value}>{address}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: '#f6f6f6',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const heading = {
  color: '#333333',
  fontSize: '24px',
  marginBottom: '20px',
};

const paragraph = {
  color: '#666666',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '10px 0',
};

const label = {
  fontWeight: 'bold',
  color: '#333',
  fontSize: '14px',
  marginTop: '10px',
};

const value = {
  color: '#666',
  fontSize: '16px',
  marginBottom: '10px',
};