import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import {useRef} from 'react'
import {useMediaQuery} from 'react-responsive'

function Hero() {
    const videoRef = useRef()
    console.log(videoRef.current)
    const isMobile = useMediaQuery({ maxWidth: 768 });


    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' })

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
            ease:'expo.out',
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
        }).to('.right-leaf', {y:350},0).to('.left-leaf', {y:-350},0)

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'video',
                start:startValue,
                end:endValue,
                scrub:true,
                pin:true
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current,{
                currentTime:videoRef.current.duration
            })
            }

    }, [])
    return (
        <>
            <section id='hero' className="noisy relative">
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
            <div className="video absolute inset-0 ">
                <video 
                ref={videoRef}
                src="/videos/output.mp4"
                muted 
                playsInline 
                preload='auto'
                
                />
            </div>
        </>
    )
}

export default Hero