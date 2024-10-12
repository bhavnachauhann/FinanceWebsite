
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './finance.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

const Footer = () => {
  return (
<div class="site-footer sec">
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
				<div class="widget">
					<h3>About</h3>
					<p className='textwhite'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
				</div> 
				<div class="widget">
					<address>43 Raymouth Rd. Baltemoer, London 3910</address>
					<ul class="list-unstyled links">
						<li><a href="tel://11234567890" className="footeritem">+1(123)-456-7890</a></li>
						<li><a href="tel://11234567890" className="footeritem">+1(123)-456-7890</a></li>
						<li><a href="/" className="footeritem">info@mydomain.com</a></li>
					</ul>
				</div> 
			</div>
			<div class="col-lg-4">
				<div class="widget">
					<h3>Company</h3>
					<ul class="list-unstyled float-start links">
						<li><a href="/about" className="footeritem">About us</a></li>
						<li><a href="/" className="footeritem">Services</a></li>
						<li><a href="/" className="footeritem">Vision</a></li>
						<li><a href="/"className="footeritem">Mission</a></li>
						<li><a href="/" className="footeritem">Terms</a></li>
						<li><a href="/" className="footeritem">Privacy</a></li>
					</ul>
					<ul class="list-unstyled float-start links">
						<li><a href="/" className="footeritem">Partners</a></li>
						<li><a href="/" className="footeritem">Business</a></li>
						<li><a href="/" className="footeritem">Careers</a></li>
						<li><a href="/" className="footeritem">Blog</a></li>
						<li><a href="/" className="footeritem">FAQ</a></li>
						<li><a href="/" className="footeritem">Creative</a></li>
					</ul>
				</div>
			</div> 
			<div class="col-lg-4">
				<div class="widget">
					<h3>Navigation</h3>
					<ul class="list-unstyled links mb-4">
						<li><a href="/" className="footeritem">Our Vision</a></li>
						<li><a href="/about" className="footeritem">About us</a></li>
						<li><a href="/contactus" className="footeritem">Contact us</a></li>
					</ul>

					<h3>Social</h3>
					<ul class="list-unstyled social d-flex">
						
						<li><a  className="footeritem p-2"><i class="bi bi-instagram"></i></a></li>
						<li><a className="footeritem p-2"><i class="bi bi-twitter"></i></a></li>
						<li><a  className="footeritem p-2"><i class="bi bi-facebook"></i></a></li>
						<li><a className="footeritem p-2"><i class="bi bi-linkedin"></i></a></li>
						<li><a className="footeritem p-2"><i class="bi bi-pinterest"></i></a></li>
						<li><a className="footeritem p-2"><i class="bi bi-twitter-x"></i></a></li>
					</ul>
				</div> 
			</div> 
		</div> 

		
      </div> 
	  <div class="row mt-5 ">
			<div class="col-12 text-center">
					

            <p className='textwhite'>Copyright © 2024 | Financing Limitied | All Right Reserved 
            </p>
          </div>
        </div>
    </div>
  )
}

export default Footer
