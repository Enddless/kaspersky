import { Typography } from 'antd';
import React from 'react';

interface SnippetProps {
  newsURLData: string;
  newsTIData: string;
}
const { Title } = Typography;

const TitleComponent: React.FC<SnippetProps> = ({ newsTIData, newsURLData }) => {
  return (
    <Title level={4}>
      <a
        href={newsURLData}
        target='_blank'
        rel='noopener noreferrer'>
        {newsTIData}
      </a>
    </Title>
  );
};

export default TitleComponent;
