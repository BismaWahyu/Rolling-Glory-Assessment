import { useState, useEffect } from 'react'
import './../../App.css'
import axiosInstance from './../../axiosConfig'
import { useParams } from 'react-router-dom';

import Header from './../../components/header';
import Footer from './../../components/footer';
import NumberInput from '../../components/numberInput';
import { Rating } from "@mui/material";

function Index() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isWishlist, setIsWishlist] = useState(false);

  const stockColor = (stock) => {
    if(stock < 5){
        return <span className="mt-1 text-red-500">{`Stock < 5`}</span>
    }else if(stock === 0){
        return <span className="mt-1 text-red-500">Sold Out</span>
    }else{
        return <span className="mt-1 text-green-500">In Stock</span>
    }
}

  const badgesVariant = (isNew, rating, review) => {
      if((rating >= 4 && review > 25) && isNew){
          return (
              <div className="triangle-hot">
                  <div className="triangle-text">
                      Hot <br /> Item
                  </div>
              </div>
          )
      }
      
      if(isNew){
          return (
              <div className="triangle-new">
                  <div className="triangle-text mt-[-8px]">New</div>
              </div>
          )
      }

      if(rating >= 4 && review > 25){
          return (
              <div className="triangle-best">
                  <div className="triangle-text text-wrap">
                      Best <br /> Seller
                  </div>
              </div>
          )
      }

  }

  const ratingCalc = (rating) => {
      let value = parseFloat(rating).toFixed(1);
      return Math.round(value * 2) / 2;
  }

  useEffect(() => {
    const fetchData = async () => {
      try{
        const resp = await axiosInstance.get(`/v2/gifts/${id}`);
        setData(resp.data.data);
        console.log(resp)
      }catch(err){
        setError(err.message);
      }
    };

    fetchData();
  }, [])

  if(!data){
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      <div className='body detail-container p-7'>
        <div className='mb-5'>
          <p>
            {`List Product > `} {data.attributes.name}
          </p>
        </div>
        <div>
          <div className='flex'>
            <div className="product w-1/2 rounded-xl p-5 mr-5 mb-7">
              {badgesVariant(data.attributes.isNew, data.attributes.rating, data.attributes.numOfReviews)}
              <img src={data.attributes.images[0]} className='h-[90%] pt-3' />
            </div>
            <div className='w-1/2'>
              <p className='text-2xl font-bold mb-3'>
                {data.attributes.name}
              </p>
              <div className="flex">
                <div>
                    <Rating size="small" defaultValue={ratingCalc(data.attributes.rating)} precision={0.5} readOnly />
                </div>
                <div className="text-[13px] ml-3">
                    <span>
                        {data.attributes.numOfReviews} 
                        {data.attributes.numOfReviews > 1 ? ' reviews' : ' review'}
                    </span>
                </div>
              </div>
              <div className="flex mb-5">
                  <img src="/img/poin.svg" className="mr-2" />
                  <span className="text-[22px] font-bold text-green-500 mr-3">{data.attributes.points} poins</span>
                  {stockColor(data.attributes.stock)}
              </div>

              <div dangerouslySetInnerHTML={ {__html: data.attributes.info} }></div>

              <div className='mt-7 text-gray-500'>
                <p>Jumlah</p>
                <div className='flex mt-3'>
                  <NumberInput aria-label="Quantity Input" min={1} max={99} />
                </div>
              </div>

              <div className='flex mt-5'>
                <div 
                  className="overlay-items cursor-pointer mr-2"
                  onClick={() => setIsWishlist(prev => !prev)}
                >
                  {/* activate if wishlist feature is ready */}
                    {/* {data.attributes.isWishlist ? (
                        <img src="/img/active-love.svg" />
                    ) : (
                        <img src="/img/mute-love.svg" />
                    )} */}
                  {isWishlist ? (
                      <img src="/img/active-love.svg" />
                  ) : (
                      <img src="/img/mute-love.svg" />
                  )}
                </div>
                <button className='bg-green-700 text-white px-20 p-2 rounded-full mr-2'>Redeem</button>
                <button className='border border-green-400 text-green-400 px-20 p-2 rounded-full'>Add to cart</button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p className='text-green-500 font-bold mb-2 underline'>Info Produk</p>
              <hr />
            </div>
            <div>
              <h2 className='text-green-600 text-[24px] mt-8 mb-5'>Rincian</h2>
              <div dangerouslySetInnerHTML={{ __html: data.attributes.description }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Index
