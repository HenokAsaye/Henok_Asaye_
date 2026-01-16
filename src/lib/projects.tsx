import { Section } from "@/components/sections";
import { IconBrandGithub, IconDatabase } from "@tabler/icons-react";


export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    tags?: string[];
    time?: string;
    links: {
        icon: JSX.Element;
        text: string;
        url: string;
    }[];
    details: {
        sections?: Section[];
    };
}

export const projects: Project[] = [


    // Distributed File Server

    {
        id: "1",
        title: "AAU LRPS(Letter Tracking and Performance Monitoring and Reporting System)",
        description: "An Internal Organization Project for Addis Ababa University.",
        thumbnail: "/aau_logo.png",
        tags: ["C#", "Asp .Net Core", "PostgreSQL", "Entity Framework Core","Docker","PostGis","Angular Js","Angular Material"],
        links: [],
        details: {
            sections: [
                {
                    type: "text",
                    title: "",
                    content: `The system is designed to streamline the management of official correspondence within the university, ensuring efficient tracking and reporting of letters across various departments and administrative units. It provides a centralized platform for monitoring the status and performance of letter handling processes, facilitating better communication and accountability within the institution.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Streamlined letter tracking",
                        "Performance monitoring",
                        "Centralized reporting",
                        "Improved communication and accountability"
                    ]
                },
            ]
        }

    },

    // twascd
    {
        id: "2",
        title: "Twascd",
        description: "A Project for Addis Ababa Water and Sewerage Authority to monitor water supply and customer management system.",
        time: "on going",
        thumbnail: "/AAWSA.png",
        tags: ["C#", "Asp .Net Core", "PostgreSQL", "Entity Framework Core","Docker","PostGis","Angular Js","Angular Material"],
        links: [],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `Twascd is a comprehensive water supply and customer management system designed for the Addis Ababa Water and Sewerage Authority. The system aims to enhance the efficiency of water distribution, monitor consumption patterns, and improve customer service through a centralized platform. It integrates various functionalities to streamline operations, manage customer accounts, and ensure effective resource allocation within the water supply network.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Water supply monitoring",
                        "Customer account management",
                        "Consumption pattern analysis",
                        "Resource allocation optimization"
                    ]
                },
                {
                    type: "carousel",
                    title: "Screens",
                    items: []
                }
            ]
        },
    },

    // Brana ERP
    {
        id: "3",
        title: "Brana ERP",
        description: "An ERP System user for Customer Relation Management,Inventory Management,Human resource Management and Multi Organization Management.",
        thumbnail: "/Brana_Erp.png",
        links: [],
        time: "Jun 2025 - September 2025",
        tags: ["Asp.Net Core", "C#", "Sql Server","Entity Framework Core","Docker"],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `Brana ERP is an Enterprise Resource Planning system designed to manage Customer Relation Management, Inventory Management, Human Resource Management, and Multi-Organization Management. The system aims to streamline business processes, improve data accuracy, and enhance organizational efficiency through integrated modules and user-friendly interfaces.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Customer Relation Management",
                        "Inventory Management",
                        "Human Resource Management",
                        "Multi-Organization Management"
                    ]
                },
                {
                    type: "bullet",
                    title: "Tech Stacks",
                    items: [
                        "**Backend**: Asp.Net Core, C#, Sql Server, Entity Framework Core, Docker"
                    ],
                },
            ]
        }
    },

    
    {
        id: "4",
        title: "Swift Delivery",
        description: "A Web App the connects Supermarkets in one place and facilitates delivery services to customers.",
        thumbnail: "/Swift_delivery.png",
        links: [
            {
                icon: <IconDatabase />,
                text: "Dataset",
                url: "https://swiftdelivery.et"
            }
        ],
        tags: ["Next js", "Nest js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `Swift Delivery is a web application that connects various supermarkets in one platform, facilitating efficient delivery services to customers with payment integration with chapa and Mpesa.The app aims to streamline the shopping experience by allowing users to browse products from multiple supermarkets, place orders, and have their groceries delivered directly to their doorstep. It leverages modern web technologies to provide a user-friendly interface and seamless functionality for both customers and supermarket partners.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Multi-supermarket integration",
                        "User-friendly browsing and ordering",
                        "Efficient delivery services",
                        "Payment integration with Chapa and Mpesa"
                    ]
                }
            ]
        }
    },

    // Git hub Streak Notifier
    {
        id: "5",
        thumbnail: "/github_streak.png",
        title: "GitHub Streak Notifier",
        description: "Never lose your GitHub contribution streak again! This automated tool checks your daily GitHub contributions and sends you smart email notifications to keep you motivated and consistent.",
        tags: ["Python", "Automation", "Email", "Scheduler"],
        links: [
            {
                icon: <IconBrandGithub />, 
                text: "GitHub",
                url: "https://github.com/HenokAsaye/github_streak_notifier",
            }
        ],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `GitHub Streak Notifier is a lightweight Python package that helps you maintain your GitHub contribution streak. It monitors your daily GitHub activity and sends motivational or congratulatory email notifications based on your contribution status. The tool is cross-platform, running on Windows, macOS, and Linux, and integrates with system schedulers for automated daily checks. Secure, lightweight, and easy to configure, it's perfect for developers who want to keep their green contribution graph alive!`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Automated daily GitHub contribution checks",
                        "Smart email notifications: reminders and celebrations",
                        "Customizable notification schedule (24-hour format)",
                        "Secure credential storage in your home directory",
                        "Cross-platform: Windows Task Scheduler & Unix cron integration",
                        "Lightweight with minimal dependencies",
                        "Built-in debug logging for troubleshooting"
                    ]
                },
                {
                    type: "bullet",
                    title: "How It Works",
                    items: [
                        "Configure with your GitHub token and Gmail app password",
                        "Set your preferred notification time",
                        "Runs daily via system scheduler to check your streak",
                        "Sends motivational or congratulatory emails based on your activity"
                    ]
                },
            ]
        }
    },
    {
        id: "6",
        thumbnail: "/Telegram_Ecommerce.png",
        title: "Telegram E-commerce Platform",
        description: "An end-to-end intelligent data extraction and management platform that scrapes, processes, and extracts structured product information from Telegram channels using advanced NLP and machine learning techniques.",
        tags: ["Python", "FastAPI", "MongoDB", "PostgreSQL", "NLP", "PyTorch", "Transformers", "Telethon", "Cloudinary", "JWT", "Docker"],
        time: "November 2025 – Present (Ongoing)",
        links: [],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `Telegram E-commerce is an intelligent platform for extracting and managing e-commerce product data from Telegram channels. It transforms unstructured messages into structured product listings using advanced NLP (XLM-RoBERTa) and a robust data pipeline. The system supports real-time scraping, multilingual entity recognition, secure authentication, and scalable backend APIs, making it ideal for aggregating and cataloging Telegram-based e-commerce data.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Multi-channel scraping with real-time processing",
                        "Multilingual NER for product details",
                        "Media handling and cloud storage integration",
                        "Secure JWT-based authentication and token management",
                        "Scalable RESTful API with clean architecture",
                        "Deduplication and error handling for production readiness"
                    ]
                },
                {
                    type: "bullet",
                    title: "Tech Stack",
                    items: [
                        "Flutter (Frontend)",
                        "Python (FastAPI, Uvicorn)",
                        "PostgreSQL, MongoDB (Database)",
                        "Transformers, PyTorch, Hugging Face (NLP/ML)",
                        "Telethon (Telegram API client)",
                        "Cloudinary (CDN)",
                        "JWT (python-jose), passlib (Authentication)",
                        "Docker (Containerization)"
                    ]
                }
            ]
        }
    },
    // {
    //     id: "7",
    //     thumbnail: "/ai_humanizer_thumbnail.png",
    //     title: "AI humanizer",
    //     description: "A web app that converts ai generated text into human like text, to avoid ai detection.",
    //     tags: ["React", "React Query", "NodeJS", "Express", "MongoDB"],
    //     links: [],
    //     details: { sections: [] }
    // },

    // {
    //     id: "8",
    //     title: "Hacks Datavis",
    //     description: "A visualization site for A2SV 2024 Hackathon data, syncing Google Sheets with db using AppScript.",
    //     thumbnail: "/infoblender_thumbnail.png",
    //     links: [
    //         {
    //             icon: <IconBrandGithub />,
    //             text: "Source Code",
    //             url: "https://github.com/NathanZlion/hacks-datavis/"
    //         },
    //         {
    //             icon: <IconExternalLink />,
    //             text: "Site",
    //             url: "https://hacks-datavis.vercel.app/"
    //         }
    //     ],
    //     tags: ["Google AppScript", "React", "CronJob"],
    //     details: { sections: [] }
    // }
]