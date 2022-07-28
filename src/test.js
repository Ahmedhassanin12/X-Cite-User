import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fs from './firebase';
import { collection, onSnapshot, orderBy, query, where, collectionGroup } from 'firebase/firestore';

const Test = ()=>{
    
    const [Brands, setBrands] = useState([]);
    useEffect(()=>{
        // const collecCat = collection(fs, 'Categories');
        // const collecCat = collection(fs, 'labtops');
        // const collecCat = collectionGroup(fs, 'labtops');
        // onSnapshot(collecCat, (res)=>{
        //         res.docs.map((doc)=>{
        //           console.log(doc);
        //             return ({
        //             ...doc.data(),
        //             id: doc.id
        //         })
        //     })
        // });

        const collec =  collection(fs, 'Products');
        let q = query(collec, where('category', '==', "tablets"));
        onSnapshot(q, (res)=>{
                // setBrands(
                    res.docs.map((doc)=>{
                      console.log(doc.data());
                        return ({
                        ...doc.data(),
                        id: doc.id
                    })
                })
                    // console.log(res.docs)
                // );
        })
    },[]);

    return (
        <>
        <h2>test</h2>
        </>
    )
}
export default Test;