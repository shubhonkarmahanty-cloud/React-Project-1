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
        "new task": true,
        "complitedtask": false,
        "failed": false,
        "task title": "Complete Sales Report",
        "task description": "Prepare and submit the weekly sales performance report.",
        "task date": "2026-08-16",
        "categories": "Reporting"
      },
      {
        "active": true,
        "new task": false,
        "complitedtask": false,
        "failed": false,
        "task title": "Client Follow-up",
        "task description": "Follow up with the client regarding the pending project requirements.",
        "task date": "2026-08-17",
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
        "active": true,
        "new task": true,
        "complitedtask": false,
        "failed": false,
        "task title": "Design Homepage",
        "task description": "Create the initial design for the company homepage.",
        "task date": "2026-08-16",
        "categories": "Design"
      },
      {
        "active": true,
        "new task": false,
        "complitedtask": false,
        "failed": false,
        "task title": "Prepare UI Components",
        "task description": "Create reusable buttons, cards and input components.",
        "task date": "2026-08-17",
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
      "completedTask": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new task": true,
        "complitedtask": false,
        "failed": false,
        "task title": "Fix Login Bug",
        "task description": "Investigate and fix the authentication issue reported by users.",
        "task date": "2026-08-16",
        "categories": "Bug Fix"
      },
      {
        "active": true,
        "new task": false,
        "complitedtask": false,
        "failed": false,
        "task title": "Build Dashboard API",
        "task description": "Develop API endpoints required for the employee dashboard.",
        "task date": "2026-08-18",
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
      "completedTask": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new task": true,
        "complitedtask": false,
        "failed": false,
        "task title": "Prepare Marketing Plan",
        "task description": "Create a marketing plan for the upcoming product launch.",
        "task date": "2026-08-16",
        "categories": "Marketing"
      },
      {
        "active": true,
        "new task": false,
        "complitedtask": false,
        "failed": false,
        "task title": "Social Media Content",
        "task description": "Prepare social media posts for the next seven days.",
        "task date": "2026-08-17",
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
      "completedTask": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new task": true,
        "complitedtask": false,
        "failed": false,
        "task title": "Customer Support Review",
        "task description": "Review open customer support tickets and prioritize urgent issues.",
        "task date": "2026-08-16",
        "categories": "Customer Support"
      },
      {
        "active": true,
        "new task": false,
        "complitedtask": false,
        "failed": false,
        "task title": "Resolve Support Tickets",
        "task description": "Resolve pending customer support tickets assigned to the team.",
        "task date": "2026-08-17",
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