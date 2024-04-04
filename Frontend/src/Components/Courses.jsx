import React from 'react';
import list from '../../public/list.json';
import Card from './Card';
import {Link} from 'react-router-dom';
// import Card from './Card'
function Courses() {
  let done = list.filter((value) => value);
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 text-black text-center'>
        <div className='pt-28 item-center justify-center dark:text-white'>
          <h1 className='text-2xl   md:text-4xl'>we delighted to have you <span 
           className='text-pink-500'>Hare! :)</span></h1>
          <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores dolorum
            officiis eius ut vitae! Consectetur, culpa. Ad veniam accusamus eveniet soluta
            nobis ipsa ullam, adipisci libero eaque reprehenderit officia praesentium
            ducimus earum autem porro.</p>
        </div>
        <Link to="/">
        <button className='bg-pink-500 text-white rounded-md  px-4 py-2 hover:bg-pink-500 durarion-300 mt-6'>Back</button></Link>

        <div className='mt-12 grid  grid-cols-1 md:grid-cols-4'>
              {
          done.map(item => (
            <Card data={item} key={item.id}/>
          ))
        }
        </div>
      </div>
    </>
  )
}

export default Courses
