import React, { useState } from 'react'

const useVisibilityToggler = (component, visibility = true) => {
    const [visible, setVisibility] = useState(() => visibility);

    return (
        <div>
            
        </div>
    )
}

export default useVisibilityToggler;
