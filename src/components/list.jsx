import React, {useEffect} from "react";
import './../App.css'
import { Rating } from "@mui/material";
import { Link } from 'react-router-dom';

const List = ({ data }) => {
    const stockColor = (stock) => {
        if(stock < 5){
            return <span className="text-red-500">{`Stock < 5`}</span>
        }else if(stock === 0){
            return <span className="text-red-500">Sold Out</span>
        }else{
            return <span className="text-green-500">In Stock</span>
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
        console.log(data)
    }, [])

    if(!data){
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="ml-7 pr-10 w-full">
                <div className="flex justify-between mb-3 ">
                    <div className="font-bold">Product List</div>
                    <div className="flex w-1/4">
                        <span className="pt-2">Urutkan</span>
                        <select className="custom-sort">
                            <option>Terbaru</option>
                            <option>Terlama</option>
                            <option>Termurah</option>
                            <option>Termahal</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="flex-wrap md:flex mt-5">
                    {data.data.map((item, idx) => (
                        <>
                            <div key={idx} className="product w-[30%] border-2 border-gray-300 rounded-xl p-5 mr-5 mb-7">
                                {badgesVariant(item.attributes.isNew, item.attributes.rating, item.attributes.numOfReviews)}
                                <div className="overlay-items mb-5">
                                    {stockColor(item.attributes.stock)}
                                </div>
                                <img src={item.attributes.images} className="h-52" />
                                <h2>{item.attributes.name}</h2>
                                <div className="flex">
                                    <img src="img/poin.svg" className="mr-2" />
                                    <span className="text-green-500">{item.attributes.points} poins</span>
                                </div>
                                <div className="flex justify-between mt-2 ">
                                    <div className="flex justify-between">
                                        <div>
                                            <Rating size="small" defaultValue={ratingCalc(item.attributes.rating)} precision={0.5} readOnly />
                                        </div>
                                        <div className="text-[13px] ml-1">
                                            <span>
                                                {item.attributes.numOfReviews} 
                                                {item.attributes.numOfReviews > 1 ? ' reviews' : ' review'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="overlay-items cursor-pointer">
                                        {item.attributes.isWishlist ? (
                                            <img src="img/active-love.svg" />
                                        ) : (
                                            <img src="img/mute-love.svg" />
                                        )}
                                    </div>
                                </div>
                                <div className="overlay">
                                    <div className="text-container">
                                        <h1>{item.attributes.name}</h1>
                                    </div>
                                    <div className="button-container">
                                        <Link to={`/product/${item.id}`}>
                                            <button>
                                                View Detail
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default List;