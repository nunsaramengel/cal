import React, {useState} from 'react'
import {Input,IconButton,Select} from "@chakra-ui/react"
import {AddIcon} from "@chakra-ui/icons"
import {motion,AnimatePresence} from "framer-motion"

const AddAppointment = () => {

    const PROGRAMS = [
        {name: "살살"},
        {name: "열공"},
        {name: "스파르타"},
    ]

    const [isInputVisible, setIsInputVisible]=useState(false)
    const [studentSelectorValue, setStudentSelectorValue]=useState(null)
    const [isAddingNewStudent, setIsAddingNewStudent]=useState(false)
    const [isAddNewStudentButtonDisabled, setIsAddNewStudentButtonDisabled]=useState(true)

    const toggleInput = e => {
        e.preventDefault();
        setIsInputVisible(!isInputVisible)
    }
    const selectAddNewStudent = e => {
        e.preventDefault();
        alert("New student added!")
    }

    const handleStudentSelectorChange = e => {
        setStudentSelectorValue(e.target.value)
        if(e.target.value === "newStudent"){
            setIsAddingNewStudent(true)
        }
    }

    const handleAddNewStudent = e => {
        e.prevent.Default()
        console.log("NEW STUDENT BUTTON CLICKED!")
    }

    const STUDENTS = ["이세인",'이진희','최한지','홍순범','김요셉']

    return (
        <div style={{padding: "40px", display:"flex",flexDirection:"row"}}>
            <IconButton 
                aria-label="Add new Appointment" 
                icon={<AddIcon />} 
                onClick={toggleInput}
                colorScheme="cyan"
                style={{borderRadius:"50%",marginRight:"20px"}}
            />
            <AnimatePresence>
                {
                    isInputVisible&&
                        <motion.div
                            key="visibleInput"
                            initial={{opacity:0, scaleY: 0}}
                            animate={{opacity:1,scaleY:1}}
                            exit={{opacity:0,scaleY:0}}
                            style={{display:"flex",flexDirection:"column"}}
                        >
                            <Select placeholder='길이 선택'>
                                <option value={45}>45 Min</option>
                                <option value={90}>90 Min</option>
                            </Select>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <Select onChange={handleStudentSelectorChange} placeholder='학생 선택'>
                                {
                                    STUDENTS.map((student, index) => (
                                        <option value={student} key={index}>{student}</option>
                                    ))
                                }   
                                    <option onSelect={selectAddNewStudent} value="newStudent">새학생 추가
                                    </option>
                                </Select>
                                <AnimatePresence>
                                {
                                    isAddingNewStudent&&
                                    <motion.div
                                        key="isAddingStudent"
                                        initial={{opacity:0, scaleY: 0}}
                                        animate={{opacity:1,scaleY:1}}
                                        exit={{opacity:0,scaleY:0}}
                                    >
                                        <Input type="text" size="md" placeholder="새학생 이름" />
                                        <Select>
                                            {PROGRAMS.map((program, index) => (
                                                <option key={program.name} value={program.name}>{program.name}</option>
                                            ))}
                                        </Select>
                                        <IconButton 
                                            aria-label="Add new Student" 
                                            icon={<AddIcon />} 
                                            onClick={handleAddNewStudent}
                                            colorScheme="cyan"
                                            disabled={isAddNewStudentButtonDisabled}
                                            style={{borderRadius:"50%",marginRight:"20px"}}
                                        />
                                    </motion.div>
                                }
                                </AnimatePresence>
                            </div>

                            <Input type="text" size="md" placeholder="Neuer Termin" />
                        </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default AddAppointment

