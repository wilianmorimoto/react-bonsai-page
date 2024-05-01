import React from "react";
import "./Main.css";
import Plans from "./Plans/Plans";
import Addons from "./Addons/Addons";
import StartFree from "./StartFree/StartFree";

const Main = () => {
	return (
		<main id="main">
			<Plans />
			<Addons />
      <StartFree />
		</main>
	);
};

export default Main;
