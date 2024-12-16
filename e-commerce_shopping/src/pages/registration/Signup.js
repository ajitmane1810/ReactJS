import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/MyContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, fireDB} from "../../firebase/FirebaseConfig"
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

const Signup = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const context = useContext(myContext);
  const {loading,setLoading} = context;

  const navigate =useNavigate();

  
  const signup = async () => {
    setLoading(true);
    // console.log(name,email,password);
    if (name === "" || email === "" || password === "") {
      return toast.error("All fields required");
    }

    
    try {
      // for create and store data in firebase auth
      const users = await createUserWithEmailAndPassword(auth,email,password);
      navigate('/')
      // console.log(users);

      //create obj
      const user = {
        name: name,
        uid : users.user.uid,
        email : users.user.email,
        date : new Date().toLocaleString(
          "en-US",
          {
            month : "short",
            day : "2-digit",
            year : "numeric",
          }
        )
      }

      //store user data in firestore database 
      //userReference
      const userRef = collection(fireDB,'users')
      // addmethod  for add data in firestore database
      await addDoc(userRef,user);
      toast.success("Signup Successfully");
      setName('');
      setEmail('');
      setPassword('');
      setLoading(false);
      
    } catch (error) {
      toast.warn('user already exist ')
      console.log(error +": userCreation Error");
      setLoading(false);
      
    }
  }
  

  return (
    <div className=" flex justify-center items-center h-screen">
      {loading && <Loader/>}
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        {/* name  */}
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>
        {/* email  */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        {/* password  */}
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button 
          onClick={signup}
          className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg">
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
