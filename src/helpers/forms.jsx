export function Required() {
    return <span className="text-red-400">*</span>;
}

export function Label(props) {
    return (
        <label htmlFor={props.labelFor} className="text-neutral-400">
            <span className="underline">{props.text}</span>
            {props.required ? <Required /> : ""}
        </label>
    );
}

export function Input(props) {
    return (
        <input
            type={props.type}
            name={props.name}
            className="bg-neutral-950 border-neutral-800 border-2 border-solid rounded-xl focus:outline-none focus:border-sky-200 text-neutral-300 w-80 h-10 px-2"
        />
    );
}
