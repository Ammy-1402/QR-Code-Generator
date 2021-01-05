import React, { useState } from 'react';
import QRcode from 'qrcode.react';
import Navigation from '../Navigation';
import './index.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpSharpIcon from '@material-ui/icons/ArrowDropUpSharp';
import { TextField } from '@material-ui/core';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CONST from '../../constants/constants';
import Footer from '../Footer';

const Home = () => {
    const [url, setUrl] = useState("")
    const [flag, setFlag] = useState(false)
    const onChangeHandle = (event) => {
        setUrl(event.target.value);
    }

    const handleAbout = () => {
        setFlag(!flag)
    }

    return (
        <div className="container">
            <div className="navbar">
                <Navigation />
            </div>
            <div className="container-body">
                <div className="left-body">
                    <div className="left-body-text">
                        <h4>About {flag ?
                            <ArrowDropUpSharpIcon
                                style={{ fontSize: "1.2rem" }}
                                onClick={handleAbout} /> :
                            <ArrowDropDownIcon
                                style={{ fontSize: "1.2rem" }}
                                onClick={handleAbout}
                            />}
                        </h4>
                    </div>
                    <div className="left-body-about-text">
                        <p>{
                            flag ? CONST.ABOUT : ""
                        }</p>
                    </div>
                    <div>
                        <TextField
                            style={{ width: "100%" }}
                            id="outlined-multiline-static"
                            label="Enter text/url"
                            multiline
                            rows={10}
                            variant="outlined"
                            onChange={(event) => onChangeHandle(event)}
                        />
                    </div>
                </div>
                <div className="right-body">
                    <div className="right-body-text">
                        {
                            url === "" ? <p>Your QR-Code will be displayed here</p> :
                                <p> Your QR-code </p>
                        }
                    </div>
                    <div>
                        {url === "" ? <div></div> :
                            <QRcode
                                value={url}
                            ></QRcode>}
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Home;