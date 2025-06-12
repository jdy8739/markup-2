import Banner from './components/blocks/Banner';
import Car from './components/blocks/Car';
import Form from './components/blocks/Form';
import ServiceList from './components/blocks/ServiceList';
import Solutions from './components/blocks/Solutions';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="min-w-[30.00rem]">
      <Layout>
        <Banner />
        <Car />
        <Form />
        <ServiceList />
        <Solutions />
      </Layout>
    </div>
  );
}

export default App;
