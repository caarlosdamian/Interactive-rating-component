import React from 'react'


interface Props {
    children?: JSX.Element|any;
    className?: string
}

export const Container = ({ children, className }: Props) => {
    return (
        <div className={className}>{children}</div>
    )
}
