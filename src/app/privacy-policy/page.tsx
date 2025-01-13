import CustomTitle from '@/components/shared/title'
import BookStayText from "@/components/shared/bookStayText";
import React from "react";
import {privacySections} from "@/data/privacy-policy";

const TermsConditions = () => {
    return (<>
            {/* Hero Section */}
            <section className="section_gap_y section_gap_x pb-0 max-width">
                <CustomTitle
                    title={"PRIVACY POLICY"}
                    description={<>
                        At Hotel Grand Minaro, we value your trust and are committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, and safeguard your information when you visit
                        our website, make reservations,
                        or use our services. By accessing our website or engaging with us, you consent to the practices
                        outlined here.
                    </>}
                />

                <div className="px-5 md:px-10 3xl:px-32 mx-auto pt-5 md:pt-10">
                    {privacySections.map((section, index) => (<div key={index} className="mb-14">
                            <h2 className="text-title font-cerapro_medium mb-6">
                                {section.title}
                            </h2>
                            <ul className="list-disc ms-10 font-cerapro_light body-text space-y-2">
                                {section.content.map((item, idx) => (<li key={idx}>{item}</li>))}
                            </ul>
                        </div>))}
                </div>
            </section>

            {/* Book Stay */}
            <section>
                <BookStayText/>
            </section>
        </>)
}

export default TermsConditions