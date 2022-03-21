import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'   

const Work = () => {
    return (
        <Layout title="Test">
            <Container>
                <Title>
                Title <Badge>20XX</Badge>
                </Title>
                <P>
                     Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Phasellus tempor, augue id lobortis luctus, 
                        tellus ante sollicitudin enim, sed iaculis enim lorem vel lectus. 
                        Sed ut urna volutpat, mattis leo ac, suscipit nisi. Donec sed mi malesuada lectus maximus sagittis nec quis metus.
                        Aenean euismod quam ac tellus sollicitudin, in finibus urna tincidunt.
                        Donec sit amet erat id enim placerat malesuada vel vel jus
                </P>
                 <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.inkdrop.app/">
            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Electron, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
            </Container>

        </Layout>
    )
}

export default Work