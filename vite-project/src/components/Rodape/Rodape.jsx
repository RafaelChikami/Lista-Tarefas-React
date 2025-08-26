import style from "./Rodape.module.css";

const Rodape = (props) => {
    const { desenvolvedor } = props;
    const anoAtual = (new Date()).getFullYear();
    return (
        <footer className={style.Rodape}>React Básico - {anoAtual} - {desenvolvedor}</footer>
    );
};

export {Rodape};