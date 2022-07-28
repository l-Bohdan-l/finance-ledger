import { Nav, NavItem, NavLink, NavList } from "./HeaderNav.styled"

export function HeaderNav() {
    return (
        <Nav>
            <NavList>
                <NavItem>
                    <NavLink href=''>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href=''>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href=''>Cases</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href=''>Blog</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href=''>Contact</NavLink>
                </NavItem>
            </NavList>
        </Nav>
    )
}