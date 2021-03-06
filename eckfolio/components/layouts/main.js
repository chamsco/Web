import Head from 'next/head'
import Navbar from '../navbar'
import dynamic from 'next/dynamic'
import NoSsr from "../no-ssr";
import { Box,Container } from "@chakra-ui/react";
import Footer from '../footer';
import VoxelWaifu  from '../voxel-waifu';

const Main = ({children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="Eceka's homepage" />
            <meta name="author" content="Ebagnitchie Charles" />
            <meta name="author" content="eceka" />
            <link rel="apple-touch-icon" href="apple-touch-icon.png" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@eceka_dev" />
            <meta name="twitter:creator" content="@eceka_dev" />
            <meta name="twitter:image" content="/card.png" />
            <meta property="og:site_name" content="Ebagnitchie Charles's Homepage" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/card.png" />
            <title>Eceka.</title>

      </Head>

            <Navbar path={router.asPath}/>
            
            <Container maxW="container.md" pt={14}>
                <VoxelWaifu/>
                <NoSsr/>
                {children}
            </Container>
            <Footer/>
        </Box>
    )
}
export default Main