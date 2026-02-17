"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function MealSearchInput() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const urlQueryParam = new URLSearchParams();
        if (search) {
            urlQueryParam.set("search", search);
        }
        
        const url = `${pathname}?${urlQueryParam.toString()}`;
        router.push(url);

    }, [search, pathname, router]);

    return (
        <div>
            <input 
                type="text" 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search meals..."
                className="border p-2 mb-4 text-black w-full max-w-md"
            />
        </div>
    );
}