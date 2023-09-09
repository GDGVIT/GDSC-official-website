import React from 'react'
import { FC } from 'react'

interface Props {
    bg: string
}

const Footer: FC<Props> = ({bg}) => {
  return (
    <div className={`w-full p-16 ${bg}`}>
        <p className="text-center">Made with &#9829; by GDSC-VIT</p>
    </div>
  )
}

export default Footer
