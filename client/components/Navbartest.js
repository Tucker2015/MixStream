import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";

const Navbartest = () => {
    return (
        <ReactNavbar
            color="#191919"
            menu={[
                { name: "HOME", to: "/" },
                { name: "GO LIVE", to: "/settings" },
                { name: "PROFILE", to: "/profile" },
                { name: "LOGOUT", to: "/Logout" },
            ]}
            social={[
                {
                    name: "Linkedin",
                    url: "https://www.linkedin.com/in/nazeh-taha/",
                    icon: ["fab", "linkedin-in"],
                },
                {
                    name: "Facebook",
                    url: "https://www.facebook.com/nazeh200/",
                    icon: ["fab", "facebook-f"],
                },
                {
                    name: "Instagram",
                    url: "https://www.instagram.com/nazeh_taha/",
                    icon: ["fab", "instagram"],
                },
                { name: "Twitter", url: "http://nazehtaha.herokuapp.com/", icon: ["fab", "twitter"] }
            ]}
        />
    );
};

export default Navbartest;