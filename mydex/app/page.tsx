"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold mb-4">欢迎来到 Solana DEX!</h1>
                <p className="text-lg text-gray-600 mb-8">
                    在这里，你可以轻松地进行加密货币交易、流动性提供和质押操作。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>交易</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>通过我们的平台快速进行加密货币交易。</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>流动性</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>提供流动性并赚取奖励。</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>质押</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>质押你的资产以获得更多收益。</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
