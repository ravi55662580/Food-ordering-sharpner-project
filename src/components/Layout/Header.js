import { Fragment } from "react"
import mealsimage from '../../Assets/meals.jpg'
import classes from './header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src ={mealsimage} alt='A table full of delicious food!'/>
        </div>

    </Fragment>
};

export default Header;