/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Footer.module.css";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.menu}>
        <div className={styles.firstdiv}>
          <div className={styles.div1}>
            <div className={styles.heading}>About Logo</div>
            <div className={styles.linkcontainer}>
              <ul className={styles.navlinks}>
                <li className={styles.link}>
                  <a href="#">About Us</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Contact Us</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Newsroom</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Investor Relations</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Trust Center</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Annual Returns</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Legal</a>
                </li>
                <li className={styles.link}>
                  <a href="#">GoDaddy Blog</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.div1}>
            <div className={styles.heading}>Support</div>
            <div className={styles.linkcontainer}>
              <ul className={styles.navlinks}>
                <li className={styles.link}>
                  <a href="#">Product Support</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Community</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Report Abuse</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.div1}>
            <div className={styles.heading}>Resources</div>
            <div className={styles.linkcontainer}>
              <ul className={styles.navlinks}>
                <li className={styles.link}>
                  <a href="#">Webmail</a>
                </li>
                <li className={styles.link}>
                  <a href="#">WHOIS</a>
                </li>
                <li className={styles.link}>
                  <a href="#">ICANN Confirmation</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Designers & Developers</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Redeem Code</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Customer Testimonials</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.div1}>
            <div className={styles.heading}>Account</div>
            <div className={styles.linkcontainer}>
              <ul className={styles.navlinks}>
                <li className={styles.link}>
                  <a href="#">My Products</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Renewals & Billing</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Create Account</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.div1}>
            <div className={styles.heading}>Partner Programs</div>
            <div className={styles.linkcontainer}>
              <ul className={styles.navlinks}>
                <li className={styles.link}>
                  <a href="#">About Us</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Contact Us</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Newsroom</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Investor Relations</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Trust Center</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.seconddiv}>
          <div className={styles.para}>
            Over 45,000,000 Cloud Servers Launched
          </div>
          <div className={styles.socialicons}>
            <FaTwitter color="white" size={30} cursor="pointer" />
            <FaFacebook color="white" size={30} cursor="pointer" />
            <FaInstagram color="white" size={30} cursor="pointer" />
            <FaLinkedin color="white" size={30} cursor="pointer" />
            <FaGithub color="white" size={30} cursor="pointer" />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.left}>
          <p className={styles.para1}>
            Copyright &copy; 1999-2021 GoDaddy Operating Company. LLC. All
            Rights Reserved. The GoDaddy word mark is a registered trademark of
            GoDaddy Operating Company, LLC in the US and other countries. The
            “GO” logo is a registered trademark of GoDaddy.com, LLC in the US.
          </p>
          <p className={styles.para2}>
            Use of this Site is subject to express terms of use. By using this
            site, you signify that you agree to be bound by these <span>Universal
            Terms of Service.</span>
          </p>
        </div>
        <div className={styles.right}>
          <ul className={styles.copyrightlinks}>
            <li className={styles.clink}>
              <a href="#">Legal</a>
            </li>
            <li className={styles.clink}>
              <a href="#">Privacy Policy</a>
            </li>
            <li className={styles.clink}>
              <a href="#">Advertisement Preference</a>
            </li>
            <li className={styles.clink}>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
