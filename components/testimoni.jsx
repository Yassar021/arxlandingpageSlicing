import { Box, Button, Center, Divider, Flex, FormControl, FormLabel, Image, Input, Spacer, Stack, Text } from "@chakra-ui/react"

const Testimoni = () => {
    return(
        <Box bgColor='#14213D' pb='250px'>
            <Flex direction='column'  px={{base:'0px',md:'34px',xl:'203px'}} pt='93px'>
                <Flex direction='row' justifyContent='space-between'>
                    <Box>
                        <Text mb='30px' fontSize={{md:'32px',lg:'48px'}} color='#E5E5E5' letterSpacing='0.12em'>
                            Customer Say’s <br/> 
                            About <u> Arx</u>
                        </Text>
                        <Text fontSize='14px' color='#E5E5E5'>
                            Aut et repellat ex qui alias asperiores eum totam. Quia <br /> maxime sunt cumque laudantium. Accusantium quo<br /> beatae at modi et quidem quibusdam dolorem saepe. 
                        </Text>
                    </Box>
                    <Box bgColor='#E5E5E5' pt={{md:'0px',lg:'10px'}} px='22px'w='400px' h={{base:'370px',md:'244px',lg:'241px',xl:'241px'}}>
                        <Text fontSize='36px' fontWeight='700' color='#14213D'>
                            ‘’
                        </Text>
                        <Text fontSize='14px' color='#14213D'>
                            Aut et repellat ex qui alias asperiores eum totam. Quia maxime sunt cumque laudantium. Accusantium quo beatae at modi et quidem quibusdam dolorem saepe. 
                        </Text>
                        <Flex mt='38px' borderTop='1px solid #14213D' direction='row' alignItems='center'>
                            <Image mt='12px' src="/a-testi.png" w='44px' h='44px' alt="testimonial" />
                            <Text ml='12px' fontSize='12px' color='#14213D'>Alex - Founder</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Box px={{md:'96px',xl:'160px'}} w={{lg:'942px',xl:'1106px'}} h={{base:'382px',md:'265px',lg:'265px'}} mt={{base:'420px',lg:'328px'}} bgColor='#FCA311' position='absolute'>
                    <Box px={{md:'0px',lg:'127px',xl:'127px'}} py='32px' textAlign='center' alignItems='center'>
                        <Text fontSize='40px' color='#14213D'>
                            Have an amazing concept, <br /> Let’s talk
                        </Text>
                        <Flex mt='30px' direction='row'>
                            <FormControl isRequired>
                                <Input id='first-name' fontFamily='DM Sans' color='#14213D' placeholder='name@mail.com' borderColor='1px solid #14213D' height='34px' borderRadius='0px' w='168px' bgColor='#FCA311' />
                                <Button
                                    size='md'
                                    height='38px'
                                    width='94px'
                                    border='1px'
                                    borderColor='#14213D'
                                    backgroundColor='#14213D'
                                    color='#fff'
                                    fontSize='14px'
                                    fontWeight='500'
                                    borderRadius='0px'
                                    >
                                    Get Started
                                </Button>
                            </FormControl>
                            
                        </Flex>
                    </Box>
                </Box>
                <Box></Box>
            </Flex>
        </Box>
    )
}

export default Testimoni