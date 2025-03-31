import TeamCard from "@/components/ui/TeamCard";

export default function Assignment3() {
  return (
    <div className="flex flex-col gap-10 p-5">
      <h1 className="text-center text-2xl font-bold">About us</h1>
     <div className="flex justify-center gap-6">
      <TeamCard email="" facebookUrl="https://www.facebook.com/" name="Lê Chí Minh" imageUrl="/images/member8.gif" key={1} />
      <TeamCard email="" facebookUrl="https://www.facebook.com/" name="Đinh Hoàng Chiến" imageUrl="/images/member6.gif" key={2} />
      <TeamCard email="" facebookUrl="https://www.facebook.com/" name="Trần Huỳnh Đức Anh" imageUrl="/images/member7.gif" key={3} />
      <TeamCard email="" facebookUrl="https://www.facebook.com/" name="Trịnh Minh Thắng" imageUrl="/images/member5.gif" key={4} />
     </div>
    </div>
  );
}
