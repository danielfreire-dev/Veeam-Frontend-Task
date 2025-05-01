import { JSX, ReactNode } from "react";
import { ItemsArray } from "./Config.tsx";
import { nanoid } from "nanoid";
interface ResultProps {
	config: ItemsArray;
}

export default function Result({ config }: ResultProps): JSX.Element {
	const resultsMap: ReactNode[] = config.items.map((item) => {
		const today = new Date().toISOString().split("T")[0];
		return (
			<div className="form-auto" key={nanoid()}>
				{item.type === "text-area" ? (
					<>
						<label className="label" htmlFor={item.label}>
							{item.label}:{" "}
						</label>
						<textarea
							name={item.name}
							id={item.label}
							cols={17}
							rows={3}
						></textarea>
					</>
				) : (
					<>
						<label className="label" htmlFor={item.label}>
							{item.label}:
						</label>
						<input
							type={item.type}
							name={item.name}
							id={item.label}
							defaultValue={item.type === "date" ? today : ""}
						/>
					</>
				)}
			</div>
		);
	});

	const buttonsMap: ReactNode[] = config.buttons.map((item) => {
		return (
			<button type={item.type} key={nanoid()}>
				{item.text}
			</button>
		);
	});

	return (
		<>
			<h1>{config.form.title ?? "ERROR: JSON missing"}</h1>

			<form action="" className="result-form">
				{resultsMap ?? "ERROR: JSON missing"}
				<div className="buttons-container">
					{buttonsMap ?? "ERROR: JSON missing"}
				</div>
			</form>
		</>
	);
}
