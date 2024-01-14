import React from 'react'
import CourseCard from '../CourseCard'

const Course = () => {
    const courseList = [
        {
            name: "Basic React Navtive",
            description: "5 Day",
            price: "7500 bath",
        },
        {
            name: "Power BI Dashboard",
            description: "4 Day",
            price: "5500 bath",
        },
        {
            name: "UI Diesing with Figam",
            description: "3 Day",
            price: "5000 bath",
        },
        {
            name: "Cross Platform with Flutter",
            description: "5 Day",
            price: "6500 bath",
        },
    ]
  return (
    <>
    <h1>หลักสูตรที่เปิดสอน</h1>
    <hr />
    {
        courseList.map((b)=>(
        <CourseCard key={b.name} {...b} />
        ))
    }
    </>
  )
};

export default Course;