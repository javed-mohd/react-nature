import React from 'react'

const ChildCard = ({currentData}) => {
  return (
    <>
        {
            currentData.map((curElem) => {
                return (
                    <>
                        <div className='col-lg-4' key={curElem.id}>
                            <div className='card'>
                                <img src= {curElem.imageurl} alt='Social Feature Icon' className='img-fluid' />
                                <h3>{curElem.name}</h3>
                                <p>{curElem.description}</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </>
                )
            })
        }
    </>
  )
}

export default ChildCard
