import { JSX } from "react";
import { ItemsArray } from "./Config.tsx";

interface ResultProps {
	config: ItemsArray;
}

export default function Result({ config }: ResultProps): JSX.Element {
	console.log(config);

	const resultsMap: void[] = config.items.map((item) => {
		console.log(item);

		switch (item.type) {
			case "number":
				return (
					<div className="form-auto">
						<p>{item.label}:</p>
						<input type="number" name="" id={item.label} />
					</div>
				);
				break;
			case "string":
				return (
					<div className="form-auto">
						<p>{item.label}:</p>
						<input type="text" name="" id={item.label} />
					</div>
				);
				break;
			case "text-area":
				return (
					<div className="form-auto">
						<p>{item.label}:</p>
						<textarea name="" id={item.label}></textarea>
					</div>
				);
				break;
			case "checkbox":
				return (
					<div className="form-auto">
						<p>{item.label}:</p>
						<input type="checkbox" name="" id={item.label} />
					</div>
				);
				break;
			case "radio":
				return (
					<div className="form-auto">
						<p>{item.label}:</p>
						<input type="radio" name="" id={item.label} />
					</div>
				);
				break;
			case "date":
				return (
					<div className="form-auto">
						<p>{item.label}:</p>
						<input type="date" name="" id={item.label} />
					</div>
				);
				break;

			default:
				break;
		}
	});

	return (
		<>
			<h2>This is Result!</h2>
			{resultsMap}
			<div>
				<button>Cancel</button> <button>Save</button>
			</div>
			<form action="" className="result-form"></form>
		</>
	);
}
