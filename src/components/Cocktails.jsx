import { cocktailLists,mockTailLists} from "../../constant"
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
function Cocktails() {

    useGSAP(()=>{
        const parallaxTimeLine = gsap.timeline({
            scrollTrigger:{
                trigger:'#cocktails',
                start:'top 30%',
                end:"bottom 80%",
                scrub:true
            }
        })

        parallaxTimeLine.from('#c-left-leaf',{x:-100 , y:100}).to('#c-right-leaf',{x:100 , y:100})

    })
  return (
    <section id='cocktails' className='noisy'>
        <img src="/images/cocktail-right-leaf.png" id="c-right-leaf" /> 

        <img src="/images/cocktail-left-leaf.png" id="c-left-leaf" /> 

        <div className="list">
            <div className="popular">
                 <h2>Most popular cocktails:</h2>
                 <ul>
                 {cocktailLists.map((drinks)=>(
                     <li key={drinks.name}>
                         <div className="md:me-28"> 
                             <h3>{drinks.name}</h3>
                             <p>{drinks.country} | {drinks.detail}</p>
                         </div>
                         <span>- {drinks.price}</span> 
                     </li>
                 ))}
                 </ul>
            </div>

            <div className="loved">
                 <h2>Most loved mocktails:</h2>
                 <ul>
                 {mockTailLists.map((drinks)=>(
                     <li key={drinks.name}>
                         <div className="md:me-28"> 
                             <h3>{drinks.name}</h3>
                             <p>{drinks.country} | {drinks.detail}</p>
                         </div>
                         <span>- {drinks.price}</span>
                     </li>
                 ))}
                 </ul>
            </div>
        </div>
    </section>
  )
}

export default Cocktails