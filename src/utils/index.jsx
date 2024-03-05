import { Icon } from "@chakra-ui/react";
import { MoonIcon, LockIcon, InfoIcon, SunIcon } from "@chakra-ui/icons";

export const SuggestItems = [
  { name: "football", color: "red", icon: <Icon as={MoonIcon} /> },
  { name: "plicy", color: "purple", icon: <Icon as={LockIcon} /> },
  { name: "comeic", color: "twitter", icon: <Icon as={InfoIcon} /> },
  { name: "economy", color: "facebook", icon: <Icon as={SunIcon} /> },
];

export const NavbarLinks = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
];

export const mainApiURL = "https://posts-api.preview-ym.com/api/";
