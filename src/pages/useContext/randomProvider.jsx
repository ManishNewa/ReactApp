import { createContext, useState } from "react"
import { colors, lessonNames } from "../../data";

export const RandomContext = createContext(null)

export function RandomProvider({ children }) {
    const [highlight, setHighlight] = useState('React');
    const [color, setColor] = useState(colors[0]);

    function randomizeHighlight() {
        const randomHighlight = lessonNames[Math.floor(Math.random() * lessonNames.length)]
        setHighlight(randomHighlight);
        const randomColors = colors[Math.floor(Math.random() * colors.length)]
        setColor(randomColors);
    }

    return (
        <RandomContext.Provider value={{ highlight, color, randomizeHighlight }}>
            {children}
        </RandomContext.Provider>
    )
}