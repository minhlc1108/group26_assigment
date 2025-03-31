"use client"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface BlogFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: any;
  onSubmit: (data: any) => void;
}

export default function BlogForm({ open, onOpenChange, initialData, onSubmit }: BlogFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        author: initialData.author,
        content: initialData.content
      });
    }
    if(!open) {
      setFormData({
        title: "",
        author: "",
        content: ""
      });
    }
  }, [initialData, open]);

  const handleSubmit = () => {
    onSubmit(formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialData ? 'Chỉnh sửa bài viết' : 'Bài viết mới'}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Tiêu đề"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
          <Input
            placeholder="Tác giả"
            value={formData.author}
            onChange={(e) => setFormData({...formData, author: e.target.value})}
          />
          <Textarea
            placeholder="Nội dung"
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            className="min-h-[200px]"
          />
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Hủy
            </Button>
            <Button onClick={handleSubmit}>
              {initialData ? 'Cập nhật' : 'Đăng bài'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}