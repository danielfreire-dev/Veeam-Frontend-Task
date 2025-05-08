import { JSX, useState } from "react";
import { Props } from "../App";

export default function Config({ config, setConfig }: Props): JSX.Element {
	const [inputValue, setInputValue] = useState<string>(
		JSON.stringify(config, null, 2),
	);
	const [isValidJson, setIsValidJson] = useState<boolean>(true);
	const [hasDuplicateLabels, setHasDuplicateLabels] = useState<boolean>(false);

	/* Makes sure there are no duplicate labels */
	const checkForDuplicateLabels = (items: { label: string }[]): boolean => {
		const labels = items.map((item) => item.label);
		const uniqueLabels = new Set(labels);
		return labels.length !== uniqueLabels.size;
	};

	/* Handle JSON form input */
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = event.target.value;
		setInputValue(newValue);

		/* Confirm JSON input is correct */
		try {
			const newConfig = JSON.parse(newValue) as typeof config;
			setIsValidJson(true);

			if (checkForDuplicateLabels(newConfig.items)) {
				setHasDuplicateLabels(true);
			} else {
				setHasDuplicateLabels(false);
				setConfig(newConfig);
			}
		} catch (error) {
			setIsValidJson(false);
		}
	};

	return (
		<>
			{/* Warnings */}

			{!isValidJson && (
				<p className="error-message">
					Invalid JSON input. Please fix the JSON format.
				</p>
			)}

			{hasDuplicateLabels && (
				<p className="error-message">
					Duplicate labels found. Please ensure all labels are unique.
				</p>
			)}
			<textarea
				name="json-input"
				id="json-box"
				rows={28}
				cols={34}
				value={inputValue}
				onChange={handleChange}
				className={`json-input ${!isValidJson ? "invalid-json" : ""}`}
			></textarea>
		</>
	);
}
