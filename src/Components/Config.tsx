import { JSX } from "react";

export interface Form {
	title: string;
}

export interface Buttons {
	text: string;
	type: "button" | "submit" | "reset";
}
export interface Item {
	label: string;
	type: "number" | "text" | "text-area" | "checkbox" | "date" | "radio";
	name: string;
}

export interface ItemsArray {
	form: Form;
	items: Item[];
	buttons: Buttons[];
}

export interface Props {
	config: ItemsArray;
	setConfig: (config: ItemsArray) => void;
}
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
