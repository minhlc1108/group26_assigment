import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Assignment10() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-xl shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
              Ứng dụng kiến thức của các tuần để hoàn thành 4 ứng dụng đơn giản
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <ul className="list-decimal w-full flex flex-col items-center justify-center">
            <li>Caculator</li>
            <li>Todo List</li>
            <li>Weather App</li>
            <li>Netflix Clone</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}