import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'
import React from 'react'

const NavigationItems = () => {


    const [activeBuilder, setActiveBuilder] = React.useState(true)
    const [activeCheckOut, setActiveCheckOut] = React.useState(false)

    React.useEffect(() => {
        if (window.location.href.split('/')[3] === 'orders') {
            setActiveCheckOut(true);
            setActiveBuilder(false);
        }
    }, [])

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active={activeBuilder} activateFunction={() => { setActiveBuilder(true); setActiveCheckOut(false) }}>BurgerBuilder</NavigationItem>
            <NavigationItem link="/orders" active={activeCheckOut} activateFunction={() => { setActiveBuilder(false); setActiveCheckOut(true) }}>Checkout</NavigationItem>
        </ul>
    )
}

export default NavigationItems