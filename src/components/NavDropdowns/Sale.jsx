import React from 'react'

const Sale = () => {

  return (
    <div className='flex flex-row pl-[3rem] gap-[4rem] absolute z-10 bg-white w-[100%] pb-[1rem] '>
        <div className='grid gird-rows'>
                <p className='font-semibold mb-[10px]'>Sale</p>
                <div>Shop All Sale</div>
                <div>Best Sellers</div>
                <div>Last Chance</div>
        </div>
        <div className='grid grid-rows'>
            <p className='font-semibold mb-[10px]'>Sale For Men</p>
            <div>Shop All Sale Men's</div>
            <div>Shoes</div>
            <div>Clothing</div>
            <div>Accessories and Equipment</div>
        </div>
        <div className='grid grid-rows'>
            <p className='font-semibold mb-[10px]'>Sale for Women</p>
            <div>Shop All Sale Women's</div>
            <div>Shoes</div>
            <div>Clothing</div>
            <div>Accessories and Equipment</div>            
        </div>
        <div className='grid grid-rows'>
            <p className='font-semibold mb-[10px]'>Sale for Kids</p>
            <div>Shop all Sale Kids'</div>
            <div>Shoes</div>
            <div>Clothing</div>
            <div>Accessories and Equipment</div>
        </div>
        <div className='grid grid-rows'>
            <p className='font-semibold mb-[10px]'>Sale by Sport</p>
            <div> Running</div>
            <div>Football</div>
            <div>Gym and Training</div>
            <div>Tennis</div>
            <div>Golf</div>
            <div>Yoga</div>
        </div>
    </div>
  )
}

export default Sale;