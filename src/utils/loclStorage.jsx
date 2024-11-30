const employees = [
    {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        password: "123",
        tasks: [
            {
                id: 1,
                title: "Complete Frontend Module",
                description: "Build and integrate the frontend module for the new project.",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                deadline: "2024-12-05",
                category: "Development"
            },
            {
                id: 2,
                title: "Fix UI Bugs",
                description: "Resolve reported issues in the application interface.",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                deadline: "2024-12-10",
                category: "Testing"
            },
            {
                id: 3,
                title: "Design Prototype",
                description: "Create a prototype for the client approval.",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
                deadline: "2024-12-01",
                category: "Design"
            },
            {
                id: 4,
                title: "Team Meeting",
                description: "Prepare a presentation for the team meeting.",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                deadline: "2024-12-03",
                category: "Management"
            },
            {
                id: 5,
                title: "Database Optimization",
                description: "Improve the performance of the database queries.",
                active: true,
                newTask: false,
                completed: false,
                failed: true,
                deadline: "2024-12-07",
                category: "Development"
            }
        ]
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        password: "123",
        tasks: [
            {
                id: 1,
                title: "Write Test Cases",
                description: "Develop test cases for the new features.",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                deadline: "2024-12-06",
                category: "Testing"
            },
            {
                id: 2,
                title: "Client Feedback",
                description: "Address feedback provided by the client.",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                deadline: "2024-12-09",
                category: "Management"
            },
            {
                id: 3,
                title: "Update Documentation",
                description: "Ensure all project documentation is up-to-date.",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                deadline: "2024-12-02",
                category: "Research"
            },
            {
                id: 4,
                title: "Code Review",
                description: "Review the code submitted by other developers.",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                deadline: "2024-12-08",
                category: "Development"
            }
        ]
    },
    {
        id: 3,
        name: "Charlie",
        email: "charlie@example.com",
        password: "123",
        tasks: [
            {
                id: 1,
                title: "Prepare Deployment Plan",
                description: "Create a detailed deployment plan for the next release.",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                deadline: "2024-12-12",
                category: "Management"
            },
            {
                id: 2,
                title: "Performance Testing",
                description: "Conduct performance testing on the staging server.",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                deadline: "2024-12-14",
                category: "Testing"
            },
            {
                id: 3,
                title: "Research New Tools",
                description: "Look into tools that can improve team productivity.",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
                deadline: "2024-12-10",
                category: "Research"
            },
            {
                id: 4,
                title: "Fix Backend Bug",
                description: "Resolve the critical bug affecting backend functionality.",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                deadline: "2024-12-07",
                category: "Development"
            },
            {
                id: 5,
                title: "Write Documentation",
                description: "Document the API endpoints for the new service.",
                active: false,
                newTask: true,
                completed: true,
                failed: false,
                deadline: "2024-12-15",
                category: "Development"
            },
            {
                id: 6,
                title: "Optimize Codebase",
                description: "Refactor and optimize legacy code for better performance.",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                deadline: "2024-12-13",
                category: "Development"
            }
        ]
    },
    {
        id: 4,
        name: "Diana",
        email: "diana@example.com",
        password: "123",
        tasks: [
            {
                id: 1,
                title: "UI Redesign",
                description: "Create a fresh and user-friendly design for the dashboard.",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                deadline: "2024-12-20",
                category: "Design"
            },
            {
                id: 2,
                title: "Setup CI/CD Pipeline",
                description: "Configure the continuous integration and delivery pipeline.",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                deadline: "2024-12-22",
                category: "Development"
            },
            {
                id: 3,
                title: "Security Audit",
                description: "Perform a security audit of the application.",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                deadline: "2024-12-18",
                category: "Research"
            }
        ]
    },
    {
        id: 5,
        name: "Eve",
        email: "eve@example.com",
        password: "123",
        tasks: [
            {
                id: 1,
                title: "Finalize Reports",
                description: "Prepare the financial and operational reports for review.",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                deadline: "2024-12-25",
                category: "Management"
            },
            {
                id: 2,
                title: "Create Wireframes",
                description: "Design wireframes for the new feature.",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
                deadline: "2024-12-28",
                category: "Design"
            },
            {
                id: 3,
                title: "Backend Integration",
                description: "Integrate the backend with the frontend module.",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                deadline: "2024-12-27",
                category: "Development"
            },
            {
                id: 4,
                title: "Test Automation",
                description: "Automate the test suite for repetitive test cases.",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                deadline: "2024-12-26",
                category: "Testing"
            }
        ]
    }
];


const admin = [
    {
        id: "admin",
        email: "admin@admin.com",
        name: "Super Admin",
        password: "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))

}
export const getLocalStorgae = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("employees"))
    return [employees, admin]
}