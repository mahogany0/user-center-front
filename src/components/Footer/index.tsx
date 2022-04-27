import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'Mahogany出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Ant Design Pro',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />Mahogany Github</>,
          href: 'https://github.com/mahogany0',
          blankTarget: true,
        },
        {
          key: 'My CSDN',
          title: 'My CSDN',
          href: 'https://blog.csdn.net/sinat_37883343?spm=1010.2135.3001.5343',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
