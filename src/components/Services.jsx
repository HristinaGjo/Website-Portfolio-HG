import React from "react";


const Services = ({scrollRef}) => {
    /* const [animate, setAnimate] = useState(false);
    const titleRef = useRef(null);
  
    useEffect (() => {
      function handleScroll() {
        const aboutSection = titleRef.current;
        if (!aboutSection) return;
  
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
  
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
  
      window.addEventListener("scroll", handleScroll);
      // Call handleScroll once on mount to check if the element is initially in the viewport
      handleScroll();
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []); */

    
    return ( 
        <>
      <div data-scroll-container className={classes.pageCtn} ref={scrollRef}>
        <h3 data-scroll data-scroll-speed="-2" >SERVICES</h3>
        <p data-scroll data-scroll-speed="-2" >jsajknsjsnajksnaksnaksakaksasnskasnkanskska
          sansanskanklanskanaksnnasknansnaksnkasnkansksas
          snfjnkfjdiojfdkfmklmdkmnsjdijdeksodksöldsekoo
          dskdnksldnksdnskdnksndnsdnks
        </p>
    </div>
        </>
     );
}
 
export default Services;