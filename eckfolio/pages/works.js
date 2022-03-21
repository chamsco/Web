import {Container, Heading,SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section' 
import {WorkGridItem} from '../components/grid-items'

import thumbtest from '../public/images/works/test.png'


const Works = ( ) => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mt={4} mb={4}>
                Works
            </Heading>

        <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="test" title="Test1" thumbnail={thumbtest}>
                    A test placeholder
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id="test" title="Test2" thumbnail={thumbtest}>
                    Another test placeholder
                </WorkGridItem>
            </Section>

        </SimpleGrid>

        </Container>
    )
}

export default Works