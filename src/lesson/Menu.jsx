import menuArrow from "/public/menuArrow.svg";
export function MenuElelement({ subtitle }) {
    return (
        <div className="flex gap-1 ml-3 text-neutral-400">
            <img src={menuArrow} alt="menuArrow" />
            <p>{subtitle}</p>
        </div>
    );
}
