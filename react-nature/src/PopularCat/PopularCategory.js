import React from 'react'
import "../Style.css"

const PopularCategory = () => {
    const boxContent = [
        {
            boximg: "././images/cat-1.png",
            boxname: " Vegetable"
        },
        {
            boximg: "././images/cat-2.png",
            boxname: "Fruits"
        },
        {
            boximg: "././images/cat-3.png",
            boxname: "Dried"
        },
        {
            boximg: "././images/cat-4.png",
            boxname: "Juice"
        },
        {
            boximg: "././images/cat-5.png",
            boxname: "Salad"
        },
        {
            boximg: "././images/cat-6.png",
            boxname: "Organic"
        }
    ]
  return (
    <>
        <div className='container-fluid popular_cate'>
            <div className='container'>
                <div className='header_content'>
                    <h1>Popular <span>Category</span></h1>
                    <p>What separates theme from all other web design agencies is the ability to offer the most Friendly Experience you can imagine.</p>
                </div>
                <div className='row'>
                    {boxContent.map((curElem) => {
                        return (
                            <>
                                <div className='col-lg-2' key={curElem}>
                                    <div className='innercard'>
                                        <div className='img_slot'>
                                            <img src={curElem.boximg} className='img-fluid' alt='category icon' />
                                        </div>
                                        <div className='cate_name'>
                                            <h4>{curElem.boxname}</h4>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                    
                </div>
            </div>
            <div className='container mt-5'>
                <div className='innerSlt text-center'>
                    <h5>Start from <span>$39.99</span></h5>
                    <h2>Organic Food up to 20% off</h2>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default PopularCategory
