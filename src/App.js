import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <section className="header">
        <nav>
            <a href="index.html"><img src="images/logo.png" alt=""/></a>
            <div className="nav-links" id="navLinks">
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="course.html">COURSE</a></li>
                    <li><a href="blog.html">BLOG</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </div>
            <img src="images/manu.png" alt="" className="manu-icon" onclick="toggleManu()"/>
        </nav>

        <div className="text-box">
            <h1>World's Biggest University</h1>
            <p>Making Website is now one of the easiest thing in the world. You just need to learn basic HTML, CSS,
                JS and you are good to go.</p>
            <a href="" className="hero-btn">Visit To Know More</a>
        </div>
    </section>

   
    <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ipsum?</p>

        <div className="row">
            <div className="course-column">
                <h3>Intermediate</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias officiis repellat! Eos,
                    inventore. Quo ad adipisci deleniti voluptates maxime tenetur molestias, voluptatem facere eius
                    laborum cum voluptatibus doloremque iusto dolores ipsam. Fugiat, dolorum!</p>
            </div>
            <div className="course-column">
                <h3>Degree</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias officiis repellat! Eos,
                    inventore. Quo ad adipisci deleniti voluptates maxime tenetur molestias, voluptatem facere eius
                    laborum cum voluptatibus doloremque iusto dolores ipsam. Fugiat, dolorum!</p>
            </div>
            <div className="course-column">
                <h3>Post Graduation</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias officiis repellat! Eos,
                    inventore. Quo ad adipisci deleniti voluptates maxime tenetur molestias, voluptatem facere eius
                    laborum cum voluptatibus doloremque iusto dolores ipsam. Fugiat, dolorum!</p>
            </div>
        </div>
    </section>


    
    <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsum.
        </p>

        <div className="row">
            <div className="campus-column">
                <img src="images/london.png" alt=""/>
                <div className="layer">
                    <h3>LONDON</h3>
                </div>
            </div>

            <div className="campus-column">
                <img src="images/newyork.png" alt=""/>
                <div className="layer">
                    <h3>NEW YORK</h3>
                </div>
            </div>

            <div className="campus-column">
                <img src="images/washington.png" alt=""/>
                <div className="layer">
                    <h3>WASHINGTON</h3>
                </div>
            </div>
        </div>
    </section>


    
    <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, temporibus.</p>

        <div className="row">
            <div className="facilities-column">
                <img src="images/library.png" alt=""/>
                <h3>World's Best Library</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ipsa dolore perspiciatis.</p>
            </div>
            <div className="facilities-column">
                <img src="images/basketball.png" alt=""/>
                <h3>Largest Play Ground</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ipsa dolore perspiciatis.</p>
            </div>
            <div className="facilities-column">
                <img src="images/cafeteria.png" alt=""/>
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ipsa dolore perspiciatis.</p>
            </div>
        </div>
    </section>


   
    <section className="testimonials">
        <h1>What Our Student Says</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsam!</p>
        <div className="row">
            <div className="testimonials-column">
                <img src="images/user1.jpg" alt=""/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed facere quae saepe ut deserunt totam amet similique veniam nobis rem doloribus, odio molestias praesentium atque</p>
                    <h3>Christian Berley</h3>
                    <p>4.9 Ratings</p>
                </div>
            </div>
            <div className="testimonials-column">
                <img src="images/user2.jpg" alt=""/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed facere quae saepe ut deserunt totam amet similique veniam nobis rem doloribus, odio molestias praesentium atque</p>
                    <h3>David Byer</h3>
                    <p>4.5 Ratings</p>
                </div>
            </div>
        </div>
    </section>

   
    <section className="cta">
        <h1>Enroll For Our Various Online Courses  Anywhere From The World</h1>
        <a href="" className="hero-btn">CONTACT US</a>
    </section>


    <section className="footer">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis cupiditate blanditiis 
            voluptate tempore vitae corporis nisi commodi, quod, ad quidem expedita sit.</p>

        <div className="icons">
            <img src="images/fb-icon (2).png" alt=""/>
            <img src="images/twitter-icon (2).png" alt=""/>
            <img src="images/instagram-icon.png" alt=""/>
            <img src="images/in-icon (2).png" alt=""/>
        </div>
        <p>Made by | <span style="color: #f44336;">INAM ILYAS</span></p>

    </section>


    
    {/* <script>
        let navLinks = document.getElementById("navLinks");
        function toggleManu() {
            // console.log('clicked on show');

            if (navLinks.style.right == "-200px") {
                navLinks.style.right = "0";
            }
            else {
                navLinks.style.right = "-200px";
            }
        }
    </script> */}
</div>
  );
}

export default App;
