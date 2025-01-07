import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

interface NavBarProps {
  activePage: string;
}

export default function NavBar({ activePage }: NavBarProps) {
  return (
    <ClerkProvider>
      <Navbar maxWidth="2xl">
        <NavbarBrand>
          <p className="font-bold text-inherit">
            {" "}
            <Link href="/" className="text-inherit">
              Shhh
            </Link>
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          <NavbarItem isActive={activePage === "/"}>
            <Link
              color={activePage === "/" ? "secondary" : "foreground"}
              href="/"
              aria-current="page"
              className="text-lg"
            >
              Home
            </Link>
          </NavbarItem>

          <NavbarItem isActive={activePage === "/encode"}>
            <Link
              color={activePage === "/encode" ? "secondary" : "foreground"}
              href="/encode"
              aria-current="page"
              className="text-lg"
            >
              Encode
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activePage === "/decode"}>
            <Link
              color={activePage === "/decode" ? "secondary" : "foreground"}
              href="/decode"
              aria-current="page"
              className="text-lg"
            >
              Decode
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activePage === "/learn"}>
            <Link
              color={activePage === "/learn" ? "secondary" : "foreground"}
              href="/learn"
              aria-current="page"
              className="text-lg"
            >
              Learn More
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <SignedOut>
            <NavbarItem>
              <SignInButton mode="modal">
                <Button color="primary" variant="flat">
                  Sign In
                </Button>
              </SignInButton>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/sign-up" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </SignedOut>
          <SignedIn>
            <NavbarItem>
              <UserButton />
            </NavbarItem>
          </SignedIn>
        </NavbarContent>
      </Navbar>
    </ClerkProvider>
  );
}
