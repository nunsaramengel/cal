import React, {useState} from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Calendar from './Calendar';

const Tabby = ({
    colorScheme
}) => {

    const DEFAULT = {
        colorScheme: colorScheme || "orange"
    }

    const [language, setLanguage]=useState("de")

    const TAB_TITLES = {
        de: [
            "Kalender",
            "Schüler",
            "Preise"
        ]
    }

  return (
    <motion.div>
        <motion.div className="red">

        </motion.div>
        <Tabs
            variant="soft-rounded"
            colorScheme={colorScheme}
        >
            <TabList>
                {TAB_TITLES.de.map(item => (
                    <Tab>{item}</Tab>
                ))}
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Calendar />
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
                <TabPanel>
                <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </motion.div>
  )
}

export default Tabby