import React, { Component } from "react";
import { observer } from "mobx-react";

import WishListItemEdit from "./WishListItemEdit";

import { WishListItem } from "../models/WishList";

class WishListItemEntry extends Component {
    state: any;
    props: any;
    constructor(props: any) {
        super(props);
        this.props = props;
        this.state = {
            entry: WishListItem.create({
                name: "",
                price: 0,
                image: "",
            }),
        };
    }
    render() {
        return (
            <div>
                <WishListItemEdit item={this.state.entry} />
                <button onClick={this.onAdd}>Add</button>
            </div>
        )

    }
    onAdd = () => {
        console.log(this.props.wishList);
        this.props.wishList.add(this.state.entry);
        this.setState({
          entry: WishListItem.create({
            name: "",
            price: 0,
            image: "",
          }),
        });
      };
}

export default observer(WishListItemEntry);