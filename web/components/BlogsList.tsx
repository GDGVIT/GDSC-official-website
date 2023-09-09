import { ResponsePostSchema } from '@/app/api/blogs/route';
import { Provider } from '@/app/provider';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';
import BlogListItem from './BlogListItem';

type Props = {
    startAnimationComplete: boolean
    onHover: (key: number, text: string) => void
}
const BlogsList = ({ startAnimationComplete, onHover }: Props) => {
    const getBlogs = async (): Promise<ResponsePostSchema[]> => {
        const res = await fetch('/api/blogs');
        return res.json();
    };

    const { data: blogs, isFetching } = useQuery('getBlogs', getBlogs, {
        onSuccess: (data) => {
            onHover(0, data[0].title)
        },
        refetchOnWindowFocus: false,
    })



    return (
        <div className='flex flex-col overflow-scroll h-fit'>{blogs ? blogs.map((blog, i) => <BlogListItem i={i} key={"blog" + i} onHover={onHover} name={blog.title} by={blog.user.name} link={""} />) : ""}</div>
    );
}

export default BlogsList;