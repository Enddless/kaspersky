import React, { useState } from 'react';
import { Button, Tag } from 'antd';
import { ProductOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';

interface IData_TagItem {
  value: string;
  count: number;
}

interface SnippetProps {
  newsKWData: IData_TagItem[];
}

const TagsComponents: React.FC<SnippetProps> = ({ newsKWData }) => {
  // Ключевые слова
  const [showAll, setShowAll] = useState(false);
  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const displayedKeyWords = showAll ? newsKWData : newsKWData.slice(0, 3);
  const hiddenCount = newsKWData.length > 3 ? newsKWData.length - 3 : 0;

  return (
    <ConfigProvider
      theme={{
        components: {
          Tag: {
            defaultBg: 'transparent',
            colorText: ' #898989',
            borderRadiusSM: 10
          },
          Button: {
            defaultBorderColor: 'transparent',
            defaultHoverBorderColor: 'transparent'
          }
        }
      }}>
      {displayedKeyWords.map((tag) => (
        <Tag
          key={tag.value}
          icon={<ProductOutlined />}>
          {tag.value} ({tag.count})
        </Tag>
      ))}
      {!showAll && hiddenCount > 0 && (
        <Button
          color='blue'
          variant='link'
          onClick={handleToggle}>
          Show all + {hiddenCount}
        </Button>
      )}
    </ConfigProvider>
  );
};

export default TagsComponents;
