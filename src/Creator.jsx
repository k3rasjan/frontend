import Deploy from "/public/deploy.svg";
import Delete from "/public/delete.svg";

export default function Creator() {
    return (
        <main className="bg-neutral-950 w-screen h-screen relative flex items-center flex-col pt-10">
            <button className="absolute bg-green-200 rounded-r-xl left-0 top-10">
                <img src={Deploy} alt="Deploy" />
            </button>
            <button className="absolute bg-red-200 rounded-r-xl left-0 top-24">
                <img src={Delete} alt="Delete" />
            </button>
            <section className="relative w-[70vw] h-[30vh] bg-neutral-900 rounded-3xl">
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Click to add title"
                        className="text-3xl bg-transparent w-full p-2 hover:border-none focus:outline-none text-neutral-200"
                    />
                    <input
                        type="text-area"
                        name="description"
                        placeholder="Click to add description"
                        className="text-lg bg-transparent w-full p-2 hover:border-none focus:outline-none text-neutral-300"
                    />
                </div>
            </section>
        </main>
    );
}
