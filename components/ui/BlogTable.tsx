import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

interface BlogTableProps {
  blogs: any[];
  onEdit: (post: any) => void;
  onDelete: (id: number) => void;
}

export default function BlogTable({ blogs, onEdit, onDelete }: BlogTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tiêu đề</TableHead>
          <TableHead>Tác giả</TableHead>
          <TableHead>Ngày đăng</TableHead>
          <TableHead className="text-right">Thao tác</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((post) => (
          <TableRow key={post.id}>
            <TableCell className="font-medium">{post.title}</TableCell>
            <TableCell>{post.author}</TableCell>
            <TableCell>{post.createdAt}</TableCell>
            <TableCell className="text-right space-x-2">
            <Link className='btn btn-primary' href={`/assignment6/blogs/${post.id}`}>      
            <Button
                size="sm"
              >
                Xem
              </Button>
            </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(post)}
              >
                Sửa
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(post.id)}
              >
                Xóa
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}