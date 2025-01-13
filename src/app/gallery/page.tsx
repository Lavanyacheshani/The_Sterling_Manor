import CustomTitle from "@/components/shared/title"
import {
    flowerIcon,
    leafIcon,
} from "@/../public/assets"
import GalleryGrid from "@/components/gallery/gallery"
import {HiOutlineArrowRight} from "react-icons/hi"
import React from "react";
import BookStayText from "@/components/shared/bookStayText";
import CornerFlower from "@/components/shared/cornerFlower";
import {galleryImages} from "@/data/gallery";

const Gallery = () => {
    return (<div className="relative md:mt-7 lg:mt-0">
            {/* Hero Section */}
            <section className="section_gap_y section_gap_x text-center max-width">
                <CustomTitle
                    title={"Experience Hotel Grand Minaro"}
                    description={<>
                        Step into a world where nature and luxury meet. Discover the serene beauty and unforgettable
                        moments
                        captured at our haven.
                    </>}
                    leafIcon={leafIcon}
                    isLeafRight={false}
                />
                {/* Gallery */}
                <div>
                    <GalleryGrid images={galleryImages}/>
                </div>
            </section>

            <section>
                <BookStayText/>
            </section>
            {/* Flower Decoration */}
            <div className="hidden lg:block">
                <CornerFlower image={flowerIcon} position="left"/>
            </div>
        </div>
    )
}

export default Gallery