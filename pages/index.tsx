import type { NextPage } from 'next';
import HeroSection from 'components/HeroSection';
import ShowCase from 'components/ShowCase';
import TodoListShowCase from 'components/TodoListShowCase';
import Layout from 'components/Layout/Layout';
import Input from 'components/Input/Input';
import ShowTabs from 'components/ShowTabs/ShowTabs';
import Head from 'components/Head/Head';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head title='Dona - Home' description='a more humane to-do list'/>
      <HeroSection />
      <ShowCase />
      <TodoListShowCase />
      <ShowTabs/>
      <Input />
    </Layout>
  );
};

export default Home;
