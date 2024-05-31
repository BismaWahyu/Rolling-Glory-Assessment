import { useState, useEffect } from 'react'
import './../App.css';
import axiosInstance from './../axiosConfig'

import Header from '../components/header';
import Footer from '../components/footer';
import Filter from '../components/filter';
import List from '../components/list';

function Index() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const resp = await axiosInstance.get('/v2/gifts?page[number]=1&page[size]=20');
        setData(resp.data);
      }catch(err){
        setError(err.message);
      }
    };

    fetchData();
  }, [])

  return (
    <>
      <div className='body'>
        <Header />
        <div className='flex'>
          <Filter />
          <List data={data} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Index
