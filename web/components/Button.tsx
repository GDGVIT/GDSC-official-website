import { GetStaticProps } from 'next';
import { ReactNode, FC } from 'react';
import { fullConfig } from '@/config/tailwind';
interface Props {
    children?: ReactNode
    theme: string
    onClick: (event: React.MouseEvent<HTMLElement>) => void
    className?: string
}

const Button: FC<Props> = ({ children, theme, onClick, className }) => {
    return (
        <div onClick={onClick} className={`flex items-center justify-center px-5 py-1 border-2 rounded-full cursor-pointer w-fit h-fit ${className}`} style={{
            color: (theme === "dark" && fullConfig.theme?.colors) ? fullConfig.theme.colors.dark as string : "white",
            borderColor: (theme === "dark" && fullConfig.theme?.colors) ? fullConfig.theme.colors.dark as string : "white"
        }}>
            {children}
        </div >
    );
}

export default Button;
