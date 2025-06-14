import Banner from './components/blocks/Banner';
import Car from './components/blocks/Car';
import Form from './components/blocks/Form';
import Products from './components/blocks/Products';
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
        <Products />
      </Layout>
    </div>
  );
}

export default App;
