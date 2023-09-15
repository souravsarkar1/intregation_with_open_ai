import React, { useState } from 'react';
import {
  Textarea,
  Button,
  Box,
  Heading,
  Flex,
  VStack,
  IconButton,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoMdCopy } from 'react-icons/io';
import axios from 'axios';

function CodeConversionApp() {
  const [inputCode, setInputCode] = useState('');
  const [convertedCode, setConvertedCode] = useState('');
  const [loader, setLoader] = useState(false);
  const toast = useToast();

  const handleCodeInputChange = (event) => {
    setInputCode(event.target.value);
  };

 

  const handleConvertClick = () => {
    if (!inputCode) {
      toast({
        title: 'No Input',
        description: 'Enter A Valid Input',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: 'Generating',
      description: 'Just Wait a Little Bit',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
    setLoader(true);

    const payload = { keyword: inputCode }; // Include the conversionType
   // console.log(payload);

    axios
      .post(`https://myai-t3nw.onrender.com/convert`, payload)
      .then((res) => {
      //  console.log(res.data);
        setConvertedCode(res.data.convertedCode);
      })
      .catch((err) => {
        //console.log(err.message);
        toast({
          title: 'Error',
          description: 'Something Went to Wrong',
          status: 'info',
          duration: 3000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handleDebugClick = () => {
    if (!inputCode) {
      toast({
        title: 'No Input',
        description: 'Enter A Valid Input',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setLoader(true);

    // Simulate debugging logic
    toast({
      title: 'Debugging',
      description: 'Debugging your code...',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });

    const payload = { keyword: inputCode + `Debug my code` }; // Include the conversionType
   // console.log(payload);

    axios
      .post(`https://myai-t3nw.onrender.com/convert`, payload)
      .then((res) => {
       // console.log(res.data);
        setConvertedCode(res.data.convertedCode);
      })
      .catch((err) => {
        //console.log(err.message);
        toast({
          title: 'Error',
          description: 'Something Went to Wrong',
          status: 'info',
          duration: 3000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoader(false);
      });

  };

  const handleQualityCheckClick = () => {

    if (!inputCode) {
      toast({
        title: 'No Input',
        description: 'Enter A Valid Input',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoader(true);

    // Simulate quality checking logic
    toast({
      title: 'Quality Check',
      description: 'Performing quality check...',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });

    const payload = { keyword: inputCode + `Check the quality my code and give me the batter code for it` }; // Include the conversionType
    //console.log(payload);

    axios
      .post(`https://myai-t3nw.onrender.com/convert`, payload)
      .then((res) => {
       // console.log(res.data);
        setConvertedCode(res.data.convertedCode);
      })
      .catch((err) => {
        //console.log(err.message);
        toast({
          title: 'Error',
          description: 'Something Went to Wrong',
          status: 'info',
          duration: 3000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoader(false);
      });

  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(convertedCode);
    toast({
      title: 'Code Copied',
      description: 'The converted code has been copied to your clipboard.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
    <Box textAlign="center" py={8}>
    <Heading
      fontSize={['xl', '2xl', '3xl']}
      fontWeight="semibold"
      color={useColorModeValue('gray.800', 'gray.200')}
      mb={4}
    >
      Engage in Conversations with AI to Simplify Your Life{' '}
      <span role="img" aria-label="Smiley Face">
        🙂
      </span>
    </Heading>
  </Box>
     

      <Flex direction={['column', 'row']} width={['100%']} justifyContent={'space-around'}>
        <Button
          colorScheme="blue"
          color="white"
          onClick={handleConvertClick}
          mb={[4, 0]}
          mr={[0, 4]}
        >
         Generate
        </Button>
        <Button
          colorScheme="blue"
          color="white"
          onClick={handleDebugClick}
          mb={[4, 0]}
          mr={[0, 4]}
        >
          Debug
        </Button>
        <Button
          colorScheme="blue"
          color="white"
          onClick={handleQualityCheckClick}
          mb={[4, 0]}
        >
          Quality Check
        </Button>
      </Flex>
    <br />
      <Flex justifyContent={'space-around'} direction={['column', 'row']}>
        <VStack w={['100%', '45%']} mb={[4, 0]}>
          <Heading as="h4" size="md" mb={2}>
            Enter Your Text/Code Here :
          </Heading>
          <Textarea
            placeholder="Enter your code here"
            rows={10}
            value={inputCode}
            onChange={handleCodeInputChange}
          />
        </VStack>
        <VStack w={['100%', '45%']}>
          <Heading as="h4" size="md" mb={2}>
            OutPut :
          </Heading>
          <Textarea
            rows={10}
            mb={4}
            placeholder="Your converted code here"
            value={loader ? 'Loading...' : convertedCode}
          />
          {!loader && convertedCode && (
            <Flex align="center" justify={['center', 'flex-start']}>
              <IconButton
                aria-label="Copy to clipboard"
                icon={<IoMdCopy />}
                colorScheme="blue"
                onClick={handleCopyToClipboard}
                mr={[0, 2]}
                mb={[2, 0]}
              />
              <Button colorScheme="blue" onClick={handleCopyToClipboard}>
                Copy to Clipboard
              </Button>
            </Flex>
          )}
        </VStack>
      </Flex>
    </Box>
  );
}

export default CodeConversionApp;
