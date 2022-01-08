import type { NextPage } from 'next';
import HeroSection from 'components/HeroSection';
import ShowCase from 'components/ShowCase';
import TodoListShowCase from 'components/TodoListShowCase';
import Layout from 'components/Layout/Layout';
import Input from 'components/Input/Input';
import ShowTabs from 'components/ShowTabs/ShowTabs';

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <ShowCase />
      <TodoListShowCase />
      <ShowTabs/>
      <Input />
    </Layout>
  );
};

export default Home;
