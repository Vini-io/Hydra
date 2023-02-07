
import './style.css'
import imageIntro from './assets/image/virt.svg'

function Introduction() {
    return (
        <div className='container'>

            <div className='about'>
                <h1><span>Dive</span> Into The Depths Of <span>Virtual Reality</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    nisl tincidunt eget. Lectus mauris eros in vitae .
                </p>
                <button>BUILD YOUR WORLD</button>
            </div>

            <div className='imageIntro'>
                <img src={imageIntro} />
            </div>


        </div>
    )
}
export default Introduction
