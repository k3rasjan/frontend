import menuArrow from "/public/menuArrow.svg";
export function MenuElelement({ subtitle }) {
    <div className="flex gap-1">
        {menuArrow}
        <p>{subtitle}</p>
    </div>;
}
