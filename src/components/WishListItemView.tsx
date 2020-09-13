import React, { Component } from "react";
import { observer } from "mobx-react";
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree";

import WishListItemEdit from "./WishListItemEdit"

// import IWishListItem from "../models/WishList"

class WishListItemView extends Component {
    props: any;
    state: any;
    constructor(props: any) {
        super(props);
        this.props = props;
        this.state = { isEditing: false }
    }
    render(): any {
        const { item } = this.props;
        return this.state.isEditing ? (
            this.renderEditable()
        ) : (    
            <li className="item">
                {item.image && <img src={item.image} />}
                <h3>{item.name}</h3>
                <span>{item.price}</span>
                <span>
                    <button onClick={this.onToggleEdit}>✏️</button>
                    <button onClick={item.remove}>❌</button>
                </span>
            </li>
        ); 
    }
    renderEditable() {
        return (
            <li className="item">
                <WishListItemEdit item={this.state.clone} />
                <button onClick={this.onSaveEdit}>💾</button>
                <button onClick={this.onCancelEdit}>❌</button>
            </li>
        )
    }
    onToggleEdit = () => {
        //clone to create a full, deep clone of any model instance
        this.setState({ 
            isEditing: true,
            clone: clone(this.props.item) });
    };

    onSaveEdit = () => {
        applySnapshot(this.props.item, getSnapshot(this.state.clone))
        this.setState({
            isEditing: false,
            clone: null
        })
    }
    
    onCancelEdit = () => {
        this.setState({
            isEditing: false
        })
    };
}

// const WishListItemView = ({ item }) => (
//     <li className="item">
//         {item.image && <img src={item.image} />}
//         <h3>{item.name}</h3>
//         <span>{item.price}</span>
//     </li>
// )

export default observer(WishListItemView)