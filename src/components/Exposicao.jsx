import upload from "../media/upload.png"
import textoImg from "../media/texto.png"
import link from "../media/link.png"
import corIcon from "../media/cores.png"
import elementos from "../media/elementos.png"
import alinhar from "../media/alinhar.png"
import anotar from "../media/anotar.png"
import { createElement, useState } from "react"
import Modal from 'react-modal'
import ModalCor from 'react-modal'
import { SketchPicker } from "react-color"
import axios from "axios"

const Exposicao = () => {

    const [texto, setTexto] = useState([]);
    const [valueText, setValueText] = useState("");
    const [colorText, setColorText] = useState("000");
    const [isBold, setIsBold] = useState(false);
    const [size, setSize] = useState("14");
    const [cor, setCor] = useState({r: 255,g: 255,b: 255,a: 1})

    function addText(text) {

        let weight = "";

        if (isBold) {
            weight = "bold";
        } else {
            weight = "400"
        }

        let span = createElement('span', { style: { color: colorText, fontSize: size, fontWeight: weight } }, text.target.value);

        setTexto((oldArray) => ([...oldArray, span]));
        setIsBold(false);
        setSize("14")
        closeModal();
    }

    function handleText(e) {
        setValueText(e);
    }

    function handleColorText(color) {
        setColorText(color.hex)
    }

    function handleBold(e) {
        setIsBold(e.target.checked)
    }

    function handleSize(e) {
        let size = e.target.value + "px";
        setSize(size)
    }

    function changeCor(cor){
        console.log(cor)
        setCor(cor.rgb)
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalCorIsOpen, setCorIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModalCor() {
        setCorIsOpen(true)
    }

    function closeModalCor() {
        setCorIsOpen(false)
    }

    function handleSubmit(e){
        e.preventDefault();

        const newExpo = {texto, cor}
        console.log(newExpo)
        axios.post("http://localhost:3001/expo/registrar", newExpo)
            .then(
                (res) => {
                    alert(`Trabalho cadastrado`)
                    console.log(res.data)
                }
            )
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="Exposicao">
                <div className="box1">
                    <div className="organize" style={{ backgroundColor: `rgb(${cor.r},${cor.g},${cor.b},${cor.a})`}}>
                        <div className="titulo">
                            <h2>Organize seu trabalho</h2>
                        </div>
                        <div className="box">
                            {texto}
                        </div>
                    </div>
                </div>
                <div className="box2">
                    <div className="anexos">
                        <div className="titulo">
                            <h2>Anexos</h2>
                        </div>
                        <div className="ane-content">
                            <img src={upload} />
                            <span style={{ fontWeight: "bold", fontSize: "20px" }}>Upload</span>
                            <p>Coloque seus arquivos aqui, imagens,<br /> vídeos, músicas entre outros</p>
                            <button>Upload</button>
                        </div>
                    </div>
                    <div className="conteudo">
                        <div className="titulo">
                            <h2>Conteúdo</h2>
                        </div>
                        <div className="con-content">
                            <div className="row">
                                <button className="box" onClick={openModal} style={{ borderLeft: "none" }}>
                                    <img src={textoImg} />
                                    <span>Texto</span>
                                </button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    contentLabel="Example Modal"
                                    overlayClassName="modal-overlay"
                                    className="modal-content exp-texto"
                                >
                                    <div className="box">
                                        <div className="exp-texto-box">
                                            <h2>Adicionar texto</h2>
                                            <textarea placeholder="Digite seu texto aqui" onChange={handleText} cols="30" rows="10" style={{ resize: "none" }}></textarea>
                                            <div>
                                                <input type="checkbox" onChange={handleBold} style={{ marginTop: "15px" }} />
                                                <span>Negrito</span>
                                            </div>
                                            <label style={{ marginTop: "5px" }}>
                                                <select name="size" onChange={handleSize}>
                                                    <option value="14">14</option>
                                                    <option value="16">16</option>
                                                    <option value="18">18</option>
                                                    <option value="20">20</option>
                                                    <option value="22">22</option>
                                                    <option value="24">24</option>
                                                    <option value="26">26</option>
                                                    <option value="28">28</option>
                                                    <option value="30">30</option>
                                                    <option value="32">32</option>
                                                </select>
                                                Tamanho da letra
                                            </label>
                                        </div>
                                        <div className="exp-texto-box" style={{ alignItems: "center" }}>
                                            <SketchPicker
                                                color={colorText}
                                                onChangeComplete={handleColorText}
                                            />
                                        </div>
                                    </div>
                                    <div className="exp-texto-btn">
                                        <button onClick={() => { addText(valueText) }} style={{ backgroundColor: "#E4623E" }}>Adicionar texto</button>
                                        <button onClick={closeModal} style={{ backgroundColor: "#808080" }}>Fechar</button>
                                    </div>
                                </Modal>
                                <button className="box">
                                    <img src={link} />
                                    <span>Incorporar</span>
                                </button>
                                <button className="box" onClick={openModalCor} style={{ borderRight: "none" }}>
                                    <img src={corIcon} />
                                    <span>Cor de Fundo</span>
                                </button>
                                <ModalCor
                                    isOpen={modalCorIsOpen}
                                    onRequestClose={closeModalCor}
                                    contentLabel="Example Modal"
                                    overlayClassName="modal-overlay"
                                    className="modal-content exp-cor"
                                >
                                    
                                    <h2>Selecione uma cor de fundo</h2>
                                    <div className="box">
                                        <SketchPicker
                                            color={cor}
                                            onChangeComplete={changeCor}
                                        />
                                        <button onClick={closeModalCor}>Adiocionar cor</button>
                                    </div>
                                </ModalCor>
                            </div>
                            <div className="row">
                                <button className="box" style={{ borderLeft: "none" }}>
                                    <img src={elementos} />
                                    <span>Elementos</span>
                                </button>
                                <button className="box">
                                    <img src={alinhar} />
                                    <span>Alinhamento</span>
                                </button>
                                <button className="box" style={{ borderRight: "none" }}>
                                    <img src={anotar} />
                                    <span>Anotação</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <button type="submit">Continuar</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Exposicao