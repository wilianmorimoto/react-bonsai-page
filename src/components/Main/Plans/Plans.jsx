import React, { useState } from "react";
import './Plans.css'
import { FaCheck } from "react-icons/fa";

const Plans = () => {

  const [yearly, setYearly] = useState(false)

  function toggleYearly() {
    setYearly(!yearly)
  }

	return (
		<div id="plans">
			<div className="header-plans">
				<h1>Plans & Pricing</h1>
				<div className="toggle-plans">
					<span>MONTHLY</span>
					<div onClick={toggleYearly} className="toggle-button">
						<div className={`circle ${yearly ? "year" : ""}`}></div>
					</div>
					<span>YEARLY</span>
				</div>
			</div>
			<div className="plans">
				<div className="plan">
					<div className="plan-header">
						<h2>Starter</h2>
						<p>Ideal for freelancers and contractors just starting out.</p>
					</div>
					<div className="plan-price">
						<h1>
							$ <span id="price">{yearly ? 17 : 24}</span>
							<span id="month-year">/MONTH</span>
						</h1>
					</div>
					<ul className="plan-features">
						<li>
							<FaCheck />
							All Templates
						</li>
						<li>
							<FaCheck />
							Unlimited Clients & Projects
						</li>
						<li>
							<FaCheck />
							Invoicing & Payments
						</li>
						<li>
							<FaCheck />
							Proposals & Contracts
						</li>
						<li>
							<FaCheck />
							Tasks & Time Tracking
						</li>
						<li>
							<FaCheck />
							Client CRM
						</li>
						<li>
							<FaCheck />
							Expense Tracking
						</li>
						<li>
							<FaCheck />
							Up to 5 Project Collaborators
						</li>
					</ul>
					<div className="plan-button">
						<button>START FREE</button>
					</div>
				</div>
				<div className="plan">
					<div className="most-popular">MOST POPULAR</div>
					<div className="plan-header">
						<h2>Professional</h2>
						<p>Everything a growing independent business needs to thrive.</p>
					</div>
					<div className="plan-price">
						<h1>
							$ <span id="price">{yearly ? 32 : 39}</span>
							<span id="month-year">/MONTH</span>
						</h1>
					</div>
					<ul className="plan-features">
						<li>
							<FaCheck />
							Everything in Starter plus...
						</li>
						<li>
							<FaCheck />
							Custom Branding
						</li>
						<li>
							<FaCheck />
							Forms & Questionnaires
						</li>
						<li>
							<FaCheck />
							Workflow Automations
						</li>
						<li>
							<FaCheck />
							Client Portal
						</li>
						<li>
							<FaCheck />
							QuickBooks Integration
						</li>
						<li>
							<FaCheck />
							Calendly Integration
						</li>
						<li>
							<FaCheck />
							Zapier Integration
						</li>
						<li>
							<FaCheck />
							Up to 15 Project Collaborators
						</li>
					</ul>
					<div className="plan-button">
						<button>START FREE</button>
					</div>
				</div>
				<div className="plan">
					<div className="plan-header">
						<h2>Business</h2>
						<p>The perfect package for small businesses and agencies.</p>
					</div>
					<div className="plan-price">
						<h1>
							$ <span id="price">{yearly ? 52 : 79}</span>
							<span id="month-year">/MONTH</span>
						</h1>
					</div>
					<ul className="plan-features">
						<li>
							<FaCheck />
							Everything in Starter and Professional plus...
						</li>
						<li>
							<FaCheck />
							Subcontractor Management
						</li>
						<li>
							<FaCheck />
							Hiring Agreement Templates (1099 contracts)
						</li>
						<li>
							<FaCheck />
							Subcontractor Onboarding
						</li>
						<li>
							<FaCheck />
							Talent Pool
						</li>
						<li>
							<FaCheck />3 Team Seats (additional seats $9/month)
						</li>
						<li>
							<FaCheck />
							Accountant Access
						</li>
						<li>
							<FaCheck />
							Connect Multiple Bank Accounts
						</li>
						<li>
							<FaCheck />
							Unlimited Subcontractors
						</li>
						<li>
							<FaCheck />
							Unlimited Project Collaborators
						</li>
					</ul>
					<div className="plan-button">
						<button>START FREE</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Plans;
