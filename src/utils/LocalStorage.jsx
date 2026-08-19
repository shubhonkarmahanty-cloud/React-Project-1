const employees = [ 
  { 
    "id": 1, 
    "email": "employee1@example.com", 
    "password": "123",
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
      },
      {
        "active": false,
        "new task": false,
        "complitedtask": true,
        "failed": false,
        "task title": "Update Customer Records",
        "task description": "Review and update customer contact information in the system.",
        "task date": "2026-08-14",
        "categories": "Database"
      },
      {
        "active": false,
        "new task": false,
        "complitedtask": false,
        "failed": true,
        "task title": "Submit Monthly Expenses",
        "task description": "Submit all monthly business expenses with the required receipts.",
        "task date": "2026-08-12",
        "categories": "Finance"
      },
      {
        "active": true,
        "new task": false,
        "complitedtask": false,
        "failed": false,
        "task title": "Team Meeting Preparation",
        "task description": "Prepare the agenda for the upcoming team meeting.",
        "task date": "2026-08-18",
        "categories": "Meeting"
      }
    ]
  }, 

  { 
    "id": 2, 
    "email": "employee2@example.com", 
    "password": "123",
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
      },
      {
        "active": false,
        "new task": false,
        "complitedtask": true,
        "failed": false,
        "task title": "Create Login Screen",
        "task description": "Design and finalize the employee login screen.",
        "task date": "2026-08-13",
        "categories": "Design"
      },
      {
        "active": false,
        "new task": false,
        "complitedtask": true,
        "failed": false,
        "task title": "Review Brand Colors",
        "task description": "Review the existing brand colors and update the design guidelines.",
        "task date": "2026-08-11",
        "categories": "Branding"
      },
      {
        "active": true,
        "new task": false,
        "complitedtask": false,
        "failed": false,
        "task title": "Mobile Layout",
        "task description": "Create responsive layouts for mobile and tablet devices.",
        "task date": "2026-08-19",
        "categories": "Responsive Design"
      }
    ]
  }, 

  { 
    "id": 3, 
    "email": "employee3@example.com", 
    "password": "123",
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
      },
      {
        "active": false,
        "new task": false,
        "complitedtask": true,
        "failed": false,
        "task title": "Database Setup",
        "task description": "Configure the development database and required tables.",
        "task date": "2026-08-12",
        "categories": "Database"
      },
      {
        "active": false,
        "new task": false,
        "complitedtask": false,
        "failed": true,
        "task title": "Deploy Test Server",
        "task description": "Deploy the latest application build to the testing server.",
        "task date": "2026-08-10",
        "categories": "DevOps"
      },
      {
        "active": true,
        "new task": false,
        "complitedtask": false,
        "failed": false,
        "task title": "API Documentation",
        "task description": "Document all newly created API endpoints.",
        "task date": "2026-08-20",
        "categories": "Documentation"
      }
    ]
  }, 

  { 
    "id": 4, 
    "email": "employee4@example.com", 
    "password": "123",
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
      },
      {
        "active": false,
        "new task": false,
        "complitedtask": true,
        "failed": false,
        "task title": "Competitor Research",
        "task description": "Research competitors and summarize their marketing strategies.",
        "task date": "2026-08-13",
        "categories": "Research"
      },
      {
        "active": false,
        "new task": false,
        "complitedtask": true,
        "failed": false,
        "task title": "Email Campaign",
        "task description": "Create and schedule the monthly customer email campaign.",
        "task date": "2026-08-09",
        "categories": "Email Marketing"
      },
      {
        "active": true,
        "new task": false,
        "complitedtask": false,
        "failed": false,
        "task title": "Product Launch Meeting",
        "task description": "Prepare materials for the product launch meeting.",
        "task date": "2026-08-21",
        "categories": "Product Launch"
      }
    ]
  }, 

  { 
    "id": 5, 
    "email": "employee5@example.com", 
    "password": "123",
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
      },
      {
        "active": false,
        "new task": false,
        "complitedtask": true,
        "failed": false,
        "task title": "Customer Feedback",
        "task description": "Collect and organize feedback received from customers.",
        "task date": "2026-08-13",
        "categories": "Feedback"
      },
      {
        "active": false,
        "new task": false,
        "complitedtask": false,
        "failed": true,
        "task title": "Weekly Support Report",
        "task description": "Prepare the weekly report containing ticket statistics.",
        "task date": "2026-08-11",
        "categories": "Reporting"
      },
      {
        "active": true,
        "new task": false,
        "complitedtask": false,
        "failed": false,
        "task title": "Update FAQ",
        "task description": "Update the frequently asked questions based on recent queries.",
        "task date": "2026-08-19",
        "categories": "Documentation"
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