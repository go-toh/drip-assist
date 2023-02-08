import { firebaseAuthSignInPopup } from '@/src/lib/firebaseAuth'
import { FcGoogle } from 'react-icons/fc'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    VStack,
  } from '@chakra-ui/react'
import { Logo } from './Logo'


export const GoogleSignInButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} colorScheme='teal'>Sign in</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
              <VStack p={10}>
                  <Logo />
                  <Box py={8}>
                      Drip Assistにサインインして、美味しいコーヒーを淹れよう。
                  </Box>
                  <Button onClick = {firebaseAuthSignInPopup} 
                          colorScheme="gray" 
                          leftIcon={<FcGoogle size={20} />} 
                          variant='outline' 
                          boxShadow='base' >
                  Sign in with Google
                  </Button>
              </VStack>
        </ModalContent>
      </Modal>
    </>
  )
}