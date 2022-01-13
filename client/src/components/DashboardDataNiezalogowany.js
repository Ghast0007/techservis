import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import VpnKeyIcon from '@mui/icons-material/VpnKey';


export const DashboardData = [
  
  
    {
        title: "Strona główna",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "O firmie",
        icon: <InfoIcon />,
        link: "/OFirmie"
    },
    {
        title: "Kontakt",
        icon: <CallIcon />,
        link: "/Kontakt"
    },
    {
        title: "Usługi ",
        icon: <LocalOfferIcon />,
        link: "/Uslugi"
    },
    {
        title: "Cennik",
        icon: <PriceChangeIcon />,
        link: "/cennik"
    },
    {
        title: "Zarejestruj/Zaloguj",
        icon: <VpnKeyIcon />,
        link: "/register"
    },
]