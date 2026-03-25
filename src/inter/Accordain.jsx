import React, { useState } from 'react';
const accordionData = [
    {
        id: 1,
        title: "What is React?",
        description: "React is a JavaScript library used for building user interfaces using components."
    },
    {
        id: 2,
        title: "What are Hooks?",
        description: "Hooks allow functional components to use state and lifecycle features in React."
    },
    {
        id: 3,
        title: "What is Virtual DOM?",
        description: "Virtual DOM is a lightweight copy of the real DOM used by React to improve performance."
    },
    {
        id: 4,
        title: "What is useEffect?",
        description: "useEffect is a React Hook used to perform side effects like API calls and subscriptions."
    }
];

const Accordain = () => {

    const [activeId, setActiveId] = useState(null)


    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id)
    }

    return (
        <div>

            {
                accordionData.map((item) => (
                    <div key={item.id}>
                        <div
                            onClick={() => toggleAccordion(item.id)}
                            style={{ padding: "10px", cursor: "pointer", background: "#eee" }}
                        >
                            {item.title}
                            <span>{activeId === item.id ? "Close " : "Open "}</span>
                        </div>

                        {activeId === item.id && (
                            <div>
                                {item.description}
                            </div>
                        )}
                    </div>
                ))
            }


        </div>
    )
}

export default Accordain
