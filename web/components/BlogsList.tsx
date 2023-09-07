import { ResponsePostSchema } from '@/app/api/blogs/route';
import { Provider } from '@/app/provider';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';
import BlogListItem from './BlogListItem';

type Props = {
    startAnimationComplete: boolean
}
const BlogsList = ({ startAnimationComplete }: Props) => {
    const getBlogs = async (): Promise<ResponsePostSchema[]> => {
        const res = await fetch('/api/blogs');
        return res.json();
    };

    const { data: blogs, isFetching } = useQuery('getBlogs', getBlogs)
    return (
        <div className='flex flex-col overflow-scroll h-fit'>{blogs ? blogs.map((blog, i) => <BlogListItem key={"blog" + i} name={blog.title} by={blog.user.name} link={""} />) : ""}</div>
    );
}

export default BlogsList;