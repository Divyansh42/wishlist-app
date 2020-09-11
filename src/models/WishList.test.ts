import { getSnapshot, onSnapshot, onPatch } from "mobx-state-tree"
import { WishList, WishListItem } from "./WishList"
import { snapshotProcessor } from "mobx-state-tree/dist/internal";

// test WishListItem
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

// test WishList
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

/**
 * using Snapshot from MST to match the whole snapshot
 */

it("can add new items", () => {
    const list = WishList.create();
    list.add({
        name: "Cheese",
        price: 100,
    });

    expect(list.items.length).toBe(1);
    expect(list.items[0].name).toBe("Cheese")
    list.items[0].changeName("Pizza Cheese")
    expect(list.items[0].name).toBe("Pizza Cheese")

    expect(getSnapshot(list)).toEqual({
        items: [
            {
                name: "Pizza Cheese",
                price: 100,
                image: "",
            },
        ],
    })

    expect(getSnapshot(list)).toMatchSnapshot();
})

/**
 * using OnSnapshot
 */

it("can add new items using OnSnapshot", () => {
    const list = WishList.create();
    const states: any = []
    onSnapshot(list, snapshot => {
        states.push(snapshot)
    });
    list.add({
        name: "Cheese",
        price: 100,
        image: "",
    });

    expect(list.items.length).toBe(1);
    expect(list.items[0].name).toBe("Cheese")
    list.items[0].changeName("Pizza Cheese")
    expect(list.items[0].name).toBe("Pizza Cheese")

    expect(getSnapshot(list)).toEqual({
        items: [
            {
                name: "Pizza Cheese",
                price: 100,
                image: "",
            },
        ],
    });
    // to MatchSnapshot creates a snapshot in the current dir
    //obtain immutable snapshots of the state using getSnapshot
    expect(getSnapshot(list)).toMatchSnapshot();
    expect(states).toMatchSnapshot()
})

it("can add new item using onPatch", () => {
    const list = WishList.create()
    const patches: any  = []
    onPatch(list, patch => {
        patches.push(patch)
    })
    list.add({
        name: "Cheese",
        price: 100, 
        image: "",
    })

    list.items[0].changeName("Pizza Cheese");

    expect(patches).toMatchSnapshot();
});