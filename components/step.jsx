import { Box, Button, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react"

const Step = () => {
    return(
        <Box bgColor='#E5E5E5'  px={{base:'22px',md:'120px',lg:'40px',xl:'130px'}} pb='126px'>
            <HStack spacing={{md:'10px',xl:'30px'}}>
                <Box> 
                    <Image display={{base:'none',md:'inline',lg:'inline',xl:'inline'}} src='/a-step.png' width='577px' h={{md:'520px',xl:'709px'}} alt="a-step" />
                </Box>
                <Stack direction={{base:'column'}}>
                    <Text fontSize='48px' letterSpacing='0.12em'>
                        Simple <u>Step</u>, <br /> 
                        Big <u>Move</u>
                    </Text>
                    <Text my='30px' color='#14213D' fontSize='14px'>
                        Aut autem aut. Quis molestiae porro aut tempora similique deleniti <br /> sint laborumeius. Repudiandae qui sint nobis ipsum voluptas eius. Impedit <br />voluptas  animi numquam et  placeat. Neque aut alias architecto dolor natus<br /> corporis. Itaque in laborum blanditiis qui quo non numquam.
                    </Text>
                    <Stack direction={['column', 'row']} spacing='30px'>
                        <Box w={{md:'154px',xl:'172px'}} h='154px' bgColor='#14213D' py='42px' pl='15px'>
                            <Stack>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.4549 5.97337C21.6471 6.26448 21.615 6.66009 21.3588 6.91637L12.1664 16.1088C12.0721 16.203 11.9545 16.2704 11.8256 16.3041L7.99716 17.3041C7.87229 17.3367 7.74358 17.336 7.62265 17.3053C7.49408 17.2725 7.37431 17.2058 7.27729 17.1088C7.08902 16.9205 7.01468 16.6465 7.08197 16.3889L8.08197 12.5605C8.11144 12.4476 8.16673 12.3362 8.24322 12.2488L17.4697 3.02729C17.5504 2.94652 17.6477 2.88608 17.7536 2.84925C17.8321 2.82194 17.9153 2.80762 18 2.80762C18.1989 2.80762 18.3897 2.88663 18.5303 3.02729L21.3588 5.85571C21.3954 5.89233 21.4274 5.93178 21.4549 5.97337ZM19.7678 6.38604L18 4.61828L9.48184 13.1364L8.85685 15.5292L11.2496 14.9042L19.7678 6.38604Z" fill="#FCA311"/>
                                    <path d="M19.6414 17.7179C19.9148 15.3803 20.0018 13.0264 19.9023 10.6784C19.8976 10.566 19.9399 10.4566 20.0194 10.377L21.0027 9.3937C21.1236 9.27281 21.3302 9.34956 21.3415 9.52016C21.5265 12.3098 21.4564 15.1121 21.1312 17.8922C20.8946 19.9147 19.2703 21.4997 17.2583 21.7246C13.7917 22.112 10.2083 22.112 6.74177 21.7246C4.72971 21.4997 3.10538 19.9147 2.86883 17.8922C2.45429 14.3479 2.45429 10.7673 2.86883 7.22305C3.10538 5.20052 4.72971 3.61551 6.74177 3.39063C9.37152 3.09672 12.0685 3.02577 14.7306 3.17778C14.9022 3.18758 14.9804 3.39519 14.8589 3.51671L13.8664 4.50927C13.7877 4.58796 13.6798 4.63022 13.5685 4.62647C11.3421 4.55138 9.10055 4.63634 6.90838 4.88135C5.57827 5.03001 4.51278 6.07962 4.35867 7.3973C3.95767 10.8258 3.95767 14.2894 4.35867 17.7179C4.51278 19.0356 5.57827 20.0852 6.90838 20.2339C10.2642 20.6089 13.7358 20.6089 17.0916 20.2339C18.4218 20.0852 19.4872 19.0356 19.6414 17.7179Z" fill="#FCA311"/>
                                </svg>
                            </Stack>
                            <Text fontSize='14px' color='#E5E5E5' letterSpacing='0.12em' mt='10px'>Design your <br /> dream</Text>
                        </Box>
                        <Box w={{md:'154px',xl:'172px'}} h='154px' border='1px solid #14213D' py='42px' pl='15px'>
                            <Stack>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1546 3.91794C12.4835 3.56767 11.5741 3.56227 10.8977 3.91163C8.30469 5.25078 5.95282 6.78621 3.89185 8.48922C3.57314 8.75257 3.34696 9.13525 3.35082 9.5857C3.35466 10.0343 3.58544 10.4119 3.90222 10.6709C5.94607 12.3421 8.29988 13.8789 10.8454 15.2074C11.5165 15.5577 12.4259 15.5631 13.1024 15.2137C15.6953 13.8746 18.0472 12.3391 20.1082 10.6361C20.4269 10.3728 20.6531 9.9901 20.6492 9.53965C20.6453 9.09105 20.4146 8.71348 20.0978 8.45447C18.0539 6.7833 15.7001 5.24648 13.1546 3.91794ZM11.586 5.24439C11.8256 5.12061 12.2193 5.12179 12.4606 5.24772C14.8899 6.51564 17.1283 7.97434 19.0676 9.54991C17.1168 11.1508 14.885 12.6048 12.4141 13.881C12.1744 14.0047 11.7807 14.0036 11.5394 13.8776C9.11007 12.6097 6.87166 11.151 4.93243 9.57544C6.88324 7.97452 9.11499 6.52053 11.586 5.24439Z" fill="#14213D"/>
                                    <path d="M21.197 13.2557C21.4164 13.6071 21.3094 14.0697 20.958 14.2891L14.8508 18.102C14.0221 18.6194 12.9939 18.8586 11.9999 18.8587C11.006 18.8587 9.97773 18.6196 9.14887 18.1023L3.10854 14.3326C2.75714 14.1133 2.65006 13.6506 2.86937 13.2992C3.08867 12.9478 3.55132 12.8408 3.90271 13.0601L9.94304 16.8298C10.4872 17.1694 11.2264 17.3587 11.9998 17.3587C12.7733 17.3586 13.5124 17.1692 14.0564 16.8296L20.1637 13.0167C20.515 12.7973 20.9777 12.9043 21.197 13.2557Z" fill="#14213D"/>
                                    <path d="M21.197 17.0104C21.4164 17.3617 21.3094 17.8244 20.9581 18.0438L15.6692 21.3466C14.6116 22.0071 13.2886 22.3179 11.9999 22.3179C10.7112 22.318 9.38811 22.0074 8.33033 21.3471L3.10846 18.0873C2.75709 17.8679 2.65007 17.4053 2.86942 17.0539C3.08876 16.7025 3.55142 16.5955 3.90279 16.8148L9.12465 20.0747C9.89767 20.5572 10.9316 20.818 11.9998 20.8179C13.068 20.8179 14.1018 20.557 14.8747 20.0743L20.1636 16.7715C20.5149 16.5521 20.9776 16.659 21.197 17.0104Z" fill="#14213D"/>
                                </svg>
                            </Stack>
                            <Text fontSize='14px' color='#14213D' letterSpacing='0.12em' mt='10px'>Build and <br /> release</Text>
                        </Box>
                        <Box w={{md:'154px',xl:'172px'}} h='154px' border='1px solid #14213D' py='42px' pl='15px'>
                            <Stack>
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5578 3.09187C9.68726 2.25651 8.31275 2.25651 7.44218 3.09187L2.81574 7.5312C2.70239 7.63997 2.62614 7.78165 2.5978 7.93617C2.04367 10.958 2.00277 14.0517 2.47681 17.0871L2.58933 17.8076H5.56579V11.5963C5.56579 11.1821 5.90158 10.8463 6.31579 10.8463H11.6842C12.0984 10.8463 12.4342 11.1821 12.4342 11.5963V17.8076H15.4107L15.5232 17.0871C15.9972 14.0517 15.9563 10.958 15.4022 7.93617C15.3739 7.78165 15.2976 7.63997 15.1843 7.5312L10.5578 3.09187ZM6.40363 2.00955C7.85458 0.617281 10.1454 0.617281 11.5964 2.00955L16.2228 6.44888C16.5634 6.77568 16.7925 7.20137 16.8776 7.66562C17.4621 10.8532 17.5053 14.1166 17.0052 17.3186L16.8245 18.476C16.7497 18.9547 16.3374 19.3076 15.8529 19.3076H11.6842C11.27 19.3076 10.9342 18.9718 10.9342 18.5576V12.3463H7.06579V18.5576C7.06579 18.9718 6.73 19.3076 6.31579 19.3076H2.14706C1.66258 19.3076 1.25029 18.9547 1.17554 18.476L0.994776 17.3186C0.494728 14.1166 0.537875 10.8532 1.12241 7.66562C1.20754 7.20137 1.43662 6.77567 1.77719 6.44888L6.40363 2.00955Z" fill="#14213D"/>
                                </svg>
                            </Stack>
                            <Text fontSize='14px' color='#14213D' letterSpacing='0.12em' mt='10px'>Ready to be<br /> occupied</Text>
                        </Box>
                    </Stack>
                    <Button 
                            rightIcon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.84027 10.414C7.62759 14.3059 10.8081 17.4001 14.7618 19.0766L14.7743 19.0819L15.5381 19.4224C16.5108 19.8557 17.654 19.548 18.2776 18.6849L19.552 16.9211C19.6298 16.8134 19.6097 16.6636 19.5063 16.5801L17.2816 14.7853C17.171 14.6961 17.0083 14.7169 16.9237 14.8311L16.0579 15.9995C15.8476 16.2832 15.4678 16.3818 15.1461 16.2362C12.1897 14.8983 9.81396 12.5225 8.47603 9.56614C8.33041 9.24438 8.42901 8.86463 8.71276 8.65435L9.88114 7.78849C9.99531 7.70388 10.0161 7.54125 9.92686 7.43066L8.13182 5.20561C8.04839 5.1022 7.89865 5.08211 7.79092 5.15989L6.01762 6.44004C5.14883 7.06723 4.84288 8.22008 5.28634 9.19553L5.83968 10.4127C5.83988 10.4131 5.84008 10.4136 5.84027 10.414ZM14.1699 20.4549C9.87391 18.6313 6.41854 15.2683 4.4765 11.0386L4.47533 11.036L3.92083 9.81632C3.18173 8.19057 3.69165 6.26916 5.13964 5.22385L6.91293 3.94369C7.66705 3.39928 8.71528 3.53988 9.29927 4.26378L11.0943 6.48882C11.7189 7.26299 11.5734 8.40139 10.7742 8.99363L10.1047 9.48978C11.2357 11.6842 13.028 13.4766 15.2224 14.6075L15.7186 13.938C16.3108 13.1388 17.4492 12.9933 18.2234 13.6179L20.4481 15.4127C21.1722 15.9969 21.3127 17.0455 20.7678 17.7996L19.4934 19.5634C18.4541 21.0018 16.5487 21.5148 14.9277 20.7925L14.1699 20.4549Z" fill="#14213D"/>
                            </svg>                            
                            }
                            mt='30px'
                            size='md'
                            height='44px'
                            width='143px'
                            border='1px'
                            borderColor='#14213D'
                            backgroundColor='#FCA311'
                            color='#14213D'
                            fontSize='14px'
                            fontWeight='500'
                            borderRadius='0px'
                            >
                            Contact us
                        </Button>
                </Stack>
            </HStack>
        </Box>
    )
}

export default Step