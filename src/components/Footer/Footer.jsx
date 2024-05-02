import { useState } from "react";
import "./Footer.css";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {

	const [openInvoice, setOpenInvoice] = useState(false)
	const [openProposal, setOpenProposal] = useState(false)
	const [openContract, setOpenContract] = useState(false)
	const [openAgreement, setOpenAgreement] = useState(false)
	const [openScope, setOpenScope] = useState(false)
	const [openQuote, setOpenQuote] = useState(false)
	const [openComparisons, setOpenComparisons] = useState(false)

	return (
		<footer>
			<div className="footer-list">
				<h2>PRODUCT</h2>
				<ul>
					<li>
						<a href="">Proposals</a>
					</li>
					<li>
						<a href="">Contracts</a>
					</li>
					<li>
						<a href="">Invoicing</a>
					</li>
					<li>
						<a href="">Client CRM</a>
					</li>
					<li>
						<a href="">Time Tracking</a>
					</li>
					<li>
						<a href="">Task Tracking</a>
					</li>
					<li>
						<a href="">Forms</a>
					</li>
					<li>
						<a href="">Accounting</a>
					</li>
					<li>
						<a href="">Bonsai Tax</a>
					</li>
					<li>
						<a href="">Bonsai Cash</a>
					</li>
					<li>
						<a href="">Pricing</a>
					</li>
					<li>
						<a href="">Bonsai Reviews</a>
					</li>
				</ul>
			</div>
			<div className="footer-list">
				<h2>FREE RESOURCES</h2>
				<ul>
					<li>
						<a href="">Freelance Resources</a>
					</li>
					<li>
						<a href="">Freelance Blog by Bonsai</a>
					</li>
					<li>
						<a href="">How to Write a Contract</a>
					</li>
					<li>
						<a href="">Online Signature Maker</a>
					</li>
					<li>
						<a href="">Self-Employed Taxes Hub</a>
					</li>
					<li>
						<a href="">Self-Employed Tax Calculator</a>
					</li>
					<li>
						<a href="">Self-Employed Tax Deductions</a>
					</li>
				</ul>
			</div>
			<div className="footer-list">
				<h2>TEMPLATES</h2>
				<ul>
					<li>
						<div
							className="sublist-title"
							onClick={() => setOpenInvoice(!openInvoice)}
						>
							Invoice Templates{" "}
							<IoIosArrowDown
								style={openInvoice && { transform: "rotate(180deg)" }}
							/>
						</div>
						<div className={`footer-sublist ${openInvoice ? "opened" : ""}`}>
							<p>Invoice Generator</p>
							<p>Blank Invoice Template</p>
							<p>Consultant Invoice Template</p>
							<p>Editable Invoice Template</p>
							<p>Graphic Design Invoice</p>
							<p>Web Design Invoice</p>
							<p>Contractor Invoice Template</p>
							<p>Photography Invoice Template</p>
							<p>Self Employed Invoice Template</p>
						</div>
					</li>
					<li>
						<div
							className="sublist-title"
							onClick={() => setOpenProposal(!openProposal)}
						>
							Proposal Templates{" "}
							<IoIosArrowDown
								style={openProposal && { transform: "rotate(180deg)" }}
							/>
						</div>
						<div className={`footer-sublist ${openProposal ? "opened" : ""}`}>
							<p>Website Proposal Template</p>
							<p>Digital Marketing Proposal Template</p>
							<p>Social Media Marketing Proposal</p>
							<p>Graphic Design Proposal</p>
							<p>Freelance Proposal Template</p>
							<p>SEO Proposal Template</p>
						</div>
					</li>
					<li>
						<div
							className="sublist-title"
							onClick={() => setOpenContract(!openContract)}
						>
							Contract Templates{" "}
							<IoIosArrowDown
								style={openContract && { transform: "rotate(180deg)" }}
							/>
						</div>
						<div className={`footer-sublist ${openContract ? "opened" : ""}`}>
							<p>Online Contract</p>
							<p>Graphic Design Contract</p>
							<p>Freelance Contract Template</p>
							<p>Social Media Marketing Contract</p>
							<p>Software Development Contract</p>
							<p>Web Design Contract</p>
							<p>Video Production Contract</p>
							<p>Public Relations Contract</p>
							<p>Translation Contract</p>
						</div>
					</li>
					<li>
						<div
							className="sublist-title"
							onClick={() => setOpenAgreement(!openAgreement)}
						>
							Agreement Templates{" "}
							<IoIosArrowDown
								style={openAgreement && { transform: "rotate(180deg)" }}
							/>
						</div>
						<div className={`footer-sublist ${openAgreement ? "opened" : ""}`}>
							<p>Retainer Agreement Template</p>
							<p>Influencer Agreement Template</p>
							<p>Collaboration Agreement Template</p>
							<p>Software Development Agreement</p>
							<p>Marketing Agreement Template</p>
						</div>
					</li>
					<li>
						<div
							className="sublist-title"
							onClick={() => setOpenScope(!openScope)}
						>
							Scope of Work Templates{" "}
							<IoIosArrowDown
								style={openScope && { transform: "rotate(180deg)" }}
							/>
						</div>
						<div className={`footer-sublist ${openScope ? "opened" : ""}`}>
							<p>Website Development Scope of Work</p>
							<p>Digital Marketing Scope of Work</p>
							<p>Consultant Statement of Work Template</p>
							<p>Software Development Scope of Work</p>
						</div>
					</li>
					<li>
						<div
							className="sublist-title"
							onClick={() => setOpenQuote(!openQuote)}
						>
							Quote Templates{" "}
							<IoIosArrowDown
								style={openQuote && { transform: "rotate(180deg)" }}
							/>
						</div>
						<div className={`footer-sublist ${openQuote ? "opened" : ""}`}>
							<p>Freelance Quotation Template</p>
							<p>Web Design Quotation Template</p>
							<p>Graphic Design Quotation Template</p>
							<p>Interior Design Quotation Template</p>
							<p>Video Production Quotation Template</p>
							<p>Social Media Marketing Quotation</p>
						</div>
					</li>
					<li>
						<a href="">Credit Note Templates</a>
					</li>
					<li>
						<a href="">Estimate Templates</a>
					</li>
					<li>
						<a href="">Form Templates</a>
					</li>
				</ul>
			</div>
			<div className="footer-list">
				<h2>BONSAI</h2>
				<ul>
					<li>
						<a href="">About</a>
					</li>
					<li>
						<a href="">Careers</a>
					</li>
					<li>
						<a href="">Support</a>
					</li>
					<li>
						<a href="">LinkedIn</a>
					</li>
					<li>
						<a href="">Twitter</a>
					</li>
					<li>
						<a href="">Privacy policy</a>
					</li>
					<li>
						<a href="">Legal</a>
					</li>
					<li>
						<a href="">Affiliates</a>
					</li>
					<li>
						<a href="">Write for Us</a>
					</li>
					<li>
						<div
							className="sublist-title"
							onClick={() => setOpenComparisons(!openComparisons)}
						>
							Comparisons{" "}
							<IoIosArrowDown
								style={openComparisons && { transform: "rotate(180deg)" }}
							/>
						</div>
						<div
							className={`footer-sublist ${openComparisons ? "opened" : ""}`}
						>
							<p>Freshbooks Alternatives</p>
							<p>Quickbooks Alternatives</p>
							<p>Wave vs Quickbooks</p>
							<p>Xero vs Quickbooks</p>
							<p>Freshbooks vs Quickbooks</p>
						</div>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
