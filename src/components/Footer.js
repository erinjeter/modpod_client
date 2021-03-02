// react route - tara
import React from 'react';
import "./Footer.css"


const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    {/*Col 1 */}
                    {/* <div><h6>Quick Links</h6></div> */}
                    <div className='col'>
                        {/* <h6>Quick Links</h6> */}
                        <ul className='list-unstyled'>
                            <li>Favorite Podcasts</li>
                            <li>History</li>
                        </ul>
                    </div>
                    {/*Col 2 */}
                    <div className='col'>
                        {/* <h6>Footer Col 2</h6> */}
                        <ul className='list-unstyled'>
                            <li>Latest Podcasts</li>
                            <li>Podcast Episodes</li>
                        </ul>
                    </div>
                    {/*Col 3 */}
                    <div className='col'>
                        {/* <h6>Footer Col 3</h6> */}
                        <ul className='list-unstyled'>
                            <li>Featured Author</li>
                            <li>News Series</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} ModPod  |  All Rights Reserved  |  Terms of Service  |  Privacy
                    </p>
                </div>

            </div >
        </div >
    );
};

export default Footer;



//css route
// import './Footer.css'
// // Function name matches file namex
// const Footer = () => {
//     // return must have one parent element
//     return (
//         <footer className="footer">
//             <div className="container">
//                 &copy; 2021 modpod
//             </div>
//         </footer>
//     )
// }

// // Makes it available for import
// export default Footer;
