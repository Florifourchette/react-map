import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Maps from "./Maps";

export default () => (
  <Tabs>
    <TabList>
      <Tab>Hometown</Tab>
      <Tab>Current Town</Tab>
    </TabList>

    <TabPanel>
      <Maps lat="47.093542" long="5.486923" />
    </TabPanel>
    <TabPanel>
      <Maps lat="50.115404" long="8.646857" />
    </TabPanel>
  </Tabs>
);
