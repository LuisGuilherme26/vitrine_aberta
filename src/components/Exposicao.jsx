import upload from "../media/upload.png"
import textoImg from "../media/texto.png"
import link from "../media/link.png"
import cor from "../media/cores.png"
import elementos from "../media/elementos.png"
import alinhar from "../media/alinhar.png"
import anotar from "../media/anotar.png"
import { createElement, useState } from "react"
import Modal from 'react-modal'
import { SketchPicker } from "react-color"

const Exposicao = () => {

    const [text, setText] = useState([]);
    const [valueText, setValueText] = useState("");
    const [colorText, setColorText] = useState("000");
    const [isBold, setIsBold] = useState(false);
    const [size, setSize] = useState("");

    function addText(text) {

        let weight = "";

        if (isBold) {
            weight = "bold";
        } else {
            weight = "400"
        }

        let span = createElement('span', { style: { color: colorText, fontSize: size, fontWeight: weight } }, text);

        setText((oldArray) => ([oldArray, span]));
        setIsBold(false);
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

    function handleSize(e){
        switch(e.target.value){
            case "s":
                setSize("15px")
                break
            case "m":
                setSize("25px")
                break
            case "b":
                setSize("32px")
                break
        }
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <div className="Exposicao">
                <div className="box1">
                    <div className="organize">
                        <div className="titulo">
                            <h2>Organize seu trabalho</h2>
                        </div>
                        <div className="box">
                            {text}
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
                                    className="modal-content"
                                >
                                    <h2>Adicionar texto</h2>

                                    <input type="text" name="textField" onChange={(a) => { handleText(a.target.value) }} />
                                    <SketchPicker
                                        color={colorText}
                                        onChangeComplete={handleColorText}
                                    />
                                    <input type="checkbox" onChange={handleBold} /><span>Negirto???</span>
                                    <label>
                                        Tamanho da letra:
                                        <select name="size" onChange={handleSize}>
                                            <option value="">Selecione</option>
                                            <option value="s">Pequeno</option>
                                            <option value="m">Medio</option>
                                            <option value="b">Grande</option>
                                        </select>
                                    </label>
                                    <button onClick={() => { addText(valueText) }}>Adicionar texto</button>
                                    <button onClick={closeModal}>Fechar</button>
                                </Modal>
                                <button className="box">
                                    <img src={link} />
                                    <span>Incorporar</span>
                                </button>
                                <button className="box" style={{ borderRight: "none" }}>
                                    <img src={cor} />
                                    <span>Cor de Fundo</span>
                                </button>
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
                    <button>Continuar</button>
                </div>
            </div>
        </>
    )
}


export default Exposicao