import { useEffect, useRef, useState } from "react"

interface BinaryBackgroundProps {
    backgroundColor: string
    foregroundColor: string
}

function generateBinaryString(cols: number, rows: number): string {
    let text = ""

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            text += `${Math.random() < 0.5 ? "0" : "1"} `
        }

        text += "\n"
    }

    return text
}

export default function BinaryBackground(props: BinaryBackgroundProps) {
    const [text, setText] = useState("")
    const containerRef = useRef<HTMLDivElement>(null)

    const updateText = () => {
        if (!containerRef.current) return

        const { width, height } = containerRef.current.getBoundingClientRect()
        const charWidth = 12
        const charHeight = 20
        const cols = Math.floor(width / charWidth)
        const rows = Math.floor(height / charHeight)
        setText(generateBinaryString(cols, rows))
    }

    useEffect(() => {
        if (!containerRef.current) return

        updateText()

        window.addEventListener("resize", updateText)
        containerRef.current.addEventListener("mousemove", updateText)

        return () => {
            if (!containerRef.current) return

            window.removeEventListener("resize", updateText)
            containerRef.current.removeEventListener("mousemove", updateText)
        }
    }, [])

    const containerStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
        backgroundColor: props.backgroundColor,
        color: props.foregroundColor,
        fontFamily: "monospace",
        fontSize: "20px",
        whiteSpace: "pre",
        margin: 0,
        padding: 0,
        overflow: "hidden",
    }

    return <div style={containerStyle} ref={containerRef}>{text}</div>
}
