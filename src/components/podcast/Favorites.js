// import React,{ useState, useEffect } from 'react';
// import { Button } from 'reactstrap';
// import {IoIosHeart, IoIosHeartEmpty } from 'react-icons/md';

// const SaveFavorite = (pid) => {
//     const [fave, setFave] = useState([]);
//     const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

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

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('https://localhost:3000/favorite/create', {
//             method: 'POST',
//             body: JSON.stringify({
//                 favorites:{
//                 podcastid: pid
//             }
//             }),
//             headers: new Header({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         }) .then((res) => res.json())
//         .then((setFave) => {
//             console.log('fave-data:',fave);
//             setFave('true')
//         })
//     }

// return(
//     <div>
//         {fave.includes(i) ? (
//             <IoIosHeart onClick={() => setFave({items, i})}
//             style={{ color: 'red' }} />
//         ) : (
//             <IoIosHeartEmpty onClick={() => setFave({ items, i})}
//             style={{ color: 'red' }} />
//         )}
//     </div>
// )
// }
// export default SaveFavorite;

// // export const Favorites = () => {
// //     let favList : any = [{}]
// //     const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
// //     for (let i = 0; i < getArray.length; i++) {
// //         let x = getArray[i]
// //         favList[i] = JSON.parse(localStorage.getItem('favItem' + [x]) || '')
// //     }
// //     const titles = Object.keys(facList[0]);
// //     }
