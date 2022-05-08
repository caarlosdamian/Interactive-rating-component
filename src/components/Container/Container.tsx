import React from 'react'


interface Props {
    children?: JSX.Element
}

export const Container = ({ children }: Props) => {
    return (
        <div className='container'>{children}</div>
    )
}
