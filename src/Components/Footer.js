import { FaBookReader, FaOtter } from "react-icons/fa";
import "../Styles/footer.css";

function Footer() {
    return (
        <section class="footer">
            <div class="box-container">
                <div class="box">
                    <h3>Quick Links</h3>
                    <a href="home#">Home</a>
                    <a href="profile#">Course</a>
                    <a href="donations#">Forum</a>
                    <a href="petitions#">Dashboard</a>
                </div>
        
                <div class="box">
                    <h3>Address</h3>
                    <a href="#">12,217,Technology Park Malaysia, 57000 Kuala Lumpur, Federal Territory of Kuala Lumpur</a>
                </div>
        
                <div class="box">
                    <h3>Email</h3>
                    <a href="#">benningging@gmail.com</a>
                </div>
        
                <div class="box">
                    <h3>Contact Info</h3>
                    <a href="#">+03 1234 8576</a>
                </div>
        
                <div class="credit">Created by<span> Developers of Benningging </span> | All Rights Reserved</div>
            </div>
    </section>
    );
}

export default Footer;