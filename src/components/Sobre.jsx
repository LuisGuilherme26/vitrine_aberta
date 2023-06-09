import logo from '../media/logo.png'
import img01 from '../media/sobre-img-1.svg'
import img02 from '../media/sobre-img-2.svg'
import img03 from '../media/sobre-img-3.svg'

const Sobre = () => {
    return(
        <div className='container bg-cor-laranja' id='sobre'>
            <div className='sobre-titulo' style={{marginTop:"5%"}}>
                <h2>Sobre nós</h2>
            </div>
            <section className='sobre-o-que-e'>
                <div>
                    <img src={img01} alt="" className='sobre-img' />
                </div>
                <div className='textos'>
                    <h3>O que é a Vitrine Aberta?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis commodi tenetur nulla minus consequatur rem voluptatibus ab, laboriosam enim porro similique vel debitis minima, incidunt quam, sint doloribus suscipit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero beatae placeat, sint neque quasi consectetur amet ad saepe, illum quas illo, incidunt nihil. Ipsum numquam cupiditate doloremque nihil ea odio!</p>
                </div>
            </section>
            <section className='sobre-licenca'>
                <div className='textos'>
                    <h3>O que é a Vitrine Aberta?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis commodi tenetur nulla minus consequatur rem voluptatibus ab, laboriosam enim porro similique vel debitis minima, incidunt quam, sint doloribus suscipit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero beatae placeat, sint neque quasi consectetur amet ad saepe, illum quas illo, incidunt nihil. Ipsum numquam cupiditate doloremque nihil ea odio!</p>
                </div>
                <div>
                    <img src={img02} alt="" className='sobre-img' />
                </div>
            </section>
            <section className='sobre-soft-livre'>
                <div>
                    <img src={img03} alt="" className='sobre-img' />
                </div>
                <div className='textos'>
                    <h3>O que é a Vitrine Aberta?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis commodi tenetur nulla minus consequatur rem voluptatibus ab, laboriosam enim porro similique vel debitis minima, incidunt quam, sint doloribus suscipit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero beatae placeat, sint neque quasi consectetur amet ad saepe, illum quas illo, incidunt nihil. Ipsum numquam cupiditate doloremque nihil ea odio!</p>
                </div>
            </section>
        </div>
    );
}

export default Sobre