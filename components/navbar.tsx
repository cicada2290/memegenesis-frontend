import {
  Button,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/react'
import NextLink from 'next/link'

import { ThemeSwitch } from '@/components/theme-switch'
import { WalletOutlineIcon } from '@/components/icons'

export const Navbar = () => {
  const handleConnect = () => {
    console.log('connect')
  }

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">MemeGenesis</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 basis-full" justify="end">
        <NavbarItem className="flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="flex">
          <Button
            className="text-sm font-normal text-default-600 bg-default-100"
            startContent={<WalletOutlineIcon />}
            variant="flat"
            onClick={handleConnect}
          >
            Connect
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  )
}
