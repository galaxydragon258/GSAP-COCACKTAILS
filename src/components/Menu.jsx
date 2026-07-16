import { useRef, useState } from "react"
import { sliderLists } from "../../constant"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

function Menu() {
    const contentRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)

    const totalCoctails = sliderLists.length;

    const cocktailNavigation = (index) => {
        console.log('clicking')
        const newIndex = (index + totalCoctails) % totalCoctails
        setCurrentIndex(newIndex)
    }

    const getCocktailAt = (indexOffset) => {
        return sliderLists[
            (currentIndex + indexOffset + totalCoctails) % totalCoctails
        ]

    }
    const previousCocktail = getCocktailAt(-1);
    const currentCocktail = getCocktailAt(0);
    const nextCocktai = getCocktailAt(1)


    useGSAP(() => {
        gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, { opacity: 1, xPercent: 0, duration: 1 });
        gsap.fromTo('.details h2', { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0 });
        gsap.fromTo('.details p', { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0 });


    }, [currentIndex])


    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right" id="m-right-leaf" />
            <h2 id="menu-heading" className="sr-only" >
                Cocktail Menu
            </h2>

            <nav className="cocktail-tabs" aria-braillelabel="Coctail Navigation">
                {sliderLists.map((cocktails, index) => {
                    const isActiveIndex = index === currentIndex;

                    return (
                        <button key={cocktails.id}
                            className={`${isActiveIndex ?
                                'text-white border-white'
                                :
                                'text-white/50 border-white/50'
                                }`}
                            onClick={() => {
                                cocktailNavigation(index)
                            }}
                        >
                            {cocktails.name}
                        </button>
                    )
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button
                        className="text-left"
                        onClick={() => cocktailNavigation(currentIndex - 1)}
                    >
                        <span>{previousCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>

                    <button
                        className="text-left"
                        onClick={() => cocktailNavigation(currentIndex + 1)}
                    >
                        <span>{nextCocktai.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>

                <div className="cocktail">
                    <img src={currentCocktail.image} className="object-contain" />
                </div>
                <div className="recipe" >
                    <div ref={contentRef} className="info">
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>

                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>


                    </div>
                </div>

            </div>


        </section>
    )

}

export default Menu