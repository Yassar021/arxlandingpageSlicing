import { Box, Button, Flex, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react"

const Projects = () => {
    return(
        <Box bgColor='#E5E5E5'  px={{base:'8px',md:'120px',lg:'40px',xl:'130px'}} pb='200px'>
            <Text mb='12px' fontSize='48px' color='#14213D'>
                <u>Projects</u>
            </Text>
            <Stack direction={{base:'column',md:'column',lg:'row',xl:'row'}} spacing={{lg:'18px',xl:'57px'}}>
                <Box w={{md:'536px',xl:'548px'}} h='522px'  py='26px' pl='26px' backgroundImage='/a-proj.png' backgroundSize='cover' backgroundRepeat='no-repeat'>
                    <Text fontSize={{md:'16px',lg:'24px'}}color='#E5E5E5'>Minimalism & Modern</Text>  
                    <Link>
                        <Box  mt='395px' ml={{base:'210px',md:'418px',lg:'320px',xl:'400px'}} w='68px'h='44px'px='22px' py='10px' bgColor='#FCA311' border='1px solid #14213D'>
                            <Stack>
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.75 9C18.75 9.27238 18.6023 9.52334 18.3642 9.65562L16.0819 10.9236C11.5705 13.4299 6.81474 15.4687 1.88879 17.008L1.22371 17.2159C0.995977 17.287 0.747976 17.2456 0.555747 17.1043C0.363519 16.9629 0.249999 16.7386 0.249999 16.5L0.25 10.75C0.25 10.359 0.550415 10.0336 0.940191 10.0024L1.16752 9.98421C3.31898 9.81209 5.45387 9.48288 7.5552 8.99969C5.42436 8.50979 3.25902 8.17824 1.0769 8.00827L0.941755 7.99774C0.551315 7.96732 0.25 7.64163 0.25 7.25L0.25 1.50001C0.25 1.26142 0.36352 1.03706 0.555748 0.895737C0.747976 0.754412 0.995977 0.71298 1.22371 0.784145L1.88878 0.991981C6.81474 2.53134 11.5705 4.57008 16.0819 7.07643L18.3642 8.34439C18.6023 8.47666 18.75 8.72763 18.75 9ZM16.4557 9L15.3534 8.38766C11.0256 5.98333 6.46847 4.01801 1.75 2.52089L1.75 6.55957C4.68008 6.82384 7.57829 7.37016 10.4043 8.19119L10.7092 8.27978C11.0299 8.37294 11.2503 8.66684 11.25 9.00073C11.2497 9.33463 11.0287 9.6281 10.7078 9.72063L10.3173 9.83328C7.51882 10.6404 4.65003 11.1784 1.75 11.44L1.75 15.4791C6.46846 13.982 11.0256 12.0167 15.3534 9.61235L16.4557 9Z" fill="#14213D"/>
                                </svg>
                            </Stack>
                        </Box>
                    </Link>           
                </Box>
                <Stack mt={{base:'24px',md:'20px'}}>
                    <SimpleGrid direction={{base:'column'}} columns={3} spacing={'30px'}>
                        <Box w={{base:'146px',md:'172px',lg:'172px',xl:'172px'}} h='522px' backgroundImage='/b-proj.png' backgroundRepeat='no-repeat' backgroundSize='cover' />
                        <Box ml={{base:'42px',md:'0px',lg:'0px',xl:'0px'}} w={{base:'146px',md:'172px',lg:'172px',xl:'172px'}} h='522px' backgroundImage='/c-proj.png' backgroundRepeat='no-repeat' backgroundSize='cover' />
                        <Box display={{base:'none',md:'inline'}} w={{base:'172px',md:'172px',lg:'172px',xl:'172px'}} h='522px' backgroundImage='/d-proj.png' backgroundRepeat='no-repeat' backgroundSize='cover' />
                    </SimpleGrid>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Projects