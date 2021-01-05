import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import CONST from '../../constants/constants';
import './index.css';

const Footer = () => {
    return (
        <div className="footer-body">
            <div className="footer-body-left">
                <h5><span>&#169;</span> {CONST.COPYRIGHT}</h5>
            </div>
            <div className="footer-body-right">
                <a href={CONST.LINKEDIN} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: "1.3rem"
                    , textDecoration: "none"
                }}>
                    <div className="footer-icon-linkedin">
                        <LinkedInIcon
                            style={{ color: "#0e76a8" }} />
                    </div>
                </a>
                <a href={CONST.TWITTER} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: "1.3rem"
                    , textDecoration: "none"
                }}>
                    <div className="footer-icon-twitter"><TwitterIcon
                        style={{ color: "#00acee" }}
                    /></div>
                </a>
                <a href={CONST.GITHUB} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: "1.3rem"
                    , textDecoration: "none"
                }}>
                    <div className="footer-icon-github"><GitHubIcon /></div>
                </a>
                <a href={CONST.INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: "1.3rem"
                    , textDecoration: "none"
                }}>
                    <div className="footer-icon-instagram">
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Footer;
