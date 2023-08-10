import { ReactNode, FC, useEffect, useRef, RefObject } from 'react';
import { fullConfig } from '@/config/tailwind';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

interface Props {
    children?: ReactNode
    color?: string
    page?: string
    setIntersecting?: (page: string) => void
    propRef?: RefObject<HTMLElement>
}

const Section: FC<Props> = ({ children, color, page, setIntersecting }) => {


    return (
        <section className={`relative w-[100vw] text-white h-[200vh] snap-y`} style={{ backgroundColor: fullConfig?.theme?.colors![color as keyof typeof fullConfig.theme.colors] as string || "dark" }}>
            {children}
        </section>
    );
}

export default Section;