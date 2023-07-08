import { ReactNode, FC } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
import { Config } from 'tailwindcss';

const fullConfig = resolveConfig(tailwindConfig)

interface Props {
    children?: ReactNode
    color?: string
}

const Section: FC<Props> = ({ children, color }) => {
    return (
        <section className={`w-[100vw] text-white h-[100vh]`} style={{ backgroundColor: fullConfig?.theme?.colors![color as keyof typeof fullConfig.theme.colors] as string || "dark" }}>
            {children}
        </section>
    );
}

export default Section;