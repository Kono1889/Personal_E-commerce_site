import React from 'react'

const WomenDropdown = () => {

  return (
    <div className='flex flex-row pl-[3rem] gap-[4rem] absolute z-10 bg-white w-[100%] pb-[1rem] '>
        <div className='grid gird-rows'>
                <p className='font-semibold mb-[10px]'>Featured</p>
                <div>New Releases</div>
                <div>Best Sellers</div>
                <div>Nike Style By</div>
                <div>Y2K Sneakers</div>
        </div>
        <div className='grid grid-rows'>
            <p className='font-semibold mb-[10px]'>Shoes</p>
            <div>All Shoes</div>
            <div>Lifestyle</div>
            <div>Jordan</div>
            <div>Running</div>
            <div>Football</div>
            <div></div>
            <div>Training and Gym</div>
            <div>Nike by You</div>

        </div>
        <div className='grid grid-rows'>
            <p className='font-semibold mb-[10px]'>Clothing</p>
            <div>All Clothing</div>
            <div>Tops and T-Shirts</div>
            <div> Hoodies and Sweatshirts</div>
            <div>Leggings</div>
            <div>Shorts</div>
            <div>Trousers</div>
            <div>Matching Sets</div>
            <div>Jackets</div>
            <div>Sports Bras</div>
            <div>Skirts and Dresses</div>
        </div>
        <div className='grid grid-rows'>
            <p className='font-semibold mb-[10px]'>Discover Sport</p>
            <div>Fitness</div>
            <div>Running</div>
            <div>Football</div>
            <div>Basketball</div>
            <div>Tennis</div>
            <div>Dance</div>
            <div>Yoga</div>
            <div>Golf</div>
        </div>
        <div className='grid grid-rows'>
            <p className='font-semibold mb-[10px]'>Accessories & Equipment</p>
            <div> All Accessories & Equipment</div>
            <div>Bags and Backpacks</div>
            <div>Headwear</div>
            <div>Socks</div>
        </div>
    </div>
  )
}

export default WomenDropdown;