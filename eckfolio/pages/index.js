import {Button,
        Container,
        Box, 
        Heading, 
        Image,
        Link, 
        List,
        ListItem,
        Icon,
        useColorModeValue} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {BioYear, BioSection} from '../components/bio'
import NextLink  from 'next/link'
import { ChevronRightIcon, PhoneIcon } from '@chakra-ui/icons'
import {IoLogoTwitter,IoLogoGithub} from 'react-icons/io5'
import Layout from '../components/layouts/article'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mt={6} mb={6} align="center">
                    Hello, I'm a full Stack developer and Data Scientist based in France =] !
                </Box>
                <Box display={{md:'flex'}}  borderRadius="20px" maxWidth="1000px" >
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title" >
                            Ebagnitchie Charles-Emmanuel
                        </Heading>
                        <p> Eceka (Artist/Developer/Designer)</p>
                    </Box>
                    <Box 
                    flexShrink={0}
                    mt={{base: 4,md:0}}
                    ml = {{md: 6}}
                    align="center">
                        <Image  maxWidth="100px" display="inline-block" borderRadius="full" src="/images/logo-dark.png" alt="profile image" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About Me !
                    </Heading>
                    <Paragraph>
                       Charles is a freelance, full-stack web developer and an aspiring data scientist/engineer based in Lyon with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is in search of an internship{' '}
                        {' '}
                        <NextLink href="#">
                            <Link>enim</Link>
                        </NextLink>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal" variant="ghost">
                            My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                     <Box align="center" my={4}>
                        <NextLink href="/contact">
                            <Button rightIcon={<PhoneIcon/>} colorScheme="pink" variant="ghost">
                            Contact Me
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioSection>
                                <BioYear>2000</BioYear>
                                Born in Abidjan, Côte d'Ivoire.
                        </BioSection>
                        <BioSection>
                            <BioYear>2021</BioYear>
                            Graduated the Bachelor's Program of computer science @  <NextLink href="https://www.univ-lyon1.fr/"><Link>Université Claude Bernard Lyon 1</Link></NextLink> .
                        </BioSection>
                         <BioSection>
                            <BioYear>2021 -</BioYear>
                            Enrolled in the Master's Program of AI & Management @  <NextLink href="https://www.intelligence-artificielle-school.com/"><Link>I.A School</Link></NextLink> .
                        </BioSection>
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ❤️
                    </Heading>
                    <Paragraph>
                        Art,Music,{' '}
                        <Link href="#"> Drawing</Link>, Playing Games. {' '}
                    </Paragraph>
                </Section>
                 <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On The Web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/chamsco" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @chamsco
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/eceka_dev" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                                    @eceka_dev
                                </Button>
                            </Link>                            
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page