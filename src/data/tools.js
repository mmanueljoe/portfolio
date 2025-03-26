import assets from "../assets";

const tools = [
    {
        id: 1,
        title: "Building the Future, One Line at a Time",
        description: "These are the core technologies I use to craft seamless and scalable applications.",
        items: [
            { id: 1, name: "React", logo: assets.react },
            { id: 2, name: "Next.js", logo: assets.nextjs },
            { id: 3, name: "JavaScript", logo: assets.js },
            { id: 4, name: "TypeScript", logo: assets.typescript }
        ]
    },
    {
        id: 2,
        title: "Powering Decentralization with Cutting-Edge Tech",
        description: "Blockchain technology fuels my passion for trustless systems and smart contracts.",
        items: [
            { id: 5, name: "Solidity", logo: assets.solidity },
            { id: 6, name: "Ethereum", logo: assets.ethereum },
            { id: 7, name: "ICP", logo: assets.icp },
            { id: 8, name: "Motoko", logo: assets.motoko }
        ]
    },
    {
        id: 3,
        title: "Designing Experiences that Resonate",
        description: "Bringing ideas to life with intuitive design and seamless user experience.",
        items: [
            { id: 9, name: "Figma", logo: assets.figma },
            { id: 10, name: "Adobe XD", logo: assets.adobe_xd }
        ]
    },
    {
        id: 4,
        title: "Deployment & Version Control",
        description: "Ensuring stability, scalability, and efficiency with modern DevOps tools.",
        items: [
            { id: 11, name: "Git", logo: assets.git },
            { id: 12, name: "GitHub", logo: assets.github },
            { id: 13, name: "Docker", logo: assets.docker }
        ]
    }
];

export default tools;
