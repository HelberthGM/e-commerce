import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='py-3' style={{ backgroundColor: '#6050DC', color: 'white' }}>
        <div className="container text-center">
            <div className="mb-2">
                <a href="" className="text-white text-decoration-none mx-2">Home</a>
                <a href="" className="text-white text-decoration-none mx-2">About</a>
                <a href="" className="text-white text-decoration-none mx-2">Shop</a>
                <a href="" className="text-white text-decoration-none mx-2">Contact</a>
            </div>
            <p className='small mb-0'>Follow us on social media</p>
            <div className="mb-2">
                <a href="" className="text-white mx-2"><FaFacebook /></a>
                <a href="" className="text-white mx-2"><FaSquareXTwitter /></a>
                <a href="" className="text-white mx-2"><FaInstagram /></a>
            </div>
            <p className='small mb-0'>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>

        </div>
    </footer>
  )
}

export default Footer