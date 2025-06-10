import * as React from 'react';


interface EmailTemplateProps {
  Name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Name,
}) => (
  <div>
    <h1>{Name} A new booking has been successfully received and recorded in the system</h1>
  </div>
);