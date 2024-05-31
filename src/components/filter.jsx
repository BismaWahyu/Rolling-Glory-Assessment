import React from "react";

const Filter = () => {
    return (
        <>
            <div className="mt-5 ml-7 mr-10 w-[20%]">
                <div className="font-bold mb-3">Filter</div>
                <hr />
                <div className="mt-3 p-3 border-2 border-gray-300">
                    <div className="flex justify-between py-2">
                    <label>Rating 4 ke atas</label>
                    <input
                        type="checkbox"
                        name="rating"
                        value="4-ke-atas"
                        className="cursor-pointer"
                    />
                    </div>
                    <div className="flex justify-between py-2">
                    <label>Stock Tersedia</label>
                    <input
                        type="checkbox"
                        name="stock"
                        value="tersedia"
                        className="cursor-pointer"
                    />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter;