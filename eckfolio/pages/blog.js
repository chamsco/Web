import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {BlogGridItem } from '../components/grid-items'

import thumbtest from '../public/images/works/test.png'



const Blog = () => (
  <Layout title="Blog">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blog
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
         <Section>
                <BlogGridItem id="test" title="Test1" thumbnail={thumbtest}>
                    A test placeholder
                </BlogGridItem>
            </Section>
          <Section>
                <BlogGridItem id="test" title="Test1" thumbnail={thumbtest}>
                    A test placeholder
                </BlogGridItem>
            </Section>
         <Section delay={0.1}>
                <BlogGridItem id="test" title="Test1" thumbnail={thumbtest}>
                    A test placeholder
                </BlogGridItem>
            </Section>
        <Section delay={0.1}>
                <BlogGridItem id="test" title="Test1" thumbnail={thumbtest}>
                    A test placeholder
                </BlogGridItem>
            </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
                <BlogGridItem id="test" title="Test1" thumbnail={thumbtest}>
                    A test placeholder
                </BlogGridItem>
            </Section>
        <Section delay={0.3}>
                <BlogGridItem id="test" title="Test1" thumbnail={thumbtest}>
                    A test placeholder
                </BlogGridItem>
            </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old blog
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
                <BlogGridItem id="test" title="Test1" thumbnail={thumbtest}>
                    A test placeholder
                </BlogGridItem>
            </Section>
        <Section delay={0.5}>
                <BlogGridItem id="test" title="Test1" thumbnail={thumbtest}>
                    A test placeholder
                </BlogGridItem>
            </Section>
        <Section delay={0.6}>
                <BlogGridItem id="test" title="Test1" thumbnail={thumbtest}>
                    A test placeholder
                </BlogGridItem>
            </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Blog