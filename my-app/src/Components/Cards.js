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
    // {
    //   name: "The Dark",
    //   year: "2023",
    //   rating: 5,
    //   img: "https://marketplace.canva.com/EAFMqwkPfOY/2/0/1131w/canva-black-minimalist-horror-movie-poster-3bttgZhMDnA.jpg",
    // },
    // {
    //   name: "Wood",
    //   year: "2023",
    //   rating: 4.5,
    //   img: "https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg",
    // },
    // {
    //   name: "Ghosted",
    //   year: "2023",
    //   rating: 5,
    //   img: "https://www.joblo.com/wp-content/uploads/2023/03/ghosted-poster-400x600.jpg",
    // },
    // {
    //   name: "Mystery of Forest",
    //   year: "2023",
    //   rating: 3.5,
    //   img: "https://marketplace.canva.com/EAE_E8rjFrI/1/0/1131w/canva-minimal-mystery-of-forest-movie-poster-ggHwd_WiPcI.jpg",
    // },
    // {
    //   name: "Venom",
    //   year: "2018",
    //   rating: 4.,
    //   img: "https://movie.webindia123.com/movie/2018/hollywood/april/venom/venom.jpg",
    // },
    // {
    //   name: "John Wick 3",
    //   year: "2020",
    //   rating: 4.5,
    //   img: "https://rukminim1.flixcart.com/image/416/416/kxtaxzk0/poster/a/b/y/medium-john-wick-john-wick-chapter-3-keanu-reeves-movie-poster-original-imaga6jqtsgrgn6f.jpeg?q=70",
    // },
    // {
    //   name: "World War Z",
    //   year: "2023",
    //   rating: 3.5,
    //   img: "https://blog.karachicorner.com/wp-content/uploads/2013/04/large/WorldWarZ+movie+posters.jpg",
    // },
    // {
    //   name: "X-Men",
    //   year: "2023",
    //   rating: 4,
    //   img: "https://s3.crackedcdn.com/phpimages/quickfix/8/4/7/261847.jpg?v=1",
    // },
    // {
    //   name: "Blade Runner",
    //   year: "2022",
    //   rating: 4.5,
    //   img: "https://rukminim1.flixcart.com/image/416/416/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=70",
    // },
    // {
    //   name: "Black Panther",
    //   year: "2020",
    //   rating: 4,
    //   img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/99790a53131197.596c4c8d36869.jpg",
    // },
    // {
    //   name: "Dora",
    //   year: "2023",
    //   rating: 3.5,
    //   img: "https://cdn.shopify.com/s/files/1/0969/9128/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_66c87e56-24a2-4135-b709-a6b98a7f7bce_large.jpg?v=1577693664",
    // },
    // {
    //   name: "Joker",
    //   year: "2023",
    //   rating: 4,
    //   img: "https://www.indiewire.com/wp-content/uploads/2019/12/JokerPoster1200_5ca3c435318d42.29270548.jpg?w=800",
    // },

  return (
    <div className="flex flex-wrap justify-between px-4 mt-2" >
      {loading ? <div className="w-full flex justify-center items-center h-96"><ThreeDots height={40} color="white" /></div> :
      data.map((e, i) => {
        return (
          <Link to={`/detail/${e.id}`}><div key={i} className="card font-medium shadow-lg p-2 hover:-translate-y-4 cursor-pointer md:mt-0 mt-6 transition-all durration-500">
            <img className="h-60 md:h-72" src={e.image} />
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
          </div></Link>
        );
      })
    }
    <Detail/>
    </div>
  );
};

export default Cards;
