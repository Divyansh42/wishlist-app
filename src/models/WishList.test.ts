import { WishList, WishListItem } from "./WishList"
import { isTemplateElement } from "@babel/types";
it("can create an instance of model", () => {
    const item = WishListItem.create({
        "name" : "Headphone",
        "price" : 999,
        "image" : "https://www.amazon.in/pTron-Bassbuds-Wireless-Bluetooth-Headphones/dp/B07WSHWNH8?ref_=Oct_DLandingS_D_d157f3d0_60&smid=A14CZOWI0VEHLG"
    });
    expect(item.price).toBe(999);
    item.changeName("Wireless Earphone")
    expect(item.name).toBe("Wireless Earphone")
});

it("can create a wishlist", () => {
    const list = WishList.create({
        items: [

            {
                "name" : "Headphone",
                "price" : 999
            }
        ]
    })

    expect(list.items.length).toBe(1)
    expect(list.items[0].price).toBe(999)
})

it("can add new items", () => {
    const list = WishList.create()
    list.add(WishListItem.create({
        name: "Cheese",
        price: 100
    }))

    expect(list.items.length).toBe(1);
    expect(list.items[0].name).toBe("Cheese")
    list.items[0].changeName("Pizza Cheese")
    expect(list.items[0].name).toBe("Pizza Cheese")
    
})