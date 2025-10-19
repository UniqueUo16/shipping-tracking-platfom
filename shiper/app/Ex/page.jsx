import Services from "./Services/page"
import FAQS from "./Faqs/page"
import Pricing from "./Pricing/page"
import Trends from "./Trends/page"
import Support from "./Support/page"

export default function Ex() {
    return(
        <div>
            <Services/>
            <Trends/>
            <Pricing/>
            <Support/>
            <FAQS/>
        </div>
    )
}