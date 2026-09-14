/**
 * Welcome — composant d'affichage simple basé sur des props.
 * Sert à pratiquer le test du rendu conditionnel selon les props
 * (firstname / lastname) avec React Testing Library.
 */
import style from './Welcome.module.css';

export default function Welcome({ firstname, lastname }) {

    return (
        <h1 className={style.example}>Bienvenue {firstname} {lastname} !</h1>
    );
}
