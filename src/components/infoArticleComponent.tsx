import { Flex, Typography } from 'antd';
import { IData_SnippetNews } from '../types';
import { GlobalOutlined, ReadOutlined } from '@ant-design/icons';
import AuthorComponent from './authorComponent';
import { ConfigProvider } from 'antd';

const { Link, Text } = Typography;

interface SnippetProps {
  news: IData_SnippetNews;
}
const InfoArticleComponent: React.FC<SnippetProps> = ({ news }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            colorLink: '#1677ff'
          }
        }
      }}>
      <Flex
        gap='middle'
        align='center'>
        <Flex
          gap='small'
          align='center'>
          <GlobalOutlined />
          <Text type='success'>
            <Link
              href={news.DOM}
              target='_blank'>
              globalsecuritymag.com
            </Link>
          </Text>
        </Flex>
        <Flex
          gap='small'
          align='center'>
          <img
            src={news.FAV}
            alt='Иконка флага Австрии'
            width={18}
            height={18}
          />
          {news.CNTR}
        </Flex>
        <Flex
          gap='small'
          align='center'>
          <ReadOutlined />
          {news.CNTR_CODE}
        </Flex>

        <AuthorComponent newsAuData={news.AU} />
      </Flex>
    </ConfigProvider>
  );
};

export default InfoArticleComponent;
