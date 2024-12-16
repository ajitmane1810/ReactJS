import React, { useEffect, useState } from 'react'
import BookCards from './BookCards';
import axios from 'axios';

const Books = () => {
    const [data, setData] = useState([])
    const [deleted,isDeleted] = useState(false)

    useEffect(() => {

        axios.get('http://localhost:8080/getAllBooks')
        .then(function (response) {
            setData(response.data)
            isDeleted(false)
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }, [data,deleted])


    

    const handleDelete = async (id) => {
        try {
          axios.delete(`http://localhost:8080/${id}`)
          isDeleted(true)
        } catch (error) {
          console.error('Error deleting record:', error);
        }
      };
    

   

  return (
    <div style={{animation: "fadeIn 1s ease-out forwards",
      height: '100vh',  // Adjust this value as needed
      overflowY: 'auto',
      paddingBottom: '20px',
      boxSizing: 'border-box'

     }}>
        {
        data!=null?
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '40px' }}>

            {data.map((book) => (
                <BookCards key={book.id} record={book}
                onDelete={handleDelete} />
            ))}

        </div>
        </>
        :
        ""
        }
    </div>
  )
}

export default Books