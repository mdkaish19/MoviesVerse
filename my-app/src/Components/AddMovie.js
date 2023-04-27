import React, { useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import {addDoc} from "firebase/firestore";
import {movieRef, moviesRef} from "../Firebase/firebase";
import swal from "sweetalert";
import { Appstate } from "../App";
import { useNavigate } from "react-router-dom";
import Detail from "./Detail";

const AddMovie = () => {
  const useAppstate = useContext(Appstate)
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    year: "",
    description: "",
    image: "",
    rated: 0,
    rating: 0
  });
  const[loading, setLoading] = useState(false);

  const addMovie = async () => {
    setLoading(true);
    try{
      if(useAppstate.login) {
    await addDoc (moviesRef, form);
    swal({
      title: "successfully Added",
      icon: "success",
      buttons: false,
      timer: 3000
    })
    setForm({
      title: "",
      year: "",
      description: "",
      image: ""
    })
  } else {
    navigate('/login')
  }
} catch(err) {
  swal({
    title: err,
    icon: "error",
    buttons: false,
    timer: 3000
  })
}
setLoading(false);
}

  return (
    <div className="AddMovie">
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-5">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Add Movie
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative text-left">
                  <label for="name" class="leading-7 text-sm text-gray-100">
                    Title
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    class="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative text-left" >
                  <label for="email" class="leading-7 text-sm text-gray-100">
                    Year
                  </label>
                  <input
                    type="year"
                    id="year"
                    name="year"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative text-left">
                  <label for="message" class="leading-7 text-sm text-gray-100">
                    Image Link
                  </label>
                  <input
                    id="message"
                    name="message"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative text-left">
                  <label for="message" class="leading-7 text-sm text-gray-100">
                  Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.discriptions}
                    onChange={(e) => setForm({ ...form, discriptions: e.target.value })}
                    class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button onClick={addMovie} class="flex mx-auto text-white  bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 rounded text-lg">
                 {loading ? <TailSpin height= {20} color="white"/> : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMovie;
