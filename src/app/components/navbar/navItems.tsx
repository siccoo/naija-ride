import styled from "styled-components";
import tw from "twin.macro";

import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";


const ListContainer = styled.ul`
${tw`
// react-burger-menu
flex
list-none
`}
`;

const NavbarItems = styled.li`
${tw`
text-xs
md:text-base
text-black
font-medium
mr-1
md:mr-5
cursor-pointer
transition
duration-300
ease-in-out
hover:text-gray-700
`};
`;

export function NavItems() {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    if (isMobile) {
        return (
            <Menu styles={menuStyles}>
                <ListContainer>
                    <NavbarItems>
                        <a href="#">Home</a>
                    </NavbarItems>
                    <NavbarItems>
                        <a href="#">Cars</a>
                    </NavbarItems>
                    <NavbarItems>
                        <a href="#">About</a>
                    </NavbarItems>
                    <NavbarItems>
                        <a href="#">Contact us</a>
                    </NavbarItems>
                </ListContainer>
            </Menu>
        )
    }

    return (
        <ListContainer>
            <NavbarItems>
                <a href="#">Home</a>
            </NavbarItems>
            <NavbarItems>
                <a href="#">Cars</a>
            </NavbarItems>
            <NavbarItems>
                <a href="#">About</a>
            </NavbarItems>
            <NavbarItems>
                <a href="#">Contact us</a>
            </NavbarItems>
        </ListContainer>
    )
}