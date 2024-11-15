const employees = [
    {
        "id": 1,
        "firstName": "Ramveer",
        "email": "ramveer@gmail.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare monthly report",
                "taskDescription": "Compile and analyze data for the monthly performance report.",
                "taskDate": "2024-11-10",
                "taskCategory": "Reporting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client follow-up",
                "taskDescription": "Follow up with clients for feedback.",
                "taskDate": "2024-11-11",
                "taskCategory": "Client Relations",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Team meeting preparation",
                "taskDescription": "Organize notes and agenda for weekly team meeting.",
                "taskDate": "2024-11-09",
                "taskCategory": "Management",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskCounts": {
            "active": 5,
            "newTask": 3,
            "completed": 2,
            "failed": 1
        }
    },
    {
        "id": 2,
        "firstName": "Pranav",
        "email": "pranav@gmail.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Update client database",
                "taskDescription": "Ensure all client records are up-to-date in the CRM.",
                "taskDate": "2024-11-12",
                "taskCategory": "Data Management",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Prepare presentation",
                "taskDescription": "Create slides for upcoming client pitch.",
                "taskDate": "2024-11-14",
                "taskCategory": "Sales",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Research competitors",
                "taskDescription": "Gather information on competitor activities.",
                "taskDate": "2024-11-09",
                "taskCategory": "Research",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 10,
            "newTask": 5,
            "completed": 3,
            "failed": 2
        }
    },
    {
        "id": 3,
        "firstName": "Nakshatra",
        "email": "nakshatra@gmail.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Draft social media content",
                "taskDescription": "Create content for next week's social media posts.",
                "taskDate": "2024-11-13",
                "taskCategory": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Prepare budget forecast",
                "taskDescription": "Estimate expenses and revenue for Q1 2025.",
                "taskDate": "2024-11-20",
                "taskCategory": "Finance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 8,
            "newTask": 3,
            "completed": 2,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstName": "Venh Arya",
        "email": "venh@gmail.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Quality assurance testing",
                "taskDescription": "Test new software release for bugs.",
                "taskDate": "2024-11-15",
                "taskCategory": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "System maintenance",
                "taskDescription": "Perform scheduled system updates.",
                "taskDate": "2024-11-10",
                "taskCategory": "IT",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Database backup",
                "taskDescription": "Ensure all critical data is backed up.",
                "taskDate": "2024-11-11",
                "taskCategory": "Data Management",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 5,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstName": "Gaurav",
        "email": "gaurav@gmail.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Client onboarding",
                "taskDescription": "Assist with onboarding new clients.",
                "taskDate": "2024-11-14",
                "taskCategory": "Client Relations",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Product demo",
                "taskDescription": "Conduct demo for prospective clients.",
                "taskDate": "2024-11-16",
                "taskCategory": "Sales",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 9,
            "newTask": 6,
            "completed": 4,
            "failed": 3
        }
    }
];

const admin = [
    {
        "id": 1,
        "firstName": "Meena",
        "email": "admin@me.com",
        "password": "123"
    }
];
 
// Corrected function to store data in localStorage
export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
};
