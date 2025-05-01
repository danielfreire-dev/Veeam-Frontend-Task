import { JSX } from "react";

interface TabsProps {
	showConfig: boolean;
	setShowConfig: (showConfig: boolean) => void;
}

export default function Tabs({
	showConfig,
	setShowConfig,
}: TabsProps): JSX.Element {
	/* className changes so the user can tell which one is selected */
	const configClass = `tab${showConfig ? " active" : ""}`;
	const resultClass = `tab${!showConfig ? " active" : ""}`;

	return (
		<div className="tabs-container">
			<button
				type="button"
				className={configClass}
				tabIndex={0}
				aria-selected={showConfig}
				onClick={() => setShowConfig(true)}
			>
				Config
			</button>
			<button
				type="button"
				className={resultClass}
				tabIndex={1}
				aria-selected={!showConfig}
				onClick={() => setShowConfig(false)}
			>
				Result
			</button>
		</div>
	);
}
