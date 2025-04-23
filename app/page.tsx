import Image from "next/image";

export default function Home() {
  return (
     <div className="relative w-full h-full">
     <Image
         src="/images/anh1.jpg"
         alt="Picture of the author"
         className="object-cover"
         fill
         quality={100}
     />

         <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl text-white text-center font-bold">Tổng hợp bài tập 10 tuần của Nhóm 26</div>
</div>
  );
}
