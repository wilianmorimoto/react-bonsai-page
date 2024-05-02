import { useState } from "react";
import "./Questions.css";
import { IoIosArrowDown } from "react-icons/io";

const Questions = () => {

  const [questionOpen1, setQuestionOpen1] = useState(false)
  const [questionOpen2, setQuestionOpen2] = useState(false)
  const [questionOpen3, setQuestionOpen3] = useState(false)
  const [questionOpen4, setQuestionOpen4] = useState(false)

	return (
		<div id="questions">
			<h2>Frequently Asked Questions</h2>
			<div className="questions">
				<div className="question">
					<h3 onClick={() => setQuestionOpen1(!questionOpen1)}>
						How does the free trial work?{" "}
						<IoIosArrowDown
							style={questionOpen1 ? { transform: "rotate(180deg)" } : ""}
						/>
					</h3>
					<p className={`answer ${questionOpen1 ? "active" : ""}`}>
						When you start your trial with Bonsai you'll receive full, unlimited
						access to all of Bonsai's Workflow or Workflow Plus Features! You
						will need to enter your credit card information to begin your trial,
						but don't worry - we won't charge you anything until the
						subscription ends! If you wish to cancel at any time during the
						trial period, you can do so through your Subscriptions Settings
						Page.
					</p>
				</div>
				<div className="question">
					<h3 onClick={() => setQuestionOpen2(!questionOpen2)}>
						Can I change plans anytime?{" "}
						<IoIosArrowDown
							style={questionOpen2 ? { transform: "rotate(180deg)" } : ""}
						/>
					</h3>
					<p className={`answer ${questionOpen2 ? "active" : ""}`}>
						Yes, you can from within your account. If you have already
						subscribed to a plan, or want to downgrade or upgrade your current
						one, you can do this by going to your "Settings" and "Subscription".
					</p>
				</div>
				<div className="question">
					<h3 onClick={() => setQuestionOpen3(!questionOpen3)}>
						How do I pause my Bonsai subscription?{" "}
						<IoIosArrowDown
							style={questionOpen3 ? { transform: "rotate(180deg)" } : ""}
						/>
					</h3>
					<p className={`answer ${questionOpen3 ? "active" : ""}`}>
						We totally understand that with the nature of freelancing, work ebbs
						and flows so you might not always need your Bonsai subscription to
						remain active! The good news is that you can cancel or pause your
						monthly subscription at any time without penalty. Once cancelled,
						you'll be able to continue logging in to access all your documents
						and even continue to use our free features, like Time Tracking! In
						order to cancel your subscription, login to your Bonsai account.
					</p>
				</div>
				<div className="question">
					<h3 onClick={() => setQuestionOpen4(!questionOpen4)}>
						What is your refund policy?{" "}
						<IoIosArrowDown
							style={questionOpen4 ? { transform: "rotate(180deg)" } : ""}
						/>
					</h3>
					<p className={`answer ${questionOpen4 ? "active" : ""}`}>
						If you contact us within 2 weeks of being charged for your
						subscription, we will be happy to issue a refund for you!Beyond
						those 2 weeks, you will need to cancel or modify the subscription
						from the Subscriptions Tab in Settings to avoid future charges, but
						refunds will not be issued. This applies to both monthly and annual
						plans.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Questions;
