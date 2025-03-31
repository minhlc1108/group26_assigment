'use client'
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}

const Assignment5 = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // Hàm fetch API để lấy danh sách người dùng
        const fetchData = async () => {
            const response = await fetch('https://reqres.in/api/users?page=1'); 
            const data = await response.json();
            setUsers(data.data); // Lưu danh sách user vào state
        };

        fetchData();
    }, []);

    if (!users) {
        return <p>Loading...</p>;
    }
    return (
        <div className='flex flex-col gap-8 p-2'>
            <h4 className="text-center text-2xl font-bold">
                Get API User
            </h4>
            <div className="flex flex-wrap gap-4">

                {users.map((user) => (
                    <Card key={user.id} className='max-w-[300px] min-w-[300px] text-center' >
                        <CardHeader>
                         <Avatar className='flex justify-center items-center'>
                           <AvatarImage src={user.avatar} alt={user.first_name} className='w-[100px] h-[100px] rounded-full' />
                          <AvatarFallback>{user.first_name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </CardHeader>
                        <CardContent>
                          <CardTitle>{`ID: ${user.id}`}</CardTitle>
                        <p>{`Full Name: ${user.first_name} ${user.last_name}`}</p>
                        <p>{`Email: ${user.email}`}</p>
                        </CardContent>
                    </Card>
                ))}

            </div>
        </div>


    );
}

export default Assignment5