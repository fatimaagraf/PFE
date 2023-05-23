import imageabout from '../../img/about.png'
import'./About.css';
const About =()=> {

return(<>
<div className='about'>

 <img src={imageabout}   className='aboutimg'/>
 <div className='pb'>
       <p>sweet clothes shop welcomes you! Here you will find detailed information about the history of the company ,the specifics of delivery service and our advantages</p>
        <button className='btnabout'> Learn More</button>
 
 
 
 </div>
   </div>
    </>
)




}
export default About;