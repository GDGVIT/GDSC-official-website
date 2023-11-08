import { ReactNode, FC, useEffect, useRef, RefObject } from 'react';
import { fullConfig } from '@/config/tailwind';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

interface Props {
    children?: ReactNode
    color?: string
    page?: string
    setIntersecting?: (page: string) => void
    propRef?: RefObject<HTMLElement>
    snap?: boolean
}

const Section: FC<Props> = ({ children, color, page, setIntersecting, snap }) => {
    const ref = useRef<HTMLElement>(null)



    useEffect(() => {
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
        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => {
            if (ref.current)
                observer.unobserve(ref.current)
        }

    }, [ref.current])

    return (
        <section className={`relative w-[100vw] text-white min-h-[100vh] max-h-fit snap-y ${snap ? "" :""}`} style={{ backgroundColor: fullConfig?.theme?.colors![color as keyof typeof fullConfig.theme.colors] as string || "dark" }} ref={ref} >
            {children}
        </section >
    );
}

export default Section;
