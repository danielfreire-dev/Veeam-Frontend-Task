import { JSX, useState } from "react";
import { Props } from "../App";

export default function Config({ config, setConfig }: Props): JSX.Element {
	const [inputValue, setInputValue] = useState<string>(
		JSON.stringify(config, null, 2),
	);
	const [isValidJson, setIsValidJson] = useState<boolean>(true);

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = event.target.value;
		setInputValue(newValue);

		try {
			const newConfig = JSON.parse(newValue);
			setConfig(newConfig);
			setIsValidJson(true);
		} catch (error) {
			setIsValidJson(false);
		}
	};

	return (
		<>
			<textarea
				name="json-input"
				id="json-box"
				rows={28}
				cols={34}
				value={inputValue}
				onChange={handleChange}
				className={`json-input ${!isValidJson ? "invalid-json" : ""}`}
			></textarea>
			{!isValidJson && (
				<p className="error-message">
					Invalid JSON input. Please correct the JSON format.
				</p>
			)}
		</>
	);
}
