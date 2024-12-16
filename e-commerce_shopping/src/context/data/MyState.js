import React, {  useEffect, useState } from 'react'
import MyContext from './MyContext'
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';


function MyState (props) {
  // set light mode button 
  const [mode, setMode]= useState('light');
  const [loading,setLoading] = useState(false);

  const toggleMode = () => {
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


   // *********** add product section *********


  const [products,setProducts] = useState({
    title : null,
    price : null,
    imgUrl : null,
    category : null,
    description : null,
    date : new Date().toLocaleString(
      "en-US",
      {
        month : "short",
        day : "2-digit",
        year : "numeric",
      }
    )
  });

 
  const addProduct = async() =>{
    if (products.title==null || products.price == null || products.imgUrl == null || products.category == null || products.description == null) {
      return toast.error("please fill all fields")
    }
    
    setLoading(true)
    try {
      const productRef = collection(fireDB,'products');
      await addDoc(productRef,products)
      toast.success('Product Added Sucessfully');
      setTimeout(()=>{
        window.location.href = './dashboard'
      },800)
      getProductData();
      setLoading(false)
    } catch (error) {
      console.log("addProduct error : " + error);   
      setLoading(false)
    }
  }

  // *********get product ********
  const  [product ,setProduct] = useState([]);
  const getProductData = async() => {
    setLoading(true)
      try {
        const q = query(
          collection(fireDB,'products'),
          orderBy('date')
        );
        const data = onSnapshot(q,(QuerySnapshot)=>{
          let productsArray = [];
          QuerySnapshot.forEach((doc)=>{
            productsArray.push({...doc.data(),id:doc.id});
          });
          setProduct(productsArray)
          setLoading(false)
          
        });
        return () => data;
      } catch (error) {
        console.log("get product error : "+ error);
        setLoading(false)
        
      }
  }

  useEffect (() => {
    getProductData();
  },[])



  // ******************editProduct********
  const editProduct = (item) =>{
    setProducts(item)
  }
  const UpdateProduct = async() =>{
    setLoading(true)
    try {
      // setDoc is method of firebase,this method work update the database 
      await setDoc(doc(fireDB,'products',products.id),products);
      toast.success("Product Updated Successfully");
      getProductData();
      setLoading(false)
      setTimeout(()=>{
        window.location.href = '/dashboard'
      },800)
    } catch (error) {
      toast.error('Product Update Error')
      console.log("updateProduct Error : "+ error);
      setLoading(false)
    }
  }

  //***************deleteProduct**********
  const deleteProduct = async(item) =>{
    setLoading(true) 
    try {
        await deleteDoc(doc(fireDB,'products',item.id))
        toast.success('Product Deleted Successfully');
        setLoading(false)
        getProductData()
      } catch (error) {
        toast.error(' delete failed')
        console.log('product delete error');
        
        setLoading(false)
      }
  }

  // **************** Get orders from firebase *****************
  const [order,setOrder] = useState([]);
  const getOrderData =async() =>{
    setLoading(true);
    try {
      const result =await getDocs(collection(fireDB,'orders'));
      const ordersArray=[];
      result.forEach((doc)=>{
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      // console.log(ordersArray);
      setLoading(false)
      
    } catch (error) {
      console.log("Get product from Firebase : "+ error);
      toast.error('Get product from firebase error'); 
      setLoading(false)
    }
  }


  //************** */ get user details in dashboard **************

  const [user,setUser] = useState([]);
  const getUsersData = async () =>{
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB,"users"));
      const usersArray =[];
      result.forEach((doc)=>{
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      // console.log("usersArray"+usersArray);
      setLoading(false)
      
    } catch (error) {
      console.log("GetUserData on Dashboard :" + error);
      toast.error("GetUserData on Dashboard ");
      setLoading(false);
      
    }
  }

  useEffect(()=>{
      getProductData();
      getOrderData();
      getUsersData();
  },[])

  // ***************** Filter Logic ******************
  const [searchKey,setSearchKey] = useState('');
  const [filterType,setFilterType] = useState('All');
  const [filterPrice,setFilterPrice] = useState('');
  

  return (
   
    <MyContext.Provider value={{mode,toggleMode,loading,setLoading,
      products,setProducts,addProduct,product,
      editProduct,UpdateProduct,deleteProduct,order,user,
      searchKey,setSearchKey,filterType,setFilterType,filterPrice,setFilterPrice
    }}>
        {/* using this data pass from parent to child directly */}
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState