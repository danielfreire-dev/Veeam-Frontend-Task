import { useState } from "react";
import Config from "./Components/Config";
import Result from "./Components/Result";
import "./App.css";
import "./style/styles.css";
import Tabs from "./Components/Tabs";
import configData from "./assets/config.json";

function App() {
	const [showConfig, setShowConfig] = useState(true);
	const [config, setConfig] = useState(configData);

	return (
		<>
			<Tabs showConfig={showConfig} setShowConfig={setShowConfig} />
			<div className="body-container">
				{showConfig ? (
					<Config config={config} setConfig={setConfig} />
				) : (
					<Result config={config} />
				)}
			</div>
		</>
	);
}

export default App;
