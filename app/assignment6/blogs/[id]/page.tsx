'use client';
import { use, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export default function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = use(params)
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8000/blogs/${id}`);
        if (!response.ok) throw new Error('Post not found');
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (!post) return <div className="text-center p-8">Post not found</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{post.title}</CardTitle>
          <div className="text-sm text-gray-500">
            Tác giả: {post.author} | Ngày đăng: {post.createdAt}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()}>
            Quay lại
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}