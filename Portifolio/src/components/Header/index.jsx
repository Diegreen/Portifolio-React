import { MyButton } from "../ButtonSection"

export const Header = () => {
    return (
        <header className="header">
            <h3 className="h1">Portifólio</h3>
            <div className="div">
                <a href="">Sobre</a>
                <a href="">Stack</a>
                <a href="">Projetos</a>
            </div>
            <MyButton/>
        </header>
    )
}