export function Tag(props) {
    return (
        <div className="flex bg-transparent rounded-full border-2 border-solid border-neutral-600 text-neutral-600 gap-2 px-2">
            <p>#{props.tag}</p>
            <p onClick={props.deleteTag} className="text-red-800">
                x
            </p>
        </div>
    );
}

export function PreTag({ addTag }) {
    return (
        <input
            type="text"
            placeholder="Tag"
            onBlur={(e) => {
                addTag(e.target.value);
            }}
            className="w-24  bg-transparent border-neutral-600 border-2 border-solid rounded-full focus:outline-none focus:border-sky-200 text-neutral-600 text-sm px-2"
            maxLength={10}
        />
    );
}
