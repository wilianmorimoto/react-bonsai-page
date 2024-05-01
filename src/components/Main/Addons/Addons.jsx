import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import './Addons.css'

const Addons = () => {
  return (
		<div id="addons">
			<h2>Customize your workflow with add-ons</h2>
			<div className="addon">
				<h3>$100</h3>
				<span>/YEAR</span>
				<h4>Accounting & Tax Assistant</h4>
				<p>
					Manage your freelance finances and always be ready for tax season with
					easy-to-use accounting and tax tools.
				</p>
				<a href="#">
					LEARN MORE <MdKeyboardArrowRight />
				</a>
			</div>
			<div className="addon">
				<h3>$90</h3>
				<span>/YEAR</span>
				<h4>Partners</h4>
				<p>
					Invite other users for full account access and company management.
				</p>
			</div>
			<div className="addon">
				<h3>Free</h3>
				<h4>Collaborators</h4>
				<p>
					Invite other users to specific projects for limited access and
					functionality.
				</p>
			</div>
		</div>
	);
}

export default Addons;