import mulher_1 from "../media/mulher_1.png"
import mulher_2 from "../media/mulher_2.png"
import mulher_3 from "../media/mulher_3.png"
import mulher_4 from "../media/mulher_4.png"
import mulher_5 from "../media/mulher_5.png"
import mulher_6 from "../media/mulher_6.png"

const Mulheres = () => {

    return (
        <div className="Mulheres">
            <h1>Mulheres Bonitas</h1>
            <div>
                <img src={mulher_1} />
                <img src={mulher_2} />
                <img src={mulher_3} />
            </div>
            <div>
                <img src={mulher_4} />
                <img src={mulher_5} />
                <img src={mulher_6} />
            </div>
        </div>
    )
}

export default Mulheres