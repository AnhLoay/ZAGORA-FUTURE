import IconMenu from "@/components/IconMenu";
import React from "react";
import Boutoun from "@/components/btn";
import ImageSlider from "@/components/imageSlider";

const Page = () => {
    return (
        <>
            <ImageSlider />
            <IconMenu />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>Welcome to Our Website!</h1>
                <p>We are glad to have you here. Explore our services and enjoy your stay.</p>
            </div>
            <Boutoun />
        </>
    );
}

export default Page;