import { nanoid } from "nanoid";

const menuItems = [
    {
        id: nanoid(),
        to: "/login",
        text: "LOg in",
        private: false,
    },
    {
        id: nanoid(),
        to: "/contacts",
        text: "Contacts",
        private: true,
    },
    {
        id: nanoid(),
        to: "/register",
        text: "Register",
        private: false,
    },
];

export default menuItems;