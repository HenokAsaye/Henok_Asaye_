"use client"

import React from "react";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { IconHash } from "@tabler/icons-react";
import { Element } from 'react-scroll';

export const ExperienceSection = () => {
    const data: TimelineEntry[] = [
        {
            title: {
                company: "Brana Software Solutions",
                role: "Backend Developer Intern",
                website: "https://branatech.co",
                location: "Addis Ababa, Ethiopia - Inperson",
                duration: "Jun 2025 - September 2025",
            },
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        <IconHash className="inline" />
                        Worked as a Backend Developer Intern, contributing to the development and maintenance of backend services and APIs Specifically for Brana Erp Project.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
                        <li>Design Microservice Architecture for the Backend of the Project</li>
                        <li>Implement ApiGateway using ocelot for the application to facilitate request</li>
                        <li>Develop RESTful APIs using ASP.NET Core and Entity Framework Core to handle various business operations.</li>
                        <li>Implement authentication and authorization mechanisms for multi Organization Access</li>
                        <li>Optimize database queries and improve performance of backend services.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: {
                company: "School of Information Technology and Engineering",
                role: "Full Stack Software Engineer | Intern",
                location: "Addis Ababa, Ethiopia - Hybrid",
                duration: "August 2025 - Present",
            },
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        Developed and tested full-stack application using modern frameworks.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
                        <li> Integrated new features for AAUPMRS and Aggregation of statistical data through the strucuture of the company <span className="font-bold">Angular</span> and <span className="font-bold">ASP.NET Core</span>,
                            improving application functionality.</li>
                        <li> Add Visulaization for the data using the Apache E-charts</li>

                        <li>Introduce new Features for Twascd an Application for the Addis Ababa Water and Sewege Authority</li>
                    </ul>
                </div>
            ),
        },
        {
            title:{
                company: "Swift Technologies",
                role:"Backend Developer",
                website:"https://swiftdelivery.et",
                location:"Addis Ababa, Ethiopia - Remote",
                duration:"June 2025 - September 2025",
            },
            content:(
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        Developed Backend using Nest js and PostgreSQL for Swift Delivery Application.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
                        <li>Developed backend functionality to register supermarkets via an admin panel and implemented role-based access control using <span className="font-bold">NestJS</span>.</li>
                    </ul>
                </div>
            )
        }
    ];


    return (
        <Element name="experience" className="w-full pt-10">
            <div className="max-w-7xl mx-auto md:py-10 px-4 md:px-8 lg:px-10">
                <h2 className="text-2xl md:text-6xl max-w-4xl">
                    Experience
                </h2>
            </div>

            <Timeline data={data} />
        </Element>
    );
}
