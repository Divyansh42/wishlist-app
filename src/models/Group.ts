import { types } from "mobx-state-tree"

import { WishList } from "./WishList";

const User = types.model({
    id: types.identifier,
    name: types.string,
    gender: types.enumeration("gender", ["m", "f"]),
    wishList: types.optional(WishList, {})
})

export const Group = types.model({
    users: types.map(User)
})