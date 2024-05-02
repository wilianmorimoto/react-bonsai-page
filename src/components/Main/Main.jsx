import React, { useState } from "react";
import Plans from "./Plans/Plans";
import Addons from "./Addons/Addons";
import StartFree from "./StartFree/StartFree";
import Questions from "./Questions/Questions";

const Main = () => {

	const [yearly, setYearly] = useState(false);

	return (
		<main id="main">
			<Plans yearly={yearly} setYearly={setYearly} />
			<Addons yearly={yearly} setYearly={setYearly} />
			<StartFree />
			<Questions />
		</main>
	);
};

export default Main;
