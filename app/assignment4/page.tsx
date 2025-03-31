import Image from 'next/image';

const images = [
  { src: '/images/anh1.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/anh2.webp', alt: 'Image 2', width: 300, height: 400 },
  { src: '/images/anh4.jpg', alt: 'Image 3', width: 300, height: 400 },
];
const Assignment4 = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px', padding: '16px' }}>
          {images.map((image, index) => (
            <div key={index} style={{ position: 'relative', width: '100%', height: 'auto', paddingBottom: '66.66%' }}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"   // Sử dụng layout fill để hình ảnh luôn phù hợp với kích thước container
                objectFit="cover" // Giữ nguyên tỷ lệ hình ảnh
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizing
                priority={index < 2} // Chỉ ưu tiên tải hai ảnh đầu tiên
                quality={100}
              />
            </div>
          ))}
        </div>
      );
}
export default Assignment4