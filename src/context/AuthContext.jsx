import { createContext, useEffect, useState } from 'react';


export const authContext = createContext();

export function ProvideAuth({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUs
    })
    }

}
