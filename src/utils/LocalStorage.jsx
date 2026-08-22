const employees = [
  {
    "id": 1,
    "firstname": "Rahul",
    "email": "e@e.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completedTask": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newtask": true,
        "complitedtask": false,
        "failed": false,
        "tasktitle": "Complete Sales Report",
        "taskdescription": "Prepare and submit the weekly sales performance report.",
        "taskdate": "2026-08-16",
        "categories": "Reporting"
      },
      {
        "active": true,
        "newtask": false,
        "complitedtask": false,
        "failed": false,
        "tasktitle": "Client Follow-up",
        "taskdescription": "Follow up with the client regarding the pending project requirements.",
        "taskdate": "2026-08-17",
        "categories": "Communication"
      }
    ]
  },

  {
    "id": 2,
    "firstname": "Aman",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completedTask": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newtask": true,
        "complitedtask": false,
        "failed": false,
        "tasktitle": "Design Homepage",
        "taskdescription": "Create the initial design for the company homepage.",
        "taskdate": "2026-08-16",
        "categories": "Design"
      },
      {
        "active": true,
        "newtask": false,
        "complitedtask": false,
        "failed": false,
        "tasktitle": "Prepare UI Components",
        "taskdescription": "Create reusable buttons, cards and input components.",
        "taskdate": "2026-08-17",
        "categories": "UI/UX"
      }
    ]
  },

  {
    "id": 3,
    "firstname": "Arjun",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completedTask": 3,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newtask": true,
        "complitedtask": false,
        "failed": false,
        "tasktitle": "Fix Login Bug",
        "taskdescription": "Investigate and fix the authentication issue reported by users.",
        "taskdate": "2026-08-16",
        "categories": "Bug Fix"
      },
      {
        "active": false,
        "newtask": true,
        "complitedtask": false,
        "failed": false,
        "tasktitle": "Build Dashboard API",
        "taskdescription": "Develop API endpoints required for the employee dashboard.",
        "taskdate": "2026-08-18",
        "categories": "Backend"
      }
    ]
  },

  {
    "id": 4,
    "firstname": "Vikram",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completedTask": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newtask": true,
        "complitedtask": false,
        "failed": false,
        "tasktitle": "Prepare Marketing Plan",
        "taskdescription": "Create a marketing plan for the upcoming product launch.",
        "taskdate": "2026-08-16",
        "categories": "Marketing"
      },
      {
        "active": false,
        "newtask": false,
        "complitedtask": true,
        "failed": false,
        "tasktitle": "Social Media Content",
        "taskdescription": "Prepare social media posts for the next seven days.",
        "taskdate": "2026-08-17",
        "categories": "Social Media"
      }
    ]
  },

  {
    "id": 5,
    "firstname": "Rohan",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completedTask": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newtask": true,
        "complitedtask": false,
        "failed": false,
        "tasktitle": "Customer Support Review",
        "taskdescription": "Review open customer support tickets and prioritize urgent issues.",
        "taskdate": "2026-08-16",
        "categories": "Customer Support"
      },
      {
        "active": true,
        "newtask": false,
        "complitedtask": false,
        "failed": false,
        "tasktitle": "Resolve Support Tickets",
        "taskdescription": "Resolve pending customer support tickets assigned to the team.",
        "taskdate": "2026-08-17",
        "categories": "Support"
      }
    ]
  }
];


const admins = [ 
  { 
    "id": 1, 
    "email": "admin@example.com", 
    "password": "123" 
  } 
];

export const  setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees) )
    localStorage.setItem('admins',JSON.stringify(admins) )
}
export const  getLocalStorage = ()=>{
   const employees =  JSON.parse(localStorage.getItem('employees'))
   const admin =  JSON.parse(localStorage.getItem('admins'))
  //  console.log(employees,admin)
  return {employees,admin}
}
// localStorage.clear()

