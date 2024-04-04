import React from 'react'

function Card({data}) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card  w-92   shadow-xl hover:scale-105 duration-200 text-black dark:border dark:-bg-slate-900 dark:text-white ">
          <figure>
            <img src={data.images} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {data.name}
              <div className="badge badge-secondary">Free</div>
            </h2>
            <p>{data.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${data.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
