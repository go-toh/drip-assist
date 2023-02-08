import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Spacer,
  } from '@chakra-ui/react'

import * as React from 'react'
import { GoogleSignInButton } from './googleSignInButton'
import { Logo } from './Logo'
import { useSignInState } from '@/src/contexts/signInStateProvider'
import { firebaseAuthSignOut } from '@/src/lib/firebaseAuth'

export const HeaderBar = () => {
  const { user } = useSignInState()
  const avatarPhoto = user?.photoURL
  return (
      <Flex
        as="header"
        bg="white"
        position="fixed"
        top={0}
        width="full"
        height="18"
        shadow="base"
        zIndex={"sticky"}
        py={8}
        px={6}
      >
      {user?(
        <HStack justify="space-between" width="full">
        <Logo />
        <Spacer />
        <>
          <Popover>
            <PopoverTrigger>
              <Avatar size='sm' src= {avatarPhoto!} />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverHeader>
                <Box>{ user.displayName }</Box>
              </PopoverHeader>
              <PopoverBody>
                <Button variant="link" onClick={ firebaseAuthSignOut }>サインアウト</Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </>
        </HStack>
      ):(
        <HStack justify="space-between" width="full">
          <Logo />
          <ButtonGroup variant="link" spacing="4" px="4">
            {['概要', '始め方', '使用方法', 'サポート'].map((item) => (
              <Button key={item}>{item}</Button>
            ))}
          </ButtonGroup>
          <Spacer />
          <GoogleSignInButton />
        </HStack>
      )}
      </Flex>
  )
}