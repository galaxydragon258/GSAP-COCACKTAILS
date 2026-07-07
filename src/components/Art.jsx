
import { goodLists, featureLists } from "../../constant"

function Art() {
    return (
        <div id="art">
            <div className="container mx-auto h-fall pt-20">
                <h2 className="will-fade"> The ART</h2>

                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((feature, index) => (
                            <li key={index} className="flex item-center">
                                <img src="/images/check.png" />
                                <p>{feature}</p>

                            </li>
                        ))}
                    </ul>
                    <div className="cocktail-img">
                        <img src="/images/cunder-img.jpg"/>

                    </div>
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((featureLists, index) => (
                            <li key={index} className="flex item-center">
                                <img src="/images/check.png" />
                                <p>{featureLists}</p>

                            </li>
                        ))}
                    </ul>
                </div>
                <div id="masked-container">
                    <h2 className="will-fade">Sip-Worthy Perfection</h2>
                    <div id="masked-container">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn't just a drink. It's a carefullly crafted moment made just for you</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Art