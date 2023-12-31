import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <div>
      <HStack justifyContent="space-between" padding="15px">
        <Image src={logo} boxSize="60px" />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
}

export default NavBar;
