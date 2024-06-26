import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactStars from "react-stars";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../Firebase/firebase";
import Detail from "./Detail";
import {Link} from "react-router-dom"

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
    useEffect(()=> {
      async function getData() {
        setLoading(true);
        const _data = await getDocs(moviesRef)
        _data.forEach((doc) => {
          setData((prv) => [...prv, {...(doc.data()), id: doc.id}])
        })
        setLoading(false);
      }
getData();
    },[])

  return (
    <div className="flex flex-wrap justify-between px-4 mt-2" >
      {loading ? <div className="w-full flex justify-center items-center h-96"><ThreeDots height={40} color="white" /></div> :
      data.map((e, idx) => {
        return (
          <Link to={`/Detail/${e.id}`}>
            <div className="card font-medium shadow-lg p-2 hover:-translate-y-4 cursor-pointer  md:mt-0 mt-6 transition-all durration-500"  key ={e.id}>
            <img className="h-60 md:h-72" src={e.image} alt="img"/>
            <h1 className="flex items-center">
             {e.title}
            </h1>
            <h1 className="flex items-center">
              <span className="text-gray-400 mr-2"> Rating :</span>
              <ReactStars
              size={20}
              half={true}
              value= {e.rating/e.rated}
              edit={false}/>
            </h1>
            <h1>
              <span className="text-gray-400 mr-2">Year:</span> {e.year}
            </h1>
          </div>
          </Link>
        );
      })
    }
    <Detail/>
    </div>
  );
};

export default Cards;
