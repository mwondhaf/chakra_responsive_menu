import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Hide,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Show,
  Tooltip,
  useDisclosure,
  VStack,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Stack,
  Box,
  ButtonGroup,
} from "@chakra-ui/react";
import { ChevronRightIcon, HamburgerIcon, AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import SubMenu from "./SubMenu";

const menuItems = [
  {
    name: "Home",
  },
  {
    name: "Hotels",
  },
  {
    name: "Categories",
  },
  { name: "Destination" },
  { name: "Blog" },
  { name: "Contact" },
];
function MenuComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string>("");

  const handleClick = () => {
    onOpen();
  };

  const handleOnClose = () => {
    onClose();
  };

  const handleShowSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <Container maxW={{ md: "container.xl" }} p={4}>
      <Show below="md">
        <HStack justify={"space-between"}>
          <Heading>Logo</Heading>
          <IconButton
            icon={<HamburgerIcon w={7} h={7} />}
            aria-label="menu-icon"
            onClick={() => handleClick()}
            variant="ghost"
          />
        </HStack>
      </Show>
      <Hide below="md">
        <HStack justify={"space-between"}>
          <Heading>Logo</Heading>
          <HStack>
            {menuItems.map((item, index) => (
              <Popover key={index}>
                <PopoverTrigger>
                  <Button>{item.name}</Button>
                </PopoverTrigger>
                <PopoverContent maxW="240px">
                  <PopoverArrow />
                  <PopoverBody>
                    <VStack align="start" py={5}>
                      <Button
                        w="100%"
                        justifyContent={"flex-start"}
                        variant={"ghost"}
                        fontSize="15px"
                        fontWeight={"normal"}
                      >
                        Email
                      </Button>
                      <Button
                        w="100%"
                        justifyContent={"flex-start"}
                        variant={"ghost"}
                        fontSize="15px"
                        fontWeight={"normal"}
                      >
                        Email
                      </Button>{" "}
                      <Button
                        w="100%"
                        justifyContent={"flex-start"}
                        variant={"ghost"}
                        fontSize="15px"
                        fontWeight={"normal"}
                      >
                        Email
                      </Button>
                    </VStack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ))}
          </HStack>
        </HStack>
      </Hide>

      {/* for mobile  */}
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerHeader p={4}>
            <Heading>Logo</Heading>
          </DrawerHeader>
          <DrawerBody
            p={0}
            // align={"start"}
            overflowY={"scroll"}
          >
            {!showSubMenu && (
              <Stack pb={2} h="80vh">
                <VStack w="full" h="full">
                  {menuItems.map((item, index) => (
                    <Button
                      w="100%"
                      justifyContent={"space-between"}
                      variant="ghost"
                      key={index}
                      onClick={() => {
                        setActiveMenuItem(item.name);
                        handleShowSubMenu();
                      }}
                    >
                      {item.name}
                      <ChevronRightIcon />
                    </Button>
                  ))}
                </VStack>
                <HStack
                  justify={"space-between"}
                  w="100%"
                  p={2}
                  h="full"
                  align={"flex-end"}
                >
                  <Button size="lg">Become an Agent</Button>
                  <Button size="lg">Sign In/ Register</Button>
                </HStack>
              </Stack>
            )}
            {showSubMenu && (
              <SubMenu
                {...{ handleShowSubMenu, activeMenuItem, handleOnClose }}
              />
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
}

export default MenuComponent;
