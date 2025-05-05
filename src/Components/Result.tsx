import { JSX, ReactNode } from "react";
import { ItemsArray } from "../App.tsx";
import { nanoid } from "nanoid";
interface ResultProps {
	config: ItemsArray;
}

export default function Result({ config }: ResultProps): JSX.Element {
	const resultsMap: ReactNode[] = config.items.map((item) => {
		const today = new Date().toISOString().split("T")[0];

		switch (item.type) {
			case "number":
				return (
					<div className="form-auto" key={nanoid()}>
						<label className="label" htmlFor={item.label}>
							{item.name}:
						</label>
						<input type={item.type} name={item.name} id={item.label} />
					</div>
				);
				break;
			case "string":
				return (
					<div className="form-auto" key={nanoid()}>
						<label className="label" htmlFor={item.label}>
							{item.name}:
						</label>
						<input type={item.type} name={item.name} id={item.label} />
					</div>
				);
				break;
			case "text-area":
				return (
					<div className="form-auto" key={nanoid()}>
						<label className="label" htmlFor={item.label}>
							{item.name}:
						</label>
						<textarea
							name={item.name}
							id={item.label}
							cols={17}
							rows={3}
						></textarea>
					</div>
				);
				break;
			case "checkbox":
				return (
					<div className="form-auto" key={nanoid()}>
						<label className="label" htmlFor={item.label}>
							{item.name}:
						</label>
						<input type={item.type} name={item.name} id={item.label} />
					</div>
				);
				break;
			case "radio":
				return (
					<div className="form-auto" key={nanoid()}>
						<label className="label" htmlFor={item.label}>
							{item.name}:
						</label>
						<input type={item.type} name={item.name} id={item.label} />
					</div>
				);
				break;
			case "date":
				return (
					<div className="form-auto" key={nanoid()}>
						<label className="label" htmlFor={item.label}>
							{item.name}:
						</label>
						<input
							type={item.type}
							name={item.name}
							id={item.label}
							defaultValue={today}
						/>
					</div>
				);

				break;

			default:
				break;
		}
	});

	const buttonsMap: React.ReactNode[] = config.buttons.map((button) => {
		switch (button.type) {
			case "button":
				return (
					<button type={button.type} key={nanoid()}>
						{button.text}
					</button>
				);
				break;
			case "submit":
				return (
					<button type={button.type} key={nanoid()}>
						{button.text}
					</button>
				);
				break;
			case "reset":
				return (
					<button type={button.type} key={nanoid()}>
						{button.text}
					</button>
				);
				break;

			default:
				break;
		}
	});

	return (
		<>
			<h1>{config.form.title ?? "ERROR: Missing title in JSON"}</h1>

			<form action="" className="result-form">
				{resultsMap ?? "ERROR: JSON Form data missing"}
				<div className="buttons-container">
					{buttonsMap ?? "ERROR: JSON Buttons missing"}
				</div>
			</form>
		</>
	);
}
