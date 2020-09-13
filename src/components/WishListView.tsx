import React, { Component } from "react"
import { observer } from "mobx-react"

import WishListItemView from "./WishListItemView"
import WishListItemEntry from "./WishListItemEntry"
// import IWishListItem from "../models/WishList"

// class WishListView extends Component {
//     props: any;
//     constructor(props: any) {
//         super(props);
//         this.props = props;
//     }
//     render() : any {
//         const { wishList } = this.props;
//         return (
//             <div className="list">
//                 <ul>
//                     {wishList.items.map((item: any, idx: any) => (
//                         <WishListItemView key={idx} item={item} />
//                     ))}
//                 </ul>
//                 Total: {wishList.totalPrice}
//                 <WishListItemEntry wishListItemEntry={wishList} />
//             </div>
//         );    
//     }
// }
const WishListView = ({ wishList }) => (
    <div className="list">
      <ul>
        {wishList.items.map((item: any, idx: any) => (
          <WishListItemView key={idx} item={item} />
        ))}
      </ul>
      Total: {wishList.totalPrice} €
      <WishListItemEntry wishList={wishList} />
    </div>
  );

// const WishListView = ({ wishList }) => (
//     <div className="list">
//         <ul>
//             {wishList.items.map((item: any, idx: any) => (
//                 <WishListItemView key={idx} item={item} />
//             ))}
//         </ul>
//     </div>
// )

export default observer(WishListView);