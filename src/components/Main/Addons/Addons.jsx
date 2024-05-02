import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Addons.css";

const Addons = ({yearly, setYearly}) => {
	return (
		<div id="addons">
			<h2>Super charge your work with add-ons</h2>
			<div className="addon">
				<div className="price-addon">
					<h3>${yearly ? "100" : "10"}</h3>
					<span>/{yearly ? "YEAR" : "MONTH"}</span>
				</div>
				<div className="text-addon">
					<h4>Accounting & Tax Assistant</h4>
					<p>
						Manage your freelance finances and always be ready for tax season
						with easy-to-use accounting and tax tools.
					</p>
					<a href="#">
						LEARN MORE <MdKeyboardArrowRight />
					</a>
				</div>
			</div>
			<div className="addon">
				<div className="price-addon">
					<h3>${yearly ? "90" : "9"}</h3>
					<span>/{yearly ? "YEAR" : "MONTH"}</span>
				</div>
				<div className="text-addon">
					<h4>Partners</h4>
					<p>
						Invite other users for full account access and company management.
					</p>
				</div>
			</div>
			<div className="addon">
				<div className="price-addon">
					<h3>Free</h3>
				</div>
				<div className="text-addon">
					<h4>Collaborators</h4>
					<p>
						Invite other users to specific projects for limited access and
						functionality.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Addons;
