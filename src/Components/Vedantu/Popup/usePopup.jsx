import React, { useEffect, useState } from 'react'

export function usePopup() {
    const [open, setOpen] = useState(false)
    
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);
  return [open,setOpen]
}
