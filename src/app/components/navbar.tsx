"use client";

import {useState, useEffect} from "react";

import {useMediaQuery} from "@chakra-ui/react";

import MobileDrawer from "./MobileDrawer";
import MediumNavbar from "./mediumNavbar";

const Navbar = () => {
  const [currMedium, setCurrMedium] = useState<boolean>(true);
  const [isMedium] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setCurrMedium(isMedium);
  }, [isMedium]);

  return currMedium ? <MediumNavbar /> : <MobileDrawer />;
};

export default Navbar;