import CustomTitle from '@/components/shared/title'
import BookStayText from "@/components/shared/bookStayText";
import React from "react";
import {termsSections} from "@/data/terms-n-condintions";

const TermsConditions = () => {
  return (
      <>
          {/* Hero Section */}
          <section className="section_gap_y section_gap_x pb-0 max-width">
              <CustomTitle
                  title={"TERMS AND CONDITIONS"}
                  description={<>
                      These Terms and Conditions outline the rules and regulations for using the services offered by
                      Hotel
                      Grand Minaro.
                      By booking a stay, using our amenities, or accessing our website, you agree to comply with these
                      terms. Please read
                      them carefully before proceeding.
                  </>}
              />

              <div className="px-10 3xl:px-32 mx-auto pt-5 md:pt-10">
                  {termsSections.map((section, index) => (
                      <div key={index} className="mb-14">
                          <h2 className="text-title font-cerapro_medium mb-6">
                              {section.title}
                          </h2>
                          <ul className="list-disc ms-10 font-cerapro_light body-text space-y-2">
                              {section.content.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </section>

          {/* Book Stay */}
          <section>
              <BookStayText/>
          </section>
      </>
  )
}

export default TermsConditions