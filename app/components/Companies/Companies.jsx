import React from 'react'
import companies from './companies.json';
export default function Companies() {

  return (
    <footer className=' w-full bg-green-vogue-700'>

      <div className='w-full py-5 flex gap-5 px-10 justify-evenly flex-wrap'>
        {
          companies.map(company =>

            <figure key={company.id} className='w-40 h-14 flex-shrink-0'>
              <img src={company.logo} alt="" className='w-full h-full' />
            </figure>

          )

        }

      </div>
      <p className='w-full text-center'>Copyright © 2024 Funva </p>
    </footer>
  )
}