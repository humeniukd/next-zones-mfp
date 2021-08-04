import * as React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles['site-footer']}>
          <div className={styles.container}>
              <div className={styles.row}>
                  <div className={`${styles['col-sm-12']} ${styles['col-md-4']}`}>
                      <h6>About AVON</h6>
                      <ul className={styles['footer-links']}>
                          <li><a href="#">ABOUT US</a></li>
                          <li><a href="#">WATCH Me Now</a></li>
                      </ul>
                  </div>
                  <div className={`${styles['col-xs-6']} ${styles['col-md-4']}`}>
                      <h6>Shopping</h6>
                      <ul className={styles['footer-links']}>
                          <li><a href="#">Returns Guarantee</a></li>
                          <li><a href="#">Delivery Information</a></li>
                          <li><a href="#">Voucher</a></li>

                      </ul>
                  </div>

                  <div className={`${styles['col-xs-6']} ${styles['col-md-4']}`}>
                      <h6>Quick Links</h6>
                      <ul className={styles['footer-links']}>
                        <li><a href="#">Contribute</a></li>
                        <li>
                          <a className={styles.facebook} href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 96.124 96.123" fill="#737373">
                              <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"/>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a className={styles.twitter} href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24" fill="#737373">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                          </a>
                        </li>
                      </ul>
                  </div>
              </div>
              <hr/>
          </div>
          <div className={styles.container}>
              <div className={styles.row}>
                  <div className={`${styles['col-md-4']} ${styles['col-sm-6']} ${styles['col-xs-12']}`}>
                      <p className={styles['copyright-text']}>Copyright &copy; 2021 All Rights Reserved</p>
                  </div>

                  <div className={`${styles['col-md-4']} ${styles['col-sm-6']} ${styles['col-xs-12']}`}>
                      <p>Help</p>
                  </div>
                  <div className={`${styles['col-md-4']} ${styles['col-sm-6']} ${styles['col-xs-12']}`}>
                      <p>TERMS and Conditions</p>
                  </div>

              </div>
          </div>
      </footer>
    );
};

export default Footer;
