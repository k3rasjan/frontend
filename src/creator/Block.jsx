export function Block() {
    return (
        <div>
            <input
                type="text"
                name="title"
                placeholder="Click to add subtitle"
                className="text-3xl bg-transparent w-full hover:border-none focus:outline-none text-neutral-200"
            />
            <input
                type="text-area"
                name="description"
                placeholder="Click to add text"
                className="text-lg bg-transparent w-full h-full hover:border-none focus:outline-none text-neutral-300 "
            />
            <button></button>
        </div>
    );
}
