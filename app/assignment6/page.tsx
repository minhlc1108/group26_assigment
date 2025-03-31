"use client"
import BlogForm from "@/components/ui/BlogForm";
import BlogTable from "@/components/ui/BlogTable";
import { Button } from "@/components/ui/button";
import { DeleteAlert } from "@/components/ui/DeleteAlert";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export default function Assignment6() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false); // Thêm state quản lý mở/đóng form

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:8000/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      toast.error('Lỗi khi tải bài viết:' + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (postData: Omit<BlogPost, 'id' | 'createdAt'>) => {
    try {
      if (selectedPost) {
        await fetch(`http://localhost:8000/blogs/${selectedPost.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...postData,
            createdAt: selectedPost.createdAt
          }),
        }).then(() => {
          toast.success("Cập nhật thành công!")
        }).catch(() => toast.error("Cập nhật thất bại!"));
      } else {
        await fetch('http://localhost:8000/blogs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...postData,
            createdAt: new Date().toISOString().split('T')[0]
          }),
        }).then(() => toast.success("Thêm thành công!"))
        .catch(() => toast.error("Thêm thất bại")); // Sửa lại thông báo lỗi
      }
      await fetchBlogs();
      setIsFormOpen(false); // Đóng form sau khi submit
    } catch (error) {
      toast.error('Lỗi khi lưu bài viết:' + error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE'
      });
      await fetchBlogs().then(() => toast.success("Xóa thành công!")).catch(()=> toast.error("Xóa thất bại!"));
    } catch (error) {
      toast.error('Lỗi khi xóa bài viết:' + error);
    }
  };

  if (loading) return <div>Đang tải...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quản lý Blog</h1>
        <Button onClick={() => {
          setSelectedPost(null);
          setIsFormOpen(true); // Mở form khi click thêm mới
        }}>
          Thêm bài viết mới
        </Button>
      </div>

      <BlogTable
        blogs={blogs}
        onEdit={(post) => {
          setSelectedPost(post);
          setIsFormOpen(true); // Mở form khi chỉnh sửa
        }}
        onDelete={setDeleteId}
      />

      <BlogForm
        open={isFormOpen} // Sử dụng state riêng để control form
        onOpenChange={(open) => {
          setIsFormOpen(open);
          if (!open) setSelectedPost(null); // Reset khi đóng form
        }}
        initialData={selectedPost}
        onSubmit={handleSubmit}
      />

      <DeleteAlert
        open={!!deleteId}
        onConfirm={() => {
          if (deleteId) {
            handleDelete(deleteId);
            setDeleteId(null);
          }
        }}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}