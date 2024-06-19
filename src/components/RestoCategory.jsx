import { useState } from "react";
import ItemList from "./ItemList";

const RestoCategory = ({ data, setShowIndex}) => {
    // to show accordian (collapse all expand one feature) add 'showItems' to props and comment 'setShowItems(!showItems)'

    // console.log(data)
    const [showItems, setShowItems] = useState(true)

    const handleClick = () => {
        setShowItems(!showItems)
        // setShowIndex()
    }

    return (
        <div>
            <div>
                <div className="flex justify-between bg-gray-50 border-[rgb(239,239,245)] border-b-[15px] p-2 shadow-sm cursor-pointer" onClick={handleClick}>
                    <span className="text-lg tracking-wide p-1 font-bold">{data.title} ({data.itemCards.length})</span>
                    <span className="p-1">{showItems ? "🔼" : "🔽"}</span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    );
};

export default RestoCategory;