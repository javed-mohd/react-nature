import React, { useState } from 'react'
import TrendingApi from './TrendingApi'

const TrendingProduct = () => {

    const UneaqueList = [...new Set
        (TrendingApi.map ((currentElem) => 
            {
                return currentElem.category;
            })
        ),
        "All Category"
    ];
    
    const [currentdata, setCurrentdata] = useState(TrendingApi);

    const filteItem = (category) => {

        if(category=== "All Category") {
            setCurrentdata(TrendingApi);
            return
        }

        const updatedList = TrendingApi.filter ((curElem) => {
            return curElem.category === category;
        })
        setCurrentdata(updatedList);
    }
  return (
    <>
        <div className='container-fluid trending_products'>
            <div className='container'>
                <div className='top_content'>
                    <div className='header_content'>
                        <h1>Trending <span>Products</span></h1>
                        <p>We understand the importance of approaching each work integrally and believe in the power of simple and easy communication.</p>
                    </div>
                    <div className='right_btns'>
                        <div className='btn-group'>
                            {UneaqueList.map((currentElem) => {
                                return (
                                    <button className={currentdata === currentElem ? '' : 'active'} onClick={()=> filteItem(currentElem)}>{currentElem}</button>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='row mt-2'>
                    {currentdata.map((curElem) => {
                        return (
                            <>
                                <div className='col-lg-3 px-1' key={curElem.id}>
                                    <div className='card_product'>
                                        <div className='img_section_2'>
                                            <img src={curElem.image_url} className='img-fluid' alt='Product Image1' />
                                        </div>
                                        <div className='product_detail'>
                                            <h3 className='product_name'>{curElem.name}</h3>
                                            <p className='product_price'>${curElem.price}</p>
                                            <button>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default TrendingProduct
