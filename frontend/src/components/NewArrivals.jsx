import React, { useEffect, useState } from 'react'
import Item from './Item'


const NewArrivals = () => {

  const [new_collection, setNew_collection] = useState([])

  useEffect(()=> {
    fetch('http://localhost:4000/newcollections').then((response)=> response.json()).then((data)=> setNew_collection(data));
  }, [])

  return (
    <section className='max-padd-container bg-primary p-12 xl:py-28'>
    {/* title */}
    <div className='text-center max-w-xl mx-auto pb-4'>
      <h3 className='h3'>New Arrivals</h3>
      <p>Get access to latest tech gadgets on Trust Electronics ABC</p>
    </div>
    {/* container */}
    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32'>
      {new_collection.map((item)=> (
        <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
      ))}
    </div>
  </section>
  )
}

export default NewArrivals