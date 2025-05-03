import { JSX } from "react";
import { Props } from "../App";

export default function Config({ config, setConfig }: Props): JSX.Element {
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		try {
			const newConfig = JSON.parse(event.target.value);
			setConfig(newConfig);
		} catch (error) {
			console.error("Invalid JSON:", error);
		}
	};

	return (
		<>
			<textarea
				name="json-input"
				id="json-box"
				rows={28}
				cols={34}
				value={JSON.stringify(config, null, 2)}
				onChange={(event) => handleChange(event)}
				className="json-input"
			></textarea>
		</>
	);
}
