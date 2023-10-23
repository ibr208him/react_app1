import React from 'react'

export default function Products() {
  return (
    <div className="products d-flex flex-column align-items-center mt-4 pt-3 pb-3 bg-danger rounded-5 ">
      <h1 className='mb-5'> Our Products: </h1>
        <div className="product text-white w-75 p-3 py-3 rounded-5">
            <h2 className='product '>Ibraheem Maali</h2>
        </div>

        <div className="product w-75 p-3 rounded-5">
            <h2>product2</h2>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis accusantium vel asperiores omnis voluptas modi dolorem rerum voluptatibus necessitatibus alias fuga architecto harum, minus quo et! Consequuntur, voluptates deleniti?</p>
        </div>

        <div className="product w-75 p-3 rounded-5">
            <h2>product3</h2>
            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla odit, incidunt ullam quisquam neque tempora, quae impedit nostrum sed alias asperiores culpa! Reprehenderit corrupti, sint saepe laborum similique incidunt.</p>
        </div>

    </div>
  )
}
