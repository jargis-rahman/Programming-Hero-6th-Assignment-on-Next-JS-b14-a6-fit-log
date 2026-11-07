"use client";

import { createContext, useContext, useState } from "react";

const WorkContext = createContext();

export function WorkProvider({ children }) {
    const [planlist, setPlanlist] = useState([]);
    const [savedlist, setSavedlist] = useState([]);
    const value = { planlist, setPlanlist, savedlist, setSavedlist };
    return <WorkContext.Provider value={value}>{children}</WorkContext.Provider>
}

export function useWorkContext() {
    const context = useContext(WorkContext)
    if (!context) {
        throw new Error("Context not Found")
    }
    return context;
}