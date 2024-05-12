import React from 'react'
import { TbTruckReturn } from 'react-icons/tb'
import about from '../assets/cyberMonday.jpeg'

const About = () => {
  return (
    <section className='max-padd-container py-12 xl:py-32'>
      {/* container */}
      <div className='flex flex-col gap-16 xl:gap-8 xl:flex-row'>
        {/* left */}
        <div className='flex-1'>
          <h3 className='h3 capitalize'>Experience amazing gadgets with low prices!</h3>
          <p className='py-5'>Trust TrustElectornics ABC to get all your devices and electronics fro your homes and businesses!</p>
          <div className='flex flex-col items-start gap-y-4'>
            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md '>
                <TbTruckReturn className='text-white text-2xl'/>
              </div>
              <div>
                <h4 className='medium-18'>Easy Returns Process</h4>
                <p> At Trust Electronics ABC, we have a 60 days return policy for all products. We cherish your convience and review your experience</p>
              </div>
            </div>
            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md '>
                <TbTruckReturn className='text-white text-2xl'/>
              </div>
              <div>
                <h4 className='medium-18'>Secure Payment Options</h4>
                <p>Guaranteed secure payment means that allows you to use different types of cards, which include Visa, Master, or credit cards</p>
              </div>
            </div>
            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md '>
                <TbTruckReturn className='text-white text-2xl'/>
              </div>
              <div>
                <h4 className='medium-18'>Live Customer Support</h4>
                <p>Enjoin our 24/7 support services that helps with all types of enquires, that includes installations, setup, and enquires</p>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className='flex-1 flexCenter'>
          <div>
            <img src={about} alt="" height={588} width={588}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About