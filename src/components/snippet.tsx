import { news } from '../mock';
import { ConfigProvider } from 'antd';
import Card from 'antd/es/card/Card';
import TextComponent from './textComponent';
import OriginalResourceComponent from './originalResComponent';
import TopCardComponent from './topCardComponent';
import DuplicatesComponent from './duplicatesComponent';
import TagsComponents from './tagsComponent';

const Snippet: React.FC = () => {
  return (
    <main className='container'>
      <ConfigProvider
        theme={{
          components: {
            Card: {
              colorBgSolid: '#898989',
              colorBgContainer: 'transparent',
              colorText: '#898989'
            }
          }
        }}>
        <Card className='card'>
          <TopCardComponent news={news} />

          <TextComponent newsABData={news.AB} />
          <TagsComponents newsKWData={news.KW} />
          <OriginalResourceComponent newsURLData={news.URL} />

          <DuplicatesComponent news={news} />
        </Card>
      </ConfigProvider>
    </main>
  );
};

export default Snippet;
