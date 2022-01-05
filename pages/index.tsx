import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar';
import styled from 'styled-components';
import { GlobalStyle } from 'styles/global';
import HeroSection from 'components/HeroSection';
import ShowCase from 'components/ShowCase';
import TodoListShowCase from 'components/TodoListShowCase';
import DonaTabs from 'components/DonaTabs';
import Layout from 'components/Layout/Layout';



const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <ShowCase />
      <TodoListShowCase />
      <DonaTabs />
    </Layout>
  );
};

export default Home;
