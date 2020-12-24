import React from 'react';
import { IconContext} from "react-icons";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import '../src/css/main.css';
import Form from "./Form";
import Header from "./Header";



function App() {
  return (
    <div className="App">
        <main className="main">
            <div className="content">
                <Header />
                <div className="bkg-wrapper">
                    <div className="heading">
                        <h2 className="heading-title">Subscribe to newsletters</h2>
                        <p className="heading-paragraph">Subscribe to our newsletter and get 10% discount on pineapple
                            glasses.</p>
                    </div>
                    <Form />
                    <IconContext.Provider value={{  className: 'react-icon' }}>
                        <div className="social-icons">
                            <ul className="social-icon-list">
                                <li className="social-facebook social">
                                    <FaFacebookF className="facebook"/>
                                </li>
                                <li className="social-instagram social">
                                    <FaInstagram className="instagram" />
                                </li>
                                <li className="social-twitter social">
                                    <FaTwitter className="twitter" />
                                </li>
                                <li className="social-youtube social">
                                    <FaYoutube className="youtube" />
                                </li>
                            </ul>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
            <div className="image"></div>
        </main>
    </div>
  );
}

export default App;
