import React from 'react'
import { Link } from 'react-router-dom'
import RelatedProducts from './RelatedProducts'

const Hero = () => {
  return (
    <section>
        <div className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[744px] w-full'>
            <div className='relative top-24 xs:top-32'>
                <h4 className='uppercase medium-18 tracking-wider'>TRENDY TECH</h4>
                <h2 className='h1 capitalize max-w-[40rem]'>The latest tech and gaming <span className='text-secondary'>launches at Trust Electronics </span> Shop Today!</h2>
                <p className='my-5 max-w-[33rem]'>Big brands, huge range, fancy features</p>
                {/* buttons */}
                <div className='inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl'>
                    <div className='text-center regular-14 leading-tight pl-5'>
                        <h5 className='uppercase font-bold'>30% Off</h5>
                        <p className='regular-14'>For students</p>
                    </div>
                    <Link to={''} className='btn-dark rounded-xl flexCenter !py-5'>Shop now</Link>
                </div>
                <div className='mt-16'>
                    <RelatedProducts />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero