import { Link } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
export function Menu (){
    return(
    <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList>
    <Tab><Link to="/">Home</Link></Tab>
    <Tab><Link to="/sobrenosotros">Sobre nosotros</Link></Tab>
  </TabList>
</Tabs>
    );
}
