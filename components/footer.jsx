import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react"

const Footer = () => {
    return(
        <Box bgColor='#E5E5E5' px={{base:'20px',md:'40px',xl:'130px'}} pt='200px' pb='20px'>
            <Box mt='81px' textAlign={{base:'center'}}>
                <Flex direction={{base:'column',lg:'row'}} justifyContent='space-between'>
                    <Box>
                        <HStack justifyContent={{base:'center'}}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.2202 3.19355C15.7283 3.03737 16.2717 3.03737 16.7798 3.19355L20.7608 4.41711C22.8377 5.05544 24.8101 5.99392 26.6154 7.20279C28.0196 8.14305 27.3541 10.3334 25.6641 10.3334H6.33587C4.64594 10.3334 3.98034 8.14305 5.38455 7.2028C7.18992 5.99392 9.16232 5.05544 11.2392 4.41711L15.2202 3.19355ZM16.1923 5.1053C16.067 5.06679 15.933 5.06679 15.8077 5.1053L11.8267 6.32886C10.2523 6.81275 8.74388 7.48614 7.33426 8.33337H24.6657C23.2561 7.48614 21.7476 6.81275 20.1732 6.32885L16.1923 5.1053Z" fill="#14213D"/>
                                <path d="M5.66667 28C5.66667 27.4478 6.11438 27 6.66667 27H25.3333C25.8856 27 26.3333 27.4478 26.3333 28C26.3333 28.5523 25.8856 29 25.3333 29H6.66667C6.11438 29 5.66667 28.5523 5.66667 28Z" fill="#14213D"/>
                                <path d="M10.7071 23.5711C10.3166 23.9616 10.3166 24.5948 10.7071 24.9853C11.0976 25.3758 11.7308 25.3758 12.1213 24.9853L21.9853 15.1213C22.3758 14.7308 22.3758 14.0976 21.9853 13.7071C21.5948 13.3166 20.9616 13.3166 20.5711 13.7071L10.7071 23.5711Z" fill="#14213D"/>
                                <path d="M20.5711 24.9853C20.9616 25.3758 21.5948 25.3758 21.9853 24.9853C22.3758 24.5947 22.3758 23.9616 21.9853 23.571L12.1213 13.7071C11.7308 13.3166 11.0976 13.3166 10.7071 13.7071C10.3166 14.0976 10.3166 14.7308 10.7071 15.1213L20.5711 24.9853Z" fill="#14213D"/>
                            </svg>
                            <Text ml='16px' fontSize='18px' fontWeight='700' color='#14213D'>Arx</Text>
                        </HStack>
                        <Text mt='25px' fontSize='12px' color='#14213D'>
                            Reiciendis et at rerum alias qui. Dolores sit <br /> quisquam qui debitis eum sint sapiente corporis<br /> labore. Error itaque fugit laudantium molestias<br /> voluptas debitis consequatur ad.
                        </Text>
                    </Box>
                    <Box>
                        <Stack direction={['column', 'row']} spacing='82px'>
                            <VStack spacing='15px' alignItems='normal'>
                                <Text color='#14213D' fontSize='16px'><u>Support</u></Text>
                                <Text color='#14213D' fontSize='12px'>Help Center</Text>
                                <Text color='#14213D' fontSize='12px'>Account information</Text>
                                <Text color='#14213D' fontSize='12px'>About</Text>
                                <Text color='#14213D' fontSize='12px'>Contact us</Text>
                            </VStack>
                            <VStack spacing='15px' alignItems='normal'>
                                <Text color='#14213D' fontSize='16px'><u>Product</u></Text>
                                <Text color='#14213D' fontSize='12px'>Updates</Text>
                                <Text color='#14213D' fontSize='12px'>Design</Text>
                                <Text color='#14213D' fontSize='12px'>Location</Text>
                                <Text color='#14213D' fontSize='12px'>Pricing product</Text>
                            </VStack>
                            <VStack spacing='15px' alignItems='normal'>
                                <Text color='#14213D' fontSize='16px'><u>Help and Solutions</u></Text>
                                <Text color='#14213D' fontSize='12px'>Talk to support</Text>
                                <Text color='#14213D' fontSize='12px'>System status</Text>
                                <Text color='#14213D' fontSize='12px'>Support docs</Text>
                                <Text color='#14213D' fontSize='12px'>Consultation</Text>
                            </VStack>
                            <VStack spacing='15px' alignItems='normal'>
                                <Text color='#14213D' fontSize='16px'><u>Social Media</u></Text>
                                <Text color='#14213D' fontSize='12px'>Instagram</Text>
                                <Text color='#14213D' fontSize='12px'>Twitter</Text>
                                <Text color='#14213D' fontSize='12px'>Youtube</Text>
                                <Text color='#14213D' fontSize='12px'>Facebook</Text>
                            </VStack>
                        </Stack>
                    </Box>
                </Flex>
                <Flex mt='69px' justifyContent='space-between'>
                    <Text color='#14213D' fontSize='12px' letterSpacing='0.12em'>Copyright © 2022 Arx</Text>
                    <Text color='#14213D' fontSize='12px' letterSpacing='0.12em'>Terms and Conditions  -  Privacy Policy</Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default Footer