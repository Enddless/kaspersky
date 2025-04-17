import { useState } from 'react';
import { Flex } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface SnippetProps {
  newsAuData: string[];
}

const AuthorComponent: React.FC<SnippetProps> = ({ newsAuData }) => {
  // Авторы
  const [showAll, setShowAll] = useState(false);
  const handleToggle = () => {
    setShowAll(!showAll);
  };
  const displayedAuthors = showAll ? newsAuData : newsAuData.slice(0, 2);

  return (
    <Flex
      gap='small'
      align='center'>
      <UserOutlined />
      {displayedAuthors.map((author, index) => (
        <Flex
          gap='small'
          key={index}>
          {author}
          {index < displayedAuthors.length - 1 && ', '}
        </Flex>
      ))}
      {!showAll && newsAuData.length > 2 && (
        <span
          style={{ cursor: 'pointer', marginLeft: '8px' }}
          onClick={handleToggle}>
          et al.
        </span>
      )}
    </Flex>
  );
};

export default AuthorComponent;
