import { Tool } from "@/types/tool";
import { Code2, Brush, CheckCircle, Brain } from "lucide-react";

export const ToolsData: Tool[] = [
    {
        category: "Development",
        icon: Code2,
        items: [
            {
                name: "Visual Studio Code",
                description: "My primary code editor with custom theme and essential extensions"
            },
            {
                name: "Visual Studio 2022",
                description: "Visual Studio 2022 is a powerful IDE for building and debugging modern applications."
            },
            {
                name: "Microsoft SQL Server Management Studio",
                description: "A tool for managing, configuring, and querying SQL Server databases."
            },
            {
                name: "DBeaver",
                description: "A universal database management tool for developers and database administrators."
            },
            {
                name: "Docker",
                description: "Container platform for building and sharing applications"
            }
        ]
    },
    {
        category: "AI Tools",
        icon: Brain,
        items: [
            {
                name: "ChatGPT",
                description: "An AI language model developed by OpenAI, designed to generate human-like text based on user prompts."
            },
            {
                name: "Claude.ai",
                description: "An AI assistant created by Anthropic, focused on safety and reliability in generating text and assisting with various tasks. "
            },
            {
                name: "Bolt.new",
                description: "An AI-powered web development agent that enables users to prompt, run, edit, and deploy full-stack applications directly from the browser without local setup."
            },
            {
                name: "Google AI Studio",
                description: "A comprehensive platform by Google that provides tools and services for building, deploying, and managing AI models and applications."
            },
            {
                name: "OpenAI Codex CLI",
                description: "A command-line interface that allows developers to interact with OpenAI's Codex models, enabling code generation and other AI-powered functionalities directly from the terminal."
            },
            {
                name: "Microsoft Copilot",
                description: "An AI-powered assistant integrated into Microsoft products, designed to enhance productivity by assisting with tasks like coding, writing, and data analysis."
            },
            {
                name: "GitHub Copilot",
                description: "An AI pair programmer that helps you write code faster and with less effort by suggesting whole lines or blocks of code as you type."
            }
        ]
    },
    {
        category: "Productivity",
        icon: CheckCircle,
        items: [
            {
                name: "Notion",
                description: "All-in-one workspace for notes and documentation"
            },
            {
                name: "Obsidian",
                description: "Knowledge base that works on local Markdown files"
            },
            {
                name: "Rectangle",
                description: "Window management made easy for macOS"
            }
        ]
    },
    {
        category: "Design",
        icon: Brush,
        items: [
            {
                name: "Adobe Photoshop",
                description: "A leading software for photo editing and graphic design."
            },
            {
                name: "Canva",
                description: "An easy-to-use platform for creating designs and visuals."
            },
            {
                name: "Figma",
                description: "Collaborative interface design tool"
            },
        ]
    },
];