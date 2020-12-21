import React from 'react';
import NavLink from "react-router-dom/NavLink";

const Goods = (props) => {
    return <header>

        <div>
            <NavLink to={'/goods'}>
                Goods
            </NavLink>
        </div>
    </header>
}

export default Goods;