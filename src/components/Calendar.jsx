import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading
} from '@chakra-ui/react'

const Calendar = () => {

    const WEEKDAYS = {
        de: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
    }

  return (
    <TableContainer>
        <Heading>JANUAR</Heading>
        <Table variant='simple' colorScheme="orange">
            <Thead>
            <Tr>
                {WEEKDAYS.de.map((day, index )=> <Th key={index}>{day}</Th>)}
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Td>1</Td>
                <Td>2</Td>
                <Td>3</Td>
                <Td>4</Td>
                <Td>5</Td>
                <Td>6</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <Td>8</Td>
                <Td>9</Td>
                <Td>10</Td>
                <Td>11</Td>
                <Td>12</Td>
                <Td>13</Td>
                <Td>14</Td>
            </Tr>
            <Tr>
                <Td>15</Td>
                <Td>16</Td>
                <Td>17</Td>
                <Td>18</Td>
                <Td>19</Td>
                <Td>20</Td>
                <Td>21</Td>
            </Tr>
            <Tr>
                <Td>22</Td>
                <Td>23</Td>
                <Td>24</Td>
                <Td>25</Td>
                <Td>26</Td>
                <Td>27</Td>
                <Td>38</Td>
            </Tr>
            <Tr>
                <Td>29</Td>
                <Td>30</Td>
                <Td>31</Td>
            </Tr>
            </Tbody>
            <Tfoot>
                <Tr>
                    <Th color="blue">140 Termine</Th>
                    <Th color="red">33 Absagen</Th>
                    <Th isNumeric color="lightgreengit ">107 Stunden abgeschlossen</Th>
                </Tr>
            </Tfoot>
        </Table>
    </TableContainer>
  )
}

export default Calendar