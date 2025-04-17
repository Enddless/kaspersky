import React, { useState } from 'react';
import { Button, ConfigProvider } from 'antd';
import { IData_SnippetNews } from '../types';
import { Card, Flex, Typography } from 'antd';
import TopCardComponent from './topCardComponent';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface SnippetProps {
  news: IData_SnippetNews;
}

const DuplicatesComponent: React.FC<SnippetProps> = ({ news }) => {
  const [showAll, setShowAll] = useState(false);
  const duplicatedCount = 5;

  // Создаем массив компонентов
  const duplicatedComponents = Array.from({ length: duplicatedCount }, (_, index) => (
    <ConfigProvider
      key={index}
      theme={{
        components: {
          Card: {
            colorBgSolid: '#0a20e4'
          }
        }
      }}>
      <Card>
        <TopCardComponent news={news} />
      </Card>
    </ConfigProvider>
  ));

  const handleToggleDuplicates = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            colorText: '#fff'
          }
        }
      }}>
      <Flex
        gap='small'
        vertical
        style={{ marginTop: '15px' }}>
        <Flex
          gap='small'
          justify='space-between'>
          <Flex gap='small'>
            <span>Duplicates:</span>
            <Text strong>{duplicatedCount}</Text>
          </Flex>
          <span>
            By Relevance
            <DownOutlined />
          </span>
        </Flex>

        <Flex
          vertical
          gap='large'>
          {duplicatedComponents[0]}
          {showAll && duplicatedComponents.slice(1)}
        </Flex>
        <Button
          style={{ marginTop: '15px' }}
          color='primary'
          onClick={handleToggleDuplicates}>
          {showAll ? (
            <>
              <UpOutlined /> Hide Duplicates{' '}
            </>
          ) : (
            <>
              <DownOutlined /> View Duplicates{' '}
            </>
          )}
        </Button>
      </Flex>
    </ConfigProvider>
  );
};

export default DuplicatesComponent;
