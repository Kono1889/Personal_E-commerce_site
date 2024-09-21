import React from 'react'

const MenDropdown = () => {

  return (
    <div className='flex flex-row pl-[3rem] gap-[4rem] absolute z-10 bg-white w-[100%] pb-[1rem] '>
        <div className='grid gird-rows'>
                <p className='font-semibold mb-[10px]'>Featured</p>
                <div>New Releases</div>
                <div>Best Sellers</div>
                <div>Y2K Sneakers</div>
        </div>
        <div className='grid grid-rows'>
            <p className='font-semibold mb-[10px]'>Shoes</p>
            <div>All Shoes</div>
            <div>Lifestyle</div>
            <div>Jordan</div>
            <div>Running</div>
            <div>Football</div>
            <div>Basketball</div>
            <div>Training and Gym</div>
            <div>Skateboarding</div>
            <div>Nike by You</div>

        </div>
        <div className='grid grid-rows'>
            <p className='font-semibold mb-[10px]'>Clothing</p>
            <div>All Clothing</div>
            <div>Tops and T-Shirts</div>
            <div> Hoodies and Sweatshirts</div>
            <div>Shorts</div>
            <div>Trousers and Tights</div>
            <div> Tracksuits</div>
            <div>Jackets</div>
            <div>Kits and Jerseys</div>
        </div>
        <div className='grid grid-rows'>
            <p className='font-semibold mb-[10px]'>Discover Sport</p>
            <div>Running</div>
            <div>Football</div>
            <div>Basketball</div>
            <div>Training & Gym</div>
            <div>Tennis</div>
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

export default MenDropdown