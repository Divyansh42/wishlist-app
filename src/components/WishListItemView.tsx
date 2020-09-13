import React, { Component } from "react";

// import IWishListItem from "../models/WishList"

class WishListItemView extends Component {
    props: any;
    constructor(props: any) {
        super(props);
        this.props = props;
    }
    render(): any {
        const {item } = this.props;
        return (
            <li className="item">
                {item.image && <img src={item.image} />}
                <h3>{item.name}</h3>
                <span>{item.price}</span>
            </li>
        );     
    }
}

// const WishListItemView = ({ item }) => (
//     <li className="item">
//         {item.image && <img src={item.image} />}
//         <h3>{item.name}</h3>
//         <span>{item.price}</span>
//     </li>
// )

export default WishListItemView