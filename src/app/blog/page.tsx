import React from "react";
import Container from "@/app/components/@shared/Container";
import Header from "@/app/components/@shared/Header/Header";

const ComingSoon = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Container>
                <div className="flex-1 flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Our blog is under construction. Stay tuned!
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ComingSoon; 