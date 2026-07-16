import { useGSAP } from "@gsap/react"
import { openingHours } from "../../constant"
import { socials } from "../../constant"
import gsap from "gsap"
import { SplitText } from "gsap/all"
function Contact() {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center'
            },
            ease: 'power1.inOut'
        })

        timeline.from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02
        }).from('#contact p',{
            opacity:0,
            stagger:0.02,
            yPercent:100
        })

    })
    return (
        <footer id='contact'>
            <img src='/images/footer-right-leaf.png' alt='right-left' id='f-right-leaf' />
            <img src='/images/footer-left-leaf.png' alt='left-left' id='f-left-leaf' />

            <div className="content">
                <h2>Where to find Us</h2>

                <div>
                    <h3>Visit Our Bar</h3>
                    <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>(555) 987-6543
                        hello@jsmcocktail.com</p>
                </div>
                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <div>
                            <p key={time.day}>
                                {time.day}:{time.time}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex-center gap-5">
                    {socials.map((social) => (
                        <a key={social.icon}
                         href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            <img src={social.icon} />
                        </a>
                    ))}


                </div>
            </div>


        </footer>
    )
}

export default Contact