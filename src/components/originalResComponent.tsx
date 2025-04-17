import { Button, Flex, Typography } from 'antd';
import { ConfigProvider } from 'antd';

interface SnippetProps {
  newsURLData: string;
}
const { Link } = Typography;

const OriginalResourceComponent: React.FC<SnippetProps> = ({ newsURLData }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: '#252630',
            defaultBorderColor: 'transparent',
            defaultHoverBorderColor: 'transparent'
          }
        }
      }}>
      <div>
        <Button>
          <Flex
            justify='center'
            align='center'>
            <Link
              href={newsURLData}
              target='_blank'>
              Original Resource
            </Link>
          </Flex>
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default OriginalResourceComponent;
