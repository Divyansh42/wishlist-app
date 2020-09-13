import { types, Instance } from "mobx-state-tree"
const data = {
    "name" : "Headphone",
    "price" : 999,
    "image" : "https://www.amazon.in/pTron-Bassbuds-Wireless-Bluetooth-Headphones/dp/B07WSHWNH8?ref_=Oct_DLandingS_D_d157f3d0_60&smid=A14CZOWI0VEHLG"
}
export const WishListItem = types.model({
    name: types.string,
    price: types.number,
    image: ""
})
.actions(self => ({
    changeName(newName: string) {
        self.name = newName
    },
    changePrice(newPrice: number) {
        self.price = newPrice
    },
    changeImage(newImage: string) {
        self.image = newImage
    }
}))

export const WishList = types.model({
    items: types.optional(types.array(WishListItem), [])

})
.actions(self => ({
    add(item: IWishListItem) {
        self.items.push(item)
    }
}))
.views(self => ({
    get totalPrice() {
        return self.items.reduce((sum: number, entry: IWishListItem) => sum + entry.price, 0)
    }
}))

export interface IWishListItem {
    name: string;
    price: number;
    image?: string;
  } 