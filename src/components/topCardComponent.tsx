import { Button, Checkbox, CheckboxProps, Flex, Typography } from 'antd';
import React from 'react';
import { IData_SnippetNews } from '../types';
import TitleComponent from './titleComponent';
import InfoArticleComponent from './infoArticleComponent';
import { ConfigProvider } from 'antd';

const { Text } = Typography;

interface SnippetProps {
  news: IData_SnippetNews;
}

const TopCardComponent: React.FC<SnippetProps> = ({ news }) => {
  // Форматирование даты
  const formattedDate = new Date(news.DP);
  const day = formattedDate.getDate();
  const month = formattedDate.toLocaleString('en-US', { month: 'long' });
  const year = formattedDate.getFullYear();
  const formattedDateString = `${day} ${month} ${year}`;
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            colorText: '#fff',
            colorLink: '#1677ff'
          },
          Button: {
            defaultBg: '#44ffa8',
            defaultBorderColor: 'transparent',
            defaultHoverBorderColor: 'transparent'
          },
          Checkbox: {
            colorBgContainer: 'transparent',
            colorBorder: '#fff',
            colorPrimary: '#3f976e',
            borderRadiusSM: 1
          },
          Tag: {
            defaultBg: 'transparent',
            colorText: '#898989',
            borderRadiusSM: 10
          }
        }
      }}>
      <Flex justify='space-between'>
        <Flex gap='large'>
          <Text strong>{formattedDateString} </Text>
          <Flex gap='small'>
            <Text strong>{news.REACH}k</Text>
            Reach
          </Flex>

          <Flex gap='small'>
            <span>Top traffic:</span>
            {news.TRAFFIC.map((traffic, index) => (
              <span key={index}>
                {traffic.value} <Text strong>{(traffic.count * 100).toFixed(2)}%</Text>
              </span>
            ))}
          </Flex>
        </Flex>
        <Flex gap='small'>
          <Button>{news.SENT}</Button>
          <Checkbox onChange={onChange}></Checkbox>
          <Checkbox onChange={onChange}></Checkbox>
        </Flex>
      </Flex>
      <TitleComponent
        newsURLData={news.URL}
        newsTIData={news.TI}
      />
      <InfoArticleComponent news={news} />
    </ConfigProvider>
  );
};

export default TopCardComponent;
