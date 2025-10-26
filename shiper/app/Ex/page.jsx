import Services from "./Services/page"
import FAQS from "./Faqs/page"
import Pricing from "./Pricing/page"
import Trends from "./Trends/page"
import Support from "./Support/page"
import Contact from "./contact/page"

export default function Ex() {
    return(
        <div>
            <Services/>
            <Trends/>
            <Contact/>
            <Pricing/>
            <Support/>
            <FAQS/>
        </div>
    )
}