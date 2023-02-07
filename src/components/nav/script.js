import './style.css'

function nav() {
    return (
        <nav>
            <div>
                <span className='logo'>HYDRA</span>
            </div>

            <ul>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>TECHNOLOGIES</li>
                <li>HOW TO</li>
            </ul>

            <div>
                <button className='contact'>CONTACT US</button>
                <button className='JoinHydra'>JOIN HYDRA</button>
            </div>
        </nav>
    )
}

export default nav