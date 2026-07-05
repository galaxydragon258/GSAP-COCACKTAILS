import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

function Hero() {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars , words' })

        const pharagraphSplit = new SplitText('.subtitle', { type: 'lines' })


        heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent:100,
            duration:1.0,
            ease:'expo.out',
            stagger:0.05
        })

        gsap.from(pharagraphSplit.lines, {
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:'expot.out',
            stagger:0.05,
            delay:1
        });

        gsap.timeline({
            scrollTrigger:{
                trigger:'#hero',
                start:'top top',
                end:'bottom top',
                scrub: true,
            }
        }).to('.right-leaf', {y:200},0).to('.left-leaf', {y:-200},0)

    }, [])
    return (
        <>
            <section id='hero' className="noisy">
                <h1 className='title'> MOJITO</h1>
                <img src="/images/hero-left-leaf.png" className='left-leaf' />
                <img src="/images/hero-right-leaf.png" className='right-leaf' />

                <div className='body'>
                    <div className='content'>
                        <div className='space-y-6 hidden md:block'>
                            <p>Click. Crips. Classic</p>
                            <p className="subtitle">
                                Sip the Spirit
                            </p>
                        </div>
                        <div className='view-cocktails'>
                            <p className="subtitle">
                                Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                            </p>
                            <a href="/cocktails" className="btn btn-primary">
                                View Cocktails
                            </a>
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero