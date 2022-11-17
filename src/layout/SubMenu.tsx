import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
interface SubMenuProps {
  handleShowSubMenu: () => void;
  activeMenuItem: string;
  handleOnClose: () => void;
}

const subMenu = [
  {
    name: "Tour",
  },
  {
    name: "Activity",
  },
];

const SubMenu = ({
  handleShowSubMenu,
  activeMenuItem,
  handleOnClose,
}: SubMenuProps) => {
  return (
    <VStack px={2}>
      <>
        <Button
          w="100%"
          justifyContent={"space-between"}
          onClick={handleShowSubMenu}
        >
          <ChevronLeftIcon />
          Go Back to {activeMenuItem}
        </Button>
        {subMenu.map((menu, index) => (
          <Button
            w="100%"
            variant={"ghost"}
            justifyContent={"flex-start"}
            key={index}
            onClick={() => {
              handleOnClose();
              handleShowSubMenu();
            }}
          >
            {menu.name}
          </Button>
        ))}
      </>
    </VStack>
  );
};

export default SubMenu;
