import { WishListItem } from "./WishList"
it("can create an instance of model", () => {
    const item = WishListItem.create({
        "name" : "Headphone",
        "price" : 999,
        "image" : "https://www.amazon.in/pTron-Bassbuds-Wireless-Bluetooth-Headphones/dp/B07WSHWNH8?ref_=Oct_DLandingS_D_d157f3d0_60&smid=A14CZOWI0VEHLG"
    });
    expect(item.price).toBe(999);
});