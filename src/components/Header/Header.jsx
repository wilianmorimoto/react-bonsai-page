import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import './Header.css'
import Navbar from '../Navbar/Navbar';

const Header = () => {

	function openMenu() {
		document.getElementById('navbar').classList.add('show');
	}

  return (
		<div className="container-header">
			<div id="header">
				<img
					src="http://web.archive.org/web/20221117021711im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
					alt="Bonsai logo"
				/>
				<IoIosMenu id='menu-icon' onClick={openMenu} />
						<Navbar />
			</div>
		</div>
	);
}

export default Header