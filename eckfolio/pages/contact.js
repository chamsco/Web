import NextLink from 'next/link' 
import emailjs, { send } from "emailjs-com"
import React, { useRef } from 'react';

import {Text,
        Divider,
        Button,
        Container,
        Box, 
        Heading,
        FormControl,
        FormLabel,
        Input,
        Textarea } from '@chakra-ui/react'

const ContactMe = () => {
  const form = useRef();

  const sendEmail= (e) => {
      e.preventDefault();

    emailjs.sendForm('service_zqq5k8k', 'template_bfla2rg', form.current, 'user_yCy9lmKAk8rElskgWNHXj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
 form.current.reset();
  }

   return (
        <Container>
            <Heading as="h1"> Contact me </Heading>
                <Text> Fill out this form if you wish to contact me :)</Text>
            <Divider my={6}/>
              <Box my={8} textAlign="left">

      <form ref={form} onSubmit={sendEmail}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter your name" name="name"/>
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" name="email"/>
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea type="textarea" placeholder="Enter your message"name="message" />
        </FormControl>
        <input value="Submit" type="submit" />
        
      </form>
    </Box>
        </Container>
    )

}

export default ContactMe;