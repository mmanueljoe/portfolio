import { useEffect, useMemo, useState, useContext } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Using slim version for optimized performance
import { ThemeContext } from "./ThemeContext";

const ParticleBackground = () => {
    const { theme } = useContext(ThemeContext);
    const themeValue = Array.isArray(theme) ? theme[0] : theme || "dark";

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            console.log("Initializing particles...");
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log("Particles loaded:", container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: "transparent", // Dark for night effect
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "push" },
                    onHover: { enable: false }, // No hover effect for a natural sky feel
                    resize: true,
                },
            },
            particles: {
                color: { value: themeValue === "dark" ? "#ffffff" : "#333333" }, // White stars for dark mode
                shape: { type: "star" }, // Star-shaped particles
                opacity: {
                    value: 1, // Full opacity for bright stars
                    random: true, // Some stars appear dimmer
                    animation: {
                        enable: true,
                        speed: 0.7,
                        minimumValue: 0.3,
                        sync: false,
                    },
                },
                size: {
                    value: { min: 0.5, max: 1 }, // Different star sizes
                    random: true,
                },
                move: {
                    enable: true,
                    speed: 0.5, // Slow movement for a twinkling effect
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: { default: "out" },
                },
                number: {
                    value: 500, // More particles for a dense star field
                    density: { enable: true, area: 800 },
                },
                links: {
                    enable: false, // No connecting lines, just stars
                },
            },
            detectRetina: true,
        }),
        [themeValue]
    );


    if (!init) return null; // Prevents rendering until initialization is complete

    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
};

export default ParticleBackground;
