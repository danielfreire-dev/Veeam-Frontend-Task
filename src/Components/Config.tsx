import { JSX } from "react";

export interface Item {
	label: string;
	type: string;
}

export interface ItemsArray {
	items: Item[];
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
			<form action="">
				<textarea
					name="JSON Input"
					id="json-box"
					rows={28}
					cols={34}
					value={JSON.stringify(config, null, 2)}
					onChange={(event) => handleChange(event)}
				></textarea>
			</form>
		</>
	);
}
