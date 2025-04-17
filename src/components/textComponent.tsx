import { useEffect, useState } from 'react';
import { Button, Flex, Typography } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';

const { Text } = Typography;

interface SnippetProps {
  newsABData: string;
}

const TextComponent: React.FC<SnippetProps> = ({ newsABData }) => {
  // Текст статьи
  const [newsText, setNewsText] = useState('');
  const [isFullTextVisible, setFullTextVisible] = useState(false);

  useEffect(() => {
    const fetchText = async () => {
      try {
        const response = await fetch(newsABData);
        const text = await response.text();
        setNewsText(text);
      } catch (error) {
        console.error('Error fetching text file:', error);
      }
    };

    fetchText();
  }, []);

  const getFirst50Words = (text: string) => {
    const words = text.split(/\s+/).slice(0, 100);
    return words.join(' ') + (words.length === 100 ? '...' : '');
  };

  const toggleTextVisibility = () => {
    setFullTextVisible((prev) => !prev);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            colorText: '#fff'
          },
          Button: {
            defaultBorderColor: 'transparent',
            defaultHoverBorderColor: 'transparent'
          }
        }
      }}>
      <Flex
        gap='small'
        align='flex-start'
        vertical>
        <Text>{isFullTextVisible ? newsText : getFirst50Words(newsText)}</Text>
        {newsText && (
          <Button
            color='blue'
            variant='link'
            onClick={toggleTextVisibility}>
            {isFullTextVisible ? 'Hide' : 'Show more'}
            {isFullTextVisible ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </Button>
        )}
      </Flex>
    </ConfigProvider>
  );
};

export default TextComponent;
