import React, { useState, useEffect, useMemo } from 'react'
import { Buffer } from 'buffer';
export default function SearchItem({ product }) {
    const encoder = new TextEncoder();
    const [productImg, setProductImg] = useState(null);

    const getImage = async (img) => {
        let data = await fetch(`http://localhost:4000/dropbox/getimage/${product.image}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sl.Bc48JYvq1RRHRjM98mrSSM3RyqhnGU10_4xAYlHCvJhS2O9m31295f66T09Q7NO5muG3NkyV4H364cd5yAo28z1Klr2Z-PpkUa-7a5AKO_qR5smFo6ivrQ6VZZPe1RGImbWRuqF_ZguV'
          }
        });
        data = await data.json();
        if (data) {
          const imageBase64 = Buffer.from(data.img.data).toString('base64');
          setProductImg(`data:image/png;base64,${imageBase64}`)
        }
      }
    
      const memoizedGetImage = useMemo(() => getImage, []);
    
      useEffect(() => {
        memoizedGetImage(product.image);
      }, [memoizedGetImage, product.image]);
    // const getImage = async (img) => {
    //     let data = await fetch(`http://localhost:4000/dropbox/getimage/ico.png`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer sl.Bc48JYvq1RRHRjM98mrSSM3RyqhnGU10_4xAYlHCvJhS2O9m31295f66T09Q7NO5muG3NkyV4H364cd5yAo28z1Klr2Z-PpkUa-7a5AKO_qR5smFo6ivrQ6VZZPe1RGImbWRuqF_ZguV'
    //         }
    //     });
    //     data = await data.json();
    //     if (data) {
    //         const imageBase64 = Buffer.from(data.img.data).toString('base64');
    //         setProductImg(`data:image/png;base64,${imageBase64}`)
    //     }
    //     // data && (data = `data:image/png;base64,${data.img.data.toString('base64')}`);
    //     // // console.log(data.img);
    //     // data && setProductImg(data);
    // }
    
    // useEffect(() => { getImage(product.image) }, [product])
    return (
        <div className="searchitemdiv">
            {productImg ?
                <img className="searchitemavatar" src={productImg} alt={product.name} /> :
                <div className="searchitemavatar" />
            }
            {product.name}
        </div>
    )
}
