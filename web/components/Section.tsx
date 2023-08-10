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
    const ref = useRef<HTMLElement>(null)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (setIntersecting && page && entry.isIntersecting && entry.target === ref.current) {
                setIntersecting(page)
            }
        })
    }, {

        root: document.querySelector('[data-scroll-root]'),
        rootMargin: '0px',
        threshold: 0.5

    })

    useEffect(() => {

        if (ref.current) {
            observer.observe(ref.current)
        }

    }, [ref.current])

    return (
        <section className={`relative w-[100vw] text-white h-[200vh] snap-y`} style={{ backgroundColor: fullConfig?.theme?.colors![color as keyof typeof fullConfig.theme.colors] as string || "dark" }} ref={ref} >
            {children}
        </section >
    );
}

export default Section;