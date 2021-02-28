import React,{ useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import {IoIosHeart, IoIosHeartEmpty } from 'react-icons/md';

// const SaveFavorite = (pid) => {
//     const [fave, setFave] = useState([]);

//     useEffect(() => {
//         if (getArray !== 0) {
//             setFavorites([...getArray])
//         }
//     }, [])

//     const addFave = (props) => {
//         let array = favorites;
//         let addArray = true;
//         array.map((item) => {
//             ir (item === props.i) {
//                 array.splice(key, 1);
//                 addArray = false;
//             }
//         });
//         if (addArray) {
//             array.push(props.i);
//         }
//         setFavorites([...array])
//         localStorage.setItem("favorites", JSON.stringify(favorites))

//         let storage = localStorage.getItem('favItem'  + (props.i) || '0')
//         if (storage == null) {
//             localStorage.setItem(('favItem' + (props.i)), JSON.stringify(props.items));
//         }
//         else { localStorage.removeItem('favItem' + (props.i));
//     }
//     }

    const sendFave = async (id) => {
        fetch("https://localhost:3000/favorite/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            favorites: {
              podcastid: id,
            },
          }),
        })
          .then(res => { console.log(res) })
          .catch(err => console.log(err))
    }

return(
    <div>
        {/* {fave.includes(i) ? (
            <IoIosHeart onClick={() => setFave({items, i})}
            style={{ color: 'red' }} />
        ) : (
            <IoIosHeartEmpty onClick={() => setFave({ items, i})}
            style={{ color: 'red' }} />
        )} */}
    </div>
)
}
export default SaveFavorite;



