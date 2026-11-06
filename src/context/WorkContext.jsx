"use client";

import { createContext, useState } from "react";

const WorkContext = createContext();

export function WorkProvider({ children }) {
    const [planlist, setPlanlist] = useState([]);
    const [savedlist, setSavedlist] = useState([]);
    const value = { planlist, setPlanlist, savedlist, setSavedlist };
    return <WorkContext.Provider value={value}>{children}</WorkContext.Provider>
}