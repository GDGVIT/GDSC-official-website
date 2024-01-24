"use client"
import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from 'next/navigation'

const PrivacyPolicyPage: NextPage = () => {
    const router = useRouter();

    const handleRedirect = () => {
        router.push("/privacy-policy.html");
    };

    useEffect(() => {
        handleRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <button onClick={handleRedirect}>Go to Privacy Policy</button>
        </div>
    );
};

export default PrivacyPolicyPage;
